---
title: pgfind
order: 34
---
`int [] pgfind(<geometry>geometry, vector P, float radius, int maxpoints, float divsize)`

`int [] pgfind(<geometry>geometry, string ptgroup, vector P, float radius, int maxpoints, float divsize)`

`<geometry>`

在节点上下文（如 wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如 `.bgeo`）的字符串。在 Houdini 内部运行时，可以是 `op:/path/to/sop` 引用。

这些函数与 `pcfind` 函数非常相似。区别在于它们使用基于网格的加速结构。如果使用正确的网格大小调整参数，可以提供更快的初始化和查找速度。

如果使用接近恒定的搜索半径搜索点云，则该半径可用作划分大小。

注意
划分大小不能随点变化。

注意
划分大小上限被限制为 3.0×105。

`ptgroup` 是限制搜索点的点组。这是一个 SOP 样式的组模式，因此可以是类似 `0-10` 或 `@Cd.x>0.5` 的内容。空字符串被视为匹配所有点。
