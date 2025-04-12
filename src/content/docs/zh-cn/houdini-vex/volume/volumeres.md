---
title: volumeres
order: 14
---
`vector  volumeres(<geometry>geometry, int primnum)`

`vector  volumeres(<geometry>geometry, string volumename)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，该参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

返回值

体积图元的分辨率。

对于VDB，有效索引范围不是`0..res-1`，而是
`volumeindexorigin..volumeindexorigin+res-1`

如果`primnum`或`inputnum`超出范围、几何体无效，或给定图元不是矢量体积图元，则返回0。
