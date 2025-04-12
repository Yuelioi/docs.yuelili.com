---
title: isvalidindex
order: 6
---
`int  isvalidindex(<type>&array[], int index)`

`int  isvalidindex(string str, int index)`

如果给定的字符串/数组的`index`在有效范围内则返回`1`，否则返回`0`。

这相当于`index < len(array) && index >= -len(array)`。

`int  isvalidindex(dict d, string key)`

如果键存在于字典中则返回`1`，否则返回`0`。
