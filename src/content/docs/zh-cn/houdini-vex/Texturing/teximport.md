---
title: teximport
order: 11
---
| 本页内容 | * [可查询属性](#queryable-attributes) * [示例](#examples) |
| --- | --- |

`int  teximport(string map, string attribute, <type>&value)`

读取单个值。成功返回`1`，失败返回`0`。

`int  teximport(string map, string token, int|string&values[])`

返回数组中的字符串数量。

注意：如果无法导入值，`values`将不会被写入，可能保持未初始化状态。

此函数查询存储在图像文件中的元数据，适用于大多数纹理格式。

您可以通过在相机或灯光上设置`vm_saveoptions` Houdini属性（在[IFD](../../render/ifd.html)中使用`image:saveoptions`）来选择存储哪些属性。不过默认值可能已包含您需要的所有信息。详见[渲染属性](../../props/index.html "属性让您可以设置灵活强大的渲染、着色、灯光和相机参数层级结构")。

## 可查询属性

有几个通用属性始终可以查询：

`int texture:xres`

纹理贴图的X分辨率。

`int texture:yres`

纹理贴图的Y分辨率。

`int texture:channels`

纹理贴图的通道数。

`vector texture:resolution`

纹理分辨率，向量形式为`(xres, yres, channels)`。

`matrix texture:worldtoview`

将世界空间点转换到生成图像所用相机空间的变换矩阵。

`matrix texture:projection`

代表生成图像所用相机投影矩阵的变换矩阵。

`matrix texture:worldtondc`

将世界空间点转换到生成图像所用相机的NDC（标准化设备坐标）空间的变换矩阵。点以齐次坐标形式生成。即要获得0到1范围内的值：

```vex
matrix ndc;
if (teximport(map, "texture:worldtoNDC", ndc))
{
 vector P_ndc = pos * ndc;
 // 如果是透视相机
 // 对点进行去齐次化
 if (getcomp(ndc, 2, 3) != 0)
 {
 P_ndc.x = P_ndc.x / P_ndc.z;
 P_ndc.y = P_ndc.y / P_ndc.z;
 }
 // 最后将XY从[-1,1]缩放偏移到[0,1]
 P_ndc *= {.5, .5, 1};
 P_ndc += {.5, .5, 0};
}
```

`string texture:tokens`

所有可查询属性名的空格分隔列表。

`string &values[]`版本可查询以下内容：

`texture:channelnames`

所有栅格平面通道名称列表。

`texture:channelsize`

返回每个图像通道中浮点数的数量数组。

`texture:channelstorage`

返回每个通道底层存储类型的字符串数组（如`uint8`或`real16`）。

`texture:channelcolorspace`

每个通道关联的色彩空间数组。

`texture:tokens`

`teximport()`理解的所有内置标记列表。

`string texture:device`

用于评估纹理的设备。可能值为：

- `native` - 使用Houdini内置纹理引擎评估
- `oiio` - 使用OpenImageIO评估
- `ptex` - 使用Ptex评估

`string: texture:colorspace`

纹理库默认使用的色彩空间（即未提供`srccolorspace`关键字参数时）。

`string: texture:swrap`

某些纹理格式存储的元数据提供了纹理坐标的默认包裹模式。此键将查找s方向的包裹模式元数据值（或空字符串）。

`string: texture:twrap`

某些纹理格式存储的元数据提供了纹理坐标的默认包裹模式。此键将查找t方向的包裹模式元数据值（或空字符串）。

## 示例

```vex
cvex
 test(string map="Mandril.rat")
{
 for (string token : {
 "texture:xres",
 "texture:yres",
 "texture:channels",
 "texture:resolution",
 "texture:tokens",
 "image:pixelaspect",
 "space:world"
 })
 {
 float fval;
 vector vval;
 matrix mval;

 printf("----------------- %s ---------------------\n", token);
 if (teximport(map, token, fval))
 printf("'%s' = %g\n", token, fval);
 else if (teximport(map, token, vval))
 printf("'%s' = %g\n", token, vval);
 else if (teximport(map, token, mval))
 printf("'%s' = %g\n", token, mval);
 }
}
```
