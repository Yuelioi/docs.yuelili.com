---
title: assert_enabled
order: 1
---
`int  assert_enabled()`

如果环境变量 `HOUDINI_VEX_ASSERT` 已设置则返回1，未设置则返回0。

`assert()` 宏使用此函数仅在 `HOUDINI_VEX_ASSERT` 设置时执行断言：

```vex
#define assert(EXPR) \
 if (assert_enabled()) { \
 if (!(EXPR)) print_once(sprintf('VEX Assertion Failed %s:%d - (%s)\n', \
 __FILE__, __LINE__, #EXPR)); \
 }

```

您可以使用此函数编写自己的断言宏（例如，可以编写一个使用工作室日志记录基础设施的宏）。

有关更多信息，请参阅[在VEX中使用断言](../assertions.html "您可以使用assert()宏在调试VEX代码时打印信息")。
