---
title: getpointbbox_center
order: 10
---
`vector  getpointbbox_center(<geometry>geometry)`

`vector  getpointbbox_center(<geometry>geometry, string pointgroup)`

该函数与 [getbbox_center](/zh-cn/houdini-vex/measure/getbbox_center "返回几何体边界框的中心点") 功能相同，但仅计算*点*的边界框。因此，如果图元存在不包含点的延伸部分（例如原始球体的边界），这些部分将不会被包含在边界框内。

`<geometry>`

在节点上下文（如 wrangle SOP）中运行时，此参数可以是表示输入编号的整数（从0开始）以读取几何体。

或者，该参数也可以是指定几何文件（例如 `.bgeo`）的字符串。在 Houdini 内部运行时，可以是 `op:/path/to/sop` 形式的引用。
