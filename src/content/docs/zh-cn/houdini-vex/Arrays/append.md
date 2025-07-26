---
title: append
order: 1
---
`void  append(string &array, string value)`

将第二个字符串追加到第一个字符串末尾。

`void  append(<type>&array[], <type>value)`

将给定值追加到数组末尾。会使`array`的长度增加1。该操作与[push(array, value)](/zh-cn/houdini-vex/arrays/push "向数组添加元素")功能相同。

`void  append(<type>&array[], <type>values[])`

将`values`数组中的值连接到`array`数组末尾。会使`array`的长度增加`len(values)`。该操作与[push(array, values)](/zh-cn/houdini-vex/arrays/push "向数组添加元素")功能相同。

提示

您可以使用`array[n] = x`语法来设置数组中的单个元素。
