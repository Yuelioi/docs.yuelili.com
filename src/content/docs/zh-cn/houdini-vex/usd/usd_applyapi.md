---
title: usd_applyapi
order: 15
---
| 始于版本 | 20.0 |
| --- | --- |

`int  usd_applyapi(int stagehandle, string primpath, string apischemaname)`

此函数用于向图元应用API模式。该函数仅适用于单次应用的API模式（如GeomModelAPI），不适用于多次应用的API模式（如CollectionAPI）。

`stagehandle`

要写入的舞台句柄。当前唯一有效值为`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台。）

`primpath`

图元路径。

`apischemaname`

API模式名称。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。
