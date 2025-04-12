---
title: usd_setprimvarelement
order: 133
---
| Since | 18.0 |
| --- | --- |

`int  usd_setprimvarelement(int stagehandle, string primpath, string name, int index, <type>value)`

此函数用于设置数组型primvar中的元素值。

`stagehandle`

要写入的舞台句柄。目前唯一有效的值是`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台）

`primpath`

图元的路径。

`name`

Primvar名称（不带命名空间）。

`index`

数组型primvar中元素的索引。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 设置数组型primvar中索引为2的元素值
usd_setprimvarelement(0, "/geo/sphere", "float_arr_primvar", 2, 0.25);

```
