---
title: 使用文件和文件夹对象
---
# 使用文件和文件夹对象

由于 Windows、Mac OS 和 UNIX® 上的路径名称语法差异很大，Adobe ExtendScript 定义了 `File` 和 `Folder` 对象，以提供与平台无关的底层文件系统访问。`File` 对象表示磁盘文件，`Folder` 对象表示目录或文件夹。

- `Folder` 对象支持文件系统功能，例如遍历层次结构、创建、重命名或删除文件，或解析文件别名。
- `File` 对象支持输入/输出功能以读取或写入文件。

有几种方法可以区分 `File` 和 `Folder` 对象。例如：

```javascript
if ( f instanceof File ) ...
if ( typeof f.open == "undefined" ) ... // 文件夹无法打开
```

文件和文件夹对象可以在需要路径名称的任何地方使用，例如文件和文件夹的属性和参数中。

:::note
当你创建两个引用同一磁盘文件的 `File` 对象时，它们被视为不同的对象。如果你打开其中一个进行 I/O 操作，操作系统可能会阻止从另一个对象访问，因为磁盘文件已经打开。
:::

---

## 指定路径

在创建 `File` 或 `Folder` 对象时，你可以指定特定于平台的路径名称，或以称为统一资源标识符（URI）表示法的平台无关格式指定绝对或相对路径。对象中存储的路径始终是绝对路径名称，指向磁盘上的固定位置。

- 使用 `toString` 方法获取文件或文件夹的名称，作为包含 URI 表示法中绝对路径名称的字符串。
- 使用 `fsName` 属性获取特定于平台的文件名。

### 绝对和相对路径名称

URI 表示法中的绝对路径名称描述了从根目录到特定文件或文件夹的完整路径。它以一个或两个斜杠（`/`）开头，斜杠分隔路径元素。

例如，以下描述了文件 `myFile.jsx` 的绝对位置：

```javascript
/dir1/dir2/mydir/myFile.jsx
```

URI 表示法中的相对路径名称附加到当前目录的路径中，该路径存储在 `Folder` 类的全局可用 `current` 属性中。它以文件夹或文件名开头，或以特殊名称点（`.`）表示当前目录，或以点点（`..`）表示当前目录的父目录。斜杠（`/`）分隔路径元素。

例如，以下路径描述了文件 `myFile.jsx` 的各种相对位置：

| 文件引用 | 位置 |
| --- | --- |
| `myFile.jsx` | 在当前目录中。 |
| `./myFile.jsx` | |
| `../myFile.jsx`| 在当前目录的父目录中。 |
| `../../myFile.jsx` | 在当前目录的祖父目录中。 |
| `../dir1/myFile.jsx` | 在 `dir1` 中，与当前目录平行。 |

相对路径名称独立于不同机器和操作系统上的不同卷名，因此使你的代码更具可移植性。例如，你可以使用绝对路径进行单个操作，以在 `Folder.current` 属性中设置当前目录，并对所有其他操作使用相对路径。然后，你只需要一次代码更改即可更新到新平台或文件位置。

### 路径中的字符解释

在路径名称的解释上存在一些平台差异：

- 在 Windows 和 Mac OS 上，路径名称不区分大小写。在 UNIX 上，路径区分大小写。
- 在 Windows 上，斜杠（`/`）和反斜杠（`\`）都是有效的路径元素分隔符。反斜杠是转义字符，因此你必须使用双反斜杠（`\\`）来表示该字符。
- 在 Mac OS 上，斜杠（`/`）和冒号（`:`）都是有效的路径元素分隔符。

如果路径名称以两个斜杠（或在 Windows 上为反斜杠）开头，则第一个元素引用远程服务器。例如，`//myhost/mydir/myfile` 引用服务器 `myhost` 上的路径 `/mydir/myfile`。

URI 表示法允许路径名称中的特殊字符，但它们必须使用转义字符（%）后跟十六进制字符代码指定。特殊字符是非字母数字且不是以下字符之一的字符：

```javascript
/ - - . ! ~ * ' ( )
```

例如，空格编码为 `%20`，因此文件名 `"my file"` 指定为 `"my%20file"`。同样，字符 `ä` 编码为 `%E4`，因此文件名 `"Bräun"` 指定为 `"Br%E4un"`。

