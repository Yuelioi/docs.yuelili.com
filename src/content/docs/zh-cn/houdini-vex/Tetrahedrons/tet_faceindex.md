---
title: tet_faceindex
order: 2
---
`int  tet_faceindex(int faceno, int vtxno)`

如果指定了无效数字，则返回 `-1`。

返回 `0` 到 `3` 以引用通用四面体的四个顶点。

`faceno`

四面体上的面。面 0 是不包含顶点 0 的三角形。

`vtxno`

要返回的三角形上的顶点编号，范围从 `0` 到 `2`。从最小的编号开始，并遵循 Houdini 的环绕顺序，即面 0 由顶点 1、2 和 3 组成。
