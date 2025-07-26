---
title: pcopenlod
order: 27
---

| 本页内容 | * [距离查询](#distance-queries) * [立体角查询](#solid-angle-queries) * [聚合](#aggregation) * [示例：邻近查询](#example-proximity-query) * [示例：阈值立体角查询](#example-threshold-solid-angle-query) * [示例：有限立体角查询](#example-limited-solid-angle-query) |
| --- | --- |

`int  pcopenlod(string filename, string Pchannel, vector P, int min_pts, ...)`

此函数用于打开点云文件(`.pc`)并排队访问其中包含的点。然后您可以使用[pcunshaded](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcunshaded "迭代读写通道中尚未写入任何数据的点")或[pciterate](/zh-cn/houdini-vex/point-clouds-and-3d-images/pciterate "用于迭代pcopen查询中找到的所有点")遍历这些点，并使用[pcexport](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcexport "在pciterate或pcunshaded循环中向点云写入数据")向点云添加新数据。

虽然此函数与[pcopen](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcopen "返回点云文件的句柄")类似，但主要区别在于它排队的点可能是整个点组的聚合。换句话说，单个点可能代表多个点。这允许您在任意细节级别执行查询而不忽略点云中的点。例如，您可以执行一个查询，其中靠近查询原点的点照常排队，而远离原点的点则被平均处理。这可以显著提高性能，因为整个点组可以像单个点一样被处理。

与[pcopen](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcopen "返回点云文件的句柄")一样，P指定查询原点，Pchannel指定位置通道。在构建过程中，树结构最初是包含点云中所有点的单个边界框，然后递归细分，直到节点中的点数少于min_pts - 此时停止细分并创建叶节点。min_pts的默认值建议为8。

查询通过从根节点向下遍历树结构直到满足某些条件来执行。从概念上讲，您从一个粗略查询开始，然后细化它，直到您认为它足够详细。您使用一个`measure`来决定查询何时具有所需的细节级别。支持两种`measure`值：`distance`和`solidangle`。

## 距离查询

`distance`模式是为了与[pcopen](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcopen "返回点云文件的句柄")兼容而提供的，不会排队聚合点。距离查询接受一个阈值参数，表示接受点的半径。

`threshold`参数指定接受点的半径 - 与传递给[pcopen](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcopen "返回点云文件的句柄")的半径相同。例如，调用`pcopenlod`(…, `"measure"`, `"distance"`, `"threshold"`, radius, …)会排队位于查询原点指定半径内的点。

## 立体角查询

立体角查询根据点与查询点的接近程度以及点的面积来优先处理点，因此靠近查询点且面积较大的点会被赋予更大的权重。查询过程倾向于通过排队其子节点来拆分贡献较大的点。

用于计算点贡献的精确方程如下：

Ai / ||Pi - P||^2,

其中Ai是聚合面积值，Pi是聚合框中最接近P的点，P是查询原点。调用`pcopenlod`(…, `"measure"`, `"solidangle"`, `"area"`, `"A"`, …)执行立体角查询，其中假定`A`通道保存面积值。

有两种不同的方式使用立体角查询 - 一种是无限(`threshold`)查询，根据满足给定阈值的点数返回不同数量的点；另一种是有限(`samples`)查询，总是返回相同数量的点。如果存在`samples`参数，则假定为有限查询。

有限查询通过优先处理而不是阈值化样本来工作 - 因此无论考虑的点的总权重如何，都会返回相同数量的点。算法通过迭代选择贡献最大的点并拆分该点，直到拆分足够多的点以满足所需的样本计数。有限查询在您需要固定性能或查询的最低质量水平时非常有用。

阈值查询通过将点贡献与固定阈值进行比较，并根据此比较接受或拒绝点。由于不同的查询点会导致不同的点贡献，因此阈值查询会排队不同数量的点。当可以接受对远离点云的查询位置使用较少的点时，阈值查询非常有用。

## 聚合

额外的字符串参数指示如何聚合点值。每个通道可以有不同的聚合模式：`mean`、`sum`或`weighted`。调用`pcopenlod`(…, `aggregate:P`, `sum`)将通过求和聚合通道`P`中的值。调用`pcopenlod`(…, `aggregate:A`, `weighted`, `weight`, `W`)将使用来自通道`W`的权重，通过加权平均聚合通道`A`中的值。

## 示例：邻近查询

```vex
int handle = pcopenlod(texturename, "P", P, 8,
"measure", "distance", "threshold", 2.0,
"aggregate:P", "mean",
"aggregate:value", "sum");
Cf = 0;
while (pciterate(handle))
{
pcimport(handle, "value", valueSum);
Cf += valueSum;
}
pcclose(handle);
```

## 示例：阈值立体角查询

```vex
handle = pcopenlod(texturename, "P", P, 8,
"measure", "solidangle", "area", "A", "threshold", 0.01,
"aggregate:A", "sum",
"aggregate:irradiance", "weighted", "weight", "A",
"aggregate:P", "mean");
Cf = 0;
while (pciterate(handle))
{
pcimport(handle, "irradiance", irradiance);
Cf += irradiance;
}
pcclose(handle);
```

## 示例：有限立体角查询

```vex
handle = pcopenlod(texturename, "P", P, 8,
"measure", "solidangle", "area", "A", "samples", 4,
"aggregate:A", "sum",
"aggregate:irradiance", "weighted", "weight", "A",
"aggregate:P", "mean");
Cf = 0;
while (pciterate(handle))
{
pcimport(handle, "irradiance", irradiance);
Cf += irradiance;
}
pcclose(handle);
```
