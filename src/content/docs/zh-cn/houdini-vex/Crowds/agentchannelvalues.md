---
title: agentchannelvalues
order: 5
---
| 版本 | 18.0 |
| --- | --- |

`float [] agentchannelvalues(<geometry>geometry, int prim)`

如果只需要获取单个通道值，使用 [agentchannelvalue](/zh-cn/houdini-vex/crowds/agentchannelvalue "返回代理体元通道的当前值") 可能会显著提高效率。

当`prim`超出范围或不是代理体元时，返回空数组。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`形式的引用。

`prim`

体元编号。
