---
title: 访问音频数据
---
# 访问音频数据

使用[交互回调](../../effect-details/interaction-callback-functions)中的 `PF_CHECKOUT_LAYER_AUDIO` 来获取音频图层。

此图层是不透明的；使用 `PF_GET_AUDIO_DATA` 来访问该音频的具体细节。

与像素数据一样，重要的是您应尽快检入音频。

如果您的效果需要输入的时间范围与输出的时间范围不同，请在[帧选择器](../../effect-basics/command-selectors#frame-selectors)中的 `PF_Cmd_AUDIO_SETUP` 期间更新 `PF_OutData` 中的 `startsampL` 和 `endsampL` 字段。

---

## 扩展音频剪辑

您无法通过 API 扩展音频剪辑的长度。

然而，用户在应用您的效果之前扩展剪辑的长度是相对简单的。对图层应用时间重映射，并简单地扩展出点。

如果您正在为声音剪辑添加延迟效果，您会希望给它时间逐渐消失，而不是在原始终点截断声音。

记录用户在应用您的效果时应采取的步骤。
