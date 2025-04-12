---
title: usd_addrotate
order: 9
---
| 始于版本 | 18.0 |
| --- | --- |

`int  usd_addrotate(int stagehandle, string primpath, string suffix, int axis, float angle)`

`int  usd_addrotate(int stagehandle, string primpath, string suffix, int xyz, vector angles)`

此函数对图元应用旋转操作。它会创建并设置一个定义旋转的变换操作属性值，并将其附加到图元的变换顺序中。

`stagehandle`

要写入的舞台句柄。当前唯一有效值为`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台）

`primpath`

图元的路径。

`suffix`

变换操作后缀。

USD图元通过一系列变换操作在空间中进行变换，这些操作的全名按顺序列在`xformOpOrder`属性中。全名采用命名空间形式，编码了变换操作类型（如平移或旋转），并可包含后缀。若图元存在多个同类型操作，则需指定后缀以区分。本参数即用于指定此后缀。

`axis`

旋转轴的数值代码。轴定义请参阅usd.h VEX头文件。

`angle`

绕单个主轴旋转时的旋转角度（度数制）。

`axis`

轴旋转顺序的数值代码。顺序定义请参阅usd.h VEX头文件。

`angles`

绕各主轴依次旋转时的三个旋转角度（度数制）。

返回值

成功时返回`stagehandle`值，失败时返回`-1`。

## 示例

```vex
// 包含定义轴和顺序常量的"usd.h"头文件
#include <usd.h>

// 绕z轴旋转立方体30度
usd_addrotate(0, "/geo/cube", "", USD_AXIS_Z, 30);

// 绕y轴逆时针旋转网格45度
usd_addrotate(0, "/geo/mesh", "geo_rotation", USD_AXIS_Y, -45);

// 使用欧拉角旋转圆锥体
usd_addrotate(0, "/geo/cone", "cone_rotation", USD_ROTATE_XYZ, {0, 30, 45});

```
