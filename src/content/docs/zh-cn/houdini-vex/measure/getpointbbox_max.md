---
title: getpointbbox_max
order: 11
---
`vector  getpointbbox_max(<geometry>geometry)`

`vector  getpointbbox_max(<geometry>geometry, string pointgroup)`

此函数与 [getbbox_max](/zh-cn/houdini-vex/measure/getbbox_max "返回几何体的包围盒最大值") 功能相同，但仅计算*点*的包围盒。因此，如果图元存在不包含点的延伸部分（例如原始球体的边界），这些部分将不会被包含在包围盒内。

`<geometry>`

在节点上下文（如 wrangle SOP）中运行时，此参数可以是表示输入编号的整数（从0开始）以读取几何体。

或者，该参数可以是指定要读取的几何文件（例如 `.bgeo` 文件）的字符串。在 Houdini 内部运行时，可以是 `op:/path/to/sop` 形式的引用。
