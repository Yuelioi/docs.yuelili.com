---
title: usd_childnames
order: 28
---
| 始于版本 | 19.5 |
| --- | --- |

`string [] usd_childnames(<stage>stage, string primpath)`

此函数返回直接创作在指定父级图元命名空间中的子级名称。

`<stage>`

当在节点上下文（如wrangle LOP节点）中运行时，该参数可以是表示输入编号的整数（从0开始），用于读取对应输入的USD场景。该整数等价于使用字符串形式引用特定输入，例如"opinput:0"。

您也可以使用此参数引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点处理完成的场景（如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

返回值

指定图元的子级名称列表。

## 示例

```vex
// 获取"mother"图元的子级
string children[] = usd_child(0, "/geo/mother");

```
