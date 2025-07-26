---
title: pcfilter
order: 10
---
`<type> pcfilter(int handle, string channel_name, ...)`

使用简单的重建过滤器对[pcopen](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcopen "返回点云文件的句柄")排队的点进行过滤。

该函数大致等同于：

```vex
float pcfilter(int handle; string channel)
{
 float sum, w, d;
 float value, result = 0;
 while (pciterate(handle))
 {
 pcimport(handle, "point.distance", d);
 pcimport(handle, channel, value);
 w = 1 - smooth(0, radius, d);
 sum += w;
 result += w * value;
 }
 result /= sum;
 return result;
}

```

`pcfilter` 函数获取点云打开的点并生成一个过滤后的值。以下公式展示了如何对各个点进行加权计算。

```vex
w_i = 1-smooth(0, maxd*1.1, d_i);

```

`maxd` 是最远点的距离，`w_i` 是给定距离（`d_i`）处点的权重。使用该公式时，距离中心较近的点会被赋予更高的权重，而不是简单的平均值。
