---
title: nametoprim
order: 32
---
`int  nametoprim(<geometry>geometry, string name)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个整数，表示要从中读取几何图形的输入编号（从0开始）。

或者，该参数可以是一个字符串，指定要读取的几何文件（例如`.bgeo`）。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

返回值

返回`name`属性中具有给定值的点的编号。如果没有点具有给定ID，或者几何图形没有`name`属性，则返回`-1`。

要通过`id`属性值查找点，请使用[idtopoint](/zh-cn/houdini-vex/attributes-and-intrinsics/idtopoint "通过id属性查找点。")。要通过任意字符串或整数属性值查找点，请使用[findattribval](/zh-cn/houdini-vex/attributes-and-intrinsics/findattribval "查找具有特定属性值的图元/点/顶点。")。
