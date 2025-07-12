---
title: VideoRecord
---
# VideoRecord

视频滤镜几乎在每个选择器中都会传递一个指向 `VideoRecord` 的句柄。

```cpp
typedef struct {
 PrMemoryHandle specsHandle;
 PPixHand source;
 PPixHand destination;
 csSDK_int32 part;
 csSDK_int32 total;
 char previewing;
 void* privateData;
 VFilterCallBackProcPtr callBack;
 BottleRec* bottleNecks;
 short version;
 short sizeFlags;
 csSDK_int32 flags;
 TDB_TimeRecord* tdb;
 PrMemoryHandle instanceData;
 piSuitesPtr piSuites;
 PrTimelineID timelineData;
 char altName[MAX_FXALIAS];
 PrPixelFormat pixelFormatSupported;
 csSDK_int32 pixelFormatIndex;
 csSDK_uint32 instanceID;
 TDB_TimeRecord tdbTimelineLocation;
 csSDK_int32 sessionPluginID;
} VideoRecord, **VideoHandle;
```

| 成员 | 描述 |
|---|---|
| `specsHandle` | 实例设置，跨 Premiere 会话持久化。 |
| | 在 `fsInitSpec` 或 `fsSetup` 期间创建此句柄。 |
| | 如果滤镜的参数可以在效果控制面板中操作，Premiere 会填充此句柄。 |
| | 使用 Premiere 的内存分配回调为 `specsHandle` 分配内存。 |
| `source` | 源视频帧的 `PPixHand`。 |
| `destination` | 目标视频帧的 `PPixHand`，始终与源帧大小相同。 |
| | 在 `fsExecute` 期间将输出帧存储在此处。 |
| `part` | 表示当前处于效果的哪个部分。 |
| | `part` 从 0 到 `total`，包含两端。 |
| `total` | 视频滤镜的总长度。 |
| | 将 `part` 除以 `total` 以计算给定 `fsExecute` 的时间变化滤镜的百分比。 |
| | 此值不一定对应于帧或场。 |
| `previewing` | 不支持 |
| `privateData` | Premiere 的私有数据。 |
| | 在请求帧时传递给帧检索回调。 |
| `callBack` | 指向 `VFilterCallbackProcPtr` 的指针，用于从源剪辑中检索帧（或场，用于隔行视频）。 |
| `bottleNecks` | 指向 Premiere 的 `bottleRec` 函数的指针。 |
| `version` | 此结构的版本（`kVideoFilterVersion`）。 |
| | - Premiere Pro CS5 = `VIDEO_FILTER_VERSION_11` |
| | - Premiere Pro CS3 = `VIDEO_FILTER_VERSION_10` |
| `sizeFlags` | 场渲染信息。 |
| `flags` | 如果进行低质量渲染，Premiere 将在 `fsExecute` 期间传入 `kEffectFlags_DraftQuality`。 |
| | 滤镜可以选择性地渲染更快、质量较低的图像以供预览。 |
| `tdb` | 指向描述序列时基的时间数据库记录的指针。 |
| `instanceData` | 指向跨调用持久化的私有实例数据的句柄。 |
| | 在 `fsExecute` 期间分配此内存，并在 `fsDisposeData` 期间释放。 |
| | 不要在 `fsSetup` 期间使用此字段。 |
| `piSuites` | 指向回调 [piSuites](../../universals/legacy-callback-suites#pisuites) 的指针。 |
| `timelineData` | 仅在 `fsInitSpec` 和 `fsSetup` 期间可用。 |
| | 此不透明的时间线数据库句柄是 [piSuites](../../universals/legacy-callback-suites#pisuites) 中可用的 `timelineFuncs` 回调所需的。 |
| | 此句柄在 `fsSetup` 期间用于在模态设置对话框中显示预览。 |
| `altName` | 未使用。 |
| `pixelFormatSupported` | 仅在 `fsGetPixelFormatsSupported` 期间有效。 |
| | 返回支持的像素类型。 |
| `pixelFormatIndex` | 仅在 `fsGetPixelFormatsSupported` 期间有效。 |
| | 支持的像素类型的 fourCC 索引。 |
| `instanceID` | 运行时实例 ID 唯一标识会话期间的滤镜。 |
| | 这与传递给 `prtFilterRec` 中的播放器的 ID 相同。 |
| `tdbTimelineLocation` | 描述滤镜在序列中位置的时间数据库记录。 |
| | 仅在 `fsInitSpec` 和 `fsSetup` 期间有效。 |
| `sessionPluginID` | 此 ID 应用于 [文件注册套件](../../universals/sweetpea-suites#file-registration-suite) 中注册外部文件（如纹理、徽标等），这些文件由插件实例使用但不会出现在项目面板中。 |
| | 使用项目管理器修剪或复制项目时，将考虑已注册的文件。 |

---

## VFilterCallBackProcPtr

指向从源剪辑中检索帧（或场，用于隔行视频）的回调的指针。

不要期望此回调具有实时性能。

```cpp
typedef short (CALLBACK *VFilterCallBackProcPtr)(
 csSDK_int32 frame;
 PPixHand thePort;
 RECT* theBox;
 Handle privateData);
```

| 成员 | 描述 |
|---|---|
| `frame` | 请求的帧。传入的帧值应为 `frame * samplesize`。 |
| | 在场渲染期间，回调将始终返回当前场（上场或下场）。 |
| `thePort` | Premiere 将存储帧的 `PPixHand`。 |
| `theBox` | 希望 Premiere 检索的帧的边界。 |
| `privateData` | Premiere 在 `VideoRecord.privateData` 中提供的句柄。 |

---

## sizeFlags

对于 `sizeFlags`，以下位标志是相关的：

| 标志 | 描述 |
| --- | --- |
| `gvFieldsEven` | 视频滤镜应渲染上场主导。 |
| `gvFieldsOdd` | 视频滤镜应渲染下场主导。 |
| `gvFieldsFirst` | 视频滤镜当前正在渲染主导场。 |
