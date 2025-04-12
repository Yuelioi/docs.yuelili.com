---
title: volumepostoindex
order: 13
---
`vector volumepostoindex(<geometry>geometry, int primnum, vector position)`

`vector volumepostoindex(<geometry>geometry, string volumename, vector position)`

返回值

返回给定位置处体素（voxel）的索引值。

如果`primnum`或`inputnum`超出范围、几何体无效，或给定图元不是矢量体积图元时，返回0。
