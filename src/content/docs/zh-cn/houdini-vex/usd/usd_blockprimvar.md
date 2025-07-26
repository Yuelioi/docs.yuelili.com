---
title: usd_blockprimvar
order: 24
---
| 始于版本 | 18.0 |
| --- | --- |

`int  usd_blockprimvar(int stagehandle, string primpath, string name)`

此函数用于阻断primvar。即移除所有时间样本并将*block*设为默认值。

注意：如果primvar是索引化的，您可能还需要使用[usd_blockprimvarindices](/zh-cn/houdini-vex/usd/usd_blockprimvarindices "阻断primvar索引")来阻断索引。

`stagehandle`

要写入的舞台句柄。目前唯一有效值是`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台。）

`primpath`

图元路径。

`name`

Primvar名称（不带命名空间）。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 阻断primvar
usd_blockprimvar(0, "/geo/sphere", "primvar_name");

```
