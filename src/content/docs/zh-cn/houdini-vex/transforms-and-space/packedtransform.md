---
title: packedtransform
order: 14
---
| 始于版本 | 17.0 |
| --- | --- |

`void  packedtransform(int input, int primnum, matrix transform)`

通过指定的变换矩阵对打包图元进行变换。这会同时修改图元点的`P`属性及其固有`transform`属性。

其功能等价于以下代码：

```vex
// 定义变换矩阵
matrix transform = ident();
rotate(transform, radians(45), {0,1,0}); // 绕Y轴旋转45度
translate(transform, {0,1,0}); // 沿Y轴平移1个单位

// 获取当前打包图元的变换矩阵
matrix3 primtf = primintrinsic(0, "transform", primnum);
// 更新图元的变换矩阵（矩阵相乘）
setprimintrinsic(0, "transform", primnum, primtf * (matrix3)transform);
// 获取图元的第一个点
int primpoint = primpoint(0, primnum, 0);
// 获取点的位置并应用变换
vector pos = point(0, "P", primpoint);
setpointattrib(0, "P", primpoint, pos * transform); // 更新点的位置

```
