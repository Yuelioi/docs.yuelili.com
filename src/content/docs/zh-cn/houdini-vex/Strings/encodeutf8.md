---
title: encodeutf8
order: 11
---
| 版本 | 19.0 |
| --- | --- |

`string  encodeutf8(int codepoints[])`

将一系列码点转换为UTF8字符串。VEX默认将其字符串视为UTF8，但这也意味着对字符串进行索引可能会产生异常行为。生成码点可以确保每个逻辑字符都有一个对应的索引。
