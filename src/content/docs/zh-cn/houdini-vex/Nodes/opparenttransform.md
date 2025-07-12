---
title: opparenttransform
order: 28
---

`matrix opparenttransform(string path)`

`matrix opparenttransform(string path, float time)`

`matrix opparenttransform(int opid)`

`matrix opparenttransform(int opid, float time)`

返回与操作符(OP)关联的父级变换矩阵。如果指定的操作符没有关联的变换矩阵(例如COP节点)，则返回单位矩阵。可以指定评估变换的时间(以秒为单位，而非帧数)。

注意：
可以使用op:语法配合标准变换函数来模拟此行为。
