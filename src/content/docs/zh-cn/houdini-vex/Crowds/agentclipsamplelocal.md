---
title: agentclipsamplelocal
order: 13
---
`matrix [] agentclipsamplelocal(<geometry>geometry, int prim, string clipname, float time)`

`matrix [] agentclipsamplelocal(<geometry>geometry, int prim, int clipindex, float time)`

`matrix  agentclipsamplelocal(<geometry>geometry, int prim, string clipname, float time, int transform)`

`matrix  agentclipsamplelocal(<geometry>geometry, int prim, int clipindex, float time, int transform)`

在给定时间评估动画片段，并返回代理骨骼的局部变换矩阵。
如果`clipname`不是代理的[动画片段](agentclipcatalog.html "返回已加载到代理图元的所有动画片段")之一，或`prim`超出范围，或`prim`不是代理图元，或`transform`[超出范围](agenttransformcount.html "返回代理图元骨骼中的变换数量")，则返回空数组。
对于采样单个变换，`matrix`签名比`matrix[]`签名更高效。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`prim`

图元编号。

`clipname`

动画片段名称。

`clipindex`

代理定义中动画片段的索引。
可以通过[agentfindclip](agentfindclip.html "查找代理定义中动画片段的索引")获取片段的索引。

`time`

评估片段的时间（以秒为单位）。如果该时间超过[片段长度](agentcliplength.html "返回代理动画片段的长度（秒）")，将会循环播放。

`transform`

代理骨骼中变换的索引。

## 示例

采样行走片段在1.2秒后的局部变换矩阵。

```vex
matrix xforms[] = agentclipsamplelocal(0, @primnum, "agent1_clip.walk", 1.2);

```
