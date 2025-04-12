---
title: usd_transformname
order: 145
---
| 始于版本 | 18.0 |
| --- | --- |

`string  usd_transformname(int transformtype, string suffix)`

此函数返回给定类型和后缀的变换操作的完整名称。

`transformtype`

变换类型的数字代码。请参阅VEX头文件"usd.h"中的定义，如`USD_XFORM_TRANSLATE`、`USD_XFORM_TRANSFORM`或`USD_XFORM_ROTATE_XYZ`。

`suffix`

变换操作的后缀。

USD图元通过一系列变换操作在空间中进行变换，这些操作的完整名称按顺序列在`xformOpOrder`属性中。完整名称是命名空间化的，编码了操作变换类型（例如平移或旋转），还可以包含后缀。如果图元有多个相同类型的操作，则需要指定后缀以区分它们。此参数用于指定此类后缀。

返回值

变换操作的完整名称。

## 示例

```vex
// 为带有"cone_pivot"后缀的平移操作构造完整名称
string pivot_xform_name = usd_transformname(USD_XFORM_TRANSLATE, "cone_pivot");

```
