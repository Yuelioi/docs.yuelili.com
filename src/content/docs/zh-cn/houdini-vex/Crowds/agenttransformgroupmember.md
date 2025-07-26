---
title: agenttransformgroupmember
order: 41
---

更多信息请参阅[变换组](../../crowds/agents.html#xformgroups)。

`int  agenttransformgroupmember(<geometry>geometry, int prim, string transformgroup, int transform)`

`int  agenttransformgroupmember(<geometry>geometry, int prim, int transformgroupidx, int transform)`

如果指定的变换是该变换组的成员，则返回非零值，否则返回零。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`prim`

基元编号。

`transformgroup`

代理定义中变换组的名称。

`transformgroupidx`

代理定义中变换组的索引。
变换组的索引可通过[agentfindtransformgroup](/zh-cn/houdini-vex/crowds/agentfindtransformgroup "查找代理定义中变换组的索引。")获取。

`transform`

代理骨骼中变换的索引。
