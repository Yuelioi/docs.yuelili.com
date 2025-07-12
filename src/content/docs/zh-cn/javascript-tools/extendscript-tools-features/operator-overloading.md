---
title: 运算符重载
---
# 运算符重载

ExtendScript 允许你通过在类中定义一个与运算符同名的方法来扩展或覆盖特定类的数学或布尔运算符的行为。例如，以下代码为类 `MyClass` 定义了加法（+）运算符。在这种情况下，加法运算符简单地将操作数与属性值相加：

```javascript
// 定义构造函数
function MyClass (initialValue) {
 this.value = initialValue;
}

// 定义加法运算符
MyClass.prototype ["+"] = function (operand) {
 return this.value + operand;
}
```

这允许你对该类的任何对象执行 "+" 操作：

```javascript
var obj = new MyClass (5);
Result: [object Object]
obj + 10;
Result: 15
```

你可以重载以下运算符：

| 类别 | 运算符 |
|---|---|
| 一元运算符 | `+, ~` |
| 二元运算符 | - `+, *, /, %, ^` |
| | - `<, <=, ==` |
| | - `<<, >>, >>>` |
| | - `&, \|, ===` |

- 运算符 `>` 和 `>=` 是通过执行 NOT 运算符 `<=` 和 NOT 运算符 `<` 来实现的。
- 不支持组合赋值运算符，例如 `*=`。

所有运算符重载的实现都必须返回操作的结果。要执行默认操作，请返回 `undefined`。

一元运算符函数作用于 `this` 对象，而二元运算符作用于 `this` 对象和第一个参数。+ 和 - 运算符同时具有一元和二元实现。如果第一个参数是 `undefined`，则运算符是一元的；如果提供了第一个参数，则运算符是二元的。

对于二元运算符，第二个参数表示操作数的顺序。对于非交换运算符，要么在函数中实现两种顺序的变体，要么返回 `undefined` 以表示不支持的操作组合。例如：

```javascript
this ["/"] = function (operand, rev) {
 if (rev) {
 // 不解析 operand / this
 return;
 } else {
 // 解析 this / operand
 return this.value / operand;
}
```
