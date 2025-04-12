---
title: re_replace
order: 27
---
`string  re_replace(string regex, string replacement, string input, int maxreplace=0)`

返回一个新字符串，其中所有非重叠匹配`regex`的部分都被替换为`replacement`。`replacement`字符串可以使用`$1`语法引用正则表达式捕获的组。

如果指定了非零的`maxreplace`参数，则表示最大替换次数。
