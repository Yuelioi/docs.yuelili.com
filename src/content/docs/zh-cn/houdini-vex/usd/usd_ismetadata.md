---
title: usd_ismetadata
order: 75
---
| 始于版本 | 18.0 |
| --- | --- |

`int  usd_ismetadata(<stage>stage, string path, string name)`

此函数用于检查给定对象是否具有指定名称的元数据。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号的整数（从0开始），用于读取对应输入的stage。该整数等价于引用特定输入的字符串形式，例如"opinput:0"。

也可使用此参数引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已处理stage（如"op:/stage/lop_node"）。

`path`

对象路径。可以是图元(primitive)、属性(attribute)或关系(relationship)。

`name`

元数据名称。

名称可包含命名空间以访问（可能嵌套的）VtDictionary中的值，例如自定义数据字典中的"customData:name"或"customData:name:subname"。对于非命名空间名称，对象模式(schema)需声明相应元数据才可访问，如"active"或"documentation"。

返回值

若图元具有指定元数据则返回`1`，否则返回`0`。

## 示例

```vex
// 检查图元是否具有各种元数据：
int has_doc = usd_ismetadata(0, "/geo/sphere", "documentation");
int has_custom_foo_bar = usd_ismetadata(0, "/geo/cube", "customData:foo:bar");

// 检查属性是否设置了自定义数据
string attrib_path = usd_makeattribpath(0, "/geo/sphere", "attrib_name");
int has_attrib_foo = usd_ismetadata(0, attrib_path, "customData:foo");

```
