---
title: nearpoints
order: 12
---
`int [] nearpoints(<geometry>geometry, vector pt, float maxdist)`

`int [] nearpoints(<geometry>geometry, vector pt, float maxdist, int maxpts)`

`int [] nearpoints(<geometry>geometry, string ptgroup, vector pt, float maxdist)`

`int [] nearpoints(<geometry>geometry, string ptgroup, vector pt, float maxdist, int maxpts)`

`opinput`

当前节点的输入编号，从`0`开始表示第一个输入。

`geometry`

要引用的几何体文件名。在Houdini内部，
可以是"op:full_path_to_sop"来引用一个SOP。

`ptgroup`

用于限制搜索范围的点组模式。可以是SOP风格的组模式，
如`0-10`或`@Cd.x>0.5`。空字符串将匹配所有点。

`pt`

在空间中寻找几何体上最近点的位置。

`maxdist`

搜索的最大距离。

`maxpts`

要查找的最大点数。

返回值

一个点编号的数组
此函数仅搜索点，不搜索几何体的表面位置。
使用[xyzdist](/zh-cn/houdini-vex/measure/xyzdist "查找点到表面几何体最近位置的距离。")来查找曲面或曲线上最近的点。
