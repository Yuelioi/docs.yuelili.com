---
title: bridgetalk 类
---
# BridgeTalk 类

该类的静态属性和方法为您的脚本提供了一种方式，在创建任何特定消息对象之前确定基本的消息系统信息。静态方法允许您检查应用程序是否已安装并正在运行，并启动应用程序。类上定义的回调决定了应用程序如何处理传入消息。

您可以在全局命名空间中访问 BridgeTalk 类的静态属性和方法。例如：

```javascript
var thisApp = BridgeTalk.appName;
```

:::note
您必须实例化 BridgeTalk 类以创建 BridgeTalk 消息对象，该对象用于在应用程序之间发送消息包。动态属性和方法只能在实例中访问。
:::

---

## 属性

BridgeTalk 类提供了以下静态属性，这些属性在全局命名空间中可用：

### BridgeTalk.appInstance

`BridgeTalk.appInstance`

#### 描述

由消息框架启动的应用程序的实例标识符，应用程序指定符的实例部分；请参阅 [应用程序指定符](../application-and-namespace-specifiers#application-specifiers)。

仅适用于支持启动和运行多个实例的应用程序，例如 InDesign。

#### 类型

字符串。只读。

---

### BridgeTalk.appLocale

`BridgeTalk.appLocale`

#### 描述

此应用程序的区域设置，应用程序指定符的区域设置部分；请参阅 [应用程序指定符](../application-and-namespace-specifiers#application-specifiers)。当发送消息时，这是发送应用程序的区域设置。

#### 类型

字符串。只读。

---

### BridgeTalk.appName

`BridgeTalk.appName`

#### 描述

此应用程序的名称，应用程序指定符的应用程序名称部分；请参阅 [应用程序指定符](../application-and-namespace-specifiers#application-specifiers)。当发送消息时，这是发送应用程序的名称。

#### 类型

字符串。只读。

---

### BridgeTalk.appSpecifier

`BridgeTalk.appSpecifier`

#### 描述

包含此应用程序完整指定符的小写字符串；请参阅 [应用程序指定符](../application-and-namespace-specifiers#application-specifiers)。

#### 类型

字符串。

---

### BridgeTalk.appStatus

`BridgeTalk.appStatus`

#### 描述

此应用程序的当前处理状态。可能的值包括：

- `busy`：应用程序当前繁忙，但未处理消息。例如，当显示模态对话框时就是这种情况。
- `idle`：应用程序当前空闲，但定期处理消息。
- `not installed`：应用程序未安装。

#### 类型

字符串。只读。

---

### BridgeTalk.appVersion

`BridgeTalk.appVersion`

#### 描述

此应用程序的版本号，应用程序指定符的版本部分；请参阅 [应用程序指定符](../application-and-namespace-specifiers#application-specifiers)。当发送消息时，这是发送应用程序的版本。

#### 类型

字符串。只读。

---

### BridgeTalk.onReceive

`BridgeTalk.onReceive`

#### 描述

#### 返回

此应用程序应用于未经请求的传入消息的回调函数。默认函数评估接收到的消息的主体并返回评估结果。要更改默认行为，请将其设置为以下形式的函数定义：

```javascript
BridgeTalk.onReceive = function( bridgeTalkObject ) {
 // 处理接收到的消息
};
```

接收到的消息对象的 `body` 属性包含接收到的数据。该函数可以返回任何类型。请参阅 [处理未经请求的消息](../communicating-through-messages#handling-unsolicited-messages)。

:::note
此函数不适用于从该应用程序发送的消息的响应消息。响应消息由与发送的消息关联的 `onResult`、`onReceived` 或 `onError` 回调处理。
:::

#### 类型

函数

---

## 函数

BridgeTalk 类提供了以下静态方法，这些方法在全局命名空间中可用：

### BridgeTalk.bringToFront()

`BridgeTalk.bringToFront(app)`

#### 描述

将指定应用程序的所有窗口置于屏幕的最前面。

在 Mac OS 中，应用程序可能正在运行但没有打开任何窗口。在这种情况下，调用此函数可能会或可能不会打开新窗口，具体取决于应用程序。对于 Adobe Bridge，它会打开一个新的浏览器窗口。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `app` | [应用程序指定符](../application-and-namespace-specifiers#application-specifiers) | 目标应用程序的指定符 |

#### 返回

无

---

### BridgeTalk.getAppPath()

`BridgeTalk.getAppPath(app)`

#### 描述

检索指定应用程序的可执行文件的完整路径。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `app` | [应用程序指定符](../application-and-namespace-specifiers#application-specifiers) | 目标应用程序的指定符 |

#### 返回

字符串

---

### BridgeTalk.getDisplayName()

`BridgeTalk.getDisplayName(app)`

#### 描述

返回应用程序的本地化显示名称，如果应用程序未安装则返回 `null`。例如：

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `app` | [应用程序指定符](../application-and-namespace-specifiers#application-specifiers) | 目标应用程序的指定符 |

#### 返回

字符串

#### 示例

```javascript
BridgeTalk.getDisplayName("photoshop-10.0");
=> Adobe Photoshop CS4
```

---

### BridgeTalk.getSpecifier()

`BridgeTalk.getSpecifier(appName[, version][, locale])`

#### 描述

检索完整的应用程序指定符。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `appName` | 要搜索的应用程序的基本名称。 | |
| `version` | 数字 | 可选。要搜索的特定版本号。 |
| | | 如果为 `0` 或未提供，则返回最新版本。 |
| | | 如果为负值，则返回最高版本，直到并包括该值的绝对值。 |
| | | 如果指定了主版本号，则返回最高次版本号的变化。例如，如果安装了 Photoshop CS 版本 9、9.1 和 10： |
| | | `<pre lang="javascript">`BridgeTalk.Specifier( "photoshop", "9" )`` => ["photoshop-9.1"]`</pre>` |
| `locale` | 字符串 | 可选。要搜索的特定区域设置。如果未提供且安装了多个语言版本，则优先选择当前区域设置的版本。 |

#### 返回

[应用程序指定符](../application-and-namespace-specifiers#application-specifiers)，用于此计算机上安装的支持消息传递的应用程序版本，如果请求的应用程序版本未安装，则返回 `null`。

#### 示例

例如，假设安装的应用程序包括 Photoshop CS4 11.0 `en_us`、Photoshop CS2 8.5 `de_de`、Photoshop CS2 9.0 `de_de` 和 Photoshop CS2 9.5 `de_de`，并且当前区域设置为 `en_US`。

```javascript
BridgeTalk.getSpecifier ("photoshop");
 => ["photoshop-11.0-en_us"]

BridgeTalk.getSpecifier ("photoshop", 0, "en_us");
 => ["photoshop-11.0-en_us"]

BridgeTalk.getSpecifier ("photoshop", 0, "de_de");
 => ["photoshop-9.5-de_de"]

BridgeTalk.getSpecifier ("photoshop", -9.2, "de_de");
 => ["photoshop-9.0-de_de"]

BridgeTalk.getSpecifier ("photoshop", 8);
 => ["photoshop-8.5-de_de"]
```

---

### BridgeTalk.getStatus()

`BridgeTalk.getStatus(targetSpec)`

#### 描述

检索应用程序的处理状态。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `targetSpec` | [应用程序指定符](../application-and-namespace-specifiers#application-specifiers) | 可选。目标应用程序的指定符。如果未提供，则返回当前应用程序的处理状态。 |

#### 返回

字符串，可能的值包括：

- `BUSY`：应用程序当前繁忙，但未处理消息。例如，当显示模态对话框时就是这种情况。
- `IDLE`：应用程序当前空闲，但定期处理消息。
- `PUMPING`：应用程序当前正在处理消息。
- `ISNOTRUNNING`：应用程序已安装但未运行。
- `ISNOTINSTALLED`：应用程序未安装。
- `UNDEFINED`：应用程序正在运行但未响应 ping 请求。这可能是使用早期版本消息框架的 CS2 应用程序的情况。

---

### BridgeTalk.getTargets()

`BridgeTalk.getTargets([version],[locale])`

#### 描述

检索此计算机上安装的支持消息传递的应用程序列表。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `version` | 数字 | 可选。要搜索的特定版本号，或 `null` 以返回最合适的版本（匹配、最新或正在运行的版本），并包含版本信息。 |
| | | 仅指定主版本号以返回最高次版本号的变化。 |
| | | 例如，如果安装了 Photoshop CS 版本 9、9.5 和 10 |
| | | `<pre lang="javascript">`BridgeTalk.getTargets( "9" )``=> [photoshop-9.5]`</pre>` |
| | | 指定负值以返回所有版本，直到版本号的绝对值。例如 |
| | | `<pre lang="javascript">`BridgeTalk.getTargets( "-9.9" )``=> [photoshop-9.0, photoshop-9.5]`</pre>` |
| `locale` | 字符串 | 可选。要搜索的特定区域设置，或 `null` 以返回所有区域设置的应用程序，并包含区域设置信息。如果未提供版本信息，则仅返回带有版本信息的指定符。 |

#### 返回

返回 [应用程序指定符](../application-and-namespace-specifiers#application-specifiers) 的数组。

- 如果提供了版本，指定符包括基本名称和版本信息。
- 如果提供了区域设置，指定符包括完整名称，包含版本和区域设置信息。
- 如果未提供版本和区域设置，则返回基本指定符，不包含版本和区域设置信息，但尝试找到最合适的版本和区域设置；请参阅 [应用程序指定符](../application-and-namespace-specifiers#application-specifiers)。

#### 示例

例如，假设安装的应用程序包括 Photoshop CS3 10.0 `en_US`、Photoshop CS4 11.0 `en_us` 和 Illustrator CS4 14.0 `de_de`。

```javascript
BridgeTalk.getTargets();
 => [photoshop,illustrator]

BridgeTalk.getTargets( "10.0" );
 => [photoshop-10.0]

BridgeTalk.getTargets( null );
 => [photoshop-11.0, illustrator-14.0]

BridgeTalk.getTargets( null, "en_US" );
 => [photoshop-10.0-en_US, photoshop-11.0-en_US]

BridgeTalk.getTargets( null, null );
 => [photoshop-10.0-en_US, photoshop-11.0-en_us, illustrator-14.0-de_de]
```

---

### BridgeTalk.isRunning()

`BridgeTalk.isRunning(specifier)`

#### 描述

检查给定应用程序是否正在本地计算机上运行并处于活动状态。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `specifier` | [应用程序指定符](../application-and-namespace-specifiers#application-specifiers) | 目标应用程序的指定符 |

#### 返回

布尔值

---

### BridgeTalk.launch()

`BridgeTalk.launch(specifier[, where])`

#### 描述

在本地计算机上启动给定的应用程序。为了向应用程序发送消息，不需要显式启动应用程序；向未运行的应用程序发送消息会自动启动它。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `specifier` | [应用程序指定符](../application-and-namespace-specifiers#application-specifiers) | 目标应用程序的指定符 |
| `where` | 未知。 | 可选。如果指定了值 "background"，则应用程序的主窗口不会置于屏幕的最前面。 |

#### 返回

布尔值。如果应用程序已经启动，则返回 `true`，如果由此次调用启动，则返回 `false`。

---

### BridgeTalk.loadAppScript()

`BridgeTalk.loadAppScript(specifier)`

#### 描述

从公共的 StartupScripts 文件夹加载应用程序的启动脚本。用于实现启动脚本的延迟加载。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `specifier` | [应用程序指定符](../application-and-namespace-specifiers#application-specifiers) | 目标应用程序的指定符 |

#### 返回

布尔值。如果脚本成功加载，则返回 `true`。

---

### BridgeTalk.ping()

`BridgeTalk.ping(specifier, pingRequest)`

#### 描述

向另一个应用程序发送消息以确定是否可以联系到它。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `specifier` | [应用程序指定符](../application-and-namespace-specifiers#application-specifiers) | 目标应用程序的指定符 |
| `pingRequest` | 标识键字符串，可能的值包括： | 特定类型的返回值。 |
| | -`STATUS`：返回处理状态；请参阅 [getStatus()](#bridgetalkgetstatus)。 | |
| | -`DIAGNOSTICS`：返回包含有效 ping 键列表的诊断报告。 | |
| | -`ECHO_REQUEST`：返回 `ECHO_RESPONSE` 以进行简单的 ping 请求。 | |

#### 返回

字符串

---

### BridgeTalk.pump()

`BridgeTalk.pump()`

#### 描述

检查所有活动的消息传递接口以获取传出和传入消息，并在有消息时处理它们。

:::note
大多数应用程序都有一个消息处理循环，持续检查消息队列，因此很少需要使用此方法。
:::

#### 返回

布尔值。如果处理了任何消息，则返回 `true`，否则返回 `false`。
