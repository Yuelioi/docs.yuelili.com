---
title: volumeindexactive
order: 6
---
| 始于版本 | 17.5 |
| --- | --- |

`int  volumeindexactive(<geometry>geometry, int primnum, vector voxel)`

`int  volumeindexactive(<geometry>geometry, string volumename, vector voxel)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

返回值

判断体积图元中特定体素是否处于活动状态。

虽然`volumesample`和`volumeindex`会始终返回空间中任意位置的值，但实际的体素数组仅针对空间子集定义。对于常规体积，这是一个方形网格；对于VDB，活动区域的形状可以是任意的。

如果`primnum`超出范围、几何体无效或给定图元不是体积图元，则返回0。
