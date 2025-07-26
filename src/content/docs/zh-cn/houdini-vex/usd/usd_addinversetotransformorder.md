---
title: usd_addinversetotransformorder
order: 4
---

| 版本 | 18.0 |
| --- | --- |

`int  usd_addinversetotransformorder(int stagehandle, string primpath, string name)`

此函数将逆变换添加到图元的变换顺序中。变换顺序是一系列变换操作的序列，其完整名称以字符串数组形式存储在`xformOpOrder`属性中。因此，本函数会向该属性追加一个新的操作名称。

逆变换主要用于围绕非原点的枢轴点进行旋转（或缩放）操作。通常做法是先平移到枢轴点，然后执行旋转，最后应用原始平移的逆变换。本函数用于实现原始平移的逆变换。

注意：与大多数处理图元变换并以操作后缀作为参数的VEX函数不同，本函数需要完整的操作名称。若已知操作后缀，可使用[usd_transformname](/zh-cn/houdini-vex/usd/usd_transformname "构造变换操作的完整名称")获取完整名称。

`stagehandle`

要写入的舞台句柄。当前唯一有效值为`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台）

`primpath`

目标图元的路径。

`name`

变换操作的完整名称。使用[usd_transformname](/zh-cn/houdini-vex/usd/usd_transformname "构造变换操作的完整名称")根据操作后缀获取完整名称。

返回值

成功时返回`stagehandle`值，失败时返回`-1`。

## 示例

```vex
// 注意：以下使用的USD_XFORM_TRANSLATE和USD_AXIS_Z常量
// 定义在"usd.h" VEX头文件中，需先包含该文件
#include <usd.h>

// 构造枢轴平移操作的后缀和名称
string pivot_xform_suffix = "some_pivot";
string pivot_xform_name = usd_transformname(USD_XFORM_TRANSLATE, pivot_xform_suffix);

// 绕通过枢轴点(1,0,0)的z轴旋转
usd_addtranslate(0, "/geo/cone", pivot_xform_suffix, {1, 0, 0});
usd_addrotate(0, "/geo/cone", "some_rotation", USD_AXIS_Z, -90);
usd_addinversetotransformorder(0, "/geo/cone", pivot_xform_name);

```
