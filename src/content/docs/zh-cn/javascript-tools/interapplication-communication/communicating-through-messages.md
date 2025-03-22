---
title: 通过消息进行通信
---
# 通过消息进行通信

Adobe Bridge 提供了一个应用程序编程接口（API），定义了 Adobe ExtendScript 和支持消息的应用程序之间的通信协议。这为应用程序之间的通信提供了最通用的机制。支持消息的应用程序可以启动另一个支持消息的应用程序，并发送或接收脚本来执行某些操作。例如，在 Adobe Bridge 中，脚本可以启动 Photoshop，然后向 Photoshop 发送一个请求进行照片合并操作的脚本。

虽然导出的函数允许特定访问应用程序的某些功能，但应用程序间消息中的脚本允许完全访问目标应用程序的文档对象模型（DOM），以及所有跨 DOM 和应用程序导出的函数。

消息 API 定义了 `BridgeTalk` 类，其全局可用的静态属性和函数提供了与应用程序间通信相关的环境信息。您可以实例化此类以创建 `BridgeTalk` 消息对象，该对象封装了一条消息并允许您将其发送到另一个应用程序。有关这些对象的详细信息，请参阅 [消息框架 API 参考](../messaging-framework-api-reference)。

## 发送消息

要将脚本或其他数据发送到另一个应用程序，您必须创建并配置一个 [BridgeTalk 消息对象](../bridgetalk-message-object)。

该对象包含要发送的数据（通常是要在目标应用程序中执行的脚本），并指定如何处理响应。

这个简单的示例演示了从 Adobe Bridge CS5 向 Photoshop CS5 发送脚本并接收响应的步骤。

### 步骤 1：检查目标应用程序是否已安装

