---
title: 颜色空间转换
---
# 颜色空间转换

不同的像素格式适用于不同的操作。After Effects 通过 `PF_ColorCallbacksSuite` 暴露其内部功能。以下是支持的格式。

---

## 不同颜色空间的像素类型

| 像素类型 | 数据结构 |
| --- | --- |
| 8 bpc ARGB | <pre lang="cpp">typedef struct {<br/>  A_u_char alpha, red, green, blue;<br/>} PF_Pixel8;</pre> |
| 16 bpc ARGB | <pre lang="cpp">typedef struct {<br/>  A_u_short alpha, red, green, blue;<br/>} PF_Pixel16;</pre> |
| 32 bpc ARGB | <pre lang="cpp">typedef struct {<br/>  PF_FpShort alpha, red, green, blue;<br/>} PF_PixelFloat, PF_Pixel32;</pre> |
| HLS (色相、亮度、饱和度) | <pre lang="cpp">typedef PF_Fixed PF_HLS_PIXEL[3]</pre> |
| YIQ (亮度、同相色度、正交色度) | <pre lang="cpp">typedef PF_Fixed PF_YIQ_PIXEL[3]</pre> |

---

插件可以通过使用以下回调函数，为几乎任何颜色空间编写的图像处理算法进行绘制。

## 颜色空间转换回调函数

| 函数 | 用途 | 替换函数 |
| --- | --- | --- |
| RGBtoHLS | 给定一个 RGB 像素，返回一个 HLS（色相、亮度、饱和度）像素。HLS 值以定点数从 0 到 1 缩放。 | `PF_RGB_TO_HLS` |
| HLStoRGB | 给定一个 HLS 像素，返回一个 RGB 像素。 | `PF_HLS_TO_RGB` |
| RGBtoYIQ | 给定一个 RGB 像素，返回一个 YIQ（亮度、同相色度、正交色度）像素。Y 以定点数从 0 到 1 缩放，I 以定点数从 -0.5959 到 0.5959 缩放，Q 以定点数从 -0.5227 到 0.5227 缩放。 | `PF_RGB_TO_YIQ` |
| YIQtoRGB | 给定一个 YIQ 像素，返回一个 RGB 像素。 | `PF_YIQ_TO_RGB` |
| Luminance | 给定一个 RGB 像素，返回其亮度值的 100 倍（0 到 25500）。 | `PF_LUMINANCE` |
| Hue | 给定一个 RGB 像素，返回其色相角度映射到 0 到 255，其中 0 表示 0 度，255 表示 360 度。 | `PF_HUE` |
| Lightness | 给定一个 RGB 像素，返回其亮度值（0 到 255）。 | `PF_LIGHTNESS` |
| Saturation | 给定一个 RGB 像素，返回其饱和度值（0 到 255）。 | `PF_SATURATION` |
