import OpenAI from "openai";

import { Ollama } from "ollama";
import pLimit from "p-limit";
import * as deepl from "deepl-node";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

const ollama = new Ollama({ host: "http://192.168.5.5:11434" });

const concurrencyLimit = pLimit(5); // 同时最多5个请求

dotenv.config();
const translator = new deepl.Translator(process.env["DEEPL_KEYS"]);

const openai = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: process.env["DEEPSEEK_API_KEY"],
});

export async function translate_deepseek(text) {
  return concurrencyLimit(async () => {
    const maxRetries = 3;
    let attempt = 0;

    while (attempt < maxRetries) {
      try {
        const prompt = `将以下文本翻译成中文。请保持格式不变:\n\n${text}`;
        const systemContent = await fs.readFileSync("./translate/translator/system.md", "utf-8");
        const translatedContent = await fs.readFileSync("./translate/translator/translate.md", "utf-8");
        const assistantContent = await fs.readFileSync("./translate/translator/assistant.md", "utf-8");

        const data = {
          model: "deepseek-chat",
          messages: [
            { role: "system", content: systemContent },
            {
              role: "user",
              content: `请将以下文本翻译成英文。请保持格式不变:\n\n${assistantContent}`,
            },
            { role: "assistant", content: translatedContent },
            { role: "user", content: prompt },
          ],
        };

        const completion = await openai.chat.completions.create(data);

        return completion.choices[0].message.content;
      } catch (error) {
        attempt++;
        console.warn(`第 ${attempt} 次重试: ${text.slice(0, 20)}...`);
        if (attempt === maxRetries) {
          throw new Error(`翻译失败: ${error.message}`);
        }
        await new Promise((res) => setTimeout(res, 1000 * attempt));
      }
    }
  });
}

async function translate_ollama(text) {
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

export async function translate_deepl(text) {
  (async () => {
    const result = await translator.translateText(text, null, "zh-hans");
    console.log(result.text);
  })();
}

// (async () => {
//   const text = await fs.readFileSync("./translate/test/example.md", "utf-8");

//   const translatedText = await translate_deepseek(text);
//   await fs.writeFileSync("./translate/test/example.md", translatedText, "utf-8");
// })();
