---
title: cregiondeformtransform
order: 22
---
| 始于版本 | 18.0 |
| --- | --- |

`matrix  cregiondeformtransform(string path)`

`matrix  cregiondeformtransform(string path, float time)`

`matrix  cregiondeformtransform(int op_id)`

`matrix  cregiondeformtransform(int op_id, float time)`

返回与捕获区域SOP相关联的形变变换矩阵。
该变换矩阵是根据SOP的参数构建的，无需实际计算（cooking）该SOP。
可以指定评估变换的时间（以秒为单位，而非帧数）。

注意
使用标准的变换函数配合op:语法可以模拟此行为。
