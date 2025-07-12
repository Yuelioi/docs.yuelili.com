---
title: 参数
---
# 参数

参数是随时间变化的值流；源图像、滑块、角度、点、颜色、路径以及用户可以操作的任何任意数据类型。

它们以 `PF_ParamDefs` 数组的形式传递给插件，尽管数组中的值仅在特定的选择器期间有效。

After Effects 效果 API 的最佳特性之一是参数插值和管理。

在 29.97 fps 帧的四分之一期间，快门角度变化了多少？这不是你的问题；交给 After Effects 处理。

在 [PF_Cmd_PARAM_SETUP](../command-selectors#global-selectors) 期间使用 [PF_ADD_PARAM](../../effect-details/interaction-callback-functions#interaction-callbacks) 描述插件的参数。

你可以拥有多达（大约）38 亿个参数，或者用户愿意在要求退款之前筛选的尽可能多的参数。明智选择。

在注册之前，使用 `AEFX_CLR_STRUCT`（在 `AE_Macros.h` 中定义）清除 `PF_ParamDefs`，以避免无数问题。

---

## 参数类型

| 参数类型 | 参数类型 | PF_ParamDefUnion 成员 | 参数值数据类型 | 描述 |
|---|---|---|---|---|
| `PF_Param_LAYER` | [PF_LayerDef](../PF_EffectWorld) | `ld` | `A_long` | 合成中的图像和音频层。所有效果自动至少有一个层参数 `param[0]`，即应用效果的层。 |
| | | | | 当用作效果参数时，这些参数显示为下拉菜单，用户可以在当前合成中选择一个层。 |
| | | | | 下拉菜单内容由 After Effects 生成。 |
| | | | | 注意：这是对包含像素和音频样本的层的引用，而不是实际的像素和音频样本。 |
| `PF_Param_SLIDER` | `PF_SliderDef` | `sd` | `long` | 不再使用。 |
| `PF_Param_FIX_SLIDER` | `PF_FixedSliderDef` | `fd` | `PF_Fixed` | 已弃用。多年来，我们推广了固定滑块。现在我们推荐使用 `PF_Param_FLOAT_SLIDER`。 |
| | | | | 额外的精度在许多情况下有帮助，而且不像以前那样昂贵。此外，我们也厌倦了低字节/高字节的愚蠢行为。 |
| | | | | `FIX_SLIDER` 提供比 `PF_Param_SLIDER` 更高的精度。可以独立指定 UI 小数位数。 |
| | | | | 忽略 `PF_Fixed` 的低字以获得整数结果。 |
| `PF_Param_FLOAT_SLIDER` | `PF_FloatSliderDef` | `fs_d` | `PF_FPLong` | 滑块表示数值。`FLOAT_SLIDER` 包含用于音频滤波器的相位、精度和曲线容差的值。 |
| | | | | 指定最小值和最大值，用户可以通过移动滑块或输入数字来指定设置。 |
| | | | | `PF_Param_FLOAT_SLIDER` 还响应 [音频滤波器](../../audio/audio-considerations#audio-considerations) 中讨论的滑块标志。 |
| `PF_Param_ANGLE` | `PF_AngleDef` | `ad` | `PF_Fixed` | 角度以（定点）度数表示，精确到小部分度。 |
| | | | | 用户可以指定多次旋转，导致值大于 360。 |
| `PF_Param_CHECKBOX` | `PF_CheckBoxDef` | `bd` | `PF_Boolean` | 所有复选框都强制启用 `PF_ParamFlag_CANNOT_INTERP`。 |
| `PF_Param_COLOR` | `PF_ColorDef` | `cd` | `PF_Pixel` | 用户可以使用标准颜色选择器或吸管工具选择的 RGB 值（不使用 alpha）。 |
| | | | | 对于浮点精度，使用 [PF_ColorParamSuite1](../../effect-details/parameters-floating-point-values#pf_colorparamsuite1) 来检索值。 |
| `PF_Param_POINT` | `PF_PointDef` | `td` | `PF_Fixed` | 二维点。该点提供目标层空间中的 x 和 y 值。 |
| | | | | 层的原点是左上角，x 向右增加，y 向下增加。 |
| | | | | 从 CS5.5 开始，对于浮点精度，使用 [PF_PointParamSuite1](../../effect-details/parameters-floating-point-values#pf_pointparamsuite1) 来检索值。 |
| | | | | 历史小知识：在 API 规范版本 12.1（After Effects 4.0）之前，点的默认值在 0 到 100 之间，以定点表示，小数点在第 16 位（即标准定点）。 |
| | | | | 在定点中指定 (50,50) 会得到图像的中心。你为点控件返回的值是以绝对像素表示的，具有一些定点精度位数。 |
| | | | | 因此，如果你将 (50,50) 作为默认位置，并且用户将效果应用于 640 x 480 的层，你将被发送的默认值将是 (320, 240) 定点。 |
| | | | | 指定 API 版本早于 12.1 的插件仍将获得旧行为。 |
| `PF_Param_POPUP` | `PF_PopupDef` | `pd` | `A_long` | 选择列表。在 `namesptr` 中构建一个包含（只读）弹出条目列表的字符串（"Entry1 / Entry2 / Entry3"）。 |
| | | | | After Effects 复制数据并创建弹出菜单。 |
| | | | | 一旦添加了参数，这些条目就不能修改。 |
| | | | | 条目 "(-" 将在前后条目之间绘制分隔符。 |
| `PF_Param_ARBITRARY_DATA` | `PF_ArbitraryDef` | `arb_d` | `???` | 自定义数据类型。 |
| | | | | [任意数据参数](../../effect-details/arbitrary-data-parameters) 包含一个 ID（你可以在一个效果中使用多个自定义数据类型）、一个默认值（以便 After Effects 知道你的数据类型应该以什么开始）以及你的实际参数的句柄。 |
| | | | | 在 AE 中，必须指定 `PF_PUI_TOPIC` / `PF_PUI_CONTROL` 或 `PF_PUI_NO_ECW`。 |
| | | | | 在 PPro 8.0 及更高版本中，可以不设置这些标志，这允许你在效果控件的右侧看到参数的关键帧轨道，而无需创建自定义控件。 |
| `PF_Param_PATH` | `PF_PathDef` | `path_d` | `PF_PathID` | 路径参数是对应用于与效果相同层的蒙版的引用。 |
| | | | | 路径参数数据不能直接访问；使用 [PF_PathQuerySuite1](../../effect-details/working-with-paths#pf_pathquerysuite1) 和 [PF_PathDataSuite](../../effect-details/working-with-paths#pf_pathdatasuite) 来管理和查询路径。 |
| | | | | `PF_PathDef.path_id` 包含用户选择的蒙版的索引。 |
| | | | | 可以使用 [AEGP_MaskSuite6](../../aegps/aegp-suites#aegp_masksuite6) 中的 `AEGP_GetLayerMaskByIndex` 获取相应的 `AEGP_MaskRefH`。 |
| `PF_Param_GROUP_START` | (无) | | | 参数组（主题）将参数组织成集合。 |
| `PF_Param_GROUP_END` | (无) | | | 每个组都有自己的展开/折叠按钮，并且将在 ECP 中相对于相邻参数或组进行缩进。 |
| | | | | 一个组可以嵌套在另一个组中。 |
| | | | | 每个展开/折叠按钮可以由用户或效果程序化地展开或折叠。 |
| | | | | 效果可以选择让某些组在初始化时展开，而其他组在初始化时折叠。 |
| `PF_Param_BUTTON` | `PF_Button` | `button_d` | (无值) | 简单的按钮。使用 [参数监督](../../effect-details/parameter-supervision) 来检测按钮何时被按下。 |
| | | | | 在 CS5.5 中新增到 After Effects。 |
| `PF_Param_POINT_3D` | `PF_Point3D` | `point3d_d` | `PF_FpLong (3)` | 三维点。 |
| | | | | 在 CS5.5 中新增。在 Premiere Pro 中不支持。 |

---

## 滑块范围问题？

如果你的滑块似乎被禁用但没有变灰，请检查 `valid_min`、`slider_min`、`valid_max` 和 `slider_max` 字段。参数是 `PF_Param_FIX_SLIDER` 吗？如果是，你是否将最小值和最大值转换为合理的定点值？如果你使用 `AE_Macros.h` 中提供的宏，它们期望接收整数；传递定点值将不起作用。

---

## 点参数原点

After Effects 修改任何点参数以考虑由“上游”效果引入的原点偏移，这些效果修改了输出尺寸。即使 ECP UI 指示点参数的值为 (0,0)，偏移量已经被考虑在内。
