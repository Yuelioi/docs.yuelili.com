---
title: 调用顺序
---
# 调用顺序

与所有 AEGP 一样，插件 PiPL 中导出的入口函数在启动时被调用。在此函数中，AEIO 必须提供所需函数的指针并描述其功能，然后将适当的结构传递给 [AEGP_RegisterIO()](../../aegps/aegp-suites#aegp_registersuites5)。

---

## 导入

当用户在文件导入对话框中选择由您的 AEIO 处理的文件类型时，其 [AEIO_VerifyFileImportable()](../new-kids-on-the-function-block#aeio_functionblock4) 函数将被调用；对于用户导入的每个此类文件，该函数会再次被调用。[AEIO_InitInSpecFromFile()](../new-kids-on-the-function-block#aeio_functionblock4) 会为每个文件调用；解析文件，并使用各种设置函数向 After Effects 描述它。此外，构建与文件关联的任何选项数据，并使用 [AEGP_SetInSpecOptionsHandle()](../new-kids-on-the-function-block#aegp_ioinsuite5) 保存该数据。

然后，After Effects 调用插件的 [AEIO_GetInSpecInfo()](../new-kids-on-the-function-block#aeio_functionblock4) 函数，以获取文件的描述性文本以显示在项目窗口中。如该函数的描述中所述，它也可能为文件夹调用；我们建议，如果文件没有有效的选项数据，您无需执行任何操作且不返回错误（我们的 AEIO 就是这样做的）。

然后发送 [AEIO_CountUserData()](../new-kids-on-the-function-block#aeio_functionblock4)；如果 AEIO 指示存在用户数据，[AEIO_GetUserData()](../new-kids-on-the-function-block#aeio_functionblock4) 将随后被调用。After Effects 随后会通过发送 [AEIO_DrawSparseFrame()](../new-kids-on-the-function-block#aeio_functionblock4) 请求插件绘制一帧视频（用于项目窗口缩略图）。

一旦支持的文件被添加到合成中，用户交互将生成对 `AEIO_DrawSparseFrame()` 和 [AEIO_GetSound()](../new-kids-on-the-function-block#aeio_functionblock4) 的调用。

当项目保存时，如果存在与 AEIO_InSpec 关联的选项数据，After Effects 将在保存期间发送 [AEIO_FlattenOptions()](../new-kids-on-the-function-block#aeio_functionblock4)，在此期间 AEIO 解析选项数据，并创建不包含外部内存引用的表示形式。同样，任何 AEIO_OutSpec 选项数据的存在将导致发送 [AEIO_GetFlatOutputOptions()](../new-kids-on-the-function-block#aeio_functionblock4)。

---

## 导出

如果用户将项目添加到渲染队列并选择 AEIO 支持的输出格式，[AEIO_InitOutputSpec()](../new-kids-on-the-function-block#aeio_functionblock4) 将被发送。使用各种获取函数获取有关输出设置的信息，并使用 [AEGP_SetOutSpecOptionsHandle()](../new-kids-on-the-function-block#aeio_functionblock4) 存储任何相关信息，随后调用 `AEIO_GetFlatOutputOptions()`。[AEIO_GetDepths()](../new-kids-on-the-function-block#aeio_functionblock4) 被发送，以便 After Effects 可以确定 AEIO 支持的输出像素位深度。[AEIO_GetOutputInfo()](../new-kids-on-the-function-block#aeio_functionblock4) 被发送，以便可以在输出模块详细信息中显示文件名、类型和子类型信息。

当用户点击渲染队列中的“格式选项”按钮时，[AEIO_UserOptionsDialog()](../new-kids-on-the-function-block#aeio_functionblock4) 被调用。

当用户实际点击“渲染”按钮时，[AEIO_SetOutputFile()](../new-kids-on-the-function-block#aeio_functionblock4) 将被调用，随后是 [AEIO_GetSizes()](../new-kids-on-the-function-block#aeio_functionblock4)（您的 AEIO 负责确定目标是否有足够的磁盘空间）。

在发送视频帧之前，[AEIO_StartAdding()](../new-kids-on-the-function-block#aeio_functionblock4) 被发送，以便 AEIO 打开文件句柄并写出文件头。如果 AEIO 支持视频或音频格式，[AEIO_AddSoundChunk()](../new-kids-on-the-function-block#aeio_functionblock4) 会为每个音频块发送，[AEIO_AddFrame()](../new-kids-on-the-function-block#aeio_functionblock4) 会为每个视频帧发送。

如果 AEIO 支持静态图像序列，[AEIO_OutputFrame()](../new-kids-on-the-function-block#aeio_functionblock4) 会被重复调用。After Effects 发送要输出的帧的 PF_EffectWorld 表示。

[AEIO_WriteLabels()](../new-kids-on-the-function-block#aeio_functionblock4) 被调用（针对每帧），以便插件有机会写出场和 alpha 解释信息。当没有更多帧（或音频）要输出时，[AEIO_EndAdding()](../new-kids-on-the-function-block#aeio_functionblock4) 被发送。关闭输出文件。
