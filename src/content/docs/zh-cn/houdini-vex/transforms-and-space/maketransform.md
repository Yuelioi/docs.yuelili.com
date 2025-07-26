---
title: maketransform
order: 7
---
`matrix3  maketransform(vector z轴, vector y轴)`

`matrix3  maketransform(int 旋转顺序, vector 角度)`

`matrix  maketransform(vector z轴, vector y轴, vector 平移)`

`matrix  maketransform(int 变换顺序, int 旋转顺序, vector 平移, vector 旋转)`

`matrix  maketransform(int 变换顺序, int 旋转顺序, vector 平移, vector 旋转, vector 缩放)`

`matrix  maketransform(int 变换顺序, int 旋转顺序, vector 平移, vector 旋转, vector 缩放, vector 枢轴)`

`matrix  maketransform(int 变换顺序, int 旋转顺序, vector 平移, vector 旋转, vector 缩放, vector 枢轴, vector 枢轴旋转)`

`matrix  maketransform(int 变换顺序, int 旋转顺序, vector 平移, vector 旋转, vector 缩放, vector 枢轴, vector 枢轴旋转, vector 切变)`

构建3×3或4×4变换矩阵。

`maketransform(int 变换顺序, ...)` 根据指定的变换顺序(trs)、旋转顺序(xyz)、表示平移(t)、旋转(r)、缩放(s)的向量（可选包括枢轴(p)、枢轴旋转(pr)和切变(shears)），构建通用的4×4变换矩阵。

`maketransform(int 旋转顺序, vector 角度)` 使用与`maketransform(int 变换顺序, ...)`相同的规则构建3×3旋转矩阵，但仅使用旋转参数。

`maketransform(vector z轴, y轴, ...)` 构建3×3或4×4变换矩阵。矩阵将被构造为z轴将变换到指定的z轴方向，并使用给定的上向量(y轴)。因此，maketransform({0,0,1}, {0,1,0})将生成单位矩阵。返回4×4变换矩阵的版本会将平移应用到4×4矩阵中。此函数与[lookat](/zh-cn/houdini-vex/transforms-and-space/lookat "计算旋转矩阵或角度，使负z轴沿向量(to-from)在变换下定向")函数非常相似。传入的向量*不会*被归一化，意味着在构建变换时应保留缩放比例。

注意
与大多数VEX函数不同，此函数期望旋转角度以*度*为单位，而不是弧度。

`变换顺序`

以下变换顺序常量之一，可从`$HFS/houdini/vex/include/math.h`导入。

| 常量名称 | 变换顺序 |
| --- | --- |
| XFORM_SRT | 缩放、旋转、平移 |
| XFORM_STR | 缩放、平移、旋转 |
| XFORM_RST | 旋转、缩放、平移 |
| XFORM_RTS | 旋转、平移、缩放 |
| XFORM_TSR | 平移、缩放、旋转 |
| XFORM_TRS | 平移、旋转、缩放 |

`旋转顺序`

以下旋转顺序常量之一，可从`$HFS/houdini/vex/include/math.h`导入。

| 常量名称 | 旋转顺序 |
| --- | --- |
| XFORM_XYZ | 旋转顺序 X, Y, Z |
| XFORM_XZY | 旋转顺序 X, Z, Y |
| XFORM_YXZ | 旋转顺序 Y, X, Z |
| XFORM_YZX | 旋转顺序 Y, Z, X |
| XFORM_ZXY | 旋转顺序 Z, X, Y |
| XFORM_ZYX | 旋转顺序 Z, Y, X |
