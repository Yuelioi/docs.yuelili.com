---
title: opend
order: 8
---

| 上下文 | [着色](../contexts/shading.html) |
| --- | --- |

`void  opend(int handle)`

通知mantra一个由[opstart](/zh-cn/houdini-vex/utility/opstart "开始一个长时间操作")启动的长时间操作已完成。传入[opstart](/zh-cn/houdini-vex/utility/opstart "开始一个长时间操作")返回的值。

```vex
int op_handle = opstart("正在执行长时间操作");
perform_long_operation();
if (op_handle >= 0)
 opend(op_handle);

```
