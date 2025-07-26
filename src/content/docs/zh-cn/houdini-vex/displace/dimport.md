---
title: dimport
order: 1
---

| 上下文环境 | [雾效](../contexts/fog.html)  [光照](../contexts/light.html)  [阴影](../contexts/shadow.html)  [表面](../contexts/surface.html) |
| --- | --- |

`int  dimport(string name, <type>&out)`

从表面着色器的置换着色器中读取变量。

Mantra 按照固定顺序运行表面着色器：

1. 置换着色器
2. 表面着色器（可能在 `illuminance` 循环中调用光照着色器）
3. 雾效着色器（可能在 `illuminance` 循环中调用光照着色器）

当置换着色器运行完成后，可以使用 `dimport` 从中检索导出的变量。当表面着色器运行完成后，可以使用 [simport](/zh-cn/houdini-vex/shading-and-rendering/simport "导入在illuminance循环中由表面着色器发送的变量。") 从中检索导出的变量。

如果第一个参数指定的着色器变量已定义且已导出，该函数将返回 1 并将值存入第二个参数。否则返回 0。
