---
title: usd_getpointinstancebounds
order: 48
---

| Since | 18.0 |
| --- | --- |

`int  usd_getpointinstancebounds(<stage>stage, string primpath, int instance_index, string purpose, vector &min, vector &max)`

`int  usd_getpointinstancebounds(<stage>stage, string primpath, int instance_index, string purpose[], vector &min, vector &max)`

`int  usd_getpointinstancebounds(<stage>stage, string primpath, int instance_index, string purpose, float timecode, vector &min, vector &max)`

`int  usd_getpointinstancebounds(<stage>stage, string primpath, int instance_index, string purpose[], float timecode, vector &min, vector &max)`

此函数返回点实例化图元中特定实例的轴对齐包围盒。包围盒的最小角点坐标将通过min参数返回，最大角点坐标通过max参数返回。该函数始终返回1。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号的整数（从0开始），用于读取场景数据。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点已处理的场景（例如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`instance_index`

需要返回包围盒的实例索引。

`purpose`

需要返回包围盒的图元用途（例如"default"、"render"）。

`timecode`

评估属性时使用的USD时间码。USD时间码大致对应于Houdini中的帧数。如果未指定，则使用当前帧对应的时间码。

返回值

始终返回1。

## 示例

```vex
// 获取第二个球体的包围盒
vector min, max;
usd_getpointinstancebounds(0, "/src/instanced_spheres", 1, "render", min, max);

```
