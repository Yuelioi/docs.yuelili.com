---
title: 创建路径和形状
---
# 创建路径和形状

本节解释了如何创建包含路径的项目。

---

## 路径

要创建直线或自由形式的路径，请指定一系列路径点，作为一系列 x-y 坐标或 `path` 点对象。

使用 x-y 坐标会将路径限制为直线段。要创建曲线路径，必须创建 `pathPoint` 对象。您的路径可以包含页面坐标和 `pathPoint` 对象的组合。

### 指定一系列 x-y 坐标

要使用页面坐标对指定路径，请使用 `pathItems` 对象的 `setEntirePath()` 属性。以下脚本指定了三对 x-y 坐标，以创建具有三个点的路径：

```javascript
var myDoc = app.activeDocument;
var myLine = myDoc.pathItems.add();
// 将描边设置为 true，以便我们可以看到路径
myLine.stroked = true;
myLine.setEntirePath([[220, 475], [375, 300], [200, 300]]);
```

### 使用路径点对象

要创建 `pathPoint` 对象，必须为该点定义三个值。

- 一个固定的 `anchor` 点，这是路径上的点。
- 一对方向点——`left direction` 和 `right direction`——允许您控制路径段的曲线。

您将每个属性定义为格式为 [x, y] 的页面坐标数组：

- 如果 `pathPoint` 对象的所有三个属性具有相同的坐标，并且线中下一个 `pathPoint` 的属性彼此相等，则创建直线段。
- 如果 `pathPoint` 对象中的两个或多个属性具有不同的值，则连接到该点的段是曲线。

要使用 `pathPoint` 对象创建路径或将点添加到现有路径，请创建一个 `pathItem` 对象，然后将路径点作为子对象添加到 `pathItem` 中：

```javascript
var myDoc = app.activeDocument;
var myLine = myDoc.pathItems.add();

// 将描边设置为 true，以便我们可以看到路径
myLine.stroked = true;

var newPoint = myLine.pathPoints.add();
newPoint.anchor = [220, 475];
// 将方向点设置为与锚点相同的值，创建直线段
newPoint.leftDirection = newPoint.anchor;
newPoint.rightDirection = newPoint.anchor;
newPoint.pointType = PointType.CORNER;

var newPoint1 = myLine.pathPoints.add();
newPoint1.anchor = [375, 300];
newPoint1.leftDirection = newPoint1.anchor;
newPoint1.rightDirection = newPoint1.anchor;
newPoint1.pointType = PointType.CORNER;

var newPoint2 = myLine.pathPoints.add();
newPoint2.anchor = [220, 300];
// 将方向点设置为与锚点不同的值，创建曲线
newPoint2.leftDirection =[180, 260];
newPoint2.rightDirection = [240, 320];
newPoint2.pointType = PointType.CORNER;
```

### 组合路径点类型

以下脚本示例创建了一个包含三个点的路径：

```javascript
var myDoc = app.activeDocument;
var myLine = myDoc.pathItems.add();
myLine.stroked = true;
myLine.setEntirePath( [[220, 475], [375, 300]]);

// 向路径添加另一个点
var newPoint = myLine.pathPoints.add();
newPoint.anchor = [220, 300];
newPoint.leftDirection = newPoint.anchor;
newPoint.rightDirection = newPoint.anchor;
newPoint.pointType = PointType.CORNER;
```

---

## 形状

要创建形状，请使用与形状名称对应的对象（如 `ellipse`、`rectangle` 或 `polygon`），并使用对象的属性指定形状的位置、大小以及其他信息，如多边形中的边数。

请记住：

- 所有测量值和页面坐标都由脚本引擎以点为单位处理。有关详细信息，请参阅 [测量单位](../../scripting/measurementUnits)。
- x 和 y 坐标从文档的左下角开始测量，如 Illustrator 应用程序中的信息面板所示。有关详细信息，请参阅 [页面项目定位和尺寸](../../scripting/positioning)。

### 创建矩形

考虑以下示例：

```javascript
var myDocument = app.documents.add()
var artLayer = myDocument.layers.add()
var rect = artLayer.pathItems.rectangle( 144, 144, 72, 216 );
```

该示例使用 `pathItems` 对象的 `rectangle()` 方法创建具有以下属性的矩形：

- 矩形的顶部距离页面底边 2 英寸（144 点）。
- 左边距离页面左边 2 英寸（144 点）。
- 矩形的宽度为 1 英寸（72 点），长度为 3 英寸（216 点）。

### 创建多边形

考虑以下示例：

```javascript
var myDocument = app.documents.add()
var artLayer = myDocument.layers.add()
var poly = artLayer.pathItems.polygon( 144, 288, 72.0, 7 );
```

该示例使用 `polygon()` 方法创建具有以下属性的多边形：

- 对象的中心点在水平轴上内嵌 2 英寸（144 点），在垂直轴上内嵌 4 英寸（288 点）。
- 从中心点到每个角的半径长度为 1 英寸（72 点）。
- 多边形有 7 条边。
```
