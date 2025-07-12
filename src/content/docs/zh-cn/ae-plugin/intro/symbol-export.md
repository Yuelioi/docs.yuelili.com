---
title: 导出符号
---
# 在 Effects 中导出符号

After Effects 团队最近发现了一个与符号冲突相关的问题，该问题违反了 C++ 语言的“单一定义规则”（ODR）。

2021 年初，After Effects 使用的 Boost 库版本升级到了 1.74。在过去的几个月中，我们发现一些插件也在使用 Boost，但它们以某种方式导出符号，导致 After Effects 或插件可能最终调用错误的 Boost 版本，从而导致用户遇到程序挂起或崩溃的问题。我们还发现，AE SDK 示例中的一些设置默认导出了所有符号，这可能是问题的原因之一，假设这些示例被用作其他插件的起点。这些问题已在 2021 年 3 月的 SDK 中修复。

**After Effects 唯一需要导出的符号是插件的入口函数。**

可以在 SDK 示例的 `entry.h` 中找到示例：

```cpp
#ifdef AE_OS_WIN
 #define DllExport __declspec( dllexport )
#elif defined AE_OS_MAC
 #define DllExport __attribute__ ((visibility ("default")))
#endif
```

然后将其应用于入口函数，例如：

```cpp
extern "C" DllExport
PF_Err PluginDataEntryFunction(
 PF_PluginDataPtr inPtr,
 PF_PluginDataCB inPluginDataCallBackPtr,
 SPBasicSuite* inSPBasicSuitePtr,
 const char* inHostName,
 const char* inHostVersion)
{
 PF_Err result = PF_Err_INVALID_CALLBACK;

 result = PF_REGISTER_EFFECT(
 inPtr,
 inPluginDataCallBackPtr,
 "ColorGrid", // 名称
 "ADBE ColorGrid", // 匹配名称
 "Sample Plug-ins", // 类别
 AE_RESERVED_INFO); // 保留信息

 return result;
}
```

---

## 禁用 Xcode 符号导出

要在 Xcode 中禁用符号导出：

1. 在项目的 **Build** 设置中找到 **Apple Clang - Code Generation** 部分。
2. 将 **Symbols Hidden By Default** 设置为 **YES**。

![Apple Clang Symbols](../_static/appleclang-symbols.png "Apple Clang Symbols")
*Apple Clang 符号*

对于必须公开的任何特定符号，请在代码中使用 `__attribute__((visibility("default")))`。

更多信息可以在 Apple 的 Xcode 文档中找到：[https://help.apple.com/xcode/mac/11.4/#/itcaec37c2a6](https://help.apple.com/xcode/mac/11.4/#/itcaec37c2a6)（摘录如下）：

> **Symbols Hidden by Default (GCC_SYMBOLS_PRIVATE_EXTERN)**
>
> 启用后，除非在代码中明确使用 `__attribute__((visibility("default")))` 标记为导出，否则所有符号都声明为私有外部符号。如果未启用，除非明确标记为私有外部符号，否则所有符号都会被导出。

---

## 禁用 Visual Studio 导出

默认情况下，Visual Studio 的构建会自动禁用符号导出。要导出符号，您必须提供模块定义文件或在函数定义中设置 `__declspec(dllexport)` 关键字。

更多信息可以在 Microsoft 的 Visual Studio 文档中找到：[https://docs.microsoft.com/en-us/cpp/build/exporting-from-a-dll?view=msvc-160](https://docs.microsoft.com/en-us/cpp/build/exporting-from-a-dll?view=msvc-160)（摘录如下）：

> 您可以使用两种方法从 DLL 导出函数：
>
> 1. 创建一个模块定义文件（.def），并在构建 DLL 时使用该文件。如果您希望通过序号而不是名称从 DLL 导出函数，请使用此方法。
> 2. 在函数定义中使用 `__declspec(dllexport)` 关键字。
>
> 使用这两种方法导出函数时，请确保使用 `__stdcall` 调用约定。
