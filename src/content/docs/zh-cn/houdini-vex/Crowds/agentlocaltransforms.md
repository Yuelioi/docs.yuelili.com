---
title: agentlocaltransforms
order: 31
---
`matrix [] agentlocaltransforms(<geometry>geometry, int prim)`

如果只需要单个变换矩阵，使用[agentlocaltransform](/zh-cn/houdini-vex/crowds/agentlocaltransform "返回代理体素骨骼的当前局部空间变换矩阵")可能会显著提高效率。

当`prim`超出范围或不是代理体素时，返回空数组。

`<geometry>`

在节点上下文(如wrangle SOP)中运行时，此参数可以是一个表示输入编号(从0开始)的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件(例如`.bgeo`)的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`形式的引用。

`prim`

体素编号。
