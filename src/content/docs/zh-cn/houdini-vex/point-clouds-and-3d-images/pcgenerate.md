---
title: pcgenerate
order: 13
---
`int  pcgenerate(string filename, int npoints)`

该函数返回指定名称点云的句柄，或创建具有指定名称和点数量的新点云。
初始时点云不包含任何通道，但可以通过在[pcunshaded](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcunshaded "迭代读写通道中尚未写入数据的点")循环中使用[pcexport](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcexport "在pciterate或pcunshaded循环中向点云写入数据")添加通道。注意：如果使用已存在的点云名称调用pcgenerate()，该点云不会被重新调整为指定点数。

建立位置通道后，可调用[pcopen](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcopen "返回点云文件的句柄")查询生成的点云。注意：调用[pcopen](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcopen "返回点云文件的句柄")会锁定指定的位置通道。点云一旦被打开即视为已生成。对已生成的点云调用pcgenerate()类似于调用pcopen()并请求0个点：在[pcunshaded](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcunshaded "迭代读写通道中尚未写入数据的点")或[pciterate](/zh-cn/houdini-vex/point-clouds-and-3d-images/pciterate "用于迭代pcopen查询中找到的所有点")循环中将无法获取任何点。

本函数仅将点云存储在内存中。如需写入磁盘，请使用[pcwrite()](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcwrite "将数据写入点云文件")。

注意
为保持与`pcopen()`的一致性，我们将参数称为文件名。这两个函数共享同一命名空间。例如调用`pcgenerate("myfile.pc", ...)`后，可通过`pcopen("myfile.pc", ...)`或`pcopenlod("myfile.pc", ...)`查询该点云。

反之亦然。若先调用`pcopen("myfile.pc", ...)`再调用`pcgenerate("myfile.pc", ...)`，pcgenerate()将直接使用pcopen()已加载到内存的点云，而非创建新点云。

## 示例

```vex
vector position;
int ohandle, ghandle, rval;

ghandle = pcgenerate(texturename, npoints);
while (pcunshaded(ghandle, "P"))
{
 // 计算'position'...
 rval = pcexport(ghandle, "P", position);
}

ohandle = pcopen(texturename, "P", P, maxdistance, maxpoints);
while (pciterate(ohandle))
{
 rval = pcimport(ohandle, "P", position);
 // 对'position'进行处理...
}

pcclose(ohandle);
pcclose(ghandle);

```
