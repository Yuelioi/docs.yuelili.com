/**
 * 对比英文和中文文档的标题数量 判断是否少翻译
 */



import fs from 'fs/promises';
import path from 'path';
import fg from 'fast-glob';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const enDir = path.resolve(__dirname, '../src/content/docs/en');
const zhDir = path.resolve(__dirname, '../src/content/docs/zh-cn');

async function getMarkdownFiles(dir) {
  return await fg('**/*.md', { cwd: dir, onlyFiles: true });
}

function countHeadings(content) {
  const lines = content.split('\n');
  let h2 = 0;
  let h3 = 0;

  for (const line of lines) {
    if (/^##\s+/.test(line)) h2++;
    else if (/^###\s+/.test(line)) h3++;
  }

  return { h2, h3 };
}

async function compareDocs() {
  const enFiles = await getMarkdownFiles(enDir);
  const zhFiles = await getMarkdownFiles(zhDir);

  const commonFiles = enFiles.filter(f => zhFiles.includes(f));

  for (const file of commonFiles) {
    const enContent = matter(await fs.readFile(path.join(enDir, file), 'utf8')).content;
    const zhContent = matter(await fs.readFile(path.join(zhDir, file), 'utf8')).content;

    const enCount = countHeadings(enContent);
    const zhCount = countHeadings(zhContent);

    if (enCount.h2 !== zhCount.h2 || enCount.h3 !== zhCount.h3) {
      console.log(`❗ File: ${file}`);
      if (enCount.h2 !== zhCount.h2) {
        console.log(`  H2 count mismatch: EN=${enCount.h2}, ZH=${zhCount.h2}`);
      }
      if (enCount.h3 !== zhCount.h3) {
        console.log(`  H3 count mismatch: EN=${enCount.h3}, ZH=${zhCount.h3}`);
      }
      console.log();
    }
  }

  console.log('✅ Heading count comparison complete.');
}

compareDocs().catch(console.error);
