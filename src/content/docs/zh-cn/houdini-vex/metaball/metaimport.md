---
title: metaimport
order: 1
---

`int  metaimport(int handle, string attrib, vector P, <type>&value)`

`<type>[] metaimport(string file, string attribute, vector P)`

这种形式不是逐个迭代所有值，而是同时从所有元球中导入值。与标量形式一样，您可以使用以下关键字...

- `meta:density`
- `meta:prim`
- `meta:transform`

...来从元球中导入非属性信息。

当您使用[metastart](/zh-cn/houdini-vex/metaball/metastart "打开几何体文件并返回在位置p处感兴趣的元球的句柄。")和[metanext](/zh-cn/houdini-vex/metaball/metanext "迭代到由metastart()函数返回的元球列表中的下一个元球。")获取元球句柄后，就可以用`metaimport`查询元球的属性。

有三种"特殊"属性可以查询：

`float meta:density`：
当前元球的密度

`float meta:prim`：
当前元球的图元编号

`matrix meta:transform`：
与当前元球关联的变换矩阵。应用此变换的逆矩阵可以将点转换到元球的"空间"中。

例如，[metaweight](/zh-cn/houdini-vex/metaball/metaweight "返回几何体在位置p处的元权重。")函数可以用以下方式表示：

```vex
float
metaweight(string file; vector P)
{
int handle;
float density, tmp;

density = 0;
handle = metastart(file, P);
while (metanext(handle))
{
if (metaimport(handle, "meta:density", P, tmp))
density += tmp;
}
return density;
}
```

评估的属性不会被该位置元球权重预乘，必须进行乘法运算才能混合。例如，要评估元球上的矢量属性（比如颜色），可以使用以下函数：

```vex
vector
meta_attribute(string file, attrib_name; vector P)
{
int handle;
vector result, tmp;
float density;

handle = metastart(file, P);
result = 0;
while (metanext(handle))
{
if (metaimport(handle, "meta:density", P, density))
{
if (metaimport(handle, attrib_name, P, tmp))
result += density * tmp;
}
return result;
}
```

在i3d上下文中，有一个默认的元球几何体（由i3dgen程序的命令行`-g`选项指定）。如果文件名为空字符串，则将使用默认几何体。
