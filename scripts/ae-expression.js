import fs from "fs";
import path from "path";

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

        // 修改链接，将 .md 替换为正确的上一级路径
        const updatedContent = originalContent.replace(/\[([^\]]+)\]\(([^)]+)\.md\)/g, (match, text, link) => {
          // 计算相对路径
          const adjustedLink = "../".repeat(parentDepth) + link;
          return `[${text}](${adjustedLink})`;
        });

        // 合并新内容
        const newContent = frontMatter + updatedContent;

        // 写回文件
        fs.writeFileSync(fullPath, newContent, "utf8");
        console.log(`✅ 已更新: ${fullPath}`);
      } catch (err) {
        console.error(`❌ 处理文件失败: ${fullPath}`, err);
      }
    }
  }
}

const targetDirectory = "E:\\Scripting\\projects\\docs.yuelili.com\\src\\content\\docs\\en\\ae-expression";

if (!fs.existsSync(targetDirectory)) {
  console.error(`目录不存在: ${targetDirectory}`);
  process.exit(1);
}

console.log(`开始处理目录: ${targetDirectory}`);
processMarkdownFiles(targetDirectory);
console.log("所有文件处理完成！");
