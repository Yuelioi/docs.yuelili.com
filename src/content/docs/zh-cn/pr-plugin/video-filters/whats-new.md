---
title: 新功能
---
# 新功能

## Premiere Pro CS5 中的新功能

在效果面板中，视频滤镜现在会显示徽章，以指示它们是否支持 YUV、32 位和加速渲染。

用户可以过滤效果列表，仅显示支持这些渲染模式的效果。如果视频滤镜通过现有的 `fsGetPixelFormatsSupported` 声明支持，它们将自动获得 YUV 和 32 位徽章。

还可以创建自定义徽章。有关更多信息，请参阅效果徽章。

---

## Premiere Pro CS3 中的新功能

复选框控件现在直接在效果控制面板中支持。

滤镜可以通过返回 `fsHasNoSetupDialog` 或 `fsNoErr`，在 `fsHasSetupDialog` 期间指定是否在效果控制面板中显示设置按钮。

以前，这是在 PiPL 资源中设置的。
