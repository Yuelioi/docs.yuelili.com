---
title: agenttransformtolocal
order: 46
---
`int  agenttransformtolocal(<geometry>geometry, int prim, matrix &transforms[])`

如果`transforms`数组长度与代理骨骼中的变换数量不匹配、`prim`超出范围或`prim`不是代理图元，则返回`-1`。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`prim`

图元编号。

`transforms`

需要从世界空间转换到局部空间的变换矩阵数组。
