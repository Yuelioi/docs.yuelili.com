---
title: getattrib
order: 22
---
`<type> getattrib(<geometry>geometry, string attribclass, string attribute_name, int elemnum, int &success)`

`<type>[] getattrib(<geometry>geometry, string attribclass, string attribute_name, int elemnum, int &success)`

这个通用形式允许您在运行时指定属性"类"。这对于编写可以处理不同类的通用代码非常有用。
如果您提前知道要读取的属性类，使用[detailattrib](/zh-cn/houdini-vex/attributes-and-intrinsics/detailattrib "从几何体中读取细节属性值")、[primattrib](/zh-cn/houdini-vex/attributes-and-intrinsics/primattrib "从几何体中读取图元属性值，并输出成功标志")、[pointattrib](/zh-cn/houdini-vex/attributes-and-intrinsics/pointattrib "从几何体中读取点属性值并输出成功/失败标志")或[vertexattrib](/zh-cn/houdini-vex/attributes-and-intrinsics/vertexattrib "从几何体中读取顶点属性值")可能会更快。

`<geometry>`

在节点上下文(如wrangle SOP)中运行时，此参数可以是一个表示输入编号(从0开始)的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件(例如`.bgeo`)的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`attribclass`

可以是`"detail"`(或`"global"`)、`"point"`、`"prim"`或`"vertex"`之一。

您也可以使用`"primgroup"`、`"pointgroup"`或`"vertexgroup"`来[从组中读取](../groups.html "在VEX中，您可以像读取属性一样读取图元/点/顶点组的内容")。

`attribute_name`

要读取的属性(或固有属性)的名称。

`elemnum`

要从中读取属性值的点/图元/顶点编号。对于细节属性，请在此处使用`0`(对于细节属性，此参数被忽略)。

要获取给定图元编号和图元上顶点编号的线性顶点编号，请使用[primvertex](/zh-cn/houdini-vex/geometry/primvertex "将图元/顶点对转换为线性顶点")函数。

`success`

如果给定属性存在且可读，函数将此变量设置为`1`。否则，将此变量设置为`0`。

返回值

属性的值。
