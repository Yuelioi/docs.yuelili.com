---
title: bridgetalk 消息对象
---
# BridgeTalk 消息对象

消息对象定义了在应用程序之间发送的基本通信数据包。其属性允许您指定接收应用程序（目标）、要发送给目标的数据（主体）以及发送的数据类型。消息协议是可扩展的；它允许您为 `type` 属性定义新的数据类型，并通过 `headers` 属性发送和接收任意附加信息。

---

## BridgeTalk 消息对象构造函数

使用简单的构造函数创建一个新的消息对象：

```javascript
var bt = new BridgeTalk;
```

在向另一个应用程序发送消息之前，必须将 `target` 属性设置为接收应用程序，并将 `body` 属性设置为要发送的数据消息（通常是一个脚本）。

---

## BridgeTalk 消息对象属性

### body

`bridgeTalkObj.body`

#### 描述

消息的数据负载。

- 如果这是发送给另一个应用程序的主动消息，通常包含一个打包为字符串的脚本。目标应用程序的完整文档对象模型（DOM）在脚本中可用。
- 如果此消息是目标应用程序的静态 BridgeTalk `onReceive` 方法返回的结果，并定向到此对象的 `onResult` 回调，则包含从该方法返回的结果，并将其扁平化为字符串。请参阅 [在应用程序之间传递值](../communicating-through-messages#passing-values-between-applications)。
- 如果此消息包含 `onError` 回调的错误通知，则包含错误消息。

#### 类型

字符串

---

### headers

`bridgeTalkObj.headers`

#### 描述

一个包含脚本定义头信息的 JavaScript 对象。

使用此属性定义自定义头信息，以在应用程序之间发送补充信息。您可以添加任意数量的新头信息。头信息是名称/值对，可以使用 JavaScript 点符号（`msgObj.headers.propName`）或括号符号（`msgObj.headers[propName]`）访问。如果头信息名称符合 JavaScript 符号语法，请使用点符号。如果不符合，请使用括号符号。

预定义的头信息 `["Error-Code"]` 用于向发送方返回错误消息；请参阅 [消息错误代码](../messaging-error-codes)。

#### 类型

对象

#### 示例

设置头信息的示例：

```javascript
bt.headers.info = "附加信息";
bt.headers ["Error-Code"] = 8;
```

获取头信息值的示例：

```javascript
var info = bt.headers.info;
var error = bt.headers ["Error-Code"];
```

---

### sender

`bridgeTalkObj.sender`

#### 描述

发送应用程序的应用程序标识符（请参阅 [应用程序标识符](../application-and-namespace-specifiers#application-specifiers)）。

#### 类型

字符串

---

### target

`bridgeTalkObj.target`

#### 描述

目标或接收应用程序的应用程序标识符（请参阅 [应用程序标识符](../application-and-namespace-specifiers#application-specifiers)）。

#### 类型

字符串

---

### timeout

`bridgeTalkObj.timeout`

#### 描述

消息超时前的秒数。

如果消息在此时间过去之前尚未从输入队列中移除以进行处理，则消息将被丢弃。如果发送方为此消息定义了 [onTimeout()](#ontimeout) 回调，则目标应用程序会向发送方发送超时消息。

#### 类型

数字

---

### type

`bridgeTalkObj.type`

#### 描述

消息类型，指示 `body` 包含的数据类型。

默认值为 `ExtendScript`。

您可以为脚本定义的数据定义类型。如果这样做，目标应用程序必须具有一个静态的 `BridgeTalk` `onReceive_` 方法来检查并处理该类型。

#### 类型

字符串

---

## BridgeTalk 消息对象回调

:::note
消息回调是可选的，并非所有支持消息的应用程序都实现了这些回调。
:::

### onError()

`bridgeTalkObj.onError()`

#### 描述

目标应用程序调用此回调函数以向发送方返回错误响应。它可以发送 JavaScript 运行时错误或异常，或 C++ 异常。

要定义错误响应行为，请将其设置为以下形式的函数定义：

```javascript
bridgeTalkObj.onError = function( errorMsgObject ) {
 // 在此定义错误处理程序
};
```

接收到的消息对象的 `body` 属性包含错误消息，`headers` 属性在其 `Error-Code` 属性中包含错误代码。请参阅 [消息错误代码](../messaging-error-codes)。

---

### onReceived()

#### 描述

`bridgeTalkObj.onReceived()`

目标应用程序调用此回调函数以确认消息已接收。（请注意，这与处理主动消息的 `BridgeTalk` 类的静态 `onReceive_` 方法不同。）

要定义接收通知的响应，请将其设置为以下形式的函数定义：

```javascript
bridgeTalkObj.onReceived = function( origMsgObject ) {
 // 在此定义处理程序
};
```

目标传递回原始消息对象，`body` 属性设置为空字符串。

---

### onResult()

#### 描述

`bridgeTalkObj.onResult()`

目标应用程序调用此回调函数以向发送方返回响应。这可以是中间响应或消息处理的最终结果。

要处理响应，请将其设置为以下形式的函数定义：

```javascript
bridgeTalkObj.onResult = function( responseMsgObject ) {
 // 在此定义处理程序
};
```

目标传递一个新的消息对象，`body` 属性设置为结果字符串。

这是目标应用程序的静态 BridgeTalk [onReceive](../bridgetalk-class#bridgetalkonreceive) 方法的结果，打包为 UTF-8 编码的字符串。请参阅 [在应用程序之间传递值](../communicating-through-messages#passing-values-between-applications)。

---

### onTimeout()

#### 描述

`bridgeTalkObj.onTimeout()`

如果在此应用程序之前发送的另一条消息的目标处理完成之前发生超时，目标应用程序调用此回调函数以发送超时消息。

要启用此回调，消息必须为 `timeout` 属性指定一个值。

要定义对超时事件的响应，请将其设置为以下形式的函数定义：

```javascript
bridgeTalkObj.onTimeout = function( timeoutMsgObject ) {
 // 在此定义处理程序
};
```

---

## BridgeTalk 消息对象函数

### send()

`bridgeTalkObj.send([timoutInSecs[, launchParameters]])`

#### 描述

将此消息发送到目标应用程序。

如果目标应用程序未运行且消息包含 `body`，则消息系统会自动启动目标应用程序，并传递任何提供的启动参数。在这种情况下，消息会被排队而不是立即发送，并且此方法返回 `false`。消息在应用程序运行后进行处理。

发送消息并不保证目标实际接收到它。您可以通过为此消息对象定义 `onReceived` 回调来请求接收通知。（请注意，这与处理主动消息的 `BridgeTalk` 类的静态 `onReceive` 方法不同。）

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `timoutInSecs` | 数字 | 可选。等待结果的最大秒数，然后从此函数返回。消息是同步发送的，函数在目标处理完消息或此秒数过去之前不会返回。如果未提供或为 0，则消息是异步发送的，函数立即返回而不等待结果。 |
| `launchParameters` | 字符串 | 可选。如果目标应用程序未运行，则在启动目标应用程序时附加到目标应用程序名称的参数字符串。如果目标应用程序已在运行，则忽略此值。 |

#### 返回

布尔值。如果消息可以立即发送，则为 `true`；如果无法发送或排队等待稍后发送，则为 `false`。

---

### sendResult()

`bridgeTalkObj.sendResult(result)`

#### 描述

在处理主动消息时，静态 BridgeTalk `onReceive` 方法可以通过调用接收到的消息对象中的此方法向发送方返回中间结果。它会调用原始消息的 `onResult` 回调，传递一个包含指定结果值的新消息对象。

这允许您向消息发送多个响应。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `result` | 任意 | 您可以发送任何类型的数据作为结果值。消息框架会创建一个 BridgeTalk 消息对象，并将此值扁平化为字符串，存储在该消息的 `body` 中。请参阅 [在应用程序之间传递值](../communicating-through-messages#passing-values-between-applications)。 |

#### 返回

布尔值。如果接收到的消息定义了 `onResult` 回调并且可以发送响应消息，则为 `true`；否则为 `false`。
