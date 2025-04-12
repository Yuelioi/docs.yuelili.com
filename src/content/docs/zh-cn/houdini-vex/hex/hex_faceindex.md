---
title: hex_faceindex
order: 2
---
`int  hex_faceindex(int faceno, int vtxno)`

如果指定了无效数字则返回 `-1`。

返回 `0` 到 `7` 来表示通用六面体的八个顶点。

`faceno`

六面体上的面。取值范围为 `0` 到 `5`。

`vtxno`

要返回的四边形上的顶点编号，`0` 到 `3`。从最小编号开始，遵循Houdini的缠绕规则。
