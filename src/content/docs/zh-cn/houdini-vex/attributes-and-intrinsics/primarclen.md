---
title: primarclen
order: 46
---

`float  primarclen(<geometry>geometry, vector2 uv1, vector2 uv2, int prim_num)`

`float  primarclen(<geometry>geometry, vector2 uv1, vector2 uv2, int prim_num, int divs)`

`float  primarclen(<geometry>geometry, vector2 uv1, vector2 uv2, int prim_num, int divs, int primuvmode)`

`float  primarclen(<geometry>geometry, vector2 uv1, vector2 uv2, int prim_num, int divs, int primuvmode, float primuvtol)`

返回给定图元上两个参数化UV坐标之间的弧长。该函数可用于测量多边形面或沿曲线的距离。

`geometry`

指定要读取的几何体文件路径的字符串（例如`.bgeo`文件）。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`uv1`

测量起始点在图元参数化空间中的坐标。

`uv2`

测量结束点在图元参数化空间中的坐标。

`prim_num`

要测量距离的图元编号。

`divs`

每段使用的细分数量，未指定时默认为10。

`primuvmode`

定义uv1和uv2坐标的单位。可用模式列表请参阅[primuvconvert](/zh-cn/houdini-vex/attributes-and-intrinsics/primuvconvert "在不同空间之间转换曲线图元上的参数化UV位置")。

`primuvtol`

计算曲线长度时用于UV坐标转换的容差值。

提示

您也可以读取`arclength`图元固有属性来获取曲线的总弧长。
