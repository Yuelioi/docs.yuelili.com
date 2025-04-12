---
title: usd_getbbox
order: 42
---
| 版本 | 18.0 |
| --- | --- |

`int  usd_getbbox(<stage>stage, string primpath, string purpose, vector &min, vector &max)`

此函数返回图元的轴对齐边界框。边界框的最小角点坐标将通过min参数返回，最大角点坐标将通过max参数返回。该函数始终返回1。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取对应输入的stage。该整数等同于引用特定输入的字符串形式，例如"opinput:0"。

也可以使用此参数引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已处理stage（如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`purpose`

需要返回边界框的图元用途（如"render"）。

返回值

始终返回1。

## 示例

```vex
// 获取球体的边界框
vector min, max;
usd_getbbox(0, "/src/sphere", "render", min, max);

```
