---
title: usd_primvarindices
order: 109
---
| 始于版本 | 18.0 |
| --- | --- |

`int [] usd_primvarindices(<stage>stage, string primpath, string name)`

`int [] usd_primvarindices(<stage>stage, string primpath, string name, float timecode)`

此函数返回在指定图元上直接找到的索引化primvar的索引数组。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取对应输入的舞台。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已烹饪舞台（例如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`name`

Primvar名称（不带命名空间）。

`timecode`

评估属性时使用的USD时间码。USD时间码大致对应于Houdini中的帧数。若未指定，则使用当前帧对应的时间码。

返回值

索引化primvar的索引数组，若primvar不存在或未被索引则返回零/空值。如需检查primvar是否存在，请使用[usd_isprimvar](/zh-cn/houdini-vex/usd/usd_isprimvar "检查图元是否具有指定名称的primvar。")；如需检查是否被索引，请使用[usd_isindexedprimvar](/zh-cn/houdini-vex/usd/usd_isindexedprimvar "检查USD图元上是否直接存在索引化primvar。")。

## 示例

```vex
// 获取索引化primvar的索引数组
int indices[] = usd_primvarindices(0, "/geo/cube", "indexed_primvar_name");

```
