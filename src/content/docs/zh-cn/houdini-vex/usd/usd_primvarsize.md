---
title: usd_primvarsize
order: 113
---
| Since | 18.0 |
| --- | --- |

`int  usd_primvarsize(<stage>stage, string primpath, string name)`

此函数返回在指定图元上直接找到的primvar的元组大小。如果primvar是数组，则返回数组元素的元组大小。例如，对于矢量类型，返回的是分量数量。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取stage。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或通过`op:`路径前缀引用另一个LOP节点的已处理stage（例如"op:/stage/lop_node"）。

`primpath`

图元路径。

`name`

Primvar名称（不带命名空间）。

返回值

primvar的元组大小。

- 对于矢量类型，返回分量数量
- 对于整数、浮点数或字符串，返回`1`
- 对于数组primvar，返回元素的元组大小

如果primvar不存在，返回`0`。

如需获取数组primvar的长度，请使用[usd_primvarlen](/zh-cn/houdini-vex/usd/usd_primvarlen "返回USD图元上数组primvar的长度")。

## 示例

```vex
// 获取立方体图元上primvar的元组大小
int tuple_size = usd_primvarsize(0, "/geo/cube", "primvar_name");

```
