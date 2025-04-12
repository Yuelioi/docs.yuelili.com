---
title: ch2函数
order: 3
---

`matrix2 ch2(string channel)`

`matrix2 ch2(string channel, float time)`

如果`channel`引用的节点参数是矩阵类型，可以使用基础参数名来返回所有分量作为一个矩阵。

评估一个通道（或参数）并返回其值。时间以*秒*为单位指定，而不是帧数。如果不指定时间，函数将返回当前时间的值。

Houdini包含多个函数用于评估不同类型的通道/参数：

- 要获取浮点数或字符串而不需要知道参数类型，使用[ch](ch.html "评估一个通道（或参数）并返回其值。")
- 要获取浮点数，使用[chf](chf.html "评估一个通道（或参数）并返回其值。")
- 要获取字符串，使用[chs](chs.html "评估一个通道（或参数）并返回其值。")
- 对于整数参数，使用[chi](chi.html "评估一个通道（或参数）并返回其值。")
- 对于矩阵类型参数，使用[ch3](ch3.html "评估一个通道（或参数）并返回其值。")或[ch4](ch4.html "评估一个通道（或参数）并返回其值。")
- 对于渐变参数，使用[chramp](chramp.html "评估一个渐变参数并返回其值。")或[chrampderiv](chrampderiv.html "评估一个参数相对于位置的导数。")
- 使用[chid](chid.html "解析通道字符串（或参数）并返回op_id、parm_index和vector_index。")获取`op_id`、`parm_index`和`vector_index`，以便无需进行字符串解析即可评估通道。