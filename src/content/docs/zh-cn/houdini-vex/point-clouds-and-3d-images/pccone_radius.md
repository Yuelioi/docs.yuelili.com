---
title: pccone_radius
order: 6
---
| 版本 | 18.0 |
| --- | --- |

`int [] pccone_radius(<geometry>geometry, string PChannel, string RadChannel, float radscale, vector P, vector dir, float angle, float max_distance, int maxpoints)`

`int [] pccone_radius(<geometry>geometry, string ptgroup, string PChannel, string RadChannel, float radscale, vector P, vector dir, float angle, float max_distance, int maxpoints)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

这些函数会打开一个几何文件，并返回位于以P为顶点、沿dir向量方向张开、与dir夹角为angle的锥体内的点列表。此外，它只返回距离P不超过max_distance的最多maxpoints个最近点。每个点将通过其RadChannel属性进行扩展，该属性将按radscale进行膨胀。

使用半径通道可以检测不同半径球体之间的相交。在这种情况下，不能仅使用自己的球体半径，因为相交的球体可能具有更大的半径，从而不在搜索窗口内。因此，使用0.0半径调用此函数来查找查询位置所在的所有源球体也是合理的。

`ptgroup`是一个限制搜索点的点组。这是一个SOP样式的组模式，可以是类似`0-10`或`@Cd.x>0.5`的形式。空字符串表示匹配所有点。
