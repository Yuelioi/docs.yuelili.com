---
title: 旧版回调套件
---
# 旧版回调套件

## piSuites

这些回调适用于所有插件，尽管其中许多回调仅适用于特定类型的插件。

```cpp
typedef struct {
 int piInterfaceVer;
 PlugMemoryFuncsPtr memFuncs;
 PlugWindowFuncsPtr windFuncs;
 PlugppixFuncsPtr ppixFuncs;
 PlugUtilFuncsPtr utilFuncs;
 PlugTimelineFuncsPtr timelineFuncs;
} piSuites, *piSuitesPtr;
```

| 成员 | 描述 |
|---|---|
| `piInterfaceVer` | API 版本 |
| | - Premiere Pro CS4 - `PR_PISUITES_VERSION_9` |
| | - Premiere Pro CS3 - `PR_PISUITES_VERSION_8` |
| | - Premiere Pro 2.0 - `PR_PISUITES_VERSION_7` |
| | - Premiere Pro 1.5.1 - `PR_PISUITES_VERSION_6` |
| | - Premiere Pro 1.5 - `PR_PISUITES_VERSION_5` |
| | - Premiere Pro 1.0 - `PR_PISUITES_VERSION_4` |
| | - Premiere 6.x - `PR_PISUITES_VERSION_3` |
| | - Premiere 5.1 - `PR_PISUITES_VERSION_2` |
| | - Premiere 5.0 - `PR_PISUITES_VERSION_1` |
| [memfuncs](#内存函数) | 指向内存函数的指针 |
| [windFuncs](#窗口函数) | 指向窗口函数的指针 |
| [ppixFuncs](#ppix-函数) | 指向 PPix 函数的指针 |
| [utilFuncs](#实用函数) | 指向实用函数的指针。 |
| | 在 utilFuncs 中，getSPBasicSuite 回调提供了对 [SweetPea 套件](../sweetpea-suites) 的访问，这些套件用于大多数新功能。 |
| [timelineFuncs](#时间轴函数) | 指向时间轴函数的指针 |

### 内存函数

内存和句柄分配。如果可能，请使用 [PPix 创建器套件](../sweetpea-suites#ppix-creator-suite) 进行 PPix 特定的分配。

在 API 结构中传递给 Premiere 和从 Premiere 传递的字符串始终是以 null 结尾的 C 字符串。

| 函数 | 描述 |
|---|---|
| `newPtr` | 分配一块内存，返回指向新块的指针。 |
| | <pre lang="cpp">char* newPtr (csSDK_uint32 size);</pre> |
| `newPtrClear` | 等同于 newPtr，但将内存初始化为 0。 |
| | <pre lang="cpp">char* newPtrClear (csSDK_uint32 size);</pre> |
| `setPtrSize` | 调整已分配内存块的大小。 |
| | <pre lang="cpp">void setPtrSize (<br/>  PrMemoryPtr   *ptr,<br/>  csSDK_uint32  newsize);</pre> |
| `getPtrSize` | 返回已分配内存块的大小（以字节为单位）。 |
| | <pre lang="cpp">csSDK_int32 getPtrSize (char *ptr);</pre> |
| `disposePtr` | 释放已分配的内存块。 |
| | <pre lang="cpp">void disposePtr (char *ptr);</pre> |
| `newHandle` | 分配一块内存，返回其句柄。 |
| | <pre lang="cpp">char** newHandle (csSDK_uint32 size);</pre> |
| `newHandleClear` | 等同于 newHandle，但将内存初始化为 0。 |
| | <pre lang="cpp">char** newHandleClear (csSDK_uint32 size);</pre> |
| `setHandleSize` | 调整已分配内存句柄的大小。 |
| | <pre lang="cpp">csSDK_int16 setHandleSize (<br/>  char   **PrMemoryHandle,<br/>  csSDK_uint32  newsize);</pre> |
| `getHandleSize` | 返回已分配块的大小（以字节为单位）。 |
| | <pre lang="cpp">csSDK_int32 getHandleSize ( char **PrMemoryHandle);</pre> |
| `disposeHandle` | 释放先前分配的句柄。 |
| | <pre lang="cpp">void disposeHandle (char **PrMemoryHandle);</pre> |
| `lockHandle` `unlockHandle` | 这些旧版函数已弃用，不应再使用。 |

### 窗口函数

窗口管理例程。已被 [窗口套件](../sweetpea-suites#window-suite) 取代。

| 函数 | 描述 |
|---|---|
| `updateAllWindows` | 更新所有窗口。仅适用于 Windows，不适用于 Mac OS。 |
| | <pre lang="cpp">void updateAllWindows (void);</pre> |
| `getMainWnd` | 返回主应用程序的 HWND。 |
| | <pre lang="cpp">void getMainWnd (void);</pre> |

### PPix 函数

用于操作 PPix。已被 [PPix 创建器套件](../sweetpea-suites#ppix-creator-suite) 取代用于 PPix 分配，并被 [PPix 套件](../sweetpea-suites#ppix-suite) 取代用于一般 PPix 函数。

| 函数 | 描述 |
|---|---|
| `ppixGetPixels` | 返回 PPix 中包含的像素数组的指针。 |
| | <pre lang="cpp">char* ppixGetPixels (PPixHand pix);</pre> |
| `ppixGetBounds` | 返回 PPix 的边界。 |
| | <pre lang="cpp">void ppixGetBounds (<br/>  PPixHand  pix;<br/>  prRect   *bounds);</pre> |
| `ppixGetRowbytes` | 返回 PPix 的行字节数，以便正确解析由 ppixGetPixels 返回的像素。 |
| | <pre lang="cpp">int ppixGetRowbytes (PPixHand pix);</pre> |
| `ppixNew` | 分配并返回一个新的 PPix 的句柄，具有指定的边界。 |
| | 由于这是一个较旧的调用，像素格式硬编码为 BGRA_4444_8u。 |
| | <pre lang="cpp">PPixHandle ppixNew (prRect *bounds);</pre> |
| `ppixDispose` | 释放 PPixHand。 |
| | <pre lang="cpp">void ppixDispose (PPixHand pix);</pre> |
| `ppixLockPixels` `ppixUnlockPixels` | 这些旧版函数已弃用，不应再使用。 |
| `ppixGetPixelAspectRatio` | 传递回 PPixHand 的像素宽高比。 |
| | Premiere 使用 PAR 分子和分母填充 longs。 |
| | <pre lang="cpp">int ppixGetPixelAspectRatio (<br/>  PPixHand   pix,<br/>  csSDK_uint32  *num,<br/>  csSDK_uint32  *den)</pre> |
| `ppixGetAlphaBounds` | 传递回 PPixHand 的 alpha 边界。 |
| | <pre lang="cpp">void ppixGetAlphaBounds (<br/>  PPixHand  pix,<br/>  prRect   *alphaBounds)</pre> |

### 实用函数

| 函数 | 描述 |
|---|---|
| `getSerialNumber` | 传递回 Premiere 的序列号。 |
| | <pre lang="cpp">void getSerialNumber (char* buffer);</pre> |
| | - `buffer`: 必须至少为 40 个字符长。 |
| `getFileTimebase` | 传递回文件的时基，使用 `TDB_TimeRecord`（由插件分配）。 |
| | 如果文件已经在序列中，最好使用 [视频片段套件](../sweetpea-suites#video-segment-suite) 获取文件的时基，以获取 `kVideoSegmentProperty_Media_StreamFrameRate`。 |
| | 注意：了解你的格式。不要向仅音频格式请求视频，否则可能会得到意外的结果。 |
| | <pre lang="cpp">csSDK_int32 getFileTimebase (<br/>  prFileSpec   \*filespec,<br/>  csSDK_int32   audioOnly,<br/>  TDB_TimeRecord  \*result);</pre> |
| | - `filespec`: 文件的描述，使用 getFileVideo 之前 |
| | - `audioOnly`: 如果非零，返回音频时基。如果为零，返回视频时基。 |
| | - `result`: 返回的时基 |
| `getFileVideo` | 从文件中获取一帧视频（在指定时间）。 |
| | 如果文件已经在序列中，最好使用 [剪辑渲染套件](../sweetpea-suites#clip-render-suite) 获取文件的视频。 |
| | <pre lang="cpp">csSDK_int32 getFileVideo (<br/>  prFileSpec   \*filespec,<br/>  csSDK_int32  frame,<br/>  PPixHand   thePort,<br/>  prRect    \*bounds,<br/>  csSDK_int32  flags);</pre> |
| | - `filespec`: 文件的描述 |
| | - `frame`: 要检索的帧 |
| | - `thePort`: 帧将传递到的位置，调用前分配 |
| | - `bounds`: 端口的边界 |
| | - `flags`: 未使用 |
| `getFileVideoBounds` | 传递回文件的边界。 |
| | 如果文件已经在序列中，最好使用 [剪辑渲染套件](../sweetpea-suites#clip-render-suite) 获取文件的视频边界。 |
| | <pre lang="cpp">csSDK_int32 getFileVideoBounds (<br/>  prFileSpec \*filespec,<br/>  prRect \*bounds);</pre> |
| `getSPBasicSuite` | 这个非常重要的调用返回 SweetPea 套件，允许插件获取和释放所有其他 [SweetPea 套件](../sweetpea-suites)。 |
| | <pre lang="cpp">SPBasicSuite* getSPBasicSuite();</pre> |
| `getFileExtString` | 传递回给定媒体类别的有效扩展名/过滤器字符串列表（见下面的文件类型常量）。 |
| | <pre lang="cpp">csSDK_int32 (*plugGetFileExtStringFunc)(<br/>  csSDK_uint32  fileTypes,<br/>  char   \*inBuffer,<br/>  csSDK_uint32  inBufferSize);</pre> |
| | - `kFileTypes_Still`: 静态媒体 |
| | - `kFileTypes_AudioOnly`: 仅音频媒体 |
| | - `kFileTypes_AudioVideo`: 音频和视频媒体 |
| | - `kFileTypes_AllNoIntrinsics`: 所有可通过导入插件导入的媒体类型（不包括 prproj、txt 等） |

### 时间线函数

| 函数 | 描述 |
|---|---|
| `getClipVideo` | 已被[Clip Render Suite](../sweetpea-suites#clip-render-suite)取代，后者提供异步导入功能。 |
| | 从[Video Segment Suite](../sweetpea-suites#video-segment-suite)返回的片段树中获取剪辑帧。 |
| | 可用于检索和存储静态帧（如标题）以供播放。 |
| | !!! 警告 |
| | 此调用开销较大，请谨慎使用。 |
| | <pre lang="cpp">csSDK_int32 getClipVideo (<br/>  csSDK_int32  帧号,<br/>  PPixHand    端口,<br/>  prRect      *边界,<br/>  csSDK_int32  标志,<br/>  PrClipID    剪辑数据);</pre> |
| | - `frame`: 请求的帧号 |
| | - `thePort`: 调用前使用[PPix Creator Suite](../sweetpea-suites#ppix-creator-suite)分配 |
| | - `bounds`: 要返回的视频边界 |
| | - `flags`: 使用`kGCVFlag_UseFilePixelAspectRatio`或0。设为`kGCVFlag_UseFilePixelAspectRatio`将返回带有文件PAR标记的PPix。设为0将返回调整为项目PAR的PPix并相应标记。它会缩放但不会拉伸PPix以适应传入的目标PPix。 |
| | - `clipData`: prtFileRec中的clipData句柄 |
| `getWorkArea` | 返回当前工作区的开始和结束位置（只读）。 |
| | 将timelineData设置为当前序列的timelineData。 |
| | <pre lang="cpp">csSDK_int32 getWorkArea (<br/>  PrTimelineID  时间线数据,<br/>  csSDK_int32   *工作区开始,<br/>  csSDK_int32   *工作区结束);</pre> |
| `getCurrentTimebase` | 返回时间线的当前时基（`scale + sampleSize`）。 |
| | <pre lang="cpp">void getCurrentTimebase(<br/>  PrTimelineID  时间线数据,<br/>  csSDK_uint32  *比例,<br/>  csSDK_int32   *采样大小);</pre> |
| | - `timelineData`: 当前序列的时间线数据 |
| | - `scale`: 序列比例 |
| | - `sampleSize`: 序列采样大小 |
| `getCurrentPos` | 返回当前时间指示器的位置（用户设置的位置条）。 |
| | 如果返回-1，表示时间线中不存在位置条。 |
| | <pre lang="cpp">csSDK_int32 getCurrentPos(<br/>  PrTimelineID  时间线数据);</pre> |
| | - `timelineData`: 当前序列的时间线数据 |
| `getPreviewFrameEx` | 从时间线获取完全渲染的帧（所有层）。 |
| | 用于视频滤镜和转场在模态设置对话框中的预览。 |
| | 如果返回值为-1表示出错，0表示回调安全返回。 |
| | 最终影片渲染导出器不应使用此回调。 |
| | <pre lang="cpp">csSDK_int32 getPreviewFrameEx(<br/>  PrTimelineID    时间线数据,<br/>  csSDK_int32     输入帧,<br/>  PPixHand*       输出渲染帧,<br/>  const prRect*   输入帧矩形,<br/>  PrPixelFormat*  请求的像素格式数组,<br/>  csSDK_int32     请求的像素格式数组计数,<br/>  csSDK_uint32    像素宽高比分子,<br/>  csSDK_uint32    像素宽高比分母,<br/>  bool            始终渲染);</pre> |
| `getClipVideoBounds` | 返回序列中剪辑的尺寸。对于滚动/爬行标题，请改用Roll/Crawl Suite获取尺寸。 |
| | <pre lang="cpp">csSDK_int32 getClipVideoBounds (<br/>  PrClipID      输入剪辑数据,<br/>  prRect        *输出边界,<br/>  csSDK_uint32  *输出像素宽高比分子,<br/>  csSDK_uint32  *输出像素宽高比分母);</pre> |
| `getClipVideoEx` | 已被[Clip Render Suite](../sweetpea-suites#clip-render-suite)取代，后者提供异步导入功能。 |
| | 从[Video Segment Suite](../sweetpea-suites#video-segment-suite)返回的片段树中获取剪辑帧。 |
| | 可用于检索和存储静态帧（如标题）以供播放。 |
| | !!! 警告 |
| | 此调用开销较大，请谨慎使用。 |
| | <pre lang="cpp">csSDK_int32 getClipVideoEx (<br/>  csSDK_int32         输入帧,<br/>  PPixHand            *输出渲染帧,<br/>  const prRect        *输入帧矩形,<br/>  const PrPixelFormat *请求的像素格式数组,<br/>  csSDK_int32         请求的像素格式数组计数,<br/>  csSDK_uint32        像素宽高比分子,<br/>  csSDK_uint32        像素宽高比分母,<br/>  PrClipID            输入剪辑数据);</pre> |

---

## 瓶颈函数

传统瓶颈函数指针仅传递给转场和视频滤镜。

这些函数不向其他插件类型公开。

这些函数不支持不同像素格式，仅用于8位BGRA处理。

示例用法：

```cpp
((*theData)->bottleNecks->StretchBits) (*srcpix,
 *dstpix,
 &srcbox,
 &srcbox,
 0,
 NULL);
```

| 函数 | 描述 |
| --- | --- |
| `StretchBits` | 拉伸并复制图像（包括alpha通道）。 |
| | 当目标大于源时，执行双线性插值以实现平滑缩放。 |
| | <pre lang="cpp">void StretchBits (<br/>  PPixHand  源PPix,<br/>  PPixHand  目标PPix,<br/>  prRect    源矩形,<br/>  prRect    目标矩形,<br/>  int       模式,<br/>  prRgn     区域);</pre> |
| | 仅适用于8位PPix。 |
| | `srcRect`是要复制的源PPix区域；`dstRect`用于缩放副本。 |
| | 有效模式：`cbBlend`、`cbInterp`和`cbMaskHdl` |
| `DistortPolygon` | 将源矩形映射到目标中的四点多边形。 |
| | <pre lang="cpp">void DistortPolygon (<br/>  PPixHand  源,<br/>  PPixHand  目标,<br/>  prRect    *源框,<br/>  prPoint   *目标点);</pre> |
| `MapPolygon` | 将四点源多边形映射到四点目标多边形。 |
| | 如果源多边形是矩形，则等同于`DistortPolygon`。 |
| | <pre lang="cpp">void MapPolygon (<br/>  PPixHand  源,<br/>  PPixHand  目标,<br/>  prPoint   *源点,<br/>  prPoint   *目标点);</pre> |
| `DistortFixed` | 使用定点坐标的DistortPolygon等效函数。 |
| | <pre lang="cpp">void DistortFixed (<br/>  PPixHand   源,<br/>  PPixHand   目标,<br/>  prRect     *源框,<br/>  LongPoint  *目标点);</pre> |
| `FixedToFixed` | 使用定点坐标的MapPolygon等效函数。 |
| | <pre lang="cpp">void FixedToFixed (<br/>  PPixHand   源,<br/>  PPixHand   目标,<br/>  LongPoint  *源点,<br/>  LongPoint  *目标点);</pre> |
| `DoIndexMap` | 图像映射函数。 |
| | <pre lang="cpp">void DoIndexMap (<br/>  char    *源,<br/>  char    *目标,<br/>  short   行,<br/>  short,  像素宽度,<br/>  short,  高度,<br/>  char    *查找表1,<br/>  char    *查找表2,<br/>  char    *查找表3);</pre> |
| `DoConvolve` | 卷积函数。 |
| | <pre lang="cpp">void DoConvolve (<br/>  unsigned char  *源,<br/>  unsigned char  *目标,<br/>  short          *矩阵,<br/>  short,         行字节数,<br/>  short,         宽度,<br/>  short,         高度);</pre> |
