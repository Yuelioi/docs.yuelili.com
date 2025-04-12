---
title: volumeindexu
order: 11
---
`vector2  volumeindexu(<geometry>geometry, int primnum, vector voxel)`

`vector2  volumeindexu(<geometry>geometry, string volumename, vector voxel)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

返回值

返回体积图元中特定体素的vector2值。

如果`primnum`或`inputnum`超出范围、几何体无效或给定图元不是体积图元，则返回0。
