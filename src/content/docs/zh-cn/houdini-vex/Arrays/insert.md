---
title: insert
order: 5
---
`void  insert(string &str, int index, string value)`

将 `value` 插入到字符串 `str` 的指定 `index` 位置。

如果 `index` 大于字符串长度，`value` 将被直接追加到原字符串 `str` 的末尾。

`void  insert(<type>&array[], int index, <type>value)`

`void  insert(<type>&array[], int index, <type>values[])`

将单个或多个元素插入到 `array` 中，从指定的 `index` 位置开始。

如果 `index` 大于数组当前长度，函数会用未初始化值（如 `0` 或空字符串）填充空缺位置。

- 若 `index` 为负数，则从字符串或数组的*末尾*开始计算插入位置。（如果负数的绝对值超过字符串/数组长度，则会被限制为 `0`）

例如，要将数字 `100` 插入到数组的倒数第二个位置：

```vex
insert(numbers; -1; 100)
```

`int  insert(dict &dstdict, string dstkey, dict srcdict, string srckey)`

将 `srcdict[srckey]` 的值复制到 `dstdict[dstkey]` 中，同时保留值的原始类型。如果源字典中不存在该键，则会从目标字典中移除对应键。返回值为 `1` 表示更新前目标字典中存在该键，`0` 表示不存在。

`void  insert(dict &dstdict, dict srcdict)`

将 `srcdict` 合并到 `dstdict` 中。匹配的键会被源字典中的值覆盖。
