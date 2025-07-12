---
title: 异常处理
---
# 异常处理

在你的插件内部处理所有由插件代码生成的异常。将那些并非源自插件代码的异常传递给 After Effects。

After Effects 的 API 是为用 C 编写的插件设计的，并不期望出现异常。如果从插件内部抛出异常，After Effects 会立即崩溃。

效果示例在 `main()` 函数中的 `switch` 语句周围使用了防火墙，而 AEGP 则将其函数钩子包裹在 `try/catch` 块中。
