---
title: set
order: 17
---
`set()`函数具有**多种形式**，可用于执行多种不同类型的转换。

提示
在Houdini中填充矩阵时，数字先填充第一行，然后第二行，依此类推（"行优先"）。

`vector2  set(float v1, float v2)`

`vector  set(float v1, float v2, float v3)`

`vector4  set(float v1, float v2, float v3, float v4)`

`matrix2  set(float v1, float v2, float v3, float v4)`

`matrix3  set(float v1, float v2, float v4, float v4, float v5, float v6, float v7, float v8, float v9)`

`matrix  set(float v1, float v2, float v3, float v4, float v5, float v6, float v7, float v8, float v9, float v10, float v11, float v12, float v13, float v14, float v15, float v16)`

根据参数中的值创建向量或矩阵类型。

```vex
vector4 v = set(1.0, 2.0, 3.0, 4.0);
matrix3 m = set(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0);

```

[assign](/zh-cn/houdini-vex/utility/assign "一种高效提取向量或矩阵分量到浮点变量的方法。")函数执行与此相反的操作（将分量提取到变量中）。

`<vector> set(float nums[])`

`<matrix> set(float nums[])`

从浮点数数组创建向量/矩阵。

```vex
float[] nums = {1.0, 2.0, 3.0, 4.0};
vector4 v = set(nums);

```

`<vector> set(float|intv)`

`<matrix> set(float|intv)`

如果使用单个值设置向量或矩阵类型，则该向量/矩阵的所有分量都将填充该值。

```vex
vector4 v = set(2.0); // -> {2.0, 2.0, 2.0, 2.0}

```

`matrix2  set(vector2 row1, vector2 row2)`

`matrix3  set(vector row1, vector row2, vector row3)`

`matrix  set(vector4 row1, vector4 row2, vector4 row3, vector4 row4)`

从表示行的相同大小的向量参数序列创建矩阵类型。

```vex
matrix3 m = set({0.0, 1.0, 0.0}, {1.0, 0.0, 1.0}, {0.0, 1.0, 0.0});

```

`matrix3  set(vector rows[])`

`matrix  set(vector4 rows[])`

也可以从表示行的向量数组设置矩阵类型。如果数组中没有足够的向量填充矩阵，则额外的行将包含零。

`vector [] set(matrix3 m)`

`vector4 [] set(matrix m)`

从相同大小的矩阵的行创建向量数组。

```vex
matrix3 m3 = {1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0};
vector[] vs = set(m3); // -> 数组 [ {1.0, 2.0, 3.0}, {4.0, 5.0, 6.0}, {7.0, 8.0, 9.0} ]

```

`vector  set(vector2 v)`

`vector4  set(vector2 v)`

`vector4  set(vector v)`

`matrix3  set(matrix2 m)`

`matrix  set(matrix2 m)`

`matrix  set(matrix3 m)`

如果从较小的类型设置较大的向量或矩阵类型，额外的分量将为零。

```vex
vector2 v2 = {1.0, 2.0};
vector4 v4 = set(v2); // -> {1.0, 2.0, 0.0, 0.0}

```

`float  set(vector v)`

`float  set(vector4 v)`

`vector2  set(vector4 v)`

`vector2  set(vector v)`

`vector  set(vector4 v)`

如果使用较大的向量设置较小的向量，较小的类型将从左侧获取分量。

```vex
vector4 v4 = {1.0, 2.0, 3.0, 4.0};
vector2 v2 = set(v4) // -> {1.0, 2.0}

```

`matrix2  set(matrix3 m)`

`matrix2  set(matrix m)`

`matrix3  set(matrix m)`

如果使用较大的矩阵设置较小的矩阵，较小的类型将获取左上角部分。

```vex
matrix3 m3 = {1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0};
matrix2 m2 = set(m3); // -> {1.0, 2.0, 4.0, 5.0}

```

`float [] set(<vector>v)`

`float [] set(<matrix>m)`

从向量或矩阵类型的分量创建浮点数数组。

```vex
matrix3 m3 = {1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0};
float[] nums = set(m3); // -> 数组 [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ]

```

`<vector>[] set(float nums[])`

`<matrix>[] set(float nums[])`

通过从浮点数数组中逐个获取分量来创建向量/矩阵类型的数组。这与使用[unserialize](/zh-cn/houdini-vex/conversion/unserialize "将扁平浮点数数组转换为向量或矩阵数组。")函数相同。

```vex
float[] nums = {1.0, 2.0, 3.0, 4.0};
vector2[] vs = set(nums); // -> [ {1.0, 2.0}, {3.0, 4.0} ]

```

`int  set(float v)`

`float  set(int v)`

`float [] set(int vs[])`

`int [] set(float vs[])`

可以将浮点数转换为整数，或整数转换为浮点数，或将整数数组转换为浮点数数组，或将浮点数数组转换为整数数组。

```vex
float[] fracs = { 1.1, 2.2, 3.3, 4.4, 5.5, 6.6 };
int[] floored = set(fracs); // -> 数组 [ 1, 2, 3, 4, 5, 6 ]

```

`float [] set(float num)`

将浮点数数组中的所有项设置为相同的值。

`float  set(float nums[])`

返回数组中的第一项。

`dict  set(string key, ...)`

用一系列键/值对初始化字典。每个其他参数应该是键的字符串，后跟该键的值。

`<type> set(<type>v)`

`<type>[] set(<type>v[])`

如果使用相同的参数类型和返回类型调用`set()`，它只是返回参数值。

```vex
string s = set("Hello"); // -> "Hello"

```
