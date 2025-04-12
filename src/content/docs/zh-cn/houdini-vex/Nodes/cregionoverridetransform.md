---
title: cregionoverridetransform
order: 23
---
| 始于版本 | 18.0 |
| --- | --- |

`matrix  cregionoverridetransform(string path)`

`matrix  cregionoverridetransform(string path, float time)`

`matrix  cregionoverridetransform(int op_id)`

`matrix  cregionoverridetransform(int op_id, float time)`

根据全局捕获覆盖标志，返回与捕获区域SOP关联的捕获或变形变换矩阵。
该变换矩阵直接从SOP参数构建，无需实际执行SOP运算。
可以指定评估变换矩阵的时间（以秒为单位，而非帧数）。

注意
使用标准变换函数时，可通过op:语法模拟此行为。
