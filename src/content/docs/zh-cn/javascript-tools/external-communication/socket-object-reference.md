---
title: socket-object-reference
---
# Socket Object Reference

This section provides details of the object's properties and methods.

Socket object constructor:

```javascript
[new] Socket();
```

Creates and returns a new [Socket object](.././socket-object).

---

## 属性

### Socket.connected

`socketObj.connected`

#### 描述

When `true`, the connection is active.

#### 类型

Boolean. Read only.

---

### Socket.encoding

`socketObj.encoding`

#### 描述

Sets or retrieves the name of the encoding used to transmit data.

Typical values are `"ASCII"`, `"BINARY"`, or `"UTF-8"`.

#### 类型

String

---

### Socket.eof

`socketObj.eof`

#### 描述

When `true`, the receive buffer is empty.

#### 类型

Boolean. Read only.

---

### Socket.error

`socketObj.error`

#### 描述

A message describing the most recent error. Setting this value clears any error message.

#### 类型

String

---

### Socket.host

`socketObj.host`

#### 描述

The name of the remote computer when a connection is established.

If the connection is shut down or does not exist, the property contains the empty string.

#### 类型

String. Read only.

---

### Socket.timeout

`socketObj.timeout`

#### 描述

The timeout in seconds to be applied to read or write operations. Default is `10`.

#### 类型

Number

---

## 函数

### Socket.close()

`socketObj.close();`

#### 描述

Terminates the open connection. Deleting the object also closes the connection, but not until JavaScript garbage-collects the object.

The connection might stay open longer than you wish if you do not close it explicitly.

#### 返回

Boolean. `true` if the connection was closed, `false` on I/O errors.

---

### Socket.listen()

`socketObj.listen(port[, encoding="ASCII"]);`

#### 描述

Instructs the object to start listening for an incoming connection.

The call to `open()` and the call to `listen()` are mutually exclusive. Call one function or the other, not both.

#### 参数

| 参数  |  类型   |                                                                     描述                                                                     |
| ---------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `port`     | Number. | The TCP/IP port number to listen on. Valid port numbers are `[1..65535]`. Typical values are 80 for a Web server, 23 for a Telnet server and so on. |
| `encoding` | String  | Optional. The encoding to be used for the connection. Typical values are `"ASCII"`, `"binary"`, or `"UTF-8"`. Default is `"ASCII"`                  |

#### 返回

Boolean. `true` on success.

---

### Socket.open()

`socketObj.open(host[, encoding="ASCII"]);`

#### 描述

Opens the connection for subsequent read/write operations.

The call to open() and the call to listen() are mutually exclusive. Call one function or the other, not both.

#### 参数

| 参数  |  类型  |                                                                                                       描述                                                                                                       |
| ---------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `host`     | String | The name or IP address of the remote computer, followed by a colon and the port number to connect to. The port number is required. Valid computer names are, for example, `"www.adobe.com:80"` or `"192.150.14.12:80"`. |
| `encoding` | String | Optional. The encoding to be used for the connection. Typical values are `"ASCII"`, `"binary"`, or `"UTF-8"`. Default is `"ASCII"`                                                                                      |

#### 返回

Boolean. `true` on success.

---

### Socket.poll()

`socketObj.poll();`

#### 描述

Checks a listening object for a new incoming connection. If a connection request was detected, the method returns a new Socket object that wraps the new connection. Use this connection object to communicate with the remote computer.

After use, close the connection and delete the JavaScript object. If no new connection request was detected, the method returns null.

#### 参数

#### 返回

[Socket object](.././socket-object) or `null`.

---

### Socket.read()

`socketObj.read([count=0]);`

#### 描述

Reads up to the specified number of characters from the connection, waiting if necessary.

Ignores CR characters unless encoding is set to `BINARY`.

#### 参数

| 参数 |  类型  |                                                  描述                                                   |
| --------- | ------ | -------------------------------------------------------------------------------------------------------------- |
| `count`   | Number | Optional. The number of characters to read. If negative, the call is equivalent to `readln()`. Default is `0`. |

#### 返回

String that contains up to the number of characters that were supposed to be read, or the number of characters read before the connection closed or timed out.

---

### Socket.readln()

`socketObj.readln();`

#### 描述

#### 参数

Reads one line of text up to the next line feed. Line feeds are recognized as LF or CRLF pairs.

CR characters are ignored.

#### 返回

String

---

### Socket.write()

`socketObj.write(text[, text...]);`

#### 描述

Concatenates all arguments into a single string and writes that string to the connection.

CRLF sequences are converted to LFs unless encoding is set to `BINARY.`

#### 参数

| 参数 |  类型   |                                          描述                                          |
| --------- | ------- | --------------------------------------------------------------------------------------------- |
| `text`    | String. | Any number of string values. All arguments are concatenated to form the string to be written. |

#### 返回

Boolean. `true` on success.

---

### Socket.writeln()

`socketObj.writeln(text[, text...]);`

#### 描述

Concatenates all arguments into a single string, appends a Line Feed character, and writes that string to the connection.

#### 参数

| 参数 |  类型   |                                          描述                                          |
| --------- | ------- | --------------------------------------------------------------------------------------------- |
| `text`    | String. | Any number of string values. All arguments are concatenated to form the string to be written. |

#### 返回

Boolean. `true` on success.
