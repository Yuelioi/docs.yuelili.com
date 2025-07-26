---
title: reorder
order: 12
---
`string  reorder(string value, int indices[])`

根据 `indices`数组中的位置，返回UTF-8字符串 `value`中*字符*(非字节)的重排序版本。结果为UTF-8编码字符串。

`<type>[] reorder(<type>values[], int indices[])`

根据 `indices`数组中的位置，返回 `values`数组元素的重排序版本。

该函数通常配合[argsort](/zh-cn/houdini-vex/arrays/argsort "返回数组排序后的索引")生成的索引列表使用。具体示例请参阅[argsort](/zh-cn/houdini-vex/arrays/argsort "返回数组排序后的索引")页面。

- 索引列表中的负数表示从数组末尾开始计数
- 结果数组/字符串的长度与 `indices`的长度相同
- 越界的索引值会插入零值，但这种情况应视为错误
