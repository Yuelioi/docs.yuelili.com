---
title: usd_primvar
order: 105
---
| 版本 | 18.0 |
| --- | --- |

`<type> usd_primvar(<stage>stage, string primpath, string name)`

`<type>[] usd_primvar(<stage>stage, string primpath, string name)`

`<type> usd_primvar(<stage>stage, string primpath, string name, float timecode)`

`<type>[] usd_primvar(<stage>stage, string primpath, string name, float timecode)`

此函数返回指定图元上的primvar值。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取舞台。该整数等同于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已处理舞台（例如"op:/stage/lop_node"）。

`primpath`

图元的路径。

`name`

Primvar名称（不带命名空间）。

`timecode`

评估属性时的USD时间码。USD时间码大致对应于Houdini中的帧数。如果未指定，则使用当前帧对应的时间码。

返回值

现有primvar的值，如果primvar不存在则返回零/空值。如需检查primvar是否存在，请使用[usd_isprimvar](/zh-cn/houdini-vex/usd/usd_isprimvar "检查图元是否具有指定名称的primvar。")。

## 示例

```vex
// 获取立方体图元上某些primvar的值
vector vec_value = usd_primvar(0, "/geo/cube", "vec_primvar_name"); 
float values[] = usd_primvar(0, "/geo/cube", "primvar_name");
float value = usd_primvar(0, "/geo/cube", "primvar_name", 3);

v[]@foo_at_current_frame = usd_primvar(0, "/geo/sphere", "foo");
v[]@foo_at_frame_8 = usd_primvar(0, "/geo/sphere", "foo", 8.0);

```
