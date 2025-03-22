---
title: 自定义UI与Drawbot
---
# 自定义UI与Drawbot

自定义UI使用Drawbot的复合绘图模型。Drawbot套件可用于：

1. 基本的2D路径绘制：线条、矩形、圆弧、贝塞尔曲线
2. 描边/填充/着色路径
3. 图像绘制：将ARGB/BGRA缓冲区合成到表面上
4. 推入/弹出表面状态
5. 文本绘制，如果供应商支持（客户端应在实际绘制之前检查是否支持文本绘制）

绘图只能在`PF_Event_DRAW`期间进行（而不能在`PF_Event_DRAG`或`PF_Event_DO_CLICK`期间进行）。

要使用Drawbot，首先通过将PF_Context传递给新的套件调用[PF_GetDrawingReference](#drawbot_drawbotsuite)来获取绘图引用。

如果返回了非NULL的绘图引用，请使用它从[DRAWBOT_DrawbotSuite](#drawbot_drawbotsuite)中获取供应商和表面引用。

Drawbot套件包括`DRAWBOT_DrawbotSuite`、`DRAWBOT_SupplierSuite`、`DRAWBOT_SurfaceSuite`、`DRAWBOT_PathSuite`。

---

## 让你的自定义UI看起来不那么“自定义”

使用新的[PF_EffectCustomUIOverlayThemeSuite](#pf_effectcustomuioverlaythemesuite)来匹配主机应用程序的UI。你的用户会感谢你。

---

## 重绘

为了重绘窗格的特定区域，我们建议以下步骤：

1. 从效果中调用`PF_InvalidateRect`（来自[PF_AppSuite](../effect-details/useful-utility-functions.md#pf_appsuite)）。这将导致延迟显示重绘，并在下一个空闲时刻更新。此矩形与相关窗格的坐标相关。使用NULL矩形将更新整个窗格。
2. 将[event outflag](../PF_EventExtra)设置为`PF_EO_UPDATE_NOW`，这将在当前事件返回时立即触发指定窗格的绘制事件。

如果效果需要同时更新多个窗口，则应设置`PF_OutFlag_REFRESH_UI`（来自[PF_OutFlags](../effect-basics/PF_OutData.md#pf_outflags)），这将导致整个ECW、comp和图层窗口的重绘。

---

## HiDPI和Retina显示支持

为了支持HiDPI和Retina显示，你可以使用两倍大小的离屏图像，然后使用[Drawbot_SurfaceSuite](#drawbot_surfacesuite)中的`Transform`函数在绘制之前将图像缩小一半。

---

## PF_EffectCustomUISuite

使效果能够获取绘图引用。这是使用Drawbot所需的第一个调用。

### PF_EffectCustomUISuite1

|         函数         |                                                              用途                                                              |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------|
| `PF_GetDrawingReference` | 获取绘图引用。                                                                                                                |
|                      | <pre lang="cpp"> PF_GetDrawingReference(<br/>  const PF_ContextH  effect_contextH,<br/>  DRAWBOT_DrawRef    \*referenceP0);</pre> |

---

## Drawbot_DrawbotSuite

使用Drawbot引用，获取供应商和表面引用。

### Drawbot_DrawbotSuite1

|   函数    |                                                           用途                                                           |
|-----------|--------------------------------------------------------------------------------------------------------------------------|
| `GetSupplier` | 获取供应商引用。                                                                                                         |
|            | 需要使用[Drawbot_SupplierSuite](#drawbot_suppliersuite)。                                                                |
|            | <pre lang="cpp"> GetSupplier(<br/>  DRAWBOT_DrawRef      in_drawbot_ref,<br/>  DRAWBOT_SupplierRef  \*out_supplierP);</pre> |
| `GetSurface`  | 获取表面引用。                                                                                                           |
|            | 需要使用[Drawbot_SurfaceSuite](#drawbot_surfacesuite)。                                                                  |
|            | <pre lang="cpp"> GetSurface(<br/>  DRAWBOT_DrawRef     in_drawbot_ref,<br/>  DRAWBOT_SurfaceRef  \*out_surfaceP);</pre>     |

---

## Drawbot_SupplierSuite

用于创建和释放绘图工具、获取默认设置以及查询绘图能力的调用。

### Drawbot_SupplierSuite1

|         函数          |                                                                                                                                                            用途                                                                                                                                                            |
|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `NewPen`                  | 创建新画笔。使用[Drawbot_SupplierSuite](#drawbot_suppliersuite)中的`ReleaseObject`释放此对象。                                                                                                                                                                                                                             |
|                       | <pre lang="cpp"> NewPen(<br/>  DRAWBOT_SupplierRef      in_supplier_ref,<br/>  const DRAWBOT_ColorRGBA  \*in_colorP,<br/>  float                    in_size,<br/>  DRAWBOT_PenRef           \*out_penP);</pre>                                                                                                                |
| `NewBrush`                | 创建新画刷。使用[Drawbot_SupplierSuite](#drawbot_suppliersuite)中的`ReleaseObject`释放此对象。                                                                                                                                                                                                                             |
|                       | <pre lang="cpp"> NewBrush(<br/>  DRAWBOT_SupplierRef      in_supplier_ref,<br/>  const DRAWBOT_ColorRGBA  \*in_colorP,<br/>  DRAWBOT_BrushRef         \*out_brushP);</pre>                                                                                                                                                    |
| `SupportsText`            | 检查当前供应商是否支持文本。                                                                                                                                                                                                                                                                                              |
|                       | <pre lang="cpp"> SupportsText(<br/>  DRAWBOT_SupplierRef  in_supplier_ref,<br/>  DRAWBOT_Boolean      \*out_supports_textB);</pre>                                                                                                                                                                                            |
| `GetDefaultFontSize`      | 获取默认字体大小。                                                                                                                                                                                                                                                                                                        |
|                       | <pre lang="cpp"> GetDefaultFontSize(<br/>  DRAWBOT_SupplierRef  in_supplier_ref,<br/>  float                \*out_font_sizeF);</pre>                                                                                                                                                                                          |
| `NewDefaultFont`          | 使用默认设置创建新字体。                                                                                                                                                                                                                                                                                                  |
|                       | 你可以传递从`GetDefaultFontSize`获取的默认字体大小。                                                                                                                                                                                                                                                                       |
|                       | 使用[Drawbot_SupplierSuite](#drawbot_suppliersuite)中的`ReleaseObject`释放此对象。                                                                                                                                                                                                                                         |
|                       | <pre lang="cpp"> NewDefaultFont(<br/>  DRAWBOT_SupplierRef  in_supplier_ref,<br/>  float                in_font_sizeF,<br/>  DRAWBOT_FontRef      \*out_fontP);</pre>                                                                                                                                                         |
| `NewImageFromBuffer`      | 从传递给in_dataP的缓冲区创建新图像。                                                                                                                                                                                                                                                                                      |
|                       | 使用[Drawbot_SupplierSuite](#drawbot_suppliersuite)中的`ReleaseObject`释放此对象。                                                                                                                                                                                                                                         |
|                       | <pre lang="cpp"> NewImageFromBuffer(<br/>  DRAWBOT_SupplierRef  in_supplier_ref,<br/>  int                  in_width,<br/>  int                  in_height,<br/>  int                  in_row_bytes,<br/>  DRAWBOT_PixelLayout  in_pl,<br/>  const void           \*in_dataP,<br/>  DRAWBOT_ImageRef     \*out_imageP);</pre> |
|                       | `DRAWBOT_PixelLayout`可以是以下之一：                                                                                                                                                                                                                                                                                     |
|                       | - `kDRAWBOT_PixelLayout_24RGB`                                                                                                                                                                                                                                                                                             |
|                       | - `kDRAWBOT_PixelLayout_24BGR`                                                                                                                                                                                                                                                                                             |
|                       | - `kDRAWBOT_PixelLayout_32RGB`                                                                                                                                                                                                                                                                                             |
|                       | - `ARGB`（A被忽略）                                                                                                                                                                                                                                                                                                       |
|                       | - `kDRAWBOT_PixelLayout_32BGR`                                                                                                                                                                                                                                                                                             |
|                       | - `BGRA`（A被忽略）                                                                                                                                                                                                                                                                                                       |
|                       | - `kDRAWBOT_PixelLayout_32ARGB_Straight`                                                                                                                                                                                                                                                                                   |
|                       | - `kDRAWBOT_PixelLayout_32ARGB_Premul`                                                                                                                                                                                                                                                                                     |
|                       | - `kDRAWBOT_PixelLayout_32BGRA_Straight`                                                                                                                                                                                                                                                                                   |
|                       | - `kDRAWBOT_PixelLayout_32BGRA_Premul`                                                                                                                                                                                                                                                                                     |
| `NewPath`                 | 创建新路径。使用[Drawbot_SupplierSuite](#drawbot_suppliersuite)中的`ReleaseObject`释放此对象。                                                                                                                                                                                                                             |
|                       | <pre lang="cpp"> NewPath(<br/>  DRAWBOT_SupplierRef  in_supplier_ref,<br/>  DRAWBOT_PathRef      \*out_pathP);</pre>                                                                                                                                                                                                          |
| `SupportsPixelLayoutBGRA` | 给定的Drawbot实现可以支持多种通道顺序，但可能会优先选择其中一种。                                                                                                                                                                                                                                                          |
|                       | 使用以下四个回调来获取任何接受`DRAWBOT_PixelLayout`的API的首选通道顺序（例如`NewImageFromBuffer`）。                                                                                                                                                                                                                       |
|                       | <pre lang="cpp"> SupportsPixelLayoutBGRA(<br/>  DRAWBOT_SupplierRef  in_supplier_ref,<br/>  DRAWBOT_Boolean      \*out_supports_bgraPB);</pre>                                                                                                                                                                                |
| `PrefersPixelLayoutBGRA`  | <pre lang="cpp">PrefersPixelLayoutBGRA(<br/>  DRAWBOT_SupplierRef  in_supplier_ref,<br/>  DRAWBOT_Boolean      \*out_prefers_bgraPB);</pre>                                                                                                                                                                                   |
| `SupportsPixelLayoutARGB` | <pre lang="cpp">SupportsPixelLayoutARGB(<br/>  DRAWBOT_SupplierRef  in_supplier_ref,<br/>  DRAWBOT_Boolean      \*out_supports_argbPB);</pre>                                                                                                                                                                                 |
| `PrefersPixelLayoutARGB`  | <pre lang="cpp">PrefersPixelLayoutARGB(<br/>  DRAWBOT_SupplierRef  in_supplier_ref,<br/>  DRAWBOT_Boolean      \*out_prefers_argbPB);</pre>                                                                                                                                                                                   |
| `RetainObject`            | 保留（增加引用计数）任何对象（画笔、画刷、路径等）。例如，当复制任何对象并且应保留复制的对象时，应使用此函数。                                                                                                                                                                                                             |
|                       | <pre lang="cpp"> RetainObject(<br/>  DRAWBOT_ObjectRef  in_obj_ref);</pre>                                                                                                                                                                                                                                                    |
| `ReleaseObject`           | 释放（减少引用计数）任何对象（画笔、画刷、路径等）。对于使用此套件中的`NewXYZ()`创建的任何对象，必须调用此函数。                                                                                                                                                                                                           |
|                       | 不要在`DRAWBOT_SupplierRef`和`DRAWBOT_SupplierRef`上调用此函数，因为这些对象不是由插件创建的。                                                                                                                                                                                                                              |
|                       | <pre lang="cpp"> ReleaseObject(<br/>  DRAWBOT_ObjectRef  in_obj_ref);</pre>                                                                                                                                                                                                                                                   |

---

## Drawbot_SurfaceSuite

用于在表面上绘制以及查询和设置绘图设置的调用。

### Drawbot_SurfaceSuite1

|         函数         |                                                                                                                                                                                                             用途                                                                                                                                                                                                              |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `PushStateStack`         | 将当前表面状态推入堆栈。应弹出以恢复旧状态。                                                                                                                                                                                                                                                                                                                                 |
|                      | 如果你要裁剪或变换表面，或更改插值或抗锯齿策略，则需要恢复状态。                                                                                                                                                                                                                                                                                                                                 |
|                      | <pre lang="cpp"> PushStateStack(<br/>  DRAWBOT_SurfaceRef  in_surface_ref);</pre>                                                                                                                                                                                                                                                                                                                                                |
| `PopStateStack`          | 弹出最后推入的表面状态。                                                                                                                                                                                                                                                                                                                                                     |
|                      | <pre lang="cpp"> PopStateStack(<br/>  DRAWBOT_SurfaceRef  in_surface_ref);</pre>                                                                                                                                                                                                                                                                                                                                                 |
| `PaintRect`              | 在表面上用颜色绘制矩形。                                                                                                                                                                                                                                                                                                                                                     |
|                      | <pre lang="cpp"> PaintRect(<br/>  DRAWBOT_SurfaceRef       in_surface_ref,<br/>  const DRAWBOT_ColorRGBA  \*in_colorP,<br/>  const DRAWBOT_RectF32    \*in_rectPR);</pre>                                                                                                                                                                                                                                                        |
| `FillPath`               | 使用画刷和填充类型填充路径。                                                                                                                                                                                                                                                                                                                                                 |
|                      | <pre lang="cpp"> FillPath(<br/>  DRAWBOT_SurfaceRef  in_surface_ref,<br/>  DRAWBOT_BrushRef    in_brush_ref,<br/>  DRAWBOT_PathRef     in_path_ref,<br/>  DRAWBOT_FillType    in_fill_type);</pre>                                                                                                                                                                                                                               |
|                      | `DRAWBOT_FillType`是以下之一：                                                                                                                                                                                                                                                                                                                                  |
|                      | - `kDRAWBOT_FillType_EvenOdd`                                                                                                                                                                                                                                                                                                                                    |
|                      | - `kDRAWBOT_FillType_Winding`                                                                                                                                                                                                                                                                                                                                    |
| `StrokePath`             | 使用画笔描边路径。                                                                                                                                                                                                                                                                                                                                                         |
|                      | <pre lang="cpp"> StrokePath(<br/>  DRAWBOT_SurfaceRef  in_surface_ref,<br/>  DRAWBOT_PenRef      in_pen_ref,<br/>  DRAWBOT_PathRef     in_path_ref);</pre>                                                                                                                                                                                                                                                                       |
| `Clip`                   | 裁剪表面。                                                                                                                                                                                                                                                                                                                                                                 |
|                      | <pre lang="cpp"> Clip(<br/>  DRAWBOT_SurfaceRef    in_surface_ref,<br/>  DRAWBOT_SupplierRef   in_supplier_ref,<br/>  const DRAWBOT_Rect32  \*in_rectPR);</pre>                                                                                                                                                                                                                                                                  |
| `GetClipBounds`          | 获取裁剪边界。                                                                                                                                                                                                                                                                                                                                                             |
|                      | <pre lang="cpp"> GetClipBounds(<br/>  DRAWBOT_SurfaceRef  in_surface_ref,<br/>  DRAWBOT_Rect32      \*out_rectPR);</pre>                                                                                                                                                                                                                                                                                                         |
| `IsWithinClipBounds`     | 检查矩形是否在裁剪边界内。                                                                                                                                                                                                                                                                                                                                                 |
|                      | <pre lang="cpp"> IsWithinClipBounds(<br/>  DRAWBOT_SurfaceRef    in_surface_ref,<br/>  const DRAWBOT_Rect32  \*in_rectPR,<br/>  DRAWBOT_Boolean       \*out_withinPB);</pre>                                                                                                                                                                                                                                                     |
| `Transform`              | 变换最后的表面状态。                                                                                                                                                                                                                                                                                                                                                       |
|                      | <pre lang="cpp"> Transform(<br/>  DRAWBOT_SurfaceRef       in_surface_ref,<br/>  const DRAWBOT_MatrixF32  \*in_matrixP);</pre>                                                                                                                                                                                                                                                                                                   |
| `DrawString`             | 绘制字符串。                                                                                                                                                                                                                                                                                                                                                             |
|                      | <pre lang="cpp"> DrawString(<br/>  DRAWBOT_SurfaceRef       in_surface_ref,<br/>  DRAWBOT_BrushRef         in_brush_ref,<br/>  DRAWBOT_FontRef          in_font_ref,<br/>  const DRAWBOT_UTF16Char  \*in_stringP,<br/>  const DRAWBOT_PointF32   \*in_originP,<br/>  DRAWBOT_TextAlignment    in_alignment_style,<br/>  DRAWBOT_TextTruncation   in_truncation_style,<br/>  float                    in_truncation_width);</pre> |
|                      | `DRAWBOT_TextAlignment`是以下之一：                                                                                                                                                                                                                                                                                                                             |
|                      | - `kDRAWBOT_TextAlignment_Left`                                                                                                                                                                                                                                                                                                                                  |
|                      | - `kDRAWBOT_TextAlignment_Center`                                                                                                                                                                                                                                                                                                                                |
|                      | - `kDRAWBOT_TextAlignment_Right`                                                                                                                                                                                                                                                                                                                                 |
|                      | `DRAWBOT_TextTruncation`是以下之一：                                                                                                                                                                                                                                                                                                                            |
|                      | - `kDRAWBOT_TextTruncation_None`                                                                                                                                                                                                                                                                                                                                 |
|                      | - `kDRAWBOT_TextTruncation_End`                                                                                                                                                                                                                                                                                                                                  |
|                      | - `kDRAWBOT_TextTruncation_EndEllipsis`                                                                                                                                                                                                                                                                                                                          |
|                      | - `kDRAWBOT_TextTruncation_PathEllipsis`                                                                                                                                                                                                                                                                                                                         |
| `DrawImage`              | 使用`NewImageFromBuffer()`创建的图像在表面上绘制。Alpha = [0.0f, 1.0f ]。                                                                                                                                                                                                                                                                                        |
|                      | <pre lang="cpp"> DrawImage(<br/>  DRAWBOT_SurfaceRef      in_surface_ref,<br/>  DRAWBOT_ImageRef        in_image_ref,<br/>  const DRAWBOT_PointF32  \*in_originP,<br/>  float                   in_alpha);</pre>                                                                                                                                                                                                                 |
| `SetInterpolationPolicy` | <pre lang="cpp">SetInterpolationPolicy(<br/>  DRAWBOT_SurfaceRef           in_surface_ref,<br/>  DRAWBOT_InterpolationPolicy  in_interp);</pre>                                                                                                                                                                                                                                                                                  |
|                      | `DRAWBOT_InterpolationPolicy`是以下之一：                                                                                                                                                                                                                                                                                                                       |
|                      | - `kDRAWBOT_InterpolationPolicy_None`                                                                                                                                                                                                                                                                                                                            |
|                      | - `kDRAWBOT_InterpolationPolicy_Med`                                                                                                                                                                                                                                                                                                                             |
|                      | - `kDRAWBOT_InterpolationPolicy_High`                                                                                                                                                                                                                                                                                                                            |
| `GetInterpolationPolicy` | <pre lang="cpp">GetInterpolationPolicy(<br/>  DRAWBOT_SurfaceRef           in_surface_ref,<br/>  DRAWBOT_