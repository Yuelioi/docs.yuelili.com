---
title: detailattrib
order: 15
---
`<type> detailattrib(<geometry>geometry, string attribute_name, int ignored, int &success)`

`<type>[] detailattrib(<geometry>geometry, string attribute_name, int ignored, int &success)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号的整数（从0开始）以读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`attribute_name`

要读取的属性（或固有属性）的名称。

`ignored`

此参数传入`0`。

`success`

如果成功读取属性，函数将此变量设置为`1`，否则设置为`0`。

返回值

导入属性失败时返回`0`，成功时返回属性值。
