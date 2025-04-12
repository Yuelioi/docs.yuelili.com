---
title: ggx
order: 11
---
| 版本 | 18.0 |
| --- | --- |

`bsdf  ggx(vector ng, vector nn, vector xg, vector yg, vector F0, vector F90, float alphax, float alphay, int masking, int fresblend, float eta, float reflect, float refract, int reflectmask, int refractmask, float dispersion, ...)`

创建用于计算GGX微表面模型的BSDF，该模型用于粗糙镜面反射和折射。

有关BSDF的更多信息，请参阅[编写PBR着色器](../pbr.html)。

`ng`

归一化的几何法线

`nn`

归一化的凹凸/着色法线

`xg`

归一化的x切线向量

`yg`

归一化的y切线向量

`F0`

斜角处的颜色色调

`F90`

掠射角处的颜色色调

`alphax`

沿x切线方向的粗糙度

`alphay`

沿y切线方向的粗糙度（对于各向同性材质使用与alphax相同的值）

`masking`

启用/禁用微表面遮蔽

`fresblend`

0 = 禁用菲涅尔，1 = 启用菲涅尔，2 = 使用临界角选择反射或折射

`eta`

折射率

`reflect`

反射的显式标量值（0->1）。或设为-1让函数根据几何信息自动决定适当值。

`refract`

折射的显式标量值（0->1）。或设为-1让函数根据几何信息自动决定适当值。

`reflectmask`

表示所需反射行为的位掩码。直接传入`bouncemask(reflectlabel)`即可

`refractmask`

表示所需折射行为的位掩码。直接传入`bouncemask(refractlabel)`即可

`dispersion`

色散量

光源包含/排除选项

## 光源包含排除选项

"`categories`",
`string`
`="*"`

通过光源的"类别"标签指定要包含/排除的光源。
这是比使用`"lightmask"`关键字参数通过模式匹配光源名称更推荐的包含/排除光源方式。

例如：

```vex
diff = diffuse(nml, "lightmask", "hero | fill");

```

更多信息请参阅[光源类别](../../render/lights.html#categories)。

"`lightmask`",
`string`
`="*"`

在评估光照和阴影着色器时，对象有预定义的光照掩码。该掩码通常在几何对象中指定，
定义了用于照亮表面或雾着色器的光源列表。可以通过指定"lightmask"参数来覆盖默认的光照掩码。

例如：

```vex
diff = diffuse(nml, "lightmask", "light*,^light2");

```

...这将使所有名称以"light"开头（除了名为"light2"的光源）的光源被考虑用于漫反射照明。

支持所有Houdini作用域模式（组扩展除外）：

- `*` - 通配符匹配
- `?` - 单字符匹配
- `^` - 排除运算符
- `[list]` - 字符列表匹配
