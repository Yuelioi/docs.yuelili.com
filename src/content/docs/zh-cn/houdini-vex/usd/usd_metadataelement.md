---
title: usd_metadataelement
order: 93
---
| 始于版本 | 18.0 |
| --- | --- |

`<type> usd_metadataelement(<stage>stage, string path, string name, int index)`

此函数返回给定数组元数据在指定索引处的元素值。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取对应输入的场景。该整数等同于以字符串形式引用特定输入，例如"opinput:0"。

也可用此参数引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点处理完成的场景（如"op:/stage/lop_node"）。

`path`

目标对象的路径。即图元（primitive）、属性或关系。

`name`

元数据名称。

名称可带命名空间以访问（可能嵌套的）VtDictionary中的值，例如自定义数据字典中的"customData:name"或"customData:name:subname"。对于非命名空间名称，对象模式需声明相应元数据才可访问，如"active"或"documentation"。

`index`

数组中的索引位置。

返回值

返回现有数组元数据中指定元素的值，若元数据不存在则返回零/空值。如需检查元数据是否存在，请使用[usd_ismetadata](/zh-cn/houdini-vex/usd/usd_ismetadata "检查图元是否具有指定名称的元数据")。

## 示例

```vex
// 获取自定义数据"foo:bar"数组中索引3处的元素值
string docs = usd_metadataelement(0, "/geo/cube", "customData:foo:bar", 3);

```
