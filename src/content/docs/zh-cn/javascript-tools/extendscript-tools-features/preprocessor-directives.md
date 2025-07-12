---
title: 预处理器指令
---
# 预处理器指令

ExtendScript 提供了预处理器指令，用于包含外部脚本、命名脚本、指定 JavaScript 引擎以及设置某些标志。

可以通过以 `#` 字符开头的 C 风格语句或后跟 `@` 的注释来指定这些指令：

```javascript
#include "file.jsxinc"
//@include "file.jsxinc"
```

当指令接受一个或多个参数，并且参数包含任何非字母数字字符时，参数必须用单引号或双引号括起来。这通常适用于路径和文件名，例如包含点和斜杠的情况。

---

## #include 文件

从其他位置包含一个 JavaScript 源文件。将指定文件的内容插入到该语句所在的位置。`file` 参数是一个 Adobe 可移植文件规范。请参阅 [指定路径](../../file-system-access/using-file-and-folder-objects#specifying-paths)。

作为惯例，JavaScript 包含文件使用 `.jsxinc` 文件扩展名。例如：

```javascript
#include "../include/lib.jsxinc"
//@include "../include/file.jsxinc"
```

要为 `#include` 语句设置一个或多个扫描路径，请使用 `#includepath` 预处理器指令。

如果找不到要包含的文件，ExtendScript 会抛出运行时错误。包含的源代码不会显示在调试器中，因此无法在其中设置断点。

---

## #includepath 路径

`#include` 语句用于定位要包含的文件的一个或多个路径。分号 (`;`) 用于分隔路径名称。

如果 `#include` 文件名以斜杠 (`/`) 开头，则它是绝对路径名，并且忽略包含路径。否则，ExtendScript 会尝试通过在文件前添加由 `#includepath` 语句设置的每个路径来查找文件。

例如：

```javascript
#includepath "include;../include"
#include "file.jsxinc"
//@includepath "include;../include"
//@include "file.jsxinc"
```

允许多个 `#includepath` 语句；每次执行 `#includepath` 语句时，路径列表都会更改。

作为后备方案，ExtendScript 还使用环境变量 `JSINCLUDE` 的内容作为包含路径列表。

某些引擎可能具有预定义的包含路径集。如果是这样，`#includepath` 提供的路径会在预定义路径之前尝试。例如，如果引擎具有设置为 `predef;predef/include` 的预定义路径，则前面的示例会导致以下查找顺序：

- `file.jsxinc`：字面查找
- `include/file.jsxinc`：第一个 `#includepath` 路径
- `../include/file.jsxinc`：第二个 `#includepath` 路径
- `predef/file.jsxinc`：第一个预定义引擎路径
- `predef/include/file.jsxinc`：第二个预定义引擎路径

---

## #script 名称

为脚本命名。引号是可选的，但对于包含空格或特殊字符的名称是必需的。例如：

```javascript
#script SetupPalette
#script "Load image file"
```

`name` 值显示在 Toolkit 编辑器选项卡中。未命名的脚本会被分配一个由数字生成的唯一名称。

---

## #strict on

开启严格错误检查。请参阅 [Dollar ($) 对象](../dollar-object) 的 [strict](../dollar-object#strict) 属性。

---

## #target 名称

定义此 JSX 文件的目标应用程序。`name` 值是一个应用程序标识符；请参阅 [应用程序和命名空间标识符](../../interapplication-communication/application-and-namespace-specifiers)。引号是可选的。

如果 Toolkit 注册为 `.jsx` 扩展名文件的处理程序（默认情况下是这样），打开文件会打开目标应用程序以运行脚本。

如果此指令不存在，Toolkit 会加载并显示脚本。用户可以通过在文件浏览器中双击文件来打开文件，脚本可以使用 `File` 对象的 `execute` 方法打开文件。

---

## #targetengine 引擎名称

定义此 JSX 文件的目标 JavaScript 引擎，位于指定的目标应用程序内。

Adobe Illustrator CS5 和 Adobe InDesign CS5 支持此指令；其他应用程序会忽略该指令。

- 对于 Adobe Illustrator CS5 和 Adobe InDesign CS5，如果指定的引擎不存在，并且如果脚本源自应用程序内部（而不是在 ExtendScript Toolkit 中执行或通过应用程序间消息接收），应用程序会创建一个具有此名称的新 JavaScript 引擎，该引擎在应用程序会话的整个生命周期内持续存在。
- 如果脚本源自应用程序外部，并且指定的引擎不存在，则忽略该指令。
