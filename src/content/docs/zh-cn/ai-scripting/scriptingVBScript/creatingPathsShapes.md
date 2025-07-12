---
title: 创建路径和形状
---
# 创建路径和形状

本节介绍如何创建包含路径的项目。

---

## 路径

要创建直线或自由形式的路径，请指定一系列路径点，作为一系列 x-y 坐标或 `PathPoint` 对象。

使用 x-y 坐标会将路径限制为直线段。要创建曲线路径，必须创建 `PathPoint` 对象。路径可以包含页面坐标和 `PathPoint` 对象的组合。

### 指定一系列 x-y 坐标

要使用页面坐标对指定路径，请使用 `PathItems` 对象的 `entire path` 属性。以下脚本指定了三对 x-y 坐标，以创建具有三个点的路径：

```vbscript
Set appRef = CreateObject ("Illustrator.Application")

Set firstPath = appRef.ActiveDocument.PathItems.Add
 firstPath.Stroked = True
firstPath.SetEntirePath(Array(Array(220, 475),Array(375, 300),Array(200, 300)))
```

### 使用路径点对象

要创建 `PathPoint` 对象，必须为该点定义三个值：

- 一个固定的 `anchor` 点，这是路径上的点。
- 一对方向点——`left direction` 和 `right direction`——允许您控制路径段的曲线。

您将每个属性定义为页面坐标数组，格式为 `(Array (x,y))`：

- 如果 `PathPoint` 对象的所有三个属性具有相同的坐标，并且直线中下一个 `PathPoint` 的属性彼此相等，则创建直线段。
- 如果 `PathPoint` 对象中的两个或多个属性具有不同的值，则连接到该点的段是曲线。

要使用 `PathPoint` 对象创建路径或将点添加到现有路径，请创建一个 `PathItem` 对象，然后将路径点作为子对象添加到 `PathItem` 中：

```vbscript
Set appRef = CreateObject ("Illustrator.Application")

Set firstPath = appRef.ActiveDocument.PathItems.Add
 firstPath.Stroked = true
Set newPoint = firstPath.PathPoints.Add
'使用相同的坐标创建直线段
newPoint.Anchor = Array(75, 300)
newPoint.LeftDirection = Array(75, 300)
newPoint.RightDirection = Array(75, 300)

Set newPoint2 = firstPath.PathPoints.Add
newPoint2.Anchor = Array(175, 250)
newPoint2.LeftDirection = Array(175, 250)
newPoint2.RightDirection = Array(175, 250)

Set newPoint3 = firstPath.PathPoints.Add
'使用不同的坐标创建曲线
newPoint3.Anchor = Array(275, 290)
newPoint3.LeftDirection = Array(135, 150)
newPoint3.RightDirection = Array(155, 150)
```

### 组合路径点类型

以下脚本示例创建了一个包含三个点的路径：

```vbscript
Set appRef = CreateObject("Illustrator.Application")
Set myDoc = appRef.ActiveDocument
Set myLine = myDoc.PathItems.Add
 myLine.Stroked = True
 myLine.SetEntirePath( Array( Array(320, 475), Array(375, 300)))

' 向直线添加另一个点
Set newPoint = myLine.PathPoints.Add
 '使用相同的坐标创建直线段
 newPoint.Anchor = Array(220, 300)
 newPoint.LeftDirection = Array(220, 300)
 newPoint.RightDirection = Array(220, 300)
```

---

## 形状

要创建形状，请使用与形状名称对应的对象（如 `ellipse`、`rectangle` 或 `polygon`），并使用对象的属性来指定形状的位置、大小以及其他信息（如多边形中的边数）。

请记住：

- 脚本引擎将所有测量值和页面坐标处理为点。有关详细信息，请参阅 [测量单位](../../scripting/measurementUnits)。
- x 和 y 坐标是从文档的左下角开始测量的，如 Illustrator 应用程序中的信息面板所示。有关详细信息，请参阅 [页面项目定位和尺寸](../../scripting/positioning#page-item-positioning-and-dimensions)。

### 创建矩形

考虑以下示例：

```vbscript
Set appRef = CreateObject("Illustrator.Application")
Set frontDocument = appRef.ActiveDocument
' 创建一个新矩形
' 顶部 = 144，左侧 = 144，宽度 = 72，高度 = 144
Set newRectangle = frontDocument.PathItems.Rectangle(144,144,72,144)
```

该示例创建了一个具有以下属性的矩形：

- 矩形的顶部距离页面底边 2 英寸（144 点）。
- 左侧距离页面左边 2 英寸（144 点）。
- 矩形的宽度为 1 英寸（72 点），高度为 2 英寸（144 点）。

### 创建多边形

考虑以下示例：

```vbscript
Set appRef = CreateObject("Illustrator.Application")
Set frontDocument = appRef.ActiveDocument
' 创建一个新多边形
' 顶部 = 144，左侧 = 288，宽度 = 72，高度 = 144
Set newPolygon = frontDocument.PathItems.Polygon(144,288,72,7)
```

该示例创建了一个具有以下属性的多边形：

- 对象的中心点在水平轴上内嵌 2 英寸（144 点），在垂直轴上内嵌 4 英寸（288 点）。
- 多边形有 7 条边。
- 从中心点到每个角的半径长度为 1 英寸（72 点）。
```
