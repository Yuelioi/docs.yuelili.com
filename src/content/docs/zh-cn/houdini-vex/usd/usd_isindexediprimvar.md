---
title: usd_isindexediprimvar
order: 70
---

| 版本 | 19.0 |
| --- | --- |

`int  usd_isindexediprimvar(<stage>stage, string primpath, string name)`

该函数用于检查给定的primvar是否为索引类型，无论它是直接存在于指定图元上还是从祖先图元继承而来。

某些primvar可能包含一个压缩的唯一值数组，以及一个指向该值数组的额外索引数组，这类primvar被称为索引primvar。值数组的长度取决于唯一元素的数量，而索引数组的长度则对应于primvar所应用的实体数量。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号的整数（从0开始），用于读取对应输入的USD场景。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

此参数也可用于引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点处理完成的场景（如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`name`

primvar名称（不包含命名空间）。

返回值

当primvar存在且为索引类型时返回`1`，否则返回`0`。

## 示例

```vex
// 检查球体或其祖先上的primvar"some_primvar"是否为索引类型
int is_indexed = usd_isindexedprimvar(0, "/geometry/sphere", "some_primvar");

```
