---
title: findattribvalcount
order: 21
---
`int  findattribvalcount(<geometry>geometry, string attribclass, string attribute_name, int|stringvalue)`

返回在给定属性名称上设置了该整数或字符串值的元素数量。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是一个指定几何体文件（例如`.bgeo`）的字符串以从中读取。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`attribclass`

可以是`"detail"`（或`"global"`）、`"point"`、`"prim"`或`"vertex"`之一。

`attribute_name`

要读取的属性名称。

`value`

要匹配的值。必须与属性类型相同。
