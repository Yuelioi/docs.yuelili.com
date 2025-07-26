---
title: simport
order: 73
---
| 上下文 | [雾效](../contexts/fog.html)  [光照](../contexts/light.html)  [阴影](../contexts/shadow.html) |
| --- | --- |

`int  simport(string name, <type>&value)`

从表面着色器导入变量。

Mantra执行表面着色器的固定顺序为：

1. 置换着色器
2. 表面着色器（可能在`illuminance`循环中调用光照着色器）
3. 雾效着色器（可能在`illuminance`循环中调用光照着色器）

当置换着色器执行完成后，可以使用[dimport](/zh-cn/houdini-vex/displace/dimport "从表面置换着色器读取导出的变量")获取其导出的变量。当表面着色器执行完成后，则可以使用`simport`获取其导出的变量。

如果第一个参数指定的着色器变量已定义且已导出，该函数将返回1并将值存入第二个参数。否则返回0。
