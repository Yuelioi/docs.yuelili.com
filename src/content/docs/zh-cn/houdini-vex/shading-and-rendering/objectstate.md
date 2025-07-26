---
title: objectstate
order: 55
---
| 本页内容 | * [实用属性](#useful-properties) * [打包图元](#packed-primitives) * [示例](#examples) |
| --- | --- |
| 上下文 | [着色](../contexts/shading.html) |

`int  objectstate(string query, <type>&value)`

`int  objectstate(string query, <type>&value[])`

成功时返回非零值并设置value，若渲染器无法评估查询则返回`0`。

可查询的[IFD属性列表](../../props/mantra.html)。使用**IFD**名称（如`image:samples`），而非Houdini名称（如`vm_samples`）。
实用属性

## useful-properties

以下为常用属性（完整列表见[IFD属性列表](../../props/mantra.html)）：

`image:name`

(string) 正在渲染的图像名称。

`image:pixelaspect`

(float) 图像像素宽高比(X/Y)。

`image:resolution`

(vector) 分辨率格式为{x_res, y_res, samples_per_pixel}。

`image:samples`

(vector) 采样数格式为{x_samples, y_samples, 0}。

`image:raysamples`

(vector) 光线追踪采样数格式为{x_samples, y_samples, 0}。

`light:name`

(string) [illuminance](/zh-cn/houdini-vex/shading-and-rendering/illuminance "循环遍历场景中所有光源，为每个光源调用光照着色器以设置Cl和L全局变量。")循环中当前激活的光源对象名称。

`light:shadowscope`

(string) 光源的阴影投射对象列表。

`object:name`

(string) 当前着色对象名称。在光照和阴影着色器中有效，可查询被光源照射（或投射阴影）的对象。

`object:reflectscope`

(string) 当前着色对象的默认反射范围模式。

`object:refractscope`

(string) 当前着色对象的默认折射范围模式。

`object:reflectlimit`

(float或int) 当前着色对象的折射反弹次数硬限制。

`object:shadingquality`

(float) 当前着色对象的着色质量。

`object:lightmask`

(string) 对象的光照遮罩字符串。

`object:area`

(float) 对象表面积。

`object:materialname`

(string) 当前着色对象分配材质的路径。
注意

仅用于信息展示，不影响材质分配或外观。

`renderer:name`

(string) 渲染器名称。

`renderer:version`

(string) 渲染器版本格式为"主版本.次版本.构建号"
(vector) 渲染器版本格式为{主版本, 次版本, 构建号}。

`renderer:renderengine`

(string) 使用的渲染方法，如`micropoly`或`raytrace`。
完整取值见[属性列表](../../props/mantra.html)。

`shader:name`

(string) 当前运行着色器的名称。

打包图元

## packed-primitives

当mantra渲染打包图元时，几何体会在渲染前解包。这意味着打包图元上的图元属性对着色器不可用（因为它们不会传递到解包后的几何体）。

解包前，mantra会自动将图元属性转换为自定义对象属性（参见[IFD文件格式](../../render/ifd.html)中的`ray_declare`）。属性将命名为`packed:ATTRIBNAME`（其中`ATTRIBNAME`是属性名称）。可通过`objectstate()`函数访问这些属性，与其他对象属性用法相同。

例如：

```vex
vector Cd;
if (!objectstate("packed:Cd", Cd))
 Cd = 1; // 打包几何体上没有Cd属性

```

示例

## examples

```vex
surface showversion() 
{
 string rname, rversion;
 if (!objectstate("renderer:name", rname))
 rname = "未知渲染器";
 if (!objectstate("renderer:version", rversion))
 rversion = "未知版本";
 printf("图像由 %s (%s) 渲染\n", rname, rversion);
}

vector mapToScreen(vector NDC_P)
{
 // 给定NDC空间中的点，计算其映射到的像素坐标
 vector result;
 if (!objectstate("image:resolution", result))
 result = {640, 486, 0};
 return result * NDC_P;
}

```
