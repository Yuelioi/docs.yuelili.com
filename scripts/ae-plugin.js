import fs from "fs";
import path from "path";

const editPath = "https://github.com/Yuelioi/docs.yuelili.com/edit/main/src/content/docs/";

function processMarkdownFiles(dirPath, parentDepth = 0) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      processMarkdownFiles(fullPath, parentDepth + 1); // 递归处理子目录
    } else if (entry.isFile() && path.extname(entry.name).toLowerCase() === ".md") {
      try {
        const fileName = path.basename(entry.name, ".md");

        // 创建 Front Matter
        const frontMatter = `---
title: ${fileName}
---

`;

        // 读取文件内容
        let originalContent = fs.readFileSync(fullPath, "utf8");
        if (originalContent.startsWith("---")) {
          console.warn(`⚠️ 已有 Front Matter: ${fullPath}`);
        } else {
          const updatedContent = originalContent.replace(/\[([^\]]+)\]\(([^)]+)\.md\)/g, (match, text, link) => {
            // 计算相对路径
            const adjustedLink = "../".repeat(parentDepth) + link;
            return `[${text}](${adjustedLink})`;
          });

          const newContent = frontMatter + updatedContent;

          fs.writeFileSync(fullPath, newContent, "utf8");
          console.log(`✅ 已更新: ${fullPath}`);
        }
      } catch (err) {
        console.error(`❌ 处理文件失败: ${fullPath}`, err);
      }
    }
  }
}

const targetDirectory = "E:\\Scripting\\projects\\docs.yuelili.com\\src\\content\\docs\\en\\ae-plugin";

if (!fs.existsSync(targetDirectory)) {
  console.error(`目录不存在: ${targetDirectory}`);
  process.exit(1);
}

console.log(`开始处理目录: ${targetDirectory}`);
processMarkdownFiles(targetDirectory);
console.log("所有文件处理完成！");
