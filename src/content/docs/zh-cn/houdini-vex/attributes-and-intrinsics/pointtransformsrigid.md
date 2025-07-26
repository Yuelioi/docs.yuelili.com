---
title: pointtransformsrigid
order: 43
---

| 始于版本 | 18.5 |
| --- | --- |

`matrix [] pointtransformsrigid(<geometry>geometry, int pnts[])`

`matrix [] pointtransformsrigid(<geometry>geometry)`

返回与点索引关联的刚性变换矩阵数组。
该函数使用[标准实例化点属性](../../copy/instanceattrs.html)来构建矩阵，并通过[极分解](/zh-cn/houdini-vex/transforms-and-space/polardecomp "计算矩阵的极分解")使其成为刚性变换。
若省略点索引参数，则返回所有点的变换矩阵。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`pnts`

要查询的点索引数组。
