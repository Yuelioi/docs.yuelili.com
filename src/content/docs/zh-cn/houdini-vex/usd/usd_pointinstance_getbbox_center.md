---
title: usd_pointinstance_getbbox_center
order: 99
---
| 版本 | 18.0 |
| --- | --- |

`vector  usd_pointinstance_getbbox_center(<stage>stage, string primpath, int instance_index, string purpose)`

计算实例几何体的包围盒中心点。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取对应的stage。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

也可以使用此参数引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点已处理的stage（如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`instance_index`

需要返回包围盒的实例索引。

`purpose`

指定返回包围盒中心点的图元用途（如"render"）。

返回值

实例包围盒的中心点坐标。

## 示例

```vex
// 获取第一个实例的包围盒中心
vector center = usd_pointinstance_getbbox_center(0, "/src/instanced_spheres", 0, "render");

```
