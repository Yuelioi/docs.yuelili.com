---
title: pointprims
order: 21
---
`int [] pointprims(<geometry>geometry, int ptnum)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，该参数可以是表示输入编号的整数（从0开始），用于读取几何体。

或者，该参数可以是指定要读取的几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`ptnum`

要获取图元的点编号。

返回值

一个图元编号数组。这些编号将按升序排列且不包含重复项。

如果没有图元拥有给定的点，则数组将为空。
