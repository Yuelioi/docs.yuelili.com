---
title: chi
order: 11
---
`int  chi(string channel)`

`int  chi(string channel, float time)`

评估通道（或参数）并返回其整数值。时间以*秒*为单位指定，而非帧数。若不指定时间，则返回当前时间的值。

Houdini 提供了多个函数用于评估不同类型的通道/参数：

- 若需获取浮点数或字符串且无需知道参数类型，使用 [ch](ch.html "评估通道（或参数）并返回其值。")
- 获取浮点数值，使用 [chf](chf.html "评估通道（或参数）并返回其浮点数值。")
- 获取字符串值，使用 [chs](chs.html "评估通道（或参数）并返回其字符串值。")
- 针对整型参数，使用 [chi](chi.html "评估通道（或参数）并返回其整数值。")
- 针对矩阵类型参数，使用 [ch3](ch3.html "评估通道（或参数）并返回3x3矩阵值。") 或 [ch4](ch4.html "评估通道（或参数）并返回4x4矩阵值。")
- 针对渐变参数，使用 [chramp](chramp.html "评估渐变参数并返回其插值结果。") 或 [chrampderiv](chrampderiv.html "评估渐变参数相对于位置的导数。")
- 使用 [chid](chid.html "解析通道字符串（或参数）并返回操作符ID、参数索引和向量索引。") 可获取 `op_id`、`parm_index` 和 `vector_index`，从而无需字符串解析即可评估通道。