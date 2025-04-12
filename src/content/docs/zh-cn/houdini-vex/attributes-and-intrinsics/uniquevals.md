---
title: uniquevals
order: 75
---
| 始于版本 | 17.0 |
| --- | --- |

`int [] uniquevals(<geometry>geometry, string attribclass, string attribute_name)`

`string [] uniquevals(<geometry>geometry, string attribclass, string attribute_name)`

如果几何体中任意点/图元/顶点的给定属性值相同，则*唯一*值的集合将小于点/图元/顶点的总数。此函数可获取唯一值集合。

此函数仅适用于字符串和整数属性。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`attribclass`

可以是`"detail"`（或`"global"`）、`"point"`、`"prim"`或`"vertex"`之一。

也可以使用`"primgroup"`、`"pointgroup"`或`"vertexgroup"`来[从组中读取](../groups.html "在VEX中可以将图元/点/顶点组的内容作为属性读取")。

`attribute_name`

要读取的属性（或固有属性）名称。
