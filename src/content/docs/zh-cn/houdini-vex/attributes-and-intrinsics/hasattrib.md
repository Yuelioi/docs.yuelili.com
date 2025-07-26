---
title: hasattrib
order: 24
---
如果事先知道属性类别，使用 [hasdetailattrib](/zh-cn/houdini-vex/attributes-and-intrinsics/hasdetailattrib "判断几何体细节属性是否存在")、[hasprimattrib](/zh-cn/houdini-vex/attributes-and-intrinsics/hasprimattrib "判断几何体图元属性是否存在")、[haspointattrib](/zh-cn/houdini-vex/attributes-and-intrinsics/haspointattrib "判断几何体点属性是否存在") 或 [hasvertexattrib](/zh-cn/houdini-vex/attributes-and-intrinsics/hasvertexattrib "判断几何体顶点属性是否存在") 可能更快。

`int  hasattrib(<geometry>geometry, string attribclass, string attribute_name)`

`<geometry>`

在节点上下文（如 wrangle SOP）中运行时，该参数可以是表示输入编号的整数（从0开始）以读取几何体。

或者，该参数可以是指定几何体文件（例如 `.bgeo`）的字符串。在 Houdini 内部运行时，可以是 `op:/path/to/sop` 引用。

`attribclass`

可以是 `"detail"`（或 `"global"`）、`"point"`、`"prim"` 或 `"vertex"` 之一。

也可以使用 `"primgroup"`、`"pointgroup"` 或 `"vertexgroup"` 来[从组中读取](../groups.html "在 VEX 中可以像读取属性一样读取图元/点/顶点组的内容")。

如果属性存在则返回 `1`，否则返回 `0`。

## 示例

```vex
// 检查点组 "pointstouse" 是否存在
if (hasattrib("defgeo.bgeo", "pointgroup", "pointstouse")) {
 // 对点组进行某些操作
}

```
