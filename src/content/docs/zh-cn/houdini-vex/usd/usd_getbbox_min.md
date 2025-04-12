---
title: usd_getbbox_min
order: 45
---
| 始于版本 | 18.0 |
| --- | --- |

`vector  usd_getbbox_min(<stage>stage, string primpath, string purpose)`

计算几何体边界框的最小值。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号的整数（从0开始）以读取对应输入中的stage。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点处理后的stage（例如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`purpose`

需要返回边界框的图元用途（例如"render"）。

返回值

图元边界框的最小点坐标。

## 示例

```vex
// 获取球体的边界框
vector min = usd_getbbox_min(0, "/src/sphere", "render");

```
