---
title: cregioncapturetransform
order: 21
---
| 始于版本 | 18.0 |
| --- | --- |

`matrix  cregioncapturetransform(string path)`

`matrix  cregioncapturetransform(string path, float time)`

`matrix  cregioncapturetransform(int op_id)`

`matrix  cregioncapturetransform(int op_id, float time)`

返回与捕获区域SOP关联的捕获变换矩阵。
该变换矩阵直接从SOP的参数构建，无需实际计算该SOP。
可以指定评估变换的时间点（以秒为单位，而非帧数）。

注意
使用标准的变换函数配合op:语法可以模拟此行为。
