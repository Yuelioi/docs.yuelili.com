---
title: 属性
---
# 属性对象

`app.project.item(index).layer(index).propertySpec`

#### 描述

属性对象包含有关图层特定AE属性的值、关键帧和表达式信息。AE属性是图层内效果、遮罩或变换的值，通常是可动画的。有关如何访问属性的示例，请参阅[PropertyBase对象](../propertybase)和[PropertyGroup.property()](../propertygroup#propertygroupproperty)。

:::info
属性是[PropertyBase](../propertybase)的子类。除了下面列出的方法和属性外，PropertyBase的所有方法和属性在处理属性时都可用。
:::

:::note
在本指南中，通常称为“属性”的JavaScript对象被称为“属性”，以避免与After Effects中属性的定义混淆。
:::

#### 示例

获取并设置不透明度的值：

```javascript
var myProperty = myLayer.opacity;
// 不透明度的propertyValueType为OneD，存储为浮点数
myProperty.setValue(50); // 将不透明度设置为50%
// 变量myOpacity是一个浮点值
var myOpacity = myProperty.value;
```

获取并设置位置的值：

```javascript
var myProperty = myLayer.position;
// 位置的propertyValueType为ThreeD_SPATIAL，存储为3个浮点数的数组
myProperty.setValue([10.0, 30.0, 0.0]);
// 变量myPosition是一个包含3个浮点数的数组
var myPosition = myProperty.value;
```

将遮罩形状的值更改为开放而不是闭合：

```javascript
var myMask = mylayer.mask(1);
var myProperty = myMask.maskPath;
myShape = myProperty.value;
myShape.closed = false;
myProperty.setValue(myShape);
```

获取特定时间的颜色值。颜色存储为四个浮点数的数组`[r, g, b, opacity]`。这将时间4的光的颜色红色分量设置为时间2的一半：

```javascript
var myProperty = myLight.color;
var colorValue = myProperty.valueAtTime(2, true);
colorValue[0] = 0.5 * colorValue[0];
myProperty.setValueAtTime(4, colorValue);
```

检查表达式在时间3.5计算的缩放是否为预期值[10,50]：

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

更改某些源文本的前三个关键帧的关键帧值：

```javascript
var myProperty = myTextLayer.sourceText;
if (myProperty.numKeys < 3) {
  alert("错误，我以为有3个关键帧");
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
// 这两者是等价的。第二个填充默认值1.0。
myLight.color.setValue([0.8, 0.3, 0.1, 1.0]);
myLight.color.setValue([0.8, 0.3, 0.1]);
// 这两者是等价的。第二个创建一个TextDocument。
myTextLayer.sourceText.setValue(newTextDocument("foo"));
myTextLayer.sourceText.setValue("foo");
```

---

## 属性

### Property.alternateSource

`app.project.item(index).layer(index).propertySpec.alternateSource`

:::note
该方法添加于 After Effects 18.0 (2021)
:::

#### 描述

当以下情况时，该值为`null`：

- 未为关联图层设置备用源。
- 该属性不能用于设置备用源。

使用[Property.canSetAlternateSource](#propertycansetalternatesource)来确定该属性是否为媒体替换基本属性。

所有媒体替换图层都有一个可以设置的备用源项。

当图层被添加到基本图形面板时，图层被“标记”为媒体替换（请参阅[AVLayer.addToMotionGraphicsTemplate()](../../layer/avlayer#avlayeraddtomotiongraphicstemplate)或[AVLayer.addToMotionGraphicsTemplateAs()](../../layer/avlayer#avlayeraddtomotiongraphicstemplateas)）。

- 如果存在，渲染工作流将在渲染图层时拾取备用源。
- 如果未设置图层的备用源，则使用媒体替换控件的源图层进行渲染（这是正常的工作流）。

使用[Property.setAlternateSource()](#propertysetalternatesource)更改该值。

#### 类型

AVItem对象；只读。

---

### Property.canSetAlternateSource

`app.project.item(index).layer(index).propertySpec.canSetAlternateSource`

:::note
该方法添加于 After Effects 18.0 (2021)
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
此属性仅在[isSeparationLeader](#propertyisseparationleader)属性为`true`时适用。
:::

#### 类型

布尔值；读写。

---

### Property.essentialPropertySource

`app.project.item(index).layer(index).essentialProperty.property(index).essentialPropertySource`

:::note
该方法添加于 After Effects 22.0 (2022)
:::

#### 描述

基本属性对象上的实例属性，返回用于创建基本属性的原始源属性。

#### 类型

可以是以下之一：

- 读写[属性对象](#property-object)，如果用于创建基本属性的源对象是属性
- 读写[AVLayer对象](../../layer/avlayer)，如果用于创建基本属性的源对象是媒体替换素材项
- `null`，如果在非基本属性上调用

#### 示例

```javascript
var firstComp = app.project.item(1);
var opacityProp = firstComp.layer(1).property("Transform").property("Opacity");

opacityProp.addToMotionGraphicsTemplate(firstComp);

var secondComp = app.project.item(2);
secondComp.layers.add(firstComp);

var essentialOpacity = secondComp.layer(1).essentialProperty.property(1);
if (essentialOpacity.essentialPropertySource == opacityProp) {
  alert("您可以从基本属性获取源属性！");
}
```

---

### Property.expression

`app.project.item(index).layer(index).propertySpec.expression`

#### 描述

命名属性的表达式。仅在命名属性的[canSetExpression](#propertycansetexpression)为`true`时可写。当您为此属性指定值时，字符串将被评估。

- 如果字符串包含有效表达式，[expressionEnabled](#propertyexpressionenabled)变为`true`。
- 如果字符串不包含有效表达式，则会生成错误，并且[expressionEnabled](#propertyexpressionenabled)变为`false`。
- 如果将此属性设置为空字符串，[expressionEnabled](#propertyexpressionenabled)变为`false`，但不会生成错误。

#### 类型

字符串；如果命名属性的[canSetExpression](#propertycansetexpression)为`true`，则可读写。

---

### Property.expressionEnabled

`app.project.item(index).layer(index).propertySpec.expressionEnabled`

#### 描述

当为`true`时，命名属性使用其关联的表达式生成值。当为`false`时，使用属性的关键帧信息或静态值。只有在命名属性的[canSetExpression](#propertycansetexpression)为`true`且[expression](#propertyexpression)包含有效表达式字符串时，才能将此属性设置为`true`。

#### 类型

布尔值；读写。

---

### Property.expressionError

`app.project.item(index).layer(index).propertySpec.expressionError`

#### 描述

包含最近在[expression](#propertyexpression)中设置的字符串评估生成的错误（如果有）。如果未指定表达式字符串，或者最后一个表达式字符串评估无误，则包含空字符串`("")`。

#### 类型

字符串；只读。

---

### Property.hasMax

`app.project.item(index).layer(index).propertySpec.hasMax`

#### 描述

当为`true`时，命名属性有最大允许值；否则为`false`。

#### 类型

布尔值；只读。

---

### Property.hasMin

`app.project.item(index).layer(index).propertySpec.hasMin`

#### 描述

当为`true`时，命名属性有最小允许值；否则为`false`。

#### 类型

布尔值；只读。

---

### Property.isDropdownEffect

`app.project.item(index).layer(index).propertySpec.isDropdownEffect`

:::note
该方法添加于 After Effects 17.0.1 (2020)
:::

#### 描述

当为`true`时，该属性是下拉菜单控件效果的菜单属性，并且可以使用[setPropertyParameters](#propertysetpropertyparameters)更新其项。

#### 示例

```javascript
appliedEffect.property("Menu").isDropdownEffect;  // true
appliedEffect.property("Color").isDropdownEffect;   // false
appliedEffect.property("Feather").isDropdownEffect; // false
```

#### 类型

布尔值；只读。

---

### Property.isSeparationFollower

`app.project.item(index).layer(index).propertySpec.isSeparationFollower`

#### 描述

当为`true`时，该属性表示多维属性的分离维度之一。例如，X位置属性将此属性设置为`true`。

:::tip
原始的、合并的多维属性是“分离领导者”，新的、分离的单维属性是其“分离跟随者”。
:::

#### 类型

布尔值；只读。

---

### Property.isSeparationLeader

`app.project.item(index).layer(index).propertySpec.isSeparationLeader`

#### 描述

当为`true`时，该属性是多维的并且可以分离。例如，位置属性将此属性设置为`true`。

:::tip
原始的、合并的多维属性是“分离领导者”，新的、分离的单维属性是其“分离跟随者”。
:::

#### 类型

布尔值；只读。

---

### Property.isSpatial

`app.project.item(index).layer(index).propertySpec.isSpatial`

#### 描述

当为`true`时，命名属性定义空间值。例如位置和效果点控件。

#### 类型

布尔值；只读。

---

### Property.isTimeVarying

`app.project.item(index).layer(index).propertySpec.isTimeVarying`

#### 描述

当为`true`时，命名属性随时间变化——即它具有关键帧或启用的表达式。当此属性为`true`时，属性`canVaryOverTime`也必须为`true`。

#### 类型

布尔值；只读。

---

### Property.maxValue

`app.project.item(index).layer(index).propertySpec.maxValue`

#### 描述

命名属性的最大允许值。如果`hasMax`属性为`false`，则会生成异常并显示错误。

#### 类型

浮点值；只读。

---

### Property.minValue

`app.project.item(index).layer(index).propertySpec.minValue`

#### 描述

命名属性的最小允许值。如果`hasMin`属性为`false`，则会生成异常并显示错误。

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

命名属性中存储的值的类型。`PropertyValueType`枚举为可以存储在属性中或从属性中检索的每种数据类型都有一个值。每种数据类型都以不同的结构存储和检索。所有属性对象都根据这些类别之一存储数据。例如，3D空间属性（如图层的位置）存储为三个浮点值的数组。设置位置值时，传递这样的数组，如下所示：`mylayer.property("position").setValue([10, 20, 0]);`

相比之下，形状属性（如图层的遮罩形状）存储为Shape对象。设置形状值时，传递Shape对象，如下所示：

```javascript
var myShape = new Shape();
myShape.vertices = [[0,0], [0,100], [100,100], [100,0]];
var myMask = mylayer.property("ADBE Mask Parade").property(1);
myMask.property("ADBE Mask Shape").setValue(myShape);
```

#### 类型

`PropertyValueType`枚举值；读写。以下之一：

- `PropertyValueType.NO_VALUE`：不存储数据。
- `PropertyValueType.ThreeD_SPATIAL`：三个浮点位置值的数组。例如，锚点值可能是[10.0, 20.2, 0.0]。
- `PropertyValueType.Three