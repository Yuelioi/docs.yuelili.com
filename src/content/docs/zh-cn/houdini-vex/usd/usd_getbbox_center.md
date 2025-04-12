---
title: usd_getbbox_center
order: 43
---

| 版本 | 18.0 |
| --- | --- |

`vector  usd_getbbox_center(<stage>stage, string primpath, string purpose)`

计算几何体边界框的中心点。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号的整数（从0开始），用于读取场景。该整数等价于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（如"/path/to/file.usd"），或使用`op:`作为路径前缀引用其他LOP节点的已处理场景（如"op:/stage/lop_node"）。

`primpath`

图元的路径。

`purpose`

要返回边界框中心的图元用途（如"render"）。

返回值

图元边界框的中心点。

## 示例

```vex
// 获取球体边界框的中心点
vector center = usd_getbbox_center(0, "/src/sphere", "render");

```
