---
title: volumesamplei
order: 16
---
`int  volumesamplei(<geometry>geometry, int primnum, vector pos)`

`int  volumesamplei(<geometry>geometry, string volumename, vector pos)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个整数，表示从哪个输入编号（从0开始）读取几何体。

或者，该参数也可以是一个字符串，指定要读取的几何体文件（例如`.bgeo`）。在Houdini内部运行时，可以是`op:/path/to/sop`这样的引用路径。

返回值

在给定位置处体积图元的采样值。

如果`primnum`或`inputnum`超出范围、几何体无效，或给定的图元不是体积或VDB图元，则返回0。
