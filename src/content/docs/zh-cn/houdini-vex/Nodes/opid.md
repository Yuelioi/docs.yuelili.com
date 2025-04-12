---
title: opid
order: 26
---
| 始于版本 | 17.5 |
| --- | --- |

`int  opid(string op_path)`

`int  opid(int op_id)`

解析操作符路径并返回其对应的操作符ID。

失败时返回-1。当输入参数为操作符ID时，若该ID有效则返回1，否则返回0。此方法可用于检测操作符ID是否有效。
