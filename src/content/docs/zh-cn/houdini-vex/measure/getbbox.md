---
title: getbbox
order: 3
---
`void  getbbox(<geometry>geometry, vector &min, vector &max)`

将向量设置为几何体包围盒的最小和最大角点。这会输出原始包围盒，包含球体和体积的范围。

`void  getbbox(<geometry>geometry, string primgroup, vector &min, vector &max)`

输出给定组中图元的包围盒。
空白的primgroup字符串将包含所有图元。
字符串支持Ad-hoc模式，如`0-10`和`@Cd.x>0`。

`void  getbbox(vector &min, vector &max)`

警告
这种形式的`getbbox`已被弃用，未来可能会被移除。
请根据需要改用其他形式。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个整数，表示要从中读取几何体的输入编号（从0开始）。

或者，该参数可以是指定要读取的几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。
