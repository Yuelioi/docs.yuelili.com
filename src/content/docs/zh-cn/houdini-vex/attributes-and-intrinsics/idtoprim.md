---
title: idtoprim
order: 30
---
`int  idtoprim(<geometry>geometry, int id)`

返回具有指定`id`属性值的图元编号。如果没有图元具有该ID，则返回`-1`。

如果几何体没有`id`属性，则使用图元编号作为ID。在这种情况下，函数将返回给定的`id`值，除非该值大于源几何体中的图元数量，此时函数将返回`-1`。

要通过`name`属性值查找图元，请使用[nametoprim](/zh-cn/houdini-vex/attributes-and-intrinsics/nametoprim "根据name属性查找图元")。要通过任意字符串或整数属性值查找图元，请使用[findattribval](/zh-cn/houdini-vex/attributes-and-intrinsics/findattribval "查找具有特定属性值的图元/点/顶点")。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是一个指定几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。
