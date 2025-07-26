---
title: bouncemask
order: 4
---
`int  bouncemask(string labels)`

`labels`

一个标签或以空格分隔的标签列表。

返回值

匹配任意标签的位掩码。

Mantra使用着色组件*标签*来区分不同类型的光线，例如"diffuse"（漫反射）、"reflect"（反射）、"refract"（折射）、"volume"（体积）和"sss"（次表面散射）。自定义BSDF除了现有标签外还可以指定自己的标签（更多信息请参阅[cvex_bsdf](/zh-cn/houdini-vex/bsdfs/cvex_bsdf "从两个CVEX着色器字符串创建bsdf对象")）。

某些VEX函数接受或返回一个*组件位掩码*，它使用整数的位来指定一个或多个这些标签的组合。

要获取与标签关联的位值，请使用[bouncemask](/zh-cn/houdini-vex/shading-and-rendering/bouncemask)，例如`bouncemask("diffuse")`。要获取匹配多个标签的掩码，请使用空格分隔的列表：

```vex
reflect_or_refract = bouncemask("reflect refract")

```

要构建匹配所有标签的位掩码，请使用`bouncemask("all")`。要匹配无标签，请使用`0`。

当您获得一个位掩码作为返回值时，可以使用`&`检查它是否匹配某个标签。例如：

```vex
mask = getbounces(mybsdf)
if (mask & bouncemask("reflect")) {
 ...
}

```

（作为`bouncemask()`基本用途的替代方案，您可以`#import "pbr.h"`并使用常量`PBR_DIFFUSE_MASK`、`PBR_REFLECT_MASK`、`PBR_REFRACT_MASK`、`PBR_VOLUME_MASK`、`PBR_SSS_MASK`，以及`PBR_ALL_MASK`和`PBR_NO_MASK`。您可以使用`|`组合这些常量，例如`reflect_or_refract = PBR_REFLECT_MASK | PBR_REFRACT_MASK`。）
