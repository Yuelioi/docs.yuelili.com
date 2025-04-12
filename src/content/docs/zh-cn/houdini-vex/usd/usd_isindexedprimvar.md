---
title: usd_isindexedprimvar
order: 71
---
| Since | 18.0 |
| --- | --- |

`int  usd_isindexedprimvar(<stage>stage, string primpath, string name)`

此函数检查给定的primvar是否为索引类型，前提是该primvar直接存在于指定图元上。

某些primvar可能包含一个压缩的唯一值数组，以及一个指向该值数组的额外索引数组。这类primvar被称为索引primvar。值数组的长度取决于唯一元素的数量，而索引数组的长度则对应于primvar所应用的实体数量。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号的整数（从0开始），用于读取舞台。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已处理舞台（例如"op:/stage/lop_node"）。

`primpath`

图元的路径。

`name`

Primvar名称（不带命名空间）。

返回值

如果primvar存在且为索引类型则返回`1`，否则返回`0`。

## 示例

```vex
// 检查球体上的primvar"some_primvar"是否为索引类型
int is_indexed = usd_isindexedprimvar(0, "/geometry/sphere", "some_primvar");

```
