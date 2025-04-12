---
title: primduv
order: 51
---
`vector  primduv(<geometry>geometry, int prim_number, vector2 uv, int du, int dv)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`的引用。

`prim_number`

要测量导数的基元编号。

`uv`

在基元上测量导数的参数坐标。

`du`, `dv`

表示要查询的导数阶数。

在曲线上，曲线方向由`du==1`给出，曲率由`du==2`给出。

`dv`用于参数化曲面。
