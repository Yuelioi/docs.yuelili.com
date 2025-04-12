---
title: surfacedist
order: 17
---
| 版本 | 17.0 |
| --- | --- |

`float  surfacedist(<geometry>geometry, string ptgroup, string P_attribute, int search_pt, int &closest_pt, string distance_metric)`

`float  surfacedist(<geometry>geometry, string ptgroup, string P_attribute, int search_pt, float max_radius, int &closest_pt, string distance_metric)`

返回搜索点到点组中最近点的距离。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，该参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`ptgroup`

点组名称或用于生成点组的模式。使用与SOP组相同的语义，因此空字符串将匹配所有点。也可以使用像`@Cd.x>0`这样的属性组，但请注意在[Snippet VOP](../../nodes/vop/snippet.html "运行VEX代码片段来修改传入值。")中可能需要用反斜杠转义`@`符号。

`P_attribute`

用于测量连接点之间距离的向量属性名称。使用"P"将给出沿表面的世界距离，但可以使用自定义属性来测量不同的度量标准。

`search_pt`

要测量距离的点。

`max_radius`

测量表面距离的最大距离。如果点不在半径范围内，这可以通过允许搜索提前终止来加快速度。超出半径的点将返回距离和前导点的值`-1`。

`&closest_pt`

源组中最近点的索引。

如果未找到最近点，则为`-1`。

`distance_metric`

用于测量距离的方法。可接受的值为`edge`和`surface`。边缘距离沿模型的边缘测量，而表面距离沿边缘和跨单个多边形测量。表面距离更接近真实测地距离，但计算成本也更高。

返回值

从搜索点到点组中最近点的距离。

如果未找到最近点，则返回`-1`。
