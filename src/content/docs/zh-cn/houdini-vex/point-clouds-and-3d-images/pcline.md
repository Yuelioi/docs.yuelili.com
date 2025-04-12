---
title: pcline
order: 23
---

| 始于版本 | 18.0 |
| --- | --- |

`int [] pcline(<geometry>geometry, string PChannel, vector P, vector dir, float max_distance, int maxpoints)`

`int [] pcline(<geometry>geometry, string ptgroup, string PChannel, vector P, vector dir, float max_distance, int maxpoints)`

`<geometry>`

当在节点上下文(如wrangle SOP)中运行时，此参数可以是表示输入编号的整数(从0开始)，用于指定读取几何体的输入源。

或者，该参数也可以是一个指定几何体文件(例如`.bgeo`)的字符串路径。在Houdini内部运行时，可以是`op:/path/to/sop`这样的操作符路径引用。

这些函数会打开一个几何体文件，并返回距离通过点P且方向为dir的直线不超过max_distance的所有点列表。

参数`ptgroup`是一个点组(point group)，用于限制搜索的点范围。这是SOP风格的分组模式，可以是类似`0-10`或`@Cd.x>0.5`这样的表达式。空字符串表示匹配所有点。
