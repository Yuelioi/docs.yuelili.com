---
title: usd_attrib
order: 16
---
| 始于版本 | 17.5 |
| --- | --- |

`<type> usd_attrib(<stage>stage, string primpath, string name)`

`<type>[] usd_attrib(<stage>stage, string primpath, string name)`

`<type> usd_attrib(<stage>stage, string primpath, string name, float timecode)`

`<type>[] usd_attrib(<stage>stage, string primpath, string name, float timecode)`

该函数返回指定图元上给定属性的值。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取对应输入的场景。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

也可以使用此参数引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已处理场景（如"op:/stage/lop_node"）。

`primpath`

图元路径。

`name`

属性名称。

`timecode`

用于评估属性的USD时间码。USD时间码大致对应于Houdini中的帧数。若未指定，则使用当前帧对应的时间码。

返回值

返回现有属性的值，若属性不存在则返回零值/空值。如需检查属性是否存在，请使用[usd_isattrib](/zh-cn/houdini-vex/usd/usd_isattrib "检查指定名称的属性是否存在于图元上")。

## 示例

```vex
// 获取立方体图元上某些属性的值
float a = usd_attrib("opinput:0", "/geo/cube", "attribute_name_a");
vector b[] = usd_attrib(0, "/geo/cube", "attribute_name_b");

// 获取不同时间码下"bar"属性的值
f[]@b_at_current_frame = usd_attrib(0, "/geo/sphere", "bar");
f[]@b_at_frame_7 = usd_attrib(0, "/geo/sphere", "bar", 7.0);

```
