---
title: renderstate
order: 65
---

| 本页内容 | * [实用属性](#useful-properties) * [打包图元](#packed-primitives) * [示例](#examples) | 
| --- | --- | 
| 上下文 | [着色](../contexts/shading.html) | 

`int  renderstate(string query, <type>&value)` 

`int  renderstate(string query, <type>&value[])` 

`int  renderstate(material mat, string query, <type>&value)` 

成功时返回非零值并设置value，若渲染器无法评估查询则返回`0`。 

双参数版本在当前对象上查找属性。 
若第一个参数传入`material`，则函数将在材质而非当前对象上查找属性。 

可查询的[IFD属性列表](../../props/mantra.html)请使用**IFD**名称（如`image:samples`），而非Houdini名称（如`vm_samples`）。 

实用属性 

## useful-properties 

以下为常用属性（完整列表参见[IFD属性列表](../../props/mantra.html)）： 

`image:name` 
(字符串) 正在渲染的图像名称。 

`image:pixelaspect` 
(浮点) 图像的像素宽高比(X/Y)。 

`image:resolution` 
(向量) 分辨率格式为{x_res, y_res, samples_per_pixel}。 

`image:samples` 
(向量) 采样数格式为{x_samples, y_samples, 0}。 

`image:raysamples` 
(向量) 光线追踪采样数格式为{x_samples, y_samples, 0}。 

`light:name` 
(字符串) [illuminance](/zh-cn/houdini-vex/shading-and-rendering/illuminance "遍历场景中所有光源，为每个光源调用光照着色器以设置Cl和L全局变量。")循环中当前激活的光源对象名称。 

`light:shadowscope` 
(字符串) 光源投射阴影的对象列表。 

`object:name` 
(字符串) 当前着色对象的名称（在光照/阴影着色器中有效，可查询被光源照射/投影的对象）。 

`object:reflectscope` 
(字符串) 当前着色对象的默认反射范围模式。 

`object:refractscope` 
(字符串) 当前着色对象的默认折射范围模式。 

`object:reflectlimit` 
(浮点/整型) 当前着色对象的折射反弹次数硬限制。 

`object:shadingquality` 
(浮点) 当前着色对象的着色质量。 

`object:lightmask` 
(字符串) 对象的光照遮罩字符串。 

`object:area` 
(浮点) 对象的表面积。 

`object:materialname` 
(字符串) 当前着色对象所赋材质的路径。 
注意：仅用于信息展示，不影响材质分配或外观。 

`renderer:name` 
(字符串) 渲染器名称。 

`renderer:version` 
字符串格式："主版本.次版本.构建号" 
向量格式：{主版本, 次版本, 构建号} 

`renderer:renderengine` 
(字符串) 使用的渲染方法（如`micropoly`或`raytrace`），完整值列表参见[属性列表](../../props/mantra.html)。 

`shader:name` 
(字符串) 当前运行着色器的名称。 

打包图元 

## packed-primitives 

当Mantra渲染打包图元时，几何体会在渲染前解包。这意味着打包图元上的图元属性对着色器不可用（因为这些属性不会传递到解包后的几何体）。 

解包前，Mantra会自动将图元属性转换为自定义对象属性（参见[IFD文件格式](../../render/ifd.html)中的`ray_declare`）。属性命名格式为`packed:属性名`，可通过`renderstate()`函数访问这些属性。 

示例： 

```vex 
vector Cd; 
if (!renderstate("packed:Cd", Cd)) 
 Cd = 1; // 打包几何体上没有Cd属性 
``` 

示例 

## examples 

```vex 
surface showversion() 
{ 
 string rname, rversion; 
 if (!renderstate("renderer:name", rname)) 
 rname = "未知渲染器"; 
 if (!renderstate("renderer:version", rversion)) 
 rversion = "未知版本"; 
 printf("图像由 %s (%s) 渲染\n", rname, rversion); 
} 

vector mapToScreen(vector NDC_P) 
{ 
 // 将NDC空间中的点映射到像素坐标 
 vector result; 
 if (!renderstate("image:resolution", result)) 
 result = {640, 486, 0}; 
 return result * NDC_P; 
} 
```
