---
title: 入门指南
---
# 入门指南

## 设置示例项目

如果你正在开发一个过渡效果，可以从 SDK_CrossDissolve 示例项目开始，逐步将其功能替换为你自己的功能。有关如何构建示例项目的一般说明，请参考 [介绍](../../index)。

除了这些一般说明外，示例项目还依赖于 After Effects SDK。请在此处下载。在 Windows 上，创建一个名为 "AE_SDK_BASE_PATH" 的环境变量，指向该 SDK，以便编译器能够找到项目包含的 AE 头文件。

在 MacOS 上，在 XCode > 首选项 > 位置 > 自定义路径中，将 AE_SDK_BASE_PATH 指定为你下载并解压的 AE SDK 的根文件夹。

从 15.4 版本开始，Premiere Pro 不再支持 OpenCL。

如果你的过渡效果使用 CUDA，你需要下载 CUDA SDK。在 Windows 上，创建一个名为 "CUDA_SDK_BASE_PATH" 的环境变量，指向该 SDK，以便链接器能够找到正确的库。

---

## 兼容性注意事项

为了与不支持 AE 过渡扩展的插件主机兼容，插件应首先检查 PF_TransitionSuite 套件是否存在。如果该套件不可用，插件应作为普通效果运行。这在 SDK_CrossDissolve 示例项目中有所演示。
