---
title: custom-ui-and-drawbot
---
# Custom UI & Drawbot

Custom UI uses a composited drawing model using Drawbot. The Drawbot suites can be used for:

1. Basic 2D path drawing: Lines, Rect, Arc, Bezier
2. Stroking/Filling/Shading paths
3. Image drawing: Compositing an ARGB/BGRA buffer onto the surface
4. Pushing/popping surface state
5. Text drawing, if supplier supports it (clients should first check if text drawing is supported before actual drawing)

Drawing may only occur during `PF_Event_DRAW` (and not during `PF_Event_DRAG` or `PF_Event_DO_CLICK`).

To use Drawbot, first get the drawing reference by passing in PF_Context to a new suite call [PF_GetDrawingReference](#drawbot_drawbotsuite).

If a non-NULL drawing reference is returned, use it to get the supplier and surface references from [DRAWBOT_DrawbotSuite](#drawbot_drawbotsuite).

The Drawbot suites include `DRAWBOT_DrawbotSuite`, `DRAWBOT_SupplierSuite`, `DRAWBOT_SurfaceSuite`, `DRAWBOT_PathSuite`.

---

## Make Your Custom UI Look Not So "Custom"

Use the new [PF_EffectCustomUIOverlayThemeSuite](#pf_effectcustomuioverlaythemesuite) to match the host application UI. Your users will thank you.

---

## Redrawing

In order to redraw a specific area of a pane, we recommend the following:

1. Call `PF_InvalidateRect` (from [PF_AppSuite](../../effect-details/useful-utility-functions#pf_appsuite)) from the effect. This will cause a lazy display redraw, and will update at the next available idle moment. This rect is in coordinates related to the associated pane. Using a NULL rect will update the entire pane.
2. Set the [event outflag](../PF_EventExtra) to `PF_EO_UPDATE_NOW`, which will cause an immediate draw event for the specified pane when the current event returns.

If an effect needs to update more than one window at a time, it should set `PF_OutFlag_REFRESH_UI` (from [PF_OutFlags](../../effect-basics/pf_outdata#pf_outflags)), which will cause a redraw of the entire ECW, comp, and layer windows.

---

## HiDPI and Retina Display Support

To support HiDPI and Retina Displays, you can use offscreen images that are twice the size, and then use the `Transform` function from [Drawbot_SurfaceSuite](#drawbot_surfacesuite) to scale the image down in half before drawing it.

---

## PF_EffectCustomUISuite

Enables an effect to get the drawing reference. This is the first call needed to use Drawbot.

### PF_EffectCustomUISuite1

| Function | Purpose |
|---|---|
| `PF_GetDrawingReference` | Get the drawing reference. |
| | <pre lang="cpp"> PF_GetDrawingReference(<br/>  const PF_ContextH  effect_contextH,<br/>  DRAWBOT_DrawRef    \*referenceP0);</pre> |

---

## Drawbot_DrawbotSuite

Using the Drawbot reference, get the supplier and surface references.

### Drawbot_DrawbotSuite1

| Function | Purpose |
|---|---|
| `GetSupplier` | Get the supplier reference. |
| | Needed to use [Drawbot_SupplierSuite](#drawbot_suppliersuite). |
| | <pre lang="cpp"> GetSupplier(<br/>  DRAWBOT_DrawRef      in_drawbot_ref,<br/>  DRAWBOT_SupplierRef  \*out_supplierP);</pre> |
| `GetSurface` | Get the surface reference. |
| | Needed to use [Drawbot_SurfaceSuite](#drawbot_surfacesuite). |
| | <pre lang="cpp"> GetSurface(<br/>  DRAWBOT_DrawRef     in_drawbot_ref,<br/>  DRAWBOT_SurfaceRef  \*out_surfaceP);</pre> |

---

## Drawbot_SupplierSuite

Calls to create and release drawing tools, get default settings, and query drawing capabilities.

### Drawbot_SupplierSuite1

| Function | Purpose |
|---|---|
| `NewPen` | Create a new pen. Release this using `ReleaseObject` from [Drawbot_SupplierSuite](#drawbot_suppliersuite). |
| | <pre lang="cpp"> NewPen(<br/>  DRAWBOT_SupplierRef      in_supplier_ref,<br/>  const DRAWBOT_ColorRGBA  \*in_colorP,<br/>  float                    in_size,<br/>  DRAWBOT_PenRef           \*out_penP);</pre> |
| `NewBrush` | Create a new brush. Release this using `ReleaseObject` from [Drawbot_SupplierSuite](#drawbot_suppliersuite). |
| | <pre lang="cpp"> NewBrush(<br/>  DRAWBOT_SupplierRef      in_supplier_ref,<br/>  const DRAWBOT_ColorRGBA  \*in_colorP,<br/>  DRAWBOT_BrushRef         \*out_brushP);</pre> |
| `SupportsText` | Check if current supplier supports text. |
| | <pre lang="cpp"> SupportsText(<br/>  DRAWBOT_SupplierRef  in_supplier_ref,<br/>  DRAWBOT_Boolean      \*out_supports_textB);</pre> |
| `GetDefaultFontSize` | Get the default font size. |
| | <pre lang="cpp"> GetDefaultFontSize(<br/>  DRAWBOT_SupplierRef  in_supplier_ref,<br/>  float                \*out_font_sizeF);</pre> |
| `NewDefaultFont` | Create a new font with default settings. |
| | You can pass the default font size from `GetDefaultFontSize`. |
| | Release this using `ReleaseObject` from [Drawbot_SupplierSuite](#drawbot_suppliersuite). |
| | <pre lang="cpp"> NewDefaultFont(<br/>  DRAWBOT_SupplierRef  in_supplier_ref,<br/>  float                in_font_sizeF,<br/>  DRAWBOT_FontRef      \*out_fontP);</pre> |
| `NewImageFromBuffer` | Create a new image from buffer passed to in_dataP. |
| | Release this using `ReleaseObject` from [Drawbot_SupplierSuite](#drawbot_suppliersuite). |
| | <pre lang="cpp"> NewImageFromBuffer(<br/>  DRAWBOT_SupplierRef  in_supplier_ref,<br/>  int                  in_width,<br/>  int                  in_height,<br/>  int                  in_row_bytes,<br/>  DRAWBOT_PixelLayout  in_pl,<br/>  const void           \*in_dataP,<br/>  DRAWBOT_ImageRef     \*out_imageP);</pre> |
| | `DRAWBOT_PixelLayout` can be one of the following: |
| | - `kDRAWBOT_PixelLayout_24RGB` |
| | - `kDRAWBOT_PixelLayout_24BGR` |
| | - `kDRAWBOT_PixelLayout_32RGB` |
| | - `ARGB` (A is ignored) |
| | - `kDRAWBOT_PixelLayout_32BGR` |
| | - `BGRA` (A is ignored) |
| | - `kDRAWBOT_PixelLayout_32ARGB_Straight` |
| | - `kDRAWBOT_PixelLayout_32ARGB_Premul` |
| | - `kDRAWBOT_PixelLayout_32BGRA_Straight` |
| | - `kDRAWBOT_PixelLayout_32BGRA_Premul` |
| `NewPath` | Create a new path. Release this using `ReleaseObject` from [Drawbot_SupplierSuite](#drawbot_suppliersuite). |
| | <pre lang="cpp"> NewPath(<br/>  DRAWBOT_SupplierRef  in_supplier_ref,<br/>  DRAWBOT_PathRef      \*out_pathP);</pre> |
| `SupportsPixelLayoutBGRA` | A given Drawbot implementation can support multiple channel orders, but will likely prefer one over the other. |
| | Use the following four callbacks to get the preferred channel order for any API that takes a `DRAWBOT_PixelLayout` (e.g. `NewImageFromBuffer`). |
| | <pre lang="cpp"> SupportsPixelLayoutBGRA(<br/>  DRAWBOT_SupplierRef  in_supplier_ref,<br/>  DRAWBOT_Boolean      \*out_supports_bgraPB);</pre> |
| `PrefersPixelLayoutBGRA` | <pre lang="cpp">PrefersPixelLayoutBGRA(<br/>  DRAWBOT_SupplierRef  in_supplier_ref,<br/>  DRAWBOT_Boolean      \*out_prefers_bgraPB);</pre> |
| `SupportsPixelLayoutARGB` | <pre lang="cpp">SupportsPixelLayoutARGB(<br/>  DRAWBOT_SupplierRef  in_supplier_ref,<br/>  DRAWBOT_Boolean      \*out_supports_argbPB);</pre> |
| `PrefersPixelLayoutARGB` | <pre lang="cpp">PrefersPixelLayoutARGB(<br/>  DRAWBOT_SupplierRef  in_supplier_ref,<br/>  DRAWBOT_Boolean      \*out_prefers_argbPB);</pre> |
| `RetainObject` | Retain (increase reference count on) any object (pen, brush, path, etc). For example, it should be used when any object is copied and the copied object should be retained. |
| | <pre lang="cpp"> RetainObject(<br/>  DRAWBOT_ObjectRef  in_obj_ref);</pre> |
| `ReleaseObject` | Release (decrease reference count on) any object (pen, brush, path, etc). This function MUST be called for any object created using `NewXYZ()` from this suite. |
| | Do not call this function on a `DRAWBOT_SupplierRef` and `DRAWBOT_SupplierRef`, since these are not created by the plug-in. |
| | <pre lang="cpp"> ReleaseObject(<br/>  DRAWBOT_ObjectRef  in_obj_ref);</pre> |

---

## Drawbot_SurfaceSuite

Calls to draw on the surface, and to query and set drawing settings.

### Drawbot_SurfaceSuite1

| Function | Purpose |
|---|---|
| `PushStateStack` | Push the current surface state onto the stack. It should be popped to retrieve old state. |
| | It is required to restore state if you are going to clip or transform a surface or change the interpolation or anti-aliasing policy. |
| | <pre lang="cpp"> PushStateStack(<br/>  DRAWBOT_SurfaceRef  in_surface_ref);</pre> |
| `PopStateStack` | Pop the last pushed surface state off the stack. |
| | <pre lang="cpp"> PopStateStack(<br/>  DRAWBOT_SurfaceRef  in_surface_ref);</pre> |
| `PaintRect` | Paint a rectangle with a color on the surface. |
| | <pre lang="cpp"> PaintRect(<br/>  DRAWBOT_SurfaceRef       in_surface_ref,<br/>  const DRAWBOT_ColorRGBA  \*in_colorP,<br/>  const DRAWBOT_RectF32    \*in_rectPR);</pre> |
| `FillPath` | Fill a path using a brush and fill type. |
| | <pre lang="cpp"> FillPath(<br/>  DRAWBOT_SurfaceRef  in_surface_ref,<br/>  DRAWBOT_BrushRef    in_brush_ref,<br/>  DRAWBOT_PathRef     in_path_ref,<br/>  DRAWBOT_FillType    in_fill_type);</pre> |
| | `DRAWBOT_FillType` is one of the following: |
| | - `kDRAWBOT_FillType_EvenOdd` |
| | - `kDRAWBOT_FillType_Winding` |
| `StrokePath` | Stroke a path using a pen. |
| | <pre lang="cpp"> StrokePath(<br/>  DRAWBOT_SurfaceRef  in_surface_ref,<br/>  DRAWBOT_PenRef      in_pen_ref,<br/>  DRAWBOT_PathRef     in_path_ref);</pre> |
| `Clip` | Clip the surface. |
| | <pre lang="cpp"> Clip(<br/>  DRAWBOT_SurfaceRef    in_surface_ref,<br/>  DRAWBOT_SupplierRef   in_supplier_ref,<br/>  const DRAWBOT_Rect32  \*in_rectPR);</pre> |
| `GetClipBounds` | Get clip bounds. |
| | <pre lang="cpp"> GetClipBounds(<br/>  DRAWBOT_SurfaceRef  in_surface_ref,<br/>  DRAWBOT_Rect32      \*out_rectPR);</pre> |
| `IsWithinClipBounds` | Checks whether a rect is within the clip bounds. |
| | <pre lang="cpp"> IsWithinClipBounds(<br/>  DRAWBOT_SurfaceRef    in_surface_ref,<br/>  const DRAWBOT_Rect32  \*in_rectPR,<br/>  DRAWBOT_Boolean       \*out_withinPB);</pre> |
| `Transform` | Transform the last surface state. |
| | <pre lang="cpp"> Transform(<br/>  DRAWBOT_SurfaceRef       in_surface_ref,<br/>  const DRAWBOT_MatrixF32  \*in_matrixP);</pre> |
| `DrawString` | Draw a string. |
| | <pre lang="cpp"> DrawString(<br/>  DRAWBOT_SurfaceRef       in_surface_ref,<br/>  DRAWBOT_BrushRef         in_brush_ref,<br/>  DRAWBOT_FontRef          in_font_ref,<br/>  const DRAWBOT_UTF16Char  \*in_stringP,<br/>  const DRAWBOT_PointF32   \*in_originP,<br/>  DRAWBOT_TextAlignment    in_alignment_style,<br/>  DRAWBOT_TextTruncation   in_truncation_style,<br/>  float                    in_truncation_width);</pre> |
| | `DRAWBOT_TextAlignment` is one of the following: |
| | - `kDRAWBOT_TextAlignment_Left` |
| | - `kDRAWBOT_TextAlignment_Center` |
| | - `kDRAWBOT_TextAlignment_Right` |
| | `DRAWBOT_TextTruncation` is one of the following: |
| | - `kDRAWBOT_TextTruncation_None` |
| | - `kDRAWBOT_TextTruncation_End` |
| | - `kDRAWBOT_TextTruncation_EndEllipsis` |
| | - `kDRAWBOT_TextTruncation_PathEllipsis` |
| `DrawImage` | Draw an image created using `NewImageFromBuffer()` on the surface. Alpha = [0.0f, 1.0f ]. |
| | <pre lang="cpp"> DrawImage(<br/>  DRAWBOT_SurfaceRef      in_surface_ref,<br/>  DRAWBOT_ImageRef        in_image_ref,<br/>  const DRAWBOT_PointF32  \*in_originP,<br/>  float                   in_alpha);</pre> |
| `SetInterpolationPolicy` | <pre lang="cpp">SetInterpolationPolicy(<br/>  DRAWBOT_SurfaceRef           in_surface_ref,<br/>  DRAWBOT_InterpolationPolicy  in_interp);</pre> |
| | `DRAWBOT_InterpolationPolicy` is one of the following: |
| | - `kDRAWBOT_InterpolationPolicy_None` |
| | - `kDRAWBOT_InterpolationPolicy_Med` |
| | - `kDRAWBOT_InterpolationPolicy_High` |
| `GetInterpolationPolicy` | <pre lang="cpp">GetInterpolationPolicy(<br/>  DRAWBOT_SurfaceRef           in_surface_ref,<br/>  DRAWBOT_InterpolationPolicy  \*out_interpP);</pre> |
| `SetAntiAliasPolicy` | <pre lang="cpp">SetAntiAliasPolicy(<br/>  DRAWBOT_SurfaceRef       in_surface_ref,<br/>  DRAWBOT_AntiAliasPolicy  in_policy);</pre> |
| | `DRAWBOT_AntiAliasPolicy` is one of the following: |
| | - `kDRAWBOT_AntiAliasPolicy_None` |
| | - `kDRAWBOT_AntiAliasPolicy_Med` |
| | - `kDRAWBOT_AntiAliasPolicy_High` |
| `GetAntiAliasPolicy` | <pre lang="cpp">GetAntiAliasPolicy(<br/>  DRAWBOT_SurfaceRef       in_surface_ref,<br/>  DRAWBOT_AntiAliasPolicy  \*out_policyP);</pre> |
| `Flush` | Flush drawing. This is not always needed, and if overused, may cause excessive redrawing and flashing. |
| | <pre lang="cpp"> Flush(<br/>  DRAWBOT_SurfaceRef  in_surface_ref);</pre> |

---

## Drawbot_PathSuite

Calls to draw paths.

### Drawbot_PathSuite1

| Function | Purpose |
|---|---|
| `MoveTo` | Move to a point. |
| | <pre lang="cpp"> MoveTo(<br/>  DRAWBOT_PathRef  in_path_ref,<br/>  float            in_x,<br/>  float            in_y);</pre> |
| `LineTo` | Add a line to the path. |
| | <pre lang="cpp"> LineTo(<br/>  DRAWBOT_PathRef  in_path_ref,<br/>  float            in_x,<br/>  float            in_y);</pre> |
| `BezierTo` | Add a cubic bezier to the path. |
| | <pre lang="cpp"> BezierTo(<br/>  DRAWBOT_PathRef         in_path_ref,<br/>  const DRAWBOT_PointF32  \*in_pt1P,<br/>  const DRAWBOT_PointF32  \*in_pt2P,<br/>  const DRAWBOT_PointF32  \*in_pt3P);</pre> |
| `AddRect` | Add a rect to the path. |
| | <pre lang="cpp"> AddRect(<br/>  DRAWBOT_PathRef        in_path_ref,<br/>  const DRAWBOT_RectF32  \*in_rectPR);</pre> |
| `AddArc` | Add a arc to the path. Zero start degrees == 3 o'clock. |
| | Sweep is clockwise. Units for angle are in degrees. |
| | <pre lang="cpp"> AddArc(<br/>  DRAWBOT_PathRef         in_path_ref,<br/>  const DRAWBOT_PointF32  \*in_centerP,<br/>  float                   in_radius,<br/>  float                   in_start_angle,<br/>  float                   in_sweep);</pre> |
| `Close` | Close the path. |
| | <pre lang="cpp"> Close(<br/>  DRAWBOT_PathRef  in_path_ref);</pre> |

---

## PF_EffectCustomUIOverlayThemeSuite

This suite should be used for stroking and filling paths and vertices on the Composition and Layer Windows. After Effects is using this suite internally, and we have made it available to make custom UI look consistent across effects. The foreground/shadow colors are computed based on the app brightness level so that custom UI is always visible regardless of the application's Brightness setting in the Preferences.

### PF_EffectCustomUIOverlayThemeSuite1

| Function | Purpose |
|---|---|
| `PF_GetPreferredForegroundColor` | Get the preferred foreground color. |
| | <pre lang="cpp"> PF_GetPreferredForegroundColor(<br/>  DRAWBOT_ColorRGBA  \*foreground_colorP);</pre> |
| `PF_GetPreferredShadowColor` | Get the preferred shadow color. |
| | <pre lang="cpp"> PF_GetPreferredShadowColor(<br/>  DRAWBOT_ColorRGBA  \*shadow_colorP);</pre> |
| `PF_GetPreferredStrokeWidth` | Get the preferred foreground & shadow stroke width. |
| | <pre lang="cpp"> PF_GetPreferredStrokeWidth(<br/>  float  \*stroke_widthPF);</pre> |
| `PF_GetPreferredVertexSize` | Get the preferred vertex size. |
| | <pre lang="cpp"> PF_GetPreferredVertexSize(<br/>  float  \*vertex_sizePF);</pre> |
| `PF_GetPreferredShadowOffset` | Get the preferred shadow offset. |
| | <pre lang="cpp"> PF_GetPreferredShadowOffset(<br/>  A_LPoint  \*shadow_offsetP);</pre> |
| `PF_StrokePath` | Stroke the path with the overlay theme foreground color. |
| | Optionally draw the shadow using the overlay theme shadow color. |
| | Uses overlay theme stroke width for stroking foreground and shadow strokes. |
| | <pre lang="cpp"> PF_StrokePath(<br/>  const DRAWBOT_DrawRef  drawbot_ref,<br/>  const DRAWBOT_PathRef  path_ref<br/>  PF_Boolean             draw_shadowB);</pre> |
| `PF_FillPath` | Fills the path with overlay theme foreground color. |
| | Optionally draw the shadow using the overlay theme shadow color. |
| | <pre lang="cpp"> PF_FillPath(<br/>  const DRAWBOT_DrawRef  drawbot_ref,<br/>  const DRAWBOT_PathRef  path_ref<br/>  PF_Boolean             draw_shadowB);</pre> |
| `PF_FillVertex` | Fills a square vertex around the center point using the overlay theme foreground color and vertex size. |
| | <pre lang="cpp"> PF_FillVertex(<br/>  const DRAWBOT_DrawRef  drawbot_ref,<br/>  const A_FloatPoint     \*center_pointP<br/>  PF_Boolean             draw_shadowB);</pre> |
