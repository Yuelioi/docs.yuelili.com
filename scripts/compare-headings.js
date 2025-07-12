const fs = require('fs');
const path = require('path');
const fg = require('fast-glob');
const matter = require('gray-matter');

const enDir = path.resolve(__dirname, 'src/content/docs/en');
const zhDir = path.resolve(__dirname, 'src/content/docs/zh');

// 匹配所有 md 文件
async function getMarkdownFiles(dir) {
  return await fg('**/*.md', { cwd: dir, onlyFiles: true });
}

// 提取 ## 和 ### 标题
function extractHeadings(content) {
  const lines = content.split('\n');
  const headings = [];

  for (let line of lines) {
    if (/^#{2,3}\s+/.test(line)) {
      const level = line.startsWith('###') ? 3 : 2;
      const text = line.replace(/^#{2,3}\s+/, '').trim();
      headings.push({ level, text });
    }
  }

  return headings;
}

// 主流程
async function compareDocs() {
  const enFiles = await getMarkdownFiles(enDir);
  const zhFiles = await getMarkdownFiles(zhDir);

  const commonFiles = enFiles.filter(f => zhFiles.includes(f));

  for (const file of commonFiles) {
    const enContent = fs.readFileSync(path.join(enDir, file), 'utf8');
    const zhContent = fs.readFileSync(path.join(zhDir, file), 'utf8');

    const enHeadings = extractHeadings(matter(enContent).content);
    const zhHeadings = extractHeadings(matter(zhContent).content);

    const enSet = new Set(enHeadings.map(h => h.text));
    const zhSet = new Set(zhHeadings.map(h => h.text));

    const missingInZh = [...enSet].filter(text => !zhSet.has(text));
    const missingInEn = [...zhSet].filter(text => !enSet.has(text));

    if (missingInZh.length || missingInEn.length) {
      console.log(`❗ File: ${file}`);

      if (missingInZh.length) {
        console.log('  Missing in ZH:');
        missingInZh.forEach(h => console.log(`    - ${h}`));
      }

      if (missingInEn.length) {
        console.log('  Missing in EN:');
        missingInEn.forEach(h => console.log(`    - ${h}`));
      }

      console.log();
    }
  }

  console.log('✅ Done comparing headings.');
}

compareDocs().catch(console.error);
