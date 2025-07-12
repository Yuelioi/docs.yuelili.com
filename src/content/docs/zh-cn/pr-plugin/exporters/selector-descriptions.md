---
title: 选择器描述
---
# 选择器描述

本节简要概述了每个选择器，并强调了实现问题。

更多实现细节请参见本章末尾。

---

## exSelStartup

- param1 - [exExporterInfoRec\*](../structure-descriptions#exexporterinforec)
- param2 - `unused`

在应用程序启动时发送，除非导出器已被缓存。

单个导出器可以支持多种编解码器和文件扩展名。

`exExporterInfoRec` 描述了导出器的属性，例如格式显示名称。

---

## exSelBeginInstance

- param1 - [exExporterInstanceRec\*](../structure-descriptions#exexporterinstancerec)
- param2 - `unused`

分配任何私有数据。

---

## exSelGenerateDefaultParams

- param1 - [exGenerateDefaultParamRec\*](../structure-descriptions#exgeneratedefaultparamrec)
- param2 - `unused`

使用 [Export Param Suite](../suites#export-param-suite) 设置导出器的默认参数。

---

## exSelPostProcessParams

- param1 - [exPostProcessParamsRec\*](../structure-descriptions#expostprocessparamsrec)
- param2 - `unused`

后处理参数。这是必须为参数 UI 提供本地化字符串的地方。

---

## exSelValidateParamChanged

- param1 - [exParamChangedRec\*](../structure-descriptions#exparamchangedrec)
- param2 - `unused`

验证任何已更改的参数。根据参数值的更改，导出器可以使用 [Export Param Suite](../suites#export-param-suite) 更新其他参数值，或显示/隐藏某些参数控件。

要通知主机插件正在更改其他参数，请将 `exParamChangedRec.rebuildAllParams` 设置为非零值。

---

## exSelGetParamSummary

- param1 - [exParamSummaryRec\*](../structure-descriptions#exparamsummaryrec)
- param2 - `unused`

提供当前参数设置的文本摘要，该摘要将显示在导出设置对话框的摘要区域中。

---

## exSelParamButton

- param1 - [exParamButtonRec\*](../structure-descriptions#exparambuttonrec)
- param2 - `unused`

如果导出器在其参数 UI 中有一个或多个按钮，并且用户在导出设置中单击其中一个按钮，则会发送此选择器。

按下的按钮的 ID 在 `exParamButtonRec.buttonParamIdentifier` 中传递。

使用平台特定的 UI 显示任何对话框，收集任何用户输入，并将任何更改保存回 `privateData`。

如果用户取消对话框，返回 `exportReturn_ParamButtonCancel` 以表示 `privateData` 中没有任何更改。

---

## exSelExport

- param1 - [exDoExportRec\*](../structure-descriptions#exdoexportrec)
- param2 - `unused`

执行导出！当用户开始导出到导出器支持的格式时，或者如果导出器在编辑模式下使用并且用户渲染工作区时发送。

单文件导出器每次导出仅发送此选择器一次（例如 AVI、QuickTime）。要创建单个文件，请设置一个循环，在其中使用 [Sequence Render Suite](../suites#sequence-render-suite) 中的渲染调用之一和 [Sequence Audio Suite](../suites#sequence-audio-suite) 中的 GetAudio 请求 startTime 到 endTime 范围内的每一帧。为了获得更好的性能，您可以使用 [Sequence Render Suite](../suites#sequence-render-suite) 中的异步调用来让主机在多个线程上渲染多帧。

静态帧导出器为序列中的每一帧发送 `exSelExport`（例如编号的 TIFF）。主机将适当地命名文件。

通过检查帧是否重复来节省渲染时间。检查从渲染调用返回的 SequenceRender_GetFrameReturnRec.repeatCount，它保存帧重复计数。

---

## exSelExport2

- param1 - [exDoExportRec2\*](../structure-descriptions#exdoexportrec2)
- param2 - `unused`

执行导出！与 exSelExport 相同，只是传递了 exDoExportRec2（其中包含 LUT 描述）。

导出器可以指定需要在导出处理中作为最后一步应用的 LUT 的 ID。这是为了在导出路径中包含用于进行颜色空间转换的 LUT。

如果指定了 LUT，`ExportColorSpace` 表示 LUT 的输出颜色空间。

---

## exSelQueryExportFileExtension

- param1 - [exQueryExportFileExtensionRec\*](../structure-descriptions#exqueryexportfileextensionrec)
- param2 - `unused`

对于支持多个文件扩展名的导出器，根据文件类型指定扩展名。

如果导出器不支持此选择器，则扩展名由导出器在 `exExporterInfoRec.fileTypeDefaultExtension` 中指定。

---

## exSelQueryOutputFileList

- param1 - [exQueryOutputFileListRec\*](../structure-descriptions#exqueryoutputfilelistrec)
- param2 - `unused`

对于导出到多个文件的导出器。这是在导出之前调用的，以便主机找出哪些文件需要被覆盖。

它在导出后调用，以便主机知道所有创建的文件，用于任何后编码任务，例如 FTP。如果导出器不支持此选择器，主机应用程序将只知道原始路径。

此选择器将被调用三次。在第一次调用时，插件填写 numOutputFiles。然后主机将创建 numOutputFiles 数量的 outputFileRecs，但为空。

在第二次调用时，插件填写 outputFileRecs 中每个 exOutputFileRec 元素的路径长度（包括尾随空字符）。然后主机将在每个 outputFileRec 中分配所有路径。

在第三次调用时，插件填写 outputFileRecs 的路径成员。

---

## exSelQueryStillSequence

- param1 - [exQueryStillSequenceRec\*](../structure-descriptions#exquerystillsequencerec)
- param2 - `unused`

主机应用程序询问仅支持静态图像的导出器是否希望以序列形式导出，以及以什么帧速率导出。

---

## exSelQueryOutputSettings

- param1 - [exQueryOutputSettingsRec\*](../structure-descriptions#exqueryoutputsettingsrec)
- param2 - `unused`

主机应用程序询问导出器有关当前设置的一般详细信息。这是一个必需的选择器。

---

## exSelValidateOutputSettings

- param1 - [exValidateOutputSettingsRec\*](../structure-descriptions#exvalidateoutputsettingsrec)
- param2 - `unused`

主机应用程序询问导出器是否可以使用当前设置进行导出。

如果不行，导出器应返回 `exportReturn_ErrLastErrorSet`，并且错误字符串应设置为失败的描述。

---

## exSelEndInstance

- param1 - [exExporterInstanceRec\*](../structure-descriptions#exexporterinstancerec)
- param2 - `unused`

释放任何私有数据。

---

## exSelShutdown

- param1 - `unused`
- param2 - `unused`

在关闭前立即发送。释放所有剩余内存并关闭任何打开的文件句柄。

---

## exSelQueryExportColorSpace

- param1 - [exExporterInstanceRec\*](../structure-descriptions#exqueryexportcolorspacerec)
- param2 - `unused`

描述导出期间要使用的颜色空间。

---
