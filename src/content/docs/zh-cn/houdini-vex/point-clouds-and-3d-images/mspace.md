---
title: mspace
order: 3
---
| 上下文 | [image3d](../contexts/image3d.html) |
| --- | --- |

`vector  mspace(vector P)`

将指定位置转换到元球的"局部"空间。此函数仅在[forpoints](/zh-cn/houdini-vex/utility/forpoints)循环结构内有效。

该函数的典型应用场景是基于"静止"位置计算噪波...例如：

```vex
forpoints(P) {
vector npos = mspace(P) - mattrib("rest", P);
nval += noise(npos);
}

```
