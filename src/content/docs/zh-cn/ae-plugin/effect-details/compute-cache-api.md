---
title: 计算缓存 API
---
# 计算缓存 API

计算缓存 API 提供了一个线程安全的缓存，作为序列数据的替代或补充，效果可以在渲染之前或期间计算、存储和读取数据。它应该用于缓存那些计算耗时的数据。对于多帧渲染效果，它可以通过消除跨线程的冗余计算带来巨大的好处。缓存与 After Effects 中的其他缓存统一，因此内存使用在其他缓存之间是平衡的。该模型还支持用户对参数进行 A/B 测试，并且缓存状态在 A 和 B 状态下都保持不变，从而加快工作流程。最后这两个设计特性对单帧和多帧渲染效果都有好处。

计算缓存在 AEGP_ComputeCache 套件中实现，并通过 `AEGP_ComputeCacheSuite1` 和 `AEGP_ComputeCacheCallbacks` 访问。

---

## AEGP_ComputeCacheSuite1

| 函数 | 用途 |
| --- | --- |
| `AEGP_ClassRegister` | 使用计算类的全局唯一标识符注册缓存类型，例如 "adobe.ae.effect.test_effect.cache_v_1"。 |
| | 应设置一个 `AEGP_ComputeCacheCallbacks` 类型的对象，其中包含 `AEGP_ComputeCacheSuite1` 所需的回调方法的函数指针。 |
| | 此函数通常在 `PF_Cmd_GLOBAL_SETUP` 期间调用，但可以在任何时候调用。 |
| | `<pre lang="cpp">`A_Err (*AEGP_ClassRegister)(``AEGP_CCComputeClassIdP  compute_classP,``  const AEGP_ComputeCacheCallbacks  \*callbacksP);`</pre>` |
| `AEGP_ClassUnRegister` | 使用计算类的全局唯一标识符注销先前注册的缓存类型。 |
| | 此时将通过调用 `delete_compute_value` 清除所有缓存值。 |
| | 此函数通常在 `PF_Cmd_GLOBAL_SETDOWN` 期间调用，但可以在任何时候调用。 |
| | `<pre lang="cpp">`A_Err (*AEGP_ClassUnregister)(``  AEGP_CCComputeClassIdP    compute_classP);`</pre>` |
| `AEGP_ComputeIfNeededAndCheckout` | 这是主要的签出调用，用于计算和/或返回 `AEGP_CCCheckoutReceiptP` 收据指针到缓存条目。 |
| | 传入在 `AEGP_RegisterClass` 方法中使用的 `AEGP_CCComputeClassIdP`。 |
| | `AEGP_CCComputeOptionsRefconP` 对象将根据需要传递给 `AEGP_ComputeCacheCallbacks` 的 `generate_key` 和 `compute` 方法。此对象的类型对 `AEGP_ComputeCacheSuite1` 是不透明的，需要由效果的 `generate_key` 和 `compute` 实现适当地进行类型转换。 |
| | `wait_for_other_threadB bool` 用于当需要计算缓存值时。当设置为 `true` 时，该方法将始终执行计算步骤或返回一个已完成的收据到缓存。当设置为 `false` 时，此方法将完成计算步骤，除非另一个线程已经在计算缓存条目，在这种情况下将返回 `A_Err_NOT_IN_CACHE_OR_COMPUTE_PENDING`。 |
| | 有关此参数的更多信息，请参见[wait_for_other_threadB 对 AEGP_ComputeIfNeededAndCheckout 的影响](#impact-of-wait_for_other_threadb-on-aegp_computeifneededandcheckout)。 |
| | `CCCheckoutReceiptP` 是一个不透明的指针，可以传递给 `AEGP_GetReceiptComputeValue` 以从缓存中获取计算值的指针。 |
| | `<pre lang="cpp">`A_Err (*AEGP_ComputeIfNeededAndCheckout)(``AEGP_CCComputeClassIdP    compute_classP,``  AEGP_CCComputeOptionsRefconP  opaque_optionsP,``bool  wait_for_other_threadB,``  AEGP_CCCheckoutReceiptP   \*compute_receiptPP);`</pre>` |
| `AEGP_CheckoutCached` | 使用此方法检查缓存值是否已经计算，如果可用则返回 `AEGP_CCCheckoutReceiptP` 收据。 |
| | 如果缓存尚未计算，将返回 `A_Err_NOT_IN_CACHE_OR_COMPUTE_PENDING`。 |
| | `<pre lang="cpp">`A_Err (*AEGP_CheckoutCached)(``AEGP_CCComputeClassIdP    compute_classP,``  AEGP_CCComputeOptionsRefconP    opaque_optionsP,``  AEGP_CCCheckoutReceiptP   \*compute_receiptPP);`</pre>` |
| `AEGP_GetReceiptComputeValue` | 使用此方法从计算方法中检索缓存值。 |
| | 传入从 `AEGP_ComputeIfNeededAndCheckout` 或 `AEGP_CheckoutCached` 收到的收据。 |
| | 返回的 `CCComputeValueRefconP` 应转换为在 `compute` 方法中使用的正确对象类型。 |
| | `<pre lang="cpp">`A_Err (*AEGP_GetReceiptComputeValue)(``const AEGP_CCCheckoutReceiptP   compute_receiptP,``  AEGP_CCComputeValueRefconP    \*compute_valuePP);`</pre>` |
| `AEGP_CheckinComputeReceipt` | 在效果代码使用完签出的计算缓存值后，返回主机之前调用此方法，传入从 `AEGP_ComputeIfNeededAndCheckout` 或 `AEGP_CheckoutCached` 返回的收据。 |
| | 如果传入的收据无效，将返回错误 `A_Err_STRUCT`。还会弹出一个错误对话框，显示以下消息：*"尝试签入无效收据。请确保您没有重复签入或签入无效收据。"* |
| | `<pre lang="cpp">`A_Err (*AEGP_CheckinComputeReceipt)(``  AEGP_CCCheckoutReceiptP   compute_receiptP );`</pre>` |

---

## AEGP_ComputeCacheCallbacks

效果必须为这些回调提供实现。

| 函数 | 用途 |
| --- | --- |
| `generate_key` | 在创建缓存条目和进行缓存查找时调用。应快速计算。所有唯一寻址缓存条目所需的输入必须哈希到键中。如果需要层签出来计算缓存值（例如直方图），则必须包含该输入的哈希。 |
| | 参见 `PF_ParamUtilsSuite::PF_GetCurrentState` 以获取层参数的哈希。请注意，这是生成帧所需输入的哈希，而不是帧中像素的哈希，因此在调用时不会触发渲染。 |
| | `AEGP_CCComputeOptionsRefconP` 将包含传递给 `AEGP_ComputeIfNeededAndCheckout` 或 `AEGP_CheckoutCached` 方法的数据。 |
| | `AEGP_CComputeKeyP` `out_keyP` 返回哈希键值，请参见 `AE_ComputeCacheSuite.h` 中的 `AEGP_CCComputeKey` 定义以获取类型定义。 |
| | !!! 注意 |
| | 传递给 `generate_key` 和 `compute` 的 `AEGP_CCComputeOptionsRefconP` 参数必须包含所有输入以计算缓存值的哈希键/计算缓存值本身。 |
| | 这通常包括许多或所有效果参数以及计算缓存值所需的任何层参数。有关更多详细信息，请参见[实际集成示例](#real-world-integration-example)。 |
| | `<pre lang="cpp">`A_Err (*generate_key)(``AEGP_CCComputeOptionsRefconP   optionsP,``  AEGP_CCComputeKeyP   out_keyP);`</pre>` |
| `compute` | 当需要计算缓存值时，由 `AEGP_ComputeIfNeededAndCheckout` 调用。 |
| | `AEGP_CCComputeOptionsRefconP` 将包含传递给 `AEGP_ComputeIfNeededAndCheckout` 方法的数据。 |
| | 将 `out_valuePP` 设置为指向计算缓存值的结果，转换为 `AEGP_CCComputeValueRefconP` 类型。 |
| | 例如： |
| | `<pre lang="cpp">`\*out_valuePP = reinterpret_cast<AEGP_CCComputeValueRefconP>(myComputedResultP);`</pre>` |
| | `<pre lang="cpp">`A_Err (*compute)(``AEGP_CCComputeOptionsRefconP   optionsP,``  AEGP_CCComputeValueRefconP   \*out_valuePP);`</pre>` |
| `approx_size_value` | 由缓存系统调用以确定计算缓存值使用的总内存占用。计算值不需要是扁平结构。 |
| | 大小是缓存清除启发式算法的输入。 |
| | `AEGP_CCComputeValueRefconP` 是可用于生成返回大小值的计算缓存值。 |
| | `<pre lang="cpp">`size_t (*approx_size_value)(``  AEGP_CCComputeValueRefconP   valueP);`</pre>` |
| `delete_compute_value` | 当需要清除缓存条目时调用此函数以释放值。必须在此处释放缓存值拥有的所有资源。 |
| | `<pre lang="cpp">`void (*delete_compute_value)(``  AEGP_CCComputeValueRefconP   valueP);`</pre>` |

---

## 生成键

`generate_key` 回调必须在注册类内返回一个唯一键，用作缓存条目的缓存键，但为了未来的兼容性，我们强烈建议该键在所有注册类中是全局唯一的。AE SDK 提供了 `AEGP_HashSuite1` 套件来帮助生成可用作键的 GUID。

`generate_key` 的结果必须作为 `AEGP_CCComputeKey` 对象提供，该对象从以下结构体类型定义：

```cpp
typedef struct AEGP_GUID {
 A_long bytes[4];
} AEGP_GUID;
```

---

## AEGP_HashSuite1

`AEGP_HashSuite1` 可用于生成唯一键，供 `AEGP_ComputeCacheCallbacks` 的 `generate_key()` 回调方法使用。

获取套件后，使用缓冲区调用 `AEGP_CreateHashFromPtr()` 方法；我们建议使用一个带有可识别字符串的字符数组，以便您可以轻松回忆缓存条目中存储的内容。然后调用 `AEGP_HashMixInPtr()`，传入任何效果参数、层签出哈希结果等，这些应导致不同的缓存键和条目。

| 函数 | 用途 |
| --- | --- |
| `AEGP_CreateHashFromPtr` | 调用此函数以开始创建哈希，该哈希将在 `hashP` 中返回，可用于从 `generate_key` 返回。 |
| | `<pre lang="cpp">`A_Err (*AEGP_CreateHashFromPtr)(``const A_u_longlong buf_sizeLu,``  const void \*bufPV,``  AEGP_GUID \*hashP);`</pre>` |
| `AEGP_HashMixInPtr` | 为每个效果参数、层签出哈希或其他用于计算缓存条目的数据调用此函数。 |
| | `<pre lang="cpp">`A_Err(*AEGP_HashMixInPtr)(``const A_u_longlong buf_sizeLu,``  const void \*bufPV,``  AEGP_GUID \*hashP);`</pre>` |

以下是一个使用 `AEGP_HashSuite1` 的示例，其中 `Levels2Histo_generate_key_cb()` 是 `generate_key()` 的回调：

```cpp
A_Err Levels2Histo_generate_key_cb(AEGP_CCComputeOptionsRefconP opaque_optionsP, AEGP_CCComputeKeyP out_keyP)
{
 try
 {
 const Levels2Histo_options& histo_op( *reinterpret_cast<Levels2Histo_options*>(opaque_optionsP));
 A_Err err = Err_NONE;

 AEFX_SuiteScoper<AEGP_HashSuite1> hash_suite = AEFX_SuiteScoper<AEGP_HashSuite1>(
 in_dataP,
 kAEGPHashSuite,
 kAEGPHashSuiteVersion1,
 out_dataP);

 // 定义一个易于识别的简单缓冲区作为起始哈希
 const char* hash_buffer = "Level2Histo";
 err = hash_suite->AEGP_CreateHashFromPtr(sizeof(hash_buffer), hash_buffer, out_keyP);

 // 混合效果参数，这些参数将创建不同的计算结果，并应生成不同的缓存条目和键。
 if (!err) {
 err = hash_suite->AEGP_HashMixInPtr(sizeof(histo_op.depthL), &histo_op.depthL, out_keyP);
 }

 if (!err) {
 err = hash_suite->AEGP_HashMixInPtr(sizeof(histo_op.bB), &histo_op.bB, out_keyP);
 }

 // 混合任何其他应影响缓存键的效果参数
 // ...

 // out_keyP 作为生成的键返回，用作缓存键。
 }
 catch (...)
 {
 /* 返回最合适的 PF_Err */
 }
}
```

---

## 计算或签出缓存值

在添加缓存支持时，首先要回答的问题之一是单个渲染调用是否需要签出多个缓存值。如果需要多个缓存值来完成渲染，则可以应用多签出模式，以跨多个渲染调用并发计算缓存，从而避免计算的串行化。

### 单个缓存值

如果渲染调用只需要一个缓存值来渲染帧，则将 `AEGP_ComputeIfNeededAndCheckout` 中的 `wait_for_other_threadB` 参数设置为 `true`。签出调用将返回一个收据，可能会调用计算回调来填充缓存；或者等待另一个已经启动所需计算的线程。

### 多签出缓存值

如果渲染调用需要多个缓存值，则可以使用多签出模式来保持渲染线程的利用率，从而避免计算的串行化。

使用多签出的概念是让一个渲染线程（例如渲染帧 3）利用其他渲染线程（例如帧 1、2）并发计算所需的缓存值（例如帧 3 需要帧 1 和 2 的数据）。如果没有其他线程正在计算请求的缓存值，则渲染线程（帧 3）将执行计算。一旦所有缓存值签出调用完成，渲染线程（帧 3）可以等待其他线程（帧 1、2）完成计算，然后再执行像素渲染。一旦像素渲染完成，请确保签入所有签出的缓存值（帧 1、2 和 3）。

以下是说明此方法的示例伪代码。

```cpp
Render()
{
 // 为完成渲染所需的每个缓存值发出请求
 bool first_err = AEGP_ComputeIfNeededAndCheckout(first_options, do_not_wait, first_cache_receipt);
 bool second_err = AEGP_ComputeIfNeededAndCheckout(second_options, do_not_wait, second_cache_receipt);
 // 在此处添加尽可能多的 do_not_wait 签出调用。

 // 一旦所有请求发出，检查是否有任何签出未返回有效的签出收据。
 if(first_err == A_Err_NOT_IN_CACHE_OR_COMPUTE_PENDING) {
 AEGP_ComputeIfNeededAndCheckout(wait, first_cache_receipt);
 }
 if(second_err == A_Err_NOT_IN_CACHE_OR_COMPUTE_PENDING) {
 AEGP_ComputeIfNeededAndCheckout(wait, second_cache_receipt);
 }
 // 在此处添加尽可能多的等待签出调用。

 // 现在可以通过 AEGP_GetReceiptComputeValue 获取所有缓存值以用于渲染。

 // ... 完成渲染步骤。

 // 现在签入所有缓存值。
 AEGP_CheckinComputeReceipt(first_cache_receipt);
 AEGP_CheckinComputeReceipt(second_cache_receipt);
}
```

---

## wait_for_other_threadB 对 AEGP_ComputeIfNeededAndCheckout 的影响

对 `AEGP_ComputeIfNeededAndCheckout` 的调用将在几乎所有参数排列中返回缓存值的签出收据，除了当 `wait_for_other_threadB` 设置为 `false` 并且另一个线程已经在渲染请求的缓存值时。

| 缓存状态 | `wait_for_other_threadB` 设置为 `False` | `wait_for_other_threadB` 设置为 `True` |
| --- | --- | --- |
| *无缓存键* | 计算并返回签出收据 | 计算并返回签出收据 |
| *正在由另一个线程计算* | 返回 A_Err_NOT_IN_CACHE_OR_COMPUTE_PENDING | 等待另一个线程并在完成后返回签出收据 |
| | 请注意，After Effects 不会向用户报告此错误，它仅用于效果响应。 | |
| *已缓存* | 返回签出收据 | 返回签出收据 |

---

## 检查缓存状态

* 在某些场景下，效果可能需要检查缓存值是否已计算，但不想在实际执行或等待另一个线程完成计算时阻塞。这可以通过 `AEGP_CheckoutCached()` 方法实现。
* 此调用可用于实现轮询模式，其中另一段代码预计会填充缓存。例如，UI 线程可以轮询缓存以获取在渲染线程上生成的直方图。
* 如果缓存值可用，`AEGP_CCCheckoutReceiptP` 参数将返回一个签出收据，可以将其传递给 `AEGP_GetReceiptComputeValue()` 以检索缓存值。如果缓存值不可用，该方法将返回 `A_Err_NOT_IN_CACHE_OR_COMPUTE_PENDING` 错误代码。

---

## 缓存的持久性

* 与扁平化的序列数据不同，计算缓存的内容不会与项目一起存储，任何计算的内容在项目重新打开时都需要重新计算。
* 如果 After Effects 需要内存用于其他操作，缓存中的条目将自动清除。依赖缓存值可用的代码应假设每次都需要完成计算步骤。
* `approx_size_value` 回调应快速返回，但应提供缓存条目所持有数据的合理准确测量。这将使 After Effects 能够更好地决定何时清除哪些内容。
* 注销缓存类将从缓存中删除该类的所有数据。这将导致为与缓存类关联的每个缓存条目调用 `delete_compute_value` 回调。
* `delete_compute_value` 回调应释放与缓存条目相关的任何资源。计算缓存仅包含指向资源的 void \* 指针，无法代表效果释放资源。

---

## 实际集成示例

随 After Effects 附带的 Auto Color 插件是一个现在利用计算缓存和 `HashSuite1` 套件来缓存直方图和级别数据的效果，当效果参数“时间平滑”设置为大于 0 的值时使用。

集成缓存和哈希套件的初始步骤是确定 Auto Color 的时间平滑正在计算哪些数据，哪些部分的计算是耗时的，然后哪些效果参数会导致需要重新计算。

:::note
每个效果都需要计算和缓存不同的数据，因此您需要为您的效果进行独特的审查。
:::

对于 Auto Color 的时间平滑，正在渲染的帧需要来自其周围帧的直方图和级别数据。所需的周围帧数量基于时间平滑参数的值。直方图和级别数据的计算可能很昂贵，但通常可以为每个帧计算一次，缓存，然后根据需要重复使用。

然而，Auto Color 效果中还有许多其他参数用于计算缓存值，包括黑剪裁、白剪裁、中间色调和 Auto Color 模式。因此，这些参数需要包含在 `generate_key` 和 `compute` 方法中。

有了这些信息后，我们开始了计算缓存的集成：

1. 定义类注册 ID 并添加调用以注册和注销签出缓存类和回调
 * 调用 `AEGP_ClassRegister` 在 `PF_Cmd_GLOBAL_SETUP` 期间执行。
 * 调用 `AEGP_ClassUnregister` 在 `PF_Cmd_GLOBAL_SETDOWN` 期间执行。
2. 实现 `generate_key`、`compute`、`approx_size_value` 和 `delete_compute_value` 的回调函数。
 * `generate_key` 使用 `AEGP_HashSuite1` 生成一个唯一的键，混合了黑剪裁、白剪裁、中间色调和自动级别模式。它还混合了帧时间和时间步长，以确保缓存对于正在计算的特定帧是唯一的。
 * `compute` 计算直方图和级别，并将这两个数据结构存储到单个结构中，该结构设置为 `compute` 回调中的 `out_valuePP` 参数。
 * `approx_size_value` 添加缓存值中的直方图和级别数据结构的 `sizeof()` 以返回缓存条目使用的内存大小。
 * `delete_compute_value` 清除缓存条目中直方图和级别数据结构持有的内存。
3. 将计算/签出调用集成到时间平滑中
 * 时间平滑代码已更新，包括对 `AEGP_ComputeIfNeededAndCheckout` 的调用。这些调用是为时间平滑算法所需的每个帧时间/时间步长进行的，利用了其他渲染线程计算周围帧直方图和级别数据的结果。
4. 集成缓存签出和签入
 * 一旦为帧计算了所有所需的缓存值，效果代码就会使用 `AEGP_GetReceiptComputeValue` 签出所需的缓存值。
 * 然后，缓存值用作时间平滑算法的一部分，以调整帧的颜色。
 * 一旦当前帧不再需要缓存值，就会为每个缓存值收据调用 `AEGP_CheckinComputeReceipt`。
 * Auto Color 目前不使用 `AEGP_CheckoutCached`。
5. 测试 sequence_data 与计算缓存实现的对比
 * Auto Color 使用 sequence_data 存储直方图和级别数据，在使用计算缓存之前，它会在每个渲染线程上有一个唯一的 sequence_data 副本。这意味着每个帧所需的每个直方图和级别都需要在每个线程上渲染。
 * 随着使用计算缓存的更改，每个正在渲染的帧都获得了其他渲染线程计算直方图和级别数据并将其存储以供将来使用的性能优势。
 * 使用计算缓存渲染 Auto Color 效果的速度比 sequence_data 版本至少快 3 倍。
