---
title: usd_isprim
order: 77
---
| 始于版本 | 17.5 |
| --- | --- |

`int  usd_isprim(<stage>stage, string primpath)`

此函数用于检查指定路径是否指向有效的USD图元。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号的整数（从0开始）以读取对应阶段的USD数据。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点已处理的阶段（例如"op:/stage/lop_node"）。

`primpath`

图元的路径。

返回值

如果给定路径的图元有效则返回1，否则返回0。

## 示例

```vex
// 检查第一个输入端的阶段是否在场景图位置"/geometry/sphere"处存在球体图元
int is_valid_primitive = usd_isprim(0, "/geometry/sphere");

```
