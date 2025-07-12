---
title: usd_primvarattribname
order: 106
---
| Since | 18.0 |
| --- | --- |

`string  usd_primvarattribname(<stage>stage, string name)`

此函数返回与给定primvar名称对应的带命名空间的属性名称。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取stage。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或使用`op:`作为路径前缀引用其他LOP节点的已处理stage（例如"op:/stage/lop_node"）。

`name`

Primvar名称（不带命名空间）。

返回值

与给定primvar名称对应的属性带命名空间名称。

## 示例

```vex
// 获取给定primvar对应的属性名称
string attrib_name = usd_primvarattribname(0, "some_primvar");
int is_attrib = usd_isattrib(0, "/geo/sphere", attrib_name);

```
