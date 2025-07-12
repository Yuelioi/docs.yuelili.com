---
title: socket-对象
---
# Socket 对象

TCP 连接是互联网的基本传输层。每次您的 Web 浏览器连接到服务器并请求新页面时，它都会打开一个 TCP 连接来处理请求以及服务器的响应。JavaScript 的 Socket 对象允许您连接到互联网上的任何服务器，并与该服务器交换数据。

Socket 对象提供了通过 TCP/IP 网络或互联网连接到远程计算机的基本功能。它提供了诸如 [`open()`](../socket-object-reference#socketopen) 和 [`close()`](../socket-object-reference#socketclose) 等调用来建立或终止连接，以及 [`read()`](../socket-object-reference#socketread) 或 [`write()`](../socket-object-reference#socketwrite) 来传输数据。[`listen()`](../socket-object-reference#socketlisten) 方法用于建立一个简单的互联网服务器；服务器使用 [`poll()`](../socket-object-reference#socketpoll) 方法来检查传入的连接。

许多这些连接基于简单的 ASCII 数据交换，而其他协议（如 FTP 协议）则更为复杂，涉及二进制数据。最简单的协议之一是 HTTP 协议。

以下示例是一个 TCP/IP 客户端，它连接到一个 WWW 服务器（该服务器监听端口 80）；然后发送一个非常简单的 HTTP GET 请求以获取 WWW 服务器的主页，然后读取响应，即主页以及 HTTP 响应头：

```javascript
var reply = "";
var conn = new Socket;

// 访问 Adobe 的主页
if (conn.open ("www.adobe.com:80")) {

 // 发送 HTTP GET 请求
 conn.write ("GET /index.html HTTP/1.0\n\n");

 // 并读取服务器的响应
 reply = conn.read(999999);

 conn.close();
}
```

执行此代码后，变量 `reply` 包含 Adobe 主页的内容以及 HTTP 响应头。

建立一个互联网服务器稍微复杂一些。典型的服务器程序会等待传入的连接，然后处理这些连接。通常，您不希望应用程序在无限循环中运行，等待任何传入的连接请求。因此，您可以通过调用 Socket 对象的 [`poll()`](../socket-object-reference#socketpoll) 方法来检查传入的连接。

此调用只会检查传入的连接，然后立即返回。如果有连接请求，调用 [`poll()`](../socket-object-reference#socketpoll) 将返回另一个包含全新连接的 Socket 对象。使用此连接对象与调用客户端通信；完成后，关闭连接并丢弃连接对象。

在 Socket 对象能够检查传入连接之前，必须告诉它在特定端口上监听，例如用于 HTTP 请求的端口 80。通过调用 [`listen()`](../socket-object-reference#socketlisten) 方法而不是 [`open()`](../socket-object-reference#socketopen) 方法来实现这一点。

以下示例是一个非常简单的 Web 服务器。它在端口 80 上监听，直到检测到传入的请求。丢弃 HTTP 头，并向调用者传输一个虚拟的 HTML 页面：

```javascript
conn = new Socket;
// 监听端口 80
if (conn.listen (80)) {
 // 永远等待连接
 var incoming;
 do incoming = conn.poll();
 while (incoming == null);

 // 丢弃请求
 conn.read();

 // 回复 HTTP 头
 incoming.writeln ("HTTP/1.0 200 OK");
 incoming.writeln ("Content-Type: text/html");
 incoming.writeln();

 // 传输虚拟主页
 incoming.writeln ("<html><body><h1>Homepage</h1></body></html>");

 // 完成！
 incoming.close();
 delete incoming;
}
```

通常，远程端点在传输数据后会终止连接。因此，有一个 `connected` 属性，只要连接仍然存在，它就包含 `true`。如果 `connected` 属性返回 `false`，则连接会自动关闭。

在发生错误时，Socket 对象的 [`error`](../socket-object-reference#socketerror) 属性包含一个简短的错误描述消息。

Socket 对象使您可以轻松实现通过互联网相互通信的软件。例如，您可以通过编写和执行 JavaScript 程序让两个 Adobe 应用程序交换文档和数据。

---

## 聊天服务器示例

以下示例代码实现了一个非常简单的聊天服务器。聊天客户端可以连接到聊天服务器，服务器正在监听端口号 1234。服务器响应欢迎消息并等待客户端的一行输入。客户端输入一些文本并将其传输到服务器，服务器显示文本并让服务器计算机的用户输入一行文本，客户端计算机再次显示。这个过程来回进行，直到服务器或客户端计算机输入单词 "bye"：

```javascript
// 一个简单的聊天服务器，监听端口 1234
function chatServer() {
 var tcp = new Socket;

 // 监听端口 1234
 writeln ("聊天服务器正在监听端口 1234");
 if (tcp.listen (1234)) {
 for (;;) {
 // 轮询新连接
 var connection = tcp.poll();
 if (connection != null) {
 writeln ("来自 " + connection.host + " 的连接");

 // 我们有一个新连接，所以欢迎并聊天
 // 直到客户端终止会话
 connection.writeln ("欢迎来到小聊天室！");
 chat (connection);
 connection.writeln ( "*** 再见 ***");
 connection.close();
 delete connection;
 writeln ("连接已关闭");
 }
 }
 }
}

function chatClient() {
 var connection = new Socket;

 // 连接到示例服务器
 if (connection.open ("remote-pc.corp.adobe.com:1234")) {
 // 然后与服务器聊天
 chat (connection);
 connection.close();
 delete connection;
 }
}

function chat (c) {
 // 设置较长的超时时间
 c.timeout=1000;

 while (true) {
 // 获取一行并回显
 writeln (c.read());

 // 如果连接断开则停止
 if (!c.connected)
 break;

 // 读取一行文本
 write ("聊天: ");
 var text = readln();

 if (text == "bye")
 // 如果用户输入 "bye" 则停止对话
 break;
 else
 // 否则传输到服务器
 c.writeln (text);
 }
}
```
