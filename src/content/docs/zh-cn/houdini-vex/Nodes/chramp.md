---
title: chramp
order: 14
---
`float  chramp(string channel, float ramppos)`

`float  chramp(string channel, float ramppos, float time)`

`vector  chramp(string channel, float ramppos)`

`vector  chramp(string channel, float ramppos, float time)`

评估一个渐变参数并返回其值。

ramppos 参数表示在渐变上的评估位置，该值会被限制在 `[0,1]` 范围内。

如果渐变是动态变化的，可以使用 time 参数来指定在当前时间之外的其他时间点进行评估。
