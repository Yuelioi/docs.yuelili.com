import fs from "fs";
import path from "path";
import { promisify } from "util";

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const unlink = promisify(fs.unlink);
const rmdir = promisify(fs.rmdir);
const rename = promisify(fs.rename);

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
    const sourceExists = fs.existsSync(SOURCE_DIR);
    if (!sourceExists) {
      throw new Error("源目录不存在");
    }

    if (!fs.existsSync(TARGET_DIR)) {
      fs.mkdirSync(TARGET_DIR, { recursive: true });
    }

    const items = await readdir(SOURCE_DIR);

    for (const item of items) {
      const sourcePath = path.join(SOURCE_DIR, item);
      const targetPath = path.join(TARGET_DIR, item);

      await rename(sourcePath, targetPath);
      console.log(`已移动: ${sourcePath} → ${targetPath}`);
    }
  } catch (error) {
    throw new Error(`文件移动失败: ${error.message}`);
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
