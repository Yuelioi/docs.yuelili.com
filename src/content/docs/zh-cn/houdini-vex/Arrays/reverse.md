---
title: reverse
order: 14
---
`string  reverse(string str)`

返回一个UTF-8编码的字符串，其中包含`str`中反转后的*字符*（不是字节）。这与`str[::-1]`返回的结果不同。

`<type>[] reverse(<type>values[])`

返回给定数组的反转副本。

## 示例

```vex
reverse("hello") == "olleh";
reverse({1,2,3,4}) == {4, 3, 2, 1};

```
