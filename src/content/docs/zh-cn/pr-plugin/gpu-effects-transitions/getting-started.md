---
title: 入门指南
---
# 入门指南

## 设置示例项目

如果你正在开发一个效果，可以从两个GPU效果示例项目中的一个开始，逐步将其功能替换为你自己的功能。有关如何构建SDK项目的一般说明，请参考[介绍](../../index)。

除了这些一般说明外，示例项目还依赖于After Effects插件SDK。在Windows上，创建一个名为AE_SDK_BASE_PATH的环境变量，指向该SDK，以便编译器能够找到项目包含的AE头文件。在macOS上，在*Xcode > 首选项 > 位置 > 自定义路径*中，指定AE_SDK_BASE_PATH为你下载并解压的AE插件SDK的根文件夹。

示例项目还使用了Boost，可以从boost.org下载。下载后，创建一个名为BOOST_BASE_PATH的变量，就像上面创建AE_SDK_BASE_PATH一样。

最后，如果你还没有安装Python（版本3.6或更高），请安装它。可以从python.org下载。示例项目在自定义构建步骤中使用它。

根据你的效果是否使用CUDA，你可能需要下载CUDA SDK。在Windows上，创建一个名为CUDA_SDK_BASE_PATH的环境变量，指向该SDK，以便链接器能够找到正确的库。

---

## 查询效果或过渡的参数及其他属性

你会注意到PrGPUFilterRenderParams有一些关于效果或过渡的属性，但许多内容，例如应用插件的剪辑的参数或持续时间，并未在该结构中找到。这些属性需要使用PrGPUFilterModule.h中的GetParam()和GetProperty()辅助函数进行查询。例如：

```cpp
GetProperty(kVideoSegmentProperty_Effect_EffectDuration, duration);
GetProperty(kVideoSegmentProperty_Transition_TransitionDuration, duration);
```

---

## GPU效果/过渡的生命周期

当在时间轴中应用效果/过渡或更改效果参数时，会创建一个新的GPU效果实例。在渲染一系列帧时，它不会不必要地重新创建。[不透明效果数据套件](../suites#opaque-effect-data-suite)应用于在同一轨道项上的相同效果实例之间共享未展平的序列数据。

---

## 回退到软件渲染

当创建新的GPU效果实例时，实例可以选择是否提供GPU渲染。GPU效果应合理确定如果选择提供GPU渲染，它有足够的资源来完成渲染，因为在渲染过程中没有API支持回退到软件渲染。

调用[GPU设备套件](../suites#gpu-device-suite)中的GetDeviceInfo()，并检查`outDeviceInfo.outMeetsMinimumRequirementsForAcceleration`，你可以查看是否支持加速的最低系统要求。如果未满足最低要求，请不要继续调用AcquireExclusiveDeviceAccess()。

在紧急情况下，如果没有足够的GPU内存来完成渲染，效果可以调用[GPU设备套件](../suites#gpu-device-suite)中的PurgeDeviceMemory来释放最初不可用的内存。这将影响性能，应仅在绝对必要时使用。

---

## OpenGL互操作性

如果你愿意，你可以将帧从CUDA传输到OpenGL（尽管并不总是高效）。

对于CUDA与OpenGL的互操作性：

### CUDA -> OpenGL

- 创建一个OpenGL缓冲区
- 使用`cuGraphicsMapResources`将其映射到CUDA
- 使用`cuGraphicsResourceGetMappedPointer`获取映射地址
- 使用`cuMemcpyDtoDAsync`从CUDA地址复制到映射地址
- 使用`cuGraphicsUnmapResources`取消映射

### OpenGL -> CUDA

- 使用`cuGraphicsMapResources`将OpenGL缓冲区映射到CUDA
- 使用`cuGraphicsResourceGetMappedPointer`获取映射地址
- 使用`cuMemcpyDtoDAsync`从映射地址复制到CUDA
- 使用`cuGraphicsUnmapResources`取消映射

:::note
在Mac上，没有真正的OpenGL/CUDA互操作性，这些调用将通过系统内存进行。
:::

---

## 入口函数

只有在当前项目使用GPU加速时，才会调用GPU入口函数。否则，将调用After Effects SDK中描述的普通入口函数，或本SDK指南中的[GPU效果与过渡](../gpu-effects-transitions)或[视频滤镜](../../video-filters/video-filters)。

确保在文件 > 项目设置 > 常规 > 视频渲染和播放 > 渲染器中激活了GPU加速。如果没有可用的GPU选项，则需要在系统中安装合适的显卡。

```cpp
prSuiteError xGPUFilterEntry (
 csSDK_uint32 inHostInterfaceVersion,
 csSDK_int32* ioIndex,
 prBool inStartup,
 piSuitesPtr piSuites,
 PrGPUFilter* outFilter,
 PrGPUFilterInfo* outFilterInfo)
```

如果`inStartup`为非零值，效果/过渡应启动并初始化实现PrGPUFilter所需的函数，以及PrGPUFilterInfo中的信息。

如果`inStartup`为false，则效果/过渡应关闭，卸载启动时加载的任何资源。

从CC开始，inHostInterfaceVersion为`PrSDKGPUFilterInterfaceVersion1 == 1`。

如果单个插件支持多个效果，请在返回之前将ioIndex递增到下一个值，以便再次调用以描述下一个效果。
