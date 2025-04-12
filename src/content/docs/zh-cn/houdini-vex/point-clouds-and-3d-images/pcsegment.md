---
title: pcsegment
order: 29
---
| 始于版本 | 18.0 |
| --- | --- |

`int [] pcsegment(<geometry>geometry, string PChannel, vector P0, vector P1, float max_distance, int maxpoints)`

`int [] pcsegment(<geometry>geometry, string ptgroup, string PChannel, vector P0, vector P1, float max_distance, int maxpoints)`

`int [] pcsegment(<geometry>geometry, string PChannel, vector P0, vector P1, float max_distance, int maxpoints, float &distances[])`

`int [] pcsegment(<geometry>geometry, string ptgroup, string PChannel, vector P0, vector P1, float max_distance, int maxpoints, float &distances[])`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号的整数（从0开始）以读取几何体。

或者，该参数可以是指定要读取的几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

这些函数会打开一个几何体文件，并返回距离从P0到P1的线段不超过max_distance的点列表。

`ptgroup`是一个限制搜索范围的点组。这是SOP风格的组模式，因此可以是类似`0-10`或`@Cd.x>0.5`的内容。空字符串被视为匹配所有点。

该函数还可以选择性地接受一个浮点数组`distances`，并用每个点的距离来修改它。
