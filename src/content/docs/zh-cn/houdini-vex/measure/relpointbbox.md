---
title: relpointbbox
order: 16
---
`vector  relpointbbox(<geometry>geometry, vector position)`

返回给定点相对于几何体中所有点包围盒的相对位置。

`vector  relpointbbox(<geometry>geometry, string pointgroup, vector position)`

使用指定点组中图元的包围盒进行计算。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号的整数（从0开始）以读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。
