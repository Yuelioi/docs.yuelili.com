---
title: usd_blockprimvarindices
order: 25
---

| 版本 | 18.0 |
| --- | --- |

`int  usd_blockprimvarindices(int stagehandle, string primpath, string name)`

此函数用于阻塞primvar索引。即移除所有时间样本，并将*block*设为默认值。该操作会将索引型primvar转换为非索引型primvar。

注意：你可能还需要使用[usd_blockprimvar](/zh-cn/houdini-vex/usd/usd_blockprimvar "阻塞primvar。")来阻塞primvar本身。

`stagehandle`

要写入的stage句柄。当前唯一有效值是`0`，表示节点中的当前stage。（此参数未来可能用于支持写入其他stage）

`primpath`

图元路径。

`name`

Primvar名称（不带命名空间）。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 阻塞primvar索引
usd_blockprimvarindices(0, "/geo/sphere", "primvar_name");

```
