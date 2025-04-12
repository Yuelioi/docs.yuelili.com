---
title: opparentbonetransform
order: 27
---

`matrix  opparentbonetransform(string path)`

`matrix  opparentbonetransform(string path, float time)`

`matrix  opparentbonetransform(int opid)`

`matrix  opparentbonetransform(int opid, float time)`

返回与操作符(OP)关联的父骨骼变换矩阵。如果指定的操作符没有关联的变换矩阵(例如COP节点)，则返回单位矩阵。可以指定评估变换的时间(以秒为单位，而非帧数)。返回父骨骼根部的变换矩阵，若无骨骼则返回父级变换矩阵。

注意
可以使用op:语法配合标准变换函数来模拟此行为。
