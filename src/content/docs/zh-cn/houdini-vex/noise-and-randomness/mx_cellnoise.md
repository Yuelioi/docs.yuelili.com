---
title: mx_cellnoise
order: 19
---
`float  mx_cellnoise(float pos)`

`float  mx_cellnoise(vector2 pos)`

`float  mx_cellnoise(vector pos)`

`float  mx_cellnoise(vector4 pos)`

`vector  mx_cellnoise(float pos)`

`vector  mx_cellnoise(vector2 pos)`

`vector  mx_cellnoise(vector pos)`

`vector  mx_cellnoise(vector4 pos)`

`vector  mx_cellnoise(float pos, int periodx)`

`vector  mx_cellnoise(vector2 pos, int periodx, int periody)`

`vector  mx_cellnoise(vector pos, int periodx, int periody, int periodz)`

`vector  mx_cellnoise(vector4 pos, int periodx, int periody, int periodz, int periodw)`

`float  mx_cellnoise(float pos, int periodx)`

`float  mx_cellnoise(vector2 pos, int periodx, int periody)`

`float  mx_cellnoise(vector pos, int periodx, int periody, int periodz)`

`float  mx_cellnoise(vector4 pos, int periodx, int periody, int periodz, int periodw)`

返回一个介于0到1之间的随机数。该函数产生的数值将与标准MaterialX库保持一致。
