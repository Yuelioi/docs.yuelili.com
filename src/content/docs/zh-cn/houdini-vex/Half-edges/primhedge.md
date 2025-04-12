---
title: primhedge
order: 21
---

`int  primhedge(<geometry>geometry, int prim)`

`<geometry>`

当在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于指定读取几何体的输入源。

或者，该参数也可以是一个指定几何体文件（例如`.bgeo`）的字符串路径。在Houdini内部运行时，可以是`op:/path/to/sop`这样的操作符路径引用。

`prim`

几何体中的图元编号。`0`表示第一个图元。

返回值

返回包含在指定图元`prim`中的任意半边编号。
如果图元编号无效，则返回`-1`。

（注：保持所有代码格式和变量名不变，技术术语如"half-edge"保留专业译法"半边"）
