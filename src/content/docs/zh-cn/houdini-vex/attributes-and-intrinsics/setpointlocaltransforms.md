---
title: setpointlocaltransforms
order: 68
---
| 始于版本 | 18.5 |
| --- | --- |

`int  setpointlocaltransforms(int geohandle, int pnts[], matrix transforms[])`

设置与点索引关联的局部变换数组。此函数会设置 `4@localtransform` 属性。

`geohandle`

要写入的几何体句柄。目前唯一有效的值是 `0` 或 [geoself](/zh-cn/houdini-vex/geometry/geoself "返回当前几何体的句柄。")，表示节点中的当前几何体。（此参数未来可能用于支持写入其他几何体。）

`pnts`

要设置的点索引数组。

`transforms`

要设置的变换矩阵数组。
