---
title: pointattrib
order: 35
---

`<type> pointattrib(<geometry>geometry, string attribute_name, int pointnumber, int &success)`

`<type>[] pointattrib(<geometry>geometry, string attribute_name, int pointnumber, int &success)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号的整数（从0开始）以读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`&success`

如果属性存在且读取成功，函数会将此变量覆盖为`1`，否则为`0`。

返回值

返回给定点编号上指定属性的值，如果属性或点不存在则返回`0`。
