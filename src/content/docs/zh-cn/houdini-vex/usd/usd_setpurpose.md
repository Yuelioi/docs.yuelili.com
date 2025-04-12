---
title: usd_setpurpose
order: 137
---
| 版本 | 17.5 |
| --- | --- |

`int  usd_setpurpose(int stagehandle, string primpath, string purpose)`

此函数用于设置图元（primitive）的用途（purpose），例如"default"（默认）、"render"（渲染）、"proxy"（代理）、"guide"（引导）等。

`stagehandle`

要写入的舞台（stage）的句柄。当前唯一有效的值是`0`，表示节点中的当前舞台。（此参数未来可能用于允许写入其他舞台。）

`primpath`

图元的路径。

`purpose`

要设置的图元用途。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 将球体图元设置为仅用于渲染时遍历
usd_setpurpose(0, "/geo/sphere", "render");

```
