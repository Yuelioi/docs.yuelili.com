---
title: attrib
order: 7
---
`<type> attrib(<geometry>geometry, string attribclass, string name, int elemnum)`

`<type>[] attrib(<geometry>geometry, string attribclass, string name, int elemnum)`

这个通用形式允许您在运行时指定属性的"类别"。这对于编写能处理不同类别的通用代码非常有用。
如果您提前知道要读取的属性类别，使用[detail](/zh-cn/houdini-vex/attributes-and-intrinsics/detail "从几何体中读取细节属性值")、[prim](/zh-cn/houdini-vex/attributes-and-intrinsics/prim "从几何体中读取图元属性值")、[point](/zh-cn/houdini-vex/attributes-and-intrinsics/point "从几何体中读取点属性值")或[vertex](/zh-cn/houdini-vex/attributes-and-intrinsics/vertex "从几何体中读取顶点属性值")可能会更快。

`<geometry>`

在节点上下文(如wrangle SOP)中运行时，此参数可以是一个表示输入编号(从0开始)的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何体文件(例如.bgeo)的字符串。在Houdini内部运行时，可以是 `op:/path/to/sop`引用。

`attribclass`

可以是 `"detail"`(或 `"global"`)、`"point"`、`"prim"`或 `"vertex"`之一。

您也可以使用 `"primgroup"`、`"pointgroup"`或 `"vertexgroup"`来[从组中读取](../groups.html "您可以在VEX中将图元/点/顶点组的内容当作属性来读取")。

`name`

要读取的属性、组或固有属性的名称。

`elemnum`

要读取的元素编号(如点编号、图元编号、顶点编号)。对于细节属性会被忽略。您可以使用[vertexindex](/zh-cn/houdini-vex/geometry/vertexindex "将图元/顶点对转换为线性顶点编号")将图元/点对转换为顶点编号。

返回值

如果属性不存在则返回零/空值。如果您想检查属性是否存在，请使用[getattrib](/zh-cn/houdini-vex/attributes-and-intrinsics/getattrib "从几何体中读取属性值，并检查有效性")。
