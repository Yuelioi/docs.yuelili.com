---
title: primpoints
order: 27
---
`int [] primpoints(<geometry>geometry, int primnum)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`primnum`

要获取点的图元编号。

返回值

一个点数组，其顺序与图元本身存储的顺序相同。
如果图元编号无效，数组将为空。
