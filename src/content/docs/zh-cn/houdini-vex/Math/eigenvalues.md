---
title: eigenvalues
order: 23
---
`void  eigenvalues(int &nroot, matrix3 mat, vector &real, vector &imaginary)`

计算一个3×3矩阵的[特征值](http://en.wikipedia.org/wiki/Eigenvalues_and_eigenvectors)。

`nroot`

该函数会覆盖此变量，返回实数根的数量。

`mat`

需要计算特征值的矩阵。

`real`, `imaginary`

这两个向量的分量将被覆盖为每个特征值对应的实部和虚部。
例如，`real[0]`和`imaginary[0]`包含第一个特征值的实部和虚部。
