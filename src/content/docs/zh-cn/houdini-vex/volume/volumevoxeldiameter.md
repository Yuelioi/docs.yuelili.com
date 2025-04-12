---
title: volumevoxeldiameter
order: 23
---
`float  volumevoxeldiameter(<geometry>geometry, int primnum)`

`float  volumevoxeldiameter(<geometry>geometry, string primname)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号的整数（从0开始）以读取几何体。

或者，该参数可以是指定要读取的几何文件（例如 `.bgeo`）的字符串。在Houdini内部运行时，可以是 `op:/path/to/sop`引用。

返回值

给定图元中体素的直径。
要获取体素边长，请除以 `sqrt(3)`。

如果 `primnum`或 `inputnum`超出范围、几何体无效或给定图元不是矢量体积图元，则返回0。
