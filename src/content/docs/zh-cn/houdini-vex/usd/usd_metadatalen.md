---
title: usd_metadatalen
order: 94
---
| 始于版本 | 18.0 |
| --- | --- |

`int  usd_metadatalen(<stage>stage, string path, string name)`

此函数返回指定元数据的长度。

对于数组元数据返回数组长度，非数组元数据则返回1。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，该参数可以是表示输入编号的整数（从0开始），用于读取对应输入的场景。该整数等价于引用特定输入的字符串形式，例如"opinput:0"。

也可用此参数引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已处理场景（如"op:/stage/lop_node"）。

`path`

目标对象的路径，可以是图元、属性或关系。

`name`

元数据名称。

可通过命名空间访问（可能嵌套的）VtDictionary中的值，如自定义数据字典中的"customData:name"或"customData:name:subname"。对于非命名空间名称，对象模式需声明相应元数据才可访问，如"active"或"documentation"。

返回值

数组元数据的长度，若非数组则返回1。如需检查元数据是否为数组，可使用[usd_isarraymetadata](/zh-cn/houdini-vex/usd/usd_isarraymetadata "检查给定元数据是否为数组。")。

## 示例

```vex
// 获取立方体图元上元数据的数组长度
int length = usd_metadatalen(0, "/geo/cube", "customData:name");

```
