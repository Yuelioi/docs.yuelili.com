---
title: 跨DOM函数
---
# 跨DOM函数

跨DOM是一个小型应用程序编程接口（API），它提供了一组在支持消息的应用程序中通用的函数。这些函数包括打开文件、执行脚本和打印文件等功能。有关函数集的详细信息，请参阅[跨DOM API参考](#跨DOM-API参考)。

您可以通过在函数名称前加上目标应用程序的命名空间说明符来在任何脚本中访问跨DOM函数（请参阅[命名空间说明符](../application-and-namespace-specifiers)）。例如，Photoshop CC脚本可以调用`indesign.open(file)`来在Adobe InDesign® CC中打开一个文件。

每个应用程序的跨DOM函数都是用JavaScript实现的。您可以通过阅读Adobe启动文件夹中每个已安装应用程序的关联启动脚本来查看其实现。例如，Adobe Illustrator® CC在`illustrator-14.jsx`启动脚本中定义了`illustrator.open()`（14是已安装应用程序的版本号）。请参阅[启动文件夹位置](#启动文件夹位置)。

### 示例

[Adobe ExtendScript SDK](https://github.com/Adobe-CEP/CEP-Resources/tree/master/ExtendScript-Toolkit)分发的示例代码包括以下代码示例，这些示例专门演示了跨DOM函数的使用：

| 示例 | 描述 |
| --- | --- |
| [OpenImageInPhotoshop.jsx](https://github.com/Adobe-CEP/CEP-Resources/blob/master/ExtendScript-Toolkit/Samples/javascript/OpenImageInPhotoshop.jsx) | 展示如何将图像文件发送到Photoshop中打开。 |

---

## 应用程序特定的导出函数

除了必需的跨DOM基础函数外，每个支持消息的应用程序还可以通过简单的语法向所有脚本提供应用程序特定的功能。您可以通过在函数名称前加上目标应用程序的命名空间说明符来在任何脚本中访问导出的函数（请参阅[命名空间说明符](../application-and-namespace-specifiers)）。例如，Photoshop CS5导出了`photomerge`函数，因此Illustrator CS5脚本可以直接调用`photoshop.photomerge(files)`。

跨DOM函数与应用程序特定的导出函数之间的唯一区别是，所有应用程序都暴露相同的跨DOM函数集，而每个应用程序暴露其自己的一组应用程序特定函数。每个应用程序决定其导出功能的范围。

一些应用程序提供了广泛的导出函数支持，而其他应用程序则较少。

有关各个应用程序导出的其他函数的详细信息，请参阅这些应用程序的启动脚本。应用程序启动脚本的名称为`appname-n.jsx`，其中`n`是已安装应用程序的版本号。请参阅[启动文件夹位置](#启动文件夹位置)。

---

## 启动文件夹位置

对于每个平台，都有一个由所有支持JavaScript的Adobe Creative Suite 4应用程序共享的启动文件夹，以及一个应用程序特定的启动文件夹。

- 在Windows®中，安装启动文件夹为：`%CommonProgramFiles%\Adobe\Startup Scripts CS5\Adobe AppName\`
- 在Mac OS®中，安装启动文件夹为：`/Library/Application Support/Adobe/Startup Scripts CS5/Adobe AppName/`

:::note
这不是存储您自己的启动脚本的位置；请参阅[为特定应用程序编写脚本](../../introduction/scripting-for-specific-applications)。
:::

---

## 跨DOM API参考

所有导出的函数，包括跨DOM API的函数，都是通过导出应用程序调用的，由其命名空间说明符标识（请参阅[命名空间说明符](../application-and-namespace-specifiers)）。例如：

```javascript
//在版本12中执行Illustrator脚本
illustrator12.executeScript(myAIScript);
```

没有版本信息的说明符将调用已安装的最高版本的应用程序。例如：

```javascript
//在最高可用版本中执行Photoshop脚本
photoshop.executeScript (myPSScript)
```

---

## 跨DOM函数

所有支持消息的应用程序都实现了以下跨DOM函数：

---

### executeScript()

`appspec.executeScript(script)`

#### 描述

对指定的脚本执行JavaScript eval操作。目标应用程序的整个文档对象模型（DOM）对脚本可用。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `script` | String | 要评估的脚本。 |

#### 返回

无

---

### open()

`appspec.open(files)`

#### 描述

对指定的文件执行目标应用程序的“文件 > 打开”命令的等效操作。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `files` | [文件对象](../../file-system-access/file-object) 或文件对象数组。 | 要打开的文件。对于使用复合文档的应用程序，这应该是一个项目文件。 |

#### 返回

无

---

### openAsNew()

`appspec.openAsNew([options])`

#### 描述

执行目标应用程序的“文件 > 新建”命令的等效操作。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `options` | 应用程序特定的创建选项： | 可选。创建选项。 |
| | - Adobe Bridge: 无 | |
| | - Photoshop: 无 | |
| | - InDesign: 创建选项为：`(Boolean:showingWindow, ObjectOrString:documentPresets)`。请参阅Adobe InDesign CS5脚本参考中的`documents.add()`参数。 | |
| | - Illustrator: 创建选项为：`([DocumentColorSpace:colorspace][, Number:width, Number:height])`。请参阅Adobe Illustrator CS5 JavaScript参考中的`documents.add()`参数。 | |

#### 返回

布尔值。成功时返回`true`。

---

### print()

`appspec.print(files)`

#### 描述

对指定的文件执行目标应用程序的“文件 > 打印”命令的等效操作。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `files` | [文件对象](../../file-system-access/file-object) 或文件对象数组。 | 要打印的文件。对于使用复合文档的应用程序，这应该是一个项目文件。 |

#### 返回

无

---

### quit()

`appspec.quit()`

#### 描述

执行目标应用程序的“文件 > 退出”或“文件 > 关闭”命令的等效操作。

:::note
此函数适用于Adobe Acrobat®，但不执行任何操作。脚本无法终止应用程序。
:::

#### 返回

无

---

### reveal()

`appspec.reveal(file)`

#### 描述

将目标应用程序的操作系统焦点赋予，并且如果指定的文件在该应用程序中打开，则将其带到前台。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `file` | [文件对象](../../file-system-access/file-object) 或字符串 | 要显示的文件信息 |

#### 返回

无
