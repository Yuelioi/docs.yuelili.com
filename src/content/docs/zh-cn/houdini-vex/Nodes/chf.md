---
title: chf
order: 10
---

`float  chf(string channel)`

`float  chf(string channel, float time_in_sec)`

`float  chf(int op_id, int parm_index, int vector_index)`

`float  chf(int op_id, int parm_index, int vector_index, float time_in_sec)`

评估通道（或参数）并返回其值。时间以*秒*为单位指定，而不是帧数。如果不指定时间，函数将返回当前时间的值。

Houdini提供了多个函数来评估不同类型的通道/参数：

- 要获取浮点数或字符串而不需要知道参数类型，使用[ch](/zh-cn/houdini-vex/nodes/ch "评估通道（或参数）并返回其值。")
- 要获取浮点数，使用[chf](/zh-cn/houdini-vex/nodes/chf "评估通道（或参数）并返回其值。")
- 要获取字符串，使用[chs](/zh-cn/houdini-vex/nodes/chs "评估通道（或参数）并返回其值。")
- 对于整数参数，使用[chi](/zh-cn/houdini-vex/nodes/chi "评估通道（或参数）并返回其值。")
- 对于矩阵类型参数，使用[ch3](/zh-cn/houdini-vex/nodes/ch3 "评估通道（或参数）并返回其值。")或[ch4](/zh-cn/houdini-vex/nodes/ch4 "评估通道（或参数）并返回其值。")
- 对于渐变参数，使用[chramp](/zh-cn/houdini-vex/nodes/chramp "评估渐变参数并返回其值。")或[chrampderiv](/zh-cn/houdini-vex/nodes/chrampderiv "评估参数相对于位置的导数。")
- 使用[chid](/zh-cn/houdini-vex/nodes/chid "解析通道字符串（或参数）并返回op_id、parm_index和vector_index。")获取`op_id`、`parm_index`和`vector_index`，以便在不进行字符串解析的情况下评估通道
