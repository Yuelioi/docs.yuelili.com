---
title: agentcollisionlayer
order: 20
---

警告
此函数已被弃用。请改用 [agentcollisionlayers](agentcollisionlayers.html "返回代理图元碰撞层的名称")。

如果`prim`超出范围或不是代理图元，则返回空字符串。

`<geometry>`

在节点上下文(如wrangle SOP)中运行时，此参数可以是表示输入编号(从0开始)的整数，用于读取几何体。

或者，该参数可以是用于指定要读取的几何文件(例如`.bgeo`)的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`prim`

图元编号。
