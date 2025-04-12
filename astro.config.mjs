// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";
import starlightSidebarTopics from "starlight-sidebar-topics";

// navs
import { aeExpression } from "./src/nav/ae-expression";
import { aeScripting } from "./src/nav/ae-scripting";
import { javascriptTools } from "./src/nav/javascript-tools";
import { aePlugin } from "./src/nav/ae-plugin";
import { aiScripting } from "./src/nav/ai-scripting";
import { prScripting } from "./src/nav/pr-scripting";
import { prPlugin } from "./src/nav/pr-plugin";
// import { houdiniVexNav } from "./src/nav/houdini-vex";

import starlightGiscus from "starlight-giscus";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "dracula",
      langs: ["applescript", "vb", "actionscript-3", "javascsript"],
      langAlias: {
        applescript: "applescript",
        actionscript: "actionscript-3",
        vbscript: "vb",
        none: "text",
        vex: "cpp",
      },
      defaultColor: false,
    },
  },

  integrations: [
    starlight({
      title: "月离文档",
      defaultLocale: "zh-CN",
      locales: {
        en: {
          label: "English",
        },
        "zh-CN": {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/Yuelioi/docs.yuelili.comt" }],
      components: {
        Header: "./src/components/Header.astro",
        TwoColumnContent: "./src/components/TwoColumnContent.astro",
      },
      plugins: [
        starlightSidebarTopics(
          // {
          //   exclude: ["/ae-scripting/**/*"],
          // },
          [aeExpression, aeScripting, javascriptTools, aePlugin, prScripting, prPlugin, aiScripting]
        ),

        starlightGiscus({
          repo: "Yuelioi/docs.yuelili.com",
          repoId: "R_kgDOOKmEWg",
          category: "Comments",
          categoryId: "DIC_kwDOOKmEWs4CoQZJ",
        }),
      ],
    }),
  ],
  outDir: "dist/astro",
  vite: {
    plugins: [tailwindcss()],
    build: {
      emptyOutDir: false, // 禁止清空输出目录
    },
  },
});
