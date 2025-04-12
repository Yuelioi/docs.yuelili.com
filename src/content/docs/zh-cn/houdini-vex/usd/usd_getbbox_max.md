---
title: usd_getbbox_max
order: 44
---
| 始于版本 | 18.0 |
| --- | --- |

`vector  usd_getbbox_max(<stage>stage, string primpath, string purpose)`

计算几何体包围盒的最大点。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号的整数（从0开始）以读取对应输入中的stage。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

也可用此参数引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已处理stage（如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`purpose`

要返回包围盒的图元用途（如"render"）。

返回值

图元包围盒的最大点。

## 示例

```vex
// 获取球体的包围盒
vector max = usd_getbbox_max(0, "/src/sphere", "render");

```
