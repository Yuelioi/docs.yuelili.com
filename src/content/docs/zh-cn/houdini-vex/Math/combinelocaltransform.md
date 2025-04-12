---
title: combinelocaltransform
order: 12
---
| 始于版本 | 18.0 |
| --- | --- |

`matrix  combinelocaltransform(matrix local, matrix parent_world, matrix parent_local, int scale_inherit_mode)`

根据给定的局部变换和父级世界变换返回新的世界变换矩阵。

`matrix  combinelocaltransform(matrix local, matrix parent_world, matrix parent_local, int scale_inherit_mode, matrix &effective_local_transform)`

根据给定的局部变换和父级世界变换返回新的世界变换矩阵。包含继承缩放值的局部变换会存储在effective_local_transform矩阵中 - 当模式设置为SCALE_INHERIT_OFFSET_AND_SCALE或SCALE_INHERIT_SCALE_ONLY时，该值将与local矩阵不同，此时我们会将父级的局部缩放值作为子级自身局部变换的一部分进行传递。

`scale_inherit_mode`

指定父级变换的缩放继承如何应用于结果。取值为`math.h`中定义的以下常量之一：

- `SCALE_INHERIT_DEFAULT` (0) - 简单继承模式：

```vex
world = local * parent_world

```

- `SCALE_INHERIT_OFFSET_ONLY` (1) - 子级不继承父级局部缩放，但局部位移会被缩放：

```vex
world = local_scale_rotates * invert(parent_local_scales) * local_translates * parent_world

```

- `SCALE_INHERIT_OFFSET_AND_SCALE` (2) - 局部位移按之前方式缩放，同时父级局部缩放会在子级局部空间重新应用：

```vex
world = parent_local_scales * local_scale_rotates * invert(parent_local_scales) * T * parent_world

```

- `SCALE_INHERIT_SCALE_ONLY` (3) - 局部位移不被缩放，但父级局部缩放会在子级局部空间重新应用：

```vex
world = parent_local_scales * local * invert(parent_local_scales) * parent_world

```

- `SCALE_INHERIT_IGNORE` (4) - 子级完全忽略父级的所有局部缩放：

```vex
world = local * invert(parent_local_scales) * parent_world

```