此编码方案与全局 JavaScript 函数 `encodeURI` 和 `decodeURI` 兼容。

### 主目录

路径名称可以以波浪号（`~`）开头，表示用户的主目录。它对应于平台的 `HOME` 环境变量。

UNIX 和 Mac OS 根据用户登录分配 `HOME` 环境变量。在 Mac OS 上，默认主目录是 `/Users/username`。在 UNIX 上，通常是 `/home/username` 或 `/users/username`。ExtendScript 直接从平台值分配主目录值。

在 Windows 上，`HOME` 环境变量是可选的。如果已分配，其值必须是 Windows 路径名称或引用远程服务器的路径名称（例如 `\\myhost\mydir`）。如果 `HOME` 环境变量未定义，ExtendScript 默认是用户的主目录，通常是 `C:\Users\username` 文件夹。

:::note
脚本可以通过静态、全局可用的 `Folder` 类属性访问许多使用平台特定变量指定的文件夹；例如，`appData` 包含存储所有用户应用程序数据的文件夹。
:::

### 卷和驱动器名称

卷或驱动器名称可以是 URI 表示法中绝对路径的第一部分。这些值根据平台进行解释。

#### Mac OS 卷

当 Mac OS X 启动时，启动卷是文件系统的根目录。所有其他卷，包括远程卷，都是 `/Volumes` 目录的一部分。`File` 和 `Folder` 对象使用以下规则解释路径名称的第一个元素：

- 如果名称是启动卷的名称，则丢弃它。
- 如果名称是卷名，则前缀 `/Volumes`。
- 否则，保持路径不变。

Mac OS 9 不再作为操作系统支持，但仍然支持使用冒号作为路径分隔符，并且与 URI 和 Mac OS X 路径对应，如下表所示。这些示例假设启动卷为 `MacOSX`，并且有一个挂载的卷 `Remote`。

| URI 路径名称 | Mac OS 9 路径名称 | Mac OS X 路径名称 |
| --- | --- | --- |
| `/MacOSX/dir/file` | `MacOSX:dir:file` | `/dir/file` |
| `/Remote/dir/file` | `Remote:dir:file` | `/Volumes/Remote/dir/file` |
| `/root/dir/file` | `Root:dir:file` | `/root/dir/file` |
| `~/dir/file` | | `/Users/jdoe/dir/file` |

#### Windows 驱动器

在 Windows 上，卷名对应于驱动器字母。URI 路径 `/c/temp/file` 通常转换为 Windows 路径 `C:\temp\file`。

如果存在与路径第一部分匹配的驱动器名称，则该部分始终解释为该驱动器。

根目录中可能存在与驱动器名称相同的文件夹；例如，假设 Windows 上有一个文件夹 `C:\C`。以 `/c` 开头的路径始终寻址驱动器 `C:`，因此在这种情况下，要按名称访问该文件夹，你必须同时使用驱动器名称和文件夹名称，例如 `/c/c` 表示 `C:\C`。

如果当前驱动器包含与另一个驱动器字母同名的根文件夹，则该名称被视为文件夹。也就是说，如果存在文件夹 `D:\C`，并且当前驱动器是 `D:`，则 URI 路径 `/c/temp/file` 转换为 Windows 路径 `D:\c\temp\file`。在这种情况下，要访问驱动器 `C`，你必须使用 Windows 路径名称约定。

要访问远程卷，请使用统一命名约定（UNC）路径名称，形式为 `//servername/sharename`。这些路径名称是可移植的，因为 Mac OS X 和 UNIX 都会忽略多个斜杠字符。请注意，在 Windows 上，UNC 名称不适用于本地卷。这些示例假设当前驱动器为 `D:`。

| URI 路径名称 | Windows 路径名称 |
| --- | --- |
| `/c/dir/file` | `c:\\dir\\file` |
| `/remote/dir/file`| `D:\\remote\\dir\\file` |
| `/root/dir/file` | `D:\\root\\dir\\file` |
| `~/dir/file` | `C:\\Users\\jdoe\\dir\\file` |

### 别名

当你访问别名时，操作会透明地转发到实际文件。唯一影响别名的操作是调用 `rename` 和 `remove`，以及设置属性 `readonly` 和 `hidden`。当 `File` 对象表示别名时，对象的 `alias` 属性返回 `true`，`resolve` 方法返回别名目标的 `File` 或 `Folder` 对象。

