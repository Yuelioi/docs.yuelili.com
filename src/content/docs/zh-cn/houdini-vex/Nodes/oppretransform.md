---
title: oppretransform
order: 33
---
`matrix  oppretransform(string path)`

`matrix  oppretransform(string path, float time)`

`matrix  oppretransform(int opid)`

`matrix  oppretransform(int opid, float time)`

返回与操作符(OP)相关联的变换矩阵。如果指定的操作符没有关联的变换矩阵(例如COP节点)，则返回单位矩阵。可以指定评估变换的时间(以秒为单位，而非帧数)。

注意
可以使用op:语法配合标准变换函数来模拟此行为。
