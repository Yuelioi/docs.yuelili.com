---
title: pcsampleleaf
order: 28
---
`void  pcsampleleaf(int handle, float sample)`

此函数只能与 pcopenlod() 函数配合使用，并且只能在 pciterate() 循环内部调用。它会将当前迭代点替换为该点经过重要性采样的叶子后代节点。用于选择叶子点的权重是传递给 pcopenlod() 函数"measure"参数的"area"通道，如果在打开点云时未指定面积通道，则使用均匀权重。sample 参数应为0到1之间的均匀随机值。

如果当前迭代点已经是叶子点，或者点云不是用 pcopenlod() 打开的，则 pcsampleleaf() 不会产生任何效果。

当聚合点信息无法以有意义的方式使用时，此函数非常有用，它提供了一种访问点树中子节点信息的机制。例如，从平均点位置追踪阴影射线是没有意义的，但可以选择一个子点然后将阴影射线发送到该点就很有用。
示例：阴影射线

## example-shadow-rays

```vex
// 打开一个点云并获取代表整个点云的单个聚合点
string texturename = "points.pc";
int handle = pcopenlod(texturename, "P", P, 8,
"measure", "solidangle",
"area", "A",
"samples", 1,
"aggregate:A", "sum",
"aggregate:P", "mean");

Cf = 0;

// 这个循环只会迭代一次
while (pciterate(handle))
{
 // 从平均点查询A值
 float ptarea;
 pcimport(handle, "A", ptarea);

 pcsampleleaf(handle, nrandom());

 // 从采样的叶子点查询P值
 vector pos;
 pcimport(handle, "P", pos);

 if (trace(pos, P-pos, Time))
 Cf += ptarea / length2(P-pos);
}

```
