---
title: nverticesgroup
order: 20
---
`int  nverticesgroup(<geometry>geometry, string groupname)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个整数，表示要从中读取几何体的输入编号（从0开始）。

或者，该参数可以是一个字符串，指定要读取的几何文件（例如`.bgeo`）。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`groupname`

一个组名或临时组，如`0-3`或`@Cd.x>0.5`。这与SOP组命名约定相匹配，特别是空字符串表示所有顶点。
