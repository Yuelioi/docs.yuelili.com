// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";
import starlightSidebarTopics from "starlight-sidebar-topics";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      title: "AE脚本文档",
      defaultLocale: "en",
      locales: {
        // 英文文档在 `src/content/docs/en/` 中。
        en: {
          label: "English",
        },
        // 简体中文文档在 `src/content/docs/zh-cn/` 中。
        "zh-cn": {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
      social: {
        github: "https://github.com/withastro/starlight",
      },
      components: {
        Header: "./src/components/Header.astro",
      },
      plugins: [
        starlightSidebarTopics([
          {
            label: "ae-expression",
            link: "ae-expression/introduction/changelog",
            icon: "open-book",
            items: [
              {
                label: "Introduction",
                items: ["ae-expression/introduction/changelog", "ae-expression/introduction/resources", "ae-expression/introduction/examples"],
              },
              {
                label: "General",
                items: [
                  "ae-expression/general/general",
                  "ae-expression/general/global",
                  "ae-expression/general/time-conversion",
                  "ae-expression/general/vector-math",
                  "ae-expression/general/random-numbers",
                  "ae-expression/general/interpolation",
                  "ae-expression/general/color-conversion",
                  "ae-expression/general/other-math",
                ],
              },
              {
                label: "Objects",
                items: [
                  "ae-expression/objects/project",
                  "ae-expression/objects/comp",
                  "ae-expression/objects/footage",
                  "ae-expression/objects/camera",
                  "ae-expression/objects/light",
                  "ae-expression/objects/propertygroup",
                  "ae-expression/objects/effect",
                  "ae-expression/objects/mask",
                  "ae-expression/objects/property",
                  "ae-expression/objects/marker-property",
                  "ae-expression/objects/path-property",
                  "ae-expression/objects/key",
                  "ae-expression/objects/markerkey",
                ],
              },
              {
                label: "Layer",
                items: [
                  "ae-expression/layer/layer",
                  "ae-expression/layer/sub-objects",
                  "ae-expression/layer/general",
                  "ae-expression/layer/properties",
                  "ae-expression/layer/layer-space-transforms",
                  "ae-expression/layer/threed",
                ],
              },
              {
                label: "Text",
                items: ["ae-expression/text/text", "ae-expression/text/sourcetext", "ae-expression/text/style"],
              },
            ],
          },
          {
            label: "ae-scripting",
            link: "ae-scripting/introduction/overview",
            icon: "information",
            items: [
              {
                label: "Introduction",
                items: [
                  "ae-scripting/introduction/overview",
                  "ae-scripting/introduction/javascript",
                  "ae-scripting/introduction/changelog",
                  "ae-scripting/introduction/objectmodel",
                  "ae-scripting/introduction/classhierarchy",
                ],
              },
              {
                label: "General",
                items: [
                  "ae-scripting/general/globals",
                  "ae-scripting/general/application",
                  "ae-scripting/general/project",
                  "ae-scripting/general/system",
                ],
              },
              {
                label: "Item",
                items: [
                  "ae-scripting/item/item",
                  "ae-scripting/item/itemcollection",
                  "ae-scripting/item/avitem",
                  "ae-scripting/item/compitem",
                  "ae-scripting/item/folderitem",
                  "ae-scripting/item/footageitem",
                ],
              },
              {
                label: "Layer",
                items: [
                  "ae-scripting/layer/layer",
                  "ae-scripting/layer/layercollection",
                  "ae-scripting/layer/avlayer",
                  "ae-scripting/layer/cameralayer",
                  "ae-scripting/layer/lightlayer",
                  "ae-scripting/layer/shapelayer",
                  "ae-scripting/layer/textlayer",
                  "ae-scripting/layer/threedmodellayer",
                ],
              },
              {
                label: "Property",
                items: [
                  "ae-scripting/property/property",
                  "ae-scripting/property/propertybase",
                  "ae-scripting/property/propertygroup",
                  "ae-scripting/property/maskpropertygroup",
                ],
              },
              {
                label: "Render Queue",
                items: [
                  "ae-scripting/renderqueue/renderqueue",
                  "ae-scripting/renderqueue/rqitemcollection",
                  "ae-scripting/renderqueue/renderqueueitem",
                  "ae-scripting/renderqueue/omcollection",
                  "ae-scripting/renderqueue/outputmodule",
                ],
              },
              {
                label: "Sources",
                items: [
                  "ae-scripting/sources/filesource",
                  "ae-scripting/sources/footagesource",
                  "ae-scripting/sources/placeholdersource",
                  "ae-scripting/sources/solidsource",
                ],
              },
              {
                label: "Text",
                items: [
                  "ae-scripting/text/characterrange",
                  "ae-scripting/text/composedlinerange",
                  "ae-scripting/text/fontobject",
                  "ae-scripting/text/fontsobject",
                  "ae-scripting/text/paragraphrange",
                  "ae-scripting/text/textdocument",
                ],
              },
              {
                label: "Other",
                items: [
                  "ae-scripting/other/collection",
                  "ae-scripting/other/importoptions",
                  "ae-scripting/other/keyframeease",
                  "ae-scripting/other/markervalue",
                  "ae-scripting/other/preferences",
                  "ae-scripting/other/settings",
                  "ae-scripting/other/shape",
                  "ae-scripting/other/view",
                  "ae-scripting/other/viewer",
                  "ae-scripting/other/viewoptions",
                ],
              },
              {
                label: "Match Names",
                items: [
                  {
                    label: "Layers",
                    items: [
                      "ae-scripting/matchnames/layer/avlayer",
                      "ae-scripting/matchnames/layer/3dlayer",
                      "ae-scripting/matchnames/layer/cameralayer",
                      "ae-scripting/matchnames/layer/lightlayer",
                      "ae-scripting/matchnames/layer/textlayer",
                      "ae-scripting/matchnames/layer/shapelayer",
                      "ae-scripting/matchnames/layer/layerstyles",
                    ],
                  },
                  {
                    label: "Effects",
                    items: ["ae-scripting/matchnames/effects/firstparty"],
                  },
                ],
              },
            ],
          },
        ]),
      ],
      // sidebar: [
      //   {
      //     label: "Introduction",
      //     items: [
      //       "introduction/overview",
      //       "introduction/javascript",
      //       "introduction/changelog",
      //       "introduction/objectmodel",
      //       "introduction/classhierarchy",
      //     ],
      //   },
      //   {
      //     label: "General",
      //     items: ["general/globals", "general/application", "general/project", "general/system"],
      //   },
      //   {
      //     label: "Item",
      //     items: ["item/item", "item/itemcollection", "item/avitem", "item/compitem", "item/folderitem", "item/footageitem"],
      //   },
      //   {
      //     label: "Layer",
      //     items: [
      //       "layer/layer",
      //       "layer/layercollection",
      //       "layer/avlayer",
      //       "layer/cameralayer",
      //       "layer/lightlayer",
      //       "layer/shapelayer",
      //       "layer/textlayer",
      //       "layer/threedmodellayer",
      //     ],
      //   },
      //   {
      //     label: "Property",
      //     items: ["property/property", "property/propertybase", "property/propertygroup", "property/maskpropertygroup"],
      //   },
      //   {
      //     label: "Render Queue",
      //     items: [
      //       "renderqueue/renderqueue",
      //       "renderqueue/rqitemcollection",
      //       "renderqueue/renderqueueitem",
      //       "renderqueue/omcollection",
      //       "renderqueue/outputmodule",
      //     ],
      //   },
      //   {
      //     label: "Sources",
      //     items: ["sources/filesource", "sources/footagesource", "sources/placeholdersource", "sources/solidsource"],
      //   },
      //   {
      //     label: "Text",
      //     items: ["text/characterrange", "text/composedlinerange", "text/fontobject", "text/fontsobject", "text/paragraphrange", "text/textdocument"],
      //   },
      //   {
      //     label: "Other",
      //     items: [
      //       "other/collection",
      //       "other/importoptions",
      //       "other/keyframeease",
      //       "other/markervalue",
      //       "other/preferences",
      //       "other/settings",
      //       "other/shape",
      //       "other/view",
      //       "other/viewer",
      //       "other/viewoptions",
      //     ],
      //   },
      //   {
      //     label: "Match Names",
      //     items: [
      //       {
      //         label: "Layers",
      //         items: [
      //           "matchnames/layer/avlayer",
      //           "matchnames/layer/3dlayer",
      //           "matchnames/layer/cameralayer",
      //           "matchnames/layer/lightlayer",
      //           "matchnames/layer/textlayer",
      //           "matchnames/layer/shapelayer",
      //           "matchnames/layer/layerstyles",
      //         ],
      //       },
      //       {
      //         label: "Effects",
      //         items: ["matchnames/effects/firstparty"],
      //       },
      //     ],
      //   },
      // ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

//  {
//           label: 'Guides',
//           items: [{ label: 'Example Guide', slug: 'guides/example' }]
//         },
//         {
//           label: 'Reference',
//           autogenerate: { directory: 'reference' }
//         }
