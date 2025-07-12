---
title: 附加细节
---
# 附加细节

## 多路复用器标签顺序

如果你的导出器提供了一个多路复用器标签（Multiplexer tab），就像一些内置导出器所做的那样，你可能会发现它出现在视频和音频标签之后，而不是像我们的导出器那样在这些标签之前。关键是在多路复用器标签组的参数标识符中使用以下定义：

```cpp
#define ADBEMultiplexerTabGroup "ADBEAudienceTabGroup"
```

---

## 在参数UI中创建不可编辑的字符串

在 `exSelGenerateDefaultParams` 期间，添加一个参数，并将 `exNewParamInfo.flags` 设置为 `exParamFlag_none`。

然后在 `exSelPostProcessParams` 期间，调用 [导出参数套件](../suites#export-param-suite) 中的 `AddConstrainedValuePair()`。

如果你只添加一个值对，那么该参数将是一个不可编辑的字符串。

在SDK导出器示例中，它添加了两个值对，显示为一对并排的单选按钮。

---

## Premiere Elements 中导出器的指南

首先，确保你使用正确的SDK构建导出器。Premiere Elements 8 需要 Premiere Pro CS4 SDK。下一个版本的 Premiere Elements 可能会使用 CS5 SDK。

### 导出器预设

为了让导出器在 Premiere Elements 的UI中显示，你需要在特定位置创建并安装一个预设：

1. 在 [应用程序安装文件夹]/sharingcenter/Presets/pc/ 中创建一个名为 "OTHERS" 的文件夹。
2. 在 OTHERS 下创建一个以你公司命名的子文件夹（例如 MyCompany），并将预设文件 (.epr) 放入其中。预设文件的最终路径应类似于 [应用程序安装文件夹]/sharingcenter/Presets/pc/OTHERS/MyCompany/MyPreset.epr。
3. 重新启动 Premiere Elements。
4. 将一个剪辑添加到时间线。
5. 转到 "共享" 标签。
6. 在 "共享" 标签下选择 "个人计算机"。
7. 你应该在格式列表中看到 "Others - 第三方插件"。选择此项。
8. 你的预设应该在下拉列表中可见。

### 返回值

Premiere Elements 8 使用了稍微不同的返回值定义。请使用以下定义：

```cpp
enum {
 exportReturn_ErrNone = 0,
 exportReturn_Abort,
 exportReturn_Done,
 exportReturn_InternalError,
 exportReturn_OutputFormatAccept,
 exportReturn_OutputFormatDecline,
 exportReturn_OutOfDiskSpace,
 exportReturn_BufferFull,
 exportReturn_ErrOther,
 exportReturn_ErrMemory,
 exportReturn_ErrFileNotFound,
 exportReturn_ErrTooManyOpenFiles,
 exportReturn_ErrPermErr,
 exportReturn_ErrOpenErr,
 exportReturn_ErrInvalidDrive,
 exportReturn_ErrDupFile,
 exportReturn_ErrIo,
 exportReturn_ErrInUse,
 exportReturn_IterateExporter,
 exportReturn_IterateExporterDone,
 exportReturn_InternalErrorSilent,
 exportReturn_ErrCodecBadInput,
 exportReturn_ErrLastErrorSet,
 exportReturn_ErrLastWarningSet,
 exportReturn_ErrLastInfoSet,
 exportReturn_ErrExceedsMaxFormatDuration,
 exportReturn_VideoCodecNeedsActivation,
 exportReturn_AudioCodecNeedsActivation,
 exportReturn_IncompatibleAudioChannelType,
 exportReturn_Unsupported = -100
};
```

红色标记的值是 Premiere Elements 8 独有的，并且将后续的返回值比 Premiere Pro SDK 中的定义提高了两个值。
