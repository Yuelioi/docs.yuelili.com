---
title: sort
order: 16
---
`int [] sort(int values[])`

`float [] sort(float values[])`

`string [] sort(string values[])`

返回按升序排列的给定数组版本。

- [argsort](/zh-cn/houdini-vex/arrays/argsort "返回排序后数组的索引") 和 [sort](/zh-cn/houdini-vex/arrays/sort "返回按升序排列的数组") 使用稳定排序算法。
- 使用 [reverse](/zh-cn/houdini-vex/arrays/reverse "返回逆序排列的数组或字符串") 可以反转排序顺序。

## 示例

对数字数组进行降序排序

```vex
int numbers[] = {5, 2, 90, 3, 1};
int descending_nums[] = reverse(sort(numbers)); // {90, 5, 3, 2, 1}

```
