---
title: perspective
order: 15
---
| 版本 | 17.5 |
| --- | --- |

`matrix  perspective(float zoom, float image_aspect, float pixel_aspect, float clip_near, float clip_far)`

`matrix  perspective(float zoom, float image_aspect, float pixel_aspect, float clip_near, float clip_far, vector4 window)`

根据给定参数创建透视投影矩阵。该矩阵可用于将点投影到相机的NDC坐标系中。

若要通过相机矩阵和投影矩阵实现从世界空间到NDC空间的单次变换，可使用公式：`worldToNDC = worldToCamera * projection;`

`zoom`

镜头缩放值。有时缩放值会以焦距和光圈来表示，此时`zoom = focal/aperture`。

arg:image_aspect

图像宽高比。有时图像宽高比会以`xres`和`yres`表示，此时`image_aspect = xres / yres`。

arg::clip_near

近裁剪平面距离。

arg::clip_far

远裁剪平面距离。

arg::window

以vector4格式编码的投影窗口偏移量。
window.x和window.y表示窗口最小xy坐标，
window.z和window.w表示窗口最大xy坐标。
该参数为可选参数，未指定时默认为{0,0,1,1}。
