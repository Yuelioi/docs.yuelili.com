---
title: hedge_dstpoint
order: 1
---
`int  hedge_dstpoint(<geometry>geometry, int hedge)`

如果半边(hedge)无效则返回`-1`。否则返回半边`hedge`目标顶点的点编号。

`geometry`

要引用的几何体文件名。在Houdini内部，可以使用`op:full_path_to_sop`来引用一个SOP节点。

`hedge`

输入的半边。

## 示例

```vex
int dstpt;

// 获取编号为3的半边的目标顶点编号
dstpt = hedge_dstpoint("defgeo.bgeo", 3);

```
