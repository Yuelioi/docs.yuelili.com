---
title: 专色
---
# 专色

`app.activeDocument.spots`

#### 描述

文档中的 [SpotColor](.././SpotColor) 对象集合。

---

## 属性

### Spots.length

`app.activeDocument.spots.length`

#### 描述

集合中的元素数量。

#### 类型

数字；只读。

---

### Spots.parent

`app.activeDocument.spots.parent`

#### 描述

对象的容器。

#### 类型

对象；只读。

---

### Spots.typename

`app.activeDocument.spots.typename`

#### 描述

对象的类名。

#### 类型

字符串；只读。

---

## 方法

### Spots.add()

`app.activeDocument.spots.add()`

#### 描述

创建一个新对象。

#### 返回值

[Spot](.././Spot)

---

### Spots.getByName()

`app.activeDocument.spots.getByName(name)`

#### 描述

获取集合中具有指定名称的第一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取的元素的名称 |

#### 返回值

[Spot](.././Spot)

---

### Spots.index()

`app.activeDocument.spots.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 要获取的元素的键 |

#### 返回值

[Spot](.././Spot)

---

### Spots.removeAll()

`app.activeDocument.spots.removeAll()`

#### 描述

删除集合中的所有元素。

#### 返回值

无。

---

## 示例

### 删除专色

```javascript
// 从当前文档中删除所有专色
if ( app.documents.length > 0 ) {
 var spotCount = app.activeDocument.spots.length;

 if (spotCount > 0) {
 app.activeDocument.spots.removeAll();
 }
}
```

---

### 创建并应用专色

```javascript
// 在当前文档中定义并应用一个新的专色，
// 然后将该颜色应用到第一个路径项
if (app.documents.length > 0 && app.activeDocument.pathItems.length > 0) {
 // 定义新的颜色值
 var newRGBColor = new RGBColor();
 newRGBColor.red = 255;
 newRGBColor.green = 0;
 newRGBColor.blue = 0;

 // 创建新的专色
 var newSpot = app.activeDocument.spots.add();

 // 将新的 SpotColor 定义为 RGB 颜色的 80%
 newSpot.name = "Scripted Red spot";
 newSpot.tint = 80;
 newSpot.color = newRGBColor;

 // 将新专色的 50% 色调应用到最前面的路径项。
 // 创建一个 spotcolor 对象，设置色调值，
 var newSpotColor = new SpotColor();
 newSpotColor.spot = newSpot;
 newSpotColor.tint = 50;

 // 使用专色设置填充颜色
 var frontPath = app.activeDocument.pathItems[0];
 frontPath.filled = true;
 frontPath.fillColor = newSpotColor;
}
```
