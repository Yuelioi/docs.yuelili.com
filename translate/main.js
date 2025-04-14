import fs from "fs";

import remarkImages from "remark-images";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import remarkFrontmatter from "remark-frontmatter";
import { visitParents } from "unist-util-visit-parents";
import remarkGfm from "remark-gfm";

import { readdir, stat } from "fs/promises";
import { join, extname } from "path";

import { translate_deepseek, translate_deepl } from "./trasnlator.js";

/**
 * 递归查找指定目录下的所有 Markdown 文件
 * @param {string} rootDir - 要搜索的根目录
 * @returns {Promise<string[]>} Markdown 文件路径数组
 */
async function findMarkdownFiles(rootDir) {
  const results = [];

  try {
    const entries = await readdir(rootDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = join(rootDir, entry.name);

      if (entry.isDirectory()) {
        // if (entry.name === "general" || entry.name === "introduction" || entry.name.startsWith("_")) {
        //   continue;
        // }
        await findMarkdownFiles(fullPath);
      } else if (entry.isFile() && extname(entry.name).toLowerCase() === ".md") {
        console.log(`正在处理: ${fullPath}`);
        const input = fs.readFileSync(fullPath, "utf8");

        const translatedText = await translate_deepseek(input);
        await fs.writeFileSync(fullPath, translatedText, "utf-8");
      }
    }
  } catch (error) {
    console.warn(`[WARN] 无法访问目录 ${rootDir}: ${error.message}`);
  }

  return results;
}

// 使用示例
async function main() {
  try {
    const startDir = process.argv[2] || "E:\\Scripting\\projects\\yuelili.com\\packages\\docs.yuelili.com\\translate\\test";
    // const startDir = process.argv[2] || "E:\\Scripting\\projects\\yuelili.com\\packages\\docs.yuelili.com\\src\\content\\docs\\zh-cn\\houdini-vex";
    const mdFiles = await findMarkdownFiles(startDir);
  } catch (error) {
    console.error("发生错误:", error);
    process.exit(1);
  }
}

main();
