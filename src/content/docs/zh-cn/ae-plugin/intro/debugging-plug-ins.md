---
title: 调试插件
---
# 调试插件

了解 After Effects 和插件之间交互的最佳方法是在调试器中运行示例。花一些时间在编译器的调试器中，并使用一个与您的插件非常相似的示例项目，可以真正带来回报。

一旦您按照上述方法将插件直接构建到插件文件夹中，以下是设置 After Effects 为调试会话期间运行的应用程序的方法：

### Windows:

1. 在 Visual Studio 解决方案中，在解决方案资源管理器面板中，选择您要调试的项目
2. 右键单击它并选择设置为启动项目
3. 再次右键单击它并选择属性
4. 在配置属性 > 调试 > 命令中，提供插件将运行的宿主应用程序的可执行文件路径（可能是 After Effects 或 Premiere Pro）
5. 从那里，您可以点击播放按钮，或者启动应用程序，然后在任何时间点选择调试 > 附加到进程...

### macOS:

1. 在 Xcode 中，在项目导航器中，选择您要调试的 xcodeproj
2. 选择产品 > 方案 > 编辑方案...
3. 在运行下，在信息选项卡中，对于可执行文件，选择插件将运行的宿主应用程序（可能是 After Effects 或 Premiere Pro）
4. 从那里，您可以点击播放按钮以构建并运行当前方案，或者启动应用程序，然后在任何时间点选择调试 > 附加到进程。

---

## 删除首选项

在开发插件的过程中，您的插件可能会将设置信息传递给 After Effects，这些信息随后存储在其首选项文件中。

您可以通过在启动时按住 Ctrl-Alt-Shift / Cmd-Opt-Shift 来删除首选项并以干净的状态重新启动 After Effects。

在 Windows 上，首选项存储在此处：`[用户文件夹]\AppData\Roaming\Adobe\After Effects\[版本]\Adobe After Effects [版本]-x64 Prefs.txt`

在 macOS 上，它们存储在此处：`~/Library/Preferences/Adobe/After Effects/[版本]/Adobe After Effects [版本]-x64 Prefs`
