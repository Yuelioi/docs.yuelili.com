---
title: agentlayerbindings
order: 27
---
`int [] agentlayerbindings(<geometry>geometry, int prim, string layername, string shapetype)`

`int [] agentlayerbindings(<geometry>geometry, int prim, int layerindex, string shapetype)`

如果`layername`不是代理的[层](/zh-cn/houdini-vex/crowds/agentlayers "返回代理图元所有已加载的层")之一，`shapetype`无效，`prim`超出范围，或`prim`不是代理图元，则返回空数组。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`prim`

图元编号。

`layername`

代理某一层的名称。

`layerindex`

代理定义中层的索引。
可通过[agentfindlayer](/zh-cn/houdini-vex/crowds/agentfindlayer "查找代理定义中某层的索引")获取层的索引。

`shapetype`

检查指定层中的`"static"`（静态）、`"deforming"`（变形）或`"all"`（全部）形状。

## 示例

查找碰撞层中每个静态形状的当前世界变换。

```vex
string layer = agentcollisionlayer(0, @primnum);
int[] bindings = agentlayerbindings(0, @primnum, layer, "static");
matrix xforms[] = agentworldtransforms(0, @primnum);

foreach (int idx; bindings) {
matrix xform = xforms[idx];
}

```
