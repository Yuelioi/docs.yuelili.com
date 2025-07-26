---
title: uniqueval
order: 74
---
`int|string uniqueval(<geometry>geometry, string attribclass, string attribute_name, int which)`

如果几何体中任意点/图元/顶点在给定属性上具有相同的值，那么*唯一*值的集合将小于点/图元/顶点的总数。此函数允许您遍历唯一值集合。

此函数仅适用于字符串和整数属性。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`attribclass`

可以是`"detail"`（或`"global"`）、`"point"`、`"prim"`或`"vertex"`之一。

您还可以使用`"primgroup"`、`"pointgroup"`或`"vertexgroup"`来[从组中读取](../groups.html "您可以在VEX中将图元/点/顶点组的内容当作属性来读取")。

`attribute_name`

要读取的属性（或固有属性）的名称。

`which`

要返回的唯一值中的哪一个。
使用[nuniqueval](/zh-cn/houdini-vex/attributes-and-intrinsics/nuniqueval "返回整数或字符串属性的唯一值数量。")获取该属性有多少个唯一值。

## 示例

遍历点字符串属性`@foo`的唯一值

```vex
int count = nuniqueval(0, "point", "foo");
for (int i = 0; i < count; i++) {
 string val = uniqueval(0, "point", "foo", i);
 // ...用该值做一些操作...
}

```
