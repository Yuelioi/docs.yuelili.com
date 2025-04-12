---
title: 顶点属性类型信息
order: 81
---
`string  vertexattribtypeinfo(<geometry>geometry, string attribute_name)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

另外，该参数也可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`这样的引用。

更多信息请参阅[attribtypeinfo](attribtypeinfo.html "返回几何属性的转换元数据。")。