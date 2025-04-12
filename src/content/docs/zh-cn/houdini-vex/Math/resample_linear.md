---
title: resample_linear
order: 66
---
`float [] resample_linear(float input[], int new_length)`

`vector [] resample_linear(vector input[], int new_length)`

`vector2 [] resample_linear(vector2 input[], int new_length)`

`vector4 [] resample_linear(vector4 input[], int new_length)`

返回一个大小为 new_length 的新数组，该数组从输入数组中均匀采样。数组元素通过输入数组的线性插值计算得出。
