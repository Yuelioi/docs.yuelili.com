---
title: usd_isvisible
order: 83
---
| Since | 17.5 |
| --- | --- |

`int  usd_isvisible(<stage>stage, string primpath)`

`int  usd_isvisible(<stage>stage, string primpath, float timecode)`

此函数用于检查指定图元是否可见。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号的整数（从0开始），用于读取舞台数据。该整数等同于以字符串形式引用特定输入，例如"opinput:0"。

您也可以使用此参数引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已计算舞台（如"op:/stage/lop_node"）。

`primpath`

图元的路径。

`timecode`

评估属性时使用的USD时间码。USD时间码大致对应于Houdini中的帧数。若未指定，则使用当前帧对应的时间码。

返回值

若图元可见则返回1，否则返回0。

## 示例

```vex
// 检查球体图元是否可见
int is_visible = usd_isvisible(0, "/geometry/sphere");

```
