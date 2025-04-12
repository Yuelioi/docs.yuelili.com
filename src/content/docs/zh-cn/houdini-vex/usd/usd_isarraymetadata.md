---
title: usd_isarraymetadata
order: 65
---

| 始于版本 | 18.0 |
| --- | --- |

`int  usd_isarraymetadata(<stage>stage, string path, string name)`

此函数用于检查给定的元数据是否为数组类型。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号的整数（从0开始），用于读取对应输入端的stage。该整数等效于引用特定输入端的字符串形式，例如"opinput:0"。

此参数也可用于引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点已烹饪的stage（如"op:/stage/lop_node"）。

`path`

目标对象的路径。可以是图元(primitive)、属性(attribute)或关系(relationship)。

`name`

元数据名称。

名称可以带命名空间以访问（可能嵌套的）VtDictionary中的值，例如自定义数据字典中的值，如"customData:name"或"customData:name:subname"。对于非命名空间的名称，对象模式(schema)需要声明对应的元数据才能访问，如"active"或"documentation"。

返回值

如果元数据存在且为数组类型则返回`1`，否则返回`0`。

## 示例

```vex
// 检查元数据是否为数组类型
int is_array = usd_isarraymetadata(0, "/geo/sphere", "documentation");
int is_array_too = usd_isarraymetadata(0, "/geo/cube", "customData:foo:bar");

```
