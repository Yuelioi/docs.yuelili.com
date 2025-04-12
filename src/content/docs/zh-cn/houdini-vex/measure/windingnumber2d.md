---
title: windingnumber2d
order: 20
---
`float  windingnumber2d(<geometry>geometry, vector origin)`

`float  windingnumber2d(<geometry>geometry, vector origin, float accuracy)`

计算曲线几何体围绕原点点的环绕数。

`float  windingnumber2d(<geometry>geometry, string primgroup, vector origin)`

`float  windingnumber2d(<geometry>geometry, string primgroup, vector origin, float accuracy)`

计算基元组primgroup围绕原点点的环绕数。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`primgroup`

可选地仅计算由基元组指定的曲线子集的环绕数。

`origin`

计算环绕数的空间位置。

`accuracy`

环绕数仅为近似计算。默认值2.0在大多数情况下足够，将精度设置为12.0应能得到浮点精度范围内的准确结果。

返回值

XY平面中曲线在某点的环绕数。
