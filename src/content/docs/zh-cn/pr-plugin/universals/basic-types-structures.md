---
title: 基本类型结构
---
# 基本类型结构

这些类型和结构定义在 `PrSDKTypes.h` 和 `PrSDKStructs.h` 中，并在整个 Premiere API 中使用。

Premiere 定义了跨平台类型，以便在为 Windows 和 Mac OS 开发插件时提供便利。

| 名称 | 描述 |
|---|---|
| `prColor` | 一个无符号的 32 位整数，用于存储 RGB 颜色。 |
| | 此类型对于视频效果或过渡中通过颜色选择器检索的 8-bpc 颜色非常有用。 |
| | 颜色通道以 BGRA 格式存储，从左到右按内存地址递增顺序排列。 |
| `prWnd` | Windows 的 `HWND` 或 Mac OS 的 `NSView*` |
| `prParentWnd` | Windows 的 `HWND` 或 Mac OS 的 `NSWindow*` |
| `prOffscreen` | Windows 的 `HDC` |
| `prRect` | Windows 的 `RECT` 或 Mac OS 的 `Rect`。 |
| | 使用实用函数 `prSetRect` 来设置 `prRect` 结构的尺寸。 |
| | 应该使用此函数，因为 Mac OS 的 `Rect` 成员的顺序与 Windows 的 `RECT` 成员不同。 |
| `prFloatRect` | <pre lang="cpp">typedef struct {<br/>  float left;<br/>  float top;<br/>  float right;<br/>  float bottom;<br/>} prFloatRect;</pre> |
| `prRgn` | Windows 的 `HRGN` |
| `prPoint`, `LongPoint` | <pre lang="cpp">typedef struct {<br/>  csSDK_int32 x;<br/>  csSDK_int32 y;<br/>} prPoint, LongPoint;</pre> |
| | `LongPoint` 已弃用，但仍用于一些 Bottleneck 回调 |
| `prFPoint` | <pre lang="cpp">typedef struct {<br/>  double x;<br/>  double y;<br/>} prFPoint64;</pre> |
| `prPixel` | （已弃用） |
| `prPixelAspectRatio` | （已弃用） |
| `PPix`, `*PPixPtr`, `**PPixHand` | 保存视频帧或场，并包含相关属性，如像素宽高比和像素格式。 |
| | 使用 [PPix Suite](../sweetpea-suites#ppix-suite) 操作 PPix，切勿直接操作。 |
| `TDB_TimeRecord` | 表示在视频帧率上下文中的时间值的时间数据库记录。 |
| | <pre lang="cpp">typedef struct {<br/>  TDB_Time     value;<br/>  TDB_TimeScale  scale;<br/>  TDB_SampSize   sampleSize;<br/>} TDB_TimeRecord;</pre> |
| `prBool` | 可以是 `kPrTrue` 或 `kPrFalse` |
| `PrMemoryPtr`, `*PrMemoryHandle` | 一个 `char*` |
| `PrTimelineID`, `PrClipID` | 一个 32 位有符号整数。 |
| `prUTF8Char` | 一个 8 位无符号整数。 |
| `PrSDKString` | 一种不透明的数据类型，应使用新的 [String Suite](../sweetpea-suites#string-suite) 进行访问。 |
| `PrParam` | 用于导出器参数 |
| | <pre lang="cpp">struct PrParam<br/>{<br/>  PrParamType mType;<br/>  union<br/>  {<br/>    csSDK_int8   mInt8;<br/>    csSDK_int16  mInt16;<br/>    csSDK_int32  mInt32;<br/>    csSDK_int64  mInt64;<br/>    float     mFloat32;<br/>    double    mFloat64;<br/>    csSDK_uint8  mBool;<br/>    prFPoint64   mPoint;<br/>    prPluginID   mGuid;<br/>    PrMemoryPtr  mMemoryPtr;<br/>  };<br/>};<br/><br/>enum PrParamType<br/>{<br/>  kPrParamType_Int8 = 1,<br/>  kPrParamType_Int16,<br/>  kPrParamType_Int32,<br/>  kPrParamType_Int64,<br/>  kPrParamType_Float32,<br/>  kPrParamType_Float64,<br/>  kPrParamType_Bool,<br/>  kPrParamType_Point,<br/>  kPrParamType_Guid,<br/>  kPrParamType_PrMemoryPtr<br/>};</pre> |
| `prDateStamp` | 用于导入器的 `imFileAttributesRec.creationDateStamp` 中。 |
| | <pre lang="cpp">typedef struct<br/>{<br/>  csSDK_int32  day;<br/>  csSDK_int32  month;<br/>  csSDK_int32  year;<br/>  csSDK_int32  hours;<br/>  csSDK_int32  minutes;<br/>  double    seconds;<br/>} prDateStamp;</pre> |
