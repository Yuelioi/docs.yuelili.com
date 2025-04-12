---
title: volumeindexv
order: 12
---
`vector  volumeindexv(<geometry>geometry, int primnum, vector voxel)`

`vector  volumeindexv(<geometry>geometry, string volumename, vector voxel)`

`<geometry>`

在节点上下文（例如wrangle SOP）中运行时，此参数可以是一个整数，表示用于读取几何体的输入编号（从0开始）。

或者，该参数可以是一个指定几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

返回值

返回体积图元中特定体素的矢量值。

如果`primnum`或`inputnum`超出范围、几何体无效，或给定的图元不是矢量体积图元，则返回0。
