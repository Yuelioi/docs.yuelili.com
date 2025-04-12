---
title: solvepoly
order: 76
---
`int  solvepoly(float coef[], float &roots[], int maxiter=0)`

`coef`

多项式系数的数组。

必须将系数排序，使得 `coef[i]` 对应 `x^i` 项。
**这与通常书写多项式时的顺序相反**。

`&roots`

该函数会将多项式的实数根按升序写入此数组。

返回值

实数根的个数。
