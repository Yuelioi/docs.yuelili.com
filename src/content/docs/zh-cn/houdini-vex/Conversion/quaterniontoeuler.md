---
title: quaterniontoeuler
order: 8
---
| 版本 | 17.0 |
| --- | --- |

`vector  quaterniontoeuler(vector4 orient, int order)`

将表示四元数的 vector4 转换为表示欧拉角的 vector。

角度单位为弧度。可使用 `degrees()` 函数将弧度转换为角度。

更多信息请参阅[数据类型](/zh-cn/houdini-vex/lang.html#data-types)和[点运算符](/zh-cn/houdini-vex/lang.html#dot-operator)。

`order`

旋转顺序常量（如下所列），可从 `$HFS/houdini/vex/include/math.h` 导入。

| 常量名称 | 旋转顺序 |
| --- | --- |
| XFORM_XYZ | 旋转顺序 X, Y, Z |
| XFORM_XZY | 旋转顺序 X, Z, Y |
| XFORM_YXZ | 旋转顺序 Y, X, Z |
| XFORM_YZX | 旋转顺序 Y, Z, X |
| XFORM_ZXY | 旋转顺序 Z, X, Y |
| XFORM_ZYX | 旋转顺序 Z, Y, X |
