---
title: volumesamplep
order: 17
---
`vector4  volumesamplep(<geometry>geometry, int primnum, vector pos)`

`vector4  volumesamplep(<geometry>geometry, string volumename, vector pos)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号的整数（从0开始）以读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

返回值

给定位置处体积图元的采样值。
体素之间的值将进行三线性插值。

对于标量体积和vdb，如果`Cd`是体积名称，该函数将尝试评估`Cd.x`、`Cd.y`、`Cd.z`和`Cd.w`并返回合并值。（rgba也可用作扩展名）

如果`primnum`或`inputnum`超出范围、几何体无效，或给定图元不是vdb或体积图元，则返回0。
