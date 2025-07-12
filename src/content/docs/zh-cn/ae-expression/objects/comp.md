---
title: 合成
---
# Comp

`thisComp`

`comp("CompName")`

`layer("layerName").source`

这些属性和方法可以在合成对象上调用。

通常通过以下几种方式访问这些属性，最常见的是：

* `thisComp` 获取表达式所在的活动合成的合成对象，
* `comp("CompName")` 通过名称获取特定的合成，
* `layer("layerName").source`， **如果引用的是预合成图层** ，获取目标预合成图层的源合成

:::info
在本页中，我们将使用 `thisComp` 作为调用这些项的示例，但请注意，任何返回 [Comp](#) 的方法都可以使用。
:::

---

## 属性

### Comp.activeCamera

`thisComp.activeCamera`

#### 描述

返回当前帧渲染合成时使用的 [Camera 对象](../camera)。

此摄像机不一定是你在合成面板中查看的摄像机。

#### 类型

[Camera](../camera)

---

### Comp.bgColor

`thisComp.bgColor`

#### 描述

返回合成的背景颜色。

#### 类型

数组（四维）

---

### Comp.displayStartTime

`thisComp.displayStartTime`

#### 描述

返回合成的开始时间，单位为秒。

#### 类型

数字

---

### Comp.duration

`thisComp.duration`

#### 描述

返回合成的持续时间，单位为秒。

#### 类型

数字

---

### Comp.frameDuration

`thisComp.frameDuration`

#### 描述

返回一帧的持续时间，单位为秒。

#### 类型

数字

---

### Comp.height

`thisComp.height`

#### 描述

返回合成的高度，单位为像素。

#### 类型

数字

---

### Comp.marker

`thisComp.marker`

#### 描述

返回给定合成的 [Marker](../marker-property) 属性。

:::note 如果你有一个在早期版本的 After Effects 中创建的项目，并且在表达式中使用了合成标记编号，则必须将这些调用更改为使用 `marker.key(name)`。因为合成标记的默认名称是数字，所以将引用转换为使用名称通常只需将数字用引号括起来。 :::#### 类型

[Marker 属性](../marker-property)

---

### Comp.name

`thisComp.name`

#### 描述

返回合成的名称。

#### 类型

字符串

---

### Comp.ntscDropFrame

`thisComp.ntscDropFrame`

:::note 该方法添加于 After Effects CS5.5 :::#### 描述

如果时间码是丢帧格式，则返回 `true`。

#### 类型

布尔值

---

### Comp.numLayers

`thisComp.numLayers`

#### 描述

返回合成中的图层数量。

#### 类型

数字

---

### Comp.pixelAspect

`thisComp.pixelAspect`

#### 描述

返回合成的像素宽高比。

#### 类型

数字

---

### Comp.shutterAngle

`thisComp.shutterAngle`

#### 描述

返回合成的快门角度值，单位为度。

#### 类型

数字

---

### Comp.shutterPhase

`thisComp.shutterPhase`

#### 描述

返回合成的快门相位，单位为度。

#### 类型

数字

---

### Comp.width

`thisComp.width`

#### 描述

返回合成的宽度，单位为像素。

#### 类型

数字

#### 示例

将以下表达式应用于图层的 Position 属性，以使图层在合成帧中居中：

 ```js
[thisComp.width / 2, thisComp.height / 2];
```

---

## 函数

### Comp.layer()

`thisComp.layer(index)`

`thisComp.layer(name)`

`thisComp.layer(otherLayer, relIndex)`

#### 描述

返回具有指定 `index` 或 `name` 的 [Layer](../layer/layer) 对象。

`index` 值指的是时间轴面板中的图层顺序。

`name` 值指的是用户指定的图层名称，如果没有图层名称，则指的是图层源名称。

如果存在重复的名称，After Effects 会使用时间轴面板中的第一个（最顶部）图层。

如果使用 `otherLayer, relIndex` 调用，则获取与 `otherLayer` 相对 `relIndex` 层的图层。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `index` | 数字 | 要获取的图层名称或索引。 |
| `name` | 字符串 | |
| `otherLayer` | [Layer](../layer/layer) | 开始获取相对图层的“其他”图层 |
| `relIndex` | 数字 | 相对于 `otherLayer` 向上或向下移动的图层数量 |

#### 返回

[Layer](../layer/layer)、[Light](../light) 或 [Camera](../camera) 对象

#### 示例

获取当前合成中的第 3 个图层：

 ```js
thisComp.layer(3)
```

从当前合成中获取名为 "Solid 1" 的图层：

 ```js
thisComp.layer("Solid 1")
```

检查时间轴面板中下一个图层是否处于活动状态：

 ```js
const nextLayer = thisComp.layer(thisLayer, 1);
nextLayer.active;
```

---

### Comp.layerByComment()

`thisComp.layerByComment(comment)`

#### 描述

通过将注释参数与图层注释列中的值匹配来检索图层。

匹配是简单的文本匹配。它们会匹配部分单词，并且区分大小写。匹配似乎不使用正则表达式或通配符。如果存在重复的注释，After Effects 会使用时间轴面板中的第一个（最顶部）图层。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `comment` | 字符串 | 要查找图层的注释 |

#### 返回

[Layer](../layer/layer)、[Light](../light) 或 [Camera](../camera) 对象

#### 示例

 ```js
// 注意这将匹配注释为 "Controller" 或 "Motion Control" 的图层
thisComp.layerByComment("Control");
```
