---
title: usd_setprimvar
order: 132
---
| 始于版本 | 18.0 |
| --- | --- |

`int  usd_setprimvar(int stagehandle, string primpath, string name, <type>value)`

`int  usd_setprimvar(int stagehandle, string primpath, string name, <type>value[])`

此函数用于设置primvar的值。

`stagehandle`

要写入的stage句柄。当前唯一有效值是`0`，表示节点中的当前stage。（此参数未来可能用于支持写入其他stage）

`primpath`

图元路径。

`name`

Primvar名称（不带命名空间）。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 设置一些primvar的值
usd_setprimvar(0, "/geo/sphere", "float_primvar", 0.25);
usd_setprimvar(0, "/geo/sphere", "string_primvar", "foo bar baz");
usd_setprimvar(0, "/geo/sphere", "vector_primvar", {1.25, 1.50, 1.75});

float f_arr[] = {0, 0.25, 0.5, 0.75, 1};
usd_setprimvar(0, "/geo/sphere", "float_array_primvar", f_arr);

```
