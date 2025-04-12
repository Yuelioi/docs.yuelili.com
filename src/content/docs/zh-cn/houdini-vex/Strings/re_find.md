---
title: re_find
order: 24
---
`int  re_find(string regex, string input)`

`int  re_find(string regex, string input, int start)`

`int  re_find(string regex, string input, int start, int end)`

如果 `regex` 在 `input` 中匹配成功则返回 `1`，否则返回 `0`。

`string  re_find(string regex, string input)`

`string  re_find(string regex, string input, int start)`

`string  re_find(string regex, string input, int start, int end)`

返回 `input` 中第一个匹配 `regex` 的子字符串。

`int  re_find(int &start_pos[], int &end_pos[], string regex, string input)`

`int  re_find(int &start_pos[], int &end_pos[], string regex, string input, int start)`

`int  re_find(int &start_pos[], int &end_pos[], string regex, string input, int start, int end)`

如果 `regex` 在输入中匹配成功则返回 `1`，否则返回 `0`。将每个匹配项的起始和结束位置填充到 `start_pos` 和 `end_pos` 数组变量中。

`string [] re_find(string regex, string input)`

`string [] re_find(string regex, string input, int start)`

`string [] re_find(string regex, string input, int start, int end)`

返回 `input` 中所有匹配 `regex` 的子字符串数组。
