---
title: decodeattrib
order: 5
---

| 始于版本 | 18.0 |
| --- | --- |

`string  decodeattrib(string str)`

Houdini几何体属性和组名称仅允许包含字母、数字和下划线，且不能以数字开头。任意字符串可以通过`encodeattrib`函数生成符合这些限制的字符串。本函数接收一个经过编码的字符串，并返回原始字符串。未经编码的字符串将原样返回。
