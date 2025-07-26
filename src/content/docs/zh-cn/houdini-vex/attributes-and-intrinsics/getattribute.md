---
title: getattribute
order: 23
---
`int  getattribute(string geometry, <type>&value, string attribclass, string attribute_name, int element_number, int vertex_number)`

`int  getattribute(string geometry, <type>&value[], string attribclass, string attribute_name, int element_number, int vertex_number)`

警告

此函数不允许在节点上下文中从输入读取数据，且比其他属性函数更难使用。您可能希望改用其他属性函数，例如[getattrib](/zh-cn/houdini-vex/attributes-and-intrinsics/getattrib "从几何体中读取属性值，并进行有效性检查")。

如果属性不存在或无法读取则返回`0`，成功时返回`1`。如果函数返回`0`（失败），给定的变量可能保持未初始化状态。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`value`

用于存储属性值的变量。

`attribclass`

可以是`"detail"`（或`"global"`）、`"point"`、`"prim"`或`"vertex"`之一。

您也可以使用`"primgroup"`、`"pointgroup"`或`"vertexgroup"`来[从组中读取数据](../groups.html "您可以在VEX中将图元/点/顶点组的内容当作属性来读取")。

`attribute_name`

要读取的属性（或固有属性）名称。

`element_number`

点或图元编号。如果读取的是detail属性，此处使用`0`。

`vertex_number`

- 读取顶点属性时，可以在`element_number`参数中指定图元编号，在此处指定图元的顶点编号。
- 要使用线性顶点索引，请在`element_number`中使用`-1`，并在此处指定顶点索引。
- 如果不读取顶点属性，则忽略此参数。

## 示例

```vex
vector pos, uv, clr;
// 从"defgeo.bgeo"中获取点3的位置
getattribute("defgeo.bgeo", pos, "point", "P", 3, 0);

// 从文件defgeo.bgeo中获取图元3的顶点2的"uv"属性值
getattribute("defgeo.bgeo", uv, "vertex", "uv", 3, 2);

// 获取路径"/obj/geo1/color1"指定的SOP中图元7的"Cd"属性值
// （仅限Houdini）
getattribute("op:/obj/geo1/color1", clr, "primitive", "Cd", 7);

```
