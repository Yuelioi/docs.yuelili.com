---
title: getbbox_center
order: 4
---
`vector  getbbox_center(<geometry>geometry)`

计算几何体的包围盒中心点。

`vector  getbbox_center(<geometry>geometry, string primgroup)`

计算指定组内图元的包围盒中心点。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，该参数可以是表示输入编号的整数（从0开始）以读取几何体。

或者，该参数可以是指定几何文件（例如`.bgeo`）的字符串以从中读取。在Houdini内部运行时，可以是`op:/path/to/sop`形式的引用。
