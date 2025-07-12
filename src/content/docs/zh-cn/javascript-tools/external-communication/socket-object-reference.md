---
title: socket-object-reference
---
# Socket 对象参考

本节提供了该对象的属性和方法的详细信息。

Socket 对象构造函数：

```javascript
[new] Socket();
```

创建并返回一个新的 [Socket 对象](.././socket-object)。

---

## 属性

### Socket.connected

`socketObj.connected`

#### 描述

当值为 `true` 时，表示连接处于活动状态。

#### 类型

布尔值。只读。

---

### Socket.encoding

`socketObj.encoding`

#### 描述

设置或获取用于传输数据的编码名称。

典型值为 `"ASCII"`、`"BINARY"` 或 `"UTF-8"`。

#### 类型

字符串

---

### Socket.eof

`socketObj.eof`

#### 描述

当值为 `true` 时，表示接收缓冲区为空。

#### 类型

布尔值。只读。

---

### Socket.error

`socketObj.error`

#### 描述

描述最近一次错误的消息。设置此值会清除任何错误消息。

#### 类型

字符串

---

### Socket.host

`socketObj.host`

#### 描述

建立连接时远程计算机的名称。

如果连接已关闭或不存在，则该属性包含空字符串。

#### 类型

字符串。只读。

---

### Socket.timeout

`socketObj.timeout`

#### 描述

应用于读取或写入操作的超时时间（以秒为单位）。默认值为 `10`。

#### 类型

数字

---

## 函数

### Socket.close()

`socketObj.close();`

#### 描述

终止打开的连接。删除对象也会关闭连接，但只有在 JavaScript 垃圾回收该对象时才会关闭。

如果不显式关闭连接，连接可能会保持打开状态的时间比预期的更长。

#### 返回

布尔值。如果连接已关闭，则返回 `true`；如果发生 I/O 错误，则返回 `false`。

---

### Socket.listen()

`socketObj.listen(port[, encoding="ASCII"]);`

#### 描述

指示对象开始监听传入连接。

`open()` 调用和 `listen()` 调用是互斥的。只能调用其中一个函数，不能同时调用两者。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `port` | 数字。 | 要监听的 TCP/IP 端口号。有效端口号为 `[1..65535]`。典型值为 80（用于 Web 服务器）、23（用于 Telnet 服务器）等。 |
| `encoding` | 字符串 | 可选。用于连接的编码。典型值为 `"ASCII"`、`"binary"` 或 `"UTF-8"`。默认值为 `"ASCII"`。 |

#### 返回

布尔值。成功时返回 `true`。

---

### Socket.open()

`socketObj.open(host[, encoding="ASCII"]);`

#### 描述

打开连接以进行后续的读/写操作。

`open()` 调用和 `listen()` 调用是互斥的。只能调用其中一个函数，不能同时调用两者。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `host` | 字符串 | 远程计算机的名称或 IP 地址，后跟冒号和要连接的端口号。端口号是必需的。有效的计算机名称示例为 `"www.adobe.com:80"` 或 `"192.150.14.12:80"`。 |
| `encoding` | 字符串 | 可选。用于连接的编码。典型值为 `"ASCII"`、`"binary"` 或 `"UTF-8"`。默认值为 `"ASCII"`。 |

#### 返回

布尔值。成功时返回 `true`。

---

### Socket.poll()

`socketObj.poll();`

#### 描述

检查监听对象是否有新的传入连接。如果检测到连接请求，则该方法返回一个新的 Socket 对象，该对象封装了新连接。使用此连接对象与远程计算机通信。

使用后，关闭连接并删除 JavaScript 对象。如果未检测到新的连接请求，则该方法返回 `null`。

#### 参数

#### 返回

[Socket 对象](.././socket-object) 或 `null`。

---

### Socket.read()

`socketObj.read([count=0]);`

#### 描述

从连接中读取指定数量的字符，必要时等待。

除非编码设置为 `BINARY`，否则忽略 CR 字符。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `count` | 数字 | 可选。要读取的字符数。如果为负数，则调用等同于 `readln()`。默认值为 `0`。 |

#### 返回

包含最多应读取的字符数的字符串，或在连接关闭或超时之前读取的字符数。

---

### Socket.readln()

`socketObj.readln();`

#### 描述

#### 参数

读取一行文本，直到下一个换行符。换行符识别为 LF 或 CRLF 对。

忽略 CR 字符。

#### 返回

字符串

---

### Socket.write()

`socketObj.write(text[, text...]);`

#### 描述

将所有参数连接成一个字符串并将该字符串写入连接。

除非编码设置为 `BINARY`，否则 CRLF 序列将转换为 LF。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `text` | 字符串。 | 任意数量的字符串值。所有参数将连接起来形成要写入的字符串。 |

#### 返回

布尔值。成功时返回 `true`。

---

### Socket.writeln()

`socketObj.writeln(text[, text...]);`

#### 描述

将所有参数连接成一个字符串，附加一个换行符，并将该字符串写入连接。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `text` | 字符串。 | 任意数量的字符串值。所有参数将连接起来形成要写入的字符串。 |

#### 返回

布尔值。成功时返回 `true`。
