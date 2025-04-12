---
title: point
order: 34
---
`<type> point(<geometry>geometry, string attribute_name, int pointnumber)`

`<type>[] point(<geometry>geometry, string attribute_name, int pointnumber)`

`<geometry>`

在节点上下文（如 wrangle SOP）中运行时，该参数可以是一个整数，表示要从中读取几何体的输入编号（从0开始）。

或者，该参数可以是一个指定要读取的几何体文件（例如 `.bgeo`）的字符串。在 Houdini 内部运行时，可以是一个 `op:/path/to/sop` 引用。

`attribute_name`

要读取的属性（或固有属性）的名称。

`pointnumber`

要读取属性的点编号。

返回值

给定点编号上给定属性的值，如果属性或点不存在则返回 `0`。
