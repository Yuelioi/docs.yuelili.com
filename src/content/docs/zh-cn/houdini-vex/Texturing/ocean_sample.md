---
title: ocean_sample
order: 7
---
`vector  ocean_sample(string geometry, int phase, int frequency, int amplitude, float hscale, float time, int mode, int downsample, vector pos)`

在给定时间和位置评估输入的海洋频谱，并返回由`mode`指定的值。输入通常是[海洋频谱](../../nodes/sop/oceanspectrum.html "生成包含海浪模拟信息的体积。") SOP的输出。

`geometry`

要引用的几何体文件名。在Houdini内部，可以是`op:full_path_to_sop`来引用一个SOP。

`phase`

表示波相位的体积的基元编号。

`frequency`

表示波频率的体积的基元编号。

`amplitude`

表示波幅度的体积的基元编号。

`hscale`

海浪中任何水平运动的缩放量。

`mode`

从海洋频谱中采样的值类型，其中0表示位移，1表示速度，2表示水平空间导数。

`downsample`

在评估前对输入频谱进行下采样的次数。每个下采样级别会使输入的分辨率减半。

`pos`

在对象空间中采样评估海洋的位置。

## 示例

通过存储在文件中的海洋频谱来偏移点的位置。

```vex
@P += ocean_sample("spectrum.bgeo", 0, 1, 2, 0.7, @Time, 0, 0, @P);

```
