---
title: 处理路径
---
# 处理路径

## 访问路径数据

路径与其他参数类型不同，因为它们的值不能直接访问。除了检查它们的状态（类似于图层参数），您必须使用我们的路径数据函数套件来获取路径在给定时间的详细信息。请参阅 [PF_PathQuerySuite1](#pf_pathquerysuite1) 和 [PF_PathDataSuite](#pf_pathdatasuite)。在路径参数传递给您时，切勿直接使用其中的值，除非您已经检查过它；虽然删除的路径将不可用，但进一步的更新是“延迟”进行的（稍后）；除非您检查路径，否则您的效果将看不到这些更改。

---

## 操作路径数据

您还可以使用 [AEGP_MaskOutlineSuite3](../../aegps/aegp-suites#aegp_maskoutlinesuite3) 来操作路径。请参阅 [AEGP 套件的作弊效果用法](../../aegps/cheating-effect-usage-of-aegp-suites)。路径参数被视为不透明的数据块；必须使用获取和设置函数来访问和操作它们。与图层参数一样，访问它们的特效必须检查它们的状态（并返回！）。

---

## 顶点

路径顶点比简单的点更复杂。所有成员变量都是 PF_FpLongs（双精度浮点数），并且位于图层的坐标空间中。

---

## PF_PathVertex

| 成员 | 描述 |
| --- | --- |
| `x` | 顶点的位置。 |
| `y` | |
| `tan_in_x` | 进入的切线点。 |
| `tan_in_y` | |
| `tan_out_x` | 离开的切线点。 |
| `tan_out_y` | |

---

## PF_PathDataSuite

此套件提供有关路径（顶点序列）的信息。

| 函数 | 描述 |
|---|---|
| `PF_PathIsOpen` | 如果路径未闭合（如果起点和终点顶点不相同），则返回 `TRUE`。 |
| | <pre lang="cpp">PF_PathIsOpen(<br/>  PF_ProgPtr         effect_ref0,<br/>  PF_PathOutlinePtr  pathP,<br/>  PF_Boolean         \*openPB);</pre> |
| `PF_PathNumSegments` | 检索路径中的段数。 |
| | N 段意味着有段 `[0.N-1]`；段 J 由顶点 `J` 和 `J+1` 定义。 |
| | <pre lang="cpp">PF_PathNumSegments(<br/>  PF_ProgPtr         effect_ref0,<br/>  PF_PathOutlinePtr  pathP,<br/>  A_long      \*num_segmentsPL);</pre> |
| `PF_PathVertexInfo` | 检索指定路径的 `PF_PathVertex`。 |
| | 点的范围是 `[0.num_segments]`；对于闭合路径，`vertex[0] == vertex[num_segments]`。 |
| | <pre lang="cpp">PF_PathVertexInfo(<br/>  PF_ProgPtr         effect_ref0,<br/>  PF_PathOutlinePtr  pathP,<br/>  A_long      which_pointL,<br/>  PF_PathVertex      \*vertexP);</pre> |
| `PF_PathPrepareSegLength` | 这个相当反直觉的函数通知 After Effects 您将要询问段的长度（使用下面的 `PF_PathGetSegLength`），并且它最好做好准备。 |
| | `frequencyL` 表示您希望我们采样长度的次数；我们的内部效果使用 100。 |
| | <pre lang="cpp">PF_PathPrepareSegLength(<br/>  PF_ProgPtr         effect_ref0,<br/>  PF_PathOutlinePtr  pathP,<br/>  A_long      which_segL,<br/>  A_long      frequencyL,<br/>  PF_PathSegPrepPtr  \*lengthPrepPP);</pre> |
| `PF_PathGetSegLength` | 检索给定段的长度。 |
| | <pre lang="cpp">PF_PathGetSegLength(<br/>  PF_ProgPtr         effect_ref0,<br/>  PF_PathOutlinePtr  pathP,<br/>  A_long      which_segL,<br/>  PF_PathSegPrepPtr  \*lengthPrepP0,<br/>  PF_FpLong   \*lengthPF);</pre> |
| `PF_PathEvalSegLength` | 检索沿给定路径段长度 `lengthF` 的点的位置。 |
| | <pre lang="cpp">PF_PathEvalSegLength(<br/>  PF_ProgPtr         effect_ref0,<br/>  PF_PathOutlinePtr  pathP,<br/>  PF_PathSegPrepPtr  \*lengthPrepPP0,<br/>  A_long      which_segL,<br/>  PF_FpLong   lengthF,<br/>  PF_FpLong   \*x,<br/>  PF_FpLong   \*y);</pre> |
| `PF_PathEvalSegLengthDeriv1` | 检索沿给定路径段长度 `lengthF` 的点的位置和一阶导数。 |
| | 如果您不确定为什么需要这个，请不要使用它。数学很难。 |
| | <pre lang="cpp">PF_PathEvalSegLengthDeriv1(<br/>  PF_ProgPtr         effect_ref0,<br/>  PF_PathOutlinePtr  pathP,<br/>  PF_PathSegPrepPtr  \*lengthPrepPP0,<br/>  A_long      which_segL,<br/>  PF_FpLong   lengthF,<br/>  PF_FpLong   \*x,<br/>  PF_FpLong   \*y,<br/>  PF_FpLong   \*deriv1x,<br/>  PF_FpLong   \*deriv1y);</pre> |
| `PF_PathCleanupSegLength` | 当您完成评估该段长度时调用此函数，以便 After Effects 可以正确清理 `PF_PathSegPrepPtr`。 |
| | <pre lang="cpp">PF_PathCleanupSegLength(<br/>  PF_ProgPtr         effect_ref0,<br/>  PF_PathOutlinePtr  pathP,<br/>  A_long      which_segL,<br/>  PF_PathSegPrepPtr  \*lengthPrepPP);</pre> |
| `PF_PathIsInverted` | 如果路径反转，则返回 `TRUE`。 |
| | <pre lang="cpp">PF_PathIsInverted(<br/>  PF_ProgPtr  effect_ref,<br/>  PF_PathID   unique_id,<br/>  PF_Boolean  \*invertedB);</pre> |
| `PF_PathGetMaskMode` | 检索给定路径的模式。 |
| | <pre lang="cpp">PF_PathGetMaskMode(<br/>  PF_ProgPtr   effect_ref,<br/>  PF_PathID    unique_id,<br/>  PF_MaskMode  \*modeP);</pre> |
| | 遮罩模式是以下之一： |
| | - `PF_MaskMode_NONE` |
| | - `PF_MaskMode_ADD` |
| | - `PF_MaskMode_SUBTRACT` |
| | - `PF_MaskMode_INTERSECT` |
| | - `PF_MaskMode_LIGHTEN` |
| | - `PF_MaskMode_DARKEN` |
| | - `PF_MaskMode_DIFFERENCE` |
| | - `PF_MaskMode_ACCUM` |
| `PF_PathGetName` | 检索路径的名称（最多 `PF_MAX_PATH_NAME_LEN` 长度）。 |
| | <pre lang="cpp">PF_PathGetName(<br/>  PF_ProgPtr  effect_ref,<br/>  PF_PathID   unique_id,<br/>  A_char      \*nameZ);</pre> |

---

## PF_PathQuerySuite1

此套件用于识别和访问与特效源图层关联的路径。

| 函数 | 用途 |
|---|---|
| `PF_NumPaths` | 检索与特效源图层关联的路径数量。 |
| | <pre lang="cpp">PF_NumPaths(<br/>  PF_ProgPtr  effect_ref,<br/>  A_long      \*num_pathsPL);</pre> |
| `PF_PathInfo` | 检索指定路径的 PF_PathID。 |
| | <pre lang="cpp">PF_PathInfo(<br/>  PF_ProgPtr  effect_ref,<br/>  A_long      indexL,<br/>  PF_PathID   \*unique_idP);</pre> |
| `PF_CheckoutPath` | 获取指定时间的路径的 PF_PathOutlinePtr。 |
| | <pre lang="cpp">PF_CheckoutPath(<br/>  PF_ProgPtr         effect_ref,<br/>  PF_PathID   unique_id,<br/>  A_long      what_time,<br/>  A_long      time_step,<br/>  A_u_long    time_scale,<br/>  PF_PathOutlinePtr  \*pathPP);</pre> |
| `PF_CheckinPath` | 将路径释放回 After Effects。无论遇到任何错误条件，始终执行此操作。 |
| | 每次检出都必须通过检入来平衡，否则将导致问题。 |
| | <pre lang="cpp">PF_CheckinPath(<br/>  PF_ProgPtr         effect_ref,<br/>  PF_PathID   unique_id,<br/>  PF_Boolean         changedB,<br/>  PF_PathOutlinePtr  pathP);</pre> |
