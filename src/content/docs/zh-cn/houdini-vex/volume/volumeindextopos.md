---
title: volumeindextopos
order: 10
---
`vector  volumeindextopos(<geometry>geometry, int primnum, vector voxel)`

`vector  volumeindextopos(<geometry>geometry, string volumename, vector voxel)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号的整数（从0开始）以读取几何体。

或者，该参数可以是指定要读取的几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

返回值

体素中心的位置。

如果`primnum`超出范围、几何体无效或给定图元不是体积图元，则返回0。
