---
title: 函数描述
---
# 函数描述

## CreateInstance

```cpp
prSuiteError (*CreateInstance)(
 PrGPUFilterInstance* ioInstanceData);
```

创建一个表示轨道项上的效果或过渡的 GPU 过滤器实例。

从 `CreateInstance` 返回错误将导致此节点在当前参数集下以软件方式渲染。

与效果和过渡的软件实例不同，GPU 实例在效果参数更改时会创建和释放。

这使得效果可以根据参数更灵活地选择是否使用 GPU 渲染。不同的实例可能会被并发调用。

---

## DisposeInstance

```cpp
prSuiteError (*DisposeInstance)(
 PrGPUFilterInstance* ioInstanceData);
```

清理在 `CreateInstance` 期间分配的任何资源。

---

## GetFrameDependencies

```cpp
prSuiteError (*GetFrameDependencies)(
 PrGPUFilterInstance* inInstanceData,
 const PrGPUFilterRenderParams* inRenderParams,
 csSDK_int32* ioQueryIndex,
 PrGPUFilterFrameDependency* outFrameDependencies);
```

返回渲染的依赖信息，如果只需要当前帧，则返回空。

对于额外的依赖项，递增 `ioQueryIndex`。

---

## PreCompute

```cpp
prSuiteError (*Precompute)(
 PrGPUFilterInstance* inInstanceData,
 const PrGPUFilterRenderParams* inRenderParams,
 csSDK_int32 inIndex,
 PPixHand inFrame);
```

将结果预计算到预分配的未初始化主机（固定）内存中。

只有在 `GetFrameDependencies` 返回 `PrGPUDependency_Precompute` 时才会调用。

预计算可能会在渲染时间之前调用。

结果将由主机上传到 GPU。

如果 `outPrecomputePixelFormat` 不是自定义的，帧将被转换为 GPU 像素格式。

---

## Render

```cpp
prSuiteError (*Render)(
 PrGPUFilterInstance* inInstanceData,
 const PrGPUFilterRenderParams* inRenderParams,
 const PPixHand* inFrames,
 csSDK_size_t inFrameCount,
 PPixHand* outFrame);
```

渲染到使用 `PrSDKGPUDeviceSuite` 分配的 `outFrame` 中，或就地操作。

结果必须与输入的像素格式相同。如果效果扩展或缩小了输出区域（例如渲染投影），效果可以分配并返回不同大小的 `outFrame`。

对于效果，`inFrames[0]` 始终是当前时间的帧，其他输入帧的顺序与 `GetFrameDependencies` 返回的顺序相同。对于过渡效果，`inFrames[0]` 是传入帧，`inFrames[1]` 是传出帧。过渡效果可能没有其他帧依赖项。

使用实用函数 `GetParam` 检索当前时间的参数值。

```
