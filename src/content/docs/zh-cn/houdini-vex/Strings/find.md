---
title: find
order: 13
---

`int  find(string haystack, string needle)`

`int  find(string haystack, string needle, int start)`

`int  find(string haystack, string needle, int start, int end)`

返回 `needle` 字符串在 `haystack` 字符串中首次出现的位置。可以通过设置 `start` 和 `end` 参数来限定搜索范围，只返回从 `start` 位置开始到 `end` 位置结束之间的第一个匹配子串。

可以通过在循环中每次将 `start` 设置为上一次匹配结束的位置来查找所有出现的位置。

如果未找到子串，则返回负数。

`int [] find(string haystack, string needle)`

`int [] find(string haystack, string needle, int start)`

`int [] find(string haystack, string needle, int start, int end)`

返回 `needle` 字符串在 `haystack` 字符串中所有出现位置的列表。可以通过设置 `start` 和 `end` 参数来限定搜索范围，只返回从 `start` 位置开始到 `end` 位置结束之间的所有匹配子串。

如果未找到子串，则返回空数组。

`int  find(<type>array[], <type>target)`

`int  find(<type>array[], <type>target, int start)`

`int  find(<type>array[], <type>target, int start, int end)`

返回 `target` 值在 `array` 数组中首次出现的位置。可以通过设置 `start` 和 `end` 参数来限定搜索范围，只返回从 `start` 位置开始到 `end` 位置结束之间的第一个匹配元素。

可以通过在循环中每次将 `start` 设置为上一次匹配位置的下一个位置来查找所有出现的位置。

如果未找到目标值，则返回负数。

`int [] find(<type>array[], <type>target)`

`int [] find(<type>array[], <type>target, int start)`

`int [] find(<type>array[], <type>target, int start, int end)`

返回 `target` 值在 `array` 数组中所有出现位置的列表。可以通过设置 `start` 和 `end` 参数来限定搜索范围，只返回从 `start` 位置开始到 `end` 位置结束之间的所有匹配元素。

注意事项：
- 当指定 `end` 参数时，表示匹配的子串必须在该位置之前开始
- 标量版本在无匹配时会返回 `-len(haystack)-1`，这个值设计用于在尝试将其作为字符串/数组索引时引发错误
- 搜索空字符串总是会失败（这一点与 Python 不同）
- 不能为 `start` 和 `end` 参数使用负索引
