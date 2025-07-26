---
title: nuniqueval
order: 33
---
`int  nuniqueval(<geometry>geometry, string attribclass, string attribute_name)`

返回某个属性所有值中*不重复*值的数量。
您可以使用[uniqueval](/zh-cn/houdini-vex/attributes-and-intrinsics/uniqueval "返回整型或字符串属性所有值集合中的某个唯一值")来遍历这些唯一值集合。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号的整数（从0开始）以读取几何体。

或者，该参数可以是指定要读取的几何体文件（例如 `.bgeo`）的字符串。在Houdini内部运行时，可以是 `op:/path/to/sop`引用。

`attribclass`

可以是 `"detail"`（或 `"global"`）、`"point"`、`"prim"`或 `"vertex"`之一。

您也可以使用 `"primgroup"`、`"pointgroup"`或 `"vertexgroup"`来[从组中读取](../groups.html "在VEX中可以将图元/点/顶点组的内容作为属性读取")。

## 示例

测试点属性 `foo`的所有值是否都是唯一的

```vex
int test = nuniqueval(0, "point", "foo") == npoints(0)

```
