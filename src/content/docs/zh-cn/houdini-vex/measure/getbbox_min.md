---
title: getbbox_min
order: 6
---
`vector  getbbox_min(<geometry>geometry)`

计算几何体的包围盒最小值。

`vector  getbbox_min(<geometry>geometry, string primgroup)`

计算给定组内图元的包围盒最小值。

`<geometry>`

在节点上下文（如 wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如 `.bgeo`）的字符串。在 Houdini 内部运行时，可以是 `op:/path/to/sop` 引用。
