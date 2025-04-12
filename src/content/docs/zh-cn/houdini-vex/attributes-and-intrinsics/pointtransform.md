---
title: pointtransform
order: 40
---

| 版本 | 18.5 |
| --- | --- |

`matrix  pointtransform(<geometry>geometry, int pnt)`

使用[标准实例化点属性](../../copy/instanceattrs.html)计算点的变换矩阵。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`pnt`

要查询的点索引。
