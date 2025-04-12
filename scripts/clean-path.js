/**
 * 去除文件 文件夹的空格以及大写转小写
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// 更严格的名称规范化函数
const normalizeName = (name) => {
  return name
    .replace(/[(){}[\]]/g, "") // 移除所有括号
    .replace(/\s+/g, "-") // 空格转连字符
    .replace(/-+/g, "-") // 合并连续连字符
    .replace(/^-+|-+$/g, "") // 移除首尾连字符
    .toLowerCase(); // 统一小写
};

function processFilesAndFolders(rootDir) {
  const entries = fs.readdirSync(rootDir, { withFileTypes: true });

  // 反向遍历确保先处理深层内容
  for (const entry of entries.reverse()) {
    const oldPath = path.join(rootDir, entry.name);

    // 先递归处理子目录
    if (entry.isDirectory()) {
      processFilesAndFolders(oldPath);
    }

    // 规范化名称
    const newName = normalizeName(entry.name);
    if (newName === "") {
      console.error(`Invalid name after normalization: ${oldPath}`);
      continue;
    }

    // 执行重命名
    if (newName !== entry.name) {
      const newPath = path.join(rootDir, newName);

      try {
        fs.renameSync(oldPath, newPath);
        console.log(`Renamed: ${oldPath} -> ${newPath}`);
      } catch (error) {
        console.error(`Error renaming ${oldPath}:`, error.message);
      }
    }
  }
}

// 使用示例
const root = "E:/Scripting/projects/yuelili.com/packages/docs.yuelili.com/src/content/docs/zh-cn/houdini-vex";
processFilesAndFolders(root);
