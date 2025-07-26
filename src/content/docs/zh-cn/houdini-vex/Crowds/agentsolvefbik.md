---
title: agentsolvefbik
order: 39
---
| 始于版本 | 17.0 |
| --- | --- |

`int  agentsolvefbik(<geometry>geometry, int outgeo, int prim, int targets[], matrix targetxforms[], int xformgroup, int iters)`

`int  agentsolvefbik(<geometry>geometry, int outgeo, int prim, int targets[], matrix targetxforms[], int xformgroup, int iters, float tolerance, int pinroot)`

`int  agentsolvefbik(<geometry>geometry, int outgeo, int prim, int targets[], matrix targetxforms[], int xformgroup, int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[])`

`int  agentsolvefbik(<geometry>geometry, int outgeo, int prim, int targets[], matrix targetxforms[], int xformgroup, int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[], int targettypes[], matrix targetoffsets[])`

`int  agentsolvefbik(<geometry>geometry, int outgeo, int prim, int targets[], matrix targetxforms[], int xformgroup, int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[], string goalxformattrib, string constrainedxformattrib, string jointlimitsattrib)`

`int  agentsolvefbik(<geometry>geometry, int outgeo, int prim, int targets[], matrix targetxforms[], int xformgroup, int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[], int targettypes[], matrix targetoffsets[], string goalxformattrib, string constrainedxformattrib, string jointlimitsattrib)`

如果`prim`超出范围或不是代理图元，或者targets和targetxforms长度不一致，则返回`-1`。

当代理上存在"agent_jointgoalxforms"、"agent_jointconstrainedxforms"和"agent_jointlimits"属性时（这些属性可由[Agent Configure Joints SOP](../../nodes/sop/agentconfigurejoints.html "创建指定代理关节旋转限制的点属性")生成），这些属性将被解释为求解过程中使用的关节限制。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`outgeo`

要写入的几何体的句柄。可以使用`geoself()`获取当前几何体的句柄。

`prim`

代理图元的图元编号。

`targets`

代理中末端效应器变换索引的列表。

`targetxforms`

末端效应器目标世界变换的列表，顺序与`targets`相同。

`xformgroup`

变换组的索引，指定用于IK求解器的关节（不在变换组中的所有变换将被忽略）。
可以使用[agentfindtransformgroup](/zh-cn/houdini-vex/crowds/agentfindtransformgroup "查找代理定义中变换组的索引")按名称查找变换组，值为-1表示应包含代理中的所有变换。
建议使用仅包含与代理骨骼结构对应的变换的变换组。

`iters`

要执行的最大迭代次数。
如果使用了`tolerance`参数，求解器可能会提前终止。

`tolerance`

检查收敛性时使用的容差，默认为1e-5。
如果位置收敛到此容差范围内，算法将停止。
如果为0，求解器将始终精确执行`iters`次迭代。

`pinroot`

是否将根节点固定在其起始位置，而不是允许其平移。
这在求解代理骨骼的子集时很有用。
默认为0（关闭）。

`targetweights`

包含每个末端效应器权重的列表，顺序与`targets`相同。
对于具有多个子项的关节，归一化权重将用于确定它们的位置——这意味着权重高于其他目标的目标更有可能被达到。
默认权重为1.0。

`targetpriorities`

包含每个末端效应器优先级级别的列表，顺序与`targets`相同。
较低优先级级别的目标不会影响较高优先级的目标。
例如，优先级级别可用于确保脚部目标始终满足，同时仍控制上半身目标的相对权重。
默认优先级为0（即所有目标优先级相同）。

`targetdepths`

对于每个末端效应器，指定可以调整其上方的多少个关节来实现目标变换。
可以使用负深度指定目标上方的所有关节都受影响。
默认深度为-1。

`targettypes`

包含每个末端效应器目标类型的列表，顺序与`targets`相同。
目标类型可用于指定末端效应器如何匹配其目标变换（来自`targetxforms`）的位置或方向。
值为`0`表示仅位置目标，`1`表示仅方向目标，`2`表示匹配位置和方向（默认）。

`targetoffsets`

包含每个末端效应器的附加局部空间变换的列表，顺序与`targets`相同。
此变换与末端效应器的关节变换组合，生成求解器尝试与目标变换对齐的变换。
这可以用于将目标放置在关节的偏移处（例如，在骨骼末端）。

`goalxformattrib`

可选参数，指定用于替代"agent_jointgoalxforms"的属性。

`constraintedxformattrib`

可选参数，指定用于替代"agent_jointconstrainedxforms"的属性。

`jointlimitsattrib`

可选参数，指定用于替代"agent_jointlimits"的属性。
