---
title: uvintersect
order: 38
---
`int  uvintersect(<geometry>geometry, string uvname, vector orig, vector dir, vector &pos, vector &primuv)`

`int  uvintersect(<geometry>geometry, string primgroup, string uvname, vector orig, vector dir, vector &pos, vector &primuv)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号的整数（从0开始）以读取几何体。

或者，该参数可以是指定要读取的几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`primgroup`

基元组的名称或用于生成基元组的模式。使用与SOP组相同的语义，因此空字符串将匹配所有基元。也可以使用像`@Cd.x>0`这样的属性组，但请注意在[Snippet VOP](../../nodes/vop/snippet.html "运行VEX代码片段以修改传入值。")中可能需要用反斜杠转义`@`符号。

此函数计算指定射线与几何体在UV空间中的交点。返回基元编号，如果出错或未找到交点则返回-1。

交点位置的UV空间坐标存储在p中。交点的对应参数位置存储在primuv中。对于多个交点的情况，使用距离射线原点最近的交点。

此函数不需要归一化的方向向量。相反，它使用向量的长度作为最大距离。整数结果是命中的基元。

注意
在3D UV空间中可视化射线的3D交点可能比较困难。可以使用的一个技巧是在SOP中展开几何体以获得更好的空间可视化效果。这可以通过使用[Split Vertex SOP](../../nodes/sop/splitvertex.html)后接[Attribute Copy SOP](../../nodes/sop/attribcopy.html "在顶点组、点组或基元组之间复制属性。")来实现。这将在UV边界处断开面连接，并将uvw值印在`P`属性上。

注意
当对元球几何体执行相交测试时，无法确定被击中的元球的基元编号。在这种情况下，函数返回相交几何体中的基元数量。
