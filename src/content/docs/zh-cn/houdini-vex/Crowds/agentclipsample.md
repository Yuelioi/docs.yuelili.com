---
title: agentclipsample
order: 12
---

`float agentclipsample(<geometry>geometry, int prim, string clipname, float time, int channel_index)`

`float agentclipsample(<geometry>geometry, int prim, string clipname, float time, string channel)`

`float agentclipsample(<geometry>geometry, int prim, int clipindex, float time, int channel_index)`

`float agentclipsample(<geometry>geometry, int prim, int clipindex, float time, string channel)`

在给定时间评估动画片段并返回指定通道的值。
如果`clipname`不是代理的[动画片段](/zh-cn/houdini-vex/crowds/agentclipcatalog "返回已加载到代理图元的所有动画片段")之一、`prim`超出范围、`prim`不是代理图元、`channel_index`超出范围或`channel`不存在，则返回零。

要采样动画片段的变换通道，请改用[agentclipsamplelocal](/zh-cn/houdini-vex/crowds/agentclipsamplelocal "在特定时间采样代理的动画片段")或[agentclipsampleworld](/zh-cn/houdini-vex/crowds/agentclipsampleworld "在特定时间采样代理的动画片段")。

`<geometry>`

在节点上下文(如wrangle SOP)中运行时，此参数可以是表示输入编号(从0开始)的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件(例如`.bgeo`)的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`prim`

图元编号。

`clipname`

动画片段的名称。

`clipindex`

代理定义中动画片段的索引。
可通过[agentfindclip](/zh-cn/houdini-vex/crowds/agentfindclip "查找代理定义中动画片段的索引")获取片段的索引。

`time`

评估动画片段的时间(以秒为单位)。如果该时间大于[片段长度](/zh-cn/houdini-vex/crowds/agentcliplength "返回代理动画片段的长度(以秒为单位)")，将会循环播放。

`channel_index`

动画片段中通道的索引，由[agentclipchannel](/zh-cn/houdini-vex/crowds/agentclipchannel "查找代理动画片段中通道的索引")返回。

`channel`

动画片段中通道的名称。

## 示例

在1.2秒后采样"walk"片段的通道。

```vex
float value = agentclipsample(0, @primnum, "walk", 1.2, "latch_leftfoot");

```
