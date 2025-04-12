---
title: usd_transformtype
order: 148
---
| Since | 18.0 |
| --- | --- |

`int  usd_transformtype(string name)`

此函数返回由完整名称隐含的变换操作类型。

`name`

变换操作的完整名称，包含标准命名空间、编码的变换类型，并可选择性地包含后缀。

返回值

由变换操作名称推断出的变换操作类型的数字代码。可参考VEX头文件"usd.h"中的定义，如`USD_XFORM_TRANSLATE`、`USD_XFORM_TRANSFORM`或`USD_XFORM_ROTATE_XYZ`。

## 示例

```vex
// 获取立方体上的第一个变换操作类型
string cube_xform_ops[] = usd_transformorder(0, "/geo/cube");
int type = usd_transformtype(cube_xform_ops[0]);

```
