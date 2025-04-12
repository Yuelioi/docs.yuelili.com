---
title: decode
order: 4
---
| 始于 | 17.5 |
| --- | --- |

`string  decode(string str)`

Houdini VEX变量名只能包含字母、数字和下划线，且不能以数字开头。任意字符串可以通过`encode`函数生成符合这些限制的字符串。本函数接收一个经过编码的字符串，并返回原始字符串。未经编码的字符串将原样返回。
