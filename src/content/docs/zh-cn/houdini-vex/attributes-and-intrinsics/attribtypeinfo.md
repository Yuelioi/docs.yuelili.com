---
title: attribtypeinfo
order: 12
---
`string  attribtypeinfo(<geometry>geometry, string attribclass, string attribute_name)`

这个通用形式允许您在运行时指定属性的"类别"。这对于编写可以处理不同类别的通用代码非常有用。
如果您提前知道属性类别，使用[detailattribtypeinfo](/zh-cn/houdini-vex/attributes-and-intrinsics/detailattribtypeinfo "返回几何属性的类型信息")、[primattribtypeinfo](/zh-cn/houdini-vex/attributes-and-intrinsics/primattribtypeinfo "返回几何属性的类型信息")、[pointattribtypeinfo](/zh-cn/houdini-vex/attributes-and-intrinsics/pointattribtypeinfo "返回几何属性的类型信息")或[vertexattribtypeinfo](/zh-cn/houdini-vex/attributes-and-intrinsics/vertexattribtypeinfo "返回几何属性的类型信息")可能会更快。

`<geometry>`

在节点上下文(如wrangle SOP)中运行时，此参数可以是一个表示输入编号(从0开始)的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件(例如 `.bgeo`)的字符串。在Houdini内部运行时，可以是 `op:/path/to/sop`引用。

`attribclass`

可以是 `"detail"`(或 `"global"`)、`"point"`、`"prim"`或 `"vertex"`之一。

您也可以使用 `"primgroup"`、`"pointgroup"`或 `"vertexgroup"`来[从组中读取](../groups.html "在VEX中，您可以像读取属性一样读取图元/点/顶点组的内容")。

`attribute_name`

要读取的属性(或固有属性)的名称。

返回值

返回表示给定几何属性元数据的字符串，如果属性不存在则返回空字符串(`""`)。

| `"none"` | 不进行变换。 |
| --- | --- |
| `"point"` | 应用缩放、旋转和变换。 |
| `"hpoint"` | 对这个vector4应用缩放、旋转和变换。 |
| `"vector"` | 应用缩放和旋转，但不应用变换。 |
| `"normal"` | 应用旋转，使用逆转置应用缩放。 |
| `"color"` | 不进行变换。 |
| `"matrix"` | 对这个矩阵应用缩放、旋转和变换。 |
| `"quaternion"` | 应用旋转。 |
| `"indexpair"` | 不进行变换。 |
| `"integer"` | 在点平均时不混合此值。 |
| `"integer-blend"` | 在点平均时会混合的整数值。 |
| `"texturecoord"` | 不进行变换，并尝试在插值时保持接缝。具有此类型的属性将显示在UV视口菜单中。 |
