---
title: pointlocaltransforms
order: 39
---
| 版本 | 18.5 |
| --- | --- |

`matrix [] pointlocaltransforms(<geometry>geometry, int pnts[])`

返回与点索引关联的局部变换矩阵数组。该函数查询的是 `4@localtransform` 属性。

`<geometry>`

在节点上下文（如 wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数也可以是指定几何文件（例如 `.bgeo`）的字符串。在 Houdini 内部运行时，可以是 `op:/path/to/sop` 形式的引用。

`pnts`

要查询的点索引数组。
