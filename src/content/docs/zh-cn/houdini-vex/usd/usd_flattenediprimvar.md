---
title: usd_flattenediprimvar
order: 38
---
| 始于版本 | 19.0 |
| --- | --- |

`<type>[] usd_flattenediprimvar(<stage>stage, string primpath, string name)`

`<type>[] usd_flattenediprimvar(<stage>stage, string primpath, string name, float timecode)`

此函数返回指定图元或其祖先继承的扁平化primvar值。

某些primvar可能被索引，其中primvar是唯一值的压缩数组，并通过索引数组将实体映射到值元素。该函数使用索引数组展开压缩数组，并返回展开后的值数组。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取对应输入的场景。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

也可用此参数引用USD文件（如"/path/to/file.usd"），或使用`op:`作为路径前缀引用其他LOP节点已处理的场景（如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`name`

Primvar名称（不包含命名空间）。

`timecode`

评估属性时使用的USD时间码。USD时间码大致对应Houdini中的帧号。若未指定，则使用当前帧对应的时间码。

返回值

现有primvar的扁平化值，若primvar不存在则返回零/空值。如需检查primvar是否存在，请使用[usd_isiprimvar](/zh-cn/houdini-vex/usd/usd_isiprimvar "检查指定图元或其祖先是否具有给定名称的primvar。")。

## 示例

```vex
// 获取立方体图元或其祖先的扁平化primvar值
float flat_values[] = usd_flattenediprimvar(0, "/geo/cube", "primvar_name");

f[]@flat_primvar_at_current_frame = usd_flattenediprimvar(0, "/geo/sphere", "bar");
f[]@flat_primvar_at_frame_7 = usd_flattenediprimvar(0, "/geo/sphere", "bar", 7.0);

```
