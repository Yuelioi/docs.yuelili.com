---
title: getbbox_size
order: 7
---
`vector  getbbox_size(<geometry>geometry)`

计算几何体的包围盒尺寸。

`vector  getbbox_size(<geometry>geometry, string primgroup)`

计算给定组中图元的包围盒尺寸。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个整数，表示要读取几何体的输入编号（从0开始）。

或者，该参数可以是一个指定几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。
