---
title: agentaddclip
order: 1
---

警告
此函数已被弃用。请改用 [hou.AgentDefinition.addClip](../../hom/hou/AgentDefinition.html#addClip) 和 [hou.crowds.replaceAgentDefinitions](../../hom/hou/crowds.html#replaceAgentDefinitions) 来编辑代理定义。

该函数用于将CHOP保存的`.clip`或`.bclip`文件（或由[Agent](../../nodes/out/agent.html "此输出操作符用于编写代理定义文件。") ROP生成的文件）添加到给定代理图元的定义中。
代理定义中的剪辑包含用于驱动代理骨骼的变换动画。

剪辑中的通道应采用`transform_name:channel_name`的形式，其中_transform_name_是与[agenttransformnames](/zh-cn/houdini-vex/crowds/agenttransformnames "返回代理图元骨骼中每个变换的名称。")返回值匹配的字符串，_channel_name_是`tx`、`ty`、`tz`、`rx`、`ry`、`rz`、`sx`、`sy`或`sz`之一。以`t`开头的通道表示平移，`r`表示旋转，`s`表示缩放。生成的变换将被视为*局部*变换，例如由[agentlocaltransform](/zh-cn/houdini-vex/crowds/agentlocaltransform "返回代理图元骨骼的当前局部空间变换。")返回的变换（即它们相对于代理骨骼中相应的父变换）。

`geohandle`

要写入的几何体的句柄。目前唯一有效的值是`0`或[geoself](/zh-cn/houdini-vex/geometry/geoself "返回当前几何体的句柄。")，表示节点中的当前几何体。（此参数将来可能用于允许写入其他几何体。）

`prim`

要修改定义的代理图元的图元编号。

`clipname`

用于标识剪辑的名称。代理定义中的所有剪辑必须具有唯一的名称。

`clippath`

从CHOP保存的或由[Agent](../../nodes/out/agent.html "此输出操作符用于编写代理定义文件。") ROP生成的`.clip`或`.bclip`文件的文件名。使用`op:full_path_to_chop`直接引用场景中的CHOP。

`keepref`

当`clippath`引用磁盘上的文件名时，此布尔标志指示在保存几何体时是否应保留外部引用。如果保留引用，则在使用保存的几何体时需要原始剪辑源。否则，在保存几何体时将内联剪辑的副本，从而不再需要原始剪辑。
