---
title: setpointtransform
order: 69
---
| 版本 | 18.5 |
| --- | --- |

`int  setpointtransform(int geohandle, int pt, matrix transform)`

`int  setpointtransform(int geohandle, int pt, matrix transform, int constrain)`

根据给定的4×4矩阵，在指定点上设置`v@P`和`3@transform`属性。

`geohandle`

要写入的几何体句柄。目前唯一有效的值是`0`或[geoself](/zh-cn/houdini-vex/geometry/geoself "返回当前几何体的句柄")，表示节点中的当前几何体。（此参数未来可能用于支持写入其他几何体。）

`pt`

要修改的点的索引。

`transform`

4×4变换矩阵。

`constrain`

当为True时，修改点世界变换时会同时更新子点变换。当为False时，子点保持原位，类似于在变换手柄上使用子级补偿。默认为True。
