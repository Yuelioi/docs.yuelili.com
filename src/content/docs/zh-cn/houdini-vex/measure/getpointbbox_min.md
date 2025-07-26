---
title: getpointbbox_min
order: 12
---
`vector  getpointbbox_min(<geometry>geometry)`

`vector  getpointbbox_min(<geometry>geometry, string pointgroup)`

此函数与 [getbbox_min](/zh-cn/houdini-vex/measure/getbbox_min "返回几何体的包围盒最小值") 相同，但仅计算*点*的包围盒。因此，如果图元有不包含点的范围（例如原始球体的边界），这些范围将不会包含在包围盒内。

`<geometry>`

在节点上下文（如 wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是一个指定几何文件（例如 `.bgeo`）的字符串以从中读取。在 Houdini 内部运行时，可以是一个 `op:/path/to/sop` 引用。
