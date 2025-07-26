---
title: getpackedtransform
order: 3
---
| 版本 | 17.0 |
| --- | --- |

`matrix  getpackedtransform(int input, int primnum)`

获取打包图元的变换矩阵。该矩阵由图元点的`P`属性和其固有`transform`属性构建而成。

警告
此函数仅基于`P`（位置）属性和`transform`固有属性构建变换矩阵，忽略了`packedfulltransform`固有属性包含的多种细节：

- 打包图元的`pivot`固有属性
- 实例化属性如`orient`（当`pointinstancetransform`固有属性启用时，例如人群代理）
- `packedlocaltransform`固有属性（Alembic图元）

因此在多种不同情况下，此函数不会返回预期的变换矩阵。

[setpackedtransform](/zh-cn/houdini-vex/transforms-and-space/setpackedtransform "设置打包图元的变换矩阵。")函数存在相同问题，因为它仅覆盖`P`和`transform`属性。例如，当存在非零打包轴心点时，或上述其他情况下，`packedfulltransform`将不会包含您期望的矩阵。

## 示例

```vex
// 定义变换矩阵
matrix transform = ident();
rotate(transform, radians(45), {0,1,0});
translate(transform, {0,1,0});

matrix tf = getpackedtransform(0, @primnum);
setpackedtransform(0, @primnum, transform * tf);

```
