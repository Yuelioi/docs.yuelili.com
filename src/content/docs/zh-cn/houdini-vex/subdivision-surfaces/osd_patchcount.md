---
title: osd_patchcount
order: 7
---
`int  osd_patchcount(<geometry>geometry)`

返回由几何体文件名指定的细分外壳中的基础层级补丁数量。这与细分外壳中的面数不同。例如，在四面体中，每个三角面会生成三个补丁。

`int  osd_patchcount(<geometry>geometry, int face_id)`

对于粗网格中的给定面，返回该面生成的补丁数量。四边形仅生成1个补丁，而其他面会根据其顶点数量生成多个补丁。例如，三角形会生成3个补丁，五边形会生成5个补丁。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。
