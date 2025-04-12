---
title: usd_getbbox_size
order: 46
---
| 版本 | 18.0 |
| --- | --- |

`vector  usd_getbbox_size(<stage>stage, string primpath, string purpose)`

计算几何体的包围盒尺寸。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取场景。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已处理场景（例如"op:/stage/lop_node"）。

`primpath`

图元的路径。

`purpose`

要返回包围盒尺寸的图元用途（例如"render"）。

返回值

图元包围盒的尺寸。

## 示例

```vex
// 获取球体的包围盒
vector size = usd_getbbox_size(0, "/src/sphere", "render");

```
