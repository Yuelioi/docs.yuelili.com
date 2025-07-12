---
title: PrGPU SDK 宏
---
# PrGPU SDK 宏

PrGPU SDK 宏和设备函数允许您编写可在多种 GPU 计算语言（CUDA、OpenCL 和 Metal）上编译的内核。这些语言有很大的重叠部分——一个 C98 语言子集，通过使用移植宏和函数来抽象出差异，您可以编写可移植的代码。您仍然可以访问移植集未涵盖的 API 特定功能，但您需要为其他 API 包含备用代码路径。

目前，SDK 不提供用于编译或启动任意内核的主机端代码，但 SDK 示例展示了如何为不同的 API 执行此操作。

这些宏不是插件 API 的一部分——如果您想使用它们，它们作为实用工具提供。这为您提供了广泛的自由度来分叉它们并进行任何您认为合适的更改，而不会破坏插件兼容性。在 Adobe 方面，我们可能会在未来的版本中扩展和修改 SDK 内核移植集，以涵盖其他计算 API 或其他增强功能。

---

## 外部依赖

这些宏确实增加了一个外部源依赖项——Boost（boost.org）。我们使用 Boost 预处理器包来操作内核定义。

根据您选择编译和部署内核的方式，我们还提供了一个可能有用的 Python 脚本（请参阅“作为单独步骤的预处理”）。

---

## 包含路径

您需要在内核编译环境中添加一些包含路径：

- 到 `PrGPU/KernelSupport/` 的路径（在 SDK 中的 `Examples/Projects/GPUVideoFilter/Utils/` 中找到）
- 到 Boost 库的路径

---

## 定义

您还需要定义一个符号，以告诉头文件在编译内核时要处理哪个 API：

- Metal:
 - `DGF_DEVICE_TARGET_METAL=1`
- OpenCL:
 - `DGF_DEVICE_TARGET_OPENCL=1`
 - `DGF_OPENCL_SUPPORTS_16F=1` 或 `0`，具体取决于您是否支持此设备的半精度（16 位浮点）访问。一些较旧的显卡在半精度支持方面非常慢，或者根本不支持。
- CUDA:
 - `KernelCore.h` 头文件会自动感知 cuda 编译器，并为您 `#define GF_DEVICE_TARGET_CUDA 1`。

在任何给定的编译中，只有一个设备目标标志会处于活动状态。头文件会将非活动 API 的设备目标宏定义为 0。您可以随意在代码中使用这些宏进行任何 API 特殊化。在头文件之外，我们不需要做太多。

---

## 头文件

- `KernelCore.h` - 基本头文件宏。您肯定会需要这些。
- `KernelMemory.h` - 用于全局设备内存访问的浮点和半精度抽象。
- `FloatingPoint.h` - 常见的浮点例程。这些主要隐藏了跨 API 的命名差异。

您需要在内核中像这样包含它们：

```cpp
#include "PrGPU/KernelSupport/KernelCore.h"
```

该文件夹包含上述文件使用的其他文件。

需要注意的一件事是您的项目是否正确跟踪了头文件依赖关系。如果没有，您需要在包含文件更改时手动重新编译内核。无论您是否使用 SDK 移植集，这都是正确的，因此您可能已经解决了这个问题。

---

## 顶层内核文件

您可以按照自己的喜好组织代码和项目，但我们发现为每个 API（.cl、.cu 和 .metal）设置单独的顶层内核文件非常方便，这些文件仅包含共享代码，否则几乎为空。这使得构建规则更加简单。

---

## 作为单独步骤的预处理

如果您在客户机器上编译内核源代码，您可能希望在插件编译时预处理内核，并将内核源代码存储在您的插件中。提供了一个 Python 脚本（需要 Python 3 或更高版本），它将把预处理后的源代码转换为字符数组。该脚本位于 `Examples/Projects/GPUVideoFilter/Utils/CreateCString.py`。请参阅 ProcAmp 示例以了解用法。

您还可以在插件编译时编译内核（对于 CUDA 始终如此），在这种情况下，您不需要 Python 脚本或单独的预处理运行。如果您选择此路径，您将需要在插件中打包编译后的内核。

ProcAmp 示例对 OpenCL 使用了预处理步骤。

---

## 声明内核

Metal 内核需要的语法与 CUDA 大不相同，PrGPU 宏使用 Boost 预处理包来表达参数。这是整个包中最复杂的部分，所以请拿一杯新鲜的咖啡，坐下来阅读。

`GF_KERNEL_FUNCTION` 宏用于将值作为参数（CUDA）或在结构体（Metal）中传递。该宏将创建一个特定于 API 的内核入口函数，该入口函数将调用它定义的函数，让您填写函数体。该宏使用 Boost 预处理器序列来表达类型/名称对：

```cpp
(float)(inValue)
```

然后将这些对嵌套到参数序列中：

```cpp
((float)(inAge))((int)(inMarbles))
```

有不同类别的参数，例如缓冲区、值和内核位置。每个类别序列都是一个单独的宏参数。示例用法：

```cpp
GF_KERNEL_FUNCTION(RemoveFlicker,

//内核名称，然后逗号，((GF_PTR(float4))(inSrc))

//所有缓冲区和纹理在第一个逗号之后
((GF_PTR(float4))(outDest)),
((int)(inDestPitch))

//在第二个逗号之后，所有要传递的值 ((DevicePixelFormat)(inDeviceFormat))
((int)(inWidth))
((int)(inHeight)),
((uint2)(inXY)(KERNEL_XY))

//在第三个逗号之后，位置参数。
((uint2)(inBlockID)(BLOCK_ID)))
{
 // <在这里做一些有趣的事情>
}
```

在上面的示例中，主机在调用内核时不会传递位置值。

位置值由 `GF_KERNEL_FUNCTION` 宏生成的解组代码自动填充。您编写的代码实际上将最终出现在解组代码将调用的设备函数中。请参阅 ProcAmp 示例插件以了解用法。

使用静态大小共享内存的内核使用不同的宏 `GF_KERNEL_FUNCTION_SHARED`。请参阅头文件以获取详细信息。

---

## 声明设备函数

相比之下，设备函数的编写非常简单：

```cpp
GF_DEVICE_FUNCTION float Average(float a, float b) {...
```

---

## 其他宏和函数

KernelSupport 头文件中有各种其他宏和函数。请参阅头文件和示例以获取详细信息。
