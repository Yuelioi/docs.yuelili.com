---
title: solvefbik
order: 28
---
| 始于版本 | 17.0 |
| --- | --- |

`matrix [] solvefbik(matrix xforms[], int parents[], dict jointoptions[], matrix targetxforms[], int targets[], dict targetoptions[], int iters, float tolerance, int pinroot)`

`matrix [] solvefbik(matrix xforms[], int parents[], int targets[], matrix targetxforms[], int iters)`

`matrix [] solvefbik(matrix xforms[], int parents[], int targets[], matrix targetxforms[], int iters, float tolerance, int pinroot)`

`matrix [] solvefbik(matrix xforms[], int parents[], int targets[], matrix targetxforms[], int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[])`

`matrix [] solvefbik(matrix xforms[], int parents[], int targets[], matrix targetxforms[], int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[], int targettypes[], matrix targetoffsets[])`

`matrix [] solvefbik(matrix xforms[], int parents[], int targets[], matrix targetxforms[], int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[], matrix goalxforms[], vector4 constrainedxforms[], vector jointlimits[])`

`matrix [] solvefbik(matrix xforms[], int parents[], int targets[], matrix targetxforms[], int iters, float tolerance, int pinroot, float targetweights[], int targetpriorities[], int targetdepths[], int targettypes[], matrix targetoffsets[], matrix goalxforms[], vector4 constrainedxforms[], vector jointlimits[])`

以下情况将返回空数组：

- `xforms` 与 `parents` 长度不一致
- `targets` 与 `targetxforms` 长度不一致
- `goalxforms`、`constrainedxforms` 和 `jointlimits` 数组非空但长度与 `xforms` 不一致

`goalxforms`、`constrainedxforms` 和 `jointlimits` 参数应采用 [Agent Configure Joints SOP](../../nodes/sop/agentconfigurejoints.html "创建用于指定代理关节旋转限制的点属性") 节点生成的格式。

`xforms`

待解算骨骼中所有变换节点的世界变换矩阵。

`parents`

每个变换节点的父节点索引。-1 表示根节点。

`jointoptions`

指定关节的可选参数，有效键值包括：

`limit_goalxform`

一个 `matrix`，指定锥体在父变换空间中的位置和朝向。
可通过 [Agent Configure Joints](../../nodes/sop/agentconfigurejoints.html "创建用于指定代理关节旋转限制的点属性") 生成的属性设置。

`limit_constrainedxform`

一个 `vector4`（四元数），指定子变换空间中扭转轴、上轴和外轴的朝向。
可通过 [Agent Configure Joints](../../nodes/sop/agentconfigurejoints.html "创建用于指定代理关节旋转限制的点属性") 生成的属性设置。

`limit_angles`

一个 `vector`，指定各轴的最大旋转角度（度）。
可通过 [Agent Configure Joints](../../nodes/sop/agentconfigurejoints.html "创建用于指定代理关节旋转限制的点属性") 生成的属性设置。

`targets`

骨骼末端效应器的变换节点索引列表。

`targetxforms`

与 `targets` 顺序对应的末端效应器目标世界变换矩阵列表。

`targetoptions`

指定目标的可选参数，有效键值包括：

`weight`

目标重要性的 `float` 值。
当多个目标优先级相同时，权重较高的目标更可能被达成。
默认值为 `1.0`。

`priority`

目标优先级等级的 `int` 值。
低优先级目标不会干扰高优先级目标。
例如可用于确保操作上半身时双脚保持固定。
默认值为 `0`。

`depth`

指定可调整的父关节数量的 `int` 值。
负值表示整条骨骼链都可受影响。
默认值为 `-1`。

`target_type`

指定末端效应器如何匹配目标变换的 `int` 值：
`0`（默认）表示仅位置匹配，`1` 表示仅朝向匹配，`2` 表示位置和朝向都匹配。
`3` 表示控制骨骼质心的目标（不使用 `targets` 中的变换索引）。
只能指定一个质心目标。

`joint_offset`

一个 `matrix`，指定与关节变换组合的局部空间变换，用于生成解算器尝试对齐目标变换的最终变换。
可用于在关节偏移处设置目标（例如骨骼末端）。

`iters`

最大迭代次数。
若指定了 `tolerance` 参数，解算器可能提前终止。

`tolerance`

收敛检查的容差值，默认为 1e-5。
若位置变化小于此值，算法将停止。
设为 0 时解算器将严格执行 `iters` 次迭代。

`pinroot`

是否固定根节点初始位置（禁止平移）。
适用于解算代理骨骼的子集等情况。
默认为 0（关闭）。

`targetweights`

与 `targets` 顺序对应的末端效应器权重列表。
对于多子节点的关节，归一化权重将决定其位置——权重较高的目标更可能被达成。
默认权重为 1.0。

`targetpriorities`

与 `targets` 顺序对应的末端效应器优先级列表。
低优先级目标不会影响高优先级目标。
例如可确保脚部目标始终满足，同时控制上半身目标的相对权重。
默认优先级为 0（所有目标同级）。

`targetdepths`

为每个末端效应器指定可调整的上级关节数量。
负值表示目标上方的所有关节都可受影响。
默认深度为 -1。

`targettypes`

与 `targets` 顺序对应的末端效应器目标类型列表。
`0` 表示仅位置目标，`1` 表示仅朝向目标，`2` 表示位置和朝向目标（默认）。

`targetoffsets`

与 `targets` 顺序对应的末端效应器局部空间偏移变换列表。
该变换会与关节变换组合，生成解算器尝试对齐目标变换的最终变换。
可用于在关节偏移处设置目标（例如骨骼末端）。

`goalxforms`

[Agent Configure Joints](../../nodes/sop/agentconfigurejoints.html "创建用于指定代理关节旋转限制的点属性") 生成的关节约束部分。
空数组表示无关节约束。

`constrainedxforms`

[Agent Configure Joints](../../nodes/sop/agentconfigurejoints.html "创建用于指定代理关节旋转限制的点属性") 生成的关节约束部分。
空数组表示无关节约束。

`jointlimits`

[Agent Configure Joints](../../nodes/sop/agentconfigurejoints.html "创建用于指定代理关节旋转限制的点属性") 生成的关节约束部分。
空数组表示无关节约束。
