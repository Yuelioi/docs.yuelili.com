---
title: pccone
order: 5
---
| 始于版本 | 18.0 |
| --- | --- |

`int [] pccone(<geometry>geometry, string PChannel, vector P, vector dir, float angle, float max_distance, int maxpoints)`

`int [] pccone(<geometry>geometry, string ptgroup, string PChannel, vector P, vector dir, float angle, float max_distance, int maxpoints)`

`<geometry>`

在节点上下文（如 wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何体文件（例如 `.bgeo`）的字符串。在 Houdini 内部运行时，可以是 `op:/path/to/sop` 引用。

这些函数会打开一个几何体文件，并返回位于以 P 为顶点、沿向量方向 dir 张开、与 dir 夹角为 angle 的锥体内的点列表。此外，它仅返回距离 P 不超过 max_distance 且最接近的 maxpoints 个点。

`ptgroup` 是一个限制搜索范围的点组。这是一个 SOP 样式的组模式，因此可以是类似 `0-10` 或 `@Cd.x>0.5` 的内容。空字符串被视为匹配所有点。
