---
title: externalobject 对象
---
# ExternalObject 对象

您在构造函数中指定库的名称。构造函数使用静态属性 [ExternalObject.searchFolders](#externalobjectsearchfolders) 中定义的路径搜索指定名称的库。

如果您在将库加载为 ExternalObject 时遇到困难，请将属性 `ExternalObject.log` 设置为 `true`，然后调用 `ExternalObject.search('lib:myLibrary')`。此函数执行搜索，并将搜索的路径记录到 ExtendScript Toolkit 控制台。

在加载库之前，当前文件夹会临时切换到找到的可执行文件的位置。

- 在 Mac OS 中，当前目录设置为库的 bundle 或 framework 文件夹。
- 在 Windows 和 UNIX 中，当前目录设置为包含库的文件夹。

---

## ExternalObject 构造函数

`obj = new ExternalObject ("lib:" + filespec, arg1, ...argn);`

| 参数 | 描述 |
| --- | --- |
| `filespec` | 标识符 "lib:" 区分大小写，并作为动态库的标记。将其与共享库的基本名称连接，可以带或不带扩展名。 |
| | 根据操作系统，ExtendScript 会附加必要的文件扩展名： |
| | - 在 Windows 中为 `.dll` |
| | - 在 Mac OS 中为 `.bundle` 或 `.framework`（仅支持 Mach-O bundle） |
| | - 在 UNIX 中为 `.so`（HP/UX 除外，其扩展名为 `.sl`） |
| | - 在 UNIX 中，库名称区分大小写。 |
| `arg1...argn` | 可选。传递给库初始化例程的任意数量的参数。 |

例如：

```javascript
var mylib = new ExternalObject( "lib:myLibrary" );
```

---

## ExternalObject 类属性

ExternalObject 类提供以下静态属性：

### ExternalObject.log

`ExternalObject.log`

#### 描述

设置为 `true` 以将状态信息写入标准输出（ExtendScript Toolkit 中的 JavaScript 控制台）。

设置为 `false` 以关闭日志记录。默认值为 `false`。

#### 类型

布尔值

---

### ExternalObject.searchFolders

`ExternalObject.searchFolders`

#### 描述

一组用于搜索共享库文件的备用路径，是一个包含多个路径规范的字符串，路径之间用分号（;）分隔。

路径可以是绝对路径，也可以是相对于 [Folder.startup](../../file-system-access/folder-object#folderstartup) 位置的相对路径。

默认值为：

- 在 Windows 中，`"Plugins;Plug-Ins;."`
- 在 Mac OS 中，`"Plugins;Plug-Ins;Frameworks;.;../../../Plugins;../../../Plug-ins;../../../Frameworks;../../..;"`
- 在 UNIX 中，`"Plugins;Plug-Ins;plugins;."`

#### 类型

字符串

---

### ExternalObject.version

`ExternalObject.version`

#### 描述

库的版本，由 [ESGetVersion()](../defining-entry-points-for-direct-access#esgetversion) 返回。

#### 类型

数字

---

## ExternalObject 类方法

ExternalObject 类提供以下静态函数，以帮助调试将库加载为外部对象时的问题：

### ExternalObject.search()

`ExternalObject.search(spec)`

#### 描述

报告是否可以找到已编译的 C/C++ 库，但不加载它。如果日志记录已打开，搜索的路径将报告到 ExtendScript Toolkit 中的 JavaScript 控制台。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `spec` | 字符串 | 已编译库的文件规范，可以包含或不包含路径信息。 |

#### 返回

布尔值。如果找到库，则为 `true`，否则为 `false`。

---

## ExternalObject 对象方法

### ExternalObject.terminate()

`externalObj.terminate()`

#### 描述

显式关闭此实例包装的 `ExternalObject` 动态库。

如果在宿主应用程序关闭期间外部库的终止顺序不正确，强制关闭外部库可能会有所帮助。

#### 返回

无