在您实际发送消息之前，必须检查目标应用程序的所需版本是否已安装。通过 [BridgeTalk 类](../bridgetalk-class) 在全局命名空间中可用的 [getSpecifier()](bridgetalk-class.md#bridgetalkgetspecifier) 函数提供了此信息。

例如，以下代码将向 Adobe Bridge CS5 发送消息，作为由 Photoshop CS5 执行的脚本的一部分，检查所需的 Adobe Bridge 版本是否已安装：

```javascript
var targetApp = BridgeTalk.getSpecifier( "bridge-3.0");
if( targetApp ) {
    // 构造并发送消息
}
```

当您发送消息时，如果目标应用程序尚未运行，消息框架会自动启动它。

### 步骤 2：构造消息对象

下一步是构造要发送到应用程序的消息。您可以通过创建 `BridgeTalk` 消息对象并为其属性赋值来实现。您必须指定目标应用程序和消息体，消息体通常是打包成字符串的脚本。

消息中发送的脚本可以非常复杂，并且可以使用目标应用程序的完整 DOM。此示例定义了一个消息脚本，该脚本访问 Adobe Bridge DOM 以请求特定文件夹中找到的文件或文件夹的数量：

```javascript
// 创建一个新的 BridgeTalk 消息对象
var bt = new BridgeTalk;

// 将此消息发送到 Adobe Bridge CS4 应用程序
var targetApp = BridgeTalk.getSpecifier( "bridge-3.0");
bt.target = targetApp;

// 要评估的脚本包含在 "body" 属性中的字符串中
bt.body = "new Document('C:\\BridgeScripts');app.document.target.children.length;"
```

### 步骤 3：指定如何处理响应

如果您想处理此消息的响应，或使用脚本评估返回的数据，则必须在发送消息之前设置响应处理机制。您可以通过在消息对象中定义 [onResult()](bridgetalk-message-object.md#onresult) 回调来实现。

:::note
消息回调是可选的，并非所有支持消息的应用程序都实现了它们。消息的响应默认是该消息的 `body` 属性中包含的脚本的评估结果。目标应用程序可能会定义某种不同的响应；请参阅 [接收消息](#receiving-messages)。
:::

当目标处理完此消息后，它会在接收到的消息对象中查找 `onResult` 回调。如果找到，目标会自动调用它，并将响应传递给它。响应被打包成一个字符串，该字符串又被打包到一个新消息对象的 `body` 属性中。该消息对象是您的 `onResult` 回调函数的参数。

例如，此处理程序使用脚本定义的 `processResult` 函数处理返回的结果：

```javascript
bt.onResult = function(returnBtObj) {
    processResult(returnBtObj.body);
}
```

如果您想处理脚本处理过程中可能出现的错误，可以在消息对象中定义一个 [onError()](bridgetalk-message-object.md#onerror) 回调。同样，您可以定义一个 [timeout](bridgetalk-message-object.md#timeout) 值和 [onTimeout()](bridgetalk-message-object.md#ontimeout) 回调来处理目标无法在给定时间内处理消息的情况。有关更多信息，请参阅 [处理来自消息目标的响应](#handling-responses-from-the-message-target)。

:::note
如果您定义了回调来处理响应，则必须将消息存储在响应接收时仍然存在的变量中。否则，JavaScript 可能会垃圾回收消息对象，响应将丢失。
:::

### 步骤 4：发送消息

要发送消息，请调用消息对象的 `send` 方法。您不需要指定发送消息的位置，因为目标应用程序已在消息本身中设置：

```javascript
bt.send();
```

您可以选择指定一个超时值，这将使调用同步；当您这样做时，该方法会等待目标应用程序的响应，或等待超时值到期，然后再返回。当未指定超时时，如本示例所示，调用是异步的，`send()` 方法会立即返回。

第二个可选参数允许您指定启动参数，以防目标应用程序当前未运行，消息框架需要启动它。

完整的脚本如下所示：

```javascript
// 在 Photoshop CS4 中执行的脚本
#target "photoshop-11.0"

// 检查目标应用程序是否已安装
var targetApp = BridgeTalk.getSpecifier( "bridge-3.0");

if( targetApp ) {
    // 构造消息对象
    var bt = new BridgeTalk;

    // 消息的目标是 Adobe Bridge CS4
    bt.target = targetApp;

    // 要评估的脚本包含在 "body" 属性中的字符串中
    bt.body = "new Document('C:\\BridgeScripts');app.document.target.children.length;"

    // 定义结果处理回调
    bt.onResult = function(returnBtObj) {
    processResult(returnBtObj.body); } //fn 在其他地方定义

    // 异步发送消息
    bt.send();
}
```

---

## 接收消息

应用程序可以是消息的目标；也就是说，它可以从另一个应用程序接收未经请求的消息。未经请求的消息由目标应用程序中的静态 [BridgeTalk.onReceive](bridgetalk-class.md#bridgetalkonreceive) 回调函数处理。请参阅 [处理未经请求的消息](#handling-unsolicited-messages)。

发送消息的应用程序可以接收响应消息；也就是说，作为发送消息时请求响应的结果而收到的消息。这些可以是：

- 处理消息时出错的结果
- 尝试处理消息时超时的结果
- 消息接收的通知
- 中间响应
- 处理消息的最终结果。

所有这些响应消息都由目标应用程序自动发送，并由发送消息对象中定义的回调处理。有关详细信息，请参阅 [处理来自消息目标的响应](#handling-responses-from-the-message-target)。

---

## 处理未经请求的消息

要指定应用程序应如何处理未经请求的传入消息，请在 `BridgeTalk` 类的静态 [onReceive](bridgetalk-class.md#bridgetalkonreceive) 属性中定义一个回调处理函数。此函数接受一个参数，即 [BridgeTalk 消息对象](../bridgetalk-message-object)。

`onReceive` 处理程序的默认行为是使用 JavaScript 评估接收到的消息的 `body`，并返回该评估的结果。（评估脚本的结果是脚本的最后一行。）为了返回结果，它会创建一个新的消息对象，将该结果封装在该对象的 `body` 属性中的字符串中，并将该对象传递给原始消息中定义的 [onResult()](bridgetalk-message-object.md#onresult) 回调。

如果评估时发生错误，默认的 `onReceive` 处理程序会使用类似的机制返回错误信息。它会创建一个新的消息对象，将错误信息封装在该对象的 `body` 属性中的字符串中，并将该对象传递给原始消息中定义的 [onError()](bridgetalk-message-object.md#onerror) 回调。

要更改默认行为，请将 `BridgeTalk.onReceive` 属性设置为以下形式的函数定义：

```javascript
BridgeTalk.onReceive = function( bridgeTalkObject ) {
    // 在此处定义回调
};
```

接收到的消息对象的 `body` 属性包含接收到的数据。

该函数可以返回任何类型。

您定义的函数不需要显式创建并返回 `BridgeTalk` 消息对象。

消息框架会创建一个新的 `BridgeTalk` 消息对象，并将 `onReceive` 处理程序的返回值作为字符串打包到该对象的 `body` 属性中。

返回值使用 Unicode 转换格式-8（UTF-8）编码扁平化为字符串。如果函数未指定返回值，则生成的字符串为空字符串。

如果发送者为原始消息实现了 `onResult` 回调，则结果对象会传输回发送者。

### 消息处理示例

此示例展示了处理从其他应用程序接收到的未经请求的消息的默认机制。这个简单的处理程序将消息的数据作为脚本执行并返回该执行的结果：

```javascript
BridgeTalk.onReceive = function (message) {
    return eval( message.body );
}
```

此示例展示了如何扩展接收处理程序以处理新类型的消息：

```javascript
BridgeTalk.onReceive = function (message) {
    switch (message.type) {
        case "Data":
            return processData( message );
            break;
        default: //"ExtendScript"
            return eval( mesage.body );
    }
}
```

---

## 处理来自消息目标的响应

要处理您发送的消息的响应，您可以在消息对象本身中定义回调处理函数。目标应用程序无法将响应消息发送回发送者，除非它接收到的消息对象定义了适当的回调。

:::note
消息回调是可选的，并非所有支持消息的应用程序都实现了它们。
:::

当您的消息被其目标接收时，目标应用程序的静态 `BridgeTalk` 对象的 `onReceive` 方法会处理该消息，并可以调用消息对象的一个回调以返回响应。在每种情况下，消息框架都会将响应打包到一个新的消息对象中，其目标应用程序是发送者。您的回调函数会接收此响应消息对象作为参数。

响应消息可以是：

- 处理消息时出错的结果。这由 [onError()](bridgetalk-message-object.md#onerror) 回调处理。
  - 如果在处理消息体时发生错误（例如由于 JavaScript 语法错误），目标应用程序会调用 [onError()](bridgetalk-message-object.md#onerror) 回调，传递包含错误代码和错误消息的响应消息。如果您没有定义 [onError()](bridgetalk-message-object.md#onerror) 回调，则错误是完全透明的。它可能看起来像是消息未被处理，因为从未返回结果给 [onResult()](bridgetalk-message-object.md#onresult) 回调。
- 消息接收的通知。这由 [onReceived()](bridgetalk-message-object.md#onreceived) 回调处理。
  - 消息发送是异步的。从 `send` 方法获得 `true` 结果并不能保证您的消息实际上已被目标应用程序接收。如果您想收到消息接收的通知，请在消息对象中定义 [onReceived()](bridgetalk-message-object.md#onreceived) 回调。目标会将原始消息对象发送回此回调，首先将 `body` 值替换为空字符串。
- 超时的结果。这由 [onTimeout()](bridgetalk-message-object.md#ontimeout) 回调处理。
  - 您可以在消息对象的 [timeout](bridgetalk-message-object.md#timeout) 属性中指定秒数。如果消息在时间到期之前未从输入队列中移除以进行处理，则会被丢弃。如果发送者为消息定义了 [onTimeout()](bridgetalk-message-object.md#ontimeout) 回调，则目标应用程序会向发送者发送超时消息。
- 中间响应。这由 [onResult()](bridgetalk-message-object.md#onresult) 回调处理。
  - 您发送的脚本可以通过调用原始消息对象的 [sendResult()](bridgetalk-message-object.md#sendresult) 方法发送回中间响应。它可以发送任何类型的数据，但该数据会被打包到一个新消息对象的 `body` 字符串中，并传递给您的回调。请参阅 [在应用程序之间传递值](#passing-values-between-applications)。
- 处理消息的最终结果。这由 [onResult()](bridgetalk-message-object.md#onresult) 回调处理。
  - 当它完成处理您的消息时，目标应用程序可以发送回任何类型的结果。如果您发送了脚本，并且目标应用程序使用默认的 `BridgeTalk` [onReceive](bridgetalk-class.md#bridgetalkonreceive) 回调来处理消息，则返回值是该脚本评估的最终结果。无论如何，返回值会被打包到一个新消息对象的 `body` 字符串中，并传递给您的回调。请参阅 [在应用程序之间传递值](#passing-values-between-applications)。

以下示例演示了如何处理简单响应和多个响应，以及如何将错误处理与响应处理集成。

### 示例：接收简单响应

在此示例中，应用程序脚本要求 Adobe Bridge 查找某个文件夹中有多少个文件和文件夹，脚本的评估会返回该数量。（默认的 `BridgeTalk.onReceive` 方法正确处理了这一点。）

`onResult` 方法将该数字保存在 `fileCountResult` 中，这是消息的脚本定义属性，供以后使用：

```javascript
var bt = new BridgeTalk;
bt.target = "bridge-3.0";
bt.body = "new Document('C:\\BridgeScripts');app.document.target.children.length;"
bt.onResult = function( retObj ) {
    processFileCount(retObj.body);
}

bt.send();
```

### 示例：处理任何错误

在此示例中，`onError` 处理程序在发送应用程序中重新抛出错误消息：

```javascript
var bt = new BridgeTalk;
bt.onError = function (btObj) {
    var errorCode = parseInt (btObj.headers ["Error-Code"]);
    throw new Error (errorCode, btObj.body);
}
```

### 示例：处理预期的错误和响应

此示例创建了一条消息，要求 Adobe Bridge 返回特定文件的 XMP 元数据。`onResult` 方法使用脚本定义的 `processFileSize` 函数处理数据。任何错误都由 `onError` 方法处理。例如，如果请求的文件不是现有文件，则生成的错误会返回给 `onError` 方法：

```javascript
var bt = new BridgeTalk;
bt.target = "bridge-3.0";
bt.body = "var tn = new Thumbnail('C/MyPhotos/temp.gif'); tn.core.immediate.size;"
bt.onResult = function( resultMsg ) {
    processFileSize(resultMsg.body);
}

bt.onError = function( errorMsg ) {
    var errCode = parseInt (errorMsg.headers ["Error-Code"]);
    throw new Error (errCode, errorMsg.body);
}

bt.send();
```

### 示例：设置目标以发送多个响应

此示例将发送多个响应与消息体的评估集成在一起。它为以下示例中发送的消息设置了一个处理程序。

目标应用程序（Adobe Bridge）定义了一个静态的 `onReceive` 方法，以允许处理一种新类型的消息，它称之为迭代器。迭代器类型的消息期望 `message.body` 在脚本中使用迭代变量 `i`，以便在每次循环时生成不同的结果。每个结果都通过 `sendResult()` 方法发送回发送应用程序。当 `message.body` 完成其任务时，它会设置一个标志以结束 `while` 循环：

```javascript
// 在目标应用程序（Adobe Bridge）中处理消息并发送中间响应的代码
BridgeTalk.onReceive = function (message){
    switch (message.type) {
        case "iterator":
            done = false;
            i = 0;
            while (!done) {
                // message.body 使用 "i" 在每次执行消息时生成不同的结果
                // 当完成时，message.body 将 "done" 设置为 `true`
                // 以便此 onReceive 方法跳出循环。
                message.sendResult(eval(message.body));
                i++;
            }
            break;
        default: //"ExtendScript"
            return eval( message.body );
    }
}
```

### 示例：设置发送者以接收多个响应

此示例发送了一条类型为迭代器的消息，由上一个示例中的 `onReceive` 处理程序处理，并处理从该目标接收到的响应。

发送应用程序创建了一条消息，其脚本（包含在 `body`