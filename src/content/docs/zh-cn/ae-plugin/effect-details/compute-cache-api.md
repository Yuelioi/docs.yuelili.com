---
title: 计算缓存 API
---
# 计算缓存 API

计算缓存 API 提供了一个线程安全的缓存，作为序列数据的替代或补充，效果可以在渲染之前或期间计算、存储和读取数据。它应该用于缓存那些计算耗时的数据。对于多帧渲染效果，它可以通过消除跨线程的冗余计算带来巨大的好处。缓存与 After Effects 中的其他缓存统一，因此内存使用在其他缓存之间是平衡的。该模型还支持用户对参数进行 A/B 测试，并且缓存状态在 A 和 B 状态下都保持不变，从而加快工作流程。最后这两个设计特性对单帧和多帧渲染效果都有好处。

计算缓存在 AEGP_ComputeCache 套件中实现，并通过 `AEGP_ComputeCacheSuite1` 和 `AEGP_ComputeCacheCallbacks` 访问。

---

## AEGP_ComputeCacheSuite1

| 函数                                | 用途                                                                                                                                                                                                                                                                                   |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AEGP_ClassRegister`              | 使用计算类的全局唯一标识符注册缓存类型，例如 "adobe.ae.effect.test_effect.cache_v_1"。                                                                                                                                                                                                 |
|                                     | 应设置一个 `AEGP_ComputeCacheCallbacks` 类型的对象，其中包含 `AEGP_ComputeCacheSuite1` 所需的回调方法的函数指针。                                                                                                                                                                  |
|                                     | 此函数通常在 `PF_Cmd_GLOBAL_SETUP` 期间调用，但可以在任何时候调用。                                                                                                                                                                                                                  |
|                                     | `<pre lang="cpp">`A_Err (*AEGP_ClassRegister)(``AEGP_CCComputeClassIdP  compute_classP,``  const AEGP_ComputeCacheCallbacks  \*callbacksP);`</pre>`                                                                                                                |
| `AEGP_ClassUnRegister`            | 使用计算类的全局唯一标识符注销先前注册的缓存类型。                                                                                                                                                                                                                                     |
|                                     | 此时将通过调用 `delete_compute_value` 清除所有缓存值。                                                                                                                                                                                                                               |
|                                     | 此函数通常在 `PF_Cmd_GLOBAL_SETDOWN` 期间调用，但可以在任何时候调用。                                                                                                                                                                                                                |
|                                     | `<pre lang="cpp">`A_Err (*AEGP_ClassUnregister)(``  AEGP_CCComputeClassIdP    compute_classP);`</pre>`                                                                                                                                                                      |
| `AEGP_ComputeIfNeededAndCheckout` | 这是主要的签出调用，用于计算和/或返回 `AEGP_CCCheckoutReceiptP` 收据指针到缓存条目。                                                                                                                                                                                                 |
|                                     | 传入在 `AEGP_RegisterClass` 方法中使用的 `AEGP_CCComputeClassIdP`。                                                                                                                                                                                                                |
|                                     | `AEGP_CCComputeOptionsRefconP` 对象将根据需要传递给 `AEGP_ComputeCacheCallbacks` 的 `generate_key` 和 `compute` 方法。此对象的类型对 `AEGP_ComputeCacheSuite1` 是不透明的，需要由效果的 `generate_key` 和 `compute` 实现适当地进行类型转换。                             |
|                                     | `wait_for_other_threadB bool` 用于当需要计算缓存值时。当设置为 `true` 时，该方法将始终执行计算步骤或返回一个已完成的收据到缓存。当设置为 `false` 时，此方法将完成计算步骤，除非另一个线程已经在计算缓存条目，在这种情况下将返回 `A_Err_NOT_IN_CACHE_OR_COMPUTE_PENDING`。      |
|                                     | 有关此参数的更多信息，请参见[wait_for_other_threadB 对 AEGP_ComputeIfNeededAndCheckout 的影响](#impact-of-wait_for_other_threadb-on-aegp_computeifneededandcheckout)。                                                                                                                    |
|                                     | `CCCheckoutReceiptP` 是一个不透明的指针，可以传递给 `AEGP_GetReceiptComputeValue` 以从缓存中获取计算值的指针。                                                                                                                                                                     |
|                                     | `<pre lang="cpp">`A_Err (*AEGP_ComputeIfNeededAndCheckout)(``AEGP_CCComputeClassIdP    compute_classP,``  AEGP_CCComputeOptionsRefconP  opaque_optionsP,``bool  wait_for_other_threadB,``  AEGP_CCCheckoutReceiptP   \*compute_receiptPP);`</pre>` |
| `AEGP_CheckoutCached`             | 使用此方法检查缓存值是否已经计算，如果可用则返回 `AEGP_CCCheckoutReceiptP` 收据。                                                                                                                                                                                                    |
|                                     | 如果缓存尚未计算，将返回 `A_Err_NOT_IN_CACHE_OR_COMPUTE_PENDING`。                                                                                                                                                                                                                   |
|                                     | `<pre lang="cpp">`A_Err (*AEGP_CheckoutCached)(``AEGP_CCComputeClassIdP    compute_classP,``  AEGP_CCComputeOptionsRefconP    opaque_optionsP,``  AEGP_CCCheckoutReceiptP   \*compute_receiptPP);`</pre>`                                                   |
| `AEGP_GetReceiptComputeValue`     | 使用此方法从计算方法中检索缓存值。                                                                                                                                                                                                                                                     |
|                                     | 传入从 `AEGP_ComputeIfNeededAndCheckout` 或 `AEGP_CheckoutCached` 收到的收据。                                                                                                                                                                                                     |
|                                     | 返回的 `CCComputeValueRefconP` 应转换为在 `compute` 方法中使用的正确对象类型。                                                                                                                                                                                                     |
|                                     | `<pre lang="cpp">`A_Err (*AEGP_GetReceiptComputeValue)(``const AEGP_CCCheckoutReceiptP   compute_receiptP,``  AEGP_CCComputeValueRefconP    \*compute_valuePP);`</pre>`                                                                                            |
| `AEGP_CheckinComputeReceipt`      | 在效果代码使用完签出的计算缓存值后，返回主机之前调用此方法，传入从 `AEGP_ComputeIfNeededAndCheckout` 或 `AEGP_CheckoutCached` 返回的收据。                                                                                                                                         |
|                                     | 如果传入的收据无效，将返回错误 `A_Err_STRUCT`。还会弹出一个错误对话框，显示以下消息：*"尝试签入无效收据。请确保您没有重复签入或签入无效收据。"*                                                                                                                                    |
|                                     | `<pre lang="cpp">`A_Err (*AEGP_CheckinComputeReceipt)(``  AEGP_CCCheckoutReceiptP   compute_receiptP );`</pre>`                                                                                                                                                             |

---

## AEGP_ComputeCacheCallbacks

效果必须为这些回调提供实现。

| 函数                     | 用途                                                                                                                                                             |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `generate_key`         | 在创建缓存条目和进行缓存查找时调用。应快速计算。所有唯一寻址缓存条目所需的输入必须哈希到键中。如果需要层签出来计算缓存值（例如直方图），则必须包含该输入的哈希。 |
|                          | 参见 `PF_ParamUtilsSuite::PF_GetCurrentState` 以获取层参数的哈希。请注意，这是生成帧所需输入的哈希，而不是帧中像素的哈希，因此在调用时不会触发渲染。           |
|                          | `AEGP_CCComputeOptionsRefconP` 将包含传递给 `AEGP_ComputeIfNeededAndCheckout` 或 `AEGP_CheckoutCached` 方法的数据。                                        |
|                          | `AEGP_CComputeKeyP` `out_keyP` 返回哈希键值，请参见 `AE_ComputeCacheSuite.h` 中的 `AEGP_CCComputeKey` 定义以获取类型定义。                               |
|                          | !!! 注意                                                                                                                                                         |
|                          | 传递给 `generate_key` 和 `compute` 的 `AEGP_CCComputeOptionsRefconP` 参数必须包含所有输入以计算缓存值的哈希键/计算缓存值本身。                             |
|                          | 这通常包括许多或所有效果参数以及计算缓存值所需的任何层参数。有关更多详细信息，请参见[实际集成示例](#real-world-integration-example)。                               |
|                          | `<pre lang="cpp">`A_Err (*generate_key)(``AEGP_CCComputeOptionsRefconP   optionsP,``  AEGP_CCComputeKeyP   out_keyP);`</pre>`                |
| `compute`              | 当需要计算缓存值时，由 `AEGP_ComputeIfNeededAndCheckout` 调用。                                                                                                |
|                          | `AEGP_CCComputeOptionsRefconP` 将包含传递给 `AEGP_ComputeIfNeededAndCheckout` 方法的数据。                                                                   |
|                          | 将 `out_valuePP` 设置为指向计算缓存值的结果，转换为 `AEGP_CCComputeValueRefconP` 类型。                                                                      |
|                          | 例如：                                                                                                                                                           |
|                          | `<pre lang="cpp">`\*out_valuePP = reinterpret_cast<AEGP_CCComputeValueRefconP>(myComputedResultP);`</pre>`                                                   |
|                          | `<pre lang="cpp">`A_Err (*compute)(``AEGP_CCComputeOptionsRefconP   optionsP,``  AEGP_CCComputeValueRefconP   \*out_valuePP);`</pre>`        |
| `approx_size_value`    | 由缓存系统调用以确定计算缓存值使用的总内存占用。计算值不需要是扁平结构。                                                                                         |
|                          | 大小是缓存清除启发式算法的输入。                                                                                                                                 |
|                          | `AEGP_CCComputeValueRefconP` 是可用于生成返回大小值的计算缓存值。                                                                                              |
|                          | `<pre lang="cpp">`size_t (*approx_size_value)(``  AEGP_CCComputeValueRefconP   valueP);`</pre>`                                                       |
| `delete_compute_value` | 当需要清除缓存条目时调用此函数以释放值。必须在此处释放缓存值拥有的所有资源。                                                                                     |
|                          | `<pre lang="cpp">`void (*delete_compute_value)(``  AEGP_CCComputeValueRefconP   valueP);`</pre>`                                                      |

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

| 函数                       | 用途                                                                                                                                                                |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AEGP_CreateHashFromPtr` | 调用此函数以开始创建哈希，该哈希将在 `hashP` 中返回，可用于从 `generate_key` 返回。                                                                             |
|                            | `<pre lang="cpp">`A_Err (*AEGP_CreateHashFromPtr)(``const A_u_longlong buf_sizeLu,``  const void \*bufPV,``  AEGP_GUID \*hashP);`</pre>` |
| `AEGP_HashMixInPtr`      | 为每个效果参数、层签出哈希或其他用于计算缓存条目的数据调用此函数。                                                                                                  |
|                            | `<pre lang="cpp">`A_Err(*AEGP_HashMixInPtr)(``const A_u_longlong buf_sizeLu,``  const void \*bufPV,``  AEGP_GUID \*hashP);`</pre>`       |

以下是一个使用 `AEGP_HashSuite1` 的示例，其中 `Levels2Histo_generate_key_cb()` 是 `generate_key()` 的回调：

```cpp
A_Err Levels2Histo_generate_key_cb(AEGP_CCComputeOptionsRefconP opaque_optionsP, AEGP_CCComputeKeyP out_keyP)
{
    try
    {
        const Levels2Histo_options&  histo_op( *reinterpret_cast<Levels2Histo_options*>(opaque_optionsP));
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

| 缓存状态                 | `wait_for_other_threadB` 设置为 `False`                    | `wait_for_other_threadB` 设置为 `True` |
| ------------------------ | -------------------------------------------------------------- | ------------------------------------------ |
| *无缓存键*             | 计算并返回签出收据                                             | 计算并返回签出收据                         |
| *正在由另一个线程计算* | 返回 A_Err_NOT_IN_CACHE_OR_COMPUTE_PENDING                     | 等待另一个线程并在完成后返回签出收据       |
|                          | 请注意，After Effects 不会向用户报告此错误，它仅用于效果响应。 |                                            |
| *已缓存*               | 返回签出收据                                                   | 返回签出收据                               |

---

## 检查缓存状态
