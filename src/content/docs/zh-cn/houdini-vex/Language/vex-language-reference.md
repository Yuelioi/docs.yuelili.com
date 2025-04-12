---
title: VEX语言参考
order: 7
---
| 本页内容 | * [上下文](#contexts) * [语句](#statements) * [内置函数](#built-in-functions) * [用户定义函数](#functions)   + [注意事项](#notes) * [主(上下文)函数](#main-context-function)   + [用户界面编译指示](#user-interface-pragmas) * [运算符](#operators)   + [点运算符](#dot-operator)  + [比较运算](#comparisons)  + [优先级表](#precedence)  + [运算符类型交互](#operator-type-interactions) * [数据类型](#data-types) * [结构体](#structs)   + [结构体函数](#methods) * [Mantra专用类型](#mantratypes) * [类型转换](#type-casting)   + [变量类型转换](#variable-casting)  + [函数类型转换](#function-casting) * [注释](#comments) * [保留关键字](#reserved) |
| --- | --- |

上下文

## contexts

VEX程序是为特定*上下文*编写的。例如，控制对象表面颜色的着色器是为`surface`上下文编写的。确定光源照明的着色器是为`light`上下文编写的。创建或过滤通道数据的VEX程序是为`chop`上下文编写的。

上下文决定了哪些函数、语句和全局变量可用。

参见[VEX上下文](contexts/index.html "编写VEX程序的不同上下文指南")了解使用VEX的不同方式概述。

如果您正在为着色上下文(表面、置换、光源等)编写代码，还应阅读[着色上下文特定信息](contexts/shading_contexts.html)。

语句

## statements

VEX支持类似C语言的常用[语句](statement.html)。它还支持特定于着色的语句，如仅在特定上下文中可用的[illuminance](functions/illuminance.html "循环遍历场景中的所有光源，为每个光源调用光源着色器以设置Cl和L全局变量。")和[gather](functions/gather.html "向场景发送光线，并从被光线击中的表面着色器返回信息。")循环。

内置函数

## built-in-functions

VEX包含一个大型的[内置函数库](functions/index.html)。某些函数仅在特定上下文中可用。

参见[VEX函数](functions/index.html)。

用户定义函数

## functions

函数的定义方式与C类似：指定返回类型、函数名称、带括号的参数列表，然后是代码块。

相同类型的参数可以在逗号分隔的列表中声明，无需重新声明类型。其他参数必须用分号分隔。

```vex
int test(int a, b; string c) {
    if (a > b) {
        printf(c);
    }
}
```

您可以*重载*具有相同名称但不同参数签名*和/或返回类型*的函数。

可以使用可选的`function`关键字引入函数定义以避免类型歧义。

```vex
function int test(int a, b; string c) {
    if (a > b) {
        printf(c);
    }
}
```

```vex
void print(basis b) { 
    printf("basis: { i: %s, j: %s, k: %s }\n", b.i, b.j, b.k); 
} 
void print(matrix m) { 
    printf("matrix: %s\n", m); 
} 
void print(bases b) { 
    printf("bases <%s> {\n", b.description); 
    printf("  "); print(b.m); 
    printf("  "); print(b.n); 
    printf("  "); print(b.o); 
    printf("}\n"); 
} 

basis rotate(basis b; vector axis; float amount) { 
    matrix m = 1; 
    rotate(m, amount, axis); 
    basis result = b; 
    result.i *= m; 
    result.j *= m; 
    result.k *= m; 
    return result; 
} 
void rotate(basis b; vector axis; float amount) { 
    b = rotate(b, axis, amount); 
} 
```

### 注意事项

notes

- 用户函数必须在被引用之前声明。
- 函数由[编译器](vcc.html "VEX语言编译器vcc及其预处理器和编译指示语句的使用概述")自动内联，因此**递归将不起作用**。要编写递归算法，应改用[着色器调用](shadercalls.html)。
- 与RenderMan着色语言一样，用户函数的参数总是**通过引用传递**，因此在用户函数中的修改会影响调用该函数的变量。可以通过在参数前添加`const`关键字来强制着色参数为只读。为确保用户函数写入输出参数，可在其前添加`export`关键字。
- 用户函数的数量没有限制。
- 一个函数中可以有多个return语句。
- 可以直接访问全局变量(与RenderMan着色语言不同，不需要用`extern`声明它们)。但是，建议避免访问全局变量，因为这会将函数限制在仅在一个上下文中工作(存在这些全局变量的地方)。相反，应将全局变量作为参数传递给函数。
- 函数可以在函数内部定义(嵌套函数)。

主(上下文)函数

## main-context-function

VEX程序必须包含一个返回类型为上下文名称的函数。这是程序的主函数，由mantra调用。编译器期望每个文件有一个上下文函数。

此函数应通过调用内置和/或用户定义的函数来完成计算所需信息和修改全局变量的工作。您不使用`return`语句从上下文函数返回值。请参阅特定[上下文](contexts/index.html "编写VEX程序的不同上下文指南")页面了解每个上下文中可用的全局变量。

上下文函数的参数(如果有)成为程序的用户界面，例如引用VEX程序的着色节点的参数。

如果存在与上下文函数参数同名的几何属性，则该属性会覆盖参数的值。这允许您将属性绘制到几何体上以控制VEX代码。

```vex
surface
noise_surf(vector clr = {1,1,1}; float frequency = 1;
           export vector nml = {0,0,0})
{
    Cf = clr * (float(noise(frequency * P)) + 0.5) * diffuse(normalize(N));
    nml = normalize(N)*0.5 + 0.5;
}
```

注意
VEX对上下文函数的参数有特殊处理。可以使用与变量同名的几何属性覆盖参数的值。除了这种特殊情况外，参数在着色器范围内应被视为"const"。这意味着修改参数值是非法的。如果发生这种情况，编译器将生成错误。

您可以使用`export`关键字标记您希望修改原始几何体的参数。

### 用户界面编译指示

user-interface-pragmas
Houdini从此程序生成的用户界面将是最小的，基本上只是变量名和基于数据类型的通用文本字段。例如，您可能希望指定`frequency`应该是一个具有特定范围的滑块，而`clr`应该被视为颜色(给它一个颜色选择器UI)。您可以使用[用户界面编译器编译指示](pragmas.html)来实现这一点。

```vex
#pragma opname        noise_surf
#pragma oplabel        "噪波表面"

#pragma label    clr            "颜色"
#pragma label    frequency    "频率"

#pragma hint    clr            color
#pragma range    frequency    0.1 10

surface noise_surf(vector clr = {1,1,1}; float frequency = 1;
           export vector nml = {0,0,0})
{
    Cf = clr * (float(noise(frequency * P)) + 0.5) * diffuse(normalize(N));
    nml = normalize(N)*0.5 + 0.5;
}
```

运算符

## operators

VEX具有标准C运算符和C优先级，但有以下差异。

乘法定义在两个向量或点之间。乘法执行逐元素乘法(而不是点积或叉积；参见[cross](functions/cross.html "返回两个向量之间的叉积。")和[dot](functions/dot.html "返回参数之间的点积。"))。

许多运算符为非标量数据类型定义(即向量乘以矩阵将用矩阵变换向量)。

在将两种不同类型与运算符组合的模糊情况下，结果具有第二个(右侧)值的类型，例如

```vex
int + vector = vector
```

### 点运算符

dot-operator
您可以使用点运算符(`.`)引用向量、矩阵或`结构体`的各个组件。

对于向量，组件名称是固定的。

- `.x`或`.u`引用`vector2`的第一个元素。
- `.x`或`.r`引用`vector`和`vector4`的第一个元素。
- `.y`或`.v`引用`vector2`的第二个元素。
- `.y`或`.g`引用`vector`和`vector4`的第二个元素。
- `.z`或`.b`引用`vector`和`vector4`的第三个元素。
- `.w`或`.a`引用`vector4`的第四个元素。

选择u,v/x,y,z/r,g,b字母是任意的；即使向量不包含点或颜色，也适用相同的字母。

对于矩阵，您可以使用一对字母：

- `.xx`引用`[0][0]`元素
- `.zz`引用`[2][2]`元素
- `.ax`引用`[3][0]`元素

此外，点运算符可用于"混合"向量的组件。例如

- `v.zyx`等同于`set(v.z, v.y, v.x)`
- `v4.bgab`等同于`set(v4.b, v4.g, v4.a, v4.b)`

注意
您不能赋值给混合向量，只能从中读取。因此不能执行`v.zyx = b`，而必须执行`v = b.zyx`。

### 比较运算

comparisons
比较运算符(==, !=, <, <=, >, >=)在运算符左侧与右侧类型相同时定义，仅适用于字符串、浮点和整数类型。运算结果为整数类型。

字符串匹配运算符(~=)仅在运算符两侧都是字符串时定义，等同于调用[match](functions/match.html "如果主题匹配指定的模式，此函数返回1，否则返回0。")函数。

逻辑(&&, ||, !)和位运算(& |, ^, ~)运算符仅对整数定义。

### 优先级表

precedence
表中位置越高的运算符优先级越高。

| 顺序 | 运算符 | 结合性 | 描述 |
| --- | --- | --- | --- |
| 15 | `()` | 从左到右 | 函数调用、表达式分组、结构成员。 |
| 13 | `!` | 从左到右 | 逻辑非 |
| 13 | `~` | 从左到右 | 按位取反 |
| 13 | `+` | 从左到右 | 一元加(例如`+5`) |
| 13 | `-` | 从左到右 | 一元减(例如`-5`) |
| 13 | `++` | 从左到右 | 递增(例如`x++`) |
| 13 | `--` | 从左到右 | 递减(例如`x--`) |
| 13 | `(type)` | 从左到右 | 类型转换(例如`(int)x`)。 |
| 12 | `*` | 从左到右 | 乘法 |
| 12 | `/` | 从左到右 | 除法 |
| 12 | `%` | 从左到右 | 取模 |
| 11 | `+` | 从左到右 | 加法 |
| 11 | `-` | 从左到右 | 减法 |
| 10 | `<` | 从左到右 | 小于 |
| 10 | `>` | 从左到右 | 大于 |
| 10 | `<=` | 从左到右 | 小于等于 |
| 10 | `>=` | 从左到右 | 大于等于 |
| 9 | `==` | 从左到右 | 等于 |
| 9 | `!=` | 从左到右 | 不等于 |
| 9 | `~=` | 从左到右 | 字符串匹配 |
| 8 | `&` | 从左到右 | 按位与 |
| 7 | `^` | 从左到右 | 按位异或 |
| 6 | `|` | 从左到右 | 按位或 |
| 5 | `&&` | 从左到右 | 逻辑与 |
| 4 | `||` | 从左到右 | 逻辑或 |
| 3 | `?:` | 从左到右 | 三元条件(例如`x ? "true" : "false"`) |
| 2 | `=` `+=` `-=` `*=` `/=` `%=` `&=` ```vex |=``^= ``` | 从右到左 | 变量赋值 |
| 1 | `,` | 从左到右 | 参数分隔符 |

### 运算符类型交互

operator-type-interactions

- 当您对`float`和`int`应用运算时，结果是运算符左侧的类型。即`float * int = float`，而`int * float = int`。
- 如果将向量与标量值(`int`或`float`)相加、相乘、相除或相减，VEX返回相同大小的向量，运算按分量执行。例如：

```
{1.0, 2.0, 3.0} * 2.0 == {2.0, 4.0, 6.0}
```

- 如果对不同大小的向量进行加、乘、除或减运算，VEX返回较大大小的向量。运算按分量执行。
  **重要**：较小向量上的"缺失"分量填充为`{0.0, 0.0, 0.0, 1.0}`

```
{1.0, 2.0, 3.0} * {2.0, 3.0, 4.0, 5.0} == {2.0, 6.0, 12.0, 5.0}
```

如果您不期望这一点，可能会得到令人惊讶的结果，例如：

```
// vector2的第三个元素被视为0，
// 但第四个元素被视为1.0
{1.0, 2.0} + {1.0, 2.0, 3.0, 4.0} == {2.0, 4.0, 3.0, 5.0}
```

如果您要组合不同大小的向量，可能需要手动分解组件并进行运算，以获得预期结果而不出现意外。

数据类型

## data-types

警告
默认情况下，VEX使用32位整数。如果您使用[AttribCast SOP](../nodes/sop/attribcast.html "更改Houdini用于存储属性的大小/精度。")将几何属性转换为64位，VEX将在VEX代码中操作该属性时静默丢弃多余的位。

VEX引擎以32位或64位模式运行。在32位模式下，所有浮点数、向量和整数都是32位。在64位模式下，它们是64位。没有`double`或`long`类型来允许混合精度数学。

您可以使用下划线分隔长数字。

| 类型 | 定义 | 示例 |
| --- | --- | --- |
| `int` | 整数值 | `21, -3, 0x31, 0b1001, 0212, 1_000_000` |
| `float` | 浮点标量值 | `21.3, -3.2, 1.0, 0.000_000_1` |
| `vector2` | 两个浮点值。您可能使用它来表示纹理坐标(尽管通常Houdini使用向量)或复数 | `{0,0}, {0.3,0.5}` |
| `vector` | 三个浮点值。您可以使用它来表示位置、方向、法线或颜色(RGB或HSV) | `{0,0,0}, {0.3,0.5,-0.5}` |
| `vector4` | 四个浮点值。您可以使用它来表示齐次坐标中的位置，或带alpha的颜色(RGBA)。它通常用于表示四元数。VEX中的四元数按`x/y/z/w`顺序排列，而不是`w/x/y/z`。这适用于四元数和具有齐次坐标的位置。 | `{0,0,0,1}, {0.3,0.5,-0.5,0.2}` |
| `array` | 值列表。有关更多信息，请参见