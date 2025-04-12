---
title: usd_setprimvarinterpolation
order: 136
---
| Since | 18.0 |
| --- | --- |

`int  usd_setprimvarinterpolation(int stagehandle, string primpath, string name, string interpolation)`

此函数用于设置给定primvar的插值方式。

`stagehandle`

要写入的舞台句柄。当前唯一有效值是`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台）

`primpath`

图元路径。

`name`

Primvar名称（不带命名空间）。

`interpolation`

primvar的新插值方式。

标准插值方式包括：

- "constant" - 整个表面使用相同值（即detail级别）
- "uniform" - 每个uv面片或面使用一个值（即primitive级别）
- "vertex" - 使用表面基函数在顶点间插值（即point级别）
- "varying" - 在uv面片或面上插值四个值（即vertex级别）
- "faceVarying" - 对于多边形和细分曲面，在网格每个面上插值四个值（即vertex级别）

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 设置primvar的插值方式
usd_setprimvarinterpolation(0, "/geo/mesh", "primvar_name", "faceVarying");

```
