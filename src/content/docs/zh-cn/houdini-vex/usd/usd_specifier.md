---
title: usd_specifier
order: 144
---
| 版本 | 19.0 |
| --- | --- |

`string  usd_specifier(<stage>stage, string primpath)`

此函数返回指定图元的标识符，例如"def"、"class"等。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取对应输入的场景。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点已处理的场景（如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

返回值

指定图元的标识符。

## 示例

```vex
// 获取球体图元的标识符
string specifier = usd_specifier(0, "/geo/sphere");

```
