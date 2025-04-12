---
title: pcline_radius
order: 24
---
| 版本 | 18.0 |
| --- | --- |

`int [] pcline_radius(<geometry>geometry, string PChannel, string RadChannel, float radscale, vector P, vector dir, float max_distance, int maxpoints)`

`int [] pcline_radius(<geometry>geometry, string ptgroup, string PChannel, string RadChannel, float radscale, vector P, vector dir, float max_distance, int maxpoints)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是一个指定几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

这些函数会打开一个几何体文件，并返回距离通过点P且方向为dir的直线不超过max_distance的点（被视为球体）列表。每个点被视为一个球体，其半径等于其RadChannel属性。

`ptgroup`是一个点组，用于限制搜索的点范围。这是一个SOP风格的分组模式，因此可以是类似`0-10`或`@Cd.x>0.5`的表达式。空字符串表示匹配所有点。
