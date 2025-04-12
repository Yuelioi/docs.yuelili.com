---
title: select
order: 16
---
`<type> select(int conditional, <type>a, <type>b)`

`<type>[] select(int conditional, <type>a[], <type>b[])`

如果条件为真则返回 `a`，为假则返回 `b`。

`select` 与 `if` 语句的区别在于：无论条件值如何，`select` 都会同时计算 a 和 b 的值。合理使用 `select` 可以避免比较操作，从而允许将更大的代码段转换为原生代码。
