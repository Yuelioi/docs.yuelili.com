---
title: usd_setattribelement
order: 124
---
| 版本 | 18.0 |
| --- | --- |

`int  usd_setattribelement(int stagehandle, string primpath, string name, int index, <type>value)`

此函数用于设置数组属性中的元素值。

`stagehandle`

要写入的舞台句柄。目前唯一有效的值是`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台。）

`primpath`

图元路径。

`name`

属性名称。

`index`

数组属性中元素的索引。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 设置数组属性中索引为2的元素值
usd_setattribelement(0, "/geo/sphere", "float_array_attrib", 2, 0.25);

```
