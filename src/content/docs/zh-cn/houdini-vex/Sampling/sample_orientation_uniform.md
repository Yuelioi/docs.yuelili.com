---
title: sample_orientation_uniform
order: 26
---

`vector4 sample_orientation_uniform(vector u)`

`u`

三个介于0和1之间的数值。

返回一个基于`u`的单位向量4，即长度为1的vector4。
给定在`[0,1)`范围内三个值的均匀随机`u`向量，返回的单位向量将在单位超球面上相对于`u`保持均匀随机且连续。
换句话说，它们将是均匀随机的方向四元数。
