---
title: 实现细节
---
# 实现细节

## 导出位深度

在输出模块设置中，用户可以根据AEIO在[AEIO_FunctionBlock4](../new-kids-on-the-function-block#new-kids-on-the-function-block)中的`AEIO_GetDepths()`声明的支持选项选择深度。

如果插件支持更高位深的导出，它应该能够处理在`AEIO_AddFrame()`或`AEIO_OutputFrame()`中传递的更高位深的PF_EffectWorlds，即使导出设置未设置为相同的深度。

传递给AEIO的帧和最终输出不一定是相同的深度。

如果After Effects认为这样会获得更高质量，您可能会收到以项目位深度传递的帧，而不是最终输出。

---

## 用户数据与选项

可以使用用户数据分配或选项句柄来存储文件的元数据。

我们使用用户数据来存储要嵌入文件中的信息（假设文件格式支持此类信息）；标记数据、字段标签等。

我们使用选项句柄来存储有关文件的信息；输出设置、尺寸、使用的压缩设置细节。
