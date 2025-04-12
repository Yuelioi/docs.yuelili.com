---
title: usd_pointinstance_getbbox_min
order: 101
---
| Since | 18.0 |
| --- | --- |

`vector  usd_pointinstance_getbbox_min(<stage>stage, string primpath, int instance_index, string purpose)`

计算实例几何体边界框的最小位置。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取stage。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或使用`op:`作为路径前缀引用其他LOP节点的cooked stage（例如"op:/stage/lop_node"）。

`primpath`

图元的路径。

`instance_index`

要返回边界框的实例索引。

`purpose`

要返回边界框最小值的图元用途（例如"render"）。

返回值

实例边界框的最小位置。

## 示例

```vex
// 获取第一个实例边界框的最小值
vector min = usd_pointinstance_getbbox_min(0, "/src/instanced_spheres", 0, "render");

```
