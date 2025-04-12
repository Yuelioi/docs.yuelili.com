---
title: nedgesgroup
order: 13
---
`int  nedgesgroup(<geometry>geometry, string groupname)`

`<geometry>`

在节点上下文（例如 wrangle SOP）中运行时，此参数可以是一个整数，表示用于读取几何体的输入编号（从0开始）。

或者，该参数也可以是一个指定几何文件（例如 `.bgeo`）的字符串。在 Houdini 内部运行时，可以是 `op:/path/to/sop` 这样的引用路径。

`groupname`

一个组名或临时组，例如 `0` 或 `p0-1`。这符合 SOP 组的命名约定，特别需要注意的是空字符串表示选择所有边。
