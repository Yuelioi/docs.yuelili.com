---
title: property
---
# Property object

`app.project.item(index).layer(index).propertySpec`

#### 描述

The Property object contains value, keyframe, and expression information about a particular AE property of a layer. An AE property is a value, often animatable, of an effect, mask, or transform within an individual layer. For examples of how to access properties, see [PropertyBase object](../propertybase) and [PropertyGroup.property()](propertygroup.md#propertygroupproperty).

:::info
Property is a subclass of [PropertyBase](../propertybase). All methods and attributes of PropertyBase, in addition to those listed below, are available when working with Property.
:::

:::note
JavaScript objects commonly referred to as "properties" are called "attributes" in this guide, to avoid confusion with the After Effects definition of property.
:::

#### 示例

Get and set the value of opacity:

```javascript
var myProperty = myLayer.opacity;
// opacity has propertyValueType of OneD, and is stored as a float
myProperty.setValue(50); //set opacity to 50%
// Variable my Opacity is a float value
var myOpacity = myProperty.value;
```

Get and set the value of a position:

```javascript
var myProperty = myLayer.position;
// position has propertyValueType of ThreeD_SPATIAL, and is stored as an array of 3 floats
myProperty.setValue([10.0, 30.0, 0.0]);
// Variable my Position is an array of 3 floats
var myPosition = myProperty.value;
```

Change the value of a mask shape to be open instead of closed:

```javascript
var myMask = mylayer.mask(1);
var myProperty = myMask.maskPath;
myShape = myProperty.value;
myShape.closed = false;
myProperty.setValue(myShape);
```

Get the value of a color at a particular time. A color is stored as an array of four floats, `[r, g, b, opacity]`. This sets the value of the red component of a light's color at time 4 to be half of that at time 2:

```javascript
var myProperty = myLight.color;
var colorValue = myProperty.valueAtTime(2, true);
colorValue[0] = 0.5 * colorValue[0];
myProperty.setValueAtTime(4, colorValue);
```

Check that a scale calculated by an expression at time 3.5 is the expected value of [10,50]:

```javascript
var myProperty = myLayer.scale;
// false value of preExpression means evaluate the expression
var scaleValue = myProperty.valueAtTime(3.5, false);

if (scaleValue[0] === 10 && scaleValue[1] === 50) {
    alert("hurray");
} else {
    alert("oops");
}
```

Keyframe a rotation from 0 to 90 and back again. The animation is 10 seconds, and the middle keyframe is at the 5 second mark. Rotation properties are stored as a OneD value:

```javascript
var myProperty = myLayer.rotation;
myProperty.setValueAtTime(0, 0);
myProperty.setValueAtTime(5, 90);
myProperty.setValueAtTime(10, 0);
```

Change the key frame values for the first three keyframes of some sourcetext:

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

Set values using the convenience syntax for position, scale, color, or source text:

```javascript
// These two are equivalent. The second fills in a default of 0.
myLayer.position.setValue([20, 30, 0]);
myLayer.position.setValue([20, 30]);
// These two are equivalent. The second fills in a defaultof 100.
myLayer.scale.setValue([50, 50, 100]);
myLayer.scale.setValue([50, 50]);
// These two are equivalent. The second fills in a defaultof 1.0
myLight.color.setValue([0.8, 0.3, 0.1, 1.0]);
myLight.color.setValue([0.8, 0.3, 0.1]);
// These two are equivalent. The second creates a TextDocument
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

The value is `null` when:

- The alternate source is not set for the associated layer.
- The property cannot be used to set an alternate source.

Use [Property.canSetAlternateSource](#propertycansetalternatesource) to determine if the property is a Media Replacement Essential Property.

All Media Replacement Layers have an alternate source item that can be set.

A layer is "marked" for media replacement when the layer is added to the Essential Graphics Panel (see [AVLayer.addToMotionGraphicsTemplate()](../layer/avlayer.md#avlayeraddtomotiongraphicstemplate) or [AVLayer.addToMotionGraphicsTemplateAs()](../layer/avlayer.md#avlayeraddtomotiongraphicstemplateas)).

- If present, the render workflow will pick up the alternate source while rendering the layer.
- If the alternate source for the layer is not set, then the source layer of the Media Replacement control is used for rendering (this is the normal workflow).

Use [Property.setAlternateSource()](#propertysetalternatesource) to change the value.

#### 类型

AVItem object; 只读.

---

### Property.canSetAlternateSource

`app.project.item(index).layer(index).propertySpec.canSetAlternateSource`

:::note
该方法添加于 After Effects 18.0 (2021)
:::

#### 描述

Test whether the property is an Essential Property that supports Media Replacement.

Returns `true` if the property allows Media Replacement, otherwise `false`.

#### 类型

Boolean; 只读.

---

### Property.canSetExpression

`app.project.item(index).layer(index).propertySpec.canSetExpression`

#### 描述

When `true`, the named property is of a type whose expression can be set by a script. See also [Property expression](#propertyexpression) attribute.

#### 类型

Boolean; 只读.

---

### Property.canVaryOverTime

`app.project.item(index).layer(index).propertySpec.canVaryOverTime`

#### 描述

When `true`, the named property can vary over time—that is, keyframe values or expressions can be written to this property.

#### 类型

Boolean; 只读.

---

### Property.dimensionsSeparated

`app.project.item(index).layer(index).propertySpec.dimensionsSeparated`

#### 描述

When `true`, the property's dimensions are represented as separate properties. For example, if the layer's position is represented as X Position and Y Position properties in the Timeline panel, the Position property has this attribute set to `true`.

:::tip
This attribute applies only when the [isSeparationLeader](#propertyisseparationleader) attribute is `true`.
:::

#### 类型

Boolean; read/write.

---

### Property.essentialPropertySource

`app.project.item(index).layer(index).essentialProperty.property(index).essentialPropertySource`

:::note
该方法添加于 After Effects 22.0 (2022)
:::

#### 描述

Instance property on an Essential Property object which returns the original source Property which was used to create the Essential Property.

#### 类型

Can be either:

- A read/write [Property object](#property-object), in the case that the source object used to create the Essential Property was a Property
- A read/write [AVLayer object](../../layer/avlayer), in the case that the source object used to create the Essential Property was a Media Replacement Footage item
- `null` if called on a non-Essential Property

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

The expression for the named property. Writeable only when [canSetExpression](#propertycansetexpression) for the named property is `true`. When you specify a value for this attribute, the string is evaluated.

- If the string contains a valid expression, [expressionEnabled](#propertyexpressionenabled) becomes true.
- If the string does not contain a valid expression, an error is generated, and [expressionEnabled](#propertyexpressionenabled) becomes `false`.
- If you set the attribute to the empty string, [expressionEnabled](#propertyexpressionenabled) becomes `false`, but no error is generated.

#### 类型

String; read/write if [canSetExpression](#propertycansetexpression) for the named property is `true`.

---

### Property.expressionEnabled

`app.project.item(index).layer(index).propertySpec.expressionEnabled`

#### 描述

When `true`, the named property uses its associated expression to generate a value. When `false`, the keyframe information or static value of the property is used. This attribute can be set to `true` only if [canSetExpression](#propertycansetexpression) for the named property is `true` and [expression](#propertyexpression) contains a valid expression string.

#### 类型

Boolean; read/write.

---

### Property.expressionError

`app.project.item(index).layer(index).propertySpec.expressionError`

#### 描述

Contains the error, if any, generated by evaluation of the string most recently set in [expression](#propertyexpression). If no expression string has been specified, or if the last expression string evaluated without error, contains the empty string `("")`.

#### 类型

String; 只读.

---

### Property.hasMax

`app.project.item(index).layer(index).propertySpec.hasMax`

#### 描述

When `true`, there is a maximum permitted value for the named property; otherwise `false`.

#### 类型

Boolean; 只读.

---

### Property.hasMin

`app.project.item(index).layer(index).propertySpec.hasMin`

#### 描述

When `true`, there is a minimum permitted value for the named property; otherwise `false`.

#### 类型

Boolean; 只读.

---

### Property.isDropdownEffect

`app.project.item(index).layer(index).propertySpec.isDropdownEffect`

:::note
该方法添加于 After Effects 17.0.1 (2020)
:::

#### 描述

When `true`, the property is the Menu property of a Dropdown Menu Control effect and can have its items updated with [setPropertyParameters](#propertysetpropertyparameters).

#### 示例

```javascript
appliedEffect.property("Menu").isDropdownEffect;    // true
appliedEffect.property("Color").isDropdownEffect;   // false
appliedEffect.property("Feather").isDropdownEffect; // false
```

#### 类型

Boolean; 只读.

---

### Property.isSeparationFollower

`app.project.item(index).layer(index).propertySpec.isSeparationFollower`

#### 描述

When `true`, the property represents one of the separated dimensions for a multidimensional property. For example, the X Position property has this attribute set to `true`.

:::tip
The original, consolidated, multidimensional property is the "separation leader" and the new, separated, single-dimensional properties are its "separation followers".
:::

#### 类型

Boolean; 只读.

---

### Property.isSeparationLeader

`app.project.item(index).layer(index).propertySpec.isSeparationLeader`

#### 描述

When `true`, the property is multidimensional and can be separated. For example, the Position property has this attribute set to `true`.

:::tip
The original, consolidated, multidimensional property is the "separation leader" and the new, separated, single-dimensional properties are its "separation followers".
:::

#### 类型

Boolean; 只读.

---

### Property.isSpatial

`app.project.item(index).layer(index).propertySpec.isSpatial`

#### 描述

When `true`, the named property defines a spatial value. Examples are position and effect point controls.

#### 类型

Boolean; 只读.

---

### Property.isTimeVarying

`app.project.item(index).layer(index).propertySpec.isTimeVarying`

#### 描述

When `true`, the named property is time varying — that is, it has keyframes or an enabled expression. When this attribute is `true`, the attribute `canVaryOverTime`
must also be true.

#### 类型

Boolean; 只读.

---

### Property.maxValue

`app.project.item(index).layer(index).propertySpec.maxValue`

#### 描述

The maximum permitted value of the named property. If the `hasMax` attribute is `false`, an exception occurs, and an error is generated.

#### 类型

Floating-point value; 只读.

---

### Property.minValue

`app.project.item(index).layer(index).propertySpec.minValue`

#### 描述

The minimum permitted value of the named property. If the `hasMin` attribute is `false`, an exception occurs, and an error is generated.

#### 类型

Floating-point value; 只读.

---

### Property.numKeys

`app.project.item(index).layer(index).propertySpec.numKeys`

#### 描述

The number of keyframes in the named property. If the value is 0, the property is not being keyframed.

#### 类型

Integer; 只读.

---

### Property.propertyIndex

`app.project.item(index).layer(index).propertySpec.propertyIndex`

#### 描述

The position index of the named property. The first property is at index position 1.

#### 类型

Integer; 只读.

---

### Property.propertyValueType

`app.project.item(index).layer(index).propertySpec.propertyValueType`

#### 描述

The type of value stored in the named property. The `PropertyValueType` enumeration has one value for each type of data that can be stored in or retrieved from a property. Each type of data is stored and retrieved in a different kind of structure. All property objects store data according to one of these categories. For example, a 3D spatial property (such as a layer's position) is stored as an array of three floating-point values. When setting a value for position, pass in such an array, as follows: `mylayer.property("position").setValue([10, 20, 0]);`

In contrast, a shape property (such as a layer's mask shape) is stored as a Shape object. When setting a value for a shape, pass a Shape object, as follows:

```javascript
var myShape = new Shape();
myShape.vertices = [[0,0], [0,100], [100,100], [100,0]];
var myMask = mylayer.property("ADBE Mask Parade").property(1);
myMask.property("ADBE Mask Shape").setValue(myShape);
```

#### 类型

A `PropertyValueType` enumerated value; read/write. One of:

- `PropertyValueType.NO_VALUE`: Stores no data.
- `PropertyValueType.ThreeD_SPATIAL`: Array of three floating-point positional values. For example, an Anchor Point value might be [10.0, 20.2, 0.0]
- `PropertyValueType.ThreeD`: Array of three floating-point quantitative values. For example, a Scale value might be [100.0, 20.2, 0.0]
- `PropertyValueType.TwoD_SPATIAL`: Array of 2 floating-point positional values. For example, an Anchor Point value might be [5.1, 10.0]
- `PropertyValueType.TwoD`: Array of 2 floating-point quantitative values. For example, a Scale value might be [5.1, 100.0]
- `PropertyValueType.OneD`: A floating-point value.
- `PropertyValueType.COLOR`:Array of 4 floating-point values in the range `[0.0..1.0]`. For example, [0.8, 0.3, 0.1, 1.0]
- `PropertyValueType.CUSTOM_VALUE` : Custom property value, such as the Histogram property for the Levels effect.
- `PropertyValueType.MARKER`: [MarkerValue object](../../other/markervalue)
- `PropertyValueType.LAYER_INDEX`: Integer; a value of 0 means no layer.
- `PropertyValueType.MASK_INDEX`: Integer; a value of 0 means no mask.
- `PropertyValueType.SHAPE`: [Shape object](../../other/shape)
- `PropertyValueType.TEXT_DOCUMENT`: [TextDocument object](../../text/textdocument)

---

### Property.selectedKeys

`app.project.item(index).layer(index).propertySpec.selectedKeys`

#### 描述

The indices of all the selected keyframes in the named property. If no keyframes are selected, or if the property has no keyframes, returns an empty array.

#### 类型

Array of integers; 只读.

---

### Property.separationDimension

`app.project.item(index).layer(index).propertySpec.separationDimension`

#### 描述

For a separated follower, the dimension number it represents in the multidimensional leader. The first dimension starts at 0. For example, the Y Position property has a `separationDimension` value of 1; X Position has a value of 0.

#### 类型

Integer; 只读.

---

### Property.separationLeader

`app.project.item(index).layer(index).propertySpec.separationLeader`

#### 描述

The original multidimensional property for this separated follower. For example, if the current property is Y Position, this attribute's value points to the Position property.

:::tip
The original, consolidated, multidimensional property is the "separation leader" and the new, separated, single-dimensional properties are its "separation followers".
:::

#### 类型

Property object; 只读.

---

### Property.unitsText

`app.project.item(index).layer(index).propertySpec.unitsText`

#### 描述

The text description of the units in which the value is expressed.

#### 类型

String; 只读.

---

### Property.value

`app.project.item(index).layer(index).propertySpec.value`

#### 描述

The value of the named property at the current time.

- If `expressionEnabled` is `true`, returns the evaluated expression value.
- If there are keyframes, returns the keyframed value at the current time.
- Otherwise, returns the static value.

The type of value returned depends on the property value type. See [examples for Property object](#examples).

#### 类型

A value appropriate for the type of the property (see [Property.propertyValueType](#propertypropertyvaluetype)); 只读.

---

## 函数

### Property.addKey()

`app.project.item(index).layer(index).propertySpec.addKey(time)`

#### 描述

Adds a new keyframe or marker to the named property at the specified time and returns the index of the new keyframe.

#### 参数

| 参数 |         类型         |                                        描述                                         |
| --------- | -------------------- | ------------------------------------------------------------------------------------------ |
| `time`    | Floating-point value | The time, in seconds, at which to add the keyframe. The beginning of the composition is 0. |

#### 返回

Integer; the index of the new keyframe or marker.

---

### Property.addToMotionGraphicsTemplate()

`app.project.item(index).layer(index).propertySpec.addToMotionGraphicsTemplate(comp)`

:::note
该方法添加于 After Effects 15.0 (CC 2018)
:::

#### 描述

Adds the property to the Essential Graphics panel for the specified composition.

Returns `true` if the property is successfully added, otherwise `false`.

If the property is not added, it is either because it is not one of the supported property types or the property has already been added to the EGP for that composition. After Effects will present a warning dialog if the property cannot be added to the EGP.

Use the [Property.canAddToMotionGraphicsTemplate()](#propertycanaddtomotiongraphicstemplate) method to test whether the property can be added to a Motion Graphics template.

#### 参数

| 参数 |              类型               |                      描述                      |
| --------- | ------------------------------- | ----------------------------------------------------- |
| `comp`    | [CompItem](../../item/compitem) | The composition that you wish to add the property to. |

#### 返回

Boolean.

---

### Property.addToMotionGraphicsTemplateAs()

`app.project.item(index).layer(index).propertySpec.addToMotionGraphicsTemplateAs(comp, name)`

:::note
该方法添加于 After Effects 16.1 (CC 2019)
:::

#### 描述

Adds the property to the Essential Graphics panel for the specified composition, but with an additional option to give the EGP property a custom name.

Returns `true` if the property is successfully added, otherwise `false`.

If the property is not added, it is either because it is not one of the supported property types or the property has already been added to the EGP for that composition. After Effects will present a warning dialog if the property cannot be added to the EGP.

Use the [Property.canAddToMotionGraphicsTemplate()](#propertycanaddtomotiongraphicstemplate) method to test whether the property can be added to a Motion Graphics template.

#### 参数

| 参数 |              类型               |                      描述                      |
| --------- | ------------------------------- | ----------------------------------------------------- |
| `comp`    | [CompItem](../../item/compitem) | The composition that you wish to add the property to. |
| `name`    | String                          | The new name.                                         |

#### 返回

Boolean.

---

### Property.canAddToMotionGraphicsTemplate()

`app.project.item(index).layer(index).propertySpec.canAddToMotionGraphicsTemplate(comp)`

:::note
该方法添加于 After Effects 15.0 (CC 2018)
:::

#### 描述

Test whether or not the property can be added to the Essential Graphics panel for the specified composition.

Returns `true` if the property can be added, otherwise `false`.

If the property can not be added, it is either because it is not one of the supported property types or the property has already been added to the EGP for that composition. After Effects will present a warning dialog if the property cannot be added to the EGP.

Supported property types are:

- Checkbox
- Color
- Numerical Slider (i.e., a single-value numerical property, such as Transform > Opacity or the Slider Control expression control effect)
- Source Text

#### 参数

| 参数 |              类型               |                      描述                      |
| --------- | ------------------------------- | ----------------------------------------------------- |
| `comp`    | [CompItem](../../item/compitem) | The composition that you wish to add the property to. |

#### 返回

Boolean.

---

### Property.getSeparationFollower()

`app.project.item(index).layer(index).propertySpec.getSeparationFollower(dim)`

#### 描述

For a separated, multidimensional property, retrieves a specific follower property. For example, you can use this method on the Position property to access the separated X Position and Y Position properties

:::tip
This attribute applies only when the [isSeparationLeader](#propertyisseparationleader) attribute is `true`.
:::

#### 参数

| 参数 |  类型   |              描述              |
| --------- | ------- | ------------------------------------- |
| `dim`     | Integer | The dimension number (starting at 0). |

#### 返回

Property object, or an error if the property is not multidimensional or does not have the specified dimension.

---

### Property.isInterpolationTypeValid()

`app.project.item(index).layer(index).propertySpec.isInterpolationTypeValid(type)`

#### 描述

Returns `true` if the named property can be interpolated using the specified keyframe interpolation type.

#### 参数

#### 类型

A `KeyframeInterpolationType` enumerated value; one of:

- `KeyframeInterpolationType.LINEAR`
- `KeyframeInterpolationType.BEZIER`
- `KeyframeInterpolationType.HOLD`

#### 返回

Boolean.

---

### Property.keyInInterpolationType()

`app.project.item(index).layer(index).propertySpec.keyInInterpolationType(keyIndex)`

#### 描述

Returns the 'in' interpolation type for the specified keyframe.

#### 参数

| 参数  |                 类型                 |                                                       描述                                                        |
| ---------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `keyIndex` | Integer, 范围为 `[1..numKeys]` | The index for the keyframe, as returned by the [addKey](#propertyaddkey) or [nearestKeyIndex](#propertynearestkeyindex). |

#### 返回

A `KeyframeInterpolationType` enumerated value; one of:

- `KeyframeInterpolationType.LINEAR`
- `KeyframeInterpolationType.BEZIER`
- `KeyframeInterpolationType.HOLD`

---

### Property.keyInSpatialTangent()

`app.project.item(index).layer(index).propertySpec.keyInSpatialTangent(keyIndex)`

#### 描述

Returns the incoming spatial tangent for the specified keyframe, if the named property is spatial (that is, the value type is `TwoD_SPATIALorThreeD_SPATIAL`).

#### 参数

| 参数  |                 类型                 |                                                       描述                                                        |
| ---------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `keyIndex` | Integer, 范围为 `[1..numKeys]` | The index for the keyframe, as returned by the [addKey](#propertyaddkey) or [nearestKeyIndex](#propertynearestkeyindex). |

#### 返回

Array of floating-point values:

- If the property value type is `PropertyValueType.TwoD_SPATIAL`, the array contains 2 floating-point values.
- If the property value type is `PropertyValueType.ThreeD_SPATIAL`, the array contains 3 floating-point values.
- If the property value type is neither of these types, an exception is generated.

---

### Property.keyInTemporalEase()

`app.project.item(index).layer(index).propertySpec.keyInTemporalEase(keyIndex)`

#### 描述

Returns the incoming temporal ease for the specified keyframe.

#### 参数

| 参数  |                 类型                 |                                                       描述                                                        |
| ---------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `keyIndex` | Integer, 范围为 `[1..numKeys]` | The index for the keyframe, as returned by the [addKey](#propertyaddkey) or [nearestKeyIndex](#propertynearestkeyindex). |

#### 返回

Array of [KeyframeEase objects](../../other/keyframeease):

- If the property value type is `PropertyValueType.TwoD`, the array contains 2 objects.
- If the property value type is `PropertyValueType.ThreeD`, the array contains 3 objects.
- For any other value type, the array contains 1 object.

---

### Property.keyLabel()

`app.project.item(index).layer(index).propertySpec.keyLabel(keyIndex)`

:::note
该方法添加于 After Effects 22.6.
:::

#### 描述

The label color for the keyframe. Colors are represented by their number (0 for None, or 1 to 16 for one of the preset colors in the Labels preferences).

Read only. Keyframe color labels can be set by [setLabelAtKey](#propertysetlabelatkey).

#### 参数

| 参数  |                 类型                 |                                                       描述                                                        |
| ---------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `keyIndex` | Integer, 范围为 `[1..numKeys]` | The index for the keyframe, as returned by the [addKey](#propertyaddkey) or [nearestKeyIndex](#propertynearestkeyindex). |

#### 返回

Integer (0 to 16); read only.

---

### Property.keyOutInterpolationType()

`app.project.item(index).layer(index).propertySpec.keyOutInterpolationType(keyIndex)`

#### 描述

Returns the outgoing interpolation type for the specified keyframe.

#### 参数

| 参数  |                 类型                 |                                                       描述                                                        |
| ---------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `keyIndex` | Integer, 范围为 `[1..numKeys]` | The index for the keyframe, as returned by the [addKey](#propertyaddkey) or [nearestKeyIndex](#propertynearestkeyindex). |

#### 返回

A `KeyframeInterpolationType` enumerated value; one of:

- `KeyframeInterpolationType.LINEAR`
- `KeyframeInterpolationType.BEZIER`
- `KeyframeInterpolationType.HOLD`

---

### Property.keyOutSpatialTangent()

`app.project.item(index).layer(index).propertySpec.keyOutSpatialTangent(keyIndex)`

#### 描述

Returns the outgoing spatial tangent for the specified keyframe.

#### 参数

| 参数  |                 类型                 |                                                       描述                                                        |
| ---------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `keyIndex` | Integer, 范围为 `[1..numKeys]` | The index for the keyframe, as returned by the [addKey](#propertyaddkey) or [nearestKeyIndex](#propertynearestkeyindex). |

#### 返回

Array of floating-point values:

- If the property value type is `PropertyValueType.TwoD_SPATIAL`, the array contains 2 floating-point values.
- If the property value type is `PropertyValueType.ThreeD_SPATIAL`, the array contains 3 floating-point values.
- If the property value type is neither of these types, an exception is generated.

---

### Property.keyOutTemporalEase()

`app.project.item(index).layer(index).propertySpec.keyOutTemporalEase(keyIndex)`

#### 描述

Returns the outgoing temporal ease for the specified keyframe.

#### 参数

| 参数  |                 类型                 |                                                       描述                                                        |
| ---------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `keyIndex` | Integer, 范围为 `[1..numKeys]` | The index for the keyframe, as returned by the [addKey](#propertyaddkey) or [nearestKeyIndex](#propertynearestkeyindex). |

#### 返回

Array of KeyframeEase objects:

- If the property value type is `PropertyValueType.TwoD`, the array contains 2 objects.
- If the property value type is `PropertyValueType.ThreeD`, the array contains 3 objects.
- For any other value type, the array contains 1 object.

---

### Property.keyRoving()

`app.project.item(index).layer(index).propertySpec.keyRoving(keyIndex)`

#### 描述

Returns `true` if the specified keyframe is roving. The first and last keyframe in a property cannot rove; if you try to set roving for one of these, the operation is ignored, and keyRoving() continues to return `false`. If the property value type is neither `TwoD_SPATIAL` nor `ThreeD_SPATIAL`, an exception is generated.

#### 参数

| 参数  |                 类型                 |                                                       描述                                                        |
| ---------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `keyIndex` | Integer, 范围为 `[1..numKeys]` | The index for the keyframe, as returned by the [addKey](#propertyaddkey) or [nearestKeyIndex](#propertynearestkeyindex). |

#### 返回

Boolean.

---

### Property.keySelected()

`app.project.item(index).layer(index).propertySpec.keySelected(keyIndex)`

#### 描述

Returns `true` if the specified keyframe is selected.

#### 参数

| 参数  |                 类型                 |                                                       描述                                                        |
| ---------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `keyIndex` | Integer, 范围为 `[1..numKeys]` | The index for the keyframe, as returned by the [addKey](#propertyaddkey) or [nearestKeyIndex](#propertynearestkeyindex). |

#### 返回

Boolean.

---

### Property.keySpatialAutoBezier()

`app.project.item(index).layer(index).propertySpec.keySpatialAutoBezier(keyIndex)`

#### 描述

Returns `true` if the specified keyframe has spatial auto-Bezier interpolation. (This type of interpolation affects this keyframe only if `keySpatialContinuous(keyIndex)` is also true.) If the property value type is neither `TwoD_SPATIAL` nor `ThreeD_SPATIAL`, an exception is generated.

#### 参数

| 参数  |                 类型                 |                                                       描述                                                        |
| ---------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `keyIndex` | Integer, 范围为 `[1..numKeys]` | The index for the keyframe, as returned by the [addKey](#propertyaddkey) or [nearestKeyIndex](#propertynearestkeyindex). |

#### 返回

Boolean.

---

### Property.keySpatialContinuous()

`app.project.item(index).layer(index).propertySpec.keySpatialContinuous(keyIndex)`

#### 描述

Returns `true` if the specified keyframe has spatial continuity. If the property value type is neither `TwoD_SPATIAL` nor `ThreeD_SPATIAL`, an exception is generated.

#### 参数

| 参数  |                 类型                 |                                                       描述                                                        |
| ---------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `keyIndex` | Integer, 范围为 `[1..numKeys]` | The index for the keyframe, as returned by the [addKey](#propertyaddkey) or [nearestKeyIndex](#propertynearestkeyindex). |

#### 返回

Boolean.

---

### Property.keyTemporalAutoBezier()

`app.project.item(index).layer(index).propertySpec.keyTemporalAutoBezier(keyIndex)`

#### 描述

Returns `true` if the specified keyframe has temporal auto-Bezier interpolation. Temporal auto-Bezier interpolation affects this keyframe only if the keyframe interpolation type is `KeyframeInterpolationType.BEZIER` for both `keyInInterpolationType(keyIndex)` and `keyOutInterpolationType(keyIndex)`.

#### 参数

| 参数  |                 类型                 |                                                       描述                                                        |
| ---------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `keyIndex` | Integer, 范围为 `[1..numKeys]` | The index for the keyframe, as returned by the [addKey](#propertyaddkey) or [nearestKeyIndex](#propertynearestkeyindex). |

#### 返回

Boolean.

---

### Property.keyTemporalContinuous()

`app.project.item(index).layer(index).propertySpec.keyTemporalContinuous(keyIndex)`

#### 描述

Returns `true` if the specified keyframe has temporal continuity. Temporal continuity affects this keyframe only if keyframe interpolation type is `KeyframeInterpolationType.BEZIER` for both `keyInInterpolationType(keyIndex)` and `keyOutInterpolationType(keyIndex)`.

#### 参数

| 参数  |                 类型                 |                                                       描述                                                        |
| ---------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `keyIndex` | Integer, 范围为 `[1..numKeys]` | The index for the keyframe, as returned by the [addKey](#propertyaddkey) or [nearestKeyIndex](#propertynearestkeyindex). |

#### 返回

Boolean.

---

### Property.keyTime()

`app.project.item(index).layer(index).propertySpec.keyTime(keyIndex)`
`app.project.item(index).layer(index).propertySpec.keyTime(markerComment)`

#### 描述

Finds the specified keyframe or marker and returns the time at which it occurs. If no keyframe or marker can be found that matches the argument, this method generates an exception, and an error is displayed.

#### 参数

|    参数    |                 类型                 |                                                       描述                                                        |
| --------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `keyIndex`      | Integer, 范围为 `[1..numKeys]` | The index for the keyframe, as returned by the [addKey](#propertyaddkey) or [nearestKeyIndex](#propertynearestkeyindex). |
| `markerComment` | String                               | The comment attached to a marker (see [MarkerValue.comment](../other/markervalue.md#markervaluecomment) attribute).      |

#### 返回

Floating-point value.

---

### Property.keyValue()

`app.project.item(index).layer(index).propertySpec.keyValue(keyIndex)`

`app.project.item(index).layer(index).propertySpec.keyValue(markerComment)`

#### 描述

Finds the specified keyframe or marker and returns its current value. If no keyframe or marker can be found that matches the argument, this method generates an exception, and an error is displayed.

#### 参数

|    参数    |                 类型                 |                                                       描述                                                        |
| --------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `keyIndex`      | Integer, 范围为 `[1..numKeys]` | The index for the keyframe, as returned by the [addKey](#propertyaddkey) or [nearestKeyIndex](#propertynearestkeyindex). |
| `markerComment` | String                               | The comment attached to a marker (see [MarkerValue.comment](../other/markervalue.md#markervaluecomment) attribute).      |

#### 返回

Returns the value of the type corresponding to the [PropertyValueType](#propertypropertyvaluetype).

---

### Property.nearestKeyIndex()

`app.project.item(index).layer(index).propertySpec.nearestKeyIndex(time)`

#### 描述

Returns the index of the keyframe nearest to the specified time.

#### 参数

| 参数 |         类型         |                         描述                          |
| --------- | -------------------- | ------------------------------------------------------------ |
| `time`    | Floating-point value | The time, in seconds. The beginning of the composition is 0. |

#### 返回

Integer.

---

### Property.removeKey()

`app.project.item(index).layer(index).propertySpec.removeKey(keyIndex)`

#### 描述

Removes the specified keyframe from the named property. If no keyframe with the specified index exists, generates an exception and displays an error. When a keyframe is removed, the remaining index numbers change. To remove more than one keyframe, you must start with the highest index number and work down to the lowest to ensure that the remaining indices reference the same keyframe after each removal.

#### 参数

| 参数  |                 类型                 |                                                       描述                                                        |
| ---------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `keyIndex` | Integer, 范围为 `[1..numKeys]` | The index for the keyframe, as returned by the [addKey](#propertyaddkey) or [nearestKeyIndex](#propertynearestkeyindex). |

#### 返回

Nothing.

---

### Property.setAlternateSource()

`app.project.item(index).layer(index).propertySpec.setAlternateSource(newSource)`

:::note
该方法添加于 After Effects 18.0 (2021)
:::

#### 描述

Set the alternate source for this property.

The Property object and the input parameters for the AVItem that is being called needs to be Media Replacement compatible for the action to go through.

- Use the [AVItem.isMediaReplacementCompatible](../item/avitem.md#avitemismediareplacementcompatible) method to test whether the AVItem can be used as an alternate source for Media Replacement.
- Use [Property.canSetAlternateSource](#propertycansetalternatesource) to test if the property allows Media Replacement.

#### 参数

|  参数  |                类型                |      描述       |
| ----------- | ---------------------------------- | ---------------------- |
| `newSource` | [AVItem object](../../item/avitem) | The new source AVItem. |

#### 返回

Nothing.

---

### Property.setInterpolationTypeAtKey()

`app.project.item(index).layer(index).propertySpec.setInterpolationTypeAtKey(keyIndex, inType[, outType])`

#### 描述

Sets the `in` and `out` interpolation types for the specified keyframe.

#### 参数

| 参数  |               类型                |                                                                      描述                                                                      |
|------------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| `keyIndex` | Integer                           | The index for the keyframe, 范围为 `[1..numKeys]`, as returned by the [addKey](#propertyaddkey) or [nearestKeyIndex](#propertynearestkeyindex). |
| `inType`   | `KeyframeInterpolationType` enum. | The incoming interpolation type. One of:                                                                                                              |
|            |                                   | - `KeyframeInterpolationType.LINEAR`                                                                                                                  |
|            |                                   | - `KeyframeInterpolationType.BEZIER`                                                                                                                  |
|            |                                   | - `KeyframeInterpolationType.HOLD`                                                                                                                    |
| `outType`  | `KeyframeInterpolationType` enum. | Optional. The outgoing interpolation type. If not supplied, the 'out' type is set to the `inType` value. One of:                                      |
|            |                                   | - `KeyframeInterpolationType.LINEAR`                                                                                                                  |
|            |                                   | - `KeyframeInterpolationType.BEZIER`                                                                                                                  |
|            |                                   | - `KeyframeInterpolationType.HOLD`                                                                                                                    |

#### 返回

Nothing.

---

### Property.setLabelAtKey()

`app.project.item(index).layer(index).propertySpec.setLabelAtKey(keyIndex, labelIndex)`

:::note
该方法添加于 After Effects 22.6 (2022)
:::

#### 描述

Set the label color for the keyframe. Colors are represented by their number (0 for None, or 1 to 16 for one of the preset colors in the Labels preferences).

#### 参数

|  参数   |                 类型                 |                                                       描述                                                        |
| ------------ | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `keyIndex`   | Integer, 范围为 `[1..numKeys]` | The index for the keyframe, as returned by the [addKey](#propertyaddkey) or [nearestKeyIndex](#propertynearestkeyindex). |
| `labelIndex` | Integer, 范围为 `[0..16]`      | The index for the new label value.                                                                                       |

#### 返回

Nothing.

---

### Property.setPropertyParameters()

`app.project.item(index).layer(index).propertySpec.setPropertyParameters(items)`

:::note
该方法添加于 After Effects 17.0.1 (2020)
:::

#### 描述

Sets parameters for a Dropdown Menu Control's Menu Property. This method will overwrite the existing set of Menu items with the provided array of strings.

- The Dropdown Menu Control effect's Menu property is the only property that allows parameters to be set.
- To check if a property allows parameters to be set, check with [isDropdownEffect](#propertyisdropdowneffect) before calling this method.
- An exception is raised whenever this method fails.

#### 参数

| 参数 |       类型       |                                                                                  描述                                                                                  |
|-----------|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `items`   | Array of strings | Values which will replace the existing menu entries in a Dropdown Menu Control.                                                                                               |
|           |                  | - Only strings are allowed.                                                                                                                                                   |
|           |                  | - Empty item strings are not allowed.                                                                                                                                         |
|           |                  | - Duplicate item strings are not allowed.                                                                                                                                     |
|           |                  | - The character `"\"` is not allowed in the item strings.                                                                                                                     |
|           |                  | - The string `"(-"` can be specified as of the item strings, to create a separator line in the dropdown menu. The separator lines will claim an index for each of themselves. |

:::tip

For example: Specifying the item strings in Japanese while running the script on an English system will create a dropdown effect with illegible characters in the item strings.
:::

#### 示例

```javascript
var dropdownItems = [
    "First Item",
    "Second Item",
    "(-",
    "Another Item",
    "Last Item"
];

var dropdownEffect = layer.property("ADBE Effect Parade").addProperty("ADBE Dropdown Control");
dropdownEffect.property(1).setPropertyParameters(dropdownItems);
```

#### 返回

Property object, the updated Dropdown Menu Control's Menu property.

---

### Property.setRovingAtKey()

`app.project.item(index).layer(index).propertySpec.setRovingAtKey(keyIndex, newVal)`

#### 描述

Turns roving on or off for the specified keyframe. The first and last keyframe in a property cannot rove; if you try to set roving for one of these, the operation is ignored, and `keyRoving()` continues to return `false`. If the property value type is neither `TwoD_SPATIAL` nor `ThreeD_SPATIAL`, an exception is generated.

#### 参数

| 参数  |                 类型                 |                                                       描述                                                        |
| ---------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `keyIndex` | Integer, 范围为 `[1..numKeys]` | The index for the keyframe, as returned by the [addKey](#propertyaddkey) or [nearestKeyIndex](#propertynearestkeyindex). |
| `newVal`   | Boolean                              | `true` to turn roving on, `false` to turn roving off.                                                                    |

#### 返回

Nothing.

---

### Property.setSelectedAtKey()

`app.project.item(index).layer(index).propertySpec.setSelectedAtKey(keyIndex, onOff)`

#### 描述

Selects or deselects the specified keyframe.

#### 参数

| 参数  |                 类型                 |                                                       描述                                                        |
| ---------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `keyIndex` | Integer, 范围为 `[1..numKeys]` | The index for the keyframe, as returned by the [addKey](#propertyaddkey) or [nearestKeyIndex](#propertynearestkeyindex). |
| `onOff`    | Boolean                              | `true` to select the keyframe, `false` to deselect it.                                                                   |

#### 返回

Nothing.

---

### Property.setSpatialAutoBezierAtKey()

`app.project.item(index).layer(index).propertySpec.setSpatialAutoBezierAtKey(keyIndex, newVal)`

#### 描述

Turns spatial auto-Bezier interpolation on or off for the specified keyframe. If the property value type is neither `TwoD_SPATIAL` nor `ThreeD_SPATIAL`, an exception is generated.

#### 参数

| 参数  |                 类型                 |                                                       描述                                                        |
| ---------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `keyIndex` | Integer, 范围为 `[1..numKeys]` | The index for the keyframe, as returned by the [addKey](#propertyaddkey) or [nearestKeyIndex](#propertynearestkeyindex). |
| `newVal`   | Boolean                              | `true` to turn spatial auto-Bezier on, `false` to turn it off.                                                           |

#### 返回

Nothing.

---

### Property.setSpatialContinuousAtKey()

`app.project.item(index).layer(index).propertySpec.setSpatialContinuousAtKey(keyIndex, newVal)`

#### 描述

Turns spatial continuity on or off for the specified keyframe. If the property value type is neither `TwoD_SPATIAL` nor `ThreeD_SPATIAL`, an exception is generated.

#### 参数

| 参数  |                 类型                 |                                                       描述                                                        |
| ---------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `keyIndex` | Integer, 范围为 `[1..numKeys]` | The index for the keyframe, as returned by the [addKey](#propertyaddkey) or [nearestKeyIndex](#propertynearestkeyindex). |
| `newVal`   | Boolean                              | `true` to turn spatial auto-Bezier on, `false` to turn it off.                                                           |

#### 返回

Nothing.

---

### Property.setSpatialTangentsAtKey()

`app.project.item(index).layer(index).propertySpec.setSpatialTangentsAtKey(keyIndex, inTangent[, outTangent])`

#### 描述

Sets the incoming and outgoing tangent vectors for the specified keyframe. If the property value type is neither `TwoD_SPATIAL` nor `ThreeD_SPATIAL`, an exception is generated.

#### 参数

|  参数   |                   类型                    |                                                                      描述                                                                      |
|--------------|-------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| `keyIndex`   | Integer                                   | The index for the keyframe, 范围为 `[1..numKeys]`, as returned by the [addKey](#propertyaddkey) or [nearestKeyIndex](#propertynearestkeyindex). |
| `inTangent`  | An array of 2 or 3 floating-point values. | The incoming tangent vector.                                                                                                                          |
|              |                                           | - If the property value type is `PropertyValueType.TwoD_SPATIAL`, the array contains 2 values.                                                        |
|              |                                           | - If the property value type is `PropertyValueType.ThreeD_SPATIAL`, the array contains 3 values.                                                      |
| `outTangent` | An array of 2 or 3 floating-point values. | Optional. The outgoing tangent vector. If not supplied, the `out` tangent is set to the `inTangent` value.                                            |
|              |                                           | - If the property value type is `PropertyValueType.TwoD_SPATIAL`, the array contains 2 values.                                                        |
|              |                                           | - If the property value type is `PropertyValueType.ThreeD_SPATIAL`, the array contains 3 values.                                                      |

#### 返回

Nothing.

---

### Property.setTemporalAutoBezierAtKey()

`app.project.item(index).layer(index).propertySpec.setTemporalAutoBezierAtKey(keyIndex, newVal)`

#### 描述

Turns temporal auto-Bezier interpolation on or off for the specified keyframe. When this is turned on, it affects this keyframe only if `keySpatialContinuous(keyIndex)` is also true.

#### 参数

| 参数  |                 类型                 |                                                       描述                                                        |
| ---------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `keyIndex` | Integer, 范围为 `[1..numKeys]` | The index for the keyframe, as returned by the [addKey](#propertyaddkey) or [nearestKeyIndex](#propertynearestkeyindex). |
| `newVal`   | Boolean                              | `true` to turn temporal auto-Bezier on, `false` to turn it off.                                                          |

#### 返回

Nothing.

---

### Property.setTemporalContinuousAtKey()

`app.project.item(index).layer(index).propertySpec.setTemporalContinuousAtKey(keyIndex, newVal)`

#### 描述

Turns temporal continuity on or off for the specified keyframe. When temporal continuity is turned on, it affects this keyframe only if the keyframe interpolation type is `KeyframeInterpolationType.BEZIER` for both `keyInInterpolationType(keyIndex)` and `keyOutInterpolationType(keyIndex)`.

#### 参数

| 参数  |                 类型                 |                                                       描述                                                        |
| ---------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `keyIndex` | Integer, 范围为 `[1..numKeys]` | The index for the keyframe, as returned by the [addKey](#propertyaddkey) or [nearestKeyIndex](#propertynearestkeyindex). |
| `newVal`   | Boolean                              | `true` to turn temporal auto-Bezier on, `false` to turn it off.                                                          |

#### 返回

Nothing.

---

### Property.setTemporalEaseAtKey()

`app.project.item(index).layer(index).propertySpec.setTemporalEaseAtKey(keyIndex, inTemporalEase[, outTemporalEase])`

#### 描述

Sets the incoming and outgoing temporal ease for the specified keyframe. See [KeyframeEase object](../../other/keyframeease).

#### 参数

|     参数     |                                  类型                                   |                                                                      描述                                                                      |
|-------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| `keyIndex`        | Integer                                                                 | The index for the keyframe, 范围为 `[1..numKeys]`, as returned by the [addKey](#propertyaddkey) or [nearestKeyIndex](#propertynearestkeyindex). |
| `inTemporalEase`  | An array of 1, 2, or 3 [KeyframeEase objects](../../other/keyframeease) | The incoming temporal ease.                                                                                                                           |
|                   |                                                                         | - If the property value type is `PropertyValueType.TwoD`, the array contains 2 objects.                                                               |
|                   |                                                                         | - If the property value type is `PropertyValueType.ThreeD`, the array contains 3 objects.                                                             |
|                   |                                                                         | - For all other value types, the array contains 1 object.                                                                                             |
| `outTemporalEase` | An array of 1, 2, or 3 [KeyframeEase objects](../../other/keyframeease) | Optional. The outgoing temporal ease. If not supplied, the outgoing ease is set to the `inTemporalEase` value.                                        |
|                   |                                                                         | - If the property value type is `PropertyValueType.TwoD`, the array contains 2 objects.                                                               |
|                   |                                                                         | - If the property value type is `PropertyValueType.ThreeD`, the array contains 3 objects.                                                             |
|                   |                                                                         | - For all other value types, the array contains 1 object.                                                                                             |

#### 返回

Nothing.

---

### Property.setValue()

`app.project.item(index).layer(index).propertySpec.setValue(newValue)`

#### 描述

Sets the static value of a property that has no keyframes. If the named property has keyframes, this method generates an exception and displays an error. To set the value of a property with keyframes, use [Property.setValueAtTime()](#propertysetvalueattime) or [Property.setValueAtKey()](#propertysetvalueatkey).

#### 参数

| 参数  | Type  |                                                      描述                                                      |
| ---------- | ----- | --------------------------------------------------------------------------------------------------------------------- |
| `newValue` | Value | A value appropriate for the type of property being set; see [Property.propertyValueType](#propertypropertyvaluetype). |

#### 返回

Nothing.

---

### Property.setValueAtKey()

`app.project.item(index).layer(index).propertySpec.setValueAtKey(keyIndex, newValue)`

#### 描述

Finds the specified keyframe and sets its value. If the named property has no keyframes, or no keyframe with the specified index, this method generates an exception and displays an error.

#### 参数

| 参数  |                 类型                 |                                                       描述                                                        |
| ---------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `keyIndex` | Integer, 范围为 `[1..numKeys]` | The index for the keyframe, as returned by the [addKey](#propertyaddkey) or [nearestKeyIndex](#propertynearestkeyindex). |
| `newValue` | Value                                | A value appropriate for the type of property being set; see [Property.propertyValueType](#propertypropertyvaluetype).    |

#### 返回

Nothing.

---

### Property.setValueAtTime()

`app.project.item(index).layer(index).propertySpec.setValueAtTime(time, newValue)`

#### 描述

Sets the value of a keyframe at the specified time. Creates a new keyframe for the named property, if one does not currently exist for the specified time, and sets its value.

#### 参数

| 参数  |         类型         |                                                      描述                                                      |
| ---------- | -------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `time`     | Floating-point value | The time, in seconds, at which to set the value. The beginning of the composition is 0.                               |
| `newValue` | Value                | A value appropriate for the type of property being set; see [Property.propertyValueType](#propertypropertyvaluetype). |

#### 返回

Nothing.

---

### Property.setValuesAtTimes()

`app.project.item(index).layer(index).propertySpec.setValuesAtTimes(times, newValues)`

#### 描述

Sets values for a set of keyframes at specified times. Creates a new keyframe for the named property, if one does not currently exist for a specified time, and sets its value. Times and values are expressed as arrays; the arrays must be of the same length.

#### 参数

|  参数  |              类型              |                                                           描述                                                           |
| ----------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `times`     | Array of floating-point values | An array of times, in seconds. The beginning of the composition is 0.                                                           |
| `newValues` | Array of values                | A array of values appropriate for the type of property being set; see [Property.propertyValueType](#propertypropertyvaluetype). |

#### 返回

Nothing.

---

### Property.valueAtTime()

`app.project.item(index).layer(index).propertySpec.valueAtTime(time, preExpression)`

#### 描述

The value of the named property as evaluated at the specified time. Note that the type of value returned is not made explicit; it will be of a different type, depending on the property evaluated.

:::tip
As After Effects 13.6, this method now waits for time-intensive expressions, like `sampleImage`, to finish evaluating before it returns the result.
:::

#### 参数

|    参数    |         类型         |                                                                                                                                        描述                                                                                                                                        |
| --------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `time`          | Floating-point value | The time, in seconds, at which to set the value. The beginning of the composition is 0.                                                                                                                                                                                                   |
| `preExpression` | Boolean              | If the property has an expression and this is `true`, return the value for the specified time without applying the expression to it. When `false`, return the result of evaluating the expression for the specified time. Ignored if the property does not have an associated expression. |

#### 返回

A value appropriate for the type of the property (see "Property propertyValueType attribute" on page 138).
