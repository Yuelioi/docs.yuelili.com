---
title: primattrib
order: 47
---
`<type> primattrib(<geometry>geometry, string attribute_name, int prim, int &success)`

`<type>[] primattrib(<geometry>geometry, string attribute_name, int prim, int &success)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，该参数可以是一个整数，表示要读取几何体的输入编号（从0开始）。

或者，该参数可以是一个指定几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`attribute_name`

要读取的属性（或固有属性）名称。

`prim`

基元编号。

`&success`

如果导入成功则设置为`1`，
如果出错（例如属性或基元编号不存在）则设置为`0`。
