---
title: agentcliplayerblend
order: 9
---
`float  agentcliplayerblend(float values[], float value_weights[], int value_layer_ids[], int layer_blend_modes[], float layer_weights[], int layer_parent_ids[])`

`matrix  agentcliplayerblend(matrix values[], float value_weights[], int value_layer_ids[], int layer_blend_modes[], float layer_weights[], int layer_parent_ids[])`

此函数根据其他参数描述的混合树（与[分层代理片段](../../crowds/agents.html#currentclips)使用的格式相同）对输入值进行混合。
这对于混合与代理每个分配片段相对应的自定义值非常有用。

`values`

要混合的输入值列表。

`value_weights`

输入值的混合权重列表。

`value_layer_ids`

包含每个值所对应输入层的列表。

`layer_blend_modes`

每层的混合模式列表。可用混合模式定义在`$HH/vex/include/crowd_cliplayers.h`中。

`layer_weights`

每层的混合权重列表。最顶层不使用混合权重。

`layer_parent_ids`

包含每层父层的列表（最顶层为-1）。这指定了一个动画层的树状结构。
