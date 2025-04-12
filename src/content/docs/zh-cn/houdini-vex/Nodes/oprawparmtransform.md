---
title: oprawparmtransform
order: 34
---
| 始于版本 | 18.0 |
| --- | --- |

`matrix  oprawparmtransform(string path)`

`matrix  oprawparmtransform(string path, float time)`

`matrix  oprawparmtransform(int opid)`

`matrix  oprawparmtransform(int opid, float time)`

`matrix  oprawparmtransform(int opid, int trsorder, int xyzorder, int mask)`

返回与操作符(OP)关联的原始参数变换矩阵。如果指定的操作符没有关联变换(例如COP节点)，则返回单位矩阵。可以指定评估变换的时间(以秒为单位，而非帧数)。

原始参数变换是根据变换参数构建的，不包含CHOP IK解算器的影响。

注意
可以使用op:语法配合标准变换函数来模拟此行为。
