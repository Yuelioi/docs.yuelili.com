---
title: usd_setattrib
order: 123
---
| 始于版本 | 17.5 |
| --- | --- |

`int  usd_setattrib(int stagehandle, string primpath, string name, <type>value)`

`int  usd_setattrib(int stagehandle, string primpath, string name, <type>value[])`

该函数用于设置属性值。

`stagehandle`

要写入的舞台句柄。当前唯一有效值是`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台）

`primpath`

图元路径。

`name`

属性名称。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 设置某些属性的值
usd_setattrib(0, "/geo/sphere", "float_attrib", 0.25);
usd_setattrib(0, "/geo/sphere", "string_attrib", "foo bar baz");
usd_setattrib(0, "/geo/sphere", "vector_attrib", {1.25, 1.50, 1.75});

float f_arr[] = {0, 0.25, 0.5, 0.75, 1};
usd_setattrib(0, "/geo/sphere", "float_array_attrib", f_arr);

```
