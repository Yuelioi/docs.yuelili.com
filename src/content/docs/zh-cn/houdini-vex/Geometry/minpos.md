---
title: minpos
order: 10
---
`vector  minpos(<geometry>geometry, vector point)`

返回几何体中最接近指定点的位置坐标。

`vector  minpos(<geometry>geometry, vector point, float maxdist)`

返回几何体中最接近指定点的位置坐标，
搜索范围限制在maxdist半径内。
如果在maxdist范围内未找到点，则返回原输入点。

`vector  minpos(<geometry>geometry, string primgroup, vector point)`

返回几何体中最接近指定点的位置坐标，
仅在被命名的图元组(primgroup)中进行搜索。
如果在该组中未找到点，则返回原输入点。

`vector  minpos(<geometry>geometry, string primgroup, vector point, float maxdist)`

返回几何体中最接近指定点的位置坐标，
仅在被命名的图元组(primgroup)中进行搜索，
且搜索范围限制在maxdist半径内。
如果在该组中或maxdist范围内未找到点，
则返回原输入点。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号的整数（从0开始）以读取几何体。

或者，该参数可以是指定几何文件（如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`primgroup`

如果指定，则仅报告该组内的点。
可以是几何体上的组名称，或
[组语法规范](../../model/groups.html#manual)如`@Cd.x>0`。
空字符串将被忽略（匹配所有图元）。

注意
如果在Wrangle节点代码片段中使用带`@`的组语法，
可能需要在`@`前添加反斜杠(`\`)以防止Wrangle节点尝试解析它。

`point`

世界空间中要寻找最近点的目标点坐标。

`maxdist`

最大搜索距离。
设置此参数可以加速函数执行，因为它可能允许提前终止搜索。

返回值

几何体上最近点的位置坐标，如果未找到最近点则返回原输入点。
