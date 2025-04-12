---
title: opstart
order: 9
---

| 上下文 | [着色](../contexts/shading.html) |
| --- | --- |

`int  opstart(string message)`

向mantra通知一个耗时操作的开始（operation start）。字符串参数会传递给mantra，并可能在IPR查看器中显示。

当成功启动时，该函数将返回一个非负整数。

返回的整数应在耗时操作完成时传递给`opend()`函数。

```vex
int started = opstart("正在执行耗时操作");
perform_long_operation();
if (started >= 0)
opend(started);

```
