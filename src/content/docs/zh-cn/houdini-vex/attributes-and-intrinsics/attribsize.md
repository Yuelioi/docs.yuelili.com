---
title: attribsize
order: 10
---
如果事先知道属性类别，使用 [detailattribsize](/zh-cn/houdini-vex/attributes-and-intrinsics/detailattribsize "返回几何体细节属性的大小")、[primattribsize](/zh-cn/houdini-vex/attributes-and-intrinsics/primattribsize "返回几何体图元属性的大小")、[pointattribsize](/zh-cn/houdini-vex/attributes-and-intrinsics/pointattribsize "返回几何体点属性的大小") 或 [vertexattribsize](/zh-cn/houdini-vex/attributes-and-intrinsics/vertexattribsize "返回几何体顶点属性的大小") 可能会更快。

`int  attribsize(<geometry>geometry, string attribclass, string attribute_name)`

`<geometry>`

当在节点上下文（如 wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何体文件（例如 `.bgeo`）的字符串。在 Houdini 内部运行时，可以是 `op:/path/to/sop` 引用。

`attribclass`

可以是 `"detail"`（或 `"global"`）、`"point"`、`"prim"` 或 `"vertex"` 之一。

也可以使用 `"primgroup"`、`"pointgroup"` 或 `"vertexgroup"` 来[从组中读取](../groups.html "在 VEX 中，可以像读取属性一样读取图元/点/顶点组的内容")。

返回值

属性*类型*的大小。

- 对于向量类型，返回其分量数量。
- 对于整数、浮点数或字符串，返回 `1`。
- 对于数组属性，返回数组中元组的大小。元组大小由 [Attribute Create 节点](../../nodes/sop/attribcreate.html "添加或编辑用户定义的属性")上的 **Size** 参数控制。

如果属性不存在，返回 `0`。

- 此函数处理属性的*类型*。它不会返回属性*值*的大小。不能使用此函数获取字符串或数组值的长度。

## 示例

```vex
// 获取 "defgeo.bgeo" 中位置属性 P 的大小
int size = attribsize("defgeo.bgeo", "point", "P");

```
