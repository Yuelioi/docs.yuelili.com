---
title: volumesampleu
order: 18
---
`vector2  volumesampleu(<geometry>geometry, int primnum, vector pos)`

`vector2  volumesampleu(<geometry>geometry, string volumename, vector pos)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号的整数（从0开始）以读取几何体。

或者，该参数可以是一个指定几何体文件（例如`.bgeo`）的字符串以从中读取。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

返回值

在给定位置处体积图元的采样值。体素之间的值将进行三线性插值。

对于标量体积和vdb，如果`Cd`是体积名称，该函数将尝试评估`Cd.x`和`Cd.y`并返回合并后的值。（rg和uv也可以用作扩展名）

如果`primnum`或`inputnum`超出范围、几何体无效，或给定的图元不是vdb或体积图元，则返回0。
