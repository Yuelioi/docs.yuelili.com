---
title: usd_iprimvarsize
order: 58
---
| Since | 19.0 |
| --- | --- |

`int  usd_iprimvarsize(<stage>stage, string primpath, string name)`

此函数返回在指定图元上直接找到或从其祖先继承的primvar的元组大小。若primvar是数组类型，则返回数组元素的元组大小。例如对于矢量类型，返回的是分量数量。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号的整数（从0开始），用于读取对应输入的stage。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

也可用此参数引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点已处理的stage（如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`name`

Primvar名称（不带命名空间）。

返回值

primvar的元组大小：

- 对于矢量类型，返回分量数量
- 对于整数、浮点数或字符串，返回`1`
- 对于数组primvar，返回元素的元组大小

若primvar不存在，返回`0`。

如需获取数组primvar的长度，请使用[usd_iprimvarlen](/zh-cn/houdini-vex/usd/usd_iprimvarlen "返回USD图元或其祖先上数组primvar的长度")。

## 示例

```vex
// 获取立方体图元或其祖先上primvar的元组大小
int tuple_size = usd_iprimvarsize(0, "/geo/cube", "primvar_name");

```
