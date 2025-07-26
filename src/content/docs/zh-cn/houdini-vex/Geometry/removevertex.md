---
title: removevertex
order: 34
---

| 始于版本 | 18.0 |
| --- | --- |

`int  removevertex(int geohandle, int linear_vertex_index)`

`geohandle`

要写入的几何体句柄。目前唯一有效的值是`0`或[geoself](/zh-cn/houdini-vex/geometry/geoself "返回当前几何体的句柄")，表示节点中的当前几何体。（此参数未来可能用于支持写入其他几何体。）

`linear_vertex_index`

如果值为`-1`，则该函数无效。这是一个线性顶点索引，因此可能需要使用`vertexindex`来从基元和顶点编号进行转换。

该函数会从几何体中移除指定顶点。注意：此操作是作为后处理执行的，并非调用时立即生效。

目前仅多边形支持顶点移除操作。

此操作可能导致生成退化的（0顶点）多边形，因为基元本身不会被删除。

从具有大量顶点的多边形中移除多个顶点时，操作可能会较慢。
