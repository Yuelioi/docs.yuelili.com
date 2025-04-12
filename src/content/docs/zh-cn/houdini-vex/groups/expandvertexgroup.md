---
title: expandvertexgroup
order: 4
---

| 始于版本 | 17.0 |
| --- | --- |

`int [] expandvertexgroup(<geometry>几何体, string 组名)`

`int [] expandvertexgroup(<geometry>几何体, string 组名, string 模式)`

该函数可使用临时组，例如 `0v3 1v2`。
使用SOP组命名约定，特别说明空字符串表示*所有*。

`模式` 可以是 `ordered`（有序）、`unordered`（无序）或 `split`（分割）。
`ordered` 是默认模式，将按照字符串中出现的顺序返回数字（仅限数字）。当使用类似 `@Cd.x>0.5` 的表达式时不会保持顺序。返回的数组中不会出现重复数字。
`unordered` 模式会按照点编号排序顺序返回解析后的组。
`split` 模式会先将 `组名` 字符串按 `@` 字符分割，然后对每个子字符串进行单独解析。子字符串之间的顺序会保留，但在解析组表达式时会回退到无序模式。使用此模式解析时，同一个数字可能出现多次。
