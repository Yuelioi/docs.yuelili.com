/**
 * 此脚本用于syncthing同步 在build之后运行即可
 */

import fs from "fs";
import path from "path";
import { promisify } from "util";
import { fileURLToPath } from "url";

import fse from "fs-extra";

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const unlink = promisify(fs.unlink);
const rmdir = promisify(fs.rmdir);
const rename = promisify(fs.rename);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_DIR = path.join(__dirname, "../", "dist/astro");
const TARGET_DIR = path.join(__dirname, "../", "dist/sync");
const KEEP_DIR = ".stfolder";

async function cleanTargetDir() {
  try {
    const targetExists = fs.existsSync(TARGET_DIR);
    if (!targetExists) {
      console.log("目标目录不存在，无需清理");
      return;
    }

    const items = await readdir(TARGET_DIR);

    for (const item of items) {
      if (item === KEEP_DIR) continue;

      const itemPath = path.join(TARGET_DIR, item);
      const itemStat = await stat(itemPath);

      if (itemStat.isDirectory()) {
        await deleteRecursive(itemPath);
      } else {
        await unlink(itemPath);
        console.log(`已删除文件: ${itemPath}`);
      }
    }
  } catch (error) {
    throw new Error(`清理目录失败: ${error.message}`);
  }
}

async function deleteRecursive(dirPath) {
  const items = await readdir(dirPath);

  for (const item of items) {
    const itemPath = path.join(dirPath, item);
    const itemStat = await stat(itemPath);

    if (itemStat.isDirectory()) {
      await deleteRecursive(itemPath);
    } else {
      await unlink(itemPath);
    }
  }

  await rmdir(dirPath);
  console.log(`已删除目录: ${dirPath}`);
}

async function moveFiles() {
  try {
    const sourceExists = fse.existsSync(SOURCE_DIR);
    if (!sourceExists) {
      throw new Error("源目录不存在");
    }

    fse.ensureDirSync(TARGET_DIR); // 自动创建目标目录（等效于 mkdir -p）

    const items = await fse.readdir(SOURCE_DIR);
    console.log(`开始移动 ${items.length} 个项目...`);

    let count = 0;
    for (const item of items) {
      const sourcePath = path.join(SOURCE_DIR, item);
      const targetPath = path.join(TARGET_DIR, item);

      await fse.copy(sourcePath, targetPath, { overwrite: true });
      console.log(`[${++count}/${items.length}] 已移动: ${item}`);
    }
  } catch (error) {
    throw new Error(`文件移动失败: ${error.message}`, { cause: error });
  }
}

async function main() {
  try {
    console.log("开始清理目标目录...");
    await cleanTargetDir();

    console.log("\n开始移动文件...");
    await moveFiles();

    console.log("\n操作完成 ✅");
  } catch (error) {
    console.error("\n发生错误 ❌:", error.message);
    process.exit(1);
  }
}

// 执行脚本
main();
