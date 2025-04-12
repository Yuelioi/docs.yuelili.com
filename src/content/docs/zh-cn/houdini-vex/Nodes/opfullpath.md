---
title: opfullpath
order: 25
---
`string  opfullpath(string relative_path)`

该函数返回被评估对象相对路径的绝对路径。

目前该函数仅在Houdini中有意义。

## 示例

- `opfullpath(".")` - 当前被评估节点的完整路径
- `opfullpath("..")` - 当前节点父级的完整路径
