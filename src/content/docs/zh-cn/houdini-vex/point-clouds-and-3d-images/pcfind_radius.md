---
title: pcfind_radius
order: 12
---
`int [] pcfind_radius(<geometry>几何体, string 位置通道, string 半径通道, float 半径缩放, vector 位置, float 半径, int 最大点数)`

`int [] pcfind_radius(<geometry>几何体, string 点组, string 位置通道, string 半径通道, float 半径缩放, vector 位置, float 半径, int 最大点数)`

`int [] pcfind_radius(<geometry>几何体, string 位置通道, string 半径通道, float 半径缩放, vector 位置, float 半径, int 最大点数, float &距离数组[])`

`int [] pcfind_radius(<geometry>几何体, string 点组, string 位置通道, string 半径通道, float 半径缩放, vector 位置, float 半径, int 最大点数, float &距离数组[])`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

这些函数会打开几何体文件，并基于位置通道中的点位置，返回位于指定半径范围内位置P的点列表。每个点将通过其半径通道属性进行扩展，该属性将通过半径缩放进行膨胀。半径缩放会缩放`pscale`属性的大小，以调整计算距离的球体大小。值为`0`时，球体会变成点，距离只能为正数。

使用半径通道可以检测不同半径球体之间的相交情况。在这种情况下，不能仅使用自身的球体半径，因为相交的球体可能具有更大的半径，从而不在搜索范围内。因此，使用0.0半径调用此函数仅查找查询位置所在的所有源球体也是合理的。

仅返回给定半径内最近的maxpoints个点。文件名可以使用`op:`语法引用OP上下文中的SOP几何体。位置通道参数指示包含要搜索位置的属性。

您还可以查询到找到粒子表面的距离。如果粒子有半径，您可以在粒子内部时将其限制为零，或者像有符号距离场一样使用负值。后者为您提供了更多解释结果的灵活性。

点组是一个限制搜索点的点组。这是一个[SOP样式组模式](../../model/groups.html#manual)，可以是类似`0-10`或`@Cd.x>0.5`的内容。空字符串被视为匹配所有点。

该函数还可以选择接受一个浮点数组`distances`，并用每个点的距离修改它。

注意
半径属性和半径缩放适用于被搜索的点，而不是用于搜索的点！

注意
如果半径属性不存在，则等同于`pcfind`。

## 示例

执行邻近查询：

```vex
int 邻近点[] = pcfind_radius(文件名, "P", "pscale", 1.0, P, 最大距离, 最大点数);
P = 0;
foreach (int 点编号; 邻近点)
{
 vector 邻近位置 = point(文件名, "P", 点编号);
 P += 邻近位置;
}
P /= len(邻近点);
```
