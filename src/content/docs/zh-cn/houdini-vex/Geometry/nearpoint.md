---
title: nearpoint
order: 11
---

`int  nearpoint(<geometry>geometry, vector pt)`

`int  nearpoint(<geometry>geometry, vector pt, float maxdist)`

`int  nearpoint(<geometry>geometry, string ptgroup, vector pt)`

`int  nearpoint(<geometry>geometry, string ptgroup, vector pt, float maxdist)`

返回几何体上最近点的编号。
此函数仅搜索点，而不会搜索几何体表面位置。
如需查找曲面或曲线上的最近点，请使用 [xyzdist](/zh-cn/houdini-vex/measure/xyzdist "计算点到几何体表面最近位置的距离")。

如果在搜索距离内未找到点，则返回-1。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号的整数（从0开始）以读取几何体。

或者，该参数可以是指定要读取的几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`ptgroup`

用于限制搜索范围的点组模式。可以是SOP风格的组模式，如`0-10`或`@Cd.x>0.5`。空字符串将匹配所有点。

`pt`

要在空间中查找几何体上最近点的位置。

`maxdist`

最大搜索距离。如果允许提前终止，可以加快操作速度。
