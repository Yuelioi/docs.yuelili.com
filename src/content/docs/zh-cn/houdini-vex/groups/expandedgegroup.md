---
title: expandedgegroup
order: 1
---
`int [] expandedgegroup(<geometry>geometry, string groupname)`

`int [] expandedgegroup(<geometry>geometry, string groupname, string mode)`

返回几何体文件中指定组的边的点对列表。

可以使用临时组，如 `0` 或 `p0-1`。它匹配SOP组的命名约定，特别是空字符串表示所有边。

`mode` 可以是 `ordered`、`unordered` 或 `split`。
`ordered` 是默认模式，将按照字符串中出现的顺序返回数字，但仅适用于数字。当使用诸如 `@Cd.x>0.5` 的表达式时，顺序不会被保留。相同的数字不会在返回的数组中出现两次。
`unordered` 模式按照排序后的点编号顺序返回解析后的组。
`split` 模式首先在 `@` 字符处拆分 `groupname` 字符串，然后对每个子字符串进行一次解析。子字符串之间的顺序会被保留，但在解析组表达式时会回退到无序模式。使用此模式解析时，相同的数字可以多次出现。
