---
title: usd_pointinstance_getbbox
order: 98
---

| 版本 | 18.0 |
| --- | --- |

`int  usd_pointinstance_getbbox(<stage>stage, string primpath, int instance_index, string purpose, vector &min, vector &max)`

该函数返回指定实例的轴对齐边界框。边界框的最小角点坐标将通过min参数返回，最大角点坐标通过max参数返回。该函数始终返回1。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号的整数（从0开始），用于读取对应输入的stage。该整数等价于使用字符串形式引用特定输入，例如"opinput:0"。

您也可以使用此参数引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点处理完成的stage（如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`instance_index`

需要获取边界框的实例索引。

`purpose`

需要获取边界框的图元用途（例如"render"）。

返回值

始终返回1。

## 示例

```vex
// 获取第一个实例化球体的边界框
vector min, max;
usd_pointinstance_getbbox(0, "/src/instanced_spheres", 0, "render", min, max);

```
