---
title: 使用透视网格
---
# 使用透视网格

:::note
此功能在 Illustrator CC 2017 中添加
:::

透视网格是一项功能，使您能够使用既定的透视法则在空间环境中创建和操作艺术作品。通过“视图 > 透视网格”菜单或工具栏中的透视工具启用透视网格。

SDK 提供了用于以编程方式处理透视网格的 API，您的脚本可以访问此 API。脚本可以：

- 使用预设值设置默认网格参数。
- 显示或隐藏网格。
- 设置活动平面。
- 在活动平面上以透视方式绘制对象。
- 将对象带入透视。

---

## 使用透视预设

Illustrator 提供了一、二、三点透视的默认网格参数预设。预设名称为 `"[1P-NormalView]"`、`"[2P-NormalView]"` 和 `"[3P-NormalView]"`。

以下脚本展示了如何以编程方式选择两点透视预设：

```javascript
//设置默认的一点透视预设
app.activeDocument.selectPerspectivePreset("[1P-Normal View]");

//设置默认的两点透视预设
app.activeDocument.selectPerspectivePreset("[2P-Normal View]");

//设置默认的三点透视预设
app.activeDocument.selectPerspectivePreset("[3P-Normal View]");
```

您可以创建新的透视预设，将预设导出到文件，并从文件导入预设。以下脚本展示了如何导出和导入预设：

```javascript
//创建一个新文档
var mydoc = app.documents.add();
//将透视预设导出到文件
var exportPresetFile = new File("C:/scripting/PGPresetsExported")
mydoc.exportPerspectiveGridPreset(exportPresetFile);

//创建一个新文档
var mydoc = app.documents.add();
//从文件导入透视预设
var importPresetFile = new File("C:/scripting/PGPresets")
mydoc.importPerspectiveGridPreset(importPresetFile);
```

---

## 显示或隐藏网格

以下脚本以编程方式显示或隐藏透视网格：

```javascript
//显示文档中定义的透视网格
app.activeDocument.showPerspectiveGrid();

//隐藏文档中定义的透视网格
mydoc.hidePerspectiveGrid();
```

---

## 设置活动平面

透视网格平面类型包括：

| 平面 | 类型 |
| --- | --- |
| 左平面 | `PerspectiveGridPlaneType.LEFTPLANE` |
| 右平面 | `PerspectiveGridPlaneType.RIGHTPLANE` |
| 地面平面 | `PerspectiveGridPlaneType.FLOORPLANE` |
| 无效平面 | `PerspectiveGridPlaneType.NOPLANE` |

对于一点透视网格，只有左平面和地面平面是有效的。

以下脚本设置活动透视平面：

```javascript
//将左平面设置为活动平面
app.activeDocument.setPerspectiveActivePlane(PerspectiveGridPlaneType.LEFTPLANE);

//将右平面设置为活动平面
app.activeDocument.setPerspectiveActivePlane(PerspectiveGridPlaneType.RIGHTPLANE);

//将地面平面设置为活动平面
app.activeDocument.setPerspectiveActivePlane(PerspectiveGridPlaneType.FLOORPLANE);
```

---

## 在透视网格上绘制

当透视网格启用时，绘制方法允许您以透视方式绘制或操作对象。以下脚本创建一个新文档，显示两点透视网格，并在左平面上绘制艺术对象：

```javascript
//创建一个新文档
var mydoc = app.documents.add();

//选择默认的两点透视预设
mydoc.selectPerspectivePreset("[2P-Normal View]");

//显示文档中定义的透视网格
mydoc.showPerspectiveGrid();

//检查活动平面是否设置为左平面；如果没有，则设置为左平面
if (mydoc.getPerspectiveActivePlane() != PerspectiveGridPlaneType.LEFTPLANE) {
 mydoc.setPerspectiveActivePlane(PerspectiveGridPlaneType.LEFTPLANE);
}

//以透视方式绘制矩形，然后调整大小为200%并移动
var myrect = mydoc.pathItems.rectangle(30, -30, 30, 30, false);
myrect.resize(200, 200, true, false, false, false, 100, Transformation.TOPLEFT);
myrect.translate (-420, 480);

//以透视方式绘制椭圆
var myellipse = mydoc.pathItems.ellipse(60, -60, 30, 30, false, true);

//以透视方式绘制圆角矩形
var myrrect = mydoc.pathItems.roundedRectangle(90, -90, 30, 30, 10, 10, false);

//以透视方式绘制多边形
var mypoly = mydoc.pathItems.polygon(-105, 105, 15, 7, false);

//以透视方式绘制星形
var mystar = mydoc.pathItems.star(-135, 135, 15, 10, 6, false);

//以透视方式绘制路径
var newPath = mydoc.pathItems.add();
var lineList = new Array(4);
lineList[0] = new Array(0,0);
lineList[1] = new Array(60,0);
lineList[2] = new Array(30,45);
lineList[3] = new Array(90,110);
newPath.setEntirePath(lineList);
```

---

## 将对象带入透视

如果艺术对象不在透视中，可以使用 `bringInPerspective()` 方法将其带入透视并放置在平面上。

以下脚本创建一个新文档，绘制一个艺术对象，并将其带入三点透视网格的透视中：

```javascript
//创建一个新文档
var mydoc = app.documents.add();

//绘制椭圆
var myellipse = mydoc.pathItems.ellipse(60, -60, 30, 30, false, true);

//绘制多边形
var mypoly = mydoc.pathItems.polygon(-105, 105, 15, 7, false);

//绘制星形
var mystar = mydoc.pathItems.star(-135, 135, 15, 10, 6, false);

//选择默认的三点透视预设
mydoc.selectPerspectivePreset("[3P-Normal View]");

//显示文档中定义的透视网格
mydoc.showPerspectiveGrid();

//检查活动平面是否设置为左平面；如果没有，则设置为左平面
if (mydoc.getPerspectiveActivePlane() != PerspectiveGridPlaneType.LEFTPLANE) {
 mydoc.setPerspectiveActivePlane(PerspectiveGridPlaneType.LEFTPLANE);
}

//将椭圆带入活动平面（左平面）
myellipse.bringInPerspective(-100,-100, PerspectiveGridPlaneType.LEFTPLANE);

//将多边形带入右平面
mypoly.bringInPerspective(100,-100,PerspectiveGridPlaneType.RIGHTPLANE);

//将星形带入地面平面
mystar.bringInPerspective(100,100,PerspectiveGridPlaneType.FLOORPLANE);
```
