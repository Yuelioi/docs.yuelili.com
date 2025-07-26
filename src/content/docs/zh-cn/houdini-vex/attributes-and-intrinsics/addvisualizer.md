---
title: addvisualizer
order: 6
---
此函数会在不存在时创建`visualizer`细节字符串数组属性，然后将给定的可视化器字符串追加到该属性中。如果该可视化器字符串已存在于数组中，则函数不会重复添加。

`int  addvisualizer(int geohandle, string op_url)`

`geohandle`

要写入的几何体句柄。目前唯一有效的值是`0`或[geoself](/zh-cn/houdini-vex/geometry/geoself "返回当前几何体的句柄")，表示节点中的当前几何体。（此参数未来可能用于支持写入其他几何体。）

`op_url`

形如`"op:/路径/到/节点"`的字符串。几何体将使用该节点的可视化器。

- Houdini通过`op:`引用查找可视化器，因此被引用节点上可视化器的更改将反映在几何体的可视化效果中。
