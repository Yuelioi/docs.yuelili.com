---
title: 任意数据参数
---
# 任意数据参数

某些值无法通过 After Effects 现有的参数类型充分表示。通过创建任意数据类型的参数（即“arb data”），您可以创建并注册任何数据以供 After Effects 进行插值。您可以依赖我们的插值引擎和参数管理，而不必将数据强制放入预定义的参数类型中。

我们为自定义数据类型创建了一个新的消息传递结构，这些结构可以轻松地概念化为 C++ 类的成员（和友元）函数。如果您使用 arb data，则必须响应此处详细说明的所有选择器。

这些函数处理自定义数据结构管理。您的 arb data 将根据用户的意愿卸载和重新加载；请提供磁盘安全的扁平化和反扁平化函数。

---

## 任意数据选择器

| 选择器 | 响应 |
|---|---|
| `PF_Arbitrary_NEW_FUNC` | 分配、填充并返回您的 arb data 新实例的句柄。 |
| `PF_Arbitrary_DISPOSE_FUNC` | 释放并销毁您的任意数据类型的实例。 |
| `PF_Arbitrary_COPY_FUNC` | 复制现有实例。您将获得两个句柄，但只有源句柄包含有效实例。您必须创建一个新实例，从源实例复制值，并将其放入目标句柄中。如果传递了 NULL 句柄，请创建您的 arb data 的默认实例。 |
| `PF_Arbitrary_FLAT_SIZE_FUNC` | 您将获得一个指向您的数据类型实例的句柄，以及一个变量，您可以在其中返回该实例的扁平化版本的大小。 |
| `PF_Arbitrary_FLATTEN_FUNC` | 扁平化传递的实例，并将其放入提供的缓冲区中。缓冲区的大小将是您在响应 `PF_Arbitrary_FLAT_SIZE_FUNC` 时报告的大小。 |
| `PF_Arbitrary_UNFLATTEN_FUNC` | 将缓冲区解包为您的任意数据类型的实例，并将其放入传递的句柄中。 |
| `PF_Arbitrary_INTERP_FUNC` | 您的插值函数将获得三个指向您的任意数据类型实例的句柄；一个包含初始值（0），一个包含最终值（1），第三个用于保存插值数据（介于 0 和 1 之间）。您还将获得一个浮点数，指示插值值应位于 0 和 1 之间的位置。 |
| | 分配一个实例并填充插值数据。然后将插值实例放入传递的句柄中。在计算归一化时间值时，速度曲线已经被考虑在内。 |
| | !!! 注意 |
| | 如果 [in_data>effect_ref](../../effect-basics/PF_InData#pf_indata-members) 为 NULL，切勿检出参数。 |
| `PF_Arbitrary_COMPARE_FUNC` | 您将获得两个任意数据的实例，以及一个指向比较结果的指针。使用 `PF_ArbCompareResult` 的值之一填充结果（参见 `AE_Effect.h`），以指示第一个实例是否等于、小于、大于或仅不等于第二个实例。 |
| `PF_Arbitrary_PRINT_SIZE_FUNC` | 通过设置 `print_sizePLu`（`print_size_func_params` 的成员，属于 `PF_ArbParamsExtra` 结构的一部分）来指示打印参数当前值所需的缓冲区大小。 |
| `PF_Arbitrary_PRINT_FUNC` | 为基于文本的导出格式化您的任意数据，并将结果复制到缓冲区中。这可以像您希望的那样复杂。 |
| | 您的插件应模拟 After Effects 附带的插件显示的剪切和粘贴行为，以便将参数设置的文本表示粘贴到其他应用程序（例如 Microsoft Excel 电子表格）中。 |
| | 您在格式化输出方面有很大的灵活性。 |
| `PF_Arbitrary_SCAN_FUNC` | 给定一个文本数据缓冲区（通常来自系统剪贴板），将其解析为您的任意数据格式。 |

---

## 实现任意数据

除了常规的命令和事件选择器外，arb data 还需要另一组主机交互。这对于其他参数类型是透明的，因为 After Effects 管理它们的表示数据。编写 arb data 插件将使您深入了解 After Effects 执行的大量参数管理，以及这些管理操作的执行顺序。它甚至可能让您重新考虑您的实现，并使用 After Effects 为您管理的参数类型。

实例化您的 arb data（当然，使用 After Effects 的内存分配函数），并将 `ParamDef.u.arb_d.dephault` 指向它。使用适当的默认值填充它。设置参数时不需要值变量；为了安全起见，将其置零。

在插件的入口函数中，包含一个处理 [PF_Cmd_ARBITRARY_CALLBACK](../../effect-basics/command-selectors#messaging) 的 case。

调用一个次级事件处理程序 `HandleArbitrary`。它在 `extra` 中接收一个 `PF_ArbParamsExtra`，其中包含一个标识发送命令的 `PF_FunctionSelector`。

也许 After Effects 发送了 `PF_Cmd_ARBITRARY_CALLBACK`，并且 `PF_FunctionSelector` 是 `PF_Arbitrary_COPY_FUNC`。`PF_ArbParamsExtra.copy_func_params` 中提供了指向源和目标 Arb 的指针。分配一个新的 Arb，并将 `dest_arbPH` 指向它。如果 `src_arbH` 为 NULL，则为 `dest_arbPH` 创建一个默认的 Arb。

用户可能会在时间轴面板中选择 arb 的关键帧数据，复制它，然后切换到另一个应用程序。您将收到 `PF_Arbitrary_PRINT_SIZE_FUNC`；通过设置 `PF_ArbParamsExtra` 中的 `print_sizePLu` 来设置输出缓冲区的大小。然后您将收到 `PF_Arbitrary_PRINT_FUNC`；用相关 Arb 的文本表示填充 `print_bufferPC` 输出缓冲区。

用户可能会将关键帧数据粘贴到您的 Arb 的时间轴中。您将收到 `PF_Arbitrary_SCAN_FUNC`。根据传递给您的字符缓冲区的内容创建一个 Arb（其大小在 `print_sizeLu` 中指示）。

---

## 任意数据？重入性

您的插件代码*必须*是递归可重入的，以支持自定义数据类型，因为它可能会被 After Effects 调用以应对多种原因。您的插件可能会检出一个图层，而该图层又依赖于您的效果的另一个实例。您的插件的任意数据处理代码将因您尝试检出（看似）无关的图层而触发。请注意对依赖于通过全局变量访问的静态值的 C 运行时库的调用。如果您没有为此做好准备，您将使 After Effects 挂起，用户会诅咒并击打他们的显示器。

---

## 何时不访问任意参数

如果 `in_data>effect_ref` 为 `NULL`，请不要检出任意参数。

---

## 对话框期间的更改

After Effects 会忽略在 `PF_Cmd_DO_DIALOG` 期间对任意数据参数所做的任何更改。

这是设计使然；在选项对话框显示期间所做的更改会影响整个效果流，而不仅仅是给定时间的任意参数。

如果您必须根据这些更改调整 arb 的行为，请将该信息保存在序列数据中，并在稍后应用，通常在 `PF_Cmd_USER_CHANGED_PARAM` 期间。
