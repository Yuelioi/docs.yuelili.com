---
title: getblurp
order: 10
---
| 上下文环境 | [displace](../contexts/displace.html)  [fog](../contexts/fog.html)  [light](../contexts/light.html)  [shadow](../contexts/shadow.html)  [surface](../contexts/surface.html) |
| --- | --- |

`vector  getblurP(float delta)`

返回当前着色点在运动模糊曝光时间内，指定时间增量delta处的位置(`P`)。当运动模糊被禁用时，`getblurP()`始终返回着色位置`P`。当运动模糊启用时，`getblurP(0)`和`getblurP(1)`将返回着色点运动路径两端的位置，而0到1之间的分数值将生成其他中间着色位置。例如，`getblurP(0.5)`返回当前曝光时间中点处的模糊位置。

在着色微多边形时，`P`始终存储点的初始位置(时间=0时)。对于光线追踪，`P`将存储经过运动变换后的最终位置 - 即VEX着色上下文中`Time`全局变量指定的时间点的位置。如果需要确定其他时间点的着色位置，必须使用`getblurP`函数。

当使用在时间=0时生成的点云时，应该使用`getblurP(0)`获取帧曝光开始时的位置，然后用这个位置查询点云。

例如：

```vex
vector p0 = getblurP(0);
int handle = pcopen("pcloud.pc", p0, ...);
```
