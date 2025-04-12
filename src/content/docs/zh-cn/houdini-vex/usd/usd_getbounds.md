---
title: usd_getbounds
order: 47
---
| 始于版本 | 18.0 |
| --- | --- |

`int  usd_getbounds(<stage>stage, string primpath, string purpose, vector &min, vector &max)`

`int  usd_getbounds(<stage>stage, string primpath, string purpose, float timecode, vector &min, vector &max)`

`int  usd_getbounds(<stage>stage, string primpath, string purpose[], vector &min, vector &max)`

`int  usd_getbounds(<stage>stage, string primpath, string purpose[], float timecode, vector &min, vector &max)`

此函数返回图元（primitive）的轴对齐包围盒（AABB）。包围盒的最小角点坐标将通过min参数返回，最大角点坐标通过max参数返回。该函数始终返回1。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号的整数（从0开始），用于从指定输入读取stage。该整数等价于以字符串形式引用特定输入，例如"opinput:0"。

也可以使用此参数引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点已烹饪的stage（如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`purpose`

要获取包围盒的图元用途（如"render"渲染用途）。

`timecode`

评估属性所用的USD时间码。USD时间码大致对应Houdini中的帧号。若未指定，则使用当前帧对应的时间码。

返回值

始终返回1。

## 示例

```vex
// 获取球体的包围盒
vector min, max;
usd_getbounds(0, "/src/sphere", "render", min, max);

```
