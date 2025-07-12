---
title: rand
order: 29
---
`float  rand(float seed)`

`vector2  rand(float seed)`

`vector  rand(float seed)`

`vector4  rand(float seed)`

`float  rand(float seed, float seed2)`

`vector2  rand(float seed, float seed2)`

`vector  rand(float seed, float seed2)`

`vector4  rand(float seed, float seed2)`

`float  rand(vector2 seed)`

`vector2  rand(vector2 seed)`

`vector  rand(vector2 seed)`

`vector4  rand(vector2 seed)`

`float  rand(vector seed)`

`vector2  rand(vector seed)`

`vector  rand(vector seed)`

`vector4  rand(vector seed)`

`float  rand(vector4 seed)`

`vector2  rand(vector4 seed)`

`vector  rand(vector4 seed)`

`vector4  rand(vector4 seed)`

基于提供的种子值生成随机数。生成的数字范围在0到1之间，具体来说是半开区间`[0, 1)`。相同的种子会产生相同的随机数，因此要获得不同的随机数需要改变种子值。

需要注意的是，即使种子值发生最微小的变化，也会产生完全不同的随机数。因此在不同操作系统或编译器上可能会产生不同的结果。

如果返回值是vector2、vector或vector4类型，每个分量都会是不同的随机数。例如以下代码：

```vex
vector pos = 1;
float seed = 0;

pos *= rand(seed);

```

`pos`的`.x`、`.y`和`.z`分量将会获得不同的值。如果需要均匀缩放，请使用`float()`类型转换：

```vex
vector pos = 1;
float seed = 0;

pos *= float(rand(seed));

```
