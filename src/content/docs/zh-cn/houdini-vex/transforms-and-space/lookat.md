---
title: lookat
order: 6
---
`matrix3  lookat(vector from, vector to)`

`matrix3  lookat(vector from, vector to, float roll)`

`matrix3  lookat(vector from, vector to, vector up)`

`vector  lookat(vector from, vector to, float roll, int xyz)`

`vector  lookat(vector from, vector to, vector up, int xyz)`

计算一个旋转矩阵或角度，使变换后的负z轴沿着向量(to-from)方向对齐。如果指定了上向量(up)，这将决定滚转角度。

`xyz`

以下旋转顺序常量之一，可从`$HFS/houdini/vex/include/math.h`导入。

| 常量名称 | 旋转顺序 |
| --- | --- |
| XFORM_XYZ | 旋转顺序 X, Y, Z |
| XFORM_XZY | 旋转顺序 X, Z, Y |
| XFORM_YXZ | 旋转顺序 Y, X, Z |
| XFORM_YZX | 旋转顺序 Y, Z, X |
| XFORM_ZXY | 旋转顺序 Z, X, Y |
| XFORM_ZYX | 旋转顺序 Z, Y, X |
