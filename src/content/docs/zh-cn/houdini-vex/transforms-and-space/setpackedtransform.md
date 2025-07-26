---
title: setpackedtransform
order: 24
---
| 版本 | 17.0 |
| --- | --- |

`void  setpackedtransform(int input, int primnum, matrix transform)`

设置打包图元的变换矩阵。这会同时修改该图元对应点的`P`属性及其固有属性`transform`。

警告
此函数仅替换`P`（位置）属性和`transform`固有属性。它会忽略`packedfulltransform`固有属性包含的多种细节：

- 打包图元的`pivot`固有属性
- 实例化属性（如`orient`，当`pointinstancetransform`固有属性启用时，例如人群代理）
- `packedlocaltransform`固有属性（Alembic图元）

因此在多种情况下，此函数不会应用预期的变换。

[getpackedtransform](/zh-cn/houdini-vex/transforms-and-space/getpackedtransform "获取打包图元的变换矩阵。")函数存在相同问题，因为它返回的变换矩阵仅基于`P`和`transform`计算得出。

## 示例

```vex
// 定义变换矩阵
matrix tf = ident();
rotate(tf, radians(45), {0,1,0});
translate(tf, {0,1,0});

matrix transform = getpackedtransform(0, @primnum);
setpackedtransform(0, @primnum, transform * tf);

```
