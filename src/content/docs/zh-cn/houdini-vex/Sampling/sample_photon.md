---
title: sample_photon
order: 27
---
| 上下文 | [displace](../contexts/displace.html)  [fog](../contexts/fog.html)  [light](../contexts/light.html)  [shadow](../contexts/shadow.html)  [surface](../contexts/surface.html) |
| --- | --- |

`int  sample_photon(light lp, vector &pos, vector &dir, float &scale, float time)`

从给定光源发射光子，并返回场景中首次相交的信息。参数`pos`、`dir`和`scale`将被填充关于光子在场景中击中位置的相关信息。

返回的整数表示反弹类型掩码（这由光源上的照明标签类型决定）。

如果光子未与任何几何体相交，则函数返回0。
