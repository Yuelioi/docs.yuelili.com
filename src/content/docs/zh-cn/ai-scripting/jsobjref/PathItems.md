---
title: PathItems
---
# PathItems

`app.activeDocument.pathItems`

#### 描述

[PathItem](.././PathItem) 对象的集合。

方法 `ellipse`、`polygon`、`rectangle`、`roundedRectangle` 和 `star` 允许你使用简单的参数创建复杂的路径项。

如果在调用这些方法时未提供任何参数，则使用默认值。

---

## 属性

### PathItems.length

`app.activeDocument.pathItems.length`

#### 描述

集合中的元素数量。

#### 类型

数字；只读。

---

### PathItems.parent

`app.activeDocument.pathItems.parent`

#### 描述

对象的容器。

#### 类型

对象；只读。

---

### PathItems.typename

`app.activeDocument.pathItems.typename`

#### 描述

对象的类名。

#### 类型

字符串；只读。

---

## 方法

### PathItems.add()

`app.activeDocument.pathItems.add()`

#### 描述

创建一个新对象。

#### 返回值

[PathItem](.././PathItem)

---

### PathItems.ellipse()

```javascript
app.activeDocument.pathItems.ellipse(
 [top = 100]
 [, left = 100]
 [, width = 50]
 [, height = 100]
 [, reversed = false]
 [, inscribed]
)
```

#### 描述

使用提供的参数创建一个椭圆形状的新 `pathItem`。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `top` | 数字 (double), 可选 | 路径的顶部。默认为 `100` pt。 |
| `left` | 数字 (double), 可选 | 路径的左侧。默认为 `100` pt。 |
| `width` | 数字 (double), 可选 | 路径的宽度。默认为 `50` pt。 |
| `height` | 数字 (double), 可选 | 路径的高度。默认为 `100` pt。 |
| `reversed` | 布尔值, 可选 | 路径是否反转。默认为 `false`。 |
| `inscribed` | 布尔值, 可选 | 路径是否内切 |

#### 返回值

[PathItem](.././PathItem)

---

### PathItems.getByName()

`app.activeDocument.pathItems.getByName(name)`

#### 描述

获取集合中具有指定名称的第一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取的元素名称 |

#### 返回值

[PathItem](.././PathItem)

---

### PathItems.index()

`app.activeDocument.pathItems.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[PathItem](.././PathItem)

---

### PathItems.polygon()

```javascript
app.activeDocument.pathItems.polygon(
 [centerX = 200]
 [, centerY = 300]
 [, radius = 50]
 [, sides = 8]
 [, reversed = false]
)
```

#### 描述

使用提供的参数创建一个多边形形状的新 `pathItem`。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `centerX` | 数字 (double), 可选 | 路径的中心X。默认为 `200` pt。 |
| `centerY` | 数字 (double), 可选 | 路径的中心Y。默认为 `300` pt。 |
| `radius` | 数字 (double), 可选 | 路径的半径。默认为 `50` pt。 |
| `sides` | 数字 (long), 可选 | 边数。默认为 `8`。 |
| `reversed`| 布尔值, 可选 | 路径是否反转。默认为 `false`。 |

#### 返回值

[PathItem](.././PathItem)

---

### PathItems.rectangle()

`app.activeDocument.pathItems.rectangle(top, left, width, height[,reversed])`

#### 描述

使用提供的参数创建一个矩形形状的新 `pathItem`。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `top` | 数字 (double) | 路径的顶部 |
| `left` | 数字 (double) | 路径的左侧 |
| `width` | 数字 (double) | 路径的宽度 |
| `height` | 数字 (double) | 路径的高度 |
| `reversed`| 布尔值, 可选 | 路径是否反转 |

#### 返回值

[PathItem](.././PathItem)

---

### PathItems.removeAll()

`app.activeDocument.pathItems.removeAll()`

#### 描述

删除此集合中的所有元素。

#### 返回值

无

---

### PathItems.roundedRectangle()

```javascript
app.activeDocument.pathItems.roundedRectangle(
 top,
 left,
 width,
 height
 [,horizontalRadius = 15]
 [,verticalRadius = 20]
 [,reversed = false]
)
```

#### 描述

使用提供的参数创建一个圆角矩形形状的新 `pathItem`。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `top` | 数字 (double) | 路径的顶部 |
| `left` | 数字 (double) | 路径的左侧 |
| `width` | 数字 (double) | 路径的宽度 |
| `height` | 数字 (double) | 路径的高度 |
| `horizontalRadius`| 数字 (double), 可选 | 圆角的水平半径。默认为 `15` pt。 |
| `verticalRadius` | 数字 (double), 可选 | 圆角的垂直半径。默认为 `20` pt。 |
| `reversed` | 布尔值, 可选 | 路径是否反转。默认为 `false`。 |

#### 返回值

[PathItem](.././PathItem)

---

### PathItems.star()

```javascript
app.activeDocument.pathItems.star(
 [centerX = 200]
 [, centerY = 300]
 [, radius = 50]
 [, innerRadius = 20]
 [, points = 5]
 [, reversed = false]
)
```

#### 描述

使用提供的参数创建一个星形形状的新 `pathItem`。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `centerX` | 数字 (double), 可选 | 路径的中心X。默认为 `200` pt。 |
| `centerY` | 数字 (double), 可选 | 路径的中心Y。默认为 `300` pt。 |
| `radius` | 数字 (double), 可选 | 路径的半径。默认为 `50` pt。 |
| `innerRadius`| 数字 (double), 可选 | 路径的内半径。默认为 `20` pt。 |
| `points` | 数字 (long), 可选 | 点数。默认为 `5`。 |
| `reversed` | 布尔值, 可选 | 路径是否反转。默认为 `false`。 |

#### 返回值

[PathItem](.././PathItem)

---

## 示例

### 创建形状

```javascript
// 在文档1的第1层中创建5个形状
// 并为每个形状应用随机的图形样式
var doc = app.documents.add();
var artLayer = doc.layers[0];
app.defaultStroked = true;
app.defaultFilled = true;

var rect = artLayer.pathItems.rectangle(762.5, 87.5, 425.0, 75.0);
var rndRect = artLayer.pathItems.roundedRectangle(637.5, 87.5, 425.0, 75.0, 20.0, 10.0);

// 创建椭圆，'reversed' 为 false，'inscribed' 为 true
var ellipse = artLayer.pathItems.ellipse(512.5, 87.5, 425.0, 75.0, false, true);

// 创建八边形，一个8边的多边形
var octagon = artLayer.pathItems.polygon(300.0, 325.0, 75.0, 8);

// 创建一个4角星
var star = artLayer.pathItems.star(300.0, 125.0, 100.0, 20.0, 4);

for (i = 0; i < artLayer.pathItems.length; i++) {
 var styleIndex = Math.round(Math.random() * (doc.graphicStyles.length - 1));
 doc.graphicStyles[styleIndex].applyTo(artLayer.pathItems[i]);
}
```
