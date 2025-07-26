---
title: removeprim
order: 33
---
`int  removeprim(int geohandle, int prim_number, int andpoints)`

`geohandle`

要写入的几何体的句柄。目前唯一有效的值是 `0` 或 [geoself](/zh-cn/houdini-vex/geometry/geoself "返回当前几何体的句柄")，表示节点中的当前几何体。（此参数未来可能用于支持写入其他几何体。）

`prim_number`

要删除的图元的索引。如果为 `-1`，则该函数不执行任何操作。

`andpoints`

如果为 `1`，该函数还将删除与该图元关联且未与其他任何图元关联的所有点。

注意
如果某些图元在 `andpoints` 设置为 `0` 的情况下被删除，而另一些图元在 `andpoints` 设置为 `1` 的情况下被删除，那么所有 `andpoints` 设置为 `0` 的图元将在所有 `andpoints` 设置为 `1` 的图元之前被删除。
