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

        // 读取文件内容
        let originalContent = fs.readFileSync(fullPath, "utf8");

        let updatedContent = originalContent;

        // 更新frontmatter
        if (!updatedContent.startsWith("---")) {
          updatedContent = frontMatter(updatedContent, fileName);
        }

        // 更新链接
        updatedContent = updatedContent.replace(/\[([^\]]+)\]\(([^)]+)\.md\)/g, (match, text, link) => {
          const adjustedLink = "../".repeat(parentDepth) + link;
          return `[${text}](${adjustedLink})`;
        });

        // 处理annotations
        updatedContent = handleAnnotations(updatedContent, fileName);

        // 处理table
        updatedContent = asciiTableToMarkdown(updatedContent, fileName);
        // 写回文件
        writeOutput(fullPath, updatedContent);
      } catch (err) {
        console.error(`❌ 处理文件失败: ${fullPath}`, err);
      }
    }
  }
}

function asciiTableToMarkdown(content, fileName) {
  // 使用正则表达式匹配完整的 ASCII 表格
  let lines = content.split("\n");

  lines.forEach((line, index) => {
    // 处理 +==+ 形式的表头

    if (line.trim().startsWith("+") && line.trim().endsWith("+")) {
      if (line.includes("===")) {
        const newLine = line.replace(/=/g, "-");
        lines[index] = newLine.replace(/\+/g, "|");
      }

      if (line.includes("----")) {
        lines[index] = "待移除";
      }
    }

    // 处理 |纯空格| 形式的分隔线
    if (/^\|(?:\s*\|)+\s*$/.test(line) && index < lines.length - 2) {
      lines[index] = "待移除";
    }
  });

  // 移除待移除行
  lines = lines.filter((line) => line !== "待移除");
  return lines.join("\n");
}

function handleAnnotations(text, fileName) {
  return text.replace(/^!!!\s+(\w+)(\s*\n[\t ]+.+)+/gm, (match, type, content) => {
    // 去除每行内容的前导空白（空格/tab）
    const cleaned = content.replace(/\n[\t ]+/g, "\n");

    return `:::${type}${cleaned}\n:::\n`;
  });
}

function frontMatter(content, fileName) {
  return (
    `---
title: ${fileName}
---
` + content
  );
}

function writeOutput(fullPath, content) {
  fs.writeFileSync(fullPath, content, "utf8");
  // console.log(`✅ 已更新: ${fullPath}`);
}

function main(targetDirectories) {
  // const targetDirectory = "E:\\Scripting\\projects\\docs.yuelili.com\\src\\content\\docs\\en\\ae-scripting";

  targetDirectories.forEach((targetDirectory) => {
    if (!fs.existsSync(targetDirectory)) {
      console.error(`目录不存在: ${targetDirectory}`);
      process.exit(1);
    }

    console.log(`开始处理目录: ${targetDirectory}`);
    processMarkdownFiles(targetDirectory);
    console.log("所有文件处理完成！");
  });
}

const aee = "E:\\Scripting\\projects\\docs.yuelili.com\\src\\content\\docs\\en\\ae-expression";
const aep = "E:\\Scripting\\projects\\docs.yuelili.com\\src\\content\\docs\\en\\ae-plugin";
const aes = "E:\\Scripting\\projects\\docs.yuelili.com\\src\\content\\docs\\en\\ae-scripting";
const jst = "E:\\Scripting\\projects\\docs.yuelili.com\\src\\content\\docs\\en\\javascript-tools";

const test = "E:\\Scripting\\projects\\docs.yuelili.com\\scripts";

const targetDirectories = [aee, aep, aes, jst];
// const targetDirectories = [test];

main(targetDirectories);
