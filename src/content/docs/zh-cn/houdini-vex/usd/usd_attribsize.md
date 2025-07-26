---
title: usd_attribsize
order: 20
---
| 版本 | 17.5 |
| --- | --- |

`int  usd_attribsize(<stage>stage, string primpath, string name)`

此函数返回给定属性的元组大小。如果属性是数组，则返回数组元素的元组大小。例如，对于矢量类型，返回的是分量数量。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号的整数（从0开始）以读取场景。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或使用`op:`作为路径前缀引用其他LOP节点的已处理场景（例如"op:/stage/lop_node"）。

`primpath`

图元路径。

`name`

属性名称。

返回值

属性的元组大小。

- 对于矢量类型，返回分量数量
- 对于整数、浮点数或字符串，返回`1`
- 对于数组属性，返回元素的元组大小

如果属性不存在，返回`0`。

如需获取数组属性长度，请使用[usd_attriblen](/zh-cn/houdini-vex/usd/usd_attriblen "返回数组属性的长度")。

## 示例

```vex
// 获取立方体图元上属性的元组大小
int tuple_size = usd_attribsize(0, "/geo/cube", "attribute_name");

```
