---
title: 插件属性列表资源(PiPLs)
---
# PiPL 资源

起源于二十多年前的 Adobe Photoshop，插件属性列表（Plug-In Property Lists，简称 PiPLs）是一种资源，用于提供插件行为的基本信息，而无需执行插件。在 After Effects 中，PiPLs 已被 `PF_Cmd_GLOBAL_SETUP`（参见[全局选择器](../../effect-basics/command-selectors)）和动态输出标志（dynamic outflags）所取代。然而，出于考古学原因，`PF_Cmd_GLOBAL_SETUP` 期间指示的行为必须与 PiPL 中的行为一致。

为了跨平台兼容性，请像示例一样，为 macOS 和 Windows 版本的插件使用单个 .r 文件。PiPL 属性必须始终以 macOS 特定的字节顺序排列。在 Windows 上，PiPLs 通过 pipltool.exe 处理 .r 文件来编译，将 .r 文件转换为二进制 .rc 文件。Windows 示例项目都包含自定义构建步骤，使用跨平台的 .r 文件和我们的 cnvtpipl.exe 命令行工具生成 .rc 文件。基于现有的示例插件进行开发，构建步骤将正确实现。

| PiPL 属性 | 用途 |
| --- | --- |
| Kind | 插件类型。AEEffect 表示效果插件。 |
| Name | 显示名称，最多 47 个字符。 |
| Category | 用于菜单和“效果与预设”面板的效果类别 |
| Entry Point (每个平台一个) | 插件的入口函数通过 PiPL 在 Windows 和 macOS 上导出。如果插件支持多个平台，则必须在 PiPL 中定义多个入口函数。除非您还指定了其他特定于操作系统的入口函数，否则不需要 Windows .def 文件或手动导出。 |
| | entry.h 中定义的宏（位于\\SDKExamplesHeaders 目录）负责导出每个示例的入口函数。所有示例项目的入口函数对于效果插件是 `EffectMain()`，对于 AEGPs 是 `EntryPointFunc()`。 |
| AE_PiPL_Version | 未使用 |
| AE_Effect_Spec_Version | 效果插件构建时使用的 SDK 版本 |
| AE_Effect_Version | 效果插件的版本 |
| AE_Effect_Info_Flags | 未使用 |
| AE_Effect_Global_OutFlags | 必须与 GlobalSetup 中设置的 `out_flags` 匹配 |
| AE_Effect_Global_OutFlags_2 | 必须与 GlobalSetup 中设置的 `out_flags2` 匹配 |
| AE_Effect_Match_Name | 唯一的、常量标识符，与插件的显示名称不同，后者可以动态更改。 |
| AE_Reserved_Info | 未使用 |
| AE_Effect_Support_URL | **AE 23.5 新增！** 效果插件的 URL。显示在效果管理器中。用户可能会点击链接以获取有关效果的更多信息或查找更新版本。 |

---

## PiPL 资源与 Microsoft Visual Studio

要将 Microsoft Visual Studio .NET 中的资源与 pipltool 生成的资源一起使用，

将自定义构建步骤的输出包含到 Microsoft 生成的 .rc 文件中。

```cpp
// 在 .NET 生成的文件 WhizBang.rc 中。
#include "WhizBang_PiPL_temp.rc" // pipltool.exe 的输出
```

如果修改示例插件，请将 pipltool.exe 生成的文件名称更改为类似 WhizBang_PiPL_temp.rc 的名称，否则每次构建时都会覆盖 Microsoft 资源；这不好。

---

## 多个 PiPLs

可以在同一个文件中包含多个插件（包括 AEGPs 和效果插件），使用多个 PiPLs，但不推荐这样做。如果同一个文件中同时包含 AEGPs 和效果插件的 PiPLs，AEGPs 必须排在前面！

没有其他主机（甚至 Premiere Pro）支持在同一个 .dll 或代码片段中指向多个效果的多个 PiPLs。此外，如果您需要更新一个插件，您真的希望发布所有插件的新版本吗？我们建议每个代码片段使用一个 PiPL 和一个插件。

---

## 为什么我需要了解这些？

您不需要；After Effects 需要。如果您遵循我们的建议并基于 SDK 示例进行项目开发，只需更改包含 PiPL 定义的 .r 文件，插件的资源将在下次构建时自动更新。感受这份爱。或者，如果您曾经调整过自定义构建步骤，感受那份痛苦。
