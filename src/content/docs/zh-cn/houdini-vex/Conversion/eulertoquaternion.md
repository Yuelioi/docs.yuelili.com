---
title: eulertoquaternion
order: 5
---
[单位四元数用于表示旋转](http://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation)。这个VEX函数会创建一个表示旋转的单位四元数。

`vector4  eulertoquaternion(vector rotations, int order)`

从一个表示X、Y、Z欧拉旋转的向量创建一个表示单位四元数的vector4。

角度单位为弧度。使用`radians()`函数可将度数转换为弧度。

`order`

以下旋转顺序常量之一，可从`$HFS/houdini/vex/include/math.h`导入。

| 常量名称 | 旋转顺序 |
| --- | --- |
| XFORM_XYZ | 旋转顺序 X, Y, Z |
| XFORM_XZY | 旋转顺序 X, Z, Y |
| XFORM_YXZ | 旋转顺序 Y, X, Z |
| XFORM_YZX | 旋转顺序 Y, Z, X |
| XFORM_ZXY | 旋转顺序 Z, X, Y |
| XFORM_ZYX | 旋转顺序 Z, Y, X |
