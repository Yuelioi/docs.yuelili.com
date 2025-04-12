---
title: usd_pointinstance_getbbox_size
order: 102
---
| 始于版本 | 18.0 |
| --- | --- |

`vector  usd_pointinstance_getbbox_size(<stage>stage, string primpath, int instance_index, string purpose)`

计算实例几何体包围盒的最大位置。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，该参数可以是表示输入编号（从0开始）的整数，用于读取对应输入端的stage。该整数等价于引用特定输入的字符串形式，例如"opinput:0"。

也可用此参数引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点已烹饪的stage（如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`instance_index`

需要返回包围盒的实例索引。

`purpose`

要返回包围盒尺寸的图元用途（如"render"）。

返回值

实例包围盒的尺寸。

## 示例

```vex
// 获取第一个实例的包围盒尺寸
vector size = usd_pointinstance_getbbox_size(0, "/src/instanced_spheres", 0, "render");

```
