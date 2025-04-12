---
title: usd_addorient
order: 5
---
| 始于版本 | 18.0 |
| --- | --- |

`int  usd_addorient(int stagehandle, string primpath, string suffix, vector4 orient)`

此函数将四元数方向应用于图元。它会创建并设置一个定义方向的变换操作属性值，并将其附加到图元的变换顺序中。

`stagehandle`

要写入的舞台句柄。目前唯一有效值是`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台）

`primpath`

图元的路径。

`suffix`

变换操作后缀。

USD图元通过一系列变换操作在空间中进行变换，这些操作的全名按顺序列在`xformOpOrder`属性中。全名是命名空间化的，编码了操作变换类型（如平移或旋转），还可以包含后缀。如果图元有多个相同类型的操作，则需指定后缀以区分它们。此参数即指定此类后缀。

`orient`

表示方向的四元数（以vector4格式）。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 调整立方体方向
vector4 quat = eulertoquaternion(radians({30,0,0}), XFORM_XYZ);
usd_addorient(0, "/dst/cone", "my_orientation", quat);

```
