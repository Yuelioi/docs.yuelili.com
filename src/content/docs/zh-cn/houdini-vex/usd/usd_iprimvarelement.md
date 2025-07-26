---
title: usd_iprimvarelement
order: 52
---
| Since | 19.0 |
| --- | --- |

`<type> usd_iprimvarelement(<stage>stage, string primpath, string name, int index)`

`<type> usd_iprimvarelement(<stage>stage, string primpath, string name, int index, float timecode)`

此函数返回给定图元上数组型primvar中某个元素的值，或继承自该图元祖先primvar的值。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号的整数（从0开始），用于读取对应输入端的stage。该整数等效于以字符串形式引用特定输入，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点已烹饪的stage（例如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`name`

Primvar名称（不包含命名空间）。

`index`

数组中的索引位置。

`timecode`

评估属性时使用的USD时间码。USD时间码大致对应Houdini中的帧数。若未指定，则使用当前帧对应的时间码。

返回值

返回现有数组型primvar中指定元素的值。若primvar不存在，则返回零值/空值。如需检查primvar是否存在，请使用[usd_isiprimvar](/zh-cn/houdini-vex/usd/usd_isiprimvar "检查图元或其祖先是否具有指定名称的primvar。")。

## 示例

```vex
// 获取立方体图元或其祖先上某些primvar的值
float value = usd_iprimvarelement(0, "/geo/cube", "primvar_name", 3);

v@element_2_at_current_frame = usd_iprimvarelement(0, "/geo/sphere", "foo", 2);
v@element_2_at_frame_8 = usd_iprimvarelement(0, "/geo/sphere", "foo", 2, 8.0);

```
