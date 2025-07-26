---
title: pointattribsize
order: 36
---
`int  pointattribsize(<geometry>geometry, string attribute_name)`

`<geometry>`

当在节点上下文（如wrangle SOP）中运行时，该参数可以是一个整数，表示要读取几何体的输入编号（从0开始）。

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如`.bgeo`）。在Houdini内部运行时，可以是一个`op:/path/to/sop`引用。

更多信息请参阅[attribsize](/zh-cn/houdini-vex/attributes-and-intrinsics/attribsize "返回几何属性的尺寸")。

如果找不到该属性，则返回`0`。
