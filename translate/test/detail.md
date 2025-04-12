---
title: detail函数
order: 14
---

`<type> detail(<geometry>geometry, string attribute_name, int ignored=0)`

`<type>[] detail(<geometry>geometry, string attribute_name, int ignored=0)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号的整数（从0开始）以读取几何体。

或者，该参数可以是指定要读取的几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`attribute_name`

要读取的属性（或固有属性）名称。

`ignored`

最后一个参数总是被忽略。
它存在的目的是让您可以通过更改名称将prim/point/vertex调用（每个都有元素编号参数）更改为detail调用，而无需同时更改参数。

返回值

如果导入属性失败则返回`0`，成功则返回属性值。