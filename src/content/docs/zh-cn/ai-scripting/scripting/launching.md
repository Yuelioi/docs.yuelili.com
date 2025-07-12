---
title: 从脚本启动和退出Illustrator
---
# 从脚本启动和退出Illustrator

你的脚本可以控制Illustrator的激活和终止。

---

## 启动和激活Illustrator

### AppleScript

在AppleScript中，你可以使用`tell`语句来定位Illustrator。

`activate`命令会在Illustrator未激活时激活它。

```javascript
tell application "Adobe Illustrator"
activate
end tell
```

### JavaScript

通常情况下，你从应用程序的脚本菜单（文件 > 脚本）或启动文件夹中运行JavaScript脚本，因此不需要从脚本中启动Illustrator。

有关在JavaScript中启动Illustrator的信息超出了本指南的范围。

详情请参阅[JavaScript工具指南](https://extendscript.docsforadobe.dev/)中的[应用程序间通信](https://extendscript.docsforadobe.dev/introduction/extendscript-overview.html#interapplication-communication-and-messaging)或[JavaScript消息框架](https://extendscript.docsforadobe.dev/interapplication-communication/communications-overview.html#messaging-framework)。

### VBScript

在VBScript中，有几种方法可以创建Illustrator的实例：

- `CreateObject`会在Illustrator未运行时将其作为不可见应用程序启动。如果Illustrator作为不可见应用程序启动，你必须手动激活应用程序以使其可见：

 ```vbscript
 Set appRef = CreateObject("Illustrator.Application")
 ```

 如果你在同一台机器上安装了多个版本的Illustrator，并使用`CreateObject`方法获取应用程序引用，使用"Illustrator.Application"会创建对最新版本Illustrator的引用。要专门针对早期版本，请在字符串末尾使用版本标识符：

 | 版本 | 标识符 |
 | --- | --- |
 | Illustrator 10 | "Illustrator.Application.1" |
 | Illustrator CS | "Illustrator.Application.2" |
 | Illustrator CS2 | "Illustrator.Application.3" |
 | Illustrator CS3 | "Illustrator.Application.4" |
 | Illustrator CS4 | "Illustrator.Application.CS4" |
 | Illustrator CS5 | "Illustrator.Application.CS5" |
 | Illustrator CS6 | "Illustrator.Application.CS6" |
 | Illustrator CC | "Illustrator.Application.CC" |
 | Illustrator CC 2014 | "Illustrator.Application.CC2014" |
 | Illustrator CC 2015 | "Illustrator.Application.CC2015" |
 | Illustrator CC 2017 | "Illustrator.Application.CC2017" |

- 如果你向项目添加了对Illustrator类型库的引用，可以使用`New`运算符。例如，以下代码行创建了对Application对象的新引用：

 ```vbscript
 Set appRef = New Illustrator.Application
 ```

---

## 退出Illustrator

### AppleScript

使用`quit`命令：

```javascript
tell application "Adobe Illustrator"
quit
end tell
```

### JavaScript

使用`app.quit()`方法：

```javascript
app.quit();
```

### VBScript

使用Application对象的`Quit`方法：

```javascript
Set appRef = CreateObject("Illustrator.Application")
appRef.Quit
```
