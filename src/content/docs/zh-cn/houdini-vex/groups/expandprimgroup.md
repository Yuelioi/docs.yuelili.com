---
title: expandprimgroup
order: 3
---
`int [] expandprimgroup(<geometry>geometry, string groupname)`

`int [] expandprimgroup(<geometry>geometry, string groupname, string mode)`

`groupname` 可以使用临时组，例如 `0-3` 或 `@Cd.x>0.5`。
这里使用的是SOP组的命名约定，特别地，空字符串表示*所有*。

`mode` 可以是 `ordered`（有序）、`unordered`（无序）或 `split`（分割）。
`ordered` 是默认模式，会按照字符串中出现的顺序返回数字，但仅适用于数字。当使用类似 `@Cd.x>0.5` 这样的表达式时，顺序不会被保留。同一个数字不会在返回的数组中出现两次。
`unordered` 模式会按照排序后的点编号顺序返回解析后的组。
`split` 模式首先会在 `@` 字符处分割 `groupname` 字符串，然后对每个子字符串进行一次解析。子字符串之间的顺序会被保留，但在解析组表达式时会回退到无序模式。使用此模式解析时，同一个数字可能会出现多次。
