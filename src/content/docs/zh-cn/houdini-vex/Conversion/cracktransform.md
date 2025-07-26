---
title: cracktransform
order: 3
---

`vector  cracktransform(int trs, int xyz, int c, vector pivot, vector pivot_rotate, matrix xform)`

`vector  cracktransform(int trs, int xyz, int c, vector pivot, matrix xform)`

根据参数c的值，返回变换矩阵(xform)中的平移分量(`c=0`)、旋转分量(`c=1`或`c=4`)、缩放分量(`c=2`)或剪切分量(`c=3`)。该函数使用给定的变换顺序(trs)和旋转顺序(xyz)、枢轴点(pivot)以及可选的枢轴旋转(pr)来计算返回值。

注意
当`c=1`时，返回的旋转角度以度为单位，而许多其他VEX函数使用弧度制。
您可以使用[radians](/zh-cn/houdini-vex/conversion/radians "将参数从角度转换为弧度") VEX函数将角度值向量转换为弧度值向量。
例如：`vector angles = radians(cracktransform(XFORM_TRS, XFORM_XYZ, 1, {0,0,0}, M));`

注意
当`c=4`时，返回的旋转角度以弧度为单位。

`trs`

以下变换顺序常量之一，可从`$HFS/houdini/vex/include/math.h`导入。

| 常量名称 | 变换顺序 |
| --- | --- |
| XFORM_SRT | 缩放、旋转、平移 |
| XFORM_STR | 缩放、平移、旋转 |
| XFORM_RST | 旋转、缩放、平移 |
| XFORM_RTS | 旋转、平移、缩放 |
| XFORM_TSR | 平移、缩放、旋转 |
| XFORM_TRS | 平移、旋转、缩放 |

`xyz`

以下旋转顺序常量之一，可从`$HFS/houdini/vex/include/math.h`导入。

| 常量名称 | 旋转顺序 |
| --- | --- |
| XFORM_XYZ | X, Y, Z旋转顺序 |
| XFORM_XZY | X, Z, Y旋转顺序 |
| XFORM_YXZ | Y, X, Z旋转顺序 |
| XFORM_YZX | Y, Z, X旋转顺序 |
| XFORM_ZXY | Z, X, Y旋转顺序 |
| XFORM_ZYX | Z, Y, X旋转顺序 |

`void  cracktransform(int trs, int xyz, vector pivot, vector pivot_rotate, matrix xform, vector &t, vector &r, vector &s, vector &shears)`

分别将xform的平移、旋转、缩放和剪切分量返回到t、r、s和shears中。
如果需要获取多个分量，使用此重载版本比多次调用其他函数签名更高效。

`void  cracktransform(int trs, int xyz, vector pivot, matrix xform, vector &t, vector &r, vector &s)`

分别将xform的平移、旋转和缩放分量返回到t、r和s中。
此重载版本不支持枢轴旋转(pivot_rotate)或剪切分量(shears)。
如果需要获取多个分量，使用此重载版本比多次调用其他函数签名更高效。
