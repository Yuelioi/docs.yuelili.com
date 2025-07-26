---
title: shadowmap
order: 10
---

`float|vector shadowmap(string filename, vector Pndc, float spread, float bias, float quality, ...)`

`float|vector shadowmap(string filename, vector Pndc, float spread, float bias, float quality, ...)`

`vector  shadowmap(string filename, vector Pndc1, vector Pndc2, vector Pndc3, vector Pndc4, float spread, float bias, float quality, ...)`

允许您指定自定义采样矩形。如果不需要对阴影贴图进行过滤，或者无法计算自己的导数，可以重复传入相同的向量4次以禁用过滤。

`shadowmap`函数会将阴影贴图视为从光源渲染的图像。该函数可用于访问深度贴图和深度阴影贴图。在这两种情况下，它都会返回一个向量，其中每个颜色分量表示光源对该点颜色的可见性。

`filename`

阴影或深度贴图的路径。

`Pndc`

着色点在光源投影的NDC空间中的位置。

`spread`

阴影柔化控制参数。

`bias`

控制深度采样的精确度。

`quality`

采样质量控制参数，`1`表示默认质量。

返回值

到达采样点的光照比例。例如，如果点完全处于阴影中，返回值为0；如果完全被照亮，返回值为1。

shadowmap() VEX函数与texture()接收相同的可变参数。更多信息请参阅[texture](/zh-cn/houdini-vex/texturing/texture "计算指定纹理图的过滤采样")。
深度摄像机贴图通道

## 深度摄像机贴图通道

如果阴影贴图是[深度摄像机贴图](../../render/dcm.html)，`shadowmap`可以接收一个额外的可选参数`"channel"`，后跟要评估的贴图中通道的字符串名称。

```vex
shadowmap(mapname, pz, spread, bias, quality, "channel", channel);

```

该函数使用相同的不透明度语义，因此会返回实际颜色的补值。因此，要获得准确结果，通常需要这样计算：

```vex
{1,1,1} - shadowmap(...);

```
