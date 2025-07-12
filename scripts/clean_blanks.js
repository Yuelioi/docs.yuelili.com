import fs from 'fs/promises';
import path from 'path';

/**
 * 去除md文件中的空行、空格、连续的 - 符号
 * 
 */

/**
 * 压缩连续的 - 符号到最少 3 个
 * @param {string} line - 行内容
 * @returns {string} 压缩后的行
 */
function compressDashes(line) {
  // 处理表格分隔线中的 --- 部分
  if (line.includes('|')) {
    return line.replace(/:?-{3,}:?/g, (match) => {
      const hasLeftColon = match.startsWith(':');
      const hasRightColon = match.endsWith(':');
      let result = '---';
      if (hasLeftColon) result = ':' + result;
      if (hasRightColon) result = result + ':';
      return result;
    });
  }
  
  // 处理纯分隔线 (如 ------ 变成 ---)
  if (/^\s*-{3,}\s*$/.test(line)) {
    return line.replace(/-{3,}/, '---');
  }
  
  return line;
}

/**
 * 清理 Markdown 文件内容
 * @param {string} content - 原始文件内容
 * @returns {string} 清理后的内容
 */
function cleanMarkdownContent(content) {
  const lines = content.split('\n');
  const cleanedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // 移除行尾空格
    let cleanedLine = line.replace(/[ \t]+$/, '');
    
    // 压缩连续的 - 符号
    cleanedLine = compressDashes(cleanedLine);
    
    // 处理表格行的空格优化
    if (cleanedLine.includes('|')) {
      // 清理表格中的多余空格，但保持可读性
      cleanedLine = cleanedLine
        .replace(/\|\s{2,}/g, '| ')  // 管道符后最多保留一个空格
        .replace(/\s{2,}\|/g, ' |'); // 管道符前最多保留一个空格
    } else {
      // 非表格行：移除连续的多个空格
      cleanedLine = cleanedLine.replace(/[ \t]{2,}/g, ' ');
    }
    
    cleanedLines.push(cleanedLine);
  }
  
  // 处理多余的空行
  const result = cleanedLines
    .join('\n')
    // 移除多余的空行，保留最多一个空行
    .replace(/\n\s*\n\s*\n+/g, '\n\n')
    // 移除文件开头的空行
    .replace(/^\s+/, '')
    // 移除文件结尾的空行
    .replace(/\s+$/, '');
  
  // 确保文件以换行符结尾
  return result + '\n';
}

/**
 * 递归遍历文件夹，查找所有 .md 文件
 * @param {string} dir - 目录路径
 * @returns {Promise<string[]>} MD文件路径数组
 */
async function findMarkdownFiles(dir) {
  const files = [];
  
  try {
    const items = await fs.readdir(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      
      if (item.isDirectory()) {
        // 递归处理子目录
        const subFiles = await findMarkdownFiles(fullPath);
        files.push(...subFiles);
      } else if (item.isFile() && path.extname(item.name).toLowerCase() === '.md') {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`读取目录失败: ${dir}`, error.message);
  }
  
  return files;
}

/**
 * 处理单个 Markdown 文件
 * @param {string} filePath - 文件路径
 */
async function processMarkdownFile(filePath) {
  try {
    console.log(`处理文件: ${filePath}`);
    
    // 读取原始文件
    const originalContent = await fs.readFile(filePath, 'utf-8');
    const originalSize = originalContent.length;
    
    // 清理内容
    const cleanedContent = cleanMarkdownContent(originalContent);
    const cleanedSize = cleanedContent.length;
    
    // 只有内容发生变化时才写入文件
    if (originalContent !== cleanedContent) {
      await fs.writeFile(filePath, cleanedContent, 'utf-8');
      const reduction = ((originalSize - cleanedSize) / originalSize * 100).toFixed(1);
      console.log(`  ✓ 已清理，大小减少 ${reduction}% (${originalSize} → ${cleanedSize} 字符)`);
    } else {
      console.log(`  - 无需清理`);
    }
    
  } catch (error) {
    console.error(`处理文件失败: ${filePath}`, error.message);
  }
}

/**
 * 主函数
 */
async function main() {
  const targetDir = 'src/content/docs';
  
  console.log(`开始清理 ${targetDir} 目录下的 Markdown 文件...`);
  console.log('='.repeat(50));
  
  try {
    // 检查目录是否存在
    await fs.access(targetDir);
    
    // 查找所有 MD 文件
    const mdFiles = await findMarkdownFiles(targetDir);
    
    if (mdFiles.length === 0) {
      console.log('未找到任何 Markdown 文件');
      return;
    }
    
    console.log(`找到 ${mdFiles.length} 个 Markdown 文件`);
    console.log('='.repeat(50));
    
    // 处理每个文件
    for (const filePath of mdFiles) {
      await processMarkdownFile(filePath);
    }
    
    console.log('='.repeat(50));
    console.log(`清理完成！共处理 ${mdFiles.length} 个文件`);
    
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(`错误: 目录 "${targetDir}" 不存在`);
    } else {
      console.error('执行过程中发生错误:', error.message);
    }
  }
}

// 运行脚本
main();