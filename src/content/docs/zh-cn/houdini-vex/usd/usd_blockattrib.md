---
title: usd_blockattrib
order: 23
---
| 始于版本 | 18.0 |
| --- | --- |

`int  usd_blockattrib(int stagehandle, string primpath, string name)`

此函数用于阻塞属性。即移除所有时间样本并将*block*设置为默认值。

`stagehandle`

要写入的舞台句柄。当前唯一有效值是`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台。）

`primpath`

图元路径。

`name`

属性名称。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 阻塞属性
usd_blockattrib(0, "/geo/sphere", "attribute_name");

```
