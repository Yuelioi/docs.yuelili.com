---
title: atoi
order: 2
---
`int  atoi(string str)`

`int  atoi(string str, int base)`

将字符串参数转换为整数值。如果提供了2到36之间的基数（包含2和36），则字符串将按照该基数进行转换。

- 此函数会忽略数字周围的空白字符。
- 如果字符串不包含数字，或指定的基数无效，则返回 `0`。
- 字符串可以包含指数表示法（例如 `"1.25e+5"`）。
