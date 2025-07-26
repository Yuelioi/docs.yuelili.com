---
title: setpointtransforms
order: 70
---
| 版本 | 18.5 |
| --- | --- |

`int  setpointtransforms(int geohandle, int pnts[], matrix transforms[])`

`int  setpointtransforms(int geohandle, int pnts[], matrix transforms[], int constrain)`

设置与点索引关联的变换矩阵数组。此函数会设置 `v@P` 和 `3@transform` 属性。

`geohandle`

要写入的几何体句柄。目前唯一有效的值是 `0` 或 [geoself](/zh-cn/houdini-vex/geometry/geoself "返回当前几何体的句柄")，表示节点中的当前几何体。（此参数未来可能用于支持写入其他几何体。）

`pnts`

要设置的点索引数组。

`transforms`

要设置的变换矩阵数组。

`constrain`

当为 True 时，在修改点世界变换时会更新子点变换。当为 False 时，子点会保持原位，就像在变换手柄上使用子级补偿一样。默认为 True。
