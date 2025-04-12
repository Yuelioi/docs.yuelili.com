---
title: replace
order: 31
---
`string  replace(string str, string old, string new)`

`string  replace(string str, string old, string new, int count)`

返回字符串的副本，其中所有出现的字符串 `old` 都被替换为字符串 `new`。

`count`

如果指定，则仅替换前 `count` 次出现的字符串。

## 示例

```vex
string str = "abcdef abcdef abcdef";

// 返回 "abcghi abcghi abcghi"
string new_str = replace(str, "def", "ghi");

// 替换最多2次出现的字符串 "def"。
// 返回 "abcghi abcghi abcdef"
new_str = replace(str, "def", "ghi", 2);

```
