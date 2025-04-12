---
title: hedge_isprimary
order: 5
---
`int  hedge_isprimary(string geometry, int hedge)`

`int  hedge_isprimary(int opinput, int hendge)`

`geometry`

要引用的几何体文件名。在Houdini内部，可以使用`op:full_path_to_sop`来引用一个SOP节点。

`hedge`

表示半边(半边缘)的整数值。

返回值

如果`hedge`代表引用几何体中的主半边(primary half-edge)，则返回`1`，否则返回`0`。

## 示例

```vex
int numedges;

// 计算边的数量

if (hedge_isprimary("defgeo.bgeo", 3))
numedges++;

```
