/**
 * 该脚本将替换markdown的title未当前文件名
 */

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import grayMatter from "gray-matter"; // 需要先安装 npm install gray-matter

async function processMarkdownFiles(rootDir) {
  const entries = await fs.readdir(rootDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(rootDir, entry.name);

    if (entry.isDirectory()) {
      await processMarkdownFiles(fullPath);
    } else if (path.extname(entry.name) === ".md") {
      try {
        // 读取文件内容
        const fileContent = await fs.readFile(fullPath, "utf8");

        // 解析front matter
        const { data, content } = grayMatter(fileContent);

        // 获取基础文件名
        const baseName = path.basename(entry.name, ".md");

        // 更新title（保留其他元数据）
        const newData = {
          ...data,
          title: baseName.replace(/-/g, " "),
        };

        // 生成新内容
        const newContent = grayMatter.stringify(content, newData);

        // 写入文件
        await fs.writeFile(fullPath, newContent);
        console.log(`Updated: ${fullPath}`);
      } catch (error) {
        console.error(`Error processing ${fullPath}:`, error.message);
      }
    }
  }
}

// 使用示例
const root = "E:/Scripting/projects/yuelili.com/packages/docs.yuelili.com/src/content/docs/zh-cn/houdini-vex";
processMarkdownFiles(root)
  .then(() => console.log("Processing completed"))
  .catch(console.error);
