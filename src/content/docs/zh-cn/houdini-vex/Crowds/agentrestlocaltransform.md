---
title: agentrestlocaltransform
order: 33
---

`matrix  agentrestlocaltransform(<geometry>geometry, int prim, int transform)`

如果`transform`[超出范围](/zh-cn/houdini-vex/crowds/agenttransformcount "返回代理基元骨骼中的变换数量")，或`prim`超出范围，或`prim`不是代理基元，则返回单位矩阵。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`prim`

基元编号。

`transform`

代理骨骼中变换的索引。
