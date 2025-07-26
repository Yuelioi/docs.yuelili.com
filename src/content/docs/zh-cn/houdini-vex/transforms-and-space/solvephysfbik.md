---
title: solvephysfbik
order: 30
---
| 始于版本 | 18.5 |
| --- | --- |

`matrix [] solvephysfbik(matrix xforms[], int parents[], dict jointoptions[], matrix targetxforms[], int targets[], dict targetoptions[], int iters, float damping, float tolerance)`

该求解器采用与[solvefbik](/zh-cn/houdini-vex/transforms-and-space/solvefbik "对骨骼应用全身逆向运动学算法")不同的算法——通常性能稍慢，但能提供更精细的骨骼行为控制，并产生更高质量的结果。
求解器还可通过可选参数使用各关节的质量和质心位置来实现骨骼质心的目标位置，从而实现基于物理的行为（如保持平衡）。

相比[solvefbik](/zh-cn/houdini-vex/transforms-and-space/solvefbik "对骨骼应用全身逆向运动学算法")，本求解器在启用关节限制时表现更稳定，且在存在不同优先级目标时能产生更精确的结果。
该求解器还会更均匀地沿骨骼链分配关节角度变化（特别是使用旋转目标时），而不会在少数关节上产生大幅角度变化。

旋转和平移权重参数可控制求解过程中各关节轴的行为。这可用于确保特定关节旋转幅度大于其他关节、锁定特定关节轴或启用可平移（弹性）关节。

以下情况返回空数组：

- `xforms`或`jointoptions`与`parents`长度不一致
- `targetxforms`或`targetoptions`与`targets`长度不一致

`xforms`

待解算装置中所有变换的世界空间变换矩阵。

`parents`

各变换的父级变换索引。-1表示根节点。

`jointoptions`

指定关节的可选参数，有效键如下：

`rotation_weights`

`vector`类型，指定关节旋转轴的权重。
权重值越大，求解器越倾向于绕该轴旋转来实现解算。
零权重将禁用该旋转轴。
默认值为`{1,1,1}`。

`translation_weights`

`vector`类型，指定关节平移轴的权重。
权重值越大，求解器越倾向于沿该轴平移来实现解算。
零权重将禁用该平移轴。
要使根关节非固定，其平移权重应设为非零值（如`{1,1,1}`）。
默认值为`{0,0,0}`。

`rotation_order`

`int`类型，指定关节旋转顺序。

可选用以下旋转顺序常量（可从`$HFS/houdini/vex/include/math.h`导入）：

| 常量名称 | 旋转顺序 |
| --- | --- |
| XFORM_XYZ | X, Y, Z顺序旋转 |
| XFORM_XZY | X, Z, Y顺序旋转 |
| XFORM_YXZ | Y, X, Z顺序旋转 |
| XFORM_YZX | Y, Z, X顺序旋转 |
| XFORM_ZXY | Z, X, Y顺序旋转 |
| XFORM_ZYX | Z, Y, X顺序旋转 |

`rotation_lower_limits`

`vector`类型，指定关节旋转轴的下限（弧度制）。
若指定了关节的局部静止变换，旋转限制将相对于该变换应用。

注意
要禁止某轴旋转，将其权重设为零比将旋转限制设为零更高效。

`rotation_upper_limits`

`vector`类型，指定关节旋转轴的上限（弧度制）。

`translation_lower_limits`

`vector`类型，指定关节平移轴的下限。

`translation_upper_limits`

`vector`类型，指定关节平移轴的上限。

`rest_xform`

局部空间`matrix`，指定关节的静止姿势。
默认值为单位矩阵。

`rest_rotation_weights`

`vector`类型，指定求解器对旋转轴匹配静止变换的强度。
该约束优先级低于所有末端效应器目标。
启用静止变换约束时，`0.1`是典型推荐值，设为0则禁用该约束。
默认值为`{0,0,0}`。

`rest_translation_weights`

`vector`类型，指定求解器对平移轴匹配静止变换的强度。
该约束优先级低于所有末端效应器目标。
启用静止变换约束时，`0.1`是典型推荐值，设为0则禁用该约束。
默认值为`{0,0,0}`。

`mass`

`float`类型，指定关节关联肢体的质量。
仅当提供质心目标时使用此参数。
默认值为`1.0`。

`local_com`

`vector`类型，指定关节质心的局部空间位置。
`{0,0,0}`（默认值）表示质心位于关节位置。

`targets`

骨骼中末端效应器的变换索引列表。

`targetxforms`

末端效应器的目标世界变换矩阵列表，顺序与`targets`对应。

`targetoptions`

指定目标的可选参数，有效键如下：

`weight`

`float`类型，指定目标的重要性。
当多个目标优先级相同时，权重较高的目标更可能被达成。
默认值为`1.0`。

`priority`

`int`类型，指定目标优先级。
低优先级目标不会干扰高优先级目标。
例如可确保操作骨骼上半身时双脚保持固定。
默认值为`0`。

`depth`

`int`类型，指定为实现目标变换可调整的父关节数量。
负值表示整条骨骼链都可受影响。
默认值为`-1`。

`target_type`

`int`类型，指定末端效应器如何匹配目标变换的位置/朝向：
`0`（默认）表示仅位置目标，`1`表示仅旋转目标，`2`匹配位置和旋转。
`3`表示控制骨骼质心的目标（此时忽略`targets`中的变换索引）。
只能提供一个质心目标。

`joint_offset`

`matrix`类型，指定与关节变换组合的局部空间变换，求解器会尝试将该组合变换与目标对齐。
可用于在关节偏移处设置目标（如骨骼末端）。

`iters`

最大迭代次数。
若使用`tolerance`参数，求解器可能提前终止。

`damping`

求解器阻尼系数。
较大值在目标不可达等情况下会产生更稳定的结果。
但过大的值需要更多迭代次数收敛。
通常0.5是合适的初始值。

`tolerance`

收敛检查的容差值，默认为1e-5。
若位置收敛至该容差范围内，算法将停止。
若为0，求解器将严格执行`iters`次迭代。
