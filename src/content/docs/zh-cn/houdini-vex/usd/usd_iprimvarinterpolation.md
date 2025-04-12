---
title: usd_iprimvarinterpolation
order: 55
---

| 版本 | 19.0 |
| --- | --- |

`string  usd_iprimvarinterpolation(<stage>stage, string primpath, string name)`

此函数返回在指定图元上直接找到或从其祖先继承的primvar的插值方式。例如："constant"、"varying"等。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取舞台。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或使用`op:`作为路径前缀引用其他LOP节点的已处理舞台（例如"op:/stage/lop_node"）。

`primpath`

图元路径。

`name`

Primvar名称（不带命名空间）。

返回值

primvar的插值方式。标准插值方式包括：

- "constant" - 整个表面使用相同值（即detail级别）
- "uniform" - 每个uv面片或面使用一个值（即primitive级别）
- "vertex" - 使用表面的基函数在每个顶点之间插值（即point级别）
- "varying" - 在uv面片或面上插值四个值（即vertex级别）
- "faceVarying" - 对于多边形和细分曲面，在网格的每个面上插值四个值（即vertex级别）

## 示例

```vex
// 获取立方体或其父级上primvar的插值方式
string interpolation = usd_iprimvarinterpolation(0, "/geo/cube", "primvar_name");

```
