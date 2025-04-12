---
title: volumegradient
order: 4
---
`vector  volumegradient(<geometry>geometry, int primnum, vector pos)`

`vector  volumegradient(<geometry>geometry, string volumename, vector pos)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号的整数（从0开始），用于读取几何体。

或者，该参数可以是一个指定几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是一个`op:/path/to/sop`引用。

返回值

体积图元的梯度向量。该梯度向量指向数值增加的方向。

如果`primnum`超出范围、几何体无效或给定图元不是体积图元，则返回0。
