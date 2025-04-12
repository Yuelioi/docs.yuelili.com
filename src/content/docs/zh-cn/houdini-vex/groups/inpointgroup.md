---
title: inpointgroup
order: 5
---
`int  inpointgroup(<geometry>geometry, string groupname, int pointnum)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号的整数（从0开始）以读取几何体。

或者，该参数可以是一个指定几何文件的字符串（例如`.bgeo`）以从中读取。在Houdini内部运行时，这可以是一个`op:/path/to/sop`引用。

返回值

如果组存在且点在组中，则返回`1`，否则返回`0`。

可以使用临时组，如`0-3`或`@Cd.x>0.5`。它匹配SOP组命名约定，特别是空字符串表示所有点。
