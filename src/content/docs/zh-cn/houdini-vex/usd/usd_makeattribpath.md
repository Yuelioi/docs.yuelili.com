---
title: usd_makeattribpath
order: 86
---
| 版本 | 18.0 |
| --- | --- |

`string  usd_makeattribpath(<stage>stage, string primpath, string name)`

此函数返回给定属性的完整路径。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取舞台。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或使用`op:`作为路径前缀引用其他LOP节点的已处理舞台（例如"op:/stage/lop_node"）。

`primpath`

基元的路径。

`name`

属性名称。

返回值

给定属性的完整路径。

## 示例

```vex
// 获取立方体基元上"attrib_name"属性的完整路径
string attrib_path = usd_makeattribpath(0, "/geo/cube", "attrib_name");

```
