---
title: 内存分配
---
# 内存分配

对于任何较大规模的内存分配，请使用 After Effects 提供的内存分配功能。对于小型分配，你可以使用 `new` 和 `delete`，但这是例外情况，而不是常规做法。在低内存条件下（例如在 RAM 预览期间），插件必须优雅地处理内存不足的情况，并且不要与 After Effects 竞争操作系统内存。通过使用我们的内存分配函数，After Effects 可以知道何时释放缓存的图像，以避免内存交换。如果不使用我们的函数进行大规模内存分配，可能会导致系统锁定、崩溃和技术支持电话。请不要这样做。

如果你正在包装现有的 C++ 类，请创建一个基类，为该类实现 `new` 和 `delete`，并从中派生。对于重载 STL，我们不建议你重载全局的 `new` 和 `delete`。相反，请在模板定义中提供一个分配器。

After Effects 传递给你的句柄在你被调用之前会被锁定，并在你返回后解锁。

---

## PF_HandleSuite1

| 函数 | 用途 | 替代函数 |
|---|---|---|
| `host_new_handle` | 分配一个新的句柄。 | `PF_NEW_HANDLE` |
| | <pre lang="cpp">PF_Handle (*host_new_handle)(<br/>  A_HandleSize size);</pre> | |
| `host_lock_handle` | 锁定一个句柄。 | `PF_LOCK_HANDLE` |
| | <pre lang="cpp">void (*host_lock_handle)(<br/>  PF_Handle pf_handle);</pre> | |
| `host_unlock_handle` | 解锁一个句柄。 | `PF_UNLOCK_HANDLE` |
| | <pre lang="cpp">void (*host_unlock_handle)(<br/>  PF_Handle pf_handle);</pre> | |
| `host_dispose_handle` | 释放一个句柄。 | `PF_DISPOSE_HANDLE` |
| | <pre lang="cpp">void (*host_dispose_handle)(<br/>  PF_Handle pf_handle);</pre> | |
| `host_get_handle_size` | 返回传入句柄所指向的可重新分配块的大小（以字节为单位）。 | `PF_GET_HANDLE_SIZE` |
| | <pre lang="cpp">A_HandleSize (*host_get_handle_size)(<br/>  PF_Handle pf_handle);</pre> | |
| `host_resize_handle` | 调整句柄的大小。 | `PF_RESIZE_HANDLE` |
| | <pre lang="cpp">PF_Err (*host_resize_handle)(<br/>  A_HandleSize new_sizeL, PF_Handle \*handlePH);</pre> | |
