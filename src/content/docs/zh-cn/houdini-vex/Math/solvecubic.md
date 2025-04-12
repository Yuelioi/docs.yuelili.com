---
title: solvecubic
order: 75
---

`int  solvecubic(float a, float b, float c, float d, float &t1, float &t2, float &t3)`

`int  solvecubic(float a, float b, float c, float d, vector2 &t2, vector2 &t3)`

求解给定的三次函数，其中a、b、c、d为系数，形式为：`ax^3 + bx^2 + cx + d = 0`

返回实数根的数量。

在实数情况下，返回的根将按升序排列。如果只有一个根，则该根会被填充到t1、t2和t3中。

在复数情况下，t1、t2和t3为复数根。
