---
title: agentlayershapes
order: 29
---

`string [] agentlayershapes(<geometry>geometry, int prim, string layername, string shapetype)`

`string [] agentlayershapes(<geometry>geometry, int prim, int layerindex, string shapetype)`

返回该图层引用的且满足`shapetype`筛选条件的所有形状名称。

`string [] agentlayershapes(<geometry>geometry, int prim, string layername, int transform)`

`string [] agentlayershapes(<geometry>geometry, int prim, int layerindex, int transform)`

返回该图层引用的且绑定到指定变换的所有形状名称。

如果`layername`不是代理的[图层](/zh-cn/houdini-vex/crowds/agentlayers "返回代理基元已加载的所有图层")之一、`shapetype`无效、`transform`超出范围、`prim`超出范围或`prim`不是代理基元，则返回空数组。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`prim`

基元编号。

`layername`

代理图层的名称之一。

`layerindex`

代理定义中图层的索引。
可通过[agentfindlayer](/zh-cn/houdini-vex/crowds/agentfindlayer "查找代理定义中图层的索引")获取图层的索引。

`shapetype`

是否检查指定图层中的`"static"`（静态）、`"deforming"`（变形）或`"all"`（全部）形状。

`transform`

代理骨骼中变换的索引。
