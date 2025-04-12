---
title: isvarying
order: 7
---
`int  isvarying(<type>x)`

`int  isvarying(<type>x[])`

当给定变量是varying（变化）时返回1，当它是uniform（统一）时返回0。

当变量可能在VEX SIMD数组中每个处理器有不同值时，该变量就是varying的。
如果值是varying的，着色器执行通常会变慢 - 因此这个函数在调试着色器性能时很有用。

任何变量类型都可以传递给`isvarying()`函数。
