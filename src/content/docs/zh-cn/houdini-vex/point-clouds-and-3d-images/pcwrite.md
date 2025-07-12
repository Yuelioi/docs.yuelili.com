---
title: pcwrite
order: 33
---
`int  pcwrite(string filename, ...)`

将当前着色点的数据写入点云文件。

`filename`

要写入的文件名。您可以通过[文件表面节点](../../nodes/sop/file.html "读取、写入或缓存磁盘上的几何体")将生成的文件读入几何网络。该文件应具有`.pc`扩展名（Houdini将使用扩展名来确定如何导入文件）。

`…`

后续参数指定一个或多个通道名称（字符串，命名您要保存的属性，如`"P"`、`"N"`、`"v"`、`"area"`、`"u"`等）和值（您希望存储的值）的对。

```vex
pcwrite("out.pc", "P", P, "N", N)

```

要将变量作为向量类型而不是三元组写入，请在通道名称后附加`:vector`。

```vex
pcwrite("out.pc", "P", P, "N:vector", N)

```

在微多边形渲染中，点会与相邻点进行插值，以便在点云中消除角和边上的重复顶点。如果要禁用此行为，请使用下面描述的`"interpolate"`参数。

"interpolate",
`int`
`=1`

当您将此参数传递为`1`（默认值）时，将写入一个代表微多边形四个角的插值点。这样可以防止写入重叠值。

```vex
pcwrite("out.pc", "P", P, "interpolate", 1)

```

使用值`0`将禁用插值，这在写入不基于`P`的点时非常有用。插值在光线追踪模式下无效。

（请注意，这意味着您不能使用`interpolate`作为数据通道的名称。）

"countphotons",
`int`

对于光子生成模式，将存储的点数添加到光子总数中，用于进度报告和光子图生成的终止。

"mkdir",
`int`
`=0`

当您传递参数`1`时，函数将自动创建缺失的子目录/路径。

## 示例

```vex
surface
dumpsomepoints(string fname = "points.$F4.pc"; int do_cull = 0; float keepamt = 0.05)
{
 vector nn = normalize(frontface(N, I));
 int rval=0;
 float A = area(P,"smooth",0); // 不使用平滑导数的面积

    if( !do_cull || do_cull & (nrandom()<keepamt) )
 {
 if( do_cull && keepamt > 0 )
 {
 A = A/keepamt;
 }
 rval = pcwrite(fname, "interpolate", 1,
 "P", ptransform("space:camera","space:world", P),
 "N", ntransform("space:camera","space:world", normalize(N)),
 "area", A); // 在pc中输出一个"area"通道
 }
 Cf =abs(nn)*rval;
}

```
