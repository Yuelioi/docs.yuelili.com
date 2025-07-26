---
title: vertexattrib
order: 78
---

`<type> vertexattrib(<geometry>geometry, string attribute_name, int linear_vertex_index, int &success)`

`<type>[] vertexattrib(<geometry>geometry, string attribute_name, int linear_vertex_index, int &success)`

与 [vertex](/zh-cn/houdini-vex/attributes-and-intrinsics/vertex "从几何体中读取顶点属性值") 函数不同，此函数没有接受基元编号和基元顶点编号的版本。如果您有基元编号和基元顶点编号，可以使用 [vertexindex](/zh-cn/houdini-vex/geometry/vertexindex "将基元/顶点对转换为线性顶点") 将其转换为线性索引。

`<geometry>`

在节点上下文（如 wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是一个指定要读取的几何体文件（例如 `.bgeo`）的字符串。在 Houdini 内部运行时，可以是 `op:/path/to/sop` 引用。

`attribute_name`

要读取的属性（或固有属性）的名称。

`linear_vertex_index`

所有顶点列表中的线性索引。如果您有基元编号和基元顶点编号，可以使用 [vertexindex](/zh-cn/houdini-vex/geometry/vertexindex "将基元/顶点对转换为线性顶点") 将其转换为线性索引。

`success`

如果属性存在且读取成功，函数会将此变量覆盖为 `1`，否则为 `0`。

返回值

给定点编号上指定属性的值。
