---
title: geounwrap
order: 6
---
`string  geounwrap(<geometry>geometry, string unwrap_attribute)`

返回一个oppath字符串，该字符串将基于矢量属性使文件或几何体在原地展开。
此函数会在路径前添加"unwrap:attrname"前缀，后接unwrap_attribute。
路径可以是文件名、带有"op:"前缀的oppath或opinput。
也可以提供输入索引代替字符串。

在oppath前添加"unwrap:attrname"前缀会创建几何体的副本，并根据展开属性覆盖点位置。如果该属性是顶点属性，拓扑结构可能会发生变化。

这使得所有处理点位置的VEX函数都能在自定义空间(如UV空间或颜色空间)中工作。
