---
title: rawcolormap
order: 9
---
`vector|vector4 rawcolormap(string filename, vector uvw, ...)`

`vector|vector4 rawcolormap(string filename, float u, float v, ...)`

`vector|vector4 rawcolormap(string filename, vector uv, vector du, vector dv, int samples, ...)`

`vector|vector4 rawcolormap(string filename, vector uv0, vector uv1, vector uv2, vector uv3, ...)`

`vector|vector4 rawcolormap(string filename, vector uv0, vector uv1, vector uv2, vector uv3, int samples, ...)`

`vector|vector4 rawcolormap(string filename, float u0, float v0, float u1, float v1, float u2, float v2, float u3, float v3, int samples, ...)`

该函数的参数与 [colormap](/zh-cn/houdini-vex/texturing/colormap "从纹理文件中查找（经过过滤的）颜色。") 相同，但不会对像素值进行双线性插值。有关参数的详细信息，请参阅 [colormap](/zh-cn/houdini-vex/texturing/colormap "从纹理文件中查找（经过过滤的）颜色。")。

如果以 `vector4` 返回类型调用该函数，则第四个分量是纹理的 alpha 通道。如果图像没有 alpha 通道，则第四个分量始终为 `1`。
