---
title: getpointbbox
order: 9
---
`void  getpointbbox(<geometry>geometry, vector &min, vector &max)`

`void  getpointbbox(<geometry>geometry, string pointgroup, vector &min, vector &max)`

这与 [getbbox](/zh-cn/houdini-vex/measure/getbbox "设置两个向量为几何体包围盒的最小和最大角点。") 功能相同，区别在于它仅计算*点*的包围盒。因此，如果某个图元有超出点范围的部分（例如原始球体的边界），这些部分将不会被包含在包围盒内。

`<geometry>`

在节点上下文（如 wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数也可以是一个指定几何文件（例如 `.bgeo`）的字符串。在Houdini内部运行时，可以是 `op:/path/to/sop` 形式的引用。
