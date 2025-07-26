---
title: intersect_all
order: 9
---

要仅获取*第一个*交点，请使用[intersect](/zh-cn/houdini-vex/geometry/intersect "此函数计算射线与几何体的第一个交点")。

`int intersect_all(<geometry>geometry, string group, vector orig, vector dir, vector &pos[], int &prim[], vector &uvw[], float tol=0.01, float ttol=0.01 )`

`<geometry>`

当在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于从中读取几何体。

或者，该参数可以是指定要读取的几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`group`

如果指定，则仅与该组中的图元相交。

`orig`

射线起点。

`dir`

射线方向*和最大距离*。
此函数不需要归一化的方向向量。
而是使用向量的长度作为搜索的最大距离。

`&pos`

函数会用每个交点的世界空间位置覆盖此数组。

`&prim`

函数会用射线击中的图元编号覆盖此数组。

`&uvw`

函数会用交点在图元上的参数化UVW坐标覆盖此数组。

`tol`, `ttol`

`tol`是3D容差。`ttol`是射线容差。
在参数化射线容差`ttol`范围内的碰撞点将被合并，
通常用于避免在击中几何体边缘时获得额外的交点。

要获取*所有*交点而不合并，请将`ttol`设置为`-1`。

返回值

交点的数量，如果射线未击中任何物体则返回`0`。

注意
当对metaball几何体执行相交测试时，
无法确定被击中的metaball的图元编号。
在这种情况下，函数返回相交几何体中的图元数量。
