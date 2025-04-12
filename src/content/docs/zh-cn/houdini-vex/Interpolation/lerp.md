---
title: lerp
order: 10
---
`float  lerp(float value1, float value2, float amount)`

在值之间执行线性插值。

`<vector> lerp(<vector>value1, <vector>value2, float amount)`

在对应分量之间执行线性插值。

`<vector> lerp(<vector>value1, <vector>value2, <vector>amount)`

按每个分量对指定的插值量，在对应分量之间执行线性插值。

`bsdf  lerp(bsdf bsdf1, bsdf bsdf2, float amount)`

返回一个在两个给定BSDF的输出之间进行线性插值的BSDF。

`amount`

如果插值量超出0到1的范围，将按线性方式外推值。

如果amount为0，则返回第一个值；如果为1，则返回第二个值。
