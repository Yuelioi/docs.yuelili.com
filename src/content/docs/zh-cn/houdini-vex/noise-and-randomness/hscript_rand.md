---
title: hscript_rand
order: 14
---
`float|vector|vector4 hscript_rand(float seed)`

生成与同名Houdini表达式函数完全相同的结果。该函数会为每个浮点种子值生成不同的随机值。这与[random](/zh-cn/houdini-vex/noise-and-randomness/random "基于1-4D空间中的整数位置生成随机数。")函数不同，后者会将浮点参数转换为整数种子。`hscript_rand()`函数在不同的硬件或操作系统上可能产生不同的结果。
