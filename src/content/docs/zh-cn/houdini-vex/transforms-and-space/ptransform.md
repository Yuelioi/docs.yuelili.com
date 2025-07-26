---
title: ptransform
order: 20
---
`vector  ptransform(vector vec, matrix transform)`

`vector4  ptransform(vector4 vec, matrix transform)`

使用给定的变换矩阵对向量进行变换。

`vector  ptransform(string tospace, vector vec)`

`vector4  ptransform(string tospace, vector4 vec)`

从`"space:current"`空间进行变换。

`vector  ptransform(string fromspace, string tospace, vector vec)`

`vector4  ptransform(string fromspace, string tospace, vector4 vec)`

将向量从`fromspace`空间变换到`tospace`空间。

`fromspace`, `tospace`

空间参数的可能取值为：

| 对象路径 | 使用路径字符串指定对象的对象空间。提示：在某些情况下（如点实例化），mantra可能会自动修改对象路径。您可以生成一个`.ifd`文件并查看内部以确定mantra对目标对象的命名方式。 |
| --- | --- |
| `"space:object"` | 当前对象的对象空间。 |
| `"space:light"` | 在执行阴影或光照着色器时，当前光源的对象空间。 |
| `"space:world"` | Houdini世界空间。 |
| `"space:camera"` | mantra相机空间。 |
| `"space:ndc"` | 标准化设备坐标空间。 |
| `"space:lightndc"` | 在执行阴影或光照着色器时，当前光源的标准化设备坐标空间。 |
| `"space:current"` | 向量当前所在的空间。 |

- [ptransform](/zh-cn/houdini-vex/transforms-and-space/ptransform "将向量从一个空间变换到另一个空间。")将向量解释为位置。
- [vtransform](/zh-cn/houdini-vex/transforms-and-space/vtransform "变换方向向量。")将向量解释为方向向量，因此不应用矩阵中的平移变换。
- [ntransform](/zh-cn/houdini-vex/transforms-and-space/ntransform "变换法线向量。")将向量解释为法线向量，因此乘以矩阵的逆转置（忽略平移变换）。

## 示例

仅包含tospace参数的版本假设fromspace为`"space:current"`。例如：

```vex
Pworld = ptransform("space:world", P);

```

...等同于：

```vex
Pworld = ptransform("space:current", "space:world", P);

```

将向量从当前空间变换到对象空间：

```vex
ospace = ptransform("space:object", P)

```

将向量从对象空间变换到mantra的自然坐标空间（"camera"空间）：

```vex
ospace = ptransform("space:object", "space:current", P)

```
