---
title: quaternion
order: 65
---
[单位四元数用于表示旋转](http://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation)。该VEX函数可创建表示旋转的单位四元数。

`vector4  quaternion(matrix3 rotations)`

从3×3旋转矩阵创建表示单位四元数的vector4。

`vector4  quaternion(float angle, vector axis)`

根据角度和归一化轴创建表示单位四元数的vector4。角度以弧度指定。

`vector4  quaternion(vector angleaxis)`

从组合角度/轴创建表示单位四元数的vector4。这是归一化旋转轴乘以以弧度表示的旋转角度。

曾经存在第四种形式可接受旋转向量。现已重命名为`eulertoquaternion`，并改为接受弧度制参数。

更多信息请参阅[数据类型](/zh-cn/houdini-vex/lang.html#data-types)和[点运算符](/zh-cn/houdini-vex/lang.html#dot-operator)。
