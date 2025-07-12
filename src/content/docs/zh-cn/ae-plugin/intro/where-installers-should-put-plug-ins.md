---
title: 安装程序应将插件放置在何处
---
# 安装程序应将插件放置在何处

将您的插件安装在公共位置将允许它们在安装后被 Premiere Pro 加载。

在 Windows 上，公共插件文件夹可以在以下注册表项中找到（作为显式路径）：`HKLM\SOFTWARE\Adobe\After Effects\[version]\CommonPluginInstallPath`

在 Mac 上，公共插件文件夹位于：`/Library/Application Support/Adobe/Common/Plug-ins/[version]/MediaCore`

对于所有 CC 版本，版本锁定为 7.0，或对于早期版本为 CSx。例如：`/Library/Application Support/Adobe/Common/Plug-ins/7.0/MediaCore/`

不要使用 macOS 别名或 Windows 快捷方式，因为 Premiere Pro 不会遍历这些路径。

---

## 我必须将插件安装到公共文件夹吗？

您可能有充分的理由仅将插件安装到 After Effects 中，例如，如果您的插件依赖于 Premiere Pro 中不可用的套件和功能。我们强烈建议您尽可能使用公共文件夹，但在某些情况下，AE 特定的插件文件夹仍然可用。

在 Windows 上，应用程序特定的插件文件夹可以在以下注册表项中找到（作为显式路径）：`\\HKEY_LOCAL_MACHINE\SOFTWARE\Adobe\After Effects\(version)\PluginInstallPath`

在 macOS 上，应用程序特定的插件文件夹位于：`/Applications/Adobe After Effects [version]/Plug-ins/`

启动后，After Effects 会递归地深入其路径的子目录 10 层。macOS 别名会被遍历，但 Windows 快捷方式不会。以括号终止或以符号 ¬（macOS）或 ~（Windows）开头的目录不会被扫描。

尽管您可能试图在 AE 和 Premiere Pro 之间建立一道屏障，但用户仍然会通过我们可爱的集成功能找到跨越的方法——您的效果仍然可供 Premiere Pro 用户使用，这些用户创建了一个包含您效果的动态链接 AE 合成，并将其放入 Premiere Pro 序列中。
