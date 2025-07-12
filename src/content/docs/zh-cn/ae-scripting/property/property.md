---
title: 属性对象
---

# 属性对象

`app.project.item(index).layer(index).propertySpec`

#### 描述

Property对象包含图层特定AE属性的值、关键帧和表达式信息。AE属性是指图层中效果、遮罩或变换的可动画化值。关于如何访问属性的示例，请参阅[PropertyBase对象](../propertybase)和[PropertyGroup.property()](../propertygroup#propertygroupproperty)。

:::info
Property是[PropertyBase](../propertybase)的子类。除了下面列出的方法外，PropertyBase的所有方法和属性在操作Property时都可用。
:::

:::note
在本指南中，通常被称为"属性"的JavaScript对象被称为"属性"，以避免与After Effects中属性的定义混淆。
:::

#### 示例

获取和设置不透明度的值：

```javascript
var myProperty = myLayer.opacity;
// 不透明度的propertyValueType为OneD，存储为浮点数
myProperty.setValue(50); // 将不透明度设置为50%
// 变量myOpacity是一个浮点值
var myOpacity = myProperty.value;
```

获取和设置位置的值：

```javascript
var myProperty = myLayer.position;
// 位置的propertyValueType为ThreeD_SPATIAL，存储为3个浮点数的数组
myProperty.setValue([10.0, 30.0, 0.0]);
// 变量myPosition是一个包含3个浮点数的数组
var myPosition = myProperty.value;
```

将遮罩形状的值更改为开放而非闭合：

```javascript
var myMask = mylayer.mask(1);
var myProperty = myMask.maskPath;
myShape = myProperty.value;
myShape.closed = false;
myProperty.setValue(myShape);
```

获取特定时间的颜色值。颜色存储为四个浮点数的数组`[r, g, b, opacity]`。这将时间4处灯光颜色的红色分量设置为时间2处的一半：

```javascript
var myProperty = myLight.color;
var colorValue = myProperty.valueAtTime(2, true);
colorValue[0] = 0.5 * colorValue[0];
myProperty.setValueAtTime(4, colorValue);
```

检查表达式在时间3.5处计算的缩放是否为预期值[10,50]：

```javascript
var myProperty = myLayer.scale;
// preExpression的false值表示评估表达式
var scaleValue = myProperty.valueAtTime(3.5, false);

if (scaleValue[0] === 10 && scaleValue[1] === 50) {
 alert("hurray");
} else {
 alert("oops");
}
```

将旋转从0关键帧到90再回到0。动画持续10秒，中间关键帧在5秒处。旋转属性存储为OneD值：

```javascript
var myProperty = myLayer.rotation;
myProperty.setValueAtTime(0, 0);
myProperty.setValueAtTime(5, 90);
myProperty.setValueAtTime(10, 0);
```

更改某些源文本前三个关键帧的值：

```javascript
var myProperty = myTextLayer.sourceText;
if (myProperty.numKeys < 3) {
 alert("error, I thought there were 3 keyframes");
} else {
 myProperty.setValueAtKey(1, newTextDocument("keynumber1"));
 myProperty.setValueAtKey(2, newTextDocument("keynumber2"));
 myProperty.setValueAtKey(3, newTextDocument("keynumber3"));
}
```

使用位置、缩放、颜色或源文本的便捷语法设置值：

```javascript
// 这两者是等价的。第二个填充默认值0。
myLayer.position.setValue([20, 30, 0]);
myLayer.position.setValue([20, 30]);
// 这两者是等价的。第二个填充默认值100。
myLayer.scale.setValue([50, 50, 100]);
myLayer.scale.setValue([50, 50]);
// 这两者是等价的。第二个填充默认值1.0
myLight.color.setValue([0.8, 0.3, 0.1, 1.0]);
myLight.color.setValue([0.8, 0.3, 0.1]);
// 这两者是等价的。第二个创建一个TextDocument
myTextLayer.sourceText.setValue(newTextDocument("foo"));
myTextLayer.sourceText.setValue("foo");
```

---

## 属性

### Property.alternateSource

`app.project.item(index).layer(index).propertySpec.alternateSource`

:::note
此功能在After Effects 18.0（2021）中添加
:::

#### 描述

当以下情况时，值为`null`：

- 未为关联图层设置备用源。
- 该属性不能用于设置备用源。

使用[Property.canSetAlternateSource](#propertycansetalternatesource)确定该属性是否为媒体替换基本属性。

所有媒体替换图层都有一个可以设置的备用源项。

当图层被添加到基本图形面板时，图层被"标记"为媒体替换（参见[AVLayer.addToMotionGraphicsTemplate()](../../layer/avlayer#avlayeraddtomotiongraphicstemplate)或[AVLayer.addToMotionGraphicsTemplateAs()](../../layer/avlayer#avlayeraddtomotiongraphicstemplateas)）。

- 如果存在，渲染工作流将在渲染图层时选择备用源。
- 如果未设置图层的备用源，则使用媒体替换控件的源图层进行渲染（这是正常的工作流）。

使用[Property.setAlternateSource()](#propertysetalternatesource)更改值。

#### 类型

AVItem对象；只读。

---

### Property.canSetAlternateSource

`app.project.item(index).layer(index).propertySpec.canSetAlternateSource`

:::note
此功能在After Effects 18.0（2021）中添加
:::

#### 描述

测试该属性是否为支持媒体替换的基本属性。

如果该属性允许媒体替换，则返回`true`，否则返回`false`。

#### 类型

布尔值；只读。

---

### Property.canSetExpression

`app.project.item(index).layer(index).propertySpec.canSetExpression`

#### 描述

当为`true`时，命名属性的类型可以通过脚本设置其表达式。另请参阅[Property expression](#propertyexpression)属性。

#### 类型

布尔值；只读。

---

### Property.canVaryOverTime

`app.project.item(index).layer(index).propertySpec.canVaryOverTime`

#### 描述

当为`true`时，命名属性可以随时间变化——即可以为此属性写入关键帧值或表达式。

#### 类型

布尔值；只读。

---

### Property.dimensionsSeparated

`app.project.item(index).layer(index).propertySpec.dimensionsSeparated`

#### 描述

当为`true`时，属性的维度表示为单独的属性。例如，如果图层的位置在时间轴面板中表示为X位置和Y位置属性，则位置属性将此属性设置为`true`。

:::tip
此属性仅当[isSeparationLeader](#propertyisseparationleader)属性为`true`时适用。
:::

#### 类型

布尔值；读/写。

---

### Property.essentialPropertySource

`app.project.item(index).layer(index).essentialProperty.property(index).essentialPropertySource`

:::note
此功能在After Effects 22.0（2022）中添加
:::

#### 描述

基本属性对象上的实例属性，返回用于创建基本属性的原始源属性。

#### 类型

可以是：

- 读/写[Property对象](#property-object)，如果用于创建基本属性的源对象是Property
- 读/写[AVLayer对象](../../layer/avlayer)，如果用于创建基本属性的源对象是媒体替换素材项
- 如果在非基本属性上调用，则为`null`

#### 示例

```javascript
var firstComp = app.project.item(1);
var opacityProp = firstComp.layer(1).property("Transform").property("Opacity");

opacityProp.addToMotionGraphicsTemplate(firstComp);

var secondComp = app.project.item(2);
secondComp.layers.add(firstComp);

var essentialOpacity = secondComp.layer(1).essentialProperty.property(1);
if (essentialOpacity.essentialPropertySource == opacityProp) {
 alert("You can get the source Property from an Essential Property!");
}
```

---

### Property.expression

`app.project.item(index).layer(index).propertySpec.expression`

#### 描述

命名属性的表达式。仅当命名属性的[canSetExpression](#propertycansetexpression)为`true`时可写。当您为此属性指定值时，字符串会被评估。

- 如果字符串包含有效表达式，[expressionEnabled](#propertyexpressionenabled)变为true。
- 如果字符串不包含有效表达式，会生成错误，且[expressionEnabled](#propertyexpressionenabled)变为`false`。
- 如果将属性设置为空字符串，[expressionEnabled](#propertyexpressionenabled)变为`false`，但不会生成错误。

#### 类型

字符串；如果命名属性的[canSetExpression](#propertycansetexpression)为`true`，则可读/写。

---

### Property.expressionEnabled

`app.project.item(index).layer(index).propertySpec.expressionEnabled`

#### 描述

当为`true`时，命名属性使用其关联的表达式生成值。当为`false`时，使用属性的关键帧信息或静态值。仅当命名属性的[canSetExpression](#propertycansetexpression)为`true`且[expression](#propertyexpression)包含有效表达式字符串时，才能将此属性设置为`true`。

#### 类型

布尔值；读/写。

---

### Property.expressionError

`app.project.item(index).layer(index).propertySpec.expressionError`

#### 描述

包含最近在[expression](#propertyexpression)中设置的字符串评估生成的错误（如果有）。如果未指定表达式字符串，或如果最后一个表达式字符串评估无误，则包含空字符串`("")`。

#### 类型

字符串；只读。

---

### Property.hasMax

`app.project.item(index).layer(index).propertySpec.hasMax`

#### 描述

当为`true`时，命名属性有允许的最大值；否则为`false`。

#### 类型

布尔值；只读。

---

### Property.hasMin

`app.project.item(index).layer(index).propertySpec.hasMin`

#### 描述

当为`true`时，命名属性有允许的最小值；否则为`false`。

#### 类型

布尔值；只读。

---

### Property.isDropdownEffect

`app.project.item(index).layer(index).propertySpec.isDropdownEffect`

:::note
此功能在After Effects 17.0.1（2020）中添加
:::

#### 描述

当为`true`时，该属性是下拉菜单控制效果的菜单属性，并且可以使用[setPropertyParameters](#propertysetpropertyparameters)更新其项目。

#### 示例

```javascript
appliedEffect.property("Menu").isDropdownEffect; // true
appliedEffect.property("Color").isDropdownEffect; // false
appliedEffect.property("Feather").isDropdownEffect; // false
```

#### 类型

布尔值；只读。

---

### Property.isSeparationFollower

`app.project.item(index).layer(index).propertySpec.isSeparationFollower`

#### 描述

当为`true`时，该属性表示多维属性的其中一个分离维度。例如，X位置属性将此属性设置为`true`。

:::tip
原始的多维属性是"分离领导者"，新的分离的单维属性是其"分离跟随者"。
:::

#### 类型

布尔值；只读。

---

### Property.isSeparationLeader

`app.project.item(index).layer(index).propertySpec.isSeparationLeader`

#### 描述

当为`true`时，该属性是多维的且可以分离。例如，位置属性将此属性设置为`true`。

:::tip
原始的多维属性是"分离领导者"，新的分离的单维属性是其"分离跟随者"。
:::

#### 类型

布尔值；只读。

---

### Property.isSpatial

`app.project.item(index).layer(index).propertySpec.isSpatial`

#### 描述

当为`true`时，命名属性定义空间值。例如位置和效果点控制。

#### 类型

布尔值；只读。

---

### Property.isTimeVarying

`app.project.item(index).layer(index).propertySpec.isTimeVarying`

#### 描述

当为`true`时，命名属性随时间变化——即它具有关键帧或启用的表达式。当此属性为`true`时，属性`canVaryOverTime`也必须为true。

#### 类型

布尔值；只读。

---

### Property.maxValue

`app.project.item(index).layer(index).propertySpec.maxValue`

#### 描述

命名属性的允许最大值。如果`hasMax`属性为`false`，则会发生异常并生成错误。

#### 类型

浮点值；只读。

---

### Property.minValue

`app.project.item(index).layer(index).propertySpec.minValue`

#### 描述

命名属性的允许最小值。如果`hasMin`属性为`false`，则会发生异常并生成错误。

#### 类型

浮点值；只读。

---

### Property.numKeys

`app.project.item(index).layer(index).propertySpec.numKeys`

#### 描述

命名属性中的关键帧数量。如果值为0，则该属性未被关键帧化。

#### 类型

整数；只读。

---

### Property.propertyIndex

`app.project.item(index).layer(index).propertySpec.propertyIndex`

#### 描述

命名属性的位置索引。第一个属性位于索引位置1。

#### 类型

整数；只读。

---

### Property.propertyValueType

`app.project.item(index).layer(index).propertySpec.propertyValueType`

#### 描述

命名属性中存储的值的类型。`PropertyValueType`枚举为可以存储在属性中或从属性中检索的每种数据类型都有一个值。每种类型的数据以不同的结构存储和检索。所有属性对象都根据这些类别之一存储数据。例如，3D空间属性（如图层的位置）存储为三个浮点值的数组。设置位置值时，传入这样的数组，如下所示：`mylayer.property("position").setValue([10, 20, 0]);`

相比之下，形状属性（如图层的遮罩形状）存储为Shape对象。设置形状值时，传入Shape对象，如下所示：

```javascript
var myShape = new Shape();
myShape.vertices = [[0,0], [0,100], [100,100], [100,0]];
var myMask = mylayer.property("ADBE Mask Parade").property(1);
myMask.property("ADBE Mask Shape").setValue(myShape);
```

#### 类型

`PropertyValueType`枚举值；读/写。其中之一：

- `PropertyValueType.NO_VALUE`：不存储数据。
- `PropertyValueType.ThreeD_SPATIAL`：三个浮点位置值的数组。例如，锚点值可能是[10.0, 20.2, 0.0]
- `PropertyValueType.ThreeD`：三个浮点定量值的数组。例如，缩放值可能是[100.0, 20.2, 0.0]
- `PropertyValueType.TwoD_SPATIAL`：两个浮点位置值的数组。例如，锚点值可能是[5.1, 10.0]
- `PropertyValueType.TwoD`：两个浮点定量值的数组。例如，缩放值可能是[5.1, 100.0]
- `PropertyValueType.OneD`：一个浮点值。
- `PropertyValueType.COLOR`：四个浮点值的数组，范围在`[0.0..1.0]`。例如，[0.8, 0.3, 0.1, 1.0]
- `PropertyValueType.CUSTOM_VALUE`：自定义属性值，如Levels效果的Histogram属性。
- `PropertyValueType.MARKER`：[MarkerValue对象](../../other/markervalue)
- `PropertyValueType.LAYER_INDEX`：整数；值为0表示无图层。
- `PropertyValueType.MASK_INDEX`：整数；值为0表示无遮罩。
- `PropertyValueType.SHAPE`：[Shape对象](../../other/shape)
- `PropertyValueType.TEXT_DOCUMENT`：[TextDocument对象](../../text/textdocument)

---

### Property.selectedKeys

`app.project.item(index).layer(index).propertySpec.selectedKeys`

#### 描述

命名属性中所有选定关键帧的索引。如果未选择关键帧，或属性没有关键帧，则返回空数组。

#### 类型

整数数组；只读。

---

### Property.separationDimension

`app.project.item(index).layer(index).propertySpec.separationDimension`

#### 描述

对于分离的跟随者，表示其在多维领导者中的维度编号。第一个维度从0开始。例如，Y位置属性的`separationDimension`值为1；X位置属性的值为0。

#### 类型

整数；只读。

---

### Property.separationLeader

`app.project.item(index).layer(index).propertySpec.separationLeader`

#### 描述

此分离跟随者的原始多维属性。例如，如果当前属性是Y位置，则此属性的值指向位置属性。

:::tip
原始的多维属性是"分离领导者"，新的分离的单维属性是其"分离跟随者"。
:::

#### 类型

Property对象；只读。

---

### Property.unitsText

`app.project.item(index).layer(index).propertySpec.unitsText`

#### 描述

值所表示单位的文本描述。

#### 类型

字符串；只读。

---

### Property.value

`app.project.item(index).layer(index).propertySpec.value`

#### 描述

当前时间命名属性的值。

- 如果`expressionEnabled`为`true`，返回评估的表达式值。
- 如果有关键帧，返回当前时间的关键帧值。
- 否则，返回静态值。

返回的值的类型取决于属性值类型。参见[Property对象的示例](#examples)。

#### 类型

适合属性类型的值（参见[Property.propertyValueType](#propertypropertyvaluetype)）；只读。

---

## 方法

### Property.addKey()

`app.project.item(index).layer(index).propertySpec.addKey(time)`

#### 描述

在指定时间向命名属性添加新的关键帧或标记，并返回新关键帧的索引。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `time` | 浮点数值 | 添加关键帧的时间（以秒为单位）。合成开始时间为0。 |

#### 返回值

整数；新关键帧或标记的索引。

---

### Property.addToMotionGraphicsTemplate()

`app.project.item(index).layer(index).propertySpec.addToMotionGraphicsTemplate(comp)`

:::note
此功能在 After Effects 15.0 (CC 2018) 中新增
:::

#### 描述

将属性添加到指定合成的基本图形面板中。

如果属性成功添加则返回 `true`，否则返回 `false`。

如果属性未被添加，可能是因为它不是受支持的属性类型，或该属性已添加到该合成的EGP中。如果属性无法添加到EGP，After Effects 将显示警告对话框。

使用 [Property.canAddToMotionGraphicsTemplate()](#propertycanaddtomotiongraphicstemplate) 方法测试属性是否可以添加到动态图形模板。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `comp` | [CompItem](../../item/compitem) | 要添加属性的目标合成。 |

#### 返回值

布尔值。

---

### Property.addToMotionGraphicsTemplateAs()

`app.project.item(index).layer(index).propertySpec.addToMotionGraphicsTemplateAs(comp, name)`

:::note
此功能在 After Effects 16.1 (CC 2019) 中新增
:::

#### 描述

将属性添加到指定合成的基本图形面板中，并可自定义EGP属性名称。

如果属性成功添加则返回 `true`，否则返回 `false`。

如果属性未被添加，可能是因为它不是受支持的属性类型，或该属性已添加到该合成的EGP中。如果属性无法添加到EGP，After Effects 将显示警告对话框。

使用 [Property.canAddToMotionGraphicsTemplate()](#propertycanaddtomotiongraphicstemplate) 方法测试属性是否可以添加到动态图形模板。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `comp` | [CompItem](../../item/compitem) | 要添加属性的目标合成。 |
| `name` | 字符串 | 新名称。 |

#### 返回值

布尔值。

---

### Property.canAddToMotionGraphicsTemplate()

`app.project.item(index).layer(index).propertySpec.canAddToMotionGraphicsTemplate(comp)`

:::note
此功能在 After Effects 15.0 (CC 2018) 中新增
:::

#### 描述

测试属性是否可以添加到指定合成的基本图形面板中。

如果可以添加则返回 `true`，否则返回 `false`。

如果属性无法添加，可能是因为它不是受支持的属性类型，或该属性已添加到该合成的EGP中。如果属性无法添加到EGP，After Effects 将显示警告对话框。

支持的属性类型包括：

- 复选框
- 颜色
- 数值滑块（即单值数值属性，如变换 > 不透明度或滑块控制表达式控制效果）
- 源文本

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `comp` | [CompItem](../../item/compitem) | 要添加属性的目标合成。 |

#### 返回值

布尔值。

---

### Property.getSeparationFollower()

`app.project.item(index).layer(index).propertySpec.getSeparationFollower(dim)`

#### 描述

对于已分离的多维属性，检索特定的跟随属性。例如，可以在位置属性上使用此方法来访问分离的X位置和Y位置属性。

:::tip
此属性仅在 [isSeparationLeader](#propertyisseparationleader) 属性为 `true` 时适用。
:::

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `dim` | 整数 | 维度编号（从0开始）。 |

#### 返回值

属性对象，如果属性不是多维或没有指定维度则返回错误。

---

### Property.isInterpolationTypeValid()

`app.project.item(index).layer(index).propertySpec.isInterpolationTypeValid(type)`

#### 描述

如果命名属性可以使用指定的关键帧插值类型进行插值，则返回 `true`。

#### 参数

#### 类型

`KeyframeInterpolationType` 枚举值；可选：

- `KeyframeInterpolationType.LINEAR`
- `KeyframeInterpolationType.BEZIER`
- `KeyframeInterpolationType.HOLD`

#### 返回值

布尔值。

---

### Property.keyInInterpolationType()

`app.project.item(index).layer(index).propertySpec.keyInInterpolationType(keyIndex)`

#### 描述

返回指定关键帧的"入"插值类型。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `keyIndex` | 整数，范围 `[1..numKeys]` | 关键帧索引，由 [addKey](#propertyaddkey) 或 [nearestKeyIndex](#propertynearestkeyindex) 返回。 |

#### 返回值

`KeyframeInterpolationType` 枚举值；可选：

- `KeyframeInterpolationType.LINEAR`
- `KeyframeInterpolationType.BEZIER`
- `KeyframeInterpolationType.HOLD`

---

### Property.keyInSpatialTangent()

`app.project.item(index).layer(index).propertySpec.keyInSpatialTangent(keyIndex)`

#### 描述

如果命名属性是空间属性（即值类型为 `TwoD_SPATIAL` 或 `ThreeD_SPATIAL`），则返回指定关键帧的传入空间切线。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `keyIndex` | 整数，范围 `[1..numKeys]` | 关键帧索引，由 [addKey](#propertyaddkey) 或 [nearestKeyIndex](#propertynearestkeyindex) 返回。 |

#### 返回值

浮点值数组：

- 如果属性值类型为 `PropertyValueType.TwoD_SPATIAL`，数组包含2个浮点值。
- 如果属性值类型为 `PropertyValueType.ThreeD_SPATIAL`，数组包含3个浮点值。
- 如果属性值类型不是上述类型，则生成异常。

---

### Property.keyInTemporalEase()

`app.project.item(index).layer(index).propertySpec.keyInTemporalEase(keyIndex)`

#### 描述

返回指定关键帧的传入时间缓动。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `keyIndex` | 整数，范围 `[1..numKeys]` | 关键帧索引，由 [addKey](#propertyaddkey) 或 [nearestKeyIndex](#propertynearestkeyindex) 返回。 |

#### 返回值

[KeyframeEase 对象](../../other/keyframeease) 数组：

- 如果属性值类型为 `PropertyValueType.TwoD`，数组包含2个对象。
- 如果属性值类型为 `PropertyValueType.ThreeD`，数组包含3个对象。
- 对于其他值类型，数组包含1个对象。

---

### Property.keyLabel()

`app.project.item(index).layer(index).propertySpec.keyLabel(keyIndex)`

:::note
此功能在 After Effects 22.6 中新增
:::

#### 描述

关键帧的标签颜色。颜色用数字表示（0表示无颜色，1到16表示标签首选项中预设颜色之一）。

只读。关键帧颜色标签可以通过 [setLabelAtKey](#propertysetlabelatkey) 设置。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `keyIndex` | 整数，范围 `[1..numKeys]` | 关键帧索引，由 [addKey](#propertyaddkey) 或 [nearestKeyIndex](#propertynearestkeyindex) 返回。 |

#### 返回值

整数（0到16）；只读。

---

### Property.keyOutInterpolationType()

`app.project.item(index).layer(index).propertySpec.keyOutInterpolationType(keyIndex)`

#### 描述

返回指定关键帧的"出"插值类型。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `keyIndex` | 整数，范围 `[1..numKeys]` | 关键帧索引，由 [addKey](#propertyaddkey) 或 [nearestKeyIndex](#propertynearestkeyindex) 返回。 |

#### 返回值

`KeyframeInterpolationType` 枚举值；可选：

- `KeyframeInterpolationType.LINEAR`
- `KeyframeInterpolationType.BEZIER`
- `KeyframeInterpolationType.HOLD`

---

### Property.keyOutSpatialTangent()

`app.project.item(index).layer(index).propertySpec.keyOutSpatialTangent(keyIndex)`

#### 描述

返回指定关键帧的传出空间切线。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `keyIndex` | 整数，范围 `[1..numKeys]` | 关键帧索引，由 [addKey](#propertyaddkey) 或 [nearestKeyIndex](#propertynearestkeyindex) 返回。 |

#### 返回值

浮点值数组：

- 如果属性值类型为 `PropertyValueType.TwoD_SPATIAL`，数组包含2个浮点值。
- 如果属性值类型为 `PropertyValueType.ThreeD_SPATIAL`，数组包含3个浮点值。
- 如果属性值类型不是上述类型，则生成异常。

---

### Property.keyOutTemporalEase()

`app.project.item(index).layer(index).propertySpec.keyOutTemporalEase(keyIndex)`

#### 描述

返回指定关键帧的传出时间缓动。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `keyIndex` | 整数，范围 `[1..numKeys]` | 关键帧索引，由 [addKey](#propertyaddkey) 或 [nearestKeyIndex](#propertynearestkeyindex) 返回。 |

#### 返回值

KeyframeEase 对象数组：

- 如果属性值类型为 `PropertyValueType.TwoD`，数组包含2个对象。
- 如果属性值类型为 `PropertyValueType.ThreeD`，数组包含3个对象。
- 对于其他值类型，数组包含1个对象。

---

### Property.keyRoving()

`app.project.item(index).layer(index).propertySpec.keyRoving(keyIndex)`

#### 描述

如果指定关键帧处于浮动状态则返回`true`。属性中的第一个和最后一个关键帧不能浮动；如果尝试为这些关键帧设置浮动，操作将被忽略，且keyRoving()继续返回`false`。如果属性值类型既不是`TwoD_SPATIAL`也不是`ThreeD_SPATIAL`，则会抛出异常。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `keyIndex` | 整数，范围`[1..numKeys]` | 关键帧索引，由[addKey](#propertyaddkey)或[nearestKeyIndex](#propertynearestkeyindex)返回。 |

#### 返回值

布尔值。

---

### Property.keySelected()

`app.project.item(index).layer(index).propertySpec.keySelected(keyIndex)`

#### 描述

如果指定关键帧被选中则返回`true`。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `keyIndex` | 整数，范围`[1..numKeys]` | 关键帧索引，由[addKey](#propertyaddkey)或[nearestKeyIndex](#propertynearestkeyindex)返回。 |

#### 返回值

布尔值。

---

### Property.keySpatialAutoBezier()

`app.project.item(index).layer(index).propertySpec.keySpatialAutoBezier(keyIndex)`

#### 描述

如果指定关键帧具有空间自动贝塞尔插值则返回`true`。（仅当`keySpatialContinuous(keyIndex)`也为true时，此插值类型才会影响此关键帧。）如果属性值类型既不是`TwoD_SPATIAL`也不是`ThreeD_SPATIAL`，则会抛出异常。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `keyIndex` | 整数，范围`[1..numKeys]` | 关键帧索引，由[addKey](#propertyaddkey)或[nearestKeyIndex](#propertynearestkeyindex)返回。 |

#### 返回值

布尔值。

---

### Property.keySpatialContinuous()

`app.project.item(index).layer(index).propertySpec.keySpatialContinuous(keyIndex)`

#### 描述

如果指定关键帧具有空间连续性则返回`true`。如果属性值类型既不是`TwoD_SPATIAL`也不是`ThreeD_SPATIAL`，则会抛出异常。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `keyIndex` | 整数，范围`[1..numKeys]` | 关键帧索引，由[addKey](#propertyaddkey)或[nearestKeyIndex](#propertynearestkeyindex)返回。 |

#### 返回值

布尔值。

---

### Property.keyTemporalAutoBezier()

`app.project.item(index).layer(index).propertySpec.keyTemporalAutoBezier(keyIndex)`

#### 描述

如果指定关键帧具有时间自动贝塞尔插值则返回`true`。仅当关键帧插值类型对`keyInInterpolationType(keyIndex)`和`keyOutInterpolationType(keyIndex)`都是`KeyframeInterpolationType.BEZIER`时，时间自动贝塞尔插值才会影响此关键帧。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `keyIndex` | 整数，范围`[1..numKeys]` | 关键帧索引，由[addKey](#propertyaddkey)或[nearestKeyIndex](#propertynearestkeyindex)返回。 |

#### 返回值

布尔值。

---

### Property.keyTemporalContinuous()

`app.project.item(index).layer(index).propertySpec.keyTemporalContinuous(keyIndex)`

#### 描述

如果指定关键帧具有时间连续性则返回`true`。仅当关键帧插值类型对`keyInInterpolationType(keyIndex)`和`keyOutInterpolationType(keyIndex)`都是`KeyframeInterpolationType.BEZIER`时，时间连续性才会影响此关键帧。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `keyIndex` | 整数，范围`[1..numKeys]` | 关键帧索引，由[addKey](#propertyaddkey)或[nearestKeyIndex](#propertynearestkeyindex)返回。 |

#### 返回值

布尔值。

---

### Property.keyTime()

`app.project.item(index).layer(index).propertySpec.keyTime(keyIndex)`
`app.project.item(index).layer(index).propertySpec.keyTime(markerComment)`

#### 描述

查找指定的关键帧或标记并返回其出现的时间。如果找不到与参数匹配的关键帧或标记，此方法会抛出异常并显示错误。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `keyIndex` | 整数，范围`[1..numKeys]` | 关键帧索引，由[addKey](#propertyaddkey)或[nearestKeyIndex](#propertynearestkeyindex)返回。 |
| `markerComment` | 字符串 | 附加到标记的注释（参见[MarkerValue.comment](../../other/markervalue#markervaluecomment)属性）。 |

#### 返回值

浮点数值。

---

### Property.keyValue()

`app.project.item(index).layer(index).propertySpec.keyValue(keyIndex)`

`app.project.item(index).layer(index).propertySpec.keyValue(markerComment)`

#### 描述

查找指定的关键帧或标记并返回其当前值。如果找不到与参数匹配的关键帧或标记，此方法会抛出异常并显示错误。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `keyIndex` | 整数，范围`[1..numKeys]` | 关键帧索引，由[addKey](#propertyaddkey)或[nearestKeyIndex](#propertynearestkeyindex)返回。 |
| `markerComment` | 字符串 | 附加到标记的注释（参见[MarkerValue.comment](../../other/markervalue#markervaluecomment)属性）。 |

#### 返回值

返回与[PropertyValueType](#propertypropertyvaluetype)对应的类型的值。

---

### Property.nearestKeyIndex()

`app.project.item(index).layer(index).propertySpec.nearestKeyIndex(time)`

#### 描述

返回最接近指定时间的关键帧索引。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `time` | 浮点数值 | 时间，以秒为单位。合成的开始为0。 |

#### 返回值

整数。

---

### Property.removeKey()

`app.project.item(index).layer(index).propertySpec.removeKey(keyIndex)`

#### 描述

从指定属性中移除指定的关键帧。如果不存在具有指定索引的关键帧，则抛出异常并显示错误。移除关键帧后，剩余的索引号会发生变化。要移除多个关键帧，必须从最高索引号开始，逐步向下移除最低索引号，以确保每次移除后剩余的索引仍引用相同的关键帧。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `keyIndex` | 整数，范围`[1..numKeys]` | 关键帧索引，由[addKey](#propertyaddkey)或[nearestKeyIndex](#propertynearestkeyindex)返回。 |

#### 返回值

无。

---

### Property.setAlternateSource()

`app.project.item(index).layer(index).propertySpec.setAlternateSource(newSource)`

:::note
此功能在After Effects 18.0 (2021)中添加
:::

#### 描述

设置此属性的备用源。

Property对象和被调用的AVItem的输入参数需要兼容媒体替换才能使操作通过。

- 使用[AVItem.isMediaReplacementCompatible](../../item/avitem#avitemismediareplacementcompatible)方法测试AVItem是否可用作媒体替换的备用源。
- 使用[Property.canSetAlternateSource](#propertycansetalternatesource)测试属性是否允许媒体替换。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `newSource` | [AVItem对象](../../item/avitem) | 新的源AVItem。 |

#### 返回值

无。

---

### Property.setInterpolationTypeAtKey()

`app.project.item(index).layer(index).propertySpec.setInterpolationTypeAtKey(keyIndex, inType[, outType])`

#### 描述

设置指定关键帧的`in`和`out`插值类型。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `keyIndex` | 整数 | 关键帧索引，范围`[1..numKeys]`，由[addKey](#propertyaddkey)或[nearestKeyIndex](#propertynearestkeyindex)返回。 |
| `inType` | `KeyframeInterpolationType`枚举 | 传入插值类型。可选值： |
| | | - `KeyframeInterpolationType.LINEAR` |
| | | - `KeyframeInterpolationType.BEZIER` |
| | | - `KeyframeInterpolationType.HOLD` |
| `outType` | `KeyframeInterpolationType`枚举 | 可选。传出插值类型。如果未提供，则'out'类型设置为`inType`值。可选值： |
| | | - `KeyframeInterpolationType.LINEAR` |
| | | - `KeyframeInterpolationType.BEZIER` |
| | | - `KeyframeInterpolationType.HOLD` |

#### 返回值

无。

---

### Property.setLabelAtKey()

`app.project.item(index).layer(index).propertySpec.setLabelAtKey(keyIndex, labelIndex)`

:::note
此功能在After Effects 22.6 (2022)中添加
:::

#### 描述

设置关键帧的标签颜色。颜色由其编号表示（0表示无颜色，1到16表示标签首选项中的预设颜色之一）。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `keyIndex` | 整数，范围`[1..numKeys]` | 关键帧索引，由[addKey](#propertyaddkey)或[nearestKeyIndex](#propertynearestkeyindex)返回。 |
| `labelIndex` | 整数，范围`[0..16]` | 新标签值的索引。 |

#### 返回值

无。

---

### Property.setPropertyParameters()

`app.project.item(index).layer(index).propertySpec.setPropertyParameters(items)`

:::note
此功能在After Effects 17.0.1 (2020)中添加
:::

#### 描述

设置下拉菜单控件的菜单属性的参数。此方法将用提供的字符串数组覆盖现有的菜单项集。

- 下拉菜单控件效果的菜单属性是唯一允许设置参数的属性。
- 要检查属性是否允许设置参数，请在调用此方法之前使用[isDropdownEffect](#propertyisdropdowneffect)进行检查。
- 此方法失败时会抛出异常。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `items` | 字符串数组 | 将替换下拉菜单控件中现有菜单项的值。 |
| | | - 仅允许字符串。 |
| | | - 不允许空项目字符串。 |
| | | - 不允许重复的项目字符串。 |
| | | - 项目字符串中不允许字符`"\"`。 |
| | | - 可以将字符串`"(-"`指定为项目字符串之一，以在下拉菜单中创建分隔线。分隔线将各自占用一个索引。 |

:::tip

例如：在英文系统上运行脚本时指定日文项目字符串将创建一个下拉效果，其项目字符串中包含无法识别的字符。
:::

#### 示例

```javascript
var dropdownItems = [
 "第一个项目",
 "第二个项目",
 "(-",
 "另一个项目",
 "最后一个项目"
];

var dropdownEffect = layer.property("ADBE Effect Parade").addProperty("ADBE Dropdown Control");
dropdownEffect.property(1).setPropertyParameters(dropdownItems);
```

#### 返回值

Property对象，更新后的下拉菜单控件的菜单属性。

---

### Property.setRovingAtKey()

`app.project.item(index).layer(index).propertySpec.setRovingAtKey(keyIndex, newVal)`

#### 描述

为指定关键帧开启或关闭浮动状态。属性中的第一个和最后一个关键帧不能浮动；如果尝试为这些关键帧设置浮动，操作将被忽略，且`keyRoving()`继续返回`false`。如果属性值类型既不是`TwoD_SPATIAL`也不是`ThreeD_SPATIAL`，则会抛出异常。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `keyIndex` | 整数，范围`[1..numKeys]` | 关键帧索引，由[addKey](#propertyaddkey)或[nearestKeyIndex](#propertynearestkeyindex)返回。 |
| `newVal` | 布尔值 | `true`开启浮动，`false`关闭浮动。 |

#### 返回值

无。

### Property.setSelectedAtKey()

`app.project.item(index).layer(index).propertySpec.setSelectedAtKey(keyIndex, onOff)`

#### 描述

选中或取消选中指定的关键帧。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `keyIndex` | 整数，范围在 `[1..numKeys]` 之间 | 关键帧的索引，由 [addKey](#propertyaddkey) 或 [nearestKeyIndex](#propertynearestkeyindex) 返回。 |
| `onOff` | 布尔值 | `true` 表示选中关键帧，`false` 表示取消选中。 |

#### 返回值

无。

---

### Property.setSpatialAutoBezierAtKey()

`app.project.item(index).layer(index).propertySpec.setSpatialAutoBezierAtKey(keyIndex, newVal)`

#### 描述

为指定的关键帧开启或关闭空间自动贝塞尔插值。如果属性值类型既不是 `TwoD_SPATIAL` 也不是 `ThreeD_SPATIAL`，则会抛出异常。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `keyIndex` | 整数，范围在 `[1..numKeys]` 之间 | 关键帧的索引，由 [addKey](#propertyaddkey) 或 [nearestKeyIndex](#propertynearestkeyindex) 返回。 |
| `newVal` | 布尔值 | `true` 表示开启空间自动贝塞尔插值，`false` 表示关闭。 |

#### 返回值

无。

---

### Property.setSpatialContinuousAtKey()

`app.project.item(index).layer(index).propertySpec.setSpatialContinuousAtKey(keyIndex, newVal)`

#### 描述

为指定的关键帧开启或关闭空间连续性。如果属性值类型既不是 `TwoD_SPATIAL` 也不是 `ThreeD_SPATIAL`，则会抛出异常。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `keyIndex` | 整数，范围在 `[1..numKeys]` 之间 | 关键帧的索引，由 [addKey](#propertyaddkey) 或 [nearestKeyIndex](#propertynearestkeyindex) 返回。 |
| `newVal` | 布尔值 | `true` 表示开启空间自动贝塞尔插值，`false` 表示关闭。 |

#### 返回值

无。

---

### Property.setSpatialTangentsAtKey()

`app.project.item(index).layer(index).propertySpec.setSpatialTangentsAtKey(keyIndex, inTangent[, outTangent])`

#### 描述

为指定的关键帧设置输入和输出的切线向量。如果属性值类型既不是 `TwoD_SPATIAL` 也不是 `ThreeD_SPATIAL`，则会抛出异常。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `keyIndex` | 整数 | 关键帧的索引，范围在 `[1..numKeys]` 之间，由 [addKey](#propertyaddkey) 或 [nearestKeyIndex](#propertynearestkeyindex) 返回。 |
| `inTangent` | 包含 2 或 3 个浮点值的数组。 | 输入切线向量。 |
| | | - 如果属性值类型是 `PropertyValueType.TwoD_SPATIAL`，数组包含 2 个值。 |
| | | - 如果属性值类型是 `PropertyValueType.ThreeD_SPATIAL`，数组包含 3 个值。 |
| `outTangent` | 包含 2 或 3 个浮点值的数组。 | 可选。输出切线向量。如果未提供，输出切线将设置为与输入切线相同的值。 |
| | | - 如果属性值类型是 `PropertyValueType.TwoD_SPATIAL`，数组包含 2 个值。 |
| | | - 如果属性值类型是 `PropertyValueType.ThreeD_SPATIAL`，数组包含 3 个值。 |

#### 返回值

无。

---

### Property.setTemporalAutoBezierAtKey()

`app.project.item(index).layer(index).propertySpec.setTemporalAutoBezierAtKey(keyIndex, newVal)`

#### 描述

为指定的关键帧开启或关闭时间自动贝塞尔插值。当开启时，仅当 `keySpatialContinuous(keyIndex)` 也为 `true` 时才会影响此关键帧。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `keyIndex` | 整数，范围在 `[1..numKeys]` 之间 | 关键帧的索引，由 [addKey](#propertyaddkey) 或 [nearestKeyIndex](#propertynearestkeyindex) 返回。 |
| `newVal` | 布尔值 | `true` 表示开启时间自动贝塞尔插值，`false` 表示关闭。 |

#### 返回值

无。

---

### Property.setTemporalContinuousAtKey()

`app.project.item(index).layer(index).propertySpec.setTemporalContinuousAtKey(keyIndex, newVal)`

#### 描述

为指定的关键帧开启或关闭时间连续性。当时间连续性开启时，仅当关键帧插值类型为 `KeyframeInterpolationType.BEZIER`（对于 `keyInInterpolationType(keyIndex)` 和 `keyOutInterpolationType(keyIndex)`）时才会影响此关键帧。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `keyIndex` | 整数，范围在 `[1..numKeys]` 之间 | 关键帧的索引，由 [addKey](#propertyaddkey) 或 [nearestKeyIndex](#propertynearestkeyindex) 返回。 |
| `newVal` | 布尔值 | `true` 表示开启时间自动贝塞尔插值，`false` 表示关闭。 |

#### 返回值

无。

---

### Property.setTemporalEaseAtKey()

`app.project.item(index).layer(index).propertySpec.setTemporalEaseAtKey(keyIndex, inTemporalEase[, outTemporalEase])`

#### 描述

为指定的关键帧设置输入和输出的时间缓动。参见 [KeyframeEase 对象](../../other/keyframeease)。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `keyIndex` | 整数 | 关键帧的索引，范围在 `[1..numKeys]` 之间，由 [addKey](#propertyaddkey) 或 [nearestKeyIndex](#propertynearestkeyindex) 返回。 |
| `inTemporalEase` | 包含 1、2 或 3 个 [KeyframeEase 对象](../../other/keyframeease) 的数组 | 输入时间缓动。 |
| | | - 如果属性值类型是 `PropertyValueType.TwoD`，数组包含 2 个对象。 |
| | | - 如果属性值类型是 `PropertyValueType.ThreeD`，数组包含 3 个对象。 |
| | | - 对于其他值类型，数组包含 1 个对象。 |
| `outTemporalEase` | 包含 1、2 或 3 个 [KeyframeEase 对象](../../other/keyframeease) 的数组 | 可选。输出时间缓动。如果未提供，输出缓动将设置为与输入缓动相同的值。 |
| | | - 如果属性值类型是 `PropertyValueType.TwoD`，数组包含 2 个对象。 |
| | | - 如果属性值类型是 `PropertyValueType.ThreeD`，数组包含 3 个对象。 |
| | | - 对于其他值类型，数组包含 1 个对象。 |

#### 返回值

无。

---

### Property.setValue()

`app.project.item(index).layer(index).propertySpec.setValue(newValue)`

#### 描述

设置没有关键帧的属性的静态值。如果指定属性有关键帧，此方法会抛出异常并显示错误。要设置有关键帧的属性的值，请使用 [Property.setValueAtTime()](#propertysetvalueattime) 或 [Property.setValueAtKey()](#propertysetvalueatkey)。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `newValue` | 值 | 适合被设置属性类型的值；参见 [Property.propertyValueType](#propertypropertyvaluetype)。 |

#### 返回值

无。

---

### Property.setValueAtKey()

`app.project.item(index).layer(index).propertySpec.setValueAtKey(keyIndex, newValue)`

#### 描述

查找指定的关键帧并设置其值。如果指定属性没有关键帧，或没有指定索引的关键帧，此方法会抛出异常并显示错误。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `keyIndex` | 整数，范围在 `[1..numKeys]` 之间 | 关键帧的索引，由 [addKey](#propertyaddkey) 或 [nearestKeyIndex](#propertynearestkeyindex) 返回。 |
| `newValue` | 值 | 适合被设置属性类型的值；参见 [Property.propertyValueType](#propertypropertyvaluetype)。 |

#### 返回值

无。

---

### Property.setValueAtTime()

`app.project.item(index).layer(index).propertySpec.setValueAtTime(time, newValue)`

#### 描述

在指定时间设置关键帧的值。如果指定时间当前不存在关键帧，则为指定属性创建一个新关键帧并设置其值。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `time` | 浮点值 | 设置值的时间，单位为秒。合成的开始时间为 0。 |
| `newValue` | 值 | 适合被设置属性类型的值；参见 [Property.propertyValueType](#propertypropertyvaluetype)。 |

#### 返回值

无。

---

### Property.setValuesAtTimes()

`app.project.item(index).layer(index).propertySpec.setValuesAtTimes(times, newValues)`

#### 描述

在指定时间设置一组关键帧的值。如果指定时间当前不存在关键帧，则为指定属性创建一个新关键帧并设置其值。时间和值以数组形式提供；数组长度必须相同。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `times` | 浮点值数组 | 时间数组，单位为秒。合成的开始时间为 0。 |
| `newValues` | 值数组 | 适合被设置属性类型的值数组；参见 [Property.propertyValueType](#propertypropertyvaluetype)。 |

#### 返回值

无。

---

### Property.valueAtTime()

`app.project.item(index).layer(index).propertySpec.valueAtTime(time, preExpression)`

#### 描述

指定属性在指定时间评估的值。注意返回值的类型不明确；它将根据评估的属性类型而有所不同。

:::tip
从 After Effects 13.6 开始，此方法现在会等待耗时的表达式（如 `sampleImage`）完成评估后再返回结果。
:::

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `time` | 浮点值 | 评估值的时间，单位为秒。合成的开始时间为 0。 |
| `preExpression` | 布尔值 | 如果属性有表达式且此参数为 `true`，则返回指定时间的值而不应用表达式。当为 `false` 时，返回表达式在指定时间评估的结果。如果属性没有关联的表达式，则忽略此参数。 |

#### 返回值

适合属性类型的值（参见第 138 页的“Property propertyValueType 属性”）。
