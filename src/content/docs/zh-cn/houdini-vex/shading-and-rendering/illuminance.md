---
title: illuminance
order: 37
---

| 本页内容 | * [概述](#概述) * [光源包含/排除选项](#光源包含排除选项) * [向光源着色器传递信息](#向光源着色器传递信息) * [消息传递](#消息传递) * [lightexport关键字参数](#lightexport关键字参数) | 
| --- | --- | 

概述 

## 概述 

// 需要缩进以确保下方包含内容不归入此标题 

```vex 
illuminance(position, [axis], [angle], [light_typemask], [lightmask]) 
{ 
 // 在此处，Cl和L将被设置为当前光源的值/方向 
 // 若要强制调用阴影着色器，请使用： 
 // shadow(Cl); 
} 
``` 

除非显式调用，否则不会执行阴影着色器。但一旦调用过阴影着色器，`Cl`的值将在表面着色器执行期间被修改。使用任何内置光照调用（如[diffuse](/zh-cn/houdini-vex/bsdfs/diffuse "返回漫反射BSDF或计算漫反射着色")、[specular](/zh-cn/houdini-vex/bsdfs/specular "返回镜面反射BSDF或计算镜面反射着色")、[ambient](/zh-cn/houdini-vex/light/ambient "返回场景中的环境光颜色")）时，系统会自动调用阴影着色器。 

轴的默认值为表面法线。角度的默认值为PI/2。光照遮罩的默认值为LIGHT_DIFFUSE|LIGHT_SPECULAR（详见shading.h中的光照定义）。  

`illuminance`语句会遍历所有满足`dot(L, axis) > cos(angle)`条件的光源。 

光源包含/排除选项 

## 光源包含排除选项 

"`categories`", 
`string` 
`="*"` 

通过光源的"category"标签指定要包含/排除的光源。 
相比使用`"lightmask"`关键字参数进行名称模式匹配，这是更推荐的包含/排除光源方式。 

例如： 

```vex 
diff = diffuse(nml, "lightmask", "hero | fill");  
``` 

更多信息请参阅[光源分类](../../render/lights.html#categories)。 

"`lightmask`", 
`string` 
`="*"` 

在评估光照和阴影着色器时，对象具有预定义的光照遮罩。该遮罩通常在几何对象中指定，用于定义照射表面或雾着色器的光源列表。可通过指定"lightmask"参数覆盖默认遮罩。 

例如： 

```vex 
diff = diffuse(nml, "lightmask", "light*,^light2"); 
``` 

这将使所有以"light"开头（除名为"light2"的光源外）的光源参与漫反射照明计算。 

支持除组扩展外的所有Houdini作用域模式： 

- `*` - 通配符匹配 
- `?` - 单字符匹配 
- `^` - 排除运算符 
- `[list]` - 字符列表匹配 

向光源着色器传递信息 

## 向光源着色器传递信息 

可为`illuminance`提供额外的字符串/值参数对，向每个光源的着色器传递命名值。例如，将变量`N`的值作为`orgN`传递： 

```vex 
illuminance (P, nf, M_PI/2, "orgN", N) { 
... 
} 
``` 

在光源着色器中，可通过[simport](/zh-cn/houdini-vex/shading-and-rendering/simport "导入表面着色器在illuminance循环中发送的变量")函数接收该值： 

```vex 
vector orgN; 
simport("orgN", orgN); 
``` 

若导入成功，`simport`函数返回1，否则返回0，因此可将其用作`if`语句的条件。 

完整示例： 

```vex 
surface 
exporter() 
{ 
vector nf = frontface(normalize(N), I); 
Cf = 0; 
illuminance(P, nf, M_PI/2, "orgN", N) 
{ 
Cf += Cl; 
} 

light 
importer() 
{ 
vector orgN; 
if (!simport("orgN", orgN)) 
orgN = N; 
// 使用原始N 
Cl = orgN; 
} 
``` 

消息传递 

## 消息传递 

在illuminance循环中，可通过[limport](/zh-cn/houdini-vex/shading-and-rendering/limport "从光源着色器导入表面变量")函数获取光源着色器的值。 

光源着色器可通过[simport](/zh-cn/houdini-vex/shading-and-rendering/simport "导入表面着色器在illuminance循环中发送的变量")函数获取传递给illuminance语句的任何"关键字"参数。 

例如，将向量变量`uv`传递给光源着色器： 

```vex 
vector uv = set(s, t, 0); 
illuminance(P, dir, "uv", uv) { ... } 
``` 

光源着色器可通过以下方式读取： 

```vex 
vector uv; 
if (simport("uv", uv)) 
printf("从表面导入: %g\n", uv); 
``` 

lightexport关键字参数 

## lightexport关键字参数 

可额外提供字符串参数`"lightexport"`，后跟包含要在循环内赋值的导出变量名称的字符串参数。 

某些着色器使用多个illuminance循环来定义不同的光照贡献。这种情况下，`lightexport`参数可用于指定应从不同循环导出哪些变量。 

`lightexport`值可以是空格分隔的通配符模式列表。例如，`illuminance(pos, dir, "lightexport", "Front*")`会导出名称以`Front`开头的变量。 

```vex 
surface 
light_export_test(export vector diff=0; 
export vector spec=0) 
{ 
vector nn = normalize(frontface(N, I)); 
vector vv = -normalize(I); 
vector clr; 

Cf = 0; 
// 此illuminance循环仅导出到"diff"变量 
illuminance(P, nn, "lightexport", "diff") 
{ 
clr = Cl * diffuseBRDF(normalize(L), nn); 
Cf += clr; 
diff = clr; 
} 
// 此illuminance循环仅导出到"spec"变量 
illuminance(P, nn, "lightexport", "spec") 
{ 
clr = Cl * specularBRDF(normalize(L), nn, vv, 0.1); 
Cf += clr; 
spec = clr; 
} 
```
