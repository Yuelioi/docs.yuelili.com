---
title: volumesamplev
order: 19
---
`vector  volumesamplev(<geometry>geometry, int primnum, vector pos)`

`vector  volumesamplev(<geometry>geometry, string volumename, vector pos)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

返回值

给定位置处体积图元的采样值。体素之间的值将进行三线性插值。

对于标量体积和VDB，如果`Cd`是体积名称，该函数将尝试评估`Cd.x`、`Cd.y`和`Cd.z`并返回合并值。（rgb和uv也可用作扩展名）

如果`primnum`或`inputnum`超出范围、几何体无效，或给定图元不是VDB或体积图元，则返回0。
