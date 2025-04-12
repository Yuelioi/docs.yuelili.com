---
title: usd_addscale
order: 10
---
| 版本 | 18.0 |
| --- | --- |

`int  usd_addscale(int stagehandle, string primpath, string suffix, vector scale)`

此函数为图元应用缩放变换。它会创建并设置一个定义缩放操作的变换属性值，并将其附加到图元的变换顺序中。

`stagehandle`

要写入的舞台句柄。目前唯一有效值是`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台）

`primpath`

图元的路径。

`suffix`

变换操作后缀。

USD图元通过一系列变换操作在空间中进行变换，这些操作的全名按顺序列在`xformOpOrder`属性中。全名采用命名空间格式，编码了变换操作类型（如平移或旋转），并可包含后缀。如果图元有多个相同类型的操作，则需要指定后缀以区分它们。此参数即用于指定该后缀。

`scale`

沿各主轴方向的缩放因子。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 缩放立方体
usd_addscale(0, "/geo/cube", "my_scale", {0.25, 0.5, 2});

```
