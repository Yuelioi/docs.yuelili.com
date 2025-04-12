---
title: usd_isiprimvar
order: 73
---
| 始于版本 | 19.0 |
| --- | --- |

`int  usd_isiprimvar(<stage>stage, string primpath, string name)`

此函数用于检查图元或其祖先是否具有指定名称的primvar。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取对应输入的stage。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点已烹饪的stage（例如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`name`

Primvar名称（不包含命名空间）。

返回值

如果primvar直接存在于给定图元或其祖先上，则返回`1`，否则返回`0`。

## 示例

```vex
// 检查球体图元或其祖先是否具有名为"some_primvar"的primvar
int is_primvar = usd_isiprimvar(0, "/geometry/sphere", "some_primvar");

```
