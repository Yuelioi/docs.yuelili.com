---
title: usd_metadata
order: 92
---
| 始于版本 | 18.0 |
| --- | --- |

`<type> usd_metadata(<stage>stage, string path, string name)`

`<type>[] usd_metadata(<stage>stage, string path, string name)`

此函数返回指定对象中给定元数据的值。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取场景。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已处理场景（例如"op:/stage/lop_node"）。

`path`

对象的路径。即图元、属性或关系。

`name`

元数据名称。

名称可以命名空间化以访问（可能是嵌套的）VtDictionary中的值，例如自定义数据字典，如"customData:name"或"customData:name:subname"。对于非命名空间化的名称，对象模式需要声明给定的元数据才能访问，例如"active"或"documentation"。

返回值

现有元数据的值，如果元数据不存在则返回零/空值。如果要检查元数据是否存在，请使用[usd_ismetadata](/zh-cn/houdini-vex/usd/usd_ismetadata "检查图元是否具有指定名称的元数据。")。

## 示例

```vex
// 获取立方体图元的文档字符串
string docs = usd_metadata(0, "/geo/cube", "documentation");

// 从参数获取自定义数据
string attrib_path = usd_makeattribpath(0, "/geo/cube", "some_attribute");
float custom_val = usd_metadata(0, attrib_path, "customData:foo:bar");

```
