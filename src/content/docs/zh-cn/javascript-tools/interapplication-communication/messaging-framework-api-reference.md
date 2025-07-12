---
title: 消息框架 API 参考
---
# 消息框架 API 参考

此应用程序编程接口 (API) 定义了支持消息传递的应用程序之间的通信协议。当加载任何应用程序时，这些对象对所有 ExtendScript 脚本可用。

消息协议是可扩展的。虽然它主要是为发送脚本设计的，但您也可以使用它来发送其他类型的数据。

消息 API 定义了 `BridgeTalk` 类。该类的静态属性和方法提供了与应用程序间通信相关的环境信息。实例化该类以创建 `BridgeTalk` 消息对象，该对象封装了消息本身。有关讨论和示例，请参阅 [通过消息进行通信](../communicating-through-messages)，以及 [Adobe ExtendScript SDK](https://github.com/Adobe-CEP/CEP-Resources/tree/master/ExtendScript-Toolkit) 提供的示例代码。

## 示例代码

[Adobe ExtendScript SDK](https://github.com/Adobe-CEP/CEP-Resources/tree/master/ExtendScript-Toolkit) 分发的示例代码中包含以下专门演示应用程序间消息传递的代码示例：

| 应用程序间消息传递示例 | 描述 |
| --- | --- |
| [MessagingBetweenApps.jsx](https://github.com/Adobe-CEP/CEP-Resources/blob/master/ExtendScript-Toolkit/Samples/javascript/MessagingBetweenApps.jsx) | 展示如何向 Creative Suite 应用程序发送消息并接收响应。 |
| [MessageSendingToInDesign.jsx](https://github.com/Adobe-CEP/CEP-Resources/blob/master/ExtendScript-Toolkit/Samples/javascript/MessageSendingToInDesign.jsx) | 通过 BridgeTalk 向 InDesign 发送消息。 |
| SendArrayToPhotoshop.jsx | 向 Photoshop 发送消息，在目标中创建一个数组并将其传递回发送者。 |
| [SendObjectToPhotoshop.jsx](https://github.com/Adobe-CEP/CEP-Resources/blob/master/ExtendScript-Toolkit/Samples/javascript/SendObjectToPhotoshop.jsx) | 向 Photoshop 发送消息，在目标中创建一个 JavaScript 对象并将其传递回发送者。 |
| [SendDOMObjectToPhotoshop.jsx](https://github.com/Adobe-CEP/CEP-Resources/blob/master/ExtendScript-Toolkit/Samples/javascript/SnpSendDOMObject.jsx) | 向 Photoshop 发送消息，在目标中创建一个 Photoshop 对象并将其值传递回发送者。 |
| [SaveAsDifferentFileType.jsx](https://github.com/Adobe-CEP/CEP-Resources/blob/master/ExtendScript-Toolkit/Samples/javascript/SaveAsDifferentFileType.jsx) | 定位图像文件，使用消息传递将其加载到 Photoshop 中并另存为不同的文件类型。 |
