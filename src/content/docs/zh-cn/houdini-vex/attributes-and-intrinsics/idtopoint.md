---
title: idtopoint
order: 29
---
`int  idtopoint(<geometry>geometry, int id)`

返回具有给定`id`属性值的点的编号。如果没有点具有该ID，则返回`-1`。

如果几何体没有`id`属性，则使用点编号作为id。在这种情况下，函数将返回给定的`id`值，除非该值大于源几何体中的点数，此时函数将返回`-1`。

要通过`name`属性值查找点，请使用[nametopoint](/zh-cn/houdini-vex/attributes-and-intrinsics/nametopoint "通过name属性查找点")。要通过任意字符串或整数属性值查找点，请使用[findattribval](/zh-cn/houdini-vex/attributes-and-intrinsics/findattribval "查找具有特定属性值的图元/点/顶点")。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个整数，表示要从中读取几何体的输入编号（从0开始）。

或者，该参数可以是一个字符串，指定要从中读取的几何体文件（例如`.bgeo`）。在Houdini内部运行时，可以是`op:/path/to/sop`引用。
