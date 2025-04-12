---
title: relbbox
order: 15
---
`vector  relbbox(<geometry>geometry, vector position)`

返回给定点相对于几何体中图元包围盒的相对位置。

`vector  relbbox(<geometry>geometry, string primgroup, vector position)`

使用指定图元组中图元的包围盒。

`vector  relbbox(vector position)`

警告
此形式的`relbbox`已被弃用，未来版本可能会移除。
请根据需要改用其他形式。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。
