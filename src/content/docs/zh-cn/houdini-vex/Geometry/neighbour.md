---
title: neighbour
order: 14
---

此函数用于遍历与指定点相连的点（通过单条边连接）。若要一次性获取所有相连点的列表，请使用 [neighbours](/zh-cn/houdini-vex/geometry/neighbours "返回某点所有相邻点的编号数组")。 

`int  neighbour(<geometry>geometry, int point_num, int neighbour_num)` 

`<geometry>` 

在节点上下文（如 wrangle SOP）中运行时，此参数可以是表示输入编号（从 0 开始）的整数，用于读取几何体。 

此外，该参数也可以是指定几何体文件（例如 `.bgeo`）的字符串路径。在 Houdini 内部运行时，可以是 `op:/path/to/sop` 形式的操作符路径引用。 

`point_num` 

需要查找相邻点的目标点编号。 

`neighbour_num` 

指定要查找的相邻点序号。相邻点的顺序是任意的。使用 [neighbourcount](/zh-cn/houdini-vex/geometry/neighbourcount "返回与指定点相连的点的总数") 可获取相连点的总数。 

返回值 

目标点相邻点的索引编号。顺序虽未定义，但对于稳定几何体会保持一致性。如果 `neighbournum` 超出该点的有效范围，或点编号超出输入范围，或输入不存在，则返回 `-1`。
