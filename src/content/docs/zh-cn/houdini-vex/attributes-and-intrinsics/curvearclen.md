---
title: curvearclen
order: 13
---
| 始于版本 | 18.5 |
| --- | --- |

`float  curvearclen(vector positions[], float uv1, float uv2, int closedflag, int fmt, int order)`

`float  curvearclen(vector positions[], float uv1, float uv2, int closedflag, int fmt, int order, int divs)`

`float  curvearclen(vector positions[], float uv1, float uv2, int closedflag, int fmt, int order, int divs, int primuvmode)`

`float  curvearclen(vector positions[], float uv1, float uv2, int closedflag, int fmt, int order, int divs, int primuvmode, float primuvtol)`

返回给定图元上两个参数化UV坐标之间的弧长。可用于测量多边形面或曲线上的距离。

`geometry`

指定要读取的几何体文件路径字符串（例如`.bgeo`）。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`points`

定义曲线的控制点数组。

`uv1`

测量起始点在图元参数空间中的坐标。

`uv2`

测量结束点在图元参数空间中的坐标。

`closedflag`

曲线闭合标志。闭合曲线中，最后一个控制点会与第一个控制点相连。

`fmt`

要创建的曲线类型。可使用math.h中定义的常量，或：0创建多边形曲线，1创建贝塞尔曲线，2创建NURBS曲线。

`order`

NURBS或贝塞尔曲线的阶数。多边形曲线忽略此参数。

`divs`

每段使用的细分数量，未指定时默认为10。

`primuvmode`

定义uv1和uv2坐标的单位模式。详见[primuvconvert](/zh-cn/houdini-vex/attributes-and-intrinsics/primuvconvert "在不同空间之间转换曲线图元上的参数化UV位置")的模式列表。

`primuvtol`

计算曲线长度时用于UV坐标转换的容差值。
