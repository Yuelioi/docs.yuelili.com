---
title: 文件对象
---
# Folder 对象

以平台无关的方式表示文件系统中的文件夹或目录。除非另有说明，所有属性和方法都会自动解析文件系统别名并作用于原始文件。

---

## Folder 对象构造函数

```javascript
Folder( [path] ); // 可能返回一个 File 对象
new Folder( [path] ); // 始终返回一个 Folder 对象
```

要创建一个 Folder 对象，可以使用 `Folder` 函数或 `new` 操作符。构造函数接受完整或部分路径名，并返回新对象。

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `path` | String | 可选。与此对象关联的文件夹的绝对或相对路径，以平台特定或 URI 格式指定；请参阅[指定路径](../using-file-and-folder-objects#specifying-paths)。对象中存储的值为绝对路径。 |
| | | 路径不必引用现有的文件夹。如果未提供，则生成一个临时名称。 |
| | | 如果路径引用现有文件： |
| | | -`Folder` 函数返回一个 File 对象而不是 Folder 对象。 |
| | | -`new` 操作符返回一个不存在的同名文件夹的 Folder 对象。 |
| | | !!! 警告 |
| | | 在 MacOS 上的 After Effects 中，如果 `path.length` 超过 1002，After Effects 会崩溃。 |
| | | 此问题已在 MacOS 10.11.6 和 After Effects 13.8 及 14.0 中报告。 |

---

## Folder 类属性

这些属性作为 Folder 类的静态属性可用。无需创建实例即可访问它们。

### Folder.appData

`Folder.appData`

#### 描述

包含所有用户的应用程序数据的文件夹的 Folder 对象。

- 在 Windows 中，值为 `%PROGRAMDATA%`（默认情况下为 `C:\ProgramData`）
- 在 Mac OS 中，为 `/Library/Application Support`

#### 类型

Folder。只读。

---

### Folder.appPackage

`Folder.appPackage`

#### 描述

包含正在运行的应用程序的捆绑包的文件夹的 Folder 对象。

- 在 Windows 中，例如：`C:\Program Files (x86)\Adobe\Adobe ExtendScript Toolkit CC\`
- 在 Mac OS 中，例如：`/Applications/Adobe ExtendScript Toolkit CC/ExtendScript Toolkit.app`

#### 类型

String。只读。

---

### Folder.commonFiles

`Folder.commonFiles`

#### 描述

包含所有程序共用的文件的文件夹的 Folder 对象。

- 在 Windows 中，值为 `%CommonProgramFiles%`（默认情况下为 `C:\Program Files\Common Files`）
- 在 Mac OS 中，为 `/Library/Application Support`

#### 类型

Folder。只读。

---

### Folder.current

`Folder.current`

#### 描述

当前文件夹的 Folder 对象。可以通过分配 Folder 对象或包含新路径名称的字符串来设置当前文件夹。

#### 类型

Folder

---

### Folder.desktop

`Folder.desktop`

#### 描述

包含用户桌面的文件夹的 Folder 对象。

- 在 Windows 中，为 `C:\Users\[username]\Desktop`
- 在 Mac OS 中，为 `~/Desktop`

#### 类型

Folder。只读。

---

### Folder.fs

`Folder.fs`

#### 描述

文件系统的名称。

可能的值：

- `Windows`,
- `Macintosh`, 或
- `Unix`

#### 类型

String。只读。

---

### Folder.myDocuments

`Folder.myDocuments`

#### 描述

用户的默认文档文件夹的 Folder 对象。

- 在 Windows 中，为 `C:\Users\[username]\Documents`
- 在 Mac OS 中，为 `~/Documents`

#### 类型

Folder。只读。

---

### Folder.startup

`Folder.startup`

#### 描述

包含正在运行的应用程序的可执行映像的文件夹的 Folder 对象。

#### 类型

Folder。只读。

---

### Folder.system

`Folder.system`

#### 描述

包含操作系统文件的文件夹的 Folder 对象。

- 在 Windows 中，值为 `%windir%`（默认情况下为 `C:\Windows`）
- 在 Mac OS 中，为 `/System`

#### 类型

Folder。只读。

---

### Folder.temp

`Folder.temp`

#### 描述

默认临时文件夹的 Folder 对象。

#### 类型

Folder。只读。

---

### Folder.trash

`Folder.trash`

#### 描述

- 在 Mac OS 中，包含已删除项目的文件夹的 Folder 对象。
- 在 Windows 中，由于回收站是一个数据库而不是文件夹，因此值为 `null`。

#### 类型

Folder 或 `null`。只读。

---

### Folder.userData

`Folder.userData`

#### 描述

包含当前用户的应用程序数据的文件夹的 Folder 对象。

- 在 Windows 中，值为 `%APPDATA%`（默认情况下为 `C:\Users\[username]\Appdata\Roaming`）
- 在 Mac OS 中，为 `~/Library/Application Support`

#### 类型

Folder。只读。

---

## Folder 类方法

这些函数作为 Folder 类的静态方法可用。无需创建实例即可调用它们。

### Folder.decode()

`Folder.decode(uri)`

#### 描述

按照 RFC 2396 的要求解码指定的字符串。

所有特殊字符必须以 UTF-8 编码并存储为以百分号开头后跟两个十六进制数字的转义字符。例如，字符串 `"my%20file"` 解码为 `"my file"`。特殊字符是数值大于 127 的字符，除了以下字符：

```javascript
``/ - _ . ! ~ * ' ( )``
```

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `uri` | String | 要解码的编码字符串。 |

#### 返回

String

---

### Folder.encode()

`Folder.encode(name)`

#### 描述

按照 RFC 2396 的要求编码指定的字符串。

所有特殊字符必须以 UTF-8 编码并存储为以百分号开头后跟两个十六进制数字的转义字符。例如，字符串 `"my%20file"` 解码为 `"my file"`。特殊字符是数值大于 127 的字符，除了以下字符：

```javascript
``/ - _ . ! ~ * ' ( )``
```

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | String | 要编码的字符串。 |

#### 返回

String

---

### Folder.isEncodingAvailable()

`Folder.isEncodingAvailable(name)`

#### 描述

检查给定的编码是否可用。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | String | 编码名称。典型值为 `"ASCII"`、`"binary"` 或 `"UTF-8"`。请参阅 [文件和文件夹支持的编码名称](../file-and-folder-supported-encoding-names)。 |

#### 返回

Boolean。如果系统支持指定的编码，则返回 `true`，否则返回 `false`。

---

### Folder.selectDialog()

`Folder.selectDialog([prompt])`

#### 描述

打开内置的平台特定的文件浏览对话框，并为所选文件或文件夹创建一个新的 File 或 Folder 对象。与对象方法 [selectDlg()](#folderselectdlg) 不同，它不会预选文件夹。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `prompt` | String | 可选。如果对话框允许提示，则为提示文本。 |

#### 返回

如果用户点击 `OK`，则返回所选文件或文件夹的 [File](.././file-object) 或 Folder 对象。

如果用户取消，则返回 `null`。

---

## Folder 对象属性

这些属性可用于 Folder 对象。

### Folder.absoluteURI

`folderObj.absoluteURI`

#### 描述

引用文件夹的完整路径名，以 URI 表示法表示。

#### 类型

String。只读。

---

### Folder.alias

`folderObj.alias`

#### 描述

当为 `true` 时，对象引用文件系统别名或快捷方式。

#### 类型

Boolean。只读。

---

### Folder.created

`folderObj.created`

#### 描述

引用文件夹的创建日期，如果对象未引用磁盘上的文件夹，则为 `null`。

#### 类型

Date。只读。

---

### Folder.displayName

`folderObj.displayName`

#### 描述

引用文件夹的本地化名称，不带路径。

#### 类型

String。只读。

---

### Folder.error

`folderObj.error`

#### 描述

描述最近文件系统错误的消息；请参阅 [文件访问错误消息](../file-access-error-messages)。

通常由文件系统设置，但脚本也可以设置它。设置此值会清除任何错误消息并重置已打开文件的错误位。如果没有错误，则为空字符串。

#### 类型

String

---

### Folder.exists

`folderObj.exists`

#### 描述

当为 `true` 时，此对象引用文件系统中当前存在的文件夹。

#### 类型

Boolean。只读。

---

### Folder.fsName

`folderObj.fsName`

#### 描述

引用文件夹的平台特定名称，作为完整路径名。

#### 类型

String。只读。

---

### Folder.fullName

`folderObj.fullName`

#### 描述

引用文件夹的完整路径名，以 URI 表示法表示。

#### 类型

String。只读。

---

### Folder.localizedName

`folderObj.localizedName`

#### 描述

引用文件的绝对 URI 的文件夹名称部分的本地化版本，不带路径规范。

#### 类型

String。只读。

---

### Folder.modified

`folderObj.modified`

#### 描述

引用文件夹的最后修改日期，如果对象未引用磁盘上的文件夹，则为 `null`。

#### 类型

Date。只读。

---

### Folder.name

`folderObj.name`

#### 描述

引用文件的绝对 URI 的文件夹名称部分，不带路径规范。

#### 类型

String。只读。

---

### Folder.parent

`folderObj.parent`

#### 描述

包含此文件夹的文件夹的 Folder 对象，如果此对象引用卷的根文件夹，则为 `null`。

#### 类型

Folder。只读。

---

### Folder.path

`folderObj.path`

#### 描述

引用文件夹的绝对 URI 的路径部分，不带文件夹名称。

#### 类型

String。只读。

---

### Folder.relativeURI

`folderObj.relativeURI`

#### 描述

引用文件夹的路径名，以 URI 表示法表示，相对于当前文件夹。

#### 类型

String。只读。

---

## Folder 对象方法

这些函数可用于 Folder 对象。

### Folder.changePath()

`folderObj.changePath(path)`

#### 描述

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `path` | String | 新路径，绝对路径或相对于当前父文件夹的相对路径。 |

更改引用文件夹的路径规范。

#### 返回

Boolean。成功时返回 `true`。

---

### Folder.create()

`folderObj.create()`

#### 描述

在此对象的路径属性指定的位置创建文件夹。

#### 返回

Boolean。如果文件夹成功创建，则返回 `true`。

---

### Folder.execute()

`folderObj.execute()`

#### 描述

在平台特定的文件浏览器中打开此文件夹（就像在文件浏览器中双击它一样）。

#### 返回

Boolean。如果文件夹成功打开，则立即返回 `true`。

---

### Folder.getFiles()

`folderObj.getFiles([mask])`

#### 描述

检索此文件夹的内容，并根据提供的掩码进行过滤。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `mask` | String or Function | 可选。文件名的搜索掩码。 |
| | | 可以包含问号 (`?`) 和星号 (`*`) 通配符的字符串。默认为 `"*"`，匹配所有文件名。 |
| | | 也可以是函数的名称，该函数以 File 或 Folder 对象作为其参数。 |
| | | 它为搜索中找到的每个文件或文件夹调用；如果返回 `true`，则将对象添加到返回数组中。 |
| | | !!! 注意 |
| | | 在 Windows 中，所有别名都以 `.lnk` 扩展名结尾；ExtendScript 在找到时从文件名中剥离此扩展名，以保持与其他操作系统的兼容性。您可以通过提供搜索掩码 `"*.lnk"` 来搜索所有别名，但请注意，此类代码不可移植。 |

#### 返回

返回 [File](.././file-object) 和 Folder 对象的数组，如果此对象引用的文件夹不存在，则返回 `null`。

---

### Folder.getRelativeURI()

`folderObj.getRelativeURI([basePath])`

#### 描述

获取此文件夹相对于指定基路径或当前文件夹的URI表示法路径。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `basePath` | String | 可选。相对URI的基路径。默认为当前文件夹。 |

#### 返回值

String

---

### Folder.remove()

`folderObj.remove()`

#### 描述

立即从磁盘删除与此对象关联的空文件夹，不会将其移至系统回收站。

文件夹必须为空才能删除。不解析别名；而是直接删除引用的别名或快捷方式文件本身。

:::note
此操作不可撤销。建议在删除前先获取用户确认。
:::

#### 返回值

Boolean。若文件夹删除成功则返回`true`。

---

### Folder.rename()

`folderObj.rename(newName)`

#### 描述

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `newName` | String | 新文件夹名称（不包含路径信息）。 |

重命名关联的文件夹。不解析别名；而是直接重命名引用的别名或快捷方式文件本身。

#### 返回值

Boolean。操作成功时返回`true`。

---

### Folder.resolve()

`folderObj.resolve()`

#### 描述

若此对象引用的是别名或快捷方式，则解析该别名

#### 返回值

返回一个新的[Folder对象](#)，该对象引用别名解析后的文件系统元素；若此对象未引用别名或别名无法解析，则返回`null`。

---

### Folder.selectDlg()

`folderObj.selectDlg(prompt)`

#### 描述

打开内置的跨平台文件浏览对话框，并为选定的文件或文件夹创建新的File或Folder对象。

与类方法[`selectDialog()`](#folderselectdialog)的区别在于会预选此文件夹。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `prompt` | String | 对话框提示文本（若该对话框支持提示功能）。 |

#### 返回值

若用户点击`确定`，则返回所选文件/文件夹的[File](.././file-object)或Folder对象。

若用户取消操作，则返回`null`。
