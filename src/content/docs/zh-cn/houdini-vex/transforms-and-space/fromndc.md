---
title: fromndc
order: 2
---

`vector  fromNDC(vector v)`

将向量从NDC空间转换到当前空间。

`vector  fromNDC(string space, vector v)`

将向量从NDC空间转换到指定名称的空间。

`space`

space参数的可能取值包括：

| 对象路径 | 使用由路径字符串指定的对象空间。提示：在某些情况下（例如点实例化），mantra可能会自动修改对象路径。您可以生成一个`.ifd`文件并查看内容，以确定mantra对您所需对象的命名方式。 |
| --- | --- |
| `"space:object"` | *当前*对象的对象空间。 |
| `"space:light"` | 在执行阴影或光照着色器时，*当前*光源的对象空间。 |
| `"space:world"` | Houdini世界空间。 |
| `"space:camera"` | mantra相机空间。 |
| `"space:ndc"` | 标准设备坐标空间。 |
| `"space:lightndc"` | 在执行阴影或光照着色器时，*当前*光源的标准设备坐标空间。 |
| `"space:current"` | 向量当前所在的空间。 |
