---
title: strip
order: 38
---
`string  strip(string value)`

`string  strip(string value, string whitespace)`

返回去除首尾空白字符的字符串。如果指定了whitespace参数，则只去除该参数字符串中包含的字符。

该函数等效于对字符串同时执行[rstrip](/zh-cn/houdini-vex/strings/rstrip "去除字符串末尾的空白字符")和[lstrip](/zh-cn/houdini-vex/strings/lstrip "去除字符串开头的空白字符")操作。
