---
title: decodeutf8
order: 7
---
| 始于版本 | 19.0 |
| --- | --- |

`int [] decodeutf8(string str)`

将UTF8字符串转换为一组码点(code points)。VEX默认将其字符串视为UTF8，但这意味着对字符串进行索引时可能会出现异常行为。生成码点可以确保每个逻辑字符都有一个对应的索引。
