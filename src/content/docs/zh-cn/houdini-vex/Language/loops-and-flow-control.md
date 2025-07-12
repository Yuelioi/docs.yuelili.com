---
title: loops and flow control
order: 3
---

| 本页内容 | * [代码块](#) * [do循环](#do-loop) * [for循环](#for-loop) * [foreach循环](#foreach-loop) * [while循环](#while-loop) * [其他循环语句](#other-looping-statements) * [条件判断](#if) * [返回](#return) * [中断](#break) * [继续](#continue) |
| --- | --- |

另请参阅 [VEX函数](functions/index.html)。VEX中的大部分工作通过函数调用完成，其语句多为循环结构，其中许多与C等语言的循环结构类似。虽然`print`在某些语言（如Python）中是语句，但在VEX中需使用[printf函数](functions/printf.html "将值打印到启动VEX程序的控制台。")进行输出。

## [¶](#)

与C等语言类似，可用花括号包裹多个语句形成代码块。

例如，`if`语句可执行单条语句：

```vex
if ( needs_zapping() ) zap()
```

...或执行花括号内的代码块：

```vex
if ( needs_zapping() ) {
 zap()
 disintegrate()
 remove_dust()
}
```

## do循环

`do statement [while (condition)]`

先执行语句，若条件为真则循环。与`while`不同，`do`保证至少执行一次语句。

## for循环

`for (init; condition; change) statement`

标准C风格`for`循环。先执行初始化语句，当条件为真时重复执行语句，每轮迭代结束时执行变更语句。

## foreach循环

`foreach (value; array) statement`
`foreach (index, value; array) statement`

遍历数组每个元素执行语句（可选地将索引设为当前数组位置）。详见[foreach](functions/foreach.html "遍历数组元素，可选枚举索引。")。

## while循环

`while (condition) statement`

当条件为真时重复执行语句。

## 其他循环语句

[forpoints](functions/forpoints.html)、[illuminance](functions/illuminance.html "遍历场景中所有光源，调用各光源的着色器设置Cl和L全局变量。")和[gather](functions/gather.html "向场景投射光线并返回射线命中表面的着色器信息。")语句可用于遍历VEX处理的数据。

## 条件判断

`if (condition) statement_if_true [else statement_if_false]`

若条件为真则执行statement_if_true。

若包含`else`子句，则条件为假时执行statement_if_false。

## 返回

`return`

带可选返回值退出函数。

```vex
int max(int a, b) {
 if (a > b) {
 return a;
 }
 return b;
}
```

## 中断

`break`

立即退出循环。常与`if`配合在满足条件时提前终止循环。

```vex
for (int i = 0; i < sizes; i++)
{
 mixamount += getAmount(roughness);
 if (mixamount > 1) {
 break;
 }
}
```

## 继续

`continue`

立即跳转至下一次循环迭代。

```vex
foreach (x; myarray) {
 if (x < 10) continue;
 ...
}
```
