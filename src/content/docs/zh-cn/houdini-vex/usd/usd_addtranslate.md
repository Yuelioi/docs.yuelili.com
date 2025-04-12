---
title: usd_addtranslate
order: 14
---
| 始于版本 | 18.0 |
| --- | --- |

`int  usd_addtranslate(int stagehandle, string primpath, string suffix, vector amount)`

此函数对图元应用平移变换。它会创建并设置一个定义平移的变换操作属性值，并将其附加到图元的变换顺序中。

`stagehandle`

要写入的舞台句柄。目前唯一有效的值是`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台）

`primpath`

图元的路径。

`suffix`

变换操作后缀。

USD图元通过一系列变换操作在空间中进行变换，这些操作的全名按顺序列在`xformOpOrder`属性中。全名是命名空间化的，编码了操作变换类型（例如平移或旋转），还可以包含后缀。如果图元有多个相同类型的操作，则需要指定后缀以区分它们。此参数用于指定此类后缀。

`amount`

沿各主轴移动的距离。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 平移立方体
usd_addtranslate(0, "/geo/cube", "my_translation", {10, 0, -2.5});

```
