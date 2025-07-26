---
title: usd_flattenedprimvarelement
order: 41
---

| 始于版本 | 18.0 |
| --- | --- |

`<type> usd_flattenedprimvarelement(<stage>stage, string primpath, string name, int index)`

`<type> usd_flattenedprimvarelement(<stage>stage, string primpath, string name, int index, float timecode)`

此函数返回指定图元上展平数组primvar的某个元素值。

某些primvar可以被索引，其中primvar是唯一值的压缩数组，并通过索引数组将实体映射到值元素。此函数通过使用索引数组展开压缩数组，并返回展开数组中指定索引处的元素值。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取阶段。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或使用`op:`作为路径前缀引用其他LOP节点的已处理阶段（例如"op:/stage/lop_node"）。

`primpath`

图元的路径。

`name`

Primvar名称（不带命名空间）。

`index`

展开数组中的索引。

`timecode`

评估属性时的USD时间码。USD时间码大致对应于Houdini中的帧。如果未指定，则使用当前帧对应的时间码。

返回值

现有primvar展平值数组的元素，如果primvar不存在则返回零/空值。如果要检查primvar是否存在，请使用[usd_isprimvar](/zh-cn/houdini-vex/usd/usd_isprimvar "检查图元是否具有指定名称的primvar。")。

## 示例

```vex
// 获取立方体图元上展平primvar的值
float flat_value = usd_flattenedprimvarelement(0, "/geo/cube", "primvar_name", 3);

f@flat_primvar_element_10_at_current_frame = usd_flattenedprimvarelement(0, "/geo/sphere", "bar", 10);
f@flat_primvar_element_10_at_frame_7 = usd_flattenedprimvarelement(0, "/geo/sphere", "bar", 10, 7.0);

```
