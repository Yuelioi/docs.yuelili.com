function rstTableToMarkdown(rstTable) {
  const lines = rstTable.trim().split("\n");
  const blocks = [];
  let currentBlock = [];

  // 分割表格为多个行块
  for (const line of lines) {
    if (line.startsWith("+")) {
      if (currentBlock.length > 0) {
        blocks.push(currentBlock);
        currentBlock = [];
      }
    } else if (line.startsWith("|")) {
      currentBlock.push(line);
    } else {
      currentBlock.push(line);
    }
  }

  // 处理标题行
  const headerBlock = blocks.find((b) => lines[lines.indexOf(b[0])] > lines.indexOf("+==============================+")) || blocks[0];
  const headerCells = processBlock(headerBlock);

  // 处理数据行
  const dataBlocks = blocks.filter((b) => b !== headerBlock);
  const dataRows = dataBlocks.map((block) => processBlock(block));

  // 构建Markdown表格
  const separator = `| ${headerCells.map(() => "---").join(" | ")} |`;
  const mdTable = [`| ${headerCells.join(" | ")} |`, separator, ...dataRows.map((row) => `| ${row.join(" | ")} |`)];

  return mdTable.join("\n");
}

function processBlock(block) {
  const columns = [];

  for (const line of block) {
    const cells = line
      .split("|")
      .slice(1, -1)
      .map((cell) => cell.trim());

    for (let i = 0; i < cells.length; i++) {
      if (!columns[i]) columns[i] = "";
      columns[i] += cells[i] ? `${cells[i]}\n` : "\n";
    }
  }

  return columns.map((col) => col.trimEnd().replace(/\n+/g, "<br>"));
}

import fs from "fs";

const rstMD = fs.readFileSync(
  "e:\\Scripting\\projects\\docs.yuelili.com\\src\\content\\docs\\en\\ae-expression\\general\\color-conversion.md",
  "utf8"
);

console.log(rstTableToMarkdown(rstMD));
