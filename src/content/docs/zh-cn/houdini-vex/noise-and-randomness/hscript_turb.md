---
title: hscript_turb
order: 17
---
`float  hscript_turb(vector pos, int depth)`

匹配 [turb](../../expressions/turb.html "生成空间相干的3D噪波。") 的输出。当您将工作流转换为VEX，或需要VEX与Hscript表达式协同工作，且要求湍流效果与表达式中一致时，此函数非常有用。

`pos`

采样湍流噪波的位置坐标。

`depth`

噪波的分形迭代次数。

返回值

通常范围在-1到1之间，但根据迭代深度可能超出该范围。对于高迭代深度，最大范围为-2到2。