在 Windows 上，所有文件系统别名（称为快捷方式）都是实际文件，其名称以 `.lnk` 扩展名结尾。切勿直接使用此扩展名；`File` 和 `Folder` 对象无需它即可工作。

例如，假设在文件夹 `/folder2` 中有一个指向文件 `/folder1/some.txt` 的快捷方式。快捷方式文件的完整 Windows 文件名为 `\folder2\some.txt.lnk`。

要从 `File` 对象访问快捷方式，请指定路径 `/folder2/some.txt`。调用该 `File` 对象的 `open` 方法将打开链接文件（在 `/folder1` 中）。调用 `File` 对象的 `rename` 方法将重命名快捷方式文件本身（保留 `.lnk` 扩展名）。

然而，Windows 允许文件及其快捷方式位于同一文件夹中。在这种情况下，`File` 对象始终访问原始文件。当快捷方式与其链接文件位于同一文件夹时，你无法创建 `File` 对象来访问快捷方式。

脚本可以通过为磁盘上尚不存在的文件创建 `File` 对象，并使用其 [`createAlias`](../../file-system-access/file-object#filecreatealias) 方法指定别名的目标来创建文件别名。

### 可移植性问题

如果你的应用程序将在多个平台上运行，请使用相对路径名称，或尝试从主目录生成路径名称。如果不可能，请使用 Mac OS X 和 UNIX 别名，并将文件存储在 Windows 机器的远程机器上，以便你可以使用 UNC 名称。

例如，假设你使用 UNIX 机器 `myServer` 进行数据存储。如果你在 `myServer` 的根目录中设置别名共享，并在 `share` 处设置指向同一数据位置的 Windows 可访问共享，则路径名称 `//myServer/share/file` 将适用于所有三个平台。

---

## Unicode I/O

在进行文件 I/O 时，Adobe 应用程序将 8 位字符编码转换为 Unicode。默认情况下，此转换过程假定使用系统编码（Windows 上的代码页 1252 或 Mac OS 上的 Mac Roman）。`File` 对象的 `encoding` 属性返回当前编码。你可以将 `encoding` 属性设置为所需编码的名称。`File` 对象在操作系统中查找相应的编码器以用于后续 I/O。名称是用于描述 HTML 文件编码的标准 Internet 名称之一，例如 `ASCII`、`X-SJIS` 或 `ISO-8859-1`。有关完整列表，请参阅 [文件和文件夹支持的编码名称](../file-and-folder-supported-encoding-names)。

提供了一个特殊的编码器 `BINARY` 用于二进制 I/O。此编码器简单地将找到的每个 8 位字符扩展为 0 到 255 之间的 Unicode 字符。当使用此编码器写入二进制文件时，编码器写入 Unicode 字符的低 8 位。例如，要写入 Unicode 字符 `1000`（即 `0x3E8`），编码器实际上写入字符 232（`0xE8`）。

某些常见文件格式（UCS-2、UCS-4、UTF-8、UTF-16）的数据以特殊的字节顺序标记（BOM）字符（`\uFEFF`）开头。`File.open` 方法读取文件的前几个字节以查找此字符。如果找到，则自动设置相应的编码并跳过该字符。如果文件开头没有 BOM 字符，`open()` 会读取文件的前 2 KB 并检查数据是否可能是有效的 UTF-8 编码数据，如果是，则将编码设置为 UTF-8。

要以 UTF-16 格式写入 16 位 Unicode 文件，请使用编码 UCS-2。此编码使用主机平台支持的任何字节顺序格式。

使用 UTF-8 编码或 16 位 Unicode 时，始终将 BOM 字符 `"\uFEFF"` 作为文件的第一个字符写入。

---

## 文件错误处理

每个对象都有一个 `error` 属性。如果访问属性或调用方法导致错误，此属性包含描述错误类型的消息。成功时，该属性包含空字符串。你可以设置该属性，但设置它只会清除错误消息。如果文件已打开，为该属性分配任意值也会重置其错误标志。

有关支持的完整错误消息列表，请参阅 [文件访问错误消息](../file-access-error-messages)。
