---
title: ch4
order: 5
---

`matrix ch4(string channel)` 

`matrix ch4(string channel, float time)` 

如果`channel`引用的节点参数是矩阵类型，则可以使用基础参数名称以矩阵形式返回所有分量。 

评估通道（或参数）并返回其值。时间以*秒*为单位指定，而不是帧数。如果未指定时间，函数将返回当前时间的值。 

Houdini包含多个用于评估不同类型通道/参数的函数： 

- 若需获取浮点数或字符串而无需知道参数类型，请使用[ch](/zh-cn/houdini-vex/nodes/ch "评估通道（或参数）并返回其值。")。 
- 若需获取浮点数，请使用[chf](/zh-cn/houdini-vex/nodes/chf "评估通道（或参数）并返回其值。")。 
- 若需获取字符串，请使用[chs](/zh-cn/houdini-vex/nodes/chs "评估通道（或参数）并返回其值。")。 
- 对于整数参数，请使用[chi](/zh-cn/houdini-vex/nodes/chi "评估通道（或参数）并返回其值。")。 
- 对于矩阵类型参数，请使用[ch3](/zh-cn/houdini-vex/nodes/ch3 "评估通道（或参数）并返回其值。")或[ch4](/zh-cn/houdini-vex/nodes/ch4 "评估通道（或参数）并返回其值。")。 
- 对于渐变参数，请使用[chramp](/zh-cn/houdini-vex/nodes/chramp "评估渐变参数并返回其值。")或[chrampderiv](/zh-cn/houdini-vex/nodes/chrampderiv "评估渐变参数相对于位置的导数。")。 
- 使用[chid](/zh-cn/houdini-vex/nodes/chid "解析通道字符串（或参数）并返回op_id、parm_index和vector_index。")获取`op_id`、`parm_index`和`vector_index`，从而无需字符串解析即可评估通道。 

（注：保留了所有代码格式、链接及专业术语，如"matrix"、"op_id"等未翻译，符合技术文档惯例）
