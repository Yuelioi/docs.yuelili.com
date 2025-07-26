---
title: prim_attribute
order: 45
---

此函数使用*内禀基元UV*来指定位置。若要使用存储在UV属性中的UV坐标，请改用[uvsample](/zh-cn/houdini-vex/attributes-and-intrinsics/uvsample "使用UV属性在特定UV坐标处插值属性值")。

`int  prim_attribute(<geometry>geometry, <type>&value, string attribute_name, int prim_number, float u, float v)`

`int  prim_attribute(<geometry>geometry, <type>&value[], string attribute_name, int prim_number, float u, float v)`

在基元给定的UV坐标处采样属性值。

`int  prim_attribute(<geometry>geometry, <type>&value, string attribute_name, int prim_number, vector uvw)`

`int  prim_attribute(<geometry>geometry, <type>&value[], string attribute_name, int prim_number, vector uvw)`

使用向量而非两个浮点数来指定UVW坐标。

若无需检测错误，可改用[primuv](/zh-cn/houdini-vex/attributes-and-intrinsics/primuv "在特定参数化(uvw)位置插值属性值")。
此函数不适用于某些基元类型，如四面体和多边形汤。

`<geometry>`

在节点上下文(如wrangle SOP)中运行时，此参数可以是表示输入编号(从0开始)的整数，用于读取几何体。

或者，该参数可以是指定几何体文件(例如`.bgeo`)的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`value`

函数会用从基元插值得到的值覆盖此变量。

`attribute_name`

要读取的属性名称。**对于点和顶点属性，给定UV坐标处的值将从周边点/顶点插值得到**。

`prim_number`

要读取属性的基元编号。

`u`, `v`

读取属性时的基元UV坐标。

返回值

成功时返回`1`，错误时返回`0`(例如属性不存在)。

若`value`的类型大于基元类型则返回`0`。例如，不能将向量属性读取到矩阵变量中。
