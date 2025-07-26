---
title: setagentclips
order: 53
---

`int  setagentclips(int geohandle, int prim, string clip_names[], float clip_times[], float clip_weights[], string clip_transform_groups[], int clip_layer_ids[], int layer_blend_modes[], float layer_weights[], int layer_parent_ids[])`

`int  setagentclips(int geohandle, int prim, int clip_ids[], float clip_times[], float clip_weights[], int clip_transform_group_ids[], int clip_layer_ids[], int layer_blend_modes[], float layer_weights[], int layer_parent_ids[])`

相比使用[setagentclipnames](/zh-cn/houdini-vex/crowds/setagentclipnames "设置代理图元的当前动画剪辑")、[setagentcliptimes](/zh-cn/houdini-vex/crowds/setagentcliptimes "设置代理图元动画剪辑的当前时间")和[setagentclipweights](/zh-cn/houdini-vex/crowds/setagentclipweights "设置代理图元动画剪辑的混合权重")的组合，此函数能提供更好的性能，同时还会修改[用于动画剪辑分层的基本体内部属性](../../crowds/agents.html#currentclips)。

`geohandle`

要写入的几何体句柄。可使用`geoself()`获取当前几何体的句柄。

`prim`

基本体编号。

`clip_names`

动画剪辑名称列表。

`clip_ids`

代理定义中的动画剪辑索引列表。
可通过[agentfindclip](/zh-cn/houdini-vex/crowds/agentfindclip "查找代理定义中剪辑的索引")获取剪辑的索引。

`clip_times`

剪辑应采样的时间列表。

`clip_weights`

动画剪辑的混合权重列表。

`clip_transform_groups`

变换组列表，指定每个剪辑应应用的关节。

`clip_transform_group_ids`

代理定义中的变换组索引列表。
可通过[agentfindtransformgroup](/zh-cn/houdini-vex/crowds/agentfindtransformgroup "查找代理定义中变换组的索引")获取变换组的索引。

`clip_layer_ids`

包含每个动画剪辑所属图层的列表。

`layer_blend_modes`

每个图层的混合模式列表。可用混合模式定义在`$HH/vex/include/crowd_cliplayers.h`中。

`layer_weights`

每个图层的混合权重列表。最顶层不使用混合权重。

`layer_parent_ids`

包含每个图层父图层（最顶层为-1）的列表。这指定了动画图层的树形结构。
