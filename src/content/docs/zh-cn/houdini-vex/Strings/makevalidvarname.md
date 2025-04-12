---
title: makevalidvarname
order: 19
---
| 始于版本 | 19.5 |
| --- | --- |

`string  makevalidvarname(string name)`

`string  makevalidvarname(string name, string safe_chars)`

在VEX等语言中，变量名只能包含字母、数字和下划线，且不能以数字开头。
Houdini中的节点名称和属性名称也有类似要求。
该函数接收任意字符串，通过将无效字符替换为下划线，将其转换为符合这些限制规则的字符串。

`name`

需要转换为有效变量名的字符串。

`safe_chars`

指定允许保留的特殊字符（而不是替换为下划线）的字符串。

## 示例

```vex
// 返回 "foo_bar"
string s = makevalidvarname("foo:bar");

// 返回 "_123"
s = makevalidvarname("123");

// 返回 "foo:_bar"
s = makevalidvarname("foo:?bar", ":");

```
