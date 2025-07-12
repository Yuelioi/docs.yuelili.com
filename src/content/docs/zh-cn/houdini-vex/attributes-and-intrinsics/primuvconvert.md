---
title: primuvconvert
order: 55
---

`vector2  primuvconvert(<geometry>geometry, vector2 uv, int prim_num, int mode)`

`vector2  primuvconvert(<geometry>geometry, vector2 uv, int prim_num, int mode, float tolerance)`

`float  primuvconvert(<geometry>geometry, float uv, int prim_num, int mode)`

`float  primuvconvert(<geometry>geometry, float uv, int prim_num, int mode, float tolerance)`

`geometry`

指定要读取的几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`uv`

需要转换的曲线坐标。可以是浮点数或vector2类型。函数返回转换后的坐标。

`prim_num`

要转换坐标的曲线图元编号。

`mode`

以下列出的`PRIMUV_space_TO_space`常量之一。可以从`$HFS/houdini/vex/include/math.h`导入这些常量。

REAL域基于曲线段数（0到`nSegments`）。一个段可以根据曲线度数包含多个控制点。`UNIT`域是将REAL域归一化到0到1的范围。`UNITLEN`域根据曲线长度映射但归一化（0..1）。`LEN`域根据曲线长度映射（0..`CurveLength`）。

| 常量名称 | 整数值 |
| --- | --- |
| PRIMUV_REAL_TO_UNIT | 0 |
| PRIMUV_REAL_TO_UNITLEN | 1 |
| PRIMUV_REAL_TO_LEN | 2 |
| PRIMUV_UNIT_TO_REAL | 3 |
| PRIMUV_UNIT_TO_UNITLEN | 4 |
| PRIMUV_UNIT_TO_LEN | 5 |
| PRIMUV_UNITLEN_TO_REAL | 6 |
| PRIMUV_UNITLEN_TO_UNIT | 7 |
| PRIMUV_UNITLEN_TO_LEN | 8 |
| PRIMUV_LEN_TO_REAL | 9 |
| PRIMUV_LEN_TO_UNIT | 10 |
| PRIMUV_LEN_TO_UNITLEN | 11 |
