---
title: oppreparmtransform
order: 31
---
| 版本 | 18.0 |
| --- | --- |

`matrix  oppreparmtransform(string path)`

`matrix  oppreparmtransform(string path, float time)`

`matrix  oppreparmtransform(int opid)`

`matrix  oppreparmtransform(int opid, float time)`

返回与操作符(OP)关联的预变换和参数变换。如果指定的操作符没有关联的变换(例如COP节点)，则返回单位矩阵。可以指定评估变换的时间(以秒为单位，而非帧数)。

注意
可以使用op:语法配合标准变换函数来模拟此行为。
