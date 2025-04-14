import fs from "fs/promises";
import path from "path";

const fileMap = {};

async function processMarkdownFiles(rootDir) {
  const entries = await fs.readdir(rootDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(rootDir, entry.name);

    if (entry.isDirectory()) {
      await processMarkdownFiles(fullPath);
    } else if (path.extname(entry.name) === ".md") {
      fileMap[entry.name.replace(".md", ".html")] = fullPath;
    }
  }
}

function customRelativePath(currentPath, targetPath) {
  const currentDir = path.dirname(currentPath);
  const targetDir = path.dirname(targetPath);
  const targetName = path.basename(targetPath, ".md");

  if (currentDir === targetDir) {
    return `./${targetName}`;
  } else {
    const folderName = path.basename(targetDir);
    return `../${folderName}/${targetName}`;
  }
}

async function updateLinksInMarkdownFiles() {
  for (const [htmlName, fullPath] of Object.entries(fileMap)) {
    let content = await fs.readFile(fullPath, "utf-8");

    content = content.replace(/\[([^\]]+)]\(([^)]+\.html)(\s+"[^"]*")?\)/g, (match, text, link, title = "") => {
      const targetPath = fileMap[link];
      if (!targetPath) return match;

      const relativeLink = customRelativePath(fullPath, targetPath);
      return `[${text}](${relativeLink}${title})`;
    });

    await fs.writeFile(fullPath, content, "utf-8");
  }
}

// 主流程
const root = "E:/Scripting/projects/yuelili.com/packages/docs.yuelili.com/src/content/docs/en/houdini-vex";

(async () => {
  await processMarkdownFiles(root);
  console.log("字典构建完成:", fileMap);
  await updateLinksInMarkdownFiles();
  console.log("Markdown 链接更新完成！");
})();
