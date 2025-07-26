---
title: usd_attribelement
order: 17
---
| 始于版本 | 18.0 |
| --- | --- |

`<type> usd_attribelement(<stage>stage, string primpath, string name, int index)`

`<type> usd_attribelement(<stage>stage, string primpath, string name, int index, float timecode)`

该函数返回指定图元上给定数组属性中某个元素的值。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号的整数（从0开始），用于读取对应输入的舞台。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已计算舞台（例如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`name`

属性名称。

`index`

数组属性中的元素索引。

`timecode`

评估属性时使用的USD时间码。USD时间码大致对应Houdini中的帧数。若未指定，则使用当前帧对应的时间码。

返回值

返回现有属性中某个元素的值，若属性不存在则返回零/空值。如需检查属性是否存在，请使用[usd_isattrib](/zh-cn/houdini-vex/usd/usd_isattrib "检查指定图元是否具有给定名称的属性")。

## 示例

```vex
// 获取数组属性中索引3处元素的值
float a = usd_attribelement("opinput:0", "/geo/cube", "array_attrib_name", 3);

// 获取"bar"数组属性中索引2处元素的值
@b_element_2_at_current_frame = usd_attribelement(0, "/geo/sphere", "bar", 2);
@b_element_2_at_frame_11 = usd_attribelement(0, "/geo/sphere", "bar", 2, 11.0);

```
