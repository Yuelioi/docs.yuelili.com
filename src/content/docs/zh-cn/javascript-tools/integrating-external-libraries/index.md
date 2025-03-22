---
title: 概述
---
# 集成外部库

你可以通过编写一个C或C++共享库来扩展应用程序的JavaScript DOM，将其编译为你所使用的平台，并将其作为ExternalObject对象加载到JavaScript中。共享库在Windows中由DLL实现，在Mac OS中由bundle或framework实现，在UNIX中由SharedObject实现。

你可以直接通过ExternalObject实例访问库函数，或者你可以定义一个接口，允许你的C/C++代码创建和访问JavaScript类和对象。

所有Adobe Creative Suite 4应用程序都支持此功能。

## 示例代码

[Adobe ExtendScript SDK](https://github.com/Adobe-CEP/CEP-Resources/tree/master/ExtendScript-Toolkit) 分发的示例代码中包含一个演示如何编写C/C++共享库以与JavaScript集成的示例。它位于以下目录中：

```javascript
sdkInstall/sdksamples/cpp/
```

该示例展示了如何使用ExternalObject机制为Adobe Bridge编写C/C++插件，使C/C++代码可以从JavaScript上下文中调用。`sdkInstall/sdksamples/cpp/build` 的子文件夹中包含了Microsoft Visual Studio 2005和XCode 2.4的项目文件。
