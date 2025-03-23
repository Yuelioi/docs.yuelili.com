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

import starlightGiscus from "starlight-giscus";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "月离文档",
      defaultLocale: "zh-cn",
      locales: {
        en: {
          label: "English",
        },
        "zh-cn": {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
      social: {
        github: "https://github.com/Yuelioi/docs.yuelili.com",
      },
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
