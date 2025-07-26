---
title: pointattribtype
order: 37
---
`int  pointattribtype(<geometry>geometry, string attribute_name)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，该参数可以是一个表示输入编号的整数（从0开始）以读取几何体。

或者，该参数也可以是一个指定几何文件（例如`.bgeo`）的字符串用于读取。在Houdini内部运行时，可以是`op:/path/to/sop`这样的引用。

更多信息请参阅[attribtype](/zh-cn/houdini-vex/attributes-and-intrinsics/attribtype "返回几何属性的类型")。
