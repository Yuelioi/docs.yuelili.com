---
title: 入门指南
---
# 入门指南

通过修改 SDK 示例来启动您的插件。在调试器中逐步执行代码以了解事件的顺序。

---

## 使用 Media Encoder 作为测试工具

使用 Media Encoder 开发导出器可能会更快，因为它是一个更轻量级的应用程序。然而，您需要在 Premiere Pro 中测试您的导出器，以确保其行为与在 Media Encoder 中运行时一致。

---

## 添加参数

从 CS6 开始，[Export Standard Param Suite](../suites#export-standard-param-suite) 提供了一种添加几组基本参数的方式，无论是视频、音频、静态序列等。除了标准参数外，还可以使用 [Export Param Suite](../suites#export-param-suite) 添加自定义参数。

首先在 `exSelGenerateDefaultParams` 期间注册参数。然后在 `exSelPostProcessParams` 期间提供本地化字符串和参数的最小/最大值。当导出器收到 `exSelExport` 进行导出时，使用 [Export Param Suite](../suites#export-param-suite) 获取用户指定的参数值。

---

## 动态更新参数

参数可以根据用户与任何相关参数的交互动态更新。更新的时机是在 `exSelValidateParamChanged` 选择器中。使用 [Export Param Suite](../suites#export-param-suite) 中的 ChangeParam 进行更改。然后，在返回之前将 `exParamChangedRec.rebuildAllParams` 设置为 true。如果不设置该标志，参数在更改后可能会显示顺序错乱。

---

## 支持“匹配源”

导出器必须将 `exExporterInfoRec.canMatchSource` 设置为 true。这将在导出设置的视频选项卡中添加“匹配源”按钮。

接下来，如果在导出设置中按下了“匹配源”按钮，`exPostProcessParamsRec.doConformToMatchParams` 将为 true。导出器应通过更新任何可以匹配源设置的参数值来响应。

---

## 获取视频帧和音频样本

从 CS6 开始，导出器可以使用新的推送模型或传统的拉取模型来获取帧。新的推送模型从 CS6 开始支持，而拉取模型仍然支持。

## 推送模型

使用推送模型，导出器主机可以简单地将帧推送到导出器指定的线程安全回调中。使用 [Exporter Utility Suite](../suites#exporter-utility-suite) 中的 DoMultiPassExportLoop 注册回调。

与拉取模型相比，这将减少以前所需的渲染循环管理代码。对于尚未优化多线程渲染的导出器，它还应该带来显著的性能提升。

## 拉取模型

使用拉取模型获取视频和音频数据涉及向主机请求此数据。使用 [Sequence Render Suite](../suites#sequence-render-suite) 获取单个视频帧，并使用 [Sequence Audio Suite](../suites#sequence-audio-suite) 获取音频样本的缓冲区。

视频帧可以同步或异步请求。异步方法可以带来更好的性能，但导出器需要提供其异步渲染循环。

---

## 处理用户暂停或取消（仅限拉取模型）

推送模型导出不需要任何特殊代码来处理用户的暂停或取消。对于拉取模型导出，检查用户是否暂停或取消导出的方法是调用 [Export Progress Suite](../suites#export-progress-suite) 中的 UpdateProgressPercent，并检查返回值。如果返回值为 `suiteError_ExporterSuspended`，则用户按下了暂停按钮，该按钮仅在 Media Encoder UI 中可用。如果返回值为 `exportReturn_Abort`，则导出已被用户取消。

如果 UpdateProgressPercent 返回 `suiteError_ExporterSuspended`，则导出器应接下来调用 `WaitForResume`，该调用将阻塞，直到用户取消暂停导出。

如果 UpdateProgressPercent 返回 `exportReturn_Abort`，导出器应采取步骤中止导出并进行清理。请注意，导出器在收到取消后仍然可以继续请求视频帧和音频样本，这在某些情况下很有用，例如如果导出器需要更多帧来完成 MPEG GOP，或者如果它希望在取消时包含导出的视频的音频。这允许导出器生成格式良好的输出文件，即使在取消的情况下也是如此。

---

## 创建预设

使用导出设置 UI 创建您自己的预设，无论是在 Premiere Pro 还是 Media Encoder 中。只需按照您想要的方式修改参数，然后点击保存图标将预设保存到磁盘。预设保存为 `.epr` 扩展名。

从 CS5 开始，所有预设都保存到同一位置，无论是从 Premiere Pro 还是 Media Encoder 保存：

在 Windows 7 上，预设保存在此处：`[用户文件夹]\AppData\Roaming\Adobe\Common\AME\[版本]\Presets\\`

在 Mac OS 上：`~/Library/Preferences/Adobe/Common/AME/[版本]/Presets/`

在 CS4 中，文件的保存位置取决于您是在 Premiere Pro 还是 Media Encoder 中打开了导出设置 UI：

### Media Encoder 预设

在 Windows Vista 上，预设保存在此处：`[用户文件夹]\AppData\Roaming\Adobe\Adobe Media Encoder\[版本]\Presets\\`

在 Windows XP 上：`[Documents and Settings 文件夹]\[用户名]\Application Data\\ Adobe\Adobe Media Encoder\[版本]\Presets\\`

在 Mac OS 上：`~/Library/Preferences/Adobe/Adobe Media Encoder/[版本]/ Presets/`

### Premiere Pro 预设

在 Windows Vista 上，预设保存在此处：`[用户文件夹]\AppData\Roaming\Adobe\Premiere Pro\[版本]\\ Presets\\`

在 Windows XP 上：`[Documents and Settings 文件夹]\[用户名]\Application Data\\ Adobe\Premiere Pro\[版本]\Presets\\`

在 Mac OS 上：`~/Library/Preferences/Adobe/Adobe Premiere Pro/[版本]/Presets/`

#### AME 预设浏览器

从 CS6 开始，Adobe Media Encoder 提供了一个预设浏览器，提供了预设的结构化组织。第三方预设可以添加到主类别中的任何文件夹或子文件夹中。创建预设后，它将默认显示在“其他”文件夹中。您可以在预设 XML 中的 `<FolderDisplayPath>` 标签中设置所需的文件夹位置。

例如，如果您将其设置为：`<FolderDisplayPath>System Presets/Image Sequence/PNG</ FolderDisplayPath>`，则 AME 将在 `System Presets > Image Sequence > PNG` 文件夹中显示预设。

必须使用：“System Presets/xxx/”，其中 xxx 必须是任何现有的主类别（使用英文名称）。只有在其下一级才能创建自定义命名的文件夹。如果文件夹不存在，它将被创建。

预设浏览器数据缓存在以下文件中：`[用户文件夹]\AppData\Roaming\Adobe\Common\AME\[版本]\Presets\\ PresetTree.xml`

如果您想强制刷新预设浏览器数据，只需退出 AME，删除此文件，然后重新启动 AME。

### CS4 中的安装

为了获得更好的性能，在 CS4 中，我们建议您将导出器的任何预设安装在 Premiere Pro 和 Media Encoder 的应用程序文件夹中。

对于 Windows 和 Mac OS：`[应用程序安装路径]\MediaIO\systempresets\[导出器子文件夹]`

子文件夹必须根据导出器的 ClassID 和文件类型的十六进制 fourCCs 命名。例如，SDK 导出器的 ClassID 为 'DTEK' 或 0x4454454B，文件类型为 `SDK` 或 0x53444B5F。因此，子文件夹必须命名为 '4454454B_53444B5F'。为了方便起见，您可以在预设文件中找到 ClassID 和文件类型 fourCCs，以十进制表示。

---

## 参数缓存

在开发过程中，当您在导出器中修改参数并重新加载插件到主机时，设置 UI 可能会继续显示过时的参数数据。您添加的新参数可能不会出现，或者旧的参数可能继续出现。或者，如果您更改了现有参数的 UI，它可能不会生效。

至少，必须删除任何旧的预设。这包括 Media Encoder 预设和 Premiere Pro 预设。删除旧预设后，有两种选择，具体取决于是否已经分发并正在使用旧版本的导出器。

### 增加参数版本

如果客户已经在使用旧版本的导出器，您需要使用参数版本控制。在 `exSelGenerateDefaultParams` 期间，您应该调用 [Export Param Suite](../suites#export-param-suite) 中的 SetParamsVersion() 并增加版本号。

之后，使用新的参数集创建新的预设和序列编码器预设（如果需要）。确保您的安装程序删除旧的预设并安装新的预设。

### 刷新参数缓存

如果您不增加参数版本，您可以手动刷新参数缓存。删除旧预设后，执行以下操作：

1. 删除主机为最近使用的参数设置创建的隐藏预设。在 Media Encoder 预设和 Premiere Pro 预设的文件夹中查找名为 Placeholder Preset.epr 的文件。
2. 删除 Media Encoder 使用的 batch.xml。它也在 Media Encoder 预设的文件夹中。删除此文件相当于从 Media Encoder 渲染队列中删除项目。
3. 删除使用导出器的 Premiere Pro 序列编码器预设（如果有）
4. 即使删除了所有旧预设，Media Encoder 最初可能仍会显示旧的缓存参数 UI。在设置 UI 中，只需切换到不同的格式，然后再切换回您的格式。

---

## 多声道音频布局

要支持多声道音频布局，应在 MakeAudioRenderer() 中请求 kPrAudioChannelType_MaxChannel 类型。

您用于 GetAudio() 的音频缓冲区同样应该是 kPrAudioChannelType_MaxChannel 通道的数组，是的，这意味着您可能会分配比实际使用更多的空间。

在导出器的音频选项卡 UI 中，您可以提供一个参数来选择各种多声道音频布局。您可以将您的设置与内置格式（如 QuickTime 和 MXF（如 MXF OP1a 和 DNxHD）进行比较。根据音频导出设置中的用户选择（例如，2x 立体声等），您将知道在 GetAudio() 中传递回来的哪些通道应该实际写入文件。

这是一个关于音频轨道映射的有用视频：[http://www.video2brain.com/en/lessons/changes-in-audio-tracks-and-merged-clip-audio](http://www.video2brain.com/en/lessons/changes-in-audio-tracks-and-merged-clip-audio)

---

## 隐藏字幕

从 CC 开始，导出设置包括一个新的字幕选项卡，用于隐藏字幕导出。对于所有格式，可以导出一个包含字幕的辅助文件。此外，导出器可以选择将隐藏字幕直接嵌入输出文件中。首先，导出器必须将 exExporterInfoRec.canEmbedCaptions 设置为 true。这将添加从字幕选项卡中的导出选项下拉菜单中将字幕嵌入输出文件的选项。如果在导出期间选择了此选项，exDoExportRec.embedCaptions 将为 true。导出器应使用 [Captioning Suite](../../universals/sweetpea-suites#captioning-suite) 检索字幕。

---

## 多种文件格式

要在单个导出器中支持多种文件格式，请在 `exSelStartup` 期间一次描述一种格式。描述完第一个格式后，从 `exSelStartup` 返回 exportReturn_IterateExporter，导出器将再次被调用以描述第二个格式，依此类推。描述完最后一个格式后，返回 exportReturn_IterateExporter，导出器将再次被调用。这次，返回 exportReturn_IterateExporterDone。

为每种格式使用唯一的 fileType。当您稍后收到 `exSelGenerateDefaultParams`、`exSelPostProcessParams` 等时，您需要注意 fileType，并根据格式进行响应。

---

## 用于编辑模式的导出器

用于编辑模式的导出器必须具有编解码器参数，并且该参数 ID 必须为 ADBEVideoCodec。如果 Premiere Pro 找不到此参数，它将无法在自定义编辑模式中重新打开项目，并将项目恢复为桌面模式。

### 序列编码器预设

现在，编辑模式需要序列预览预设。这些预设包含生成预览文件的导出器参数。这使得预览文件格式更容易定义，通过使用 Media Encoder 或 Premiere Pro UI 创建预设，而不是直接编辑 XML。

要创建序列编码器预设：

1. 创建一个预设。您为其指定的名称将用于序列设置 > 常规 > 预览文件格式下拉菜单中。
2. 确保此预设与 Premiere Pro 的其他序列预设一起安装在 Premiere Pro 的应用程序文件夹中：

在 Windows 上，它们应安装在此处：`[应用程序安装路径]\Settings\EncoderPresets\SequencePreview\[编辑模式 GUID]*.epr`

在 MacOS 上，基本相同（在应用程序包内）：`[应用程序安装路径]/[Premiere Pro 包]/Contents/Settings/EncoderPresets/ SequencePreview/[编辑模式 GUID]/*.epr`

正如您从上面的安装路径中看到的，Premiere Pro 通过使用与编辑模式 GUID 匹配的文件夹中的预设，将序列预览预设与它们所属的编辑模式关联起来。编辑模式 GUID 在编辑模式 XML 文件中使用 `<EditingMode.ID>` 标签定义。

### 向现有编辑模式添加新的预览文件格式

您不仅可以为您自己的编辑模式提供序列预览预设，还可以为内置编辑模式之一添加额外的序列预览预设。内置编辑模式的编辑模式 GUID 可以在 Adobe Editing Modes.xml 文件中找到。例如，Windows 上的桌面编辑模式的 GUID 为 9678AF98A7B7-4bdb-B477-7AC9C8DF4A4E。在 Mac OS 上为 795454D9-D3C2-429d-9474- 923AB13B7018。

您还可以通过编辑预设文件中的 `<PresetComments>` 标签来限制列表并指定默认选择的预设。

如果标签的值以 "IsConstrained," 开头，则后面跟着一个逗号分隔的 4ccs 列表，该列表指示哪些编解码器可用，并且第一个编解码器默认被选择。

例如，Mac DV NTSC 编辑模式的 QuickTime DV NTSC.epr 中有这个：`<PresetComments>IsConstrained,dvc </PresetComments>`

这将导出器的编解码器选择限制为仅单个编解码器选择。

---

## 立体视频

:::note
目前，立体导出器必须使用旧的“拉取”模型，并且仅在直接从 Premiere Pro 导出时接收立体视频。换句话说，当导出排队在 Adobe Media Encoder 中运行时，它们不会获得立体视频。
:::

要获取左右眼的渲染帧，请使用 [Video Segment Suite](../../universals/sweetpea-suites#video-segment-suite) 请求左右剪辑列表，并从两者渲染帧。导出器可以通过查看片段哈希来判断两者中的片段是否相同（意味着它们没有任何立体内容），并且您可以通过查看请求标识符来判断两帧是否相同。

---

## 导出器中的时间线片段

导出器可用的时间线片段并不总是完全描述正在导出的序列。为了始终获得完全描述序列的时间线片段，导出器需要与渲染器插件一起工作。

在序列导出期间，Premiere Pro 会复制项目文件并将其传递给 Media Encoder。Media Encoder 使用 PProHeadless 进程生成渲染帧。因此，当在 Media Encoder 中运行的导出器解析序列时，它只有非常高级的视图。它将整个序列视为单个剪辑，并将任何可选的裁剪或滤镜视为应用的效果。因此，在解析该简单的高级序列时，如果没有效果，导出器可以仅使用 MediaNode 的 ClipID 与 [Clip Render Suite](../../universals/sweetpea-suites#clip-render-suite) 直接从 PProHeadless 进程获取帧。在 PProHeadless 进程中，渲染器插件可以介入，解析真实的序列，并可选地以自定义像素格式提供帧。

在渲染预览文件时，Premiere Pro 在没有 Media Encoder 的情况下进行渲染，因此导出器可以获取每个剪辑的各个片段，类似于以前。

---

## 智能渲染

在非常特定的情况下，导出器可以请求压缩帧，避免不必要的解压缩/重新压缩。

这将通过提供解析时间线片段的导出器和渲染器插件来完成。

如果源可以复制到目标，则压缩帧可以以自定义像素格式传递。

然而，这些压缩帧并不保证，因此导出器应准备好处理未压缩的帧。

---

## 入口函数

```cpp
DllExport PREMPLUGENTRY xSDKExport (
 csSDK_int32 selector,
 exportStdParms* stdParmsP,
 void* param1,
 void* param2)
```

- `selector` 是主机希望导出器执行的操作。
- `stdParms` 提供回调以从主机获取其他信息或让主机执行任务。
- 参数 1 和 2 随选择器而变化；它们可能包含特定值或指向结构的指针。

如果成功，返回 `exportReturn_ErrNone`，或适当的返回代码。

---

## 标准参数

主机在每个选择器中将此结构的指针发送给插件。

```cpp
typedef struct {
 csSDK_int32 interfaceVer;
 plugGetSPBasicSuiteFunc* getSPBasicSuite;
} exportStdParms;
```

| 成员 | 描述 |
|---|---|
| `interfaceVer` | 导出器 API 版本，其中之一： |
| | - Premiere Pro CC - `prExportVersion400` |
| | - Premiere Pro CS6 - `prExportVersion300` |
| | - Premiere Pro CS5.5 - `prExportVersion250` |
| | - Premiere Pro CS5 - `prExportVersion200` |
| | - Premiere Pro 4.0.1 到 4.2.1 - `prExportVersion101` |
| | - Premiere Pro CS4 - `prExportVersion100` |
| `getSPBasicSuite` | 这个非常重要的调用返回 SweetPea 套件，允许插件获取和释放所有其他 [SweetPea 套件](../../universals/sweetpea-suites)。 |
| | ```SPBasicSuite* getSPBasicSuite();``` |
