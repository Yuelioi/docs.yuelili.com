---
title: 错误处理
---
# 错误处理

永远、永远、*永远*（永远！）从 `main()` 返回一个 `PF_Err`。插件必须将所有错误传递回 After Effects。

至关重要的是，除非你已经处理了错误，否则你必须将所有错误（由回调和 PICA 套件返回的错误）传递给 After Effects。

要警惕返回正确的错误代码，并释放你分配的任何内存。

真的。我们是认真的。

---

## 错误代码

| 错误 | 含义 |
|---|---|
| `PF_Err_NONE` | 成功。 |
| `PF_Err_OUT_OF_MEMORY` | 内存分配失败。 |
| | 注意，RAM 预览会导致这种情况，因此 After Effects 会期望从你的插件中收到此错误。 |
| `PF_Err_INTERNAL_STRUCT_DAMAGED` | 使用数据结构时出现问题。 |
| `PF_Err_INVALID_INDEX` | 查找/使用数组成员时出现问题。 |
| `PF_Err_UNRECOGNIZED_PARAM_TYPE` | 参数数据出现问题。 |
| `PF_Err_INVALID_CALLBACK` | 通过指针访问函数时出现问题。 |
| `PF_Err_BAD_CALLBACK_PARAM` | 使用传递给回调的参数时出现问题。 |
| `PF_Interrupt_CANCEL` | 如果用户操作中止渲染，效果和 AEGP 回调都可以将此返回给效果。 |
| | 如果效果从回调中收到此错误，它应停止处理帧并将错误返回给主机。 |
| | 未能传递错误可能会导致缓存渲染错误的帧。 |
| `PF_Err_CANNOT_PARSE_KEYFRAME_TEXT` | 当解析剪贴板到关键帧数据时出现问题，从 `PF_Arbitrary_SCAN_FUNC` 返回此错误。 |

---

## 错误报告策略

After Effects 有一个一致的错误处理策略；请遵循它。

如果你在插件代码中遇到错误，请在从插件返回到 After Effects 之前立即向用户报告。

After Effects 认为在插件执行期间遇到的操作系统错误是你的错误。

如果你从我们的回调函数中收到一个错误代码，请将其传递回 After Effects；我们已经报告了它。

内存不足错误永远不会由 After Effects 报告。在 RAM 预览期间以及 After Effects 以 -noui 模式运行时，错误报告总是被抑制。

要从插件内部报告错误，请设置 `PF_OutFlag_DISPLAY_ERROR_MESSAGE`，并在 [PF_OutData>return_msg](../PF_OutData#pf_outdata) 中描述错误。

这样做会将你的错误记录到渲染日志中，并防止由渲染引擎或脚本驱动的渲染中出现系统挂起。

---

## 深入探索

现在你已经对效果插件有了基本的了解，并准备好开始尝试一些真正的代码。继续开始吧！

在掌握了插件的基本设置后，你可能会对可重用代码、高级功能以及如何优化代码以使其更快有一些疑问。

为此，After Effects 通过函数套件暴露了大量的内部功能。

通过依赖 After Effects 代码来实现实用功能，你应该能够快速实现图像处理算法。

这将在 [效果详情](../../effect-details/effect-details) 中讨论
---
