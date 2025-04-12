---
title: inprimgroup
order: 6
---

`int  inprimgroup(<geometry>geometry, string groupname, int primnum)`

`<geometry>`

当在节点上下文（如wrangle SOP）中运行时，此参数可以是一个整数，表示要从中读取几何图形的输入编号（从0开始）。

或者，该参数可以是一个字符串，指定要读取的几何文件（例如`.bgeo`文件）。在Houdini内部运行时，可以是`op:/path/to/sop`这样的引用路径。

返回值

如果组存在且指定图元在该组中，则返回`1`；否则返回`0`。

该函数支持临时组（ad-hoc groups）语法，如`0-3`或`@Cd.x>0.5`。它遵循SOP组的命名约定，特别需要注意的是空字符串表示所有图元。
