---
title: pcopen
order: 26
---
`int  pcopen(string filename, string channel, int shaded, ...)`

`int  pcopen(string filename, string Pchannel, vector P, float radius, int maxpoints, ...)`

`int  pcopen(string filename, string Pchannel, vector P, string Nchannel, vector N, float radius, int maxpoints, ...)`

`int  pcopen(int opinput, string Pchannel, vector P, float radius, int maxpoints)`

此函数用于打开点云文件(`.pc`)并准备访问其中包含的点。随后可以使用[pcunshaded](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcunshaded "迭代读写通道中尚未写入任何数据的所有点")或[pciterate](/zh-cn/houdini-vex/point-clouds-and-3d-images/pciterate "此函数可用于迭代pcopen查询中找到的所有点")来遍历这些点。

前两个版本的功能是基于Pchannel中的点位置，在半径范围内围绕特定位置P排队点。只有给定半径内最近的maxpoints个点会被排队。当`pcopen()`与`pciterate()`一起使用时，点会按照从近到远的顺序排序。文件名可以使用`op:`语法来引用OP上下文中的SOP几何体。Pchannel参数指定了纹理中包含待搜索位置的通道。如果Pchannel尚未是只读的，它将被设为只读。任何后续尝试使用[pcexport](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcexport "在pciterate或pcunshaded循环中向点云写入数据")或[pcunshaded](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcunshaded "迭代读写通道中尚未写入任何数据的所有点")操作该通道都会失败。可选地，Nchannel指定方向通道，N向量指定搜索方向。只有指向相同方向的点(即`dot(N, Npoint) > 0`)会被排队。

某些情况下，您可能需要向点云添加额外通道。这可以通过[pcexport](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcexport "在pciterate或pcunshaded循环中向点云写入数据")和[pcunshaded](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcunshaded "迭代读写通道中尚未写入任何数据的所有点")实现。通常不需要为点云中的每个点都添加额外通道数据。例如，当只有部分点云位于相机视锥体内时。这种情况下，最好只为邻近查询返回的点添加通道数据。但有时在能进行有效查询前，点云中的所有点都必须接收额外通道数据。例如添加位置通道时。这种情况下，可以使用此函数的第三个版本来排队某个通道channel的所有已着色(shaded != 0)或未着色(shaded == 0)的点。如果channel不存在，则会排队所有点。与前两个版本不同，此函数不会锁定channel。

您可以指定额外的字符串参数`"prefix"`，后跟一个通道前缀字符串，用于引用分块文件。

注意
preload选项会将整个点云加载到内存中。禁用此选项将使用瓦片缓存。

## 示例

执行邻近查询

```vex
int handle = pcopen(texturename, "P", P, maxdistance, maxpoints);
while (pcunshaded(handle, "irradiance"))
{
 pcimport(handle, "P", cloudP);
 pcimport(handle, "N", cloudN);
 ir = computeIrraciance(cloudP, cloudN);
 pcexport(handle, "irradiance", ir);
}
pcfilter(handle, radius, "irradiance", ir);

```

为整个通道着色

```vex
vector sample;
int rval, handle;

handle = pcopen(texturename, "P", 0);
while (pcunshaded(handle, "P"))
{
 sample = set(nrandom("qstrat"), nrandom("qstrat"), 0.0);
 rval = sample_geometry(
 sample, sample, Time,
 "scope", getobjectname(),
 "pipeline", "displacement",
 "P", pos);
 if (rval)
 rval = pcexport(handle, "P", pos);
}
pcclose(handle);

```

控制点法线与传递给`pcopen()`的法线之间的最小点积阈值

```vex
// 这将只返回满足dot(N, Npoint) > 0.8的点
int handle = pcopen("test.pc", "P", P, "N", N, 1e6, 100, "ndot", 0.8);

```
