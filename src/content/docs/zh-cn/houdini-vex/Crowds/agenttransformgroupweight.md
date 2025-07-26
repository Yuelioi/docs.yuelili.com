---
title: agenttransformgroupweight
order: 44
---

更多信息请参阅[变换组](../../crowds/agents.html#xformgroups)。

`float agenttransformgroupweight(<geometry>geometry, int prim, int transformgroup, int transform)`

如果变换是指定变换组的成员，则返回该变换的权重值；否则返回零。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`prim`

图元编号。

`transformgroup`

代理定义中变换组的索引。
可通过[agentfindtransformgroup](/zh-cn/houdini-vex/crowds/agentfindtransformgroup "查找代理定义中变换组的索引")获取变换组的索引。

`transform`

代理骨骼装配中变换的索引。
