---
title: nametopoint
order: 31
---
`int  nametopoint(<geometry>geometry, string name)`

`<geometry>`

在节点上下文中运行时（例如wrangle SOP），此参数可以是一个表示输入编号的整数（从0开始）以读取几何体。

或者，该参数可以是一个指定几何体文件（例如 `.bgeo`）的字符串以从中读取。在Houdini内部运行时，可以是 `op:/path/to/sop`引用。

返回值

具有 `name`属性中给定值的点的编号。如果没有图元具有给定ID，或者几何体没有 `name`属性，则返回 `-1`。

要通过 `id`属性值查找图元，请使用[idtoprim](/zh-cn/houdini-vex/attributes-and-intrinsics/idtoprim "通过id属性查找图元")。要通过任意字符串或整数属性值查找点，请使用[findattribval](/zh-cn/houdini-vex/attributes-and-intrinsics/findattribval "查找具有特定属性值的图元/点/顶点")。
