---
title: 套件
---
# 套件

有关如何获取和管理套件的信息，请参阅 [SweetPea 套件](../../universals/sweetpea-suites)。

---

## GPU 设备套件

此套件提供有关任何可用 GPU 设备的信息。例如，GetDeviceInfo() 允许效果/过渡查看设备是否支持 OpenCL 或 CUDA。

使用此套件通过 AcquireExclusiveDeviceAccess 和 ReleaseExclusiveDeviceAccess 获取对设备的独占访问权限。如果需要，您可以使用从 GetDeviceInfo() 返回的 outDeviceHandle 来协调设备。

理想情况下，设备内存应通过此套件分配。在某些情况下，您可能会发现使用纹理/图像对象作为源更高效。对于 CUDA，您可以将纹理引用绑定到现有的线性缓冲区。对于 OpenCL，您可以使用 image_2d_from_buffer 从现有的 2D 缓冲区对象创建图像对象。临时分配也可以，但可能会相当慢。

---

## 不透明效果数据套件

此套件为效果提供了一种在轨道项上同一效果的实例之间共享未扁平化序列数据的方式。数据对主机是不透明的，效果负责维护共享数据的线程安全性。主机提供引用计数，效果可以使用它来管理共享数据的生命周期。以下是此套件的使用概述：

当应用效果时，在 `PF_Cmd_SEQUENCE_SETUP` 中，效果插件分配并初始化 PF_OutData->out_data 中的序列数据。然后它调用

AcquireOpaqueEffectData()。不透明效果数据尚不存在，因此插件分配它，并调用 RegisterOpaqueEffectData，然后将数据从序列数据复制过来。因此，序列数据和不透明效果数据都被分配。

然后 `PF_Cmd_SEQUENCE_RESETUP` 被调用（多次）用于渲染的效果克隆。效果实例知道它是克隆，因为 PF_InData->sequence_data 为 NULL（如果效果有不透明效果数据，则有一个特殊情况 - 在这种情况下，其渲染克隆将收到带有 NULL sequence_data 指针的 `PF_Cmd_SEQUENCE_RESETUP`）。然后它调用 AcquireOpaqueEffectData()。作为渲染克隆，它依赖于这个不透明效果数据，而不是序列数据，并且不会尝试将序列数据复制到不透明效果数据。

另一方面，当 `SEQUENCE_RESETUP` 在 PF_InData 中带有有效的 sequence_data 被调用时，这不是渲染克隆。插件解压此序列数据。然后它调用 AcquireOpaqueEffectData()，如果不透明效果数据尚不存在（即重新打开保存的项目时），插件分配它，并调用 RegisterOpaqueEffectData。然后它将序列数据复制到不透明效果数据。

在 `SEQUENCE_FLATTEN` 上，插件获取未扁平化的数据，将其扁平化，并处理未扁平化的数据。

当 `SEQUENCE_SETDOWN` 被调用时（可能会多次调用以处理渲染克隆），调用 ReleaseOpaqueEffectData()。

### instanceID

[不透明效果数据套件](#opaque-effect-data-suite) 函数需要效果的 instanceID。对于软件入口函数，您可以使用 PF_UtilitySuite 中的 GetFilterInstanceID() 获取它，定义在 PrSDKAESupport.h 中。对于 GPU 渲染入口函数，您可以使用以下代码：csSDK_uint32 instanceID;

```cpp
GetProperty( kVideoSegmentProperty_Effect_RuntimeInstanceID, instanceID);
```

…其中 GetProperty() 定义在 PrGPUFilterModule.h 中，`kVideoSegmentProperty_` ID 定义在 PrSDKVideoSegmentProperties.h 中。
