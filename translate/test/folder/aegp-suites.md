---
title: aegp-suites
---
# AEGP 套件

如前所述，AEGP 通过套件完成所有操作。以下套件被所有类型的 AEGP 使用，并且可以从任何钩子函数中调用（除了必须在 AEGP 入口点内使用的 RegisterSuite）。以下是每个套件中每个函数的描述，以及在适当情况下使用这些函数的详细信息。

|  套件  |  描述  |
|---|---|
| [Memory Suite](#aegp_memorysuite1)  | 管理内存资源。使用此套件！每当遇到与内存相关的错误时，After Effects 可以为您报告错误。  |
| [Command Suite](#aegp_commandsuite1)  | 管理您的 AEGP 的菜单项。与 Register Suite 结合使用。  |
| [Register Suite](#aegp_registersuites5)  | 与 [Command Suite](#aegp_commandsuite1) 结合使用，将函数添加到菜单命令中。  |
|  | AEIO 和 Artisans 必须使用此套件的函数来向 After Effects 表明他们希望接收适当的消息流。  |
|  | 您可以使用此套件替换一些 After Effects 的命令。  |
| [Project Suite](#aegp_projsuite6)  | 读取和修改项目数据。  |
| [Item Suite](#aegp_itemsuite9)  | 管理项目或合成中的项目。  |
|  | 文件夹、合成、实色和素材都是项目。  |
| [Collection Suite](#aegp_collectionsuite2)  | 查询当前选择了哪些项目，并创建您自己的选择集。  |
|  | 通常是一个良好的 UI 操作，选择您的 AEGP 修改的所有项目，以便让用户了解您所做的操作。  |
| [Composition Suite](#aegp_compositesuite2)  | 管理（并创建）项目中的合成，以及合成特定的项目如实色。  |
| [Footage Suite](#aegp_footagesuite5)  | 管理素材。  |
| [Layer Suite](#aegp_layersuite9)  | 提供有关合成中图层的信息，以及源时间和图层时间之间的关系。  |
|  | 实色、文本、绘画、摄像机、灯光、图像和图像序列都可以成为图层。  |
| [Effect Suite](#aegp_effectsuite4)  | 提供对应用于图层的效果的访问。  |
|  | 使用 Stream 套件获取效果关键帧信息。  |
|  | 使用 `AEGP_EffectCallGeneric()`（在 [AEGP_EffectSuite4](#aegp_effectsuite4) 中）与您预先设置以响应您的 AEGP 的效果进行通信。 |
| [Stream Suite](#stream-suite)  | 用于访问图层关键帧属性的值。  |
| [Dynamic Stream Suite](#aegp_dynamicstreamsuite4)  | 用于访问与图层关联的动态流的特性。  |
| [Keyframe Suite](#aegp_keyframesuite3)  | 用于访问和操作所有关键帧数据。  |
| [Marker Suite](#aegp_markersuite2)  | 用于操作标记。使用 `AEGP_GetNewCompMarkerStream()`（在 [AEGP_CompSuite11](#aegp_compsuite11) 中）获取合成标记流。  |
| [Mask Suite](#aegp_masksuite6)  | 提供访问以检索有关图层蒙版的信息。  |
| [Mask Outline Suite](#aegp_maskoutlinesuite3)  | 与 Stream Suite 结合使用，此套件提供有关渲染路径的详细信息以制作图层的蒙版。  |
| [Text Document Suite](#aegp_textdocumentsuite1)  | 用于访问文本图层上的实际文本。  |
| [Text Layer Suite](#aegp_textlayersuite1)  | 用于访问构成文本图层轮廓的路径。  |
| [Utility Suite](#aegp_utilitysuite6)  | 提供错误消息处理、AEGP 版本检查和访问 After Effects 的撤销堆栈。  |
| [Persistent Data Suite](#aegp_persistentdatesuite4)  | 查询和管理所有持久数据（即首选项文件）。  |
|  | AEGP 还可以将自己的数据添加到首选项中。  |
| [Color Settings Suite](#aegp_colorsettingssuite5)  | 获取有关 After Effects 当前颜色管理设置的信息。  |
| [Render Suite](#aegp_rendersuite4)  | 从 AEGP 中获取渲染的帧（和音频样本）。  |
| [World Suite](#aegp_worldsuite3)  | 分配、释放和查询 AEGP_Worlds。  |
|  | 还提供了一种将 `PF_EffectWorld` 转换为 `AEGP_World` 的方法，以便与效果插件一起使用。  |
| [Composite Suite](#aegp_compositesuite2)  | 公开 After Effects 的合成功能，包括传输模式、轨道遮罩和传统的位复制。  |
| [Sound Data Suite](#aegp_sounddatesuite1)  | 用于管理和访问声音数据的函数。  |
| [Render Queue Suite](#aegp_renderqueuesuite1)  | 从渲染队列中添加和删除项目。  |
| [Render Queue Item Suite](#render-queue-item-suite)  | 查询和修改渲染队列中的项目。  |
| [Render Options Suite](#aegp_renderoptionssuite4)  | 查询和管理渲染队列项目选项对话框中公开的所有项目。  |
| [Output Module Suite](#output-module-suite)  | 查询和修改附加到渲染队列项目的输出模块。  |
| [PF Interface Suite](#aegp_pfinterfacesuite1)  | 此套件中的函数，虽然在技术上是 AEGP API 的一部分，但供效果使用。  |
| [AEGP Iterate Suite](#aegp_iteratesuite1)  | 为 AEGP 提供了一种方式，使具有所需签名的函数可以在任何或所有可用处理器上运行。  |
| [File Import Manager Suite](#file-import-manager-suite) | 将 AEGP 文件和项目导入器注册为 After Effects 文件处理的一部分。  |

---

## 优雅地失败

如果某个套件不存在，请尽一切努力优雅地失败。向用户显示一条消息，说明问题的性质。尝试获取并使用同一套件的早期版本。

由于 AEGP 与 After Effects 深度集成，请确保用户知道谁或什么遇到了给定问题。

表明身份！尽可能向用户提供支持和/或帮助信息。

---

## 处理句柄

使用 AEGP Memory Suite 来管理 AEGP 使用的内存。每当遇到与内存相关的错误时，After Effects 可以为您报告错误，以便您及早发现。

`AEGP_MemHandle` 是一个结构，其中包含的不仅仅是引用的内存。因此，不应直接解引用。使用 `AEGP_LockMemHandle` 获取指向 `AEGP_MemHandle` 引用的内存的指针。

当然，完成后请解锁它。

### AEGP_MemorySuite1

|  函数  |  目的  |
|-----|----|
| `AEGP_NewMemHandle`  | 创建一个新的内存句柄。此内存保证为 16 字节对齐。  |
|  | `plugin_id` 是通过主 [入口点](implementation.md#entry-point) 传入的 ID，或者您从 `AEGP_RegisterWithAEGP()`（来自 [AEGP_UtilitySuite6](#aegp_utilitysuite6)）获取的 ID。  |
|  | 使用 `whatZ` 标识您请求的内存。After Effects 使用该字符串显示任何相关的错误消息。  |
|  | <pre lang="cpp">AEGP_NewMemHandle(<br/>  AEGP_PluginID  \*plugin_id,<br/>  const A_char  \*whatZ,<br/>  AEGP_MemSize  size,<br/>  AEGP_MemFlag  flags,<br/>  AEGP_MemHandle  \*memPH);</pre>  |
| `AEGP_FreeMemHandle`  | 释放您使用 `AEGP_NewMemHandle()` 分配的句柄。  |
|  | <pre lang="cpp">AEGP_FreeMemHandle(<br/>  AEGP_MemHandle  memH);</pre>  |
| `AEGP_LockMemHandle`  | 将句柄锁定到内存中（不能被操作系统移动）。在使用 `AEGP_NewMemHandle()` 分配的内存之前使用此函数。可以嵌套。  |
|  | <pre lang="cpp">AEGP_LockMemHandle(<br/>  AEGP_MemHandle  memH,<br/>  void  \*ptr_to_ptr);</pre>  |
| `AEGP_UnlockMemHandle`  | 允许操作系统移动引用的内存。始终平衡锁定调用和解锁调用。  |
|  | <pre lang="cpp">AEGP_UnlockMemHandle(<br/>  AEGP_MemHandle  memH);</pre>  |
| `AEGP_GetMemHandleSize`  | 返回句柄的分配大小。  |
|  | <pre lang="cpp">AEGP_GetMemHandleSize AEGP_MemHandle memH,<br/>  AEGP_MemSize  \*sizeP);</pre>  |
| `AEGP_ResizeMemHandle`  | 更改句柄的分配大小。  |
|  | <pre lang="cpp">AEGP_ResizeMemHandle(<br/>  const char  \*whatZ,<br/>  AEGP_MemSize  new_size,<br/>  AEGP_MemHandle  memH);</pre>  |
| `AEGP_SetMemReportingOn` | 如果 After Effects 遇到内存处理问题，应将错误报告给用户。  |
|  | 在开发过程中使用此功能！  |
|  | 只有使用此套件分配然后泄漏的内存才会使用此调用报告，因此例如使用 [PF_HandleSuite1](../effect-details/memory-allocation.md#pf_handlesuite1) 分配的内存将不会被报告。  |
|  | <pre lang="cpp">AEGP_SetMemReportingOn(<br/>  A_Boolean  turn_OnB);</pre>  |
| `AEGP_GetMemStats`  | 获取有关当前分配的句柄数量及其总大小的信息。  |
|  | 只有使用此套件分配的内存才会被跟踪并使用此调用报告，因此例如使用 [PF_HandleSuite1](../effect-details/memory-allocation.md#pf_handlesuite1) 分配的内存将不会在此处报告。 |
|  | <pre lang="cpp">AEGP_GetMemStats(<br/>  AEGP_MemID  mem_id,<br/>  A_long  \*countPL,<br/>  A_long  \*sizePL);</pre>  |

---

## 管理菜单项

Command Suites 允许您创建和处理任何菜单事件。

要添加您自己的菜单命令，您还必须使用 [Register Suite](#aegp_registersuites5) 为菜单事件分配处理程序。

### AEGP_CommandSuite1

|  函数  |  目的  |
|-----|----|
| `AEGP_GetUniqueCommand`  | 获取唯一的命令标识符。使用 [Register Suite](#aegp_registersuites5r) 为命令注册处理程序。  |
|  | <pre lang="cpp">AEGP_GetUniqueCommand(<br/>  AEGP_Command  \*unique_commandP);</pre>  |
|  | 注意：有时 After Effects 会发送命令 0（零），因此不要将其作为命令处理逻辑的一部分。  |
| `AEGP_InsertMenuCommand`  | 添加一个新的菜单命令。使用 `nameZ = "-"` 将插入一个分隔符。  |
|  | `menu_ID` 可以是：  |
|  | - `AEGP_Menu_NONE`  |
|  | - `AEGP_Menu_APPLE`  |
|  | - `AEGP_Menu_FILE`  |
|  | - `AEGP_Menu_EDIT`  |
|  | - `AEGP_Menu_COMPOSITION`  |
|  | - `AEGP_Menu_LAYER`  |
|  | - `AEGP_Menu_EFFECT`  |
|  | - `AEGP_Menu_WINDOW`  |
|  | - `AEGP_Menu_FLOATERS`  |
|  | - `AEGP_Menu_KF_ASSIST`  |
|  | - `AEGP_Menu_IMPORT`  |
|  | - `AEGP_Menu_SAVE_FRAME_AS`  |
|  | - `AEGP_Menu_PREFS`  |
|  | - `AEGP_Menu_EXPORT`  |
|  | - `AEGP_Menu_ANIMATION`  |
|  | - `AEGP_Menu_PURGE`  |
|  | - `AEGP_Menu_NEW` - 在 CC 及更高版本中支持  |
|  | 位置可以设置为菜单中的特定位置，也可以由 After Effects 分配：  |
|  | - `AEGP_MENU_INSERT_SORTED`  |
|  | - `AEGP_MENU_INSERT_AT_BOTTOM`  |
|  | - `AEGP_MENU_INSERT_AT_TOP`  |
|  | 对于 `AEGP_Menu_WINDOW`，自 CS4 以来不再支持 BOTTOM 和 TOP 选项，并将返回错误。我们推荐使用 `SORTED`。  |
|  | <pre lang="cpp">AEGP_InsertMenuCommand(<br/>  AEGP_Command  command,<br/>  const A_char  \*nameZ,<br/>  AEGP_MenuID  menu_id,<br/>  A_long  after_itemL);</pre>  |
| `AEGP_RemoveMenuCommand`  | 删除一个菜单命令。如果您愿意，您可以删除所有 After Effects 菜单项。  |
|  | <pre lang="cpp">AEGP_RemoveMenuCommand(<br/>  AEGP_Command  command);</pre>  |
| `AEGP_SetCommandName`  | 设置命令的菜单名称。  |
|  | <pre lang="cpp">AEGP_SetCommandName(<br/>  AEGP_Command  command,<br/>  const A_char  \*nameZ);</pre>  |
| `AEGP_EnableCommand`  | 启用菜单命令。  |
|  | <pre lang="cpp">AEGP_EnableCommand(<br/>  AEGP_Command  command);</pre>  |
| `AEGP_DisableCommand`  | 禁用菜单命令。  |
|  | <pre lang="cpp">AEGP_DisableCommand(<br/>  AEGP_Command  command);</pre>  |
| `AEGP_CheckMarkMenuCommand` | After Effects 将在菜单命令旁边绘制一个复选标记。  |
|  | <pre lang="cpp">AEGP_CheckMarkMenuCommand(<br/>  AEGP_Command  command,<br/>  A_Boolean  checkB);</pre>  |
| `AEGP_DoCommand`  | 调用指定菜单命令的处理程序。每个 After Effects 菜单项都有一个关联的命令。  |
|  | 请注意，我们不保证命令 ID 在不同版本之间保持一致。  |
|  | <pre lang="cpp">AEGP_DoCommand(<br/>  AEGP_Command  command);</pre>  |
|  | 在给出上述免责声明后，这里有一些提供给其他开发者的命令编号，可能会对您有用：  |
|  | - `3061` - 打开选择，忽略任何修饰键。  |
|  | - `10314` - 播放/停止（在 13.5 及更高版本中有效）  |
|  | - `2285` - RAM 预览（在 13.5 之前有效）  |
|  | - `2415` - 播放（空格键）（在 13.5 之前有效）  |
|  | - `2997` - 将合成裁剪到感兴趣的区域。  |
|  | - `2372` - 编辑 > 清除 > 图像缓存  |
|  | 如果您的 AEGP 需要调用其他 After Effects 菜单项，有一种相当简单的方法可以找到您想要的大多数命令，使用脚本：  |
|  | <pre lang="js">cmd = app.findMenuCommandId(text); // 例如 text = "打开