---
title: prim
order: 44
---
`<type> prim(<geometry>geometry, string attribute_name, int primnumber)`

`<type>[] prim(<geometry>geometry, string attribute_name, int primnumber)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数也可以是一个指定几何体文件（例如`.bgeo`）的字符串路径。在Houdini内部运行时，可以是`op:/path/to/sop`形式的操作符路径引用。

`attribute_name`

要读取的属性（或固有属性）名称。

`primnumber`

要读取属性的图元编号。

返回值

返回指定图元编号上对应属性的值，如果属性或图元不存在则返回`0`。
