---
title: usd_primvarelement
order: 107
---
| 版本 | 18.0 |
| --- | --- |

`<type> usd_primvarelement(<stage>stage, string primpath, string name, int index)`

`<type> usd_primvarelement(<stage>stage, string primpath, string name, int index, float timecode)`

此函数返回指定图元上给定数组型primvar中某个元素的值。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号的整数（从0开始），用于读取场景。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

也可用此参数引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已计算场景（如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`name`

primvar名称（不含命名空间）。

`index`

数组索引值。

`timecode`

评估属性时使用的USD时间码。USD时间码大致对应Houdini中的帧数。若未指定，则使用当前帧对应的时间码。

返回值

返回现有数组型primvar中某个元素的值，若primvar不存在则返回零/空值。如需检查primvar是否存在，请使用[usd_isprimvar](/zh-cn/houdini-vex/usd/usd_isprimvar "检查图元是否具有指定名称的primvar")。

## 示例

```vex
// 获取立方体图元上某些primvar的值
float value = usd_primvarelement(0, "/geo/cube", "primvar_name", 3);

v@element_2_at_current_frame = usd_primvarelement(0, "/geo/sphere", "foo", 2);
v@element_2_at_frame_8 = usd_primvarelement(0, "/geo/sphere", "foo", 2, 8.0);

```
