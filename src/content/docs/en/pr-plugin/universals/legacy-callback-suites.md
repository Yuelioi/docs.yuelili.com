---
title: Legacy Callback Suites
---
# Legacy Callback Suites

## piSuites

These callbacks are available to all plugins, although many of these callbacks are only appropriate for specific plugin types.

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

| Member | Description |
|---|---|
| `piInterfaceVer` | API version |
| | - Premiere Pro CS4 - `PR_PISUITES_VERSION_9` |
| | - Premiere Pro CS3 - `PR_PISUITES_VERSION_8` |
| | - Premiere Pro 2.0 - `PR_PISUITES_VERSION_7` |
| | - Premiere Pro 1.5.1 - `PR_PISUITES_VERSION_6` |
| | - Premiere Pro 1.5 - `PR_PISUITES_VERSION_5` |
| | - Premiere Pro 1.0 - `PR_PISUITES_VERSION_4` |
| | - Premiere 6.x - `PR_PISUITES_VERSION_3` |
| | - Premiere 5.1 - `PR_PISUITES_VERSION_2` |
| | - Premiere 5.0 - `PR_PISUITES_VERSION_1` |
| [memfuncs](#memory-functions) | Pointer to memory functions |
| [windFuncs](#window-functions) | Pointer window functions |
| [ppixFuncs](#ppix-functions) | Pointer PPix functions |
| [utilFuncs](#utility-functions) | Pointer to utility functions. |
| | In the utilFuncs, the getSPBasicSuite callback provides access to the [SweetPea Suites](../sweetpea-suites), which are used for most of the newer functions. |
| [timelineFuncs](#timeline-functions) | Pointer to timeline functions |

### Memory Functions

Memory and handle allocation. Where possible, use the [PPix Creator Suite](../sweetpea-suites#ppix-creator-suite) for PPix-specific allocation.

Strings passed to and from Premiere in API structures are always null-terminated C strings.

| Function | Description |
|---|---|
| `newPtr` | Allocates a block of memory, returns a pointer to the new block. |
| | <pre lang="cpp">char* newPtr (csSDK_uint32 size);</pre> |
| `newPtrClear` | Equivalent to newPtr, but initializes the memory to 0. |
| | <pre lang="cpp">char* newPtrClear (csSDK_uint32 size);</pre> |
| `setPtrSize` | Resizes an allocated memory block. |
| | <pre lang="cpp">void setPtrSize (<br/>  PrMemoryPtr   *ptr,<br/>  csSDK_uint32  newsize);</pre> |
| `getPtrSize` | Returns size in bytes of an allocated memory block. |
| | <pre lang="cpp">csSDK_int32 getPtrSize (char *ptr);</pre> |
| `disposePtr` | Frees an allocated memory block. |
| | <pre lang="cpp">void disposePtr (char *ptr);</pre> |
| `newHandle` | Allocates a block of memory, returning a handle to it. |
| | <pre lang="cpp">char** newHandle (csSDK_uint32 size);</pre> |
| `newHandleClear` | Equivalent to newHandle, but initializes the memory to 0. |
| | <pre lang="cpp">char** newHandleClear (csSDK_uint32 size);</pre> |
| `setHandleSize` | Resizes an allocated memory handle. |
| | <pre lang="cpp">csSDK_int16 setHandleSize (<br/>  char          **PrMemoryHandle,<br/>  csSDK_uint32  newsize);</pre> |
| `getHandleSize` | Returns the size (in bytes) of an allocated block. |
| | <pre lang="cpp">csSDK_int32 getHandleSize ( char **PrMemoryHandle);</pre> |
| `disposeHandle` | Disposes of a previously allocated handle. |
| | <pre lang="cpp">void disposeHandle (char **PrMemoryHandle);</pre> |
| `lockHandle` `unlockHandle` | These legacy functions are deprecated and should no longer be used. |

### Window Functions

Window management routines. Superceded by the [Window Suite](../sweetpea-suites#window-suite).

| Function | Description |
|---|---|
| `updateAllWindows` | Updates all windows. Windows only, doesn't work on Mac OS. |
| | <pre lang="cpp">void updateAllWindows (void);</pre> |
| `getMainWnd` | Returns the main application HWND. |
| | <pre lang="cpp">void getMainWnd (void);</pre> |

### PPix Functions

Used to manipulate a PPix. Superceded by the [PPix Creator Suite](../sweetpea-suites#ppix-creator-suite) for PPix allocation and the [PPix Suite](../sweetpea-suites#ppix-suite) for general PPix functions.

| Function | Description |
|---|---|
| `ppixGetPixels` | Returns a pointer to the array of pixels contained in a PPix. |
| | <pre lang="cpp">char* ppixGetPixels (PPixHand pix);</pre> |
| `ppixGetBounds` | Returns the bounds of a PPix. |
| | <pre lang="cpp">void ppixGetBounds (<br/>  PPixHand  pix;<br/>  prRect    *bounds);</pre> |
| `ppixGetRowbytes` | Returns the rowbytes of a PPix so you can properly parse the pixels returned by ppixGetPixels. |
| | <pre lang="cpp">int ppixGetRowbytes (PPixHand pix);</pre> |
| `ppixNew` | Allocates and returns a handle to a new PPix, with specified bounds. |
| | Since this is an older call, the pixel format is hardcoded to BGRA_4444_8u. |
| | <pre lang="cpp">PPixHandle ppixNew (prRect *bounds);</pre> |
| `ppixDispose` | Frees a PPixHand. |
| | <pre lang="cpp">void ppixDispose (PPixHand pix);</pre> |
| `ppixLockPixels` `ppixUnlockPixels` | These legacy functions are deprecated and should no longer be used. |
| `ppixGetPixelAspectRatio` | Passes back the pixel aspect ratio of a PPixHand. |
| | Premiere populates the longs with the PAR numerator and denominator. |
| | <pre lang="cpp">int ppixGetPixelAspectRatio (<br/>  PPixHand      pix,<br/>  csSDK_uint32  *num,<br/>  csSDK_uint32  *den)</pre> |
| `ppixGetAlphaBounds` | Passes back the alpha bounds of a PPixHand. |
| | <pre lang="cpp">void ppixGetAlphaBounds (<br/>  PPixHand  pix,<br/>  prRect    *alphaBounds)</pre> |

### Utility Functions

| Function | Description |
|---|---|
| `getSerialNumber` | Passes back Premiere's serial number. |
| | <pre lang="cpp">void getSerialNumber (char* buffer);</pre> |
| | - `buffer`: must be at least 40 characters long. |
| `getFileTimebase` | Passes back a file's timebase in a `TDB_TimeRecord` (allocated by the plugin). |
| | If the file is already in the sequence, it is preferable to get a file's timebase using the [Video Segment Suite](../sweetpea-suites#video-segment-suite) to get the `kVideoSegmentProperty_Media_StreamFrameRate`. |
| | Note: Know your formats. Don't ask an audio only format for video, you may get unexpected results. |
| | <pre lang="cpp">csSDK_int32 getFileTimebase (<br/>  prFileSpec      \*filespec,<br/>  csSDK_int32     audioOnly,<br/>  TDB_TimeRecord  \*result);</pre> |
| | - `filespec`: description of the file, use before getFileVideo |
| | - `audioOnly`: if non-zero, return the audio timebase. If zero, return the video timebase. |
| | - `result`: the returned timebase |
| `getFileVideo` | Gets a frame of video (at a specified time) from a file. |
| | If the file is already in the sequence, it is preferable to get a file's video using the [Clip Render Suite](../sweetpea-suites#clip-render-suite). |
| | <pre lang="cpp">csSDK_int32 getFileVideo (<br/>  prFileSpec   \*filespec,<br/>  csSDK_int32  frame,<br/>  PPixHand     thePort,<br/>  prRect       \*bounds,<br/>  csSDK_int32  flags);</pre> |
| | - `filespec`: the description of the file |
| | - `frame`: the frame to retrieve |
| | - `thePort`: where the frame will be delivered, allocate prior to calling |
| | - `bounds`: the boundary of the port |
| | - `flags`: unused |
| `getFileVideoBounds` | Passes back the bounds of a file. |
| | If the file is already in the sequence, it is preferable to get a file's video bounds using the [Clip Render Suite](../sweetpea-suites#clip-render-suite). |
| | <pre lang="cpp">csSDK_int32 getFileVideoBounds (<br/>  prFileSpec \*filespec,<br/>  prRect \*bounds);</pre> |
| `getSPBasicSuite` | This very important call returns the SweetPea suite that allows plugins to acquire and release all other [SweetPea Suites](../sweetpea-suites). |
| | <pre lang="cpp">SPBasicSuite* getSPBasicSuite();</pre> |
| `getFileExtString` | Passes back the list of valid entensions/filter strings given a class of media (see file types constants below). |
| | <pre lang="cpp">csSDK_int32 (*plugGetFileExtStringFunc)(<br/>  csSDK_uint32  fileTypes,<br/>  char          \*inBuffer,<br/>  csSDK_uint32  inBufferSize);</pre> |
| | - `kFileTypes_Still`: still media |
| | - `kFileTypes_AudioOnly`: audio-only media |
| | - `kFileTypes_AudioVideo`: audio and video media |
| | - `kFileTypes_AllNoIntrinsics`: all importable media types via importer plugins (no prproj, txt, etc) |

### Timeline Functions

| Function | Description |
|---|---|
| `getClipVideo` | Superceded by the [Clip Render Suite](../sweetpea-suites#clip-render-suite), which provides asynchronous import. |
| | Retrieves a frame from a clip in a segment tree returned from the [Video Segment Suite](../sweetpea-suites#video-segment-suite). |
| | It can be used by to retrieve and store a still frame, such as a title, for playback. |
| | !!! warning |
| | This call is expensive; use it carefully. |
| | <pre lang="cpp">csSDK_int32 getClipVideo (<br/>  csSDK_int32  frame,<br/>  PPixHand     thePort,<br/>  prRect       \*bounds,<br/>  csSDK_int32  flags,<br/>  PrClipID     clipData);</pre> |
| | - `frame`: the frame number you're requesting |
| | - `thePort`: allocate using the [PPix Creator Suite](../sweetpea-suites#ppix-creator-suite) before calling |
| | - `bounds`: the boundaries of video to return |
| | - `flags`: either `kGCVFlag_UseFilePixelAspectRatio` or 0. Setting it to `kGCVFlag_UseFilePixelAspectRatio` will return a PPix stamped with the PAR of the file. Setting it to 0 will return a PPix adjusted to the PAR of the project and stamped accordingly. It scales, but does not stretch the PPix to fit the destination PPix that is passed in. So if the destination PPix is larger than the frame asked for, the frame will maintain its frame aspect ratio, letterboxing or pillarboxing the frame with transparent black. To import a frame at its native dimensions, use getClipVideoBounds, allocate the destination PPix using the dimensions returned, and pass the PPixHand and the dimensions into `getClipVideo`. If the frame size is not the same as the sequence size, the frame must be positioned in the composite by the plugin. |
| | - `clipData`: the clipData handle found in prtFileRec |
| `getWorkArea` | Passes back two longs with the start and end of the current work area (read-only). |
| | Set timelineData to the timelineData of the current sequence. |
| | <pre lang="cpp">csSDK_int32 getWorkArea (<br/>  PrTimelineID  timelineData,<br/>  csSDK_int32   \*workAreaStart,<br/>  csSDK_int32   \*workAreaEnd);</pre> |
| `getCurrentTimebase` | Passes back the current timebase of the timeline (`scale + sampleSize`). |
| | <pre lang="cpp">void getCurrentTimebase(<br/>  PrTimelineID  timelineData,<br/>  csSDK_uint32  \*scale,<br/>  csSDK_int32   \*sampleSize);</pre> |
| | - `timelineData`: the timelineData of the current sequence |
| | - `scale`: the sequence scale |
| | - `sampleSize`: the sequence sampleSize |
| `getCurrentPos` | Returns the position of the current time indicator (the position bar set by the user). |
| | If (-1) is returned, the position bar in the timeline is not present. |
| | <pre lang="cpp">csSDK_int32 getCurrentPos(<br/>  PrTimelineID  timelineData);</pre> |
| | - `timelineData`: the timelineData of the current sequence |
| `getPreviewFrameEx` | Gets a fully rendered frame from the timeline (all layers). |
| | Used by video filters and transitions for previews in a modal setup dialog. |
| | If the return value is -1, an error occurred, but if it is 0, the callback has returned safely. |
| | Exporters rendering final movies should NOT use this callback. |
| | <pre lang="cpp">csSDK_int32 getPreviewFrameEx(<br/>  PrTimelineID    timelineData,<br/>  csSDK_int32     inFrame,<br/>  PPixHand\*       outRenderedFrame,<br/>  const prRect\*   inFrameRect,<br/>  PrPixelFormat\*  inRequestedPixelFormatArray,<br/>  csSDK_int32     inRequestedPixelFormatArrayCount,<br/>  csSDK_uint32    inPixelAspectRatioNumerator,<br/>  csSDK_uint32    inPixelAspectRatioDenominator,<br/>  bool            inAlwaysRender);</pre> |
| | - `timelineData`: The timelineData of the current sequence. Pass a timeline handle as provided in EffectRecord, VideoRecord, compDoCompileInfo, or imGetPrefsRec. |
| | - `inFrame`: The frame to get, specified in the current timebase. If a timelineData handle is specified (first param above), this frame will be relative to the start of the sequence. |
| | - `outRenderedFrame`: The destination buffer. Allocate prior to this call by the plugin using the [PPix Suite](../sweetpea-suites#ppix-suite). Released by the caller before returning. |
| `getClipVideoBounds` | Passes back the dimensions of a clip in a sequence. For rolling/ crawling titles, use the Roll/Crawl Suite to get the dimensions instead. |
| | <pre lang="cpp">csSDK_int32 getClipVideoBounds (<br/>  PrClipID      inClipData,<br/>  prRect        \*outBounds,<br/>  csSDK_uint32  \*outPixelAspectRatioNumerator,<br/>  csSDK_uint32  \*outPixelAspectRatioDenominator);</pre> |
| `getClipVideoEx` | Superceded by the [Clip Render Suite](../sweetpea-suites#clip-render-suite), which provides asynchronous import. |
| | Retrieves a frame from a clip in a segment tree returned from the [Video Segment Suite](../sweetpea-suites#video-segment-suite). |
| | It can be used by to retrieve and store a still frame, such as a title, for playback. |
| | !!! warning |
| | This call is expensive; use it carefully. |
| | <pre lang="cpp">csSDK_int32 getClipVideoEx (<br/>  csSDK_int32          inFrame,<br/>  PPixHand             \*outRenderedFrame,<br/>  const prRect         \*inFrameRect,<br/>  const PrPixelFormat  \*inRequestedPixelFormatArray,<br/>  csSDK_int32          inRequestedPixelFormatArrayCount,<br/>  csSDK_uint32         inPixelAspectRatioNumerator,<br/>  csSDK_uint32         inPixelAspectRatioDenominator,<br/>  PrClipID             inClipData);</pre> |
| | - `inFrame`: the frame number you're requesting, in the timebase of the clip |
| | - `outRenderedFrame`: Allocated by the host. The plugin should dispose of the PPixHand when done |
| | - `inFrameRect`: the boundaries of video to return. To import a frame at its native dimensions, use getClipVideoBounds. If the frame size is not the same as the sequence size, the frame must be positioned in the composite by the plugin. |
| | - `inClipData`: the PrClipID from the video segment |

---

## Bottleneck Functions

The pointer to the legacy bottleneck functions is passed only to transitions and video filters.

These functions are not exposed for other plugin types.

These functions are not aware of different pixel formats, and are intended only for 8-bit BGRA processing.

Sample usage:

```cpp
((*theData)->bottleNecks->StretchBits) (*srcpix,
 *dstpix,
 &srcbox,
 &srcbox,
 0,
 NULL);
```

| Function | Description |
| --- | --- |
| `StretchBits` | Stretches and copies an image, including the alpha channel. |
| | When the destination is larger than the source, it performs bilinear interpolation for smooth scaling. |
| | <pre lang="cpp">void StretchBits (<br/>  PPixHand  srcPix,<br/>  PPixHand  dstPix,<br/>  prRect    srcRect,<br/>  prRect    dstRect,<br/>  int       mode,<br/>  prRgn     rgn);</pre> |
| | StretchBits only works on 8-bit PPixs. |
| | `srcRect` is the area of the source PPix to copy; `dstRect` is used to scale the copy. |
| | `mode`: |
| | Valid modes are `cbBlend`, `cbInterp`, and `cbMaskHdl` |
| | - `cbBlend` - The low byte of the mode defines the amount of blend between the source and destination in a range of 0-255. |
| | - Example: |
| | - To blend 30% of the source with the destination, use `cbBlend \^ (30*255/100)` |
| | - `cbInterp` - While much slower than `cbBlend`, this mode does bilinear interpolation when resizing a source PPix to a larger destination, resulting in a much smoother image. |
| | - `cbMaskHdl` tells StretchBits that prRgn is a handle to a 1-bit deep buffer the same size as the source and destination PPixs, to be used as a mask. |
| | `prRgn`: Pass `0` for no clipping. This parameter is only used on Windows. |
| `DistortPolygon` | Maps the source rectangle to a four-point polygon in the destination. |
| | <pre lang="cpp">void DistortPolygon (<br/>  PPixHand  src,<br/>  PPixHand  dest,<br/>  prRect    \*srcbox,<br/>  prPoint   \*dstpts);</pre> |
| | When scaling up, `DistortPolygon` uses bilinear interpolation; it uses pixel averaging when scaling down. |
| `MapPolygon` | Maps a four-point src polygon into a four-point polygon (dstpts). |
| | If the source polygon is a rectangle, it is equivalent to `DistortPolygon`. |
| | <pre lang="cpp">void MapPolygon (<br/>  PPixHand  src,<br/>  PPixHand  dest,<br/>  prPoint   \*srcpts,<br/>  prPoint   \*dstpts );</pre> |
| `DistortFixed` | Equivalent to DistortPolygon, using fixed-point coordinates. |
| | <pre lang="cpp">void DistortFixed (<br/>  PPixHand   src,<br/>  PPixHand   dest,<br/>  prRect     \*srcbox,<br/>  LongPoint  \*dstpts);</pre> |
| `FixedToFixed` | Equivalent to MapPolygon, using fixed-point coordinates. |
| | <pre lang="cpp">void FixedToFixed (<br/>  PPixHand   src,<br/>  PPixHand   dest,<br/>  LongPoint  \*srcpts,<br/>  LongPoint  \*dstpts);</pre> |
| `DoIndexMap` | Image map function. |
| | <pre lang="cpp">void DoIndexMap (<br/>  char    \*src,<br/>  char    \*dst,<br/>  short   row,<br/>  short,  pixwidth,<br/>  short,  height,<br/>  char    \*lookup1,<br/>  char    \*lookup2,<br/>  char    \*lookup3);</pre> |
| `DoConvolve` | Convolution function. |
| | <pre lang="cpp">void DoConvolve (<br/>  unsigned char  \*src,<br/>  unsigned char  \*dst,<br/>  short          \*inmatrix,<br/>  short,         rowBytes,<br/>  short,         width,<br/>  short,         height);</pre> |
