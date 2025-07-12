---
title: slice
order: 15
---
`string  slice(string s, int start, int end)`

`string  slice(string s, int start, int end, int step)`

从较长的字符串中提取子字符串。

`<type>[] slice(<type>s[], int start, int end)`

`<type>[] slice(<type>s[], int start, int end, int step)`

从较大的数组中提取子数组。

`string  slice(string s, int hasstart, int start, int hasend, int end, int hasstep, int step)`

`<type>[] slice(<type>array[], int hasstart, int start, int hasend, int end, int hasstep, int step)`

支持切片语法的通用签名。如果`hasstart`为`0`，则忽略`start`并使用`0`；如果`hasend`为`0`则忽略`end`并使用数组长度；如果`hasstep`为`0`则忽略`step`并使用`1`。

- 此函数等效于使用`value[start:end:step]`切片语法。
- 如果`start`或`end`为负数，则从字符串/数组末尾开始计数。
- 计算得到的范围会被限制在原始字符串/数组的边界内。
- 如果步长(step)为零，函数返回空字符串/数组。
- 如果步长为负数，则按相反顺序返回元素，此时`end`应小于`start`。

## 示例

```vex
int[] nums = {10, 20, 30, 40, 50, 60};
slice(nums, 1, 3) == {20, 30}; // nums[1:3]
slice(nums, 1, -1) == {20, 30, 30, 40, 50}; // nums[1:-1]
slice(nums, 0, len(nums), 2) == {20, 40, 60}; // nums[0:len(nums):2]
slice(nums, 0, 0, 0, 0, 1, 2) == {20, 40, 60}; // nums[::2]
```
