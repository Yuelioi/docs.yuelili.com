import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



// 配置部分

const prefix = '/zh-cn/houdini-vex';


const docsRoot = path.resolve(__dirname, '..', 'src/content/docs' , `.${prefix}`);
const dryRun = false; // true 表示只打印，不写入
const mdFiles = [];

// 递归扫描 .md 文件
async function scanDir(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await scanDir(full);
    } else if (entry.name.endsWith('.md')) {
      mdFiles.push(full);
    }
  }
}

// 处理每个 markdown 文件
async function processFile(filePath) {
  const raw = await fs.readFile(filePath, 'utf8');
  const baseDir = path.dirname(filePath);
  let changed = false;

  const updated = raw.replace(/\[([^\]]+)\]\((\.{1,2}\/[^\s\)]+)(\s+"[^"]*")?\)/g, (match, text, link, title = '') => {
    // 跳过 .html 链接
    if (link.endsWith('.html')) return match;

    const absPath = path.resolve(baseDir, link);
    const relToDocsRoot = path.relative(docsRoot, absPath).replace(/\\/g, '/');

    if (relToDocsRoot.startsWith('..')) return match;

    const finalPath = `${prefix}/${relToDocsRoot}`;
    const result = `[${text}](${finalPath}${title || ''})`;

    if (match !== result) {
      changed = true;
      console.log(`🔗 ${path.relative(docsRoot, filePath)}:`);
      console.log(`    ${match}`);
      console.log(` →  ${result}`);
    }

    return result;
  });

  if (changed && !dryRun) {
    await fs.writeFile(filePath, updated, 'utf8');
    console.log(`✅ Updated: ${path.relative(docsRoot, filePath)}\n`);
  }
}

async function main() {
  await scanDir(docsRoot);
  for (const file of mdFiles) {
    await processFile(file);
  }
}

main().catch(err => {
  console.error('❌ Error:', err);
});
