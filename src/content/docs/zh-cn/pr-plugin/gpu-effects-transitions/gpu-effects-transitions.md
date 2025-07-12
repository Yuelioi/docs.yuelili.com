---
title: GPU 效果与转场
---
# GPU 效果与转场

本章描述了在 Premiere Pro 中与 GPU 互操作的效果和转场的额外功能。当使用 GPU 加速模式下的 Mercury Playback Engine 时，GPU 扩展允许这些插件完全访问 GPU 驻留帧，而无需回读到系统内存。效果和转场还可以选择性地告诉主机它们支持实时处理，这样它们就不会被标记为非实时。

GPU 扩展构建在使用 After Effects SDK 开发的效果和转场之上。这些扩展旨在补充常规的软件效果或转场，这些效果或转场定义了软件渲染路径、参数、自定义 UI 绘制和其他标准交互。如果可能，GPU 效果将作为使用 GPU 渲染的新入口函数。否则将使用软件渲染路径。

---

## 系统要求

开发 GPU 效果和转场的系统要求高于开发其他插件。您需要一张支持 Mercury Playback Engine GPU 加速的显卡。请确保您的显卡在您开发的平台上支持您正在开发的视频加速类型。有关最新支持的显卡列表，请参阅此页面：[https://helpx.adobe.com/premiere-pro/system-requirements.html](https://helpx.adobe.com/premiere-pro/system-requirements.html)

CUDA SDK 也是 CUDA 渲染开发所需的。

---

## 编译说明

### CUDA

要在 Premiere SDK 中编译 GPU 效果，我们强烈建议使用 CUDA SDK 11.8。

注意：使用 CUDA SDK 11.8 构建的 GPU 效果将无法在 NVIDIA Kepler 系列显卡上运行。最低 CUDA 计算能力已提高到 sm_50。

### CUDA 运行时 API 与驱动 API

1. 使用 CUDA 驱动 API
 - 为了获得最佳兼容性，我们强烈建议仅使用 CUDA 驱动 API。与运行时 API 不同，驱动 API 直接向后兼容未来的驱动程序。请注意，CUDA 运行时 API 旨在处理/自动化一些在驱动 API 中暴露并需要处理的管理工作，因此从运行时 API 迁移到驱动 API 可能需要学习并实现一些新的步骤/代码。
2. 静态链接到 CUDA 运行时
 - 如果您必须坚持使用 CUDA 运行时 API，我们建议您静态链接到 CUDA 运行时。这是利用驱动程序向后兼容性的一种替代方法。可以通过链接 `cudart_static.lib` 来实现。
3. 动态链接到 CUDA 运行时
 - 这种方法也有效，但容易出现兼容性问题。用户系统上需要有一个兼容的 CUDA 运行时 DLL，以便驱动程序能够理解并向后兼容。目前 Premiere Pro 附带了我们推荐的 CUDA SDK 版本的 CUDA 运行时 DLL。未来可能会发生变化。如果您必须动态链接到 CUDA 运行时，我们建议您随插件一起提供 CUDA 运行时 DLL 的副本，并使用 `dlopen/LoadLibrary` 显式加载所需的运行时。有关更多详细信息，请参阅 NVIDIA 的 GPU 管理和部署指南中的 CUDA 兼容性部分：[https://docs.nvidia.com/deploy/cuda-compatibility/](https://docs.nvidia.com/deploy/cuda-compatibility/)

---

## DirectX

我们很高兴地宣布，我们一直在努力在我们的渲染管道中引入对 DirectX 12 的支持。我们将很快分享启用 DirectX 的解锁说明。

### 为什么？

- 性能 - DirectX 12 是硬件的薄封装层，与 OpenCL/CUDA 相比，它为我们提供了更多的控制权，可以更好地执行着色器。这意味着更高的性能上限。
- 稳定性/错误处理 - DirectX 12 支持 TDR 检测和恢复，可以帮助我们从硬件问题中恢复。它得到了微软的积极支持，即主动修复驱动程序中的错误。
- 互操作性 - 与我们已经使用 DirectX 12 的显示模块无缝互操作。

### 方向

为 Premiere 添加新的渲染引擎是一项巨大的工程。尽管我们已经取得了显著进展，但它仍在开发中，并将很快为您提供更新。

### 反馈与支持

我们很高兴收到任何关于 DirectX 的想法或回答任何问题。您可以通过 [pusingha@adobe.com](mailto:pusingha@adobe.com) 联系我，或者将问题发布到 [ae_api_nda@adobe.com](mailto:ae_api_nda@adobe.com)。
