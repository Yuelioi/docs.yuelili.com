---
title: push
order: 9
---
`void  push(<type>&array[], <type>value)`

将给定值追加到数组末尾。使 `array` 的大小增加1。这与 [append(array, value)](/zh-cn/houdini-vex/arrays/append "向数组或字符串添加项目") 功能相同。

`void  push(<type>&array[], <type>values[])`

将 `values` 数组中的值连接到 `array` 的末尾。使 `array` 的大小增加 `len(values)`。这与 [append(array, values)](/zh-cn/houdini-vex/arrays/append "向数组或字符串添加项目") 功能相同。

提示

您可以使用 `array[n] = x` 来设置数组中的单个项目。
