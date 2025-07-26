---
title: setagentchannelvalues
order: 51
---
| 版本 | 18.0 |
| --- | --- |

`void  setagentchannelvalues(int geohandle, int prim, float values[])`

当只需修改单个通道时，使用 [setagentchannelvalue](/zh-cn/houdini-vex/crowds/setagentchannelvalue "覆盖代理体元通道的值") 可以显著提高效率。

`geohandle`

要写入的目标几何体句柄。可使用 `geoself()` 获取当前几何体的句柄。

`prim`

元编号。

`values`

代理骨骼中每个通道的新值数组。
