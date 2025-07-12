---
title: 专色
---
# 专色

`app.activeDocument.spots[index]`

#### 描述

包含在 [SpotColor](.././SpotColor) 对象中的自定义颜色定义。

如果在创建专色时未指定属性，则会提供默认值。

但是，如果指定颜色，则必须使用与文档相同的颜色空间，即 CMYK 或 RGB。否则会导致错误。

新的专色将添加到色板面板中的色板列表末尾。

---

## 属性

### Spot.color

`app.activeDocument.spots[index].color`

#### 描述

此专色的颜色信息。

#### 类型

[Color](.././Color)

---

### Spot.colorType

`app.activeDocument.spots[index].colorType`

#### 描述

此自定义颜色的颜色模型。

#### 类型

[ColorModel](../scripting-constants#colormodel)

---

### Spot.name

`app.activeDocument.spots[index].name`

#### 描述

专色的名称。

#### 类型

字符串

---

### Spot.parent

`app.activeDocument.spots[index].parent`

#### 描述

包含此专色的文档。

#### 类型

[Document](.././Document); 只读。

---

### Spot.spotKind

`app.activeDocument.spots[index].spotKind`

#### 描述

专色的类型（RGB、CMYK 或 LAB）。这是专色对象中包含的颜色类型的名称。

#### 类型

[SpotColorKind](../scripting-constants#spotcolorkind); 只读。

---

### Spot.typename

`app.activeDocument.spots[index].typename`

#### 描述

引用对象的类名。

#### 类型

字符串; 只读。

---

## 方法

### Spot.getInternalColor()

`app.activeDocument.spots[index].getInternalColor()`

#### 描述

获取专色的内部颜色。

#### 返回值

颜色分量。

---

### Spot.remove()

`app.activeDocument.spots[index].remove()`

#### 描述

删除此对象。

#### 返回值

无。

---

## 示例

### 创建新的专色

```javascript
// 在当前文档中创建一个新的专色，然后将 80% 的色调应用于该颜色
if ( app.documents.length > 0 ) {
 var doc = app.activeDocument;

 // 创建新的专色
 var newSpot = doc.spots.add();

 // 定义新的颜色值
 var newColor = new CMYKColor();
 newColor.cyan = 35;
 newColor.magenta = 0;
 newColor.yellow = 50;
 newColor.black = 0;

 // 定义一个新的 SpotColor，使用新专色的 80% 色调
 // 该专色可以像其他颜色一样应用于艺术项目。
 newSpot.name = "豌豆绿";
 newSpot.colorType = ColorModel.SPOT;
 newSpot.color = newColor;

 var newSpotColor = new SpotColor();
 newSpotColor.spot = newSpot;
 newSpotColor.tint = 80;
}
```
