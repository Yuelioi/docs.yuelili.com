---
title: 访问函数套件
---
# 访问 After Effects 函数套件

如果你正在编写 C++ 代码，访问套件时应使用 `AEFX_SuiteScoper`，它会在需要时自动获取套件，并在使用完毕后释放它。

以下是一个使用 `AEFX_SuiteScoper` 访问 `PF_GPUDeviceSuite1` 套件的示例：

```cpp
AEFX_SuiteScoper<PF_GPUDeviceSuite1> gpu_suite = AEFX_SuiteScoper<PF_GPUDeviceSuite1>(
 in_dataP,
 kPFGPUDeviceSuite,
 kPFGPUDeviceSuiteVersion1,
 out_dataP);
```

:::note

如果 `ALLOW_NO_SUITE` 设置为 `true`，则在使用之前应检查返回的指针是否为 `NULL`。
:::

一旦你获取了套件，就可以调用套件列表中的任何函数，例如：

```cpp
gpu_suite->GetDeviceInfo(in_dataP->effect_ref, extraP->input->device_index, &device_info);
```

如果你必须使用 C 代码，则可以使用 `PF_Suite_Helper` 工具文件手动获取和释放套件，如 Checkout 示例项目中所示。

在幕后，这两种方法都使用 `AcquireSuite` 获取 PICA 函数套件，`AcquireSuite` 是 `PF_InData` 中指向的 `SPBasicSuite` 的成员函数。

---

## 套件版本

`WhizBangSuite1` 可能提供一个带有两个参数的 `Foobar()` 函数，而 `WhizBangSuite2` 的 `Foobar()` 可能带有三个参数。尽管每个新版本的套件都会取代旧版本，但你可以自由获取同一套件的多个版本；我们从不删除或修改之前发布的套件。

当不确定插件宿主的功能时（除了 Premiere 之外，没有第三方宿主支持 PICA），尝试获取最新版本，并“回退”到之前的版本。如果你所需的功能不可用，请警告用户并返回错误（或在运行于更“原始”的插件宿主时回退到其他行为）。请注意，这些套件在其他 After Effects 插件宿主中的支持情况是一个错综复杂的迷宫。

---

## 线程

除非另有说明，否则假设我们套件提供的任何函数都不是线程安全的。例如，只有插件的主线程才能执行任何修改用户界面的操作。
