---
title: primattribtype
order: 49
---
`int  primattribtype(<geometry>geometry, string attribute_name)`

`<geometry>`

当在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号的整数（从0开始）以读取几何体。

或者，该参数可以是用于指定要读取的几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

更多信息请参阅[attribtype](/zh-cn/houdini-vex/attributes-and-intrinsics/attribtype "返回几何属性的类型。")。
