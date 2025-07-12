---
title: 选择器描述
---
# 选择器描述

## fsInitSpec

响应此选择器是可选的。当滤镜应用于剪辑并且插件首次被调用时，会发送此选择器。此调用可用于使用默认值初始化插件参数，以实现初始的“静默设置”，在这种情况下，当滤镜应用于剪辑时，`fsSetup` 会被跳过，以避免弹出可能在 `fsSetup` 中需要的模态对话框。

分配并传递回一个包含参数值的结构的句柄到 `specsHandle` 中。滤镜会获得总持续时间（以样本为单位）以及源缓冲区中第一个样本的编号。

---

## fsHasSetupDialog

Premiere Pro CS3 新增。可选。通过返回 `fsHasNoSetupDialog` 或 `fsNoErr` 来指定滤镜是否具有设置对话框。

---

## fsSetup

可选。当滤镜应用时发送，如果 `fsInitSpec` 没有分配有效的 `specsHandle`。当用户点击效果控制面板中的设置链接时也会发送。滤镜可以选择显示一个（平台相关的）模态对话框以从用户那里获取新的参数值。首先，检查 `VideoHandle.specsHandle`。如果为 NULL，则表示插件是首次被调用。

将参数初始化为其默认值。如果非 NULL，则从 `specsHandle` 加载参数值。现在使用参数值显示模态设置对话框以获取新值。返回一个包含参数值的结构的句柄到 `specsHandle` 中。

为了在插件调用之间正确存储参数值，请在 PiPL 的 ANIM 属性中描述 `specsHandle` 数据的结构。Premiere 会在发送 `fsExecute` 之前适当地插值可动画的参数值。

滤镜会获得总持续时间（以样本为单位）以及源缓冲区中第一个样本的编号。

在 `fsSetup` 期间，传递给 `VideoRecord.source` 的帧几乎总是 320x240。例外情况是，如果插件在效果首次应用时接收到 `fsSetup` 选择器，那么它将接收到一个全高度的帧，宽度调整为使帧具有方形像素宽高比。例如，在 1440x1080 HDV 序列中应用的滤镜将接收到完整的 1920x1080 缓冲区。该帧是滤镜在当前时间指示器上应用的图层。如果 CTI 不在应用滤镜的剪辑上，则该帧为透明黑色。

如果滤镜具有设置对话框，则应使用 `VFilterCallbackProcPtr` 来获取预览的源帧。`getPreviewFrameEx` 可用于获取渲染的帧，尽管如果使用此调用，视频滤镜应准备好以可重入方式调用 `fsExecute`。

---

## fsExecute

这实际上是视频滤镜唯一必需的选择器，渲染在此处进行。获取 `VideoHandle.source` 中的输入帧，渲染效果并将帧返回到 Premiere 的 `VideoHandle.destination` 中。`specsHandle` 包含您的参数设置（如果可动画化，则已经插值）。您可以将任何额外的非参数数据的句柄存储在 `VideoHandle.InstanceData` 中。如果这样做，请在响应 `fsDisposeData` 时释放该句柄，否则您的插件将泄漏内存。

您的滤镜接收到的视频可能是隔行扫描的，场顺序由项目设置决定。如果是隔行扫描的，您的插件将每帧视频被调用两次，每个 PPix 将是帧高度的一半。

---

## fsDisposeData

可选。在项目关闭时调用。释放 `fsExecute` 期间创建的任何实例数据。请参阅 `VideoHandle->InstanceData`。

---

## fsCanHandlePAR

可选。通过返回以下标志的组合来指示您的滤镜希望如何处理像素宽高比。

只有在满足几个条件时才会发送此选择器。

应用滤镜的剪辑的像素宽高比必须已知，并且不能是正方形的（1.0）。

剪辑不能是纯色。

PiPL 位 `anyPixelAspectRatio` 和 `unityPixelAspectRatio` 不能设置。

| 标志 | 描述 |
| --- | --- |
| `prEffectCanHandlePAR` | Premiere 不应为补偿 PAR 而对源图像进行任何调整 |
| `prEffectUnityPARSetup` | Premiere 应在 `fsSetup` 期间将源图像渲染为方形像素 |
| `prEffectUnityPARExecute` | Premiere 应在 `fsExecute` 期间将源图像渲染为方形像素 |

---

## fsGetPixelFormatsSupported

可选。

获取支持的像素格式。

迭代调用，直到所有格式都已给出。

将 `(*theData)->pixelFormatSupported` 设置为支持的像素格式，并返回 `fsNoErr`。

当所有格式都已描述时，返回 `fsBadFormatIndex`。

请参阅场感知视频滤镜示例以获取示例。

---

## fsCacheOnLoad

可选。返回 `fsDoNotCacheOnLoad` 以禁用此滤镜的插件缓存。
