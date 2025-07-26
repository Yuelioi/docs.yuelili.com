---
title: pcexport
order: 8
---
`int  pcexport(int handle, string channel_name, <type>value, ...)`

`int  pcexport(int handle, string channel_name, vector value, float radius, ...)`

如果导出成功返回1，失败则返回0。
当channel_name不是读写模式时导出会失败，或者（在带半径参数的pcexport版本中）当待导出点与点云中已有点的距离小于指定半径时也会失败。

该函数向通过[pcopen](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcopen "返回点云文件的句柄。")或[pcgenerate](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcopen "生成点云。")打开的点通道写入数据。第二个版本接受半径参数，并根据待导出点与点云中已有点的距离来决定是否接受该点。该点必须与其他所有点保持至少指定半径的距离。如需将新点数据写入点云文件，请使用[pcwrite](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcwrite "将数据写入点云文件。")。
存储类型

## storage-type

如果添加可选关键字`"storage"`，则下一个参数指定数据的存储类型。
存储类型为标准基于瓦片的格式数据类型：

| `int8, uint8` | 8位有符号/无符号整数 |
| --- | --- |
| `int16, uint16` | 16位有符号/无符号整数 |
| `int32, uint32` | 32位有符号/无符号整数 |
| `int64, uint64` | 64位有符号/无符号整数 |
| `real16` | 16位浮点数值 |
| `real32` | 32位浮点数值 |
| `real64` | 64位浮点数值 |
| `int`, `uint`, `real` | 默认精度的整数/浮点数值 |
