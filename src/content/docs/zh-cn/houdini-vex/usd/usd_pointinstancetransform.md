---
title: usd_pointinstancetransform
order: 104
---
| 版本 | 18.0 |
| --- | --- |

`matrix  usd_pointinstancetransform(<stage>stage, string primpath, int index)`

`matrix  usd_pointinstancetransform(<stage>stage, string primpath, int index, float timecode)`

此函数返回点实例的变换矩阵。

`<stage>`

在节点上下文环境中运行时（如wrangle LOP节点），该参数可以是表示输入编号的整数（从0开始），用于读取对应的stage。该整数等价于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点已处理的stage（例如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`index`

点实例化器中实例的索引号。

`timecode`

用于评估属性的USD时间码。USD时间码大致对应Houdini中的帧数。若未指定，则使用当前帧对应的时间码。

返回值

点实例的变换矩阵。

## 示例

```vex
// 获取第三个实例的变换矩阵
matrix xform = usd_pointinstancetransform(0, "/src/instanced_cubes", 2);

```
