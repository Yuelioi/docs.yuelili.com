---
title: 属性组
---
# PropertyGroup 对象

`app.project.item(index).layer(index).propertyGroupSpec`

#### 描述

PropertyGroup 对象表示一组属性。它可以包含 Property 对象和其他 PropertyGroup 对象。属性组可以嵌套以提供父子层次结构，从顶部的 Layer 对象（根）到单个 Property 对象，例如第三个遮罩的遮罩羽化。要遍历组层次结构，请使用 PropertyBase 方法和属性；请参阅 [PropertyBase.propertyGroup()](../propertybase#propertybasepropertygroup)。有关如何访问属性和属性组的示例，请参阅 [PropertyBase 对象](../propertybase)。

:::info
PropertyGroup 是 [PropertyBase](../propertybase) 的子类。除了下面列出的方法和属性外，PropertyBase 的所有方法和属性在处理 PropertyGroup 时都可用。
:::

:::info
PropertyGroup 是 [Layer](../../layer/layer) 和 [MaskPropertyGroup](../maskpropertygroup) 的基类。在处理图层或遮罩组时，PropertyGroup 的属性和方法可用。
:::

---

## 属性

### PropertyGroup.numProperties

`app.project.item(index).layer(index).propertyGroupSpec.numProperties`

#### 描述

此组中索引属性的数量。

对于图层，此方法返回值为 3，对应于遮罩、效果和运动跟踪器组，这些是图层内的索引组。

然而，图层还有许多其他属性只能通过名称访问；请参阅 [PropertyGroup.property()](#propertygroupproperty)。

#### 类型

整数；只读。

---

## 函数

### PropertyGroup.addProperty()

`app.project.item(index).layer(index).propertyGroupSpec.addProperty(name)`

#### 描述

创建并返回具有指定名称的 PropertyBase 对象，并将其添加到此组中。

通常，您只能向索引组（具有 `PropertyType.INDEXED_GROUP` 类型的属性组；请参阅 [PropertyBase.propertyType](../propertybase#propertybasepropertytype)）添加属性。唯一的例外是文本动画器属性，它可以添加到命名组（具有 `PropertyType.NAMED_GROUP` 类型的属性组）。

如果此方法无法创建具有指定名称的属性，则会生成异常。

在调用此方法之前，请调用 `canAddProperty` 以检查是否可以添加特定属性到此组。（请参阅 [PropertyGroup.canAddProperty()](#propertygroupcanaddproperty)。）

:::warning
当您向索引组添加新属性时，索引组会从头开始重新创建，从而使所有现有属性引用无效。
:::

一种解决方法是使用 property.propertyIndex 存储添加属性的索引。

#### 示例

以下代码不会起作用，因为在添加颜色控制属性后，滑块对象将变为无效：

```javascript
var effectsProperty = layer.property("ADBE Effect Parade");
var slider = effectsProperty.addProperty("ADBE Slider Control");
var color = effectsProperty.addProperty("ADBE Color Control");

var sliderProperty = slider.property("ADBE Slider Control-0001"); // 对象 'slider' 无效
```

以下修订后的方法将起作用：

```javascript
var effectsProperty = layer.property("ADBE Effect Parade");
var slider = effectsProperty.addProperty("ADBE Slider Control");
var sliderIndex = slider.propertyIndex; // 存储 'slider' 效果的索引以便稍后重用
var color = effectsProperty.addProperty("ADBE Color Control");

var sliderProperty = effectsProperty.property(sliderIndex).property("ADBE Slider Control-0001");
```

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | String | 要添加的属性的显示名称或[matchName](../propertybase#propertybasematchname)。支持以下名称： |
| | | - 可以通过用户界面添加的任何属性的匹配名称。例如，`"ADBE Mask Atom`", `"ADBE Paint Atom`", `"ADBE Text Position`", `"ADBE Text Anchor Point`"。 |
| | | - 当添加到 ADBE Mask Parade 时：`"ADBE Mask Atom`", `"Mask`"。 |
| | | - 当添加到 ADBE Effect Parade 时，任何效果的匹配名称，例如 `"ADBE Bulge`", `"ADBE Glo2`", `"APC Vegas`"。 |
| | | - 任何效果的显示名称，例如 `"Bulge`", `"Glow`", `"Vegas`"。 |
| | | - 对于文本动画器，`"ADBE Text Animator`"。 |
| | | - 对于选择器，范围选择器的名称为 `"ADBE Text Selector`"，摆动选择器的名称为 `"ADBE Text Wiggly Selector`"，表达式选择器的名称为 `"ADBE Text Expressible Selector`"。 |

#### 返回

[PropertyBase 对象](../propertybase)。

---

### PropertyGroup.canAddProperty()

`app.project.item(index).layer(index).propertyGroupSpec.canAddProperty(name)`

#### 描述

如果可以将具有给定名称的属性添加到此属性组，则返回 `true`。

例如，您只能向遮罩组添加遮罩。唯一合法的输入参数是 "mask" 或 "ADBE Mask Atom"。

```javascript
maskGroup.canAddProperty("mask"); // 返回 `true`
maskGroup.canAddProperty("ADBE Mask Atom"); // 返回 `true`
maskGroup.canAddProperty("blend"); // 返回 false
```

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | String | 要检查的属性的显示名称或匹配名称。（请参阅[PropertyGroup.addProperty()](#propertygroupaddproperty)）。 |

#### 返回

布尔值。

---

### PropertyGroup.property()

`app.project.item(index).layer(index).propertyGroupSpec.property(index)`

`app.project.item(index).layer(index).propertyGroupSpec.property(name)`

#### 描述

查找并返回此组的子属性，通过其索引或名称指定。名称规范可以使用与表达式相同的语法。以下所有方式都是允许的并且等效：

```javascript
mylayer.position;
mylayer("position");
mylayer.property("position");
mylayer(1);
mylayer.property(1);
```

图层的某些属性（例如位置和缩放）只能通过名称访问。当使用名称查找多级向下的属性时，您必须多次调用此方法。

例如，以下调用搜索两级向下，并返回遮罩组中的第一个遮罩：`myLayer.property("ADBE Masks").property(1)`

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `index` | Integer | 子属性的索引，范围为 `[1..numProperties]`，如果这是一个索引组。 |
| `name` | String | 子属性的名称。可以是： |
| | | - 任何匹配名称 |
| | | - 表达式“括号样式”语法中的任何名称，即显示名称或紧凑的英文名称 |
| | | - 表达式“驼峰样式”语法中的任何名称。 |
| | | 有关支持的属性名称，请参阅下表。 |

#### 返回

[PropertyBase 对象](../propertybase) 或 `null`（如果未找到具有指定字符串名称的子属性）。

#### 可通过名称访问的属性

| 来源 | 值 |
| --- | --- |
| 来自任何图层 | -`"ADBE Mask Parade`", 或 `"Masks`" |
| | -`"ADBE Effect Parade`", 或 `"Effects`" |
| | -`"ADBE MTrackers`", 或 `"Motion Trackers`" |
| 来自 AVLayer | -`"Anchor Point`" 或 `"anchorPoint`" |
| | -`"Position`" 或 `"position`" |
| | -`"Scale`" 或 `"scale`" |
| | -`"Rotation`" 或 `"rotation`" |
| | -`"Z Rotation`" 或 `"zRotation`" 或 `"Rotation Z`" 或 `"rotationZ`" |
| | -`"Opacity`" 或 `"opacity`" |
| | -`"Marker`" 或 `"marker`" |
| 来自具有非静态源的 AVLayer | -`"Time Remap`" 或 `"timeRemapEnabled`" |
| 来自具有音频组件的 AVLayer | -`"Audio Levels`" 或 `"audioLevels`" |
| 来自摄像机图层 | -`"Zoom`" 或 `"zoom`" |
| | -`"Depth of Field`" 或 `"depthOfField`" |
| | -`"Focus Distance`" 或 `"focusDistance`" |
| | -`"Aperture`" 或 `"aperture`" |
| | -`"Blur Level`" 或 `"blurLevel`" |
| 来自灯光图层 | -`"Intensity`" 或 `"intensity`" |
| | -`"Color`" 或 `"color`" |
| | -`"Cone Angle`" 或 `"coneAngle`" |
| | -`"Cone Feather`" 或 `"coneFeather`" |
| | -`"Shadow Darkness`" 或 `"shadowDarkness`" |
| | -`"Shadow Diffusion`" 或 `"shadowDiffusion`" |
| | -`"Casts Shadows`" 或 `"castsShadows`" |
| 来自 3D 图层 | -`"Accepts Shadows`" 或 `"acceptsShadows`" |
| | -`"Accepts Lights`" 或 `"acceptsLights`" |
| | -`"Ambient`" 或 `"ambient`" |
| | -`"Diffuse`" 或 `"diffuse`" |
| | -`"Specular`" 或 `"specular`"（这些用于高光强度属性） |
| | -`"Shininess`" 或 `"shininess`"（这些用于高光光泽度属性） |
| | -`"Casts Shadows`" 或 `"castsShadows`" |
| | -`"Light Transmission`" 或 `"lightTransmission`" |
| | -`"Metal`" 或 `"metal`" |
| 来自摄像机、灯光或 3D 图层 | -`"X Rotation`" 或 `"xRotation`" 或 `"Rotation X`" 或 `"rotationX`" |
| | -`"Y Rotation`" 或 `"yRotation`" 或 `"Rotation Y`" 或 `"rotationY`" |
| | -`"Orientation`" 或 `"orientation`" |
| 来自文本图层 | -`"Source Text`" 或 `"source Text`" 或 `"Text`" 或 `"text`" |
| 来自 PropertyGroup `"ADBE Mask Parade`" | -`"ADBE Mask Atom`" |
| 来自 PropertyGroup `"ADBE Mask Atom`" | -`"ADBE Mask Shape`", 或 `"maskShape`", 或 `"maskPath`" |
| | -`"ADBE Mask Feather`", 或 `"maskFeather`" |
| | -`"ADBE Mask Opacity`", 或 `"maskOpacity`" |
| | -`"ADBE Mask Offset`", 或 `"maskOffset"` |

#### 示例

如果名为 "myLayer" 的图层具有 Box Blur 效果，您可以通过以下任何方式检索该效果：

```javascript
myLayer.property("Effects").property("Box Blur");
myLayer.property("Effects").property("boxBlur");
myLayer.property("Effects").property("ADBE Box Blur");
```

如果名为 "myLayer" 的图层具有名为 "Mask 1" 的遮罩，您可以通过以下方式检索它：

```javascript
myLayer.property("Masks").property("Mask1");
```

要从 Bulge 效果中获取 Bulge Center 值，您可以使用以下任一方式：

```javascript
myLayer.property("Effects").property("Bulge").property("Bulge Center");
myLayer.property("Effects").property("Bulge").property("bulgeCenter");
```
