---
title: uvdist
order: 18
---

`float  uvdist(<geometry>geometry, string uvname, vector uv, int &prim, vector &primuv)`

`float  uvdist(<geometry>geometry, string uvname, vector uv, int &prim, vector &primuv, float maxdist)`

`float  uvdist(<geometry>geometry, string primgroup, string uvname, vector uv, int &prim, vector &primuv)`

`float  uvdist(<geometry>geometry, string primgroup, string uvname, vector uv, int &prim, vector &primuv, float maxdist)`

返回几何体在UV空间中到最近UV坐标的距离。该函数会查找几何体表面的位置，而不仅仅是点的位置。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`primgroup`

基元组的名称或用于生成基元组的模式。使用与SOP组相同的语义，因此空字符串将匹配所有基元。也可以使用像`@Cd.x>0`这样的属性组，但请注意在[Snippet VOP](../../nodes/vop/snippet.html "运行VEX代码片段以修改输入值。")中可能需要用反斜杠转义`@`符号。

`uvname`

几何体上用作UV空间的点或顶点属性的名称。几何体将根据此属性在原地展开。
该属性可以是2D UV、3D UVW，也可以是任何向量属性。

`uv`

在UV空间中要查找几何体上最近位置的位置。

`prim`

最近基元的编号。如果未找到基元，则为-1。

`primuv`

最近基元的基元UV坐标。可以使用`primuv`函数在该位置评估属性。

`maxdist`

在UV空间中搜索的最大距离。如果允许提前退出，可以加快操作速度。
