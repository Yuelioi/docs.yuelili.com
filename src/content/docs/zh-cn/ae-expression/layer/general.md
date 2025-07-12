---
title: 常规
---

# Layer General

`thisLayer`

:::info
在本页中，我们将使用 `thisLayer` 作为调用这些项的示例，但请注意，任何返回 [Layer](.././layer) 的方法都可以使用。
:::

---

## 属性

### Layer.active

`thisLayer.active`

#### 描述

如果图层的视频开关已打开，并且当前时间在图层的入点到出点范围内，则返回 `true`；否则返回 `false`。

#### 类型

布尔值

---

### Layer.audioActive

`thisLayer.audioActive`

#### 描述

如果图层的音频开关已打开，并且当前时间在图层的入点到出点范围内，则返回 `true`；否则返回 `false`。

#### 类型

布尔值

---

### Layer.enabled

`thisLayer.enabled`

#### 描述

图层是否启用。

#### 类型

布尔值。如果图层的视频开关已打开，则为 `true`；否则为 `false`。

---

### Layer.hasAudio

`thisLayer.hasAudio`

#### 描述

图层是否有音频。

#### 类型

布尔值。如果图层有音频，则为 `true`；否则为 `false`。

---

### Layer.hasParent

`thisLayer.hasParent`

#### 描述

使用 `hasParent` 属性来确定图层是否有父图层。即使图层当前没有父图层，也可以使用此属性。

#### 类型

布尔值。如果图层有父图层，则为 `true`；否则为 `false`。

#### 示例

以下表达式表示应用它的图层会根据父图层的位置进行摆动。如果图层没有父图层，则根据其自身位置进行摆动。

如果图层稍后被赋予父图层，则其行为会相应改变：

 ```js
idx = index;
if (hasParent) {
 idx = parent.index;
}
thisComp.layer(idx).position.wiggle(5,20)
```

---

### Layer.hasVideo

`thisLayer.hasVideo`

#### 描述

图层是否有视频。

#### 类型

布尔值。如果图层有视频，则为 `true`；否则为 `false`。

---

### Layer.height

`thisLayer.height`

#### 描述

返回图层的高度，单位为像素。

如果图层有 [源](../../sub-objects#layersource)，则与源的 [合成高度](../../objects/comp#compheight) 或源的 [素材高度](../../objects/footage#footageheight) 相同（视情况而定）。

#### 类型

数字

---

### Layer.index

`thisLayer.index`

#### 描述

返回图层在合成中的索引号。

#### 类型

数字

---

### Layer.inPoint

`thisLayer.inPoint`

#### 描述

返回图层的入点，单位为秒。

:::note 通常情况下，`outPoint` 的值大于 `inPoint` 的值。然而，如果图层在时间上反转，`inPoint` 的值将大于 `outPoint` 的值。同样，`startTime` 的值也可能大于 `inPoint` 的值。 :::#### 类型

数字

---

### Layer.outPoint

`thisLayer.outPoint`

#### 描述

返回图层的出点，单位为秒。

#### 类型

数字

---

### Layer.parent

`thisLayer.parent`

#### 描述

返回图层的父图层对象（如果有）。

你可以使用 [`Layer.hasParent`]() 属性来检查图层是否有父图层。

#### 类型

[Layer](../layer/layer)、[Light](../objects/light) 或 [Camera](../objects/camera) 对象

#### 示例

 ```js
position[0] + parent.width
```

---

### Layer.startTime

`thisLayer.startTime`

#### 描述

返回图层的开始时间，单位为秒。

#### 类型

数字

---

### Layer.width

`thisLayer.width`

#### 描述

返回图层的宽度，单位为像素。

如果图层有 [源](../../sub-objects#layersource)，则与源的 [合成宽度](../objects/comp#compwidth) 或源的 [素材宽度](../objects/footage#footagewidth) 相同（视情况而定）。

#### 类型

数字

---

## 函数

### Layer.sampleImage()

`thisLayer.sampleImage(point[, radius=[0.5, 0.5]][, postEffect=true][, t=time])`

#### 描述

采样图层的颜色和 Alpha 通道值，并返回指定点周围区域内像素的平均 Alpha 加权值，作为一个数组：`[red, green, blue, alpha]`。

:::note 在表达式中使用 `sampleImage()` 不再禁用多处理。 :::#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `point` | 二维数字数组 | 必需。采样的点，位于图层空间中。点 `[0, 0]` 是图层左上角像素的中心。 |
| `radius` | 二维数字数组 | 可选。指定采样中心到采样矩形边缘的水平距离和垂直距离。默认值采样一个像素。默认为 `[0.5, 0.5]`。 |
| `postEffect` | 布尔值 | 可选。如果为 `true`，则采样在图层蒙版和效果**直接应用于图层**之后的值。如果为 `false`，则采样在图层蒙版和效果之前的值。默认为 `true`。 |
| `t` | 数字 | 可选。默认为 `time`。 |

#### 类型

数组（四维）

#### 示例

以下代码采样一个宽度为 4 像素、高度为 3 像素的矩形，中心位于图层左上角向下和向右 100 像素的位置：

 ```js
thisComp.layer(1).sampleImage([100, 100], [2, 1.5])
```
