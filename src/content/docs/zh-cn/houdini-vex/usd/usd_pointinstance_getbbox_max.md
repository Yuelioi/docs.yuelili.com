---
title: usd_pointinstance_getbbox_max
order: 100
---
| Since | 18.0 |
| --- | --- |

`vector  usd_pointinstance_getbbox_max(<stage>stage, string primpath, int instance_index, string purpose)`

计算实例几何体边界框的最大位置坐标。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号的整数（从0开始），用于读取对应的stage。该整数等价于引用特定输入的字符串形式，例如"opinput:0"。

也可以使用此参数引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点处理完成的stage（如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`instance_index`

需要返回边界框的实例索引。

`purpose`

指定返回边界框最大坐标的图元用途（如"render"）。

返回值

实例边界框的最大位置坐标。

## 示例

```vex
// 获取第一个实例边界框的最大坐标
vector max = usd_pointinstance_getbbox_max(0, "/src/instanced_spheres", 0, "render");

```
