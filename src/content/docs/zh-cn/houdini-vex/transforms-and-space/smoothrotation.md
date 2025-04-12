---
title: smoothrotation
order: 25
---

`vector smoothrotation(int order, vector r, vector r_reference)`

返回与r描述相同朝向、且最接近r_reference值的欧拉旋转角。
通常，r_reference会使用上一帧或上一采样点的旋转值。

角度单位为弧度。可使用`radians()`函数将角度转换为弧度。

`order`

旋转顺序常量（如下表所列），可从`$HFS/houdini/vex/include/math.h`导入。

| 常量名称 | 旋转顺序 |
| --- | --- |
| XFORM_XYZ | X, Y, Z顺序旋转 |
| XFORM_XZY | X, Z, Y顺序旋转 |
| XFORM_YXZ | Y, X, Z顺序旋转 |
| XFORM_YZX | Y, Z, X顺序旋转 |
| XFORM_ZXY | Z, X, Y顺序旋转 |
| XFORM_ZYX | Z, Y, X顺序旋转 |
