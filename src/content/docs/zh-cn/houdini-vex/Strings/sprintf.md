---
title: sprintf
order: 36
---
`string  sprintf(string format, ...)`

类似于 [printf](/zh-cn/houdini-vex/utility/printf "将值打印到启动VEX程序的控制台。") 格式化字符串，但将结果作为字符串返回而不是直接打印。

提示
您可以使用此函数用零填充数字（例如文件名中的帧号），类似于 [padzero](../../expressions/padzero.html "返回一个用零填充到指定长度的数字字符串。") 表达式函数，使用类似 `sprintf("texture%04d.exr", @Frame)` 的格式。
