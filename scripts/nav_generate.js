import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

function generateNav(rootDir) {
  function walk(currentDir, basePath = "") {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    const navItems = [];

    // 处理文件
    entries
      .filter((entry) => entry.isFile())
      .filter((file) => path.extname(file.name) === ".md")
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach((file) => {
        const fileName = path.basename(file.name, ".md");
        const filePath = path.join(basePath, fileName).toLowerCase();
        navItems.push(filePath.replace(/\\/g, "/"));
      });

    // 处理目录
    entries
      .filter((entry) => entry.isDirectory() && !entry.name.startsWith("_"))
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach((dir) => {
        const dirPath = path.join(currentDir, dir.name);
        const newBasePath = path.join(basePath, dir.name);
        const children = walk(dirPath, newBasePath);

        navItems.push({
          label: formatLabel(dir.name),
          items: children,
        });
      });

    return navItems;
  }

  function formatLabel(name) {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return {
    label: "javascript工具",
    link: "javascript-tools",
    icon: "open-book",
    items: walk(rootDir, "javascript-tools"),
  };
}

const navFolder = "E:/Scripting/projects/yuelili.com/packages/docs.yuelili.com/src/nav";
const root = "E:/Scripting/projects/yuelili.com/packages/docs.yuelili.com/src/content/docs/en/houdini-vex";

const name = path.basename(root);
const nav_path = navFolder + "/" + path.parse(root).name + ".ts";
const navConfig = generateNav(root);
fs.writeFileSync(nav_path, JSON.stringify(navConfig, null, 2), "utf-8");
