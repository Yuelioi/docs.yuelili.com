---
title: expandpointgroup
order: 2
---
`int [] expandpointgroup(<geometry>geometry, string groupname)`

`int [] expandpointgroup(<geometry>geometry, string groupname, string mode)`

`groupname` 可以使用临时组语法，例如 `0-3` 或 `@Cd.x>0.5`。

`mode` 可以是 `ordered`（有序）、`unordered`（无序）或 `split`（分割）。
`ordered` 是默认模式，将按照字符串中出现的顺序返回数字（仅适用于数字）。当使用类似 `@Cd.x>0.5` 的表达式时，顺序不会被保留。返回的数组中不会出现重复的数字。
`unordered` 模式会按照排序后的点编号顺序返回解析后的组。
`split` 模式首先将 `groupname` 字符串按 `@` 字符分割，然后对每个子字符串进行单独解析。子字符串之间的顺序会被保留，但在解析组表达式时会回退到无序模式。使用此模式时，同一个数字可能在解析过程中多次出现。

此函数遵循 SOP 组命名约定，特别说明空字符串表示*全部*。
