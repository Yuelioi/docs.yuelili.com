---
title: prim_normal
order: 2
---
`vector  prim_normal(<geometry>geometry, int prim_number, vector uvw)`

`vector  prim_normal(<geometry>geometry, int prim_number, float u, float v)`

`vector  prim_normal(<geometry>geometry, int prim_number, float u, float v, float w)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个整数，表示要读取几何体的输入编号（从0开始）。

或者，该参数可以是一个指定几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`uvw`, `u`, `v`, `w`

当未提供w时，默认视为零。

返回值

在参数位置u、v、w处的基元（prim_number）的法线向量。
