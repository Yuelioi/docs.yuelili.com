---
title: orthographic
order: 10
---
| 始于版本 | 17.5 |
| --- | --- |

`matrix  orthographic(float zoom, float orthowidth, float image_aspect, float pixel_aspect, float clip_near, float clip_far)`

`matrix  orthographic(float zoom, float orthowidth, float image_aspect, float pixel_aspect, float clip_near, float clip_far, vector4 window)`

根据给定参数创建正交投影矩阵。该矩阵可用于将点投影到相机的NDC坐标系中。

要构建从世界空间到NDC空间的完整变换（给定相机矩阵和投影矩阵），可使用：`worldToNDC = worldToCamera * projection;`

`zoom`

镜头缩放系数。有时缩放系数会通过焦距(focal)和光圈(aperture)表示，此时`zoom = focal/aperture`。

`orthowidth`

附加的"缩放"因子。

arg:image_aspect

图像宽高比。有时会通过分辨率参数`xres`和`yres`表示，此时`image_aspect = xres / yres`。

arg::clip_near

近裁剪平面距离。

arg::clip_far

远裁剪平面距离。

arg::window

以vector4类型编码的投影窗口偏移量。
其中window.x和window.y表示窗口最小xy坐标，
window.z和window.w表示窗口最大xy坐标。
该参数为可选参数，未指定时默认为{0,0,1,1}。
