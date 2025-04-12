---
title: usd_purpose
order: 116
---
| 始于版本 | 17.5 |
| --- | --- |

`string  usd_purpose(<stage>stage, string primpath)`

此函数返回指定图元（primitive）的用途（purpose），例如"default"（默认）、"render"（渲染）、"proxy"（代理）、"guide"（引导）等。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号的整数（从0开始）以读取对应的stage。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或使用`op:`作为路径前缀引用其他LOP节点已处理的stage（例如"op:/stage/lop_node"）。

`primpath`

图元的路径。

返回值

指定图元的用途。

## 示例

```vex
// 获取球体图元的用途
string purpose = usd_purpose(0, "/geo/sphere");

```
