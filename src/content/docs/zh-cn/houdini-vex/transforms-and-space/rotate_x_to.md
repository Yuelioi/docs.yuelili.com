---
title: rotate_x_to
order: 22
---
`vector2  rotate_x_to(vector2 direction, vector2 v)`

`vector  rotate_x_to(vector direction, vector v)`

`vector4  rotate_x_to(vector4 direction, vector4 v)`

`direction`

要将正x轴向量（如(1,0,0)）旋转到的目标方向。该向量不需要归一化。

`v`

需要应用旋转的向量。

对向量`v`施加一个旋转，该旋转会将(1,0)、(1,0,0)或(1,0,0,0)最直接地移动到`direction`方向。

当`direction`为(-1,0,0)时，存在多个不同的旋转可以将(1,0,0)旋转到(-1,0,0)（半圈旋转），此时会任意选择其中一个旋转，即对`v.x`和`v.z`取反。
在2D情况下，将(1,0)旋转到(-1,0)只有一种旋转方式，相当于对`v`取反。
在4D情况下，同样会选择对`v`取反的旋转方式。

该函数被诸如`sample_direction_cone`和`sample_sphere_cone`等函数使用，用于将圆锥中心从(1,0,0)旋转到给定的方向向量。
