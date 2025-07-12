---
title: usd_setprimvarelementsize
order: 134
---

| Since | 18.0 |
| --- | --- |

`int  usd_setprimvarelementsize(int stagehandle, string primpath, string name, int size)`

此函数用于设置指定primvar的元素大小。

primvar元素大小适用于数组类型的primvar，但它并不编码数组的长度。它指定应将多少个连续的数组元素作为一个原子元素，在几何图元（gprim）上进行插值。因此，在网格上，数组长度与元素大小的关系如下：`array_length = element_size * face_count`。

`stagehandle`

要写入的舞台句柄。当前唯一有效的值是`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台。）

`primpath`

图元的路径。

`name`

Primvar名称（不带命名空间）。

`size`

primvar的新元素大小。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

示例

## 示例

```vex
// 将primvar的元素大小设置为2。
usd_setprimvarelementsize(0, "/geo/mesh", "primvar_name", 2);

```
