---
title: agentrigchildren
order: 35
---
`int [] agentrigchildren(<geometry>geometry, int prim, int transform)`

返回给定变换节点的直接子节点列表。

如果`transform`[超出范围](/zh-cn/houdini-vex/crowds/agenttransformcount "返回代理基元骨骼中的变换数量")、`prim`超出范围或`prim`不是代理基元，则返回空数组。

`<geometry>`

在节点上下文(如wrangle SOP)中运行时，此参数可以是表示输入编号(从0开始)的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何体文件(例如`.bgeo`)的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`prim`

基元编号。

`transform`

代理骨骼中变换节点的索引。

## 示例

遍历给定变换节点的所有子节点。

```vex
int[] queue = { transform };

while (len(queue) > 0) {
int i = removeindex(queue, 0);
printf("%d\n", i);

foreach (int child; agentrigchildren(0, @primnum, i))
push(queue, child);
}

```
