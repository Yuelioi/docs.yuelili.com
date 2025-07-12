---
title: Apple Silicon 支持
---
# Apple Silicon 支持

Adobe 现在支持在部分原生运行于 Apple Silicon 的产品中使用 Apple Silicon 效果插件。例如，After Effects 的效果插件也可以在 Adobe Premiere Pro 和 Adobe Media Encoder 中使用。

并非所有 Adobe 产品都有原生的 Apple Silicon 版本，但在那些支持的产品中，只有具有 Apple Silicon 实现的效果插件才可用。我们建议尽快添加 Apple Silicon 目标，以应对这些新 M1 机器的快速普及。

:::note
为了构建 Mac 通用二进制文件，您需要 Xcode 12.2 或更高版本。Adobe 目前使用的是 Xcode 12.4。
:::

要了解更多关于通用二进制文件的信息，请访问 [https://developer.apple.com/documentation/apple-silicon/building-a-universal-macos-binary](https://developer.apple.com/documentation/apple-silicon/building-a-universal-macos-binary)

---

## 如何为您的插件添加通用二进制支持

1. 在 Xcode 12.2 或更高版本中打开您的插件项目，Xcode 将自动为您添加 Apple Silicon 目标。

![Mac 通用构建](../_static/mac_universal_build.png "Mac 通用构建")
*Mac 通用构建*

2. 告诉 After Effects Apple Silicon 构建的主入口函数是什么。

> * 找到您的插件的 .r 资源文件。
> * 在现有的 Intel Mac 入口函数定义旁边添加 `CodeMacARM64 {"EffectMain"}`。
>
> ```cpp
> #if defined(AE_OS_MAC)
> CodeMacARM64 {"EffectMain"},
> CodeMacIntel64 {"EffectMain"},
> #endif
> ```
>
> * 如果由于某些原因您需要在 x64 和 ARM 上使用不同的入口函数，只需提供不同的入口函数名称和字符串即可。

3. 通过为“Any Mac (Apple Silicon, Intel)”目标构建或使用 Product -> Archive 来编译通用二进制文件。

假设 Apple Silicon 构建没有编译时问题，您现在可以为 Intel 和 Apple Silicon 应用程序使用单一的通用二进制文件。

---

## 跨“C”函数的 Apple Silicon 异常行为

在 Apple Silicon 上使用异常时应格外小心。在许多环境中，通过传统的“C”函数传播的异常抛出通常可以正常工作。虽然这是不良实践，具有未定义行为，但通常“有效”。

在 Apple Silicon 上，ABI 已更改，因此当发生这种情况时，会调用 terminate() 而不是未定义行为。

由于插件的主入口函数始终是 extern "C" 调用约定，因此应将该代码包装在 try/catch 块中以防止程序终止。例如：

```cpp
PF_Err EffectMain ( PF_Cmd cmd,
 PF_InData *in_data,
 PF_OutData *out_data,
 PF_ParamDef *params[],
 PF_LayerDef *output )
{
 try
 {
 /* 您的代码在这里 */
 }
 catch
 {
 /* 返回最合适的 PF_Err */
 }
}
```
