---
title: usd_isrelationship
order: 79
---
| 始于版本 | 18.0 |
| --- | --- |

`int  usd_isrelationship(<stage>stage, string primpath, string name)`

该函数用于检查图元是否具有指定名称的关系。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取对应的stage。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已处理stage（例如"op:/stage/lop_node"）。

`primpath`

图元的路径。

`name`

关系名称。

返回值

如果图元具有该关系则返回`1`，否则返回`0`。

## 示例

```vex
// 检查立方体是否具有"some_relationship"关系
int is_valid_relationship = usd_isrelationship(0, "/geo/cube", "some_relationship");

```
