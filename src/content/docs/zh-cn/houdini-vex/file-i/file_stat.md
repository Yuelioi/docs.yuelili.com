---
title: file_stat
order: 1
---

| 本页内容 | * [更优的file_stat函数](#better) * [示例](#examples) |
| --- | --- |

`int  file_stat(string filename, int &stat_data[], ...)`

用表示给定文件系统信息的整型数组覆盖原数组。

**请勿使用此函数**。`file.h`头文件提供了[更便捷的版本](file_stat.html#better)，该版本会返回结构体。

"`usecache`",
`int`
`=0`

若启用此选项，函数将使用持久化缓存存储结果。该缓存在整个应用程序运行期间持续有效。

返回值

路径有效时返回`1`，否则返回`0`。

更优的file_stat函数

## better

建议在文件顶部添加以下代码替代内置的`file_stat`：

```vex
#include <file.h>

```

随后使用该文件中的`file_stat`或`cached_file_stat`函数。这些函数接收文件路径字符串，并返回包含以下成员的结构体（定义于`file.h`）：

| `.st_size` | 文件字节大小 |
| --- | --- |
| `.st_sizemb` | 文件兆字节大小 |
| `.st_mtime` | 文件最后修改时间 |
| `->isValid()` | 当文件路径有效时返回1 |
| `->isFile()` | 当路径指向文件（而非目录）时返回1 |
| `->isDir()` | 当路径指向目录（而非文件）时返回1 |
| `->isRead()` | 当文件可读时返回1 |
| `->isWrite()` | 当文件可写时返回1 |
| `->isExecute()` | 当文件可执行时返回1 |

示例

## examples

这个简单的[代码片段](../snippets.html)检查纹理文件是否存在，若存在则将点颜色从红色改为绿色：

```vex
#include <file.h>

v@Cd = {1,0,0};
stat s = file_stat("$HH/pic/Mandril.pic");
if (s->isValid())
 v@Cd = {0,1,0};

```

此示例利用`file_stat`信息定义了`file_size`、`file_exists`和`file_isdir`便捷函数：

```vex
#include <file.h>

int file_size(string name)
{
 stat info(name);
 return file_stat(name)->st_size;
}

int file_exists(string name)
{
 // 使用缓存的file_stat()结果
 return cached_file_stat(name)->isValid();
}

int file_isdir(string name)
{
 return file_stat(name)->isDir();
}

```
