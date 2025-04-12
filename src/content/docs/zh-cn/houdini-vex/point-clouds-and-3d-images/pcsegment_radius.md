---
title: pcsegment_radius
order: 30
---
| 始于版本 | 18.0 |
| --- | --- |

`int [] pcsegment_radius(<geometry>geometry, string PChannel, string RadChannel, float radscale, vector P0, vector P1, float max_distance, int maxpoints)`

`int [] pcsegment_radius(<geometry>geometry, string ptgroup, string PChannel, string RadChannel, float radscale, vector P0, vector P1, float max_distance, int maxpoints)`

`int [] pcsegment_radius(<geometry>geometry, string PChannel, string RadChannel, float radscale, vector P0, vector P1, float max_distance, int maxpoints, float &distances[])`

`int [] pcsegment_radius(<geometry>geometry, string ptgroup, string PChannel, string RadChannel, float radscale, vector P0, vector P1, float max_distance, int maxpoints, float &distances[])`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，该参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

这些函数会打开一个几何体文件，并返回位于从P0到P1的线段max_distance范围内的点列表（被视为球体）。每个点被视为一个球体，其半径等于其RadChannel属性。

`ptgroup`是一个限制搜索点的点组。这是一个SOP风格的分组模式，因此可以是类似`0-10`或`@Cd.x>0.5`的内容。空字符串被视为匹配所有点。

该函数还可以选择性地接受一个浮点数组`distances`，并用每个点的距离修改该数组。
