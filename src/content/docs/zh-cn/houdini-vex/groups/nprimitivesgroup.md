---
title: nprimitivesgroup
order: 9
---
`int  nprimitivesgroup(<geometry>geometry, string groupname)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号的整数（从0开始）以读取几何体。

或者，该参数可以是指定要读取的几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`groupname`

组名或临时组，如`0-3`或`@Cd.x>0.5`。这与SOP组命名约定相匹配，特别是空字符串表示所有图元。
