import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import fs from "fs";
import { Ollama } from "ollama";
import pLimit from "p-limit";
const input = fs.readFileSync("example.md", "utf8");

const ollama = new Ollama({ host: "http://192.168.5.5:11434" });

const concurrencyLimit = pLimit(5); // 同时最多5个请求

async function translate(text) {
  return concurrencyLimit(async () => {
    const maxRetries = 3;
    let attempt = 0;

    while (attempt < maxRetries) {
      try {
        const response = await ollama.chat({
          model: "deepseek-r1:14b",
          messages: [
            {
              role: "system",
              content: "你是一位专业翻译，请把英文翻译为中文,请严格保留所有Markdown格式,保持代码块完整,维持空格和换行以及其他字符的原貌。",
            },
            { role: "user", content: text },
          ],
          stream: false,
        });

        console.log(`翻译成功: ${text.slice(0, 20)}...`);
        return response.message.content;
      } catch (error) {
        attempt++;
        console.warn(`第 ${attempt} 次重试: ${text.slice(0, 20)}...`);
        if (attempt === maxRetries) {
          throw new Error(`翻译失败: ${error.message}`);
        }
        await new Promise((res) => setTimeout(res, 1000 * attempt)); // 指数退避
      }
    }
  });
}

// 自定义 Remark 插件来翻译 Markdown
function myRemarkPluginToTranslate() {
  return async function (tree) {
    const nodes = [];

    // 第一阶段：收集所有需要翻译的节点
    visit(tree, "text", (node) => {
      nodes.push(node);
    });

    // 第二阶段：分批处理
    const batchSize = 10; // 每批处理10个节点
    for (let i = 0; i < nodes.length; i += batchSize) {
      const batch = nodes.slice(i, i + batchSize);
      await Promise.all(
        batch.map(async (node) => {
          try {
            node.value = await translate(node.value);
          } catch (error) {
            console.error(`节点翻译失败: ${error.message}`);
            node.value = "[TRANSLATION FAILED] " + node.value;
          }
        })
      );
      console.log(`已完成 ${Math.min(i + batchSize, nodes.length)}/${nodes.length}`);
    }
  };
}

// 处理 Markdown
async function processMarkdown() {
  const file = await unified()
    .use(remarkParse)
    .use(myRemarkPluginToTranslate) // 在这里翻译文本
    .use(remarkStringify) // 重新转换为 Markdown
    .process(input);

  fs.writeFileSync("example_translated.md", String(file));
}

processMarkdown()
  .then(() => console.log("转换完成"))
  .catch((err) => console.error("致命错误:", err))
  .finally(() => process.exit());

// // translate("Hello, world!").then(console.log);
// // translate("Hello, world!").then(console.log);
