---
title: vertexprimindex
order: 45
---
`int  vertexprimindex(<geometry>geometry, int linearindex)`

注意 
要将线性索引转换为基元编号和基元顶点编号，
请使用 [vertexprim](/zh-cn/houdini-vex/geometry/vertexprim "返回包含给定顶点的基元编号。") 和 [vertexprimindex](/zh-cn/houdini-vex/geometry/vertexprimindex "将线性顶点索引转换为基元顶点编号。")。

`<geometry>`

在节点上下文（如 wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是一个指定要读取的几何体文件（例如 `.bgeo`）的字符串。在 Houdini 内部运行时，可以是 `op:/path/to/sop` 引用。

`linearindex`

顶点的线性索引

返回值

顶点在其所属基元中的编号，如果顶点不属于任何基元则返回 `-1`。

要获取包含顶点的基元编号，请使用 [vertexprim](/zh-cn/houdini-vex/geometry/vertexprim "返回包含给定顶点的基元编号。")。

注意 
由于几何体结构的特性，首次在几何体上运行此函数时，需要遍历所有基元以查找查找表。
如果大多数顶点都调用此函数，这一开销会被分摊。

## 示例

```vex
int prim, vtx;

// 查找线性顶点6的基元和顶点偏移量
prim = vertexprim("defgeo.bgeo", 6);
vtx = vertexprimindex("defgeo.bgeo", 6);

```
