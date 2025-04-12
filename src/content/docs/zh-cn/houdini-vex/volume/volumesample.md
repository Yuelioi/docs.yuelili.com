---
title: volumesample
order: 15
---
`float  volumesample(<geometry>geometry, int primnum, vector pos)`

`float  volumesample(<geometry>geometry, string volumename, vector pos)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

返回值

在给定位置处体积图元的采样值。体素之间的值将进行三线性插值。

如果`primnum`或`inputnum`超出范围、几何体无效，或给定图元不是体积或VDB图元，则返回0。

![](../_static/vex/volumesample.png)
使用`volumesample`对一维和二维数据进行插值的示例。可视化法线是使用`volumegradient`函数计算的。
