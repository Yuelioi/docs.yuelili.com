---
title: 插件重载
---
# 插件... 重载

在首次启动时，Premiere Pro 会加载所有插件，读取 PiPL，并发送 `PF_Cmd_GLOBAL_SETUP` 以确定插件的功能。为了在未来的应用程序启动时节省时间，它会将这些功能的一部分保存在我们称为插件缓存的地方（在 Windows 上是注册表，在 macOS 上是属性列表文件）。下次启动应用程序时，尽可能使用缓存的信息，而不是加载插件。

在调试时，你可以通过在启动 Premiere Pro 时按住 Shift 键来强制重新加载所有插件。

如果你的效果需要每次重新加载，有一种方法可以禁用此缓存。插件可以使用 AE_CacheOnLoadSuite.h 中的 PF Cache On Load Suite（来自 [Premiere Pro SDK](http://ppro-plugin-sdk.aenhancers.com/) 头文件）在 `PF_Cmd_GLOBAL_SETUP` 期间调用 `PF_SetNoCacheOnLoad()`。如果你希望你的效果显示在 UI 中，请为该函数的第二个参数传递一个非零值。如果加载失败，但你仍然希望 Premiere Pro 在下一次重新启动时尝试加载它，请传递零。

---

# 效果预设

Premiere Pro 使用与 After Effects 不同的预设方案。

来自 Premiere Pro SDK 指南：

效果预设出现在效果面板的预设箱中，可以像具有特定参数设置和关键帧的效果一样应用。效果预设可以按以下方式创建：

1. 将滤镜应用到剪辑
2. 设置滤镜的参数，如果需要可以添加关键帧
3. 在效果控制面板中右键单击滤镜名称，然后选择“保存预设...”
4. 如果需要，可以通过在效果面板中右键单击并选择“新建预设箱”来创建预设箱
5. 在预设文件夹中组织预设
6. 选择要导出的箱和/或预设，右键单击并选择“导出预设”

预设应安装在插件目录中。一旦安装在该目录中，它们将是只读的，用户将无法将它们移动到不同的文件夹或更改它们的名称。用户创建的预设将是可修改的。

在 Windows Vista 上，这些位于用户的隐藏 AppData 文件夹中（例如 `C:/Users/[用户名]/AppData/Roaming/AdobePremiere Pro/[版本]/Effect Presets and Custom Items.prfpset`）。

在 macOS 上，它们位于用户文件夹中，路径为 `~/Library/Application Support/Adobe/Premiere Pro/[版本]/Effect Presets and Custom Items.prfpset`。

---

# 在标准数据类型上自定义 ECW UI

虽然这被记录为 bug #1235407，但有一个简单的解决方法：创建两个独立的参数，并使用参数监督让自定义 UI 控制滑块参数。
