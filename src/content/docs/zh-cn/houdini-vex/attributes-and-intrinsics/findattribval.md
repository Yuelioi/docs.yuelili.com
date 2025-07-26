---
title: findattribval
order: 20
---
`int  findattribval(<geometry>geometry, string attribclass, string attribute_name, int|stringvalue, int which=0)`

`int [] findattribval(<geometry>geometry, string attribclass, string attribute_name, int|stringvalue)`

`<geometry>`

在节点上下文（如 wrangle SOP）中运行时，此参数可以是表示输入编号的整数（从0开始）以读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`attribclass`

可以是`"detail"`（或`"global"`）、`"point"`、`"prim"`或`"vertex"`之一。

`attribute_name`

要读取的属性名称。

`value`

要在属性中查找的值。

`which`

如果多个元素在属性中具有给定值，此参数控制返回哪个匹配项。

如果要查找具有相同属性值的多个元素，可以使用[findattribvalcount](/zh-cn/houdini-vex/attributes-and-intrinsics/findattribvalcount "返回具有特定值的整数或字符串属性的元素数量。")获取匹配总数，然后通过在循环中增加此函数的`which`参数来遍历它们。请参见下面的示例。
数组签名也可用于返回所有匹配元素的列表。

返回值

返回命名属性与给定`value`匹配的第一个点/基元/顶点的编号。如果没有元素具有给定属性值，则返回`-1`。
数组签名返回命名属性与给定`value`匹配的所有点/基元/顶点的编号。

提示

最常见的用例（通过`name`或`id`属性查找点/基元）有更易用的专用包装函数：[nametopoint](/zh-cn/houdini-vex/attributes-and-intrinsics/nametopoint "通过name属性查找点")、[nametoprim](/zh-cn/houdini-vex/attributes-and-intrinsics/nametoprim "通过name属性查找基元")、[idtopoint](/zh-cn/houdini-vex/attributes-and-intrinsics/idtopoint "通过id属性查找点")和[idtoprim](/zh-cn/houdini-vex/attributes-and-intrinsics/idtoprim "通过id属性查找基元")。

- 只能搜索整数或字符串值。

## 示例

查找`@id` == 10的基元

```vex
int prim_num = findattribval(0, "prim", "id", 10);
// 注意：可以使用idtoprim(0, 10)代替

```

查找所有`@age` == 10的点

```vex
for (int point_num : findattribval(0, "point", "age", 10))
{
 // ...对点进行操作...
}

```

使用[findattribvalcount](/zh-cn/houdini-vex/attributes-and-intrinsics/findattribvalcount "返回具有特定值的整数或字符串属性的元素数量。")查找所有`@age` == 10的点。

```vex
int count = findattribvalcount(0, "point", "age", 10);
int point_num;
for (int i = 0; i < count; i++) {
 point_num = findattribval(0, "point", "age", 10, i);
 // ...对点进行操作...
}

```
