---
title: usd_boundmaterialpath
order: 27
---
| 始于版本 | 18.0 |
| --- | --- |

`string  usd_boundmaterialpath(<stage>stage, string primpath)`

此函数返回指定图元的材质路径。如果未绑定材质，则可能返回空字符串。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取舞台。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或使用`op:`作为路径前缀引用其他LOP节点的已处理舞台（例如"op:/stage/lop_node"）。

`primpath`

图元的路径。

返回值

绑定到指定图元的材质。

## 示例

```vex
// 获取球体图元的材质
string matpath = usd_boundmaterialpath(0, "/geo/sphere");

```
