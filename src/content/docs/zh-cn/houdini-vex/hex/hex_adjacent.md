---
title: hex_adjacent
order: 1
---

`int  hex_adjacent(<geometry>geometry, int primindex, int faceno)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`primindex`

基元编号。

`faceno`

六面体上的面编号。范围从`0`到`5`。

返回值

与给定面相邻的六面体的基元编号。
如果基元不是六面体或没有相邻六面体，则返回`-1`。

使用[hex_faceindex](/zh-cn/houdini-vex/hex/hex_faceindex "返回六面体每个面的顶点索引。")可获取六面体每个面的顶点索引。
