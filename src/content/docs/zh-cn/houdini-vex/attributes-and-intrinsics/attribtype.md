---
title: attribtype
order: 11
---
如果提前知道属性类别，使用 [detailattribtype](/zh-cn/houdini-vex/attributes-and-intrinsics/detailattribtype "返回几何体细节属性的类型")、[primattribtype](/zh-cn/houdini-vex/attributes-and-intrinsics/primattribtype "返回几何体图元属性的类型")、[pointattribtype](/zh-cn/houdini-vex/attributes-and-intrinsics/pointattribtype "返回几何体点属性的类型") 或 [vertexattribtype](/zh-cn/houdini-vex/attributes-and-intrinsics/vertexattribtype "返回几何体顶点属性的类型") 可能会更快。

`int  attribtype(<geometry>geometry, string attribclass, string attribute_name)`

`<geometry>`

在节点上下文（如 wrangle SOP）中运行时，此参数可以是一个整数，表示要读取几何体的输入编号（从0开始）。

或者，该参数也可以是一个指定几何体文件（例如 `.bgeo`）的字符串。在 Houdini 内部运行时，可以是 `op:/path/to/sop` 引用。

`attribclass`

可以是 `"detail"`（或 `"global"`）、`"point"`、`"prim"` 或 `"vertex"` 之一。

也可以使用 `"primgroup"`、`"pointgroup"` 或 `"vertexgroup"` 来[从组中读取](../groups.html "在 VEX 中，可以像读取属性一样读取图元/点/顶点组的内容")。

返回值

表示属性类型的数字代码：

| `-1` | 未找到属性或未知类型 |
| --- | --- |
| `0` | 整数 |
| `1` | 浮点数或向量 |
| `2` | 字符串 |
| `3` | 整数数组（或整数元组） |
| `4` | 浮点数数组（或浮点数元组） |
| `5` | 字符串数组 |
| `6` | 字典 |
| `7` | 字典数组 |

## 示例

```vex
// 获取 "defgeo.bgeo" 中位置属性 P 的类型
int type = attribtype("defgeo.bgeo", "point", "P");

```
