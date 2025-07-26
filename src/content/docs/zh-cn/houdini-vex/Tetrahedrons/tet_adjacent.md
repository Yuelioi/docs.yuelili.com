---
title: tet_adjacent
order: 1
---
`int  tet_adjacent(<geometry>geometry, int primindex, int faceno)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`primindex`

基元编号。

`faceno`

四面体上的面编号。面0是不包含顶点0的三角形面。

返回值

与给定顶点相对的四面体的基元编号。
如果基元不是四面体或没有相邻四面体，则返回`-1`。

使用[tet_faceindex](/zh-cn/houdini-vex/tetrahedrons/tet_faceindex "返回四面体每个面的顶点索引。")可获取四面体每个面的顶点索引。
