---
title: xyzdist
order: 21
---
`float  xyzdist(<geometry>geometry, vector origin)`

计算从原点(origin)到给定几何体上最近位置的距离。

`float  xyzdist(<geometry>geometry, vector origin, int &prim, vector &uv)`

`float  xyzdist(<geometry>geometry, vector origin, int &prim, vector &uv, float maxdist)`

计算从原点(origin)到几何体上最近位置的距离，并将最近位置的图元编号和UV坐标写入输出参数。

`float  xyzdist(<geometry>geometry, string primgroup, vector origin)`

`float  xyzdist(<geometry>geometry, string primgroup, vector origin, int &prim, vector &uv)`

`float  xyzdist(<geometry>geometry, string primgroup, vector origin, int &prim, vector &uv, float maxdist)`

计算从原点(origin)到给定几何体上指定图元组中最近位置的距离，并将最近位置的图元编号和UV坐标写入输出参数。

注意：对于打包图元(packed primitives)和非均匀缩放的球体/管体/圆形图元，计算的距离可能不代表实际的最近点，因为最近点是在未变换空间中查找的。

`<geometry>`

在节点上下文(如wrangle SOP)中运行时，此参数可以是表示输入编号(从0开始)的整数，用于读取几何体。

或者，该参数可以是指定几何体文件(如`.bgeo`)的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`primgroup`

图元组的名称或用于生成图元组的模式。使用与SOP组相同的语义，因此空字符串将匹配所有图元。也可以使用属性组如`@Cd.x>0`，但注意在[Snippet VOP](../../nodes/vop/snippet.html "运行VEX代码片段来修改输入值")中可能需要用反斜杠转义`@`符号。

`origin`

在空间中查找几何体上最近点的位置坐标。

`&prim`

函数会将此变量覆盖为最近图元的编号，如果未找到图元则为`-1`。

`&uv`

函数会将此变量覆盖为最近图元上最近点的UV坐标。
可以使用[primuv](/zh-cn/houdini-vex/attributes-and-intrinsics/primuv "在特定参数化(uvw)位置插值属性值")在此位置采样属性值。

`maxdist`

搜索的最大距离。指定此参数可以通过允许函数提前退出来加速计算。

返回值

从原点(origin)到几何体上最近位置的距离。
