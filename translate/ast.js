import fs from "fs";

import remarkImages from "remark-images";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import remarkFrontmatter from "remark-frontmatter";
import { visitParents } from "unist-util-visit-parents";
import remarkGfm from "remark-gfm";

import { readdir, stat } from "fs/promises";
import { join, extname } from "path";

const set = new Set();

/**
 * 翻译代码块中的注释
 * @param {string} input - 输入 Markdown 文本路径
 * @param {function[]} plugins - 插件数组
 * @returns {Promise<string>} 处理后的 Markdown 文本
 */
async function processMarkdown(input, plugins = []) {
  let parse = await unified().use(remarkParse).use(remarkGfm).use(remarkImages).use(remarkFrontmatter, ["yaml", "toml"]);
  plugins.forEach((plugin) => {
    parse.use(plugin);
  });

  return parse.use(remarkStringify).process(input);
}

/**
 * 收集所有节点类型
 * @docs https://github.com/syntax-tree/mdast#nodes
 * @returns {Promise<void>}
 */
function collectNodeTypes() {
  return async function (tree) {
    visitParents(tree, (node, ancestors, controller) => {
      set.add(node.type);
    });
  };
}

// 自定义 Remark 插件来翻译 Markdown
function myRemarkPluginToTranslate() {
  return async function (tree) {
    const nodes = [];

    // 第一阶段：收集所有需要翻译的节点

    // 如果跳过yaml块

    const skips = ["yaml", "toml", "thematicBreak", "html", "link", "code", "blockquote", "inlineCode", "image"];
    visitParents(tree, (node, ancestors, controller) => {
      // 跳过部分模块
      // if (node.type in skips) {
      //   return;
      // }
      set.add(node.type);

      // if (node.type === "tableCell") {
      //   if (node.children.any((child) => child.type in skips)) {
      //     return;
      //   }
      // }
      // if (node.type === "paragraph") {
      //   console.log(node);
      // }
      // 检查祖先节点中是否有 yaml 类型的节点
      // const inYAML = ancestors.some((ancestor) => ancestor.type === "yaml");
      // // 如果不在 YAML 块中才收集
      // if (!inYAML) {
      //   nodes.push(node);
      //   console.log(`发现待翻译节点: ${node.value.slice(0, 20)}`);
      // }
    });

    // visit(tree, "text", (node) => {
    //   nodes.push(node);
    //   console.log(`发现待翻译节点: ${node.value.slice(0, 20)}`);
    // });

    // 第二阶段：分批处理
    // const batchSize = 10; // 每批处理10个节点
    // for (let i = 0; i < nodes.length; i += batchSize) {
    //   const batch = nodes.slice(i, i + batchSize);
    //   await Promise.all(
    //     batch.map(async (node) => {
    //       try {
    //         // node.value = await translate_deepseek(node.value);
    //       } catch (error) {
    //         console.error(`节点翻译失败: ${error.message}`);
    //         node.value = "[TRANSLATION FAILED] " + node.value;
    //       }
    //     })
    //   );
    //   console.log(`已完成 ${Math.min(i + batchSize, nodes.length)}/${nodes.length}`);
    // }
  };
}

/**
 * 递归查找指定目录下的所有 Markdown 文件
 * @param {string} rootDir - 要搜索的根目录
 * @param {function[]} plugins - 插件数组
 */
async function findMarkdownFiles(rootDir, plugins = []) {
  try {
    const entries = await readdir(rootDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(rootDir, entry.name);

      if (entry.isDirectory()) {
        await findMarkdownFiles(fullPath, plugins);
      } else if (entry.isFile() && extname(entry.name).toLowerCase() === ".md") {
        const input = fs.readFileSync(fullPath, "utf8");

        processMarkdown(input, plugins).catch((err) => console.error("致命错误:", err));
        return;
      }
    }
  } catch (error) {
    console.warn(`[WARN] 无法访问目录 ${rootDir}: ${error.message}`);
    return;
  }
}

async function main(plugins = []) {
  try {
    const startDir = process.argv[2] || "E:\\Scripting\\projects\\docs.yuelili.com\\src\\content\\docs\\en";
    const mdFiles = await findMarkdownFiles(startDir, plugins);
  } catch (error) {
    console.error("发生错误:", error);
    process.exit(1);
  }
  console.log(set);
}

main([collectNodeTypes]);
