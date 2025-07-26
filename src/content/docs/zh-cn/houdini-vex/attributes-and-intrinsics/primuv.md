---
title: primuv
order: 54
---

此函数使用*本征基元UV坐标*来指定位置。如需使用UV属性中存储的UV坐标，请改用[uvsample](/zh-cn/houdini-vex/attributes-and-intrinsics/uvsample "使用UV属性在特定UV坐标处插值计算属性值")函数。

`<type> primuv(<geometry>geometry, string attribute_name, int prim_num, vector uvw)`

`<type>[] primuv(<geometry>geometry, string attribute_name, int prim_num, vector uvw)`

`<geometry>`

在节点上下文(如wrangle SOP)中运行时，此参数可以是表示输入编号(从0开始)的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何体文件(例如`.bgeo`)的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`attribute_name`

要读取的属性名称。**对于点和顶点属性，将在给定UV坐标处从周围的点/顶点插值计算属性值**。

`prim_num`

要读取属性的基元编号。

`uvw`

读取属性时的基元UVW坐标。

- 返回给定坐标处属性的(可能经过插值的)值。如果属性或基元编号不存在，则返回`0`。
- 如需测试错误，可改用[prim_attribute](/zh-cn/houdini-vex/attributes-and-intrinsics/prim_attribute "在特定参数化(u,v)位置插值计算属性值并复制到变量中")函数。
