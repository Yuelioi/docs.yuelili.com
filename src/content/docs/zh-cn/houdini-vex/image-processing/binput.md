---
title: binput
order: 3
---

| 上下文 | [cop2](../contexts/cop2.html) |
| --- | --- |

`vector  binput(int u, int v, ...)`

`vector4  binput(int u, int v, ...)`

`vector  binput(float u, float v, ...)`

`vector4  binput(float u, float v, ...)`

在当前帧从输入0的当前处理平面采样。

`float  binput(int comp, int u, int v, ...)`

`float  binput(int comp, float u, float v, ...)`

在当前帧从输入0当前处理平面的指定分量索引中采样单个分量。

`vector  binput(int opinput, int plane, int u, int v, ...)`

`vector4  binput(int opinput, int plane, int u, int v, ...)`

`vector  binput(int opinput, int plane, float u, float v, ...)`

`vector4  binput(int opinput, int plane, float u, float v, ...)`

在当前帧从指定输入/平面采样。

`float  binput(int opinput, int plane, int comp, int u, int v, ...)`

`float  binput(int opinput, int plane, int comp, float u, float v, ...)`

在当前帧从指定输入/平面/分量采样单个分量。

`float  binput(int opinput, int plane, int array_index, int comp, int u, int v, int frame, ...)`

`float  binput(int opinput, int plane, int array_index, int comp, float u, float v, int frame, ...)`

在指定帧从指定输入/平面/分量采样单个分量。

`vector  binput(int opinput, int plane, int array_index, int u, int v, int frame, ...)`

`vector4  binput(int opinput, int plane, int array_index, int u, int v, int frame, ...)`

`vector  binput(int opinput, int plane, int array_index, float u, float v, int frame, ...)`

`vector4  binput(int opinput, int plane, int array_index, float u, float v, int frame, ...)`

在指定帧从指定输入/平面/分量采样。

`opinput`

要读取像素的输入编号。未指定此参数的版本始终使用第一个输入(0)。

`plane`

输入中平面的索引。
未指定此参数的版本始终使用当前处理平面。

`array_index`

当平面具有数组值时使用。通常只需传入`0`。

`comp`

平面内分量的索引。例如，在RGB平面中0表示红色，1表示绿色，2表示蓝色。
返回向量的版本不接受此参数，而是同时返回所有分量。

`u`, `v`

如果传入浮点UV值，将被解释为单位值(0-1)。例如`0.5, 0.5`表示图像中心。
如果传入整数UV值，则表示像素坐标，范围从`0,0`到`XRES-1, YRES-1`。

`frame`

要采样的帧号。
未指定此参数的版本始终使用当前帧。

返回值

返回float、vector或vector4值。如果通道不存在则返回0。
尽可能使用向量版本，而不是单独读取各个分量。

更多信息请参见[COP像素采样函数](../cop2_sample_suite.html)。
