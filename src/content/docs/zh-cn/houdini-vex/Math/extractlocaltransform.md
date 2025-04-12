---
title: extractlocaltransform
order: 28
---
| 始于版本 | 18.0 |
| --- | --- |

`matrix  extractlocaltransform(matrix world, matrix parent_world, matrix parent_local, int scale_inherit_mode)`

根据给定的世界变换和新父级变换，返回一个新的局部变换。

`matrix  extractlocaltransform(matrix world, matrix parent_world, matrix parent_local, int mode, matrix &effective_local_transform)`

根据给定的局部变换和父级世界变换，返回一个新的世界变换。包含任何继承缩放比例的局部变换将存储在effective_local_transform矩阵中。

`scale_inherit_mode`

指定父级变换的缩放继承如何应用于结果。该参数使用`math.h`中的以下定义之一：

- `SCALE_INHERIT_DEFAULT` (0) - 简单继承：

```vex
world = local * parent_world

```

- `SCALE_INHERIT_OFFSET_ONLY` (1) - 子对象不随父级局部缩放而缩放，但局部平移会被缩放：

```vex
world = local_scale_rotates * invert(parent_local_scales) * local_translates * parent_world

```

- `SCALE_INHERIT_OFFSET_AND_SCALE` (2) - 局部平移按之前方式缩放，同时父级局部缩放也会被子对象在局部空间重新应用：

```vex
world = parent_local_scales * local_scale_rotates * invert(parent_local_scales) * T * parent_world

```

- `SCALE_INHERIT_SCALE_ONLY` (3) - 局部平移不被缩放，但父级局部缩放会在子对象的局部空间重新应用：

```vex
world = parent_local_scales * local * invert(parent_local_scales) * parent_world

```

- `SCALE_INHERIT_IGNORE` (4) - 子对象完全忽略任何父级局部缩放：

```vex
world = local * invert(parent_local_scales) * parent_world

```