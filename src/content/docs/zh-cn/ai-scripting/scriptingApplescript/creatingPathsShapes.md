---
title: 创建路径和形状
---
# 创建路径和形状

本节介绍如何创建包含路径的项目。

---

## 路径

要创建直线或自由形式的路径，请指定一系列路径点，作为一系列 x-y 坐标或 `path` 点对象。

使用 x-y 坐标将路径限制为直线段。要创建曲线路径，必须创建 `path point` 对象。路径可以包含页面坐标和 `path point` 对象的组合。

### 指定一系列 x-y 坐标

要使用页面坐标对指定路径，请使用 `path items` 对象的 `entire path` 属性。以下脚本指定了三对 x-y 坐标，以创建具有三个点的路径：

```applescript
tell application "Adobe Illustrator"
set docRef to make new document
-- 设置 stroked 为 true，以便我们可以看到路径
set lineRef to make new path item in docRef with properties {stroked:true}
set entire path of lineRef to { {220, 475},{200, 300},{375, 300} }
end tell
```

### 使用路径点对象

要创建 `path point` 对象，必须为点定义三个值。

- 一个固定的 `anchor` 点，这是路径上的点。
- 一对方向点——`left direction` 和 `right direction`——允许你控制路径段的曲线。

你将每个属性定义为页面坐标的数组，格式为 [x, y]：

- 如果 `path point` 对象的所有三个属性具有相同的坐标，并且线中的下一个 `path point` 的属性彼此相等，则创建直线段。
- 如果 `path point` 对象中的两个或多个属性具有不同的值，则连接到该点的段是曲线。

要使用 `path point` 对象创建路径或将点添加到现有路径，请创建一个 `path item` 对象，然后将路径点作为子对象添加到 `path item` 中：

```applescript
tell application "Adobe Illustrator"
set docRef to make new document
-- 设置 stroked 为 true，以便我们可以看到路径
set lineRef to make new path item in docRef with properties {stroked:true}
 -- 将方向点设置为与锚点相同的值，创建直线段
set newPoint to make new path point of lineRef with properties
 {anchor:{220, 475},left direction:{220, 475},right direction:{220, 475}, point type:corner}

set newPoint2 to make new path point of lineRef with properties
 {anchor:{375, 300},left direction:{375, 300},right direction:{375, 300}, point type:corner}

 -- 将方向点设置为不同的值，创建曲线
set newPoint3 to make new path point of lineRef with properties
 {anchor:{220, 300},left direction:{180, 260},right direction:{240, 320}, point type:corner}

end tell
```

### 组合路径点类型

以下脚本示例通过将 `entire path` 属性与 `path point` 对象组合，创建了一个具有三个点的路径：

```applescript
tell application "Adobe Illustrator"
set docRef to make new document
-- 设置 stroked 为 true，以便我们可以看到路径
set lineRef to make new path item in docRef with properties {stroked:true}
set entire path of lineRef to { {220, 475},{375, 300} }
set newPoint to make new path point of lineRef with properties
 {anchor:{220, 300},left direction:{180, 260},right direction:{240, 320}, point type:corner}
end tell
```

---

## 形状

要创建形状，请使用与形状名称对应的对象（如 `ellipse`、`rectangle` 或 `polygon`），并使用对象的属性来指定形状的位置、大小以及其他信息（如多边形中的边数）。

请记住：

- 脚本引擎将所有测量值和页面坐标处理为点。有关详细信息，请参阅 [测量单位](../../scripting/measurementUnits)。
- x 和 y 坐标从文档的左下角开始测量，如 Illustrator 应用程序中的信息面板所示。有关详细信息，请参阅 [页面项定位和尺寸](../../scripting/positioning)。

### 一次性写入访问

路径项形状的属性使用“一次性写入”访问状态，这意味着该属性仅在创建对象时可写。对于现有的路径项对象，这些属性是只读的，其值无法更改。

### 创建矩形

考虑以下示例：

```applescript
tell application "Adobe Illustrator"
set docRef to make new document
set rectRef to make new rectangle in docRef with properties
 { bounds:{288, 360, 72, 144} }
end tell
```

该示例创建了一个具有以下属性的矩形：

- 矩形的右上角距离页面底部 4 英寸（288 点），距离页面左边缘 5 英寸（360 点）。
- 矩形的左下角距离页面左边缘 1 英寸（72 点），距离页面底部 2 英寸（144 点）。

### 创建多边形

考虑以下示例：

```applescript
tell application "Adobe Illustrator"
set docRef to make new document
set pathRef to make new polygon in docRef with properties
{center point:{144, 288},sides:7,radius:72.0}
end tell
```

该示例创建了一个具有以下属性的多边形：

- 对象的中心点在水平轴上距离 2 英寸（144 点），在垂直轴上距离 4 英寸（288 点）。
- 多边形有 7 条边。
- 从中心点到每个角的半径长度为 1 英寸（72 点）。
```
