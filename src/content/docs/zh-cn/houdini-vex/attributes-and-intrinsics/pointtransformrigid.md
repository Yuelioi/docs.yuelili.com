---
title: pointtransformrigid
order: 41
---

| 版本 | 18.5 |
| --- | --- |

`matrix  pointtransformrigid(<geometry>geometry, int pnt)`

返回与点索引关联的刚性变换矩阵。
该函数使用[标准实例化点属性](../../copy/instanceattrs.html)来构建矩阵，并通过[极分解](/zh-cn/houdini-vex/transforms-and-space/polardecomp "计算矩阵的极分解")使其成为刚性变换。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号的整数（从0开始）以读取几何体。

或者，该参数可以是指定要读取的几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`pnt`

要查询的点索引。
