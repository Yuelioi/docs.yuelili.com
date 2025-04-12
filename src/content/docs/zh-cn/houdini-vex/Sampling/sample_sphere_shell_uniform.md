---
title: sample_sphere_shell_uniform
order: 29
---
| 始于版本 | 17.0 |
| --- | --- |

`vector sample_sphere_shell_uniform(vector u, float alpha)`

`u`

三个介于0到1之间的数值。

`alpha`

限定内半径。一个介于0到1之间的数值。

返回一个基于`u`的长度<1的向量。
给定在`[0,1)`区间内三个值的均匀随机`u`向量，以及一个`[0,1]`区间内的数值，返回的向量将在以alpha为内半径的单位球壳内相对于`u`保持均匀随机和连续性。
