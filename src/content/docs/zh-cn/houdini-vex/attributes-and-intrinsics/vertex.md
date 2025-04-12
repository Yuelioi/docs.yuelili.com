---
title: vertex
order: 77
---

`<type> vertex(<geometry>geometry, string attribute_name, int linear_vertex_index)`

`<type>[] vertex(<geometry>geometry, string attribute_name, int linear_vertex_index)`

使用顶点列表中的线性索引来指定顶点。

`<type> vertex(<geometry>geometry, string attribute_name, int prim_num, int vertex_num)`

`<type>[] vertex(<geometry>geometry, string attribute_name, int prim_num, int vertex_num)`

通过基元编号和该基元上顶点列表的偏移量来指定顶点。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`attribute_name`

要读取的属性（或固有属性）名称。

返回值

给定顶点上指定属性的值，如果属性或顶点不存在则返回`0`。
