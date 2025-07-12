---
title: AE 中的多帧渲染
---
# AE 中的多帧渲染

为了充分利用现代硬件中更多的 CPU 核心和线程，After Effects 2022 及以上版本现在支持多帧渲染（Multi-Frame Rendering）。多帧渲染（MFR）允许多个帧同时渲染，从而加快 AE 合成的渲染和导出速度。

第三方效果可以通过 AE Effects SDK 启用多帧渲染支持，方法是设置以下 `PF_OutFlag`：

```cpp
PF_OutFlag2_SUPPORTS_THREADED_RENDERING
```

此标志表示该效果支持在多个线程上同时渲染。可以在多个线程上同时调用此效果在图层上的单个或多个应用来渲染。在设置此标志之前，效果必须是线程安全的。请参阅下面的 [效果线程安全是什么意思？](#效果线程安全是什么意思) 部分以获取更多信息。

:::note
当 After Effects 使用多帧渲染时，未设置此标志且非线程安全的效果将强制每个渲染线程一次一个线程地进入和退出效果代码。这将显著降低 MFR 提供的性能改进，因此会在效果控制窗口中显示警告图标以提醒用户性能影响。
:::

---

对于需要在渲染期间写入 `sequence_data` 的效果，提供了一个标志以实现向后兼容：

```cpp
PF_OutFlag2_MUTABLE_RENDER_SEQUENCE_DATA_SLOWER
```

每个渲染线程都将拥有自己的 `sequence_data` 实例，该实例不与其他渲染线程共享或同步。如果存储在 `sequence_data` 中的数据计算耗时，则应使用新的 [多帧渲染的计算缓存](#多帧渲染的计算缓存)。

:::note
使用 `PF_OutFlag2_MUTABLE_RENDER_SEQUENCE_DATA_SLOWER` 标志需要针对 2021 年 3 月 SDK 或更高版本进行编译。
:::

---

## 2021 年 3 月 SDK 中的多帧渲染效果更新

2021 年 3 月 SDK 引入了新的 `sequence_data` 行为，该行为从 AE beta 版本 22.0x6（2021 年 6 月 29 日发布）开始启用。使用 2020 年 6 月 SDK 编译的任何效果必须使用 2021 年 3 月 SDK 重新编译以支持多帧渲染。效果还必须向 AE 报告它们至少使用 13.25 版本编译，但建议使用 SDK 常量 `PF_AE_PLUG_IN_VERSION` 和 `PF_AE_PLUG_IN_SUBVERS` 自动设置相关的 SDK。

下表概述了效果需要进行的更改以支持新行为：

| MFR 和 Sequence Data 使用情况 | 2021 年 3 月 SDK 所需更改 |
|---|---|
| 插件未设置 `PF_OutFlag2_SUPPORTS_THREADED_RENDERING` | 无需更改。效果和 `sequence_data` 将继续像过去一样工作。 |
| 插件设置了 `PF_OutFlag2_SUPPORTS_THREADED_RENDERING` 但在渲染期间既不读取也不写入 `sequence_data` | 使用 2021 年 3 月 SDK 重新编译插件，无需其他代码更改。 |
| | 如果插件未使用 2021 年 3 月 SDK 编译，则从 AE 22.0x6 开始，插件将停止使用 MFR。 |
| 插件设置了 `PF_OutFlag2_SUPPORTS_THREADED_RENDERING` 但在渲染期间仅读取 `sequence_data` | 使用 2021 年 3 月 SDK 重新编译插件，通过 `PF_EffectSequenceDataSuite1` 更新读取 `sequence_data` 以实现线程安全访问。有关更多信息，请参阅 [多帧渲染时在渲染时访问 sequence_data](../global-sequence-frame-data#多帧渲染时在渲染时访问-sequence_data)。 |
| 插件设置了 `PF_OutFlag2_SUPPORTS_THREADED_RENDERING` 并在渲染期间读取和写入 `sequence_data` | 使用 2021 年 3 月 SDK 重新编译插件并修改插件以： |
| | 1. 使用 [计算缓存 API](../compute-cache-api#计算缓存-api) 进行线程安全的缓存访问，而不是直接读取/写入 `sequence_data`。有关更多信息，请参阅 [多帧渲染的计算缓存](#多帧渲染的计算缓存)。和/或 |
| | 2. 添加 `PF_OutFlag2_MUTABLE_RENDER_SEQUENCE_DATA_SLOWER` 标志以恢复对 `sequence_data` 的直接读取/写入访问。 |

:::note
使用 2021 年 3 月 SDK 编译并使用 `PF_OutFlag2_SUPPORTS_THREADED_RENDERING` 标志以及可选的 `PF_OutFlag2_MUTABLE_RENDER_SEQUENCE_DATA_SLOWER` 标志的效果将从 AE beta 版本 18.0 开始工作，此时引入了 `PF_EffectSequeceDataSuite1`。如果需要支持两种 `sequence_data` 行为，请检查此套件是否存在。
:::

---

## 多帧渲染对命令选择器的影响

UI 选择器仍然在主线程上发送，但 `PF_Cmd_SEQUENCE_SETUP`、`PF_Cmd_SEQUENCE_RESETUP`、`PF_Cmd_SEQUENCE_SETDOWN`、`PF_Cmd_SMART_PRE_RENDER`、`PF_Cmd_RENDER` 和 `PF_Cmd_SMART_RENDER` 可能会在多个线程上同时发送，而 UI 选择器正在处理，因此所有这些选择器都必须是线程安全的。

`PF_Cmd_GLOBAL_SETUP` 和 `PF_Cmd_GLOBAL_SETDOWN` 选择器将仅在主线程上发送，并且不会与其他任何选择器同时发送。

---

## 多帧渲染中的 Sequence Data

多年来，`sequence_data` 对象和相关序列选择器被用于提供一种在效果生命周期内存储数据的方式。多帧渲染引入了一些需要注意的变化：

**2020 年 6 月的变化**

* 多帧渲染要求 After Effects 将 `sequence_data` 编组到渲染线程。为了使需要与 `PF_OutFlag_SEQUENCE_DATA_NEEDS_FLATTENING` 标志一起展平的效果的 `sequence_data` 高效，这些效果现在还必须设置 `PF_OutFlag2_SUPPORTS_GET_FLATTENED_SEQUENCE_DATA` 标志。

:::note
在未来的 After Effects 版本中，将强制执行设置 `PF_OutFlag2_SUPPORTS_GET_FLATTENED_SEQUENCE_DATA` 标志并在插件中处理相关选择器的要求。加载任何不符合此要求的效果时将添加警告对话框。
:::

**2021 年 3 月的变化**

* `sequence_data` 对象在渲染时读取时现在是 `const`，应通过 `PF_EffectSequenceDataSuite` 接口访问。
* 默认情况下，在渲染时写入 `sequence_data` 是被禁用的，如果在渲染时尝试写入 `sequence_data`，结果将是未定义的。
* 如果效果必须在渲染时写入 `sequence_data`，则必须设置 `PF_OutFlag2_MUTABLE_RENDER_SEQUENCE_DATA_SLOWER` 标志，这将告诉 After Effects 允许写入 `sequence_data`，但会以性能为代价。`sequence_data` 对象将在渲染开始时复制到每个渲染线程，并且每个渲染线程将在渲染的整个生命周期内管理自己的独立 `sequence_data` 副本。出于性能原因，建议使用 [多帧渲染的计算缓存](#多帧渲染的计算缓存) 来写入效果所需的任何数据。

---

## 多帧渲染的计算缓存

计算缓存提供了一个线程安全的缓存，作为序列数据的替代或补充，效果可以在渲染之前或期间计算、存储和读取数据。

### 何时使用计算缓存？

* 如果您的效果使用 `sequence_data` 并且需要在渲染期间写入或更新 `sequence_data`，尤其是当所需数据的计算耗时较长时，您应该使用计算缓存。
* 如果没有计算缓存，效果将需要添加 `PF_OutFlag2_MUTABLE_RENDER_SEQUENCE_DATA_SLOWER` 标志，这将为每个渲染线程创建唯一的 `sequence_data` 副本。然后，每个渲染线程可能需要独立执行耗时的计算，并且无法在渲染线程之间共享结果。
* 通过使用计算缓存，渲染线程可以共享计算数据的任务，并从中受益。
* 计算缓存 API 支持根据效果的需求进行单次或多次签出计算任务。有关更多信息，请参阅 [计算缓存 API](../compute-cache-api#计算缓存-api) 文档。

### 如何启用计算缓存？

计算缓存 API 从 2021 年 3 月 SDK 开始可用，并且在 After Effects 2022 及以上版本中默认启用。

有关实现细节和示例代码，请参阅 [计算缓存 API](../compute-cache-api#计算缓存-api) 文档。

---

## 效果线程安全是什么意思？

**当实现和共享数据保证没有竞争条件并且在并发访问时始终处于正确状态时，效果是线程安全的。**

更具体地说，效果：

1. 没有静态或全局变量，或者静态或全局变量没有竞争条件。
2. 不在渲染时写入 `in_data->global_data`。可以读取。仅在 `PF_Cmd_GLOBAL_SETUP` 和 `PF_Cmd_GLOBAL_SETDOWN` 中写入。
3. 不在渲染时或 `PF_Cmd_UPDATE_PARAMS_UI` 事件期间写入 `in_data->sequence_data`。可以通过 `PF_EffectSequenceDataSuite` 接口读取。

:::note
如果效果使用任何阻塞同步机制（例如互斥锁或门），则在回调主机时不得持有这些机制。常见的调用是在使用套件或进行签出调用时。如果不这样做，很可能会导致死锁。
:::

---

## 如何定位效果中的静态和全局变量

为了帮助您定位效果中的静态和全局变量，我们开发了一个 **静态分析工具** 供您使用。
您可以在以下 Git 仓库中找到该工具：[https://github.com/adobe/ae-plugin-thread-safety](https://github.com/adobe/ae-plugin-thread-safety)

### 在 MacOS 上

1. 克隆/下载上述 URL 中的 Git 仓库
2. 在 **Mac** 文件夹中找到 bash 脚本 `check_symbols_for_thread_safety.sh`
3. 导航到插件或效果的包内容中并找到二进制文件。（例如，**Curves.plugin** 的二进制文件位于：`/Applications/Adobe After Effects [您的 AE 版本]/Plug-ins/Effects/Curves.plugin/Contents/MacOS/Curves`）
4. 要分析二进制文件，请运行：

 ```sh
 check_symbols_for_thread_safety.sh [二进制文件位置]
 例如，check_symbols_for_thread_safety.sh /Applications/Adobe After Effects [您的 AE 版本]/Plug-ins/Effects/Curves.plugin/Contents/MacOS/Curves)
 ```

5. 您将看到工具的输出，格式如下：

 ```sh
 [符号类型]; [符号名称]
 ```

6. `[符号类型]` 是一个区分大小写的字母，表示变量的类型。您可以在此处找到所有类型信息：[https://linux.die.net/man/1/nm](https://linux.die.net/man/1/nm)
7. 以下是输出示例：

 ```cpp
 b; Deform::FindSilEdges()::new_kInfinite
 ```

 * `b` 显示此符号位于未初始化数据部分，表明它可能是一个静态变量。
 * `Deform::FindSilEdges()::new_kInfinite` 是符号名称，其中 `Deform` 是变量所在的命名空间名称。
 * `FindSilEdges()` 是变量所在的函数名称。
 * `new_kInfinite` 是实际的变量名称。根据变量的位置，可能不会显示命名空间和函数名称。
8. 在代码中搜索每个符号，修复它（请参阅 [此处](#如何定位效果中的静态和全局变量) 了解如何修复），并对解决方案中的每个二进制文件重复此操作

### 在 Windows 上

#### 准备工作

1. **要运行此工具，您需要安装 Visual Studio**
2. 克隆/下载上述 URL 中的 Git 仓库
3. 在 **Win** 文件夹中找到 `register_msdia.cmd` 脚本
4. 从 **开始菜单** 中搜索 **"x64 Native Tools Command Prompt for VS...."**
5. 右键单击 -> 以管理员身份运行
6. 在终端中，`cd` 到 `register_msdia.cmd` 所在的目录
7. 运行 `.\register_msdia.cmd`
8. 此脚本将为您注册 **DIA SDK** 和一些其他必需的依赖项
9. 静态分析工具应已准备好工作

#### 使用 Windows 静态分析工具

1. 在 **Win** 文件夹中找到可执行文件 `CheckThreadSafeSymbols.exe`
2. 以 **Debug** 模式编译您的效果并找到其 **.pdb** 文件
3. 如果您未修改项目构建设置，还应在同一构建目录中找到一些 **.obj** 文件
4. 您有 **两种选择** 来扫描内容：二进制文件或源文件，使用 `-objfile` 或 `-source` 标志。
 * 注意：您可以从任一选项中获得相同的符号。
 * 如果您不确定源代码最终位于哪些二进制文件中，或者如果您希望按源文件跟踪线程安全性，请使用 `-source` 选项。
 * 如果您希望对项目的扫描部分进行更精细的控制，请使用 `-objfile` 选项。
5. 要分析对象文件中的符号，请运行：

 ```bat
 CheckThreadSafeSymbols.exe -objfile [要分析的二进制文件的绝对路径] [.pdb 的绝对路径]
 ```

6. 要分析源文件中的符号，请运行：

 ```bat
 CheckThreadSafeSymbols.exe -source [要分析的源文件的绝对路径] [.pdb 的绝对路径]
 ```

7. 全局变量不限于 pdb 中的一个文件或二进制文件的范围，因此您必须检查所有项目全局变量的列表而不进行过滤。使用 `-g` 输出获取所有全局变量的列表：

 ```bat
 CheckThreadSafeSymbols.exe -g [.pdb 的绝对路径]
 ```

8. 如果您不确定效果输出的二进制文件，该工具还可以输出一个 **（嘈杂的）** 二进制文件列表，以及每个二进制文件从中提取数据的源文件。您更改的文件可能位于顶部附近。要查看列表，请运行：

 ```bat
 CheckThreadSafeSymbols.exe -sf [.pdb 的绝对路径]
 ```

9. 输出符号将采用以下形式：

 ```cpp
 [符号名称], [符号类型], [数据类型], ([数据位置的部分类型], [二进制地址][二进制地址偏移量])
 ```

10. 以下是输出示例：

 ```cpp
 menuBuf, Type: char[0x1000], File Static, (static, [0008FCD0][0003:00001CD0])
 ```

 * `menuBuf` 是实际的变量名称。
 * `Type: char[0x1000]` 显示变量的类型。此处数据为 `char`。
 * `File Static` 显示数据的类型。此处数据为 **文件范围的静态变量**。您可以在此页面上找到所有数据类型及其含义：[https://docs.microsoft.com/en-us/visualstudio/debugger/debug-interface-access/datakind?view=vs-2019](https://docs.microsoft.com/en-us/visualstudio/debugger/debug-interface-access/datakind?view=vs-2019)
 * `static` 显示数据位于内存的静态部分。
 * `[0008FCD0][0003:00001CD0]` 显示数据的二进制地址和二进制地址偏移量。
11. 在代码中搜索每个符号，修复它（请参阅 [此处](#如何定位效果中的静态和全局变量) 了解如何修复），并对解决方案中的每个二进制文件/源文件重复此操作

---

## 如果效果中有静态和全局变量该怎么办

当您看到静态或全局变量时，最好将其设为局部变量（如果可能）。但如果该变量必须是静态或全局的呢？

以下是一些处理静态或全局变量的标准方法：

### 数据是否可以在不改变行为的情况下轻松地在函数之间传递？

```cpp
// 非线程安全代码示例
static int should_just_be_local;

void UseState() {
 DoComputation(should_just_be_local);
}

void SetAndUseState() {
 should_just_be_local = DoComputation();
 UseState();
}
```

将其添加到结构体中或扩展函数参数以包含它：

```cpp
// 我们可以通过将 should_just_be_local 变量通过函数参数传递来修复上述代码

void UseState(int should_just_be_local) {
 DoComputation(should_just_be_local);
}

void SetAndUseState() {
 int should_just_be_local = DoComputation();
 UseState(should_just_be_local);
}
```

### 数据是否可以在执行代码之前初始化（例如查找表、常量变量）？

```cpp
// 非线程安全代码示例

// 代码中的许多地方需要读取此表但不会写入它
static int state_with_initializer[64];
static bool state_was_initialized = false;

void InitializeState() {
 for (int i = 0; i < 64; ++i) {
 state_with_initializer[i] = i * i;
 }
 state_was_initialized = true;
}

void Main() {
 if (!state_was_initialized) {
 InitializeState();
 }
 DoComputation(state_with_initializer);
}
```

将其设为 `const` 或用宏替换：

```cpp
std::array<int, 64> InitializeState() {
 std::array<int, 64> temp;

 for (int i = 0; i < 64; ++i) {
 temp[i] = i * i;
 }
 return temp;
}

// 我们可以通过将此表设为 const 并在使用前初始化它来修复上述代码
static const std::array<int, 64> state_with_initializer = InitializeState();

void Main() {
 DoComputation(state_with_initializer);
}
```

### 数据是否在运行时基于不会在后续渲染中更改的数据初始化一次？

```cpp
// 非线程安全代码示例
static int depends_on_unchanging_runtime_state;

void UseState() {
 DoComputation(depends_on_unchanging_runtime_state);
}

void SetAndUseState() {
 depends_on_unchanging_runtime_state = DoComputationThatNeedsStateOnlyOnce();
 UseState();
}
```

请仔细检查此状态是否在代码执行之前未知（情况2），但如果必须在运行时初始化，请使用 `const static` 局部变量。（请注意，静态局部对象的线程安全初始化是C++规范的一部分）：

```cpp
void UseState(int depends_on_unchanging_runtime_state) {
 DoComputation(depends_on_unchanging_runtime_state);
}

void SetAndUseState() {
 // 我们可以通过将变量设为 const static 局部变量来修复上述代码
 static const int depends_on_unchanging_runtime_state = DoComputationThatNeedsStateOnlyOnce();

 UseState(depends_on_unchanging_runtime_state);
}
```

### 数据必须保持静态/全局且不是常量。但每个渲染线程可以拥有自己的数据副本

```cpp
// 此变量必须是静态的且不是常量
static int this_thread_needs_access;

void SetState(int new_state) {
 this_thread_needs_access = new_state;
}

void UseState() {
 DoComputation(this_thread_needs_access);
}
```

只需将变量设为 `thread_local`：

```cpp
// 将此变量设为 thread_local 变量
thread_local static int this_thread_needs_access;

void SetState(int new_state) {
 this_thread_needs_access = new_state;
}

void UseState() {
 DoComputation(this_thread_needs_access);
}
```

### 数据必须保持静态/全局且不是常量，并且每个线程都需要从最新的状态中读取和写入。（罕见情况）

```cpp
// 此变量必须是静态的且不是常量
// 它还需要在多个线程之间共享
static int every_thread_needs_latest_state;

void SetState(int new_state) {
 every_thread_needs_latest_state = new_state;
}

void UseState() {
 DoComputation(every_thread_needs_latest_state);
}
```

在这种情况下，使用互斥锁保护访问：

```cpp
// 添加一个互斥锁（锁）
static std::mutex ex_lock;

static int every_thread_needs_latest_state;

void SetState(int new_state) {
 {
 // 使用互斥锁（锁）保护访问
 std::lock_guard<std::mutex> lock(ex_lock);
 every_thread_needs_latest_state = new_state;
 }
}

void UseState() {
 int state_capture;
 {
 // 使用互斥锁（锁）保护访问
 std::lock_guard<std::mutex> lock(ex_lock);
 state_capture = every_thread_needs_latest_state;
 }
 DoComputation(state_capture);
}
```

:::note
上述示例是我们效果中常见的案例。你可以根据需求提出其他处理静态和全局变量的方法。
:::

---

## 将效果设置为线程安全

* 在 `GlobalSetup` 中设置 `PF_OutFlag2_SUPPORTS_THREADED_RENDERING` 标志，以告知 After Effects 你的效果是线程安全的并支持多帧渲染。
* 如果需要，添加 `PF_OutFlag2_MUTABLE_RENDER_SEQUENCE_DATA_SLOWER` 以允许在渲染阶段写入 `sequence_data`。
* 更新 `AE_Effect_Global_OutFlags_2` 魔数。首次启动 AE 时不要更改魔数，应用你的效果后，AE 会给出正确的数字。
* 如果你使用 `PF_OutFlag_SEQUENCE_DATA_NEEDS_FLATTENING` 标志，请记得同时设置 `PF_OutFlag2_SUPPORTS_GET_FLATTENED_SEQUENCE_DATA` 标志。

---

## 如何测试效果是否线程安全

完成上述步骤使你的效果线程安全后，你现在应该准备好进行一些测试。

### 启用多帧渲染

* 多帧渲染在 After Effects 2022 中默认启用。
* 要切换 MFR 的开关，请导航到“首选项”>“内存与性能”>“性能”，并切换多帧渲染复选框。

### 测试你的效果

完成上述准备步骤后，彻底测试你的效果。你应该能够测试简单和复杂的合成，并看到效果利用多帧渲染带来的性能提升。

* 检查所有现有的手动和自动化测试计划。
* 测试所有效果参数，确保它们正常工作。
* 适当添加一些已经线程化的 AE 效果。请参阅[线程安全的第一方效果](#thread-safe-first-party-effects)部分。
* 确保在启用多帧渲染时没有崩溃、挂起、渲染差异或其他意外变化。

---

## 线程安全的第一方效果

访问 [https://helpx.adobe.com/after-effects/user-guide.html/after-effects/using/effect-list.ug.html](https://helpx.adobe.com/after-effects/user-guide.html/after-effects/using/effect-list.ug.html) 查看完整的 MFR 支持效果列表。每周都会添加更多效果。
