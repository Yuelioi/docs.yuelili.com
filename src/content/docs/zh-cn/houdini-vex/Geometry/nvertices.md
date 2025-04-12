---
title: nvertices
order: 19
---
`int  nvertices(<geometry>geometry)`

`<geometry>`

当在节点上下文（如wrangle SOP）中运行时，该参数可以是一个整数，表示要读取几何体的输入编号（从0开始）。

或者，该参数也可以是一个字符串，指定要读取的几何体文件（例如`.bgeo`）。在Houdini内部运行时，可以是`op:/path/to/sop`这样的引用路径。
