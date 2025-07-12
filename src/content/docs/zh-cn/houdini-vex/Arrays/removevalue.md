---
title: removevalue
order: 11
---
`int  removevalue(<type>&array[], <type>value)`

从数组中移除找到的第一个`value`实例。如果成功移除则返回`1`，否则返回`0`。

## 示例

```vex
float nums[] = {0, 1, 2, 3, 1, 2, 3};
removevalue(nums, 2); // == 1
// nums == {0, 1, 3, 1, 2, 3}

```
