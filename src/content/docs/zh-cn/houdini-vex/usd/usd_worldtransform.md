---
title: usd_worldtransform
order: 154
---
| 始于版本 | 17.5 |
| --- | --- |

`matrix  usd_worldtransform(<stage>stage, string primpath)`

`matrix  usd_worldtransform(<stage>stage, string primpath, float timecode)`

此函数返回图元的世界变换矩阵。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取对应的stage。该整数等价于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点已处理的stage（例如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`timecode`

用于评估属性的USD时间码。USD时间码大致对应于Houdini中的帧数。若未指定，则使用当前帧对应的时间码。

返回值

图元的世界变换矩阵。

## 示例

```vex
// 获取立方体的世界变换矩阵
matrix cube_world_xform = usd_worldtransform(0, "/src/cube");

```
