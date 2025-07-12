---
title: shader calls
order: 4
---

| 本页内容 | * [import关键字](#the-import-keyword) * [调用着色器](#invoking-a-shader) * [被调用着色器的上下文](#context-of-the-called-shader) * [示例](#examples) |
| --- | --- |

从Houdini 12.5开始，VEX着色器函数可以调用其他着色器函数。这项技术能够优化大型着色器的VEX编译器和优化器性能，因为在一个着色器内或跨着色器多次调用的代码只需编译一次，即可重复使用而无需额外运行时开销。

## the-import-keyword

`import`关键字用于将其他着色器函数按名称引入当前着色器。被导入的着色器必须位于Houdini路径中才能编译成功——如果找不到，着色器编译将失败。因此构建调用链时，需要按依赖顺序编译：先编译被调用的着色器，再编译调用者。虽然支持循环调用，但需要在首次编译调用者后，再向被调用者添加import关键字。

例如导入plastic着色器：

```vex
import plastic;
```

着色器支持递归调用自身——这种情况不需要import关键字。

## invoking-a-shader

通过名称调用着色器时需传递关键字参数（字符串/值对），用于指定要传递或接收的参数。可以仅绑定部分参数，此时未绑定的参数将使用默认值。此外只需绑定被调用着色器的部分导出参数，VEX优化器会剔除计算无关导出的冗余代码以提升性能。

例如以下代码调用plastic着色器，请求`Cf`导出并传入`diff`输入：

```vex
import plastic;

surface caller(vector diff = {1,0.5,0})
{
 plastic("diff", diff, "Cf", Cf);
}
```

vcc会检查所有可变参数，确保它们与被调用着色器的参数列表匹配——若类型或访问模式不匹配将报错。

## context-of-the-called-shader

当前着色器只能调用上下文类型匹配的其他着色器。对于含全局变量的上下文，未显式传递的全局变量会从调用者复制到被调用者。对于携带不透明状态信息的上下文（如包含命中曲面信息的surface上下文），这些状态也会保留，使得`getraylevel()`等方法在调用双方返回相同结果。

## examples

被调用着色器：

```vex
cvex callee(export int mval = 0;
 int rval = 0;
 export int wval = 0;
 float castval = 0)
{
 mval *= 2;
 wval = rval;
}
```

调用者着色器：

```vex
import callee;

cvex caller()
{
 int mval = 1;
 int rval = 2;
 int wval = 1;
 callee("mval", mval, "rval", rval, "wval", wval, "castval",
 1);
 printf("%d %d %d\n", mval, rval, wval);
}
```

递归着色器示例：

```vex
cvex fib(int i = 0; export int rval = 0)
{
 if (i >= 2)
 {
 int v1, v2;
 fib("i", i-1, "rval", v1);
 fib("i", i-2, "rval", v2);
 rval = v1 + v2;
 }
 else
 rval = i;
 printf("%d: %d\n", i, rval);
}
```
