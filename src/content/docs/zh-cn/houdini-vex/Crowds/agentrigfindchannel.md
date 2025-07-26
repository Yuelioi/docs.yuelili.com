---
title: agentrigfindchannel
order: 37
---
| 版本 | 18.0 |
| --- | --- |

`int  agentrigfindchannel(<geometry>geometry, int prim, string channelname)`

如果在骨骼中未找到`channelname`，或`prim`超出范围，或`prim`不是代理体元时返回`-1`。
该索引可用于通过[agentchannelvalue](/zh-cn/houdini-vex/crowds/agentchannelvalue "返回代理体元通道的当前值")和[setagentchannelvalue](setagentvalue.html "覆盖代理体元通道的值")访问代理的当前通道值，或通过[agentclipsample](/zh-cn/houdini-vex/crowds/agentclipsample "在指定时间采样代理动画剪辑的通道值")从任意剪辑中采样通道值。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`prim`

体元编号。

`channelname`

代理骨骼中通道的名称。
