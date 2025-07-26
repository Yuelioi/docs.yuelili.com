---
title: print_once
order: 11
---
`void  print_once(string msg, ...)`

将传递给函数的字符串仅打印一次，即使在循环中也是如此。
这适用于在循环首次迭代前打印消息，而无需计算迭代次数。

`msg`

要打印的字符串。该字符串支持插值。
如需包含变量值，可使用[sprintf](/zh-cn/houdini-vex/strings/sprintf "类似printf格式化字符串，但以字符串形式返回结果而非直接打印")生成msg字符串。

"global",
`int`
`=0`

通常，多个`print_once()`调用点会相互独立工作。
即当两个不同的调用点传入相同字符串时，该字符串会被打印两次（每个调用点一次）。
启用"global"标志后，字符串检查将作用于所有`print_once()`函数实例。

## 示例

```vex
// 仅打印一次"Hello world"
for (int i = 0; i < 100; ++i)
 print_once("Hello world\n");

// 在所有着色器中仅打印一次缺失纹理警告
print_once( sprintf("缺失纹理贴图: %s\n", texture_map), "global", 1);

```
