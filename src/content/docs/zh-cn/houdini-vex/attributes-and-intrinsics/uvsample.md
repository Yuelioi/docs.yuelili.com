---
title: uvsample
order: 76
---
此函数使用UV属性中的UV坐标来指定位置。如需使用*固有基元UV*，请改用[primuv](/zh-cn/houdini-vex/attributes-and-intrinsics/primuv "在特定参数化(uvw)位置对属性值进行插值")。

`<type> uvsample(<geometry>geometry, string attr_name, string uv_attr_name, vector uvw)`

`<type>[] uvsample(<geometry>geometry, string attr_name, string uv_attr_name, vector uvw)`

`<type> uvsample(<geometry>geometry, string primgroup, string attr_name, string uv_attr_name, vector uvw)`

`<type>[] uvsample(<geometry>geometry, string primgroup, string attr_name, string uv_attr_name, vector uvw)`

`<geometry>`

在节点上下文(如wrangle SOP)中运行时，此参数可以是表示输入编号(从0开始)的整数，用于读取几何体。

或者，该参数可以是用于指定读取几何文件的字符串(例如`.bgeo`)。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`primgroup`

基元组名称或用于生成基元组的模式。使用与SOP组相同的语义，因此空字符串将匹配所有基元。也可以使用像`@Cd.x>0`这样的属性组，但请注意在[Snippet VOP](../../nodes/vop/snippet.html "运行VEX代码片段来修改输入值")中可能需要用反斜杠转义`@`符号。

`attr_name`

要采样的点或顶点属性名称。对于基元属性，值取自给定UV下的基元。**对于点和顶点属性，给定UV坐标处的值将从周围的点/顶点插值获得**。值取自存在该名称属性的"最低"层级。

这必须是一个3浮点属性。

`uv_attr_name`

包含UV的点或顶点属性名称。Houdini创建的默认UV位于名为`uv`的属性中。命名属性可以是任何向量类型的2D(UV)或3D(UVW)。

`uvw`

在UV(W)空间中采样属性的位置。
