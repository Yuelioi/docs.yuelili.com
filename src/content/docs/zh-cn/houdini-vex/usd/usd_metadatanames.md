---
title: usd_metadatanames
order: 95
---
| 始于版本 | 18.0 |
| --- | --- |

`string [] usd_metadatanames(<stage>stage, string path)`

此函数返回给定USD对象上可用的元数据名称。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号的整数（从0开始）以读取对应的stage。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或使用`op:`作为路径前缀引用其他LOP节点已处理的stage（例如"op:/stage/lop_node"）。

`path`

目标对象的路径。即可以是基元(primitive)、属性(attribute)或关系(relationship)。

返回值

包含对象元数据名称的字符串数组。

## 示例

```vex
// 从基元获取元数据名称
string prim_metadata_names[] = usd_metadatanames(0, "/geo/sphere");

// 从属性获取元数据名称
string attrib_path = usd_makeattribpath(0, "/geo/sphere", "attrib_name");
string attrib_metadata_names[] = usd_metadatanames(0, attrib_path);

```
