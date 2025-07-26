---
title: texture3d
order: 36
---
`<type> texture3d(string filename, string channel, vector P, ...)`

返回指定位置P处的3D图像值。如果P位于图像边界框之外，则返回值为0。如果指定的通道包含的值多于返回类型（例如当需要浮点返回类型时却指定了矢量通道），则将返回矢量的第一个分量。如果指定的通道包含的值少于返回类型，则缺失的分量将用最后一个有效通道填充。

纹理文件将在`HOUDINI_TEXTURE_PATH`环境变量指定的路径中搜索。

您可以传递额外参数来控制评估（参见[colormap](/zh-cn/houdini-vex/texturing/colormap "从纹理文件中查找（过滤后的）颜色")）：

| `"filter"` | 指定评估使用的过滤器 |
| --- | --- |
| `"width"` | 指定评估使用的过滤器宽度 |
