---
title: 插件属性列表 (PiPL) 资源
---
# 插件属性列表 (PiPL) 资源

对于许多插件类型，Premiere 会加载一个 PiPL（插件属性列表）资源。PiPL 在一个扩展名为 ".r" 的文件中描述。

完整的 PiPL 语法在 PiPL.r 中有描述。

你会注意到 PiPL 非常古老。作为 68k macOS 编程的遗留物，它们传播到了 Windows。

然而，如果你从示例项目进行开发，你应该不需要做任何事情就能让它们为拉丁语言正确构建。

---

## 哪些类型的插件需要 PiPL？

导出器、播放器和录制器不需要 PiPL。

标准导入器不需要 PiPL。合成和自定义导入器使用一个基本的 PiPL 来指定它们的名称，以及 Premiere 用来识别它们的匹配名称。名称会出现在“文件 > 新建”菜单中。

设备控制器使用一个基本的 PiPL 来指定它们的名称，以及 Premiere 用来识别它们的匹配名称。

视频滤镜使用一个扩展的 PiPL 来指定它们的名称、Premiere 用来识别它们的匹配名称、它们所属的文件夹、它们如何处理像素宽高比、是否有随机性以及它们的参数。

有关 `ANIM_FilterInfo` 和 `ANIM_ParamAtom` 的更多信息，请参阅 [视频滤镜](../../video-filters/video-filters) 中的资源部分。

---

## 一个基本的 PiPL 示例

```cpp
#define plugInName "SDK 自定义导入"
#define plugInMatchName "SDK 自定义导入"

resource 'PiPL' (16000) {
{

 // 插件类型
 Kind {PrImporter},

 // 出现在 Premiere 菜单中的名称，可以本地化
 Name {plugInName},

 // 此插件的内部名称 - 不要本地化此名称。此名称用于 Premiere 和 After Effects 插件。
 AE_Effect_Match_Name {plugInMatchName}

 // 转场和视频滤镜在此定义更多的 PiPL 属性
}

};
```

---

## 资源编译器如何处理 PiPL

在 macOS 上，.r 文件由 Xcode 原生处理，作为类型为 Build Carbon Resources 的构建阶段。此步骤已在示例项目中设置。

在 Windows 上，.r 文件使用 CnvtPiPL.exe 处理，该工具根据项目中的自定义构建步骤创建一个 .rcp 文件。然后 .rcp 文件与插件使用的任何其他资源一起包含在 .rc 文件中。这些自定义构建步骤已在示例项目中设置。

要查看它们，请在 .NET 中打开示例项目。在解决方案资源管理器中，右键单击 .r 文件并选择属性。在对话框中，选择自定义构建步骤文件夹。命令行包含执行 CnvtPiPL.exe 的脚本。除非你使用的编译器与支持的编译器不同，或者添加了对亚洲语言的支持，否则你不需要修改自定义构建步骤。此脚本也可以在 SDK 的 `\\Examples\\Resources\\Win\\Custom Build Steps.txt` 中找到。此文本文件还描述了用于亚洲语言的附加开关。
