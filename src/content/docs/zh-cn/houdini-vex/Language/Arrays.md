---
title: arrays
order: 1
---
| 本页内容 | * [概述](#概述) * [声明数组类型](#声明数组类型) * [访问和设置数组值](#访问和设置数组值) * [数组切片](#数组切片) * [数组与向量/矩阵间的复制](#数组与向量矩阵间的复制) * [遍历数组](#遍历数组) * [数组操作](#数组操作) * [VCC编译指令](#vcc编译指令) * [限制](#限制) |
| --- | --- |

概述

## 概述

VEX包含数组数据类型，在以下场景中非常有用：

- 支持渐变参数
- 使用[import()](functions/import.html)函数从表面节点读取捕捉数据
- 常规编程中需要数组的场景

注意
当前VEX不支持多维数组。

注意
在Snippet、Wrangle或其他函数内部定义的返回数组的函数需要使用function关键字。

以下示例展示了数组的一些高级用法：

```vex
surface
crazy(
 string maps[] = { "Mandril.rat", "default.pic" };
 export float alength = 0;
 )
{
 vector texclr, av[];

 texclr = texture(maps[s+t > 1], s, t);
 av = array( {1,0,0}, vector(nrandom()), t, texclr, {.5,0,0});

 if (fit(noise(s*8), 0, 1, .3, .7) > t)
 av = array(1, {0,1,0}, 0);

 Cf = spline("linear", s, av);
 alength = len(av);
}
```

声明数组类型

## 声明数组类型

声明数组变量的通用格式为`成员类型 变量名[]`：

```vex
// my_array是浮点数数组
float my_array[];

// v是单个向量，vector_array是向量数组
vector v, vector_array[];

// str_array是字符串数组
string str_array[];
```

可以在方括号内指定大小，但VEX编译器目前会忽略该值。

声明返回数组的函数：

```vex
// 返回向量数组的函数
// 在WRANGLE/SNIPPET中无效：需使用function关键字
vector[] rgb_array()
{
...
}; 
```

嵌套函数存在类型歧义。注意Wrangles和Snippets总是隐式嵌套。声明嵌套的返回数组函数：

```vex
// 返回向量数组的函数
cvex
foo()
{
 // 使用可选的'function'关键字避免类型歧义
 function vector[] rgb_array()
 {
 ...
 }; 
}
```

指定字面量数组时，使用花括号并用逗号分隔数组成员：

```vex
vector an_array[] = { {1, 2, 3}, {2, 3, 4}, {4, 5, 6} };

vector[] rgb_array()
{
 return { {1, 0, 0}, {0, 1, 0}, {0, 0, 1} };
}
```

注意
字面量数组在编译时构造，因此不能包含变量。

例如，以下代码会报错：

```vex
int arr[] = { my_var, other_var + 2 }; // 错误
```

要避免此错误，可使用运行时构造数组的`array()`函数：

```vex
int arr[] = array( my_var, other_var + 2 );
```

当向量预期位置指定标量时，编译器会将标量值赋给向量的所有分量：

```vex
vector an_array[] = { 1, 2, 3};
// an_array[] == { {1, 1, 1}, {2, 2, 2}, {3, 3, 3} }
```

`array()`函数从其参数创建数组：

```vex
int my_array[] = array(1, 2, 3, 4, 5);
```

可以使用`array()`生成任何类型的数组。
强制生成向量数组（例如）：

```vex
vector (array (value1, value2, ...) );
```

访问和设置数组值

## 访问和设置数组值

使用`数组名[索引]`通过位置查找数组中的值。

```vex
vector bw[] = { 0, 1 };
// bw[] == { {0, 0, 0}, {1, 1, 1} }
Cf = bw[index];
```

数组边界在运行时检查。越界读取将返回`0`或`""`。未来可能生成警告或可选的运行时错误。
向数组末尾之后写入会调整数组大小以包含写入索引，新条目将设为`0`或`""`。

使用Python风格索引，负索引表示从数组末尾开始的位置。

```vex
int nums[] = { 0, 1, 2, 3, 4, 5 };
int n = nums[10]; // 返回0
int b = nums[-2]; // 返回4

string strs[] = { };
string s = strs[20]; // 返回""
```

也可以使用方括号表示法赋值：

```vex
float nums[] = { };
nums[0] = 3.14;
```

（[getcomp](functions/getcomp.html "提取向量类型、矩阵类型或数组的单个组件。")和[setcomp](functions/setcomp.html "设置向量或矩阵类型的单个组件，或数组中的项。")函数等同于使用方括号表示法。）

注意
方括号运算符也适用于向量。可以用于矩阵：`float a = m3[0][1];`

数组切片

## 数组切片

方括号可以使用Python切片表示法提取子数组。

```vex
int nums[] = { 0, 1, 2, 3, 4, 5 };
int start[] = nums[0:2]; // { 0, 1 }
int end[] = nums[-2:]; // { 4, 5 }
int rev[] = nums[::-1]; // { 5, 4, 3, 2, 1, 0 }
int odd[] = nums[1::2]; // { 1, 3, 5 }
```

[slice](functions/slice.html "切片字符串或数组的子字符串或子数组。")函数等同于使用基于切片的方括号表示法。

数组与向量/矩阵间的复制

## 数组与向量矩阵间的复制

赋值运算符支持在向量类型和浮点数数组之间赋值：

```vex
float x[];
// Cf和P是向量

x = set(P); // 将P的分量赋给数组x的对应成员

Cf = set(x); // 将x的前3个成员作为向量Cf的分量
```

如果数组长度不足以填充向量/矩阵，最后一个成员会重复填充。

```vex
float x[] = {1, 2} // 长度不足以填充向量
Cf = set(x); // Cf == {1, 2, 2}
```

也可以在矩阵类型和`vector2`/`vector`/`vector4`数组之间赋值：

```vex
vector2 v2[];
vector v[];
vector4 v4[];
matrix2 m2 = 1;
matrix3 m3 = 1;
matrix m4 = 1;

v = set(m3); // 将3x3矩阵的每行放入一个向量
m3 = set(v); // 将向量复制到矩阵的行向量中
v4 = set(m4); // 将矩阵的行提取到vector4数组
m4 = set(v4); // 使用数组中的vector4作为行向量创建矩阵
```

总结：

| 左侧 = | 右侧 | 说明 |
| --- | --- | --- |
| `vector2` | `float[]` | 例如 `vector2 v = {1,2}` |
| `vector` | `float[]` | 例如 `vector v = {1,2,3}` |
| `vector4` | `float[]` | 例如 `vector4 v = {1,2,3,4};` |
| `matrix2` | `float[]` | 例如 `matrix2 m = {1,2,3,4};` |
| `matrix2` | `vector2[]` | 例如 `matrix2 m = { {1,2}, {4,5} };` |
| `matrix3` | `float[]` | 例如 `matrix3 m = {1,2,3,4,5,6,7,8,9};` |
| `matrix3` | `vector[]` | 例如 `matrix3 m = { {1,2,3}, {4,5,6}, {7,8,9}};` |
| `matrix` | `float[]` | 例如 `matrix m = {1,2,3,4,5,6,7,8,9.., 16};` |
| `matrix` | `vector4[]` | 例如 `matrix m = { {1,2,3,4}, {5,6,7,8}, ... {13,14,15,16}};` |
| `float[]` | `vector2` | 从分量创建2个浮点数的数组 |
| `float[]` | `vector` | 从分量创建3个浮点数的数组 |
| `float[]` | `vector4` | 从分量创建4个浮点数的数组 |
| `float[]` | `matrix2` | 从matrix2创建4个浮点数的数组 |
| `vector2[]` | `matrix2` | 从matrix2创建2个vector2的数组 |
| `float[]` | `matrix3` | 从matrix3创建9个浮点数的数组 |
| `vector[]` | `matrix3` | 从matrix3创建3个向量的数组 |
| `float[]` | `matrix4` | 创建16个浮点数的数组 |
| `vector4[]` | `matrix4` | 创建4个`vector4`的数组 |

遍历数组

## 遍历数组

参见[foreach](functions/foreach.html "遍历数组中的项，可选枚举。")。

数组操作

## 数组操作

以下函数用于查询和操作数组：

[resize](functions/resize.html "设置数组长度。")

设置数组长度。如果数组扩大，中间值将为`0`或`""`。

[len](functions/len.html "返回数组长度。")

返回数组长度。

[pop](functions/pop.html "移除数组最后一个元素并返回。")

移除数组最后一项（数组大小减1）并返回。

[removevalue](functions/removevalue.html "从数组中移除项。")

移除数组中第一个匹配的值。如果移除了项返回`1`，否则返回`0`。

[removeindex](functions/removeindex.html "移除给定索引处的项。")

移除给定索引处的项并返回。

[push](functions/push.html "向数组添加项。")

向数组末尾添加项（数组大小加1）。

[getcomp](functions/getcomp.html "提取向量类型、矩阵类型或数组的单个组件。")

获取数组组件的值，等同于`数组[编号]`。

[setcomp](functions/setcomp.html "设置向量或矩阵类型的单个组件，或数组中的项。")

设置数组组件的值，等同于`数组[编号] = 值`。

[array](functions/array.html "高效地从参数创建数组。")

高效地从参数创建数组。

[serialize](functions/serialize.html "将向量或矩阵类型的数组展平为浮点数数组。")

将向量或矩阵数组展平为浮点数数组。

[unserialize](functions/unserialize.html "将浮点数平面数组转换为向量或矩阵数组。")

反转[serialize](functions/serialize.html "将向量或矩阵类型的数组展平为浮点数数组。")的效果：将浮点数平面数组组装为向量或矩阵数组。

[neighbours](functions/neighbours.html "返回点邻居的点编号数组。")

替代[neighbourcount](functions/neighbourcount.html "返回连接到指定点的点数。")/[neighbour](functions/neighbour.html "返回连接到给定点的下一个点的点编号。")组合的基于数组的方案。返回给定点的邻居点编号数组。

此外，以下函数也适用于数组：

- [min](functions/min.html)
- [avg](functions/avg.html "返回输入的平均值")
- [spline](functions/spline.html "沿折线或样条曲线采样值。")
- [import()](functions/import.html)
- [addattribute()](functions/addattribute.html)
- [metaimport](functions/metaimport.html "使用metastart和metanext获取元球句柄后，可以通过metaimport查询元球属性。")

VCC编译指令

## vcc编译指令

`ramp`编译指令可为一组参数指定渐变用户界面。

```vex
#pragma ramp <渐变参数> <基础参数> <键参数> <值参数>
```

详见[VCC编译指令](pragmas.html)。

限制

## 限制

- 当前VEX不支持多维数组
- 数组不能在着色器之间传递（通过[simport](functions/simport.html "导入光照循环中表面着色器发送的变量。")等）
- 数组不能写入图像平面
