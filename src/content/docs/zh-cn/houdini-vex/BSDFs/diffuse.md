---
title: diffuse
order: 8
---
![](../_static/rendering/diffuse.png)

`bsdf  diffuse(...)`

`bsdf  diffuse(float 粗糙度, ...)`

`bsdf  diffuse(vector 法线, ...)`

`bsdf  diffuse(vector 法线, float 粗糙度, ...)`

`bsdf  diffuse(vector 法线, vector 几何法线, ...)`

`bsdf  diffuse(vector 法线, vector 几何法线, float 粗糙度, ...)`

漫反射。该BSDF的反照率为0.5。如果您的着色器或几何体具有平滑法线（N与Ng不同），则应避免使用`diffuse(vector 法线)`签名，因为它假定着色法线与几何法线匹配。

有关BSDF的信息，请参阅[编写PBR着色器](../pbr.html)。

`vector  diffuse(vector 法线, ...)`

`vector  diffuse(vector 法线, vector 视线向量, float 粗糙度, ...)`

此形式使用Oren-Nayar光照模型计算表面的漫反射照明。Oren-Nayar光照模型比Lambertian光照模型更复杂。视线向量V表示从表面指向眼睛的向量（即-normalize(I)）。当粗糙度为0时，Oren-Nayar光照模型等同于Lambertian模型。随着粗糙度向1增加，照明效果会模拟更粗糙的材料（如粘土）。Oren-Nayar形式的diffuse()比Lambertian漫反射照明更耗费计算资源。

光源包含/排除选项

## 光源包含排除选项

"`categories`",
`string`
`="*"`

通过光源的"category"标签指定要包含/排除的光源。这是首选的包含/排除光源方式，而不是使用`"lightmask"`关键字参数通过模式匹配光源名称。

例如：

```vex
diff = diffuse(nml, "lightmask", "hero | fill");

```

更多信息请参阅[光源分类](../../render/lights.html#categories)。

"`lightmask`",
`string`
`="*"`

在评估光照和阴影着色器时，对象具有预定义的光照遮罩。此遮罩通常在几何对象中指定，定义了用于照亮表面或雾着色器的光源列表。可以通过指定"lightmask"参数来覆盖默认的光照遮罩。

例如：

```vex
diff = diffuse(nml, "lightmask", "light*,^light2");

```

...将考虑所有名称以"light"开头（除了名为"light2"的光源）的光源进行漫反射照明。

支持所有Houdini作用域模式（组扩展除外）：

- `*` - 通配符匹配
- `?` - 单字符匹配
- `^` - 排除运算符
- `[list]` - 字符列表匹配
