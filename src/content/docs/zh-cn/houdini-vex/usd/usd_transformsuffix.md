---
title: usd_transformsuffix
order: 147
---
| 始于版本 | 18.0 |
| --- | --- |

`string  usd_transformsuffix(string name)`

该函数返回变换操作全名中包含的后缀。

`name`

变换操作的全名，包含标准命名空间、编码的变换类型，以及可选的后缀部分。

返回值

变换操作名称中包含的后缀。

## 示例

```vex
// 获取立方体第一个变换操作的后缀
string cube_xform_ops[] = usd_transformorder(0, "/geo/cube");
string suffix = usd_transformsuffix(cube_xform_ops[0]);

```
