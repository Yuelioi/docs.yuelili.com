---
title: pointtransforms
order: 42
---

| 版本 | 18.5 |
| --- | --- |

`matrix [] pointtransforms(<geometry>geometry, int pnts[])`

`matrix [] pointtransforms(<geometry>geometry)`

返回与点索引相关联的变换矩阵数组，使用[标准实例化点属性](../../copy/instanceattrs.html)。如果省略点索引参数，则返回所有点的变换矩阵。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是一个指定几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`pnts`

要查询的点索引数组。
