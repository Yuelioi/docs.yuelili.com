---
title: 结构描述
---
# 结构描述

## PrGPUFilterInfo

此结构包含有关GPU滤镜的一些基本信息。它提供了对各种套件的访问权限，以及对私有数据的访问权限，实例可以在其中分配内存并存储数据，这些数据将传递给后续函数。

```cpp
typedef struct {
 csSDK_uint32 outInterfaceVersion;
 PrSDKString outMatchName;
} PrGPUFilterInfo;
```

| 成员 | 描述 |
| --- | --- |
| `outInterfaceVersion` | 设置为与您使用的SDK中定义的版本相对应的GPU API版本。 |
| `outMatchName` | outMatchName必须等于已注册的软件滤镜，如果为NULL，则默认为模块的PiPL。 |

---

## PrGPUFilterInstance

此结构包含有关GPU滤镜的一些基本信息。它提供了对各种套件的访问权限，以及对私有数据的访问权限，实例可以在其中分配内存并存储数据，这些数据将传递给后续函数。

```cpp
typedef struct {
 piSuitesPtr piSuites;
 csSDK_uint32 inDeviceIndex;
 PrTimelineID inTimelineID;
 csSDK_int32 inNodeID;
 void* ioPrivatePluginData;
 prBool outIsRealtime;
} PrGPUFilterInstance;
```

| 成员 | 描述 |
| --- | --- |
| `piSuites` | 标准套件。 |
| `inDeviceIndex` | 用于`PrSDKGPUDeviceSuite`。 |
| `inTimelineID` | 用于`PrSDKVideoSegmentSuite`。 |
| `inNodeID` | 用于`PrSDKVideoSegmentSuite`。 |
| `ioPrivatePluginData` | 插件用于存储实例数据，主机从不触碰。 |
| `outIsRealtime` | 指定插件是否可能实时播放，用于确定片段在时间轴中是红色、黄色还是未标记。 |

---

## PrGPUFilterRenderParams

此结构描述了当前的渲染请求。

```cpp
typedef struct {
 PrTime inClipTime;
 PrTime inSequenceTime;

 // 渲染属性
 PrRenderQuality inQuality;
 float inDownsampleFactorX;
 float inDownsampleFactorY;

 // 帧属性
 csSDK_uint32 inRenderWidth;
 csSDK_uint32 inRenderHeight;
 csSDK_uint32 inRenderPARNum;
 csSDK_uint32 inRenderPARDen;
 prFieldType inRenderFieldType;
 PrTime inRenderTicksPerFrame;
 pmFieldDisplay inRenderField;
} PrGPUFilterRenderParams;
```

| 成员 | 描述 |
|---|---|
| `inClipTime` | 当前渲染的时间，相对于剪辑开始时间 |
| `inSequenceTime` | 当前渲染的时间，相对于序列开始时间 |
| `inQuality` | 渲染质量；`PrRenderQuality`枚举值之一 |
| `inDownsampleFactorX` | 水平下采样因子 |
| `inDownsampleFactorY` | 垂直下采样因子 |
| `inRenderWidth` | 视频分辨率 |
| `inRenderHeight` | |
| `inRenderPARNum` | 视频像素宽高比，描述为分子和分母分开的分数形式。 |
| `inRenderPARDen` | |
| `inRenderFieldType` | 渲染场类型 |
| `inRenderTicksPerFrame` | 视频帧率 |
| `inRenderField` | GPU渲染始终在全高逐行帧上进行，除非`PrGPUFilterFrameDependency.outNeedsFieldSeparation`为`false`。 |
| | `inRenderField`指示正在渲染的场。 |

---

## PrGPUFilterFrameDependency

此结构描述了渲染帧的任何依赖关系。

```cpp
typedef struct {
 PrGPUFilterFrameDependencyType outDependencyType;

 // 对其他帧时间的依赖
 csSDK_int32 outTrackID;
 PrTime outSequenceTime;

 // 对预计算阶段的依赖
 PrPixelFormat outPrecomputePixelFormat;
 csSDK_uint32 outPrecomputeFrameWidth;
 csSDK_uint32 outPrecomputeFrameHeight;
 csSDK_uint32 outPrecomputeFramePARNumerator;
 csSDK_uint32 outPrecomputeFramePARDenominator;
 prFieldType outPrecomputeFrameFieldType;
 csSDK_size_t outPrecomputeCustomDataSize;
 prBool outNeedsFieldSeparation;
} PrGPUFilterFrameDependency;
```

| 成员 | 描述 |
|---|---|
| `outDependencyType` | 依赖类型。其中之一： |
| | - `PrGPUDependency_InputFrame` |
| | - `PrGPUDependency_Precompute` |
| | - `PrGPUDependency_FieldSeparation` |
| `outTrackID` | 指定哪个轨道是依赖项。设置为0表示当前轨道 |
| `outSequenceTime` | 设置作为依赖项的序列时间。 |
| `outPrecomputePixelFormat` | 对预计算阶段的依赖 |
| `outPrecomputeFrameWidth` | |
| `outPrecomputeFrameHeight` | |
| `outPrecomputeFramePARNumerator` | |
| `outPrecomputeFramePARDenominator` | |
| `outPrecomputeFrameFieldType` | |
| `outPrecomputeCustomDataSize` | 仅在`outPrecomputePixelFormat`为自定义时需设置 |
| `outNeedsFieldSeparation` | 指示插件可能同时操作两个场（例如非空间和非时间变化） |
