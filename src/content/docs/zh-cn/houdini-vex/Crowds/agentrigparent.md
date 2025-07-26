---
title: agentrigparent
order: 38
---
`int  agentrigparent(<geometry>geometry, int prim, int transform)`

如果`transform`是变换层级的根节点、`transform`[超出范围](/zh-cn/houdini-vex/crowds/agenttransformcount "返回代理基元骨骼中的变换数量")、`prim`超出范围或`prim`不是代理基元，则返回`-1`。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`prim`

基元编号。

`transform`

代理骨骼中变换的索引。

## 示例

从给定骨骼开始，查找骨骼层级的根节点的世界变换。

```vex
int root;
while (true) {
int parent = agentrigparent(0, @primnum, transform);

if (parent < 0)
{
root = transform;
break;
}
else
transform = parent;
}

matrix root_xform = agentworldtransform(0, @primnum, root);

```
