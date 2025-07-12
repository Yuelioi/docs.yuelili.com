---
title: 示例项目
---
# 示例项目

当前API支持的每种插件类型至少有一个示例，以及用于说明特定概念的项目。

在示例项目中，我们尽可能保持代码简单。华丽的实现可能会让我们在编程课上获得高分，但不会帮助你理解如何使用API功能。

在休息之后，我们将解释如何构建示例项目，所以请继续阅读以下内容！

---

## 示例项目描述

| 项目 | 描述 |
|---|---|
| AEGPs | AEGPs直接挂钩到After Effects的菜单和UI中的其他区域。 |
| | 有关AEGP在UI中显示的具体位置，请参见下文。 |
| Artie | Artie the Artisan接管给定合成中所有3D图层的渲染。 |
| | 这是我们内部3D渲染器使用的相同API；它非常复杂，并暴露了大量关于After Effects渲染管道的隐含信息。 |
| | 除非你有充分的理由替换After Effects处理3D渲染的方式，否则你永远不需要使用此示例。 |
| | Artisans出现在“合成 > 合成设置”中的“高级”选项卡中的“渲染插件”下拉菜单中。 |
| Easy Cheese | 一个关键帧助手（出现在“动画 > 关键帧助手”子菜单中），Easy Cheese展示了如何操作关键帧的各种特性（以一种与我们的内置插件Easy Ease非常相似的方式...） |
| FBIO | 练习After Effects输入/输出（AEIO）API。类似于IO示例，但支持基于帧的.ffk文件格式。 |
| | !!! 注意 |
| | 我们现在建议开发[Premiere Pro导入器](../other-integration-possibilities#premiere-pro-importers)代替。 |
| Grabba | 从项目中的任何合成中获取帧（格式由插件请求）。 |
| IO | 练习After Effects输入/输出（AEIO）API。支持虚构的.fak文件格式，并处理After Effects从这些文件检索数据或输出到这些文件的所有请求。 |
| | !!! 注意 |
| | 我们现在建议开发[Premiere Pro导入器](../other-integration-possibilities#premiere-pro-importers)代替。 |
| Mangler | Mangler是一个关键帧助手，展示了ADM调色板的使用，就像我们自己的插件一样。 |
| Panelator | 创建一个可以与其他标准面板一起停靠的面板。 |
| | !!! 注意 |
| | 以这种方式创建面板比使用HTML5 Panel SDK要复杂得多。 |
| | 我们建议从该SDK开始。 |
| Persisto | 展示如何从After Effects首选项文件中读取和写入信息。 |
| ProjDumper | 创建一个表示After Effects项目中每个元素的文本文件。 |
| Projector | 导入（虚构的）.sdk文件格式，并使用AEGP API调用创建项目。 |
| | 每当你想知道如何获取或设置项目元素的某些特性时，首先查看这里。 |
| | !!! 注意 |
| | Projector.h中有一些硬编码的路径。如果你不将这些路径设置为指向磁盘上的实际媒体，运行此插件时你将会遇到错误。不要责怪我们；更改它们！ |
| QueueBert | 发音为“Cue-BARE!”，QueueBert操作渲染队列项及其关联的输出模块的所有方面。 |
| Streamie | 操作流，包括动态和固定流。 |
| Sweetie | Sweetie使用PICA（或“Suite Pea”）API提供一个功能套件，供其他插件使用。 |
| | 如果你正在编写多个依赖于相同图像处理库的插件，你可以使用这样的套件提供库功能。 |
| Text Twiddler | 操作文本图层及其内容。 |
| Effects | 所有效果都出现在“效果和预设”面板以及“效果”菜单中。 |
| Checkout | 从另一个图层在指定时间检查（从After Effects的帧缓存中）一帧输入。 |
| | 这是所有具有图层参数的效果的重要概念。与Premiere Pro兼容。 |
| Convolutrix | 练习我们的图像卷积回调。与Premiere Pro兼容。 |
| Gamma Table | 展示如何管理序列数据，并使用我们的迭代回调。 |
| | 出于怀旧的原因，我们将此示例保留为C语言；由于它依赖于3.x版本的API功能，因此也与许多第三方插件主机兼容。 |
| GLator | CC 2017新增。展示在效果插件中正确管理OpenGL上下文。 |
| Paramarama | 练习其他示例中未使用的参数类型。与Premiere Pro兼容。 |
| PathMaster | 展示如何从效果中访问路径。 |
| Portable | 展示如何检测和响应多个不同的插件主机。与Premiere Pro兼容。 |
| Resizer | Resizer调整（惊喜！）输出缓冲区的大小。这对于像辉光和阴影这样的效果非常有用，如果它们不扩展输出缓冲区，这些效果将在图层的边缘被截断。 |
| | 与Premiere Pro兼容。 |
| SDK Backwards | 反转图层的音频，并将其与可关键帧化的正弦波混合。 |
| SDK Noise | 与Premiere Pro兼容，展示在Premiere Pro中的32位和YUV渲染。 |
| Shifter | 在输出缓冲区中移动图像，并练习我们的transform_world和子像素采样功能。 |
| SmartyPants | 展示SmartFX API，这是支持浮点像素所必需的。 |
| Transformer | 练习我们的图像变换回调。 |
| Effect Template | |
| Skeleton | Skeleton是开发效果的起点。与Premiere Pro兼容。 |
| Effects with Custom UI | |
| CCU | 在合成和图层窗口中实现自定义用户界面，支持像素宽高比和下采样比率。与Premiere Pro兼容。 |
| ColorGrid | 展示如何使用任意数据类型参数。还有一个漂亮的自定义UI。与Premiere Pro兼容。 |
| Custom ECW UI | 在效果控制窗口中实现一个非常无聊的自定义用户界面，并展示如何响应众多UI事件。 |
| Histogrid | CC 2015（13.5）新增。展示自定义UI如何访问异步渲染的上游帧以在CC 2015及更高版本中进行轻量级处理的示例。 |
| | 此效果从上游帧计算采样的10x10颜色网格，并显示该颜色网格的预览。 |
| | 在渲染中，计算更高质量的网格并用于修改输出图像，创建颜色网格与原始图像的混合。 |
| Supervisor | 展示如何根据其他参数的值控制参数（包括值和UI）。与Premiere Pro兼容。 |
| BlitHook | |
| EMP | 外部监视器预览。使用此作为起点，添加支持以从合成面板输出视频到视频硬件。 |

---

## 构建示例项目

我们将示例项目合并到一个主项目中，存储在SDK的Examples文件夹中。对于macOS，它是Buildall.xcodeproj；对于Windows，它是BuildAll.sln。

在你的IDE中，你需要更改项目的输出文件夹以构建到After Effects的插件文件夹中。

对于开发，我们建议使用以下路径：

- macOS: `/Library/Application Support/Adobe/Common/Plug-ins/[version]/MediaCore/`

版本在所有CC版本中锁定为7.0，或在早期版本中为CSx。

例如：`/Library/Application Support/Adobe/Common/Plug-ins/7.0/MediaCore/`

或：`/Library/Application Support/Adobe/Common/Plug-ins/CS6/MediaCore/`

- Windows: `[Program Files]\Adobe\Common\Plug-ins\[version]\MediaCore\`

例如：`C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore\`

或：`C:\Program Files\Adobe\Common\Plug-ins\CS6\MediaCore\`

请注意，此Windows路径仅建议用于开发目的。Windows安装程序应遵循以下指南：[安装程序应将插件放置的位置](../where-installers-should-put-plug-ins)。

在Xcode中，你可以在Xcode Preferences > Locations > Derived Data > Advanced中为所有项目设置此路径一次。在*构建位置*下选择*自定义*，并填写路径。

在Visual Studio中，为了方便起见，我们使用环境变量AE_PLUGIN_BUILD_DIR指定了所有示例项目的输出路径。你需要将此设置为系统的用户环境变量。在Windows 7上，右键单击*我的电脑* > *属性* > 在左侧边栏中选择*高级系统设置*。在新对话框中，点击*环境变量*按钮。在用户变量区域中，创建一个名为AE_PLUGIN_BUILD_DIR的新变量，并填写上述路径。注销Windows并重新登录，以便设置变量。

或者，你可以通过在Visual Studio中右键单击解决方案资源管理器中的项目，选择属性，然后在配置属性 > 链接器 > 常规中设置输出文件，为每个项目单独设置输出路径。

在编译插件时，如果你看到类似以下的链接错误：

“无法打开文件‘[MediaCore插件路径]plugin.prm’”，请确保以管理员模式启动Visual Studio。在你的Visual Studio安装中，右键单击devenv.exe，属性 > 兼容性 > 权限级别，点击“以管理员身份运行此程序”。
