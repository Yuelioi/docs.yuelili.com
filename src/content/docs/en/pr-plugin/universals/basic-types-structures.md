---
title: Basic Types Structures
---
# Basic Types Structures

These types and structures are defined in PrSDKTypes.h and PrSDKStructs.h, and are used throughout the Premiere API.

Premiere defines cross-platform types for convenience when developing plugins for both Windows and Mac OS.

| Name | Description |
|---|---|
| `prColor` | An unsigned 32-bit integer that stores an RGB color. |
| | This type is useful for the 8-bpc colors retrieved by the color picker in a video effect or transition. |
| | Color channels are stored as BGRA, in order of increasing memory address from left to right. |
| `prWnd` | A Windows `HWND` or Mac OS `NSView*` |
| `prParentWnd` | A Windows `HWND` or Mac OS `NSWindow*` |
| `prOffscreen` | A Windows `HDC` |
| `prRect` | A Windows `RECT` or Mac OS `Rect`. |
| | Use the utility function `prSetRect` to set the dimensions of a `prRect` struct. |
| | This should be used because Mac OS `Rect` members have a different ordering than Windows `RECT` members. |
| `prFloatRect` | <pre lang="cpp">typedef struct {<br/>  float left;<br/>  float top;<br/>  float right;<br/>  float bottom;<br/>} prFloatRect;</pre> |
| `prRgn` | A Windows `HRGN` |
| `prPoint`, `LongPoint` | <pre lang="cpp">typedef struct {<br/>  csSDK_int32 x;<br/>  csSDK_int32 y;<br/>} prPoint, LongPoint;</pre> |
| | `LongPoint` is deprecated, but still used for a couple of Bottleneck callbacks |
| `prFPoint` | <pre lang="cpp">typedef struct {<br/>  double x;<br/>  double y;<br/>} prFPoint64;</pre> |
| `prPixel` | (Deprecated) |
| `prPixelAspectRatio` | (Deprecated) |
| `PPix`, `*PPixPtr`, `**PPixHand` | Holds a video frame or field, and contains related attributes such as pixel aspect ratio and pixel format. |
| | Manipulate PPixs using the [PPix Suite](../sweetpea-suites#ppix-suite), never directly. |
| `TDB_TimeRecord` | A time database record representing a time value in the context of a video frame rate. |
| | <pre lang="cpp">typedef struct {<br/>  TDB_Time       value;<br/>  TDB_TimeScale  scale;<br/>  TDB_SampSize   sampleSize;<br/>} TDB_TimeRecord;</pre> |
| `prBool` | Can be either `kPrTrue` or `kPrFalse` |
| `PrMemoryPtr`, `*PrMemoryHandle` | A `char*` |
| `PrTimelineID`, `PrClipID` | A 32-bit signed integer. |
| `prUTF8Char` | An 8-bit unsigned integer. |
| `PrSDKString` | An opaque data type that should be accessed using the new [String Suite](../sweetpea-suites#string-suite). |
| `PrParam` | Used for exporter parameters |
| | <pre lang="cpp">struct PrParam<br/>{<br/>  PrParamType mType;<br/>  union<br/>  {<br/>    csSDK_int8   mInt8;<br/>    csSDK_int16  mInt16;<br/>    csSDK_int32  mInt32;<br/>    csSDK_int64  mInt64;<br/>    float        mFloat32;<br/>    double       mFloat64;<br/>    csSDK_uint8  mBool;<br/>    prFPoint64   mPoint;<br/>    prPluginID   mGuid;<br/>    PrMemoryPtr  mMemoryPtr;<br/>  };<br/>};<br/><br/>enum PrParamType<br/>{<br/>  kPrParamType_Int8 = 1,<br/>  kPrParamType_Int16,<br/>  kPrParamType_Int32,<br/>  kPrParamType_Int64,<br/>  kPrParamType_Float32,<br/>  kPrParamType_Float64,<br/>  kPrParamType_Bool,<br/>  kPrParamType_Point,<br/>  kPrParamType_Guid,<br/>  kPrParamType_PrMemoryPtr<br/>};</pre> |
| `prDateStamp` | Used in by importers in `imFileAttributesRec.creationDateStamp`. |
| | <pre lang="cpp">typedef struct<br/>{<br/>  csSDK_int32  day;<br/>  csSDK_int32  month;<br/>  csSDK_int32  year;<br/>  csSDK_int32  hours;<br/>  csSDK_int32  minutes;<br/>  double       seconds;<br/>} prDateStamp;</pre> |
