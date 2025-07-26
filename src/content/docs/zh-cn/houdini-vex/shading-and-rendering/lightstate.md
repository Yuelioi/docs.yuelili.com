---
title: lightstate
order: 50
---

| 本页内容 | * [实用属性](#useful-properties) * [打包图元](#packed-primitives) * [示例](#examples) | 
| --- | --- | 
| 上下文 | [着色](../contexts/shading.html) | 

`int  lightstate(string query, <type>&value)` 

`int  lightstate(string query, <type>&value[])` 

成功时返回非零值并设置value，若渲染器无法评估查询则返回`0`。 

可查询的[IFD属性列表](../../props/mantra.html)请参考此处。使用**IFD**名称（如`image:samples`），而非Houdini名称（如`vm_samples`）。 

实用属性 

## useful-properties 

以下属性常用且为方便起见在此列出，但您可以从[完整IFD属性列表](../../props/mantra.html)查询任何属性。 

`image:name` 

(字符串) 正在渲染的图像名称。 

`image:pixelaspect` 

(浮点) 图像的像素宽高比(X/Y)。 

`image:resolution` 

(向量) 以{x_res, y_res, samples_per_pixel}格式给出分辨率。 

`image:samples` 

(向量) 以{x_samples, y_samples, 0}格式给出采样数。 

`image:raysamples` 

(向量) 以{x_samples, y_samples, 0}格式给出光线追踪采样数。 

`light:name` 

(字符串) [illuminance](/zh-cn/houdini-vex/shading-and-rendering/illuminance "遍历场景中所有光源，为每个光源调用光照着色器以设置Cl和L全局变量。")循环中当前激活的光源对象名称。 

`light:shadowscope` 

(字符串) 光源投射阴影的对象列表。 

`object:name` 

(字符串) 当前着色对象的名称。在光照和阴影着色器中有效，可用于查询光源正在照射（或投射阴影）的对象。 

`object:reflectscope` 

(字符串) 当前着色对象的默认反射作用域模式。 

`object:refractscope` 

(字符串) 当前着色对象的默认折射作用域模式。 

`object:reflectlimit` 

(浮点或整数) 当前着色对象的反射次数硬性限制。 

`object:shadingquality` 

(浮点) 当前着色对象的着色质量。 

`object:lightmask` 

(字符串) 对象的光照遮罩字符串。 

`object:area` 

(浮点) 对象的表面积。 

`object:materialname` 

(字符串) 分配给当前着色对象的材质路径。 
注意 
仅用于信息目的，不影响材质分配或外观。 

`renderer:name` 

(字符串) 渲染器名称。 

`renderer:version` 

作为字符串时，以"major.minor.build"格式给出渲染器版本 
作为向量时，以{major, minor, build}格式给出渲染器版本。 

`renderer:renderengine` 

(字符串) 使用的渲染方法，如`micropoly`或`raytrace`。 
完整可能值列表参见[属性列表](../../props/mantra.html)。 

`shader:name` 

(字符串) 当前运行着色器的名称。 

打包图元 

## packed-primitives 

当mantra渲染打包图元时，几何体会在渲染前解包。这意味着打包图元上的图元属性对着色器不可用（因为它们不会传递到解包后的几何体）。 

在解包前，mantra会自动将图元属性转换为自定义对象属性（参见[IFD文件格式](../../render/ifd.html)页面的`ray_declare`）。属性将被命名为`packed:ATTRIBNAME`（其中`ATTRIBNAME`是属性名称）。`lightstate()`函数可用于访问这些属性，就像访问其他对象属性一样。 

例如： 

```vex 
vector Cd; 
if (!lightstate("packed:Cd", Cd)) 
 Cd = 1; // 打包几何体上没有Cd属性 

``` 

示例 

## examples 

```vex 
surface showversion() 
{ 
 string rname, rversion; 
 if (!lightstate("renderer:name", rname)) 
 rname = "未知渲染器"; 
 if (!lightstate("renderer:version", rversion)) 
 rversion = "未知版本"; 
 printf("图像由 %s (%s) 渲染\n", rname, rversion); 
} 

vector mapToScreen(vector NDC_P) 
{ 
 // 给定NDC空间中的点，找出它映射到哪个像素 
 vector result; 
 if (!lightstate("image:resolution", result)) 
 result = {640, 486, 0}; 
 return result * NDC_P; 
} 

```
