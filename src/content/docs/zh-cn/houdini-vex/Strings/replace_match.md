---
title: replace_match
order: 32
---
`string  replace_match(string str, string pattern_from, string pattern_to)`

如果字符串匹配 `pattern_from`，则将其替换为 `pattern_to`，并替换匹配的通配符。

该模式可以使用通配符，例如 `str*` 或 `str?`，类似于 [match](/zh-cn/houdini-vex/strings/match "此函数在主题匹配指定模式时返回1，
否则返回0。") 函数。
通配符也可以通过索引（例如 `(2)`）引用，以允许重新排序。

## 示例

```vex
// 返回 "carol is my name";
string s = replace_match("bob is my name", "bob*", "carol*");

// 返回 "a-b";
s = replace_match("a_to_b", "*_to_*", "*-*");

// 交换匹配的通配符，返回 "b_to_a";
s = replace_match("a_to_b", "*_to_*", "*(1)_to_*(0)");

```
