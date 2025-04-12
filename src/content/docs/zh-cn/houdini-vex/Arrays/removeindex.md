---
title: removeindex
order: 10
---
`<type> removeindex(<type>&array[], int index)`

从`array`中移除指定`index`处的元素并返回其值。这与`pop(array, index)`功能相同，但名称更清晰易懂。

负索引表示从数组末尾开始计数，因此`removeindex(array, -2)`会移除倒数第二个元素。

`int  removeindex(dict &dictionary, string index)`

从`dictionary`中移除指定`index`的字典条目。

如果该条目不存在则返回`0`，如果成功移除则返回`1`。
