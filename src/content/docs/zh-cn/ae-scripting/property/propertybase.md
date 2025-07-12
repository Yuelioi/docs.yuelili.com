---
title: propertybase
---
# PropertyBase 对象

`app.project.item(index).layer(index).propertySpec`

#### 描述

属性通过图层按名称访问，使用各种表达式语法，具体由应用程序偏好控制。例如，以下是访问 Effects 组中属性的几种方式：

```javascript
var effect1 = app.project.item(1).layer(1).effect("AddGrain")("Viewing Mode");
var effect1again = app.project.item(1).layer(1).effect.addGrain.viewingMode;
var effect1againtoo = app.project.item(1).layer(1)("Effects").addGrain.viewingMode;
var effect1againtoo2 = app.project.item(1).layer(1)("Effects")("Add Grain")("Viewing Mode");
```

另请参阅 [PropertyGroup.property()](../propertygroup#propertygroupproperty)。

:::info
PropertyBase 是 [Property](../property) 和 [PropertyGroup](../propertygroup) 的基类，因此在处理属性和属性组时，PropertyBase 的属性和方法都可用。
:::

#### 引用失效

当某些事件发生导致对象发生足够大的变化以至于引用失效时，脚本对该对象的引用可能会生成错误。在简单情况下，这是显而易见的。例如，如果你删除了一个对象，对已删除对象的引用会生成警告“对象无效”：

```javascript
var layer1 = app.project.item(1).layer(1);
layer1.remove();
alert(layer1.name); // 对已删除对象的无效引用
```

同样，如果你引用已删除对象中的 AE 属性，也会出现警告：

```javascript
var layer1 = app.project.item(1).layer(1);
var layer1position = layer1.transform.position;
layer1.remove();
alert(layer1position.value); // 对已删除对象中属性的无效引用
```

一个不太直观的情况是当属性从属性组中移除时。在这种情况下，After Effects 会在你随后引用该项或组中的其他项时生成“对象无效”错误，因为它们的索引位置已更改。例如：

```javascript
var effect1 = app.project.item(1).layer(1).effect(1);
var effect2 = app.project.item(1).layer(1).effect(2);
var effect2param = app.project.item(1).layer(1).effect(2).blendWithOriginal;
effect1.remove();
alert(effect2.name); // 无效引用，因为组索引位置已更改
```

---

## 属性

### PropertyBase.active

`app.project.item(index).layer(index).active`

`app.project.item(index).layer(index).propertySpec.active`

#### 描述

对于图层，这对应于眼球图标的设置。当为 `true` 时，图层的视频在当前时间处于活动状态。要使此值为 `true`，图层必须启用，除非此图层也被独奏，否则其他图层不能独奏，并且时间必须在此图层的 `inPoint` 和 `outPoint` 值之间。

对于音频图层，此值永远不会为 `true`；AVLayer 对象中有一个单独的 `audioActive` 属性 [AVLayer.audioActive](../../layer/avlayer#avlayeraudioactive)。

对于效果和所有属性，它与 `enabled` 属性相同，只是它是只读的。

#### 类型

布尔值；只读。

---

### PropertyBase.canSetEnabled

`app.project.item(index).layer(index).propertySpec.canSetEnabled`

#### 描述

当为 `true` 时，你可以设置 `enabled` 属性值。通常，如果用户界面为此属性显示眼球图标，则此值为 `true`；对于所有图层，此值为 `true`。

#### 类型

布尔值；只读。

---

### PropertyBase.elided

`app.project.item(index).layer(index).propertySpec.elided`

#### 描述

当为 `true` 时，此属性是一个用于组织其他属性的组。该属性不会显示在用户界面中，其子属性在时间轴面板中不会缩进。例如，对于具有两个动画器且未展开属性的文本图层，你可能会看到：

- `Text`
- `PathOptions`
- `MoreOptions`
- `Animator1`
- `Animator2`

在此示例中，“Animator 1”和“Animator 2”包含在一个名为“Text Animators”的 PropertyBase 中。此父组不会显示在用户界面中，因此两个子属性在时间轴面板中不会缩进。

#### 类型

布尔值；只读。

---

### PropertyBase.enabled

`app.project.item(index).layer(index).enabled`

`app.project.item(index).layer(index).propertySpec.enabled`

#### 描述

对于图层，这对应于时间轴面板中图层的视频开关状态。对于效果和所有属性，它对应于眼球图标的设置（如果有）。

当为 `true` 时，图层或属性已启用；否则为 `false`。

#### 类型

布尔值；如果 `canSetEnabled` 为 `true`，则可读/写；如果 `canSetEnabled` 为 `false`，则只读。

---

### PropertyBase.isEffect

`app.project.item(index).layer(index).propertySpec.isEffect`

#### 描述

当为 `true` 时，此属性是一个效果 PropertyGroup。

#### 类型

布尔值；只读。

---

### PropertyBase.isMask

`app.project.item(index).layer(index).propertySpec.isMask`

#### 描述

当为 `true` 时，此属性是一个遮罩 PropertyGroup。

#### 类型

布尔值；只读。

---

### PropertyBase.isModified

`app.project.item(index).layer(index).propertySpec.isModified`

#### 描述

当为 `true` 时，此属性自创建以来已被修改。

#### 类型

布尔值；只读。

---

### PropertyBase.matchName

`app.project.item(index).layer(index).propertySpec.matchName`

#### 描述

用于构建唯一命名路径的属性的特殊名称。匹配名称不会显示，但你可以在脚本中引用它。每个属性都有一个唯一的匹配名称标识符。匹配名称在版本之间是稳定的，无论显示名称（`name` 属性值）或应用程序的任何更改如何。与显示名称不同，它不会被本地化。索引组可能没有 `name` 值，但始终有 `matchName` 值。（索引组的类型为 `PropertyType.INDEXED_GROUP`；请参阅 [PropertyBase.propertyType](#propertybasepropertytype)。）

#### 类型

字符串；只读。

---

### PropertyBase.name

`app.project.item(index).layer(index).name`

`app.project.item(index).layer(index).propertySpec.name`

#### 描述

对于图层，图层的名称。默认情况下，这与源名称相同，除非 [Layer.isNameSet](../../layer/layer#layerisnameset) 返回 `false`。

对于效果和所有属性，属性的显示名称。（比较 [PropertyBase.matchName](#propertybasematchname)。）如果属性不是索引组的子项（即属性组的类型为 `PropertyType.INDEXED_GROUP`；请参阅 [PropertyBase.propertyType](#propertybasepropertytype)），则设置 `name` 值会出错。

#### 类型

字符串；对于索引组的子项，可读/写；否则只读。

---

### PropertyBase.parentProperty

`app.project.item(index).layer(index).propertySpec.parentProperty`

#### 描述

此属性的直接父属性组，如果此 PropertyBase 是图层，则为 `null`。

#### 类型

PropertyGroup 对象或 `null`；只读。

---

### PropertyBase.propertyDepth

`app.project.item(index).layer(index).propertySpec.propertyDepth`

#### 描述

此属性与包含图层之间的父组级别数。对于图层，值为 0。

#### 类型

整数；只读。

---

### PropertyBase.propertyIndex

`app.project.item(index).layer(index).propertySpec.propertyIndex`

#### 描述

此属性在其父组中的位置索引，如果它是索引组的子项（属性组的类型为 `PropertyType.INDEXED_GROUP`；请参阅 [PropertyBase.propertyType](#propertybasepropertytype)）。

#### 类型

整数；只读。

---

### PropertyBase.propertyType

`app.project.item(index).layer(index).propertySpec.propertyType`

#### 描述

此属性的类型。

#### 类型

`PropertyType` 枚举值；可读/写。其中之一：

- `PropertyType.PROPERTY`：单个属性，例如位置或缩放。
- `PropertyType.INDEXED_GROUP`：一个属性组，其成员具有可编辑的名称和索引。效果和遮罩是索引组。例如，图层的遮罩属性通过索引号引用多个单独的遮罩。
- `PropertyType.NAMED_GROUP`：一个属性组，其成员名称不可编辑。图层是命名组。

---

### PropertyBase.selected

`app.project.item(index).layer(index).propertySpec.selected`

#### 描述

当为 `true` 时，此属性被选中。设置为 `true` 以选择该属性，或设置为 `false` 以取消选择。对大量属性重复采样此属性可能会降低系统性能。要读取合成或图层的完整选定属性集，请使用 [CompItem.selectedProperties](../../item/compitem#compitemselectedproperties) 或 [Layer.selectedProperties](../../layer/layer#layerselectedproperties)。

#### 类型

布尔值；可读/写。

## 函数

### PropertyBase.duplicate()

`app.project.item(index).layer(index).propertySpec.duplicate()`

#### 描述

如果此属性是索引组的子项，则创建并返回一个与此属性具有相同属性值的新 PropertyBase 对象。如果此属性不是索引组的子项，则该方法会生成异常并显示错误。索引组的类型为 `PropertyType.INDEXED_GROUP`；请参阅 [PropertyBase.propertyType](#propertybasepropertytype)。

#### 参数

无。

#### 返回

PropertyBase 对象。

---

### PropertyBase.moveTo()

`app.project.item(index).layer(index).propertySpec.moveTo(newIndex)`

#### 描述

将此属性移动到其父属性组中的新位置。此方法仅对索引组的子项有效；如果不是，或者索引值无效，则该方法会生成异常并显示错误。（索引组的类型为 `PropertyType.INDEXED_GROUP`；请参阅 [PropertyBase.propertyType](#propertybasepropertytype)。）

:::warning
使用此方法会使对同一索引组中其他子项的现有引用失效。例如，如果你在图层上有三个效果，每个效果分配给不同的变量，移动其中一个效果会使所有这些变量的引用失效。你需要重新分配它们。
:::

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `newIndex` | 整数 | 此属性在其组中的新索引位置。 |

#### 返回

无。

---

### PropertyBase.propertyGroup()

`app.project.item(index).layer(index).propertySpec.propertyGroup([countUp])`

#### 描述

获取此属性的指定层级祖先组的 PropertyGroup 对象。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `countUp` | 整数，范围为 `[1..propertyDepth]` | 可选。在父-子层次结构中上升的层级数。默认为 1，即获取直接父级。 |

#### 返回

PropertyGroup 对象，如果计数达到包含图层，则返回 [Layer 对象](../../layer/layer)。

#### 示例

```javascript
var containing_layer = my_property.propertyGroup(my_property.propertyDepth);
```

---

### PropertyBase.remove()

`app.project.item(index).layer(index).propertySpec.remove()`

#### 描述

从其父组中移除此属性。如果这是一个属性组，它也会移除子属性。此方法仅对索引组的子项有效；如果不是，或者索引值无效，则该方法会生成异常并显示错误。（索引组的类型为 `PropertyType.INDEXED_GROUP`；请参阅 [PropertyBase.propertyType](#propertybasepropertytype)。）此方法可以调用在文本动画属性上（即已设置为文本图层的任何动画器）。

#### 参数

无。

#### 返回

无。
