---
title: 全局、序列和帧数据
---
# 全局、序列和帧数据

After Effects 允许插件在三个范围内存储数据：全局、序列和帧。请仔细考虑信息的存储位置；选择不当可能会影响性能，或使您的插件对用户造成困惑。

使用全局数据存储所有效果实例共有的信息：静态变量和数据、位图、指向其他 DLL 或外部应用程序的指针。如果您的效果支持多帧渲染，任何静态或全局变量必须避免竞态条件（有关更多信息，请参见[效果线程安全意味着什么？](../multi-frame-rendering-in-ae#what-does-it-mean-for-an-effect-to-be-thread-safe)）。

将特定于插件实例的任何内容（UI 设置、文本字符串以及未存储在参数中的任何自定义数据）存储在序列数据中或新的[多帧渲染计算缓存](../multi-frame-rendering-in-ae#compute-cache-for-multi-frame-rendering)中。

帧数据用于存储特定于渲染给定帧的信息。这种做法已经不再常见，因为大多数机器能够一次性将整个帧加载到内存中。当然，您的 IMAX 生成用户仍然会欣赏您所做的任何优化。

---

## 持久性

After Effects 将序列数据保存在项目文件中，但不保存全局或帧数据。序列数据中指向外部数据的指针在重新打开项目时很可能无效，必须重新连接。我们将此过程称为序列数据的“扁平化”和“反扁平化”。

:::note
计算缓存不会将其内容存储到项目文件中。缓存中存储的数据必须在渲染期间重新创建。
:::

---

## 验证序列数据

对于跨时间进行模拟的效果，序列数据的仔细验证非常重要，其中帧 N 依赖于帧 N-1，并且您在序列数据中使用计算数据的缓存。如果更改了参数，某些计算数据可能不再有效，但在每次更改后盲目地重新计算所有内容也是浪费的。

当被要求渲染帧 N 时，假设您已经计算了到帧 N-1 的缓存数据，调用 `PF_GetCurrentState()` / `PF_AreStatesIdentical()`（来自 [PF_ParamUtilSuite3](../parameter-supervision#pf_paramutilsuite3)）以查看在当前参数设置下，计算数据的缓存是否仍然有效。

所有参数的状态（除了设置了 [PF_ParamFlag_EXCLUDE_FROM_HAVE_INPUTS_CHANGED](../../effect-basics/PF_ParamDef#parameter-flags) 的参数），包括图层参数（包括 [param[0]](../../effect-basics/PF_ParamDef#param-zero)）在传递的时间跨度内都会被检查。

这是高效完成的，因为更改跟踪是通过时间戳完成的。

如果输入没有更改，您可以安全地使用缓存，并且内部缓存系统将假设您对传递的范围有时间依赖性。因此，如果上游发生更改，主机的缓存将自动正确失效。

要测试其是否正常工作，请应用您的效果，并在每一帧上设置一个参数关键帧。使用 RAM 预览填充缓存，然后更改其中一个关键帧。相关帧和所有依赖帧（例如，在模拟的情况下，后续帧）应失去其缓存标记并需要重新渲染。同样，对图层参数源的上游更改应导致缓存的时间选择性失效。

---

## 扁平化和反扁平化的序列数据

如果您的序列数据引用外部内存（通过指针或句柄），您必须对数据进行扁平化和反扁平化处理以实现磁盘安全存储。这类似于创建您自己的微型文件格式。

在收到 [PF_Cmd_SEQUENCE_FLATTEN](../../effect-basics/command-selectors#sequence-selectors) 时，将指针引用的数据放入一个连续的块中，以便稍后恢复旧结构。

如果您的序列数据包含指向 long 的指针，请分配 4 个字节来存储扁平化数据。您必须处理平台特定的字节顺序。

请记住，您的用户（那些购买了两份您的插件的用户）可能希望同一个项目在 macOS 和 Windows 上都能工作。

After Effects 在重新加载数据时发送 [PF_Cmd_SEQUENCE_RESETUP](../../effect-basics/command-selectors#sequence-selectors)，无论是扁平化还是非扁平化数据。

在两种结构中的公共偏移处使用标志来指示数据的状态。

```cpp
typedef struct {
 A_char* messageZ;
 PF_FpLong big_numF;
 void* temp_storage;
} non_flat_data;

typedef struct {
 char message[256];
 PF_FpLong big_numF;
 A_Boolean big_endianB;
} flat_data;
```

---

## 调整序列数据大小

在 [PF_Cmd_SEQUENCE_SETUP](../../effect-basics/command-selectors#sequence-selectors) 期间，为特定于效果实例的数据分配一个句柄。

您可以在任何选择器期间修改序列数据的内容，但不能修改其大小。

您只能在以下选择器期间调整序列数据句柄的大小：

- `PF_Cmd_AUDIO_SETUP`
- `PF_Cmd_AUDIO_SETDOWN`
- `PF_Cmd_FRAME_SETUP`
- `PF_Cmd_FRAME_SETDOWN`
- `PF_Cmd_AUDIO_RENDER`
- `PF_Cmd_RENDER`
- `PF_Cmd_SEQUENCE_SETUP`
- `PF_Cmd_SEQUENCE_SETDOWN`
- `PF_Cmd_SEQUENCE_FLATTEN`
- `PF_Cmd_SEQUENCE_RESETUP`
- `PF_Cmd_DO_DIALOG`

---

## 在多帧渲染期间访问序列数据

在为效果启用多帧渲染时，`sequence_data` 对象在渲染期间将是只读/常量，并且可以通过 `PF_EffectSequenceDataSuite1` 套件在每个渲染线程上访问。

### PF_EffectSequenceDataSuite1

| 函数 | 用途 |
| --- | --- |
| `PF_GetConstSequenceData` | 在为效果启用多帧渲染时，检索渲染线程的只读常量 sequence_data 对象。 |
| | `<pre lang="cpp">`PF_Err(*PF_GetConstSequenceData)(``PF_ProgPtr effect_ref,``  PF_ConstHandle \*sequence_data);`</pre>` |

```cpp
static PF_Err Render(
 PF_InData *in_dataP,
 PF_OutData *out_dataP,
 PF_ParamDef *params[],
 PF_LayerDef *output )
{
 PF_ConstHandle seq_handle;

 AEFX_SuiteScoper<PF_EffectSequenceDataSuite1> seqdata_suite =
 AEFX_SuiteScoper<PF_EffectSequenceDataSuite1>(
 in_dataP,
 kPFEffectSequenceDataSuite,
 kPFEffectSequenceDataSuiteVersion1,
 out_dataP);

 PF_ConstHandle const_seq;
 seqdata_suite->PF_GetConstSequenceData(in_data->effect_ref, &const_seq);

 // 将 const_seq 转换为存储到 sequence_data 时使用的类型

 // 渲染函数的其余代码...
}
```
