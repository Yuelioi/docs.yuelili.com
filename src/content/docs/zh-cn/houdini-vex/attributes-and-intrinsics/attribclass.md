---
title: attribclass
order: 8
---
`string  attribclass(<geometry>geometry, string attribute_name)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号的整数（从0开始）以读取几何体。

或者，该参数可以是指定要读取的几何文件（例如 `.bgeo`）的字符串。在Houdini内部运行时，可以是 `op:/path/to/sop`引用。

`attribute_name`

要读取的属性名称。

如果同名属性存在于多个"层级"，则返回属性存在的*最低层级*。例如，如果存在基元属性 `foo`和顶点属性 `foo`，`attribclass(0, "foo")`将返回 `"vertex"`。

返回值

描述给定属性类别（`"detail"`、`"prim"`、`"point"`或 `"vertex"`）的字符串。如果属性不存在，则返回空字符串（`""`）。
