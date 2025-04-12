---
title: random
order: 30
---

`float  random(float|intposition)`

`vector  random(float|intposition)`

`vector2  random(int position)`

`vector4  random(float|intposition)`

基于一维位置生成1D、2D、3D或4D噪声。

`float  random(float|intxpos, float|intypos)`

`vector  random(float|intxpos, float|intypos)`

`vector4  random(float|intxpos, float|intypos)`

使用两个数字指定噪声场中的二维位置。

`float  random(vector position)`

`vector  random(vector position)`

`vector4  random(vector position)`

使用向量指定噪声场中的三维位置。

`float  random(vector4 position)`

`vector  random(vector4 position)`

`vector4  random(vector4 position)`

使用vector4指定噪声场中的四维位置。

基于N维空间(1到4维)中的整数位置生成随机数。与噪声函数不同，随机函数不会在整数格点之间平滑插值随机值。`random()`函数是实现类似`noise(floor(position))`功能的高效方式。

虽然`random()`接受浮点数，但只有整数变化才会改变随机效果。若需要随机结果随任意微小浮点变化而变化，请使用`rand()`。

该函数的结果在半开区间`[0, 1)`内。
