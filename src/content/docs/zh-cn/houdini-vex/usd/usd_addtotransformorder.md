---
title: usd_addtotransformorder
order: 12
---
| 始于版本 | 18.0 |
| --- | --- |

`int  usd_addtotransformorder(int stagehandle, string primpath, string name)`

此函数将变换操作追加到图元的变换顺序中。变换顺序是指一系列变换操作的序列，其完整名称以字符串数组形式存储在`xformOpOrder`属性中。因此，本函数会向该属性追加新的操作名称。

注意：与大多数处理图元变换且以操作后缀作为参数的VEX函数不同，本函数需要完整的操作名称。若已知操作后缀，可使用[usd_transformname](/zh-cn/houdini-vex/usd/usd_transformname "构造变换操作的完整名称")来获取完整名称。

`stagehandle`

要写入的舞台句柄。当前唯一有效值为`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台）

`primpath`

目标图元的路径。

`name`

变换操作的完整名称。使用[usd_transformname](/zh-cn/houdini-vex/usd/usd_transformname "构造变换操作的完整名称")从操作后缀获取完整名称。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 注意：以下使用的USD_XFORM_TRANSLATE和USD_AXIS_Z常量
// 定义在"usd.h" VEX头文件中，因此需要包含该文件
#include <usd.h>

// 第一步操作（平移）
string step_suffix = "step";
usd_addtranslate(0, "/geo/cone", step_suffix, {1, 0, 0});

// 通过将其添加到变换顺序中来重复相同的平移操作
string step_name = usd_transformname(USD_XFORM_TRANSLATE, step_suffix);
usd_addrotate(0, "/geo/cone", "first_rotation", USD_AXIS_Z, -30);
usd_addtotransformorder(0, "/geo/cone", step_name);
usd_addrotate(0, "/geo/cone", "second_rotation", USD_AXIS_Z, 45);
usd_addtotransformorder(0, "/geo/cone", step_name);

```
