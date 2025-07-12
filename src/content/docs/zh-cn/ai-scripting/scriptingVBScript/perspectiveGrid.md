---
title: 使用透视网格
---
# 使用透视网格

:::note
此功能在 Illustrator CC 2017 中添加
:::

透视网格是一项功能，使您能够使用既定的透视法则在空间环境中创建和操作艺术作品。通过“视图 > 透视网格”菜单或工具栏中的透视工具启用透视网格。

SDK 提供了用于以编程方式处理透视网格的 API，您的脚本可以部分访问此 API。脚本可以：

- 使用预设值设置默认网格参数。
- 显示或隐藏网格。
- 设置活动平面。
- 在活动平面上以透视方式绘制对象。
- 将对象带入透视。

---

## 使用透视预设

Illustrator 提供了一、二、三点透视的默认网格参数预设。预设名称为 `"[1P-NormalView]"`、`"[2P-NormalView]"` 和 `"[3P-NormalView]"`。

以下脚本展示了如何以编程方式选择两点透视预设：

```vbscript
Set appRef = CreateObject ("Illustrator.Application")

Rem 创建一个新文档
Set docRef = appRef.Documents.Add()

Rem 选择默认的两点透视预设
docRef.SelectPerspectivePreset("[2P-Normal View]")
```

您可以创建新的透视预设，将预设导出到文件，并从文件导入预设。以下脚本展示了如何导出和导入预设：

```vbscript
Set appRef = CreateObject ("Illustrator.Application")
Rem 创建一个新文档
Set docRef = appRef.Documents.Add()
Rem 将透视预设导出到文件
docRef.ExportPerspectiveGridPreset("C:/scripting/PGPresetsExported")

Set appRef = CreateObject ("Illustrator.Application")
Rem 创建一个新文档
Set docRef = appRef.Documents.Add()
Rem 从文件导入透视预设
docRef.ImportPerspectiveGridPreset("C:/scripting/PGPresets")
```

---

## 显示或隐藏网格

以下脚本以编程方式显示或隐藏透视网格：

```vbscript
Set appRef = CreateObject ("Illustrator.Application")

Rem 创建一个新文档

Set docRef = appRef.Documents.Add()

Rem 显示文档中定义的透视网格
docRef.ShowPerspectiveGrid();

Rem 隐藏文档中定义的透视网格
docRef.HidePerspectiveGrid();
```

---

## 设置活动平面

透视网格平面类型包括：

| 平面 | 类型 |
| --- | --- |
| 左平面 | `aiLEFTPLANE (1)` |
| 右平面 | `aiRIGHTPLANE (2)` |
| 地面平面 | `aiFLOORPLANE (3)` |
| 无效平面 | `aiNOPLANE (4)` |

对于一点透视网格，只有左平面和地面平面是有效的。

以下脚本将活动透视平面设置为左平面：

```vbscript
Set appRef = CreateObject ("Illustrator.Application")

Rem 创建一个新文档
Set docRef = appRef.Documents.Add()

Rem 将左平面设置为活动平面
docRef.SetPerspectiveActivePlane(1) 'aiLEFTPLANE
```

---

## 在透视网格上绘制

当透视网格启用时，绘制方法允许您以透视方式绘制或操作对象。以下脚本创建一个新文档，显示两点透视网格，并在左平面上绘制艺术对象：

```vbscript
Set appRef = CreateObject ("Illustrator.Application")

Rem 创建一个新文档
Set docRef = appRef.Documents.Add()

Rem 选择默认的两点透视预设
docRef.SelectPerspectivePreset("[2P-Normal View]")

Rem 显示文档中定义的透视网格
docRef.ShowPerspectiveGrid()

Rem 检查活动平面是否设置为左平面，否则设置为左平面
If docRef.GetPerspectiveActivePlane() <> 1 Then
 docRef.SetPerspectiveActivePlane(1) 'aiLEFTPLANE
End If

Rem 以透视方式绘制矩形，然后调整大小为 200% 并移动
Set pathItemRect = docRef.PathItems.Rectangle(30, -30, 30, 30, False)

call pathItemRect.Resize(200, 200, True, False, False, False, 100, 2)
call pathItemRect.Translate(-420, 480)

Rem 以透视方式绘制椭圆
Set pathItemEllipse = docRef.PathItems.Ellipse(60, -60, 30, 30, False, True)

Rem 以透视方式绘制圆角矩形
Set pathItemRRect = docRef.PathItems.RoundedRectangle(90, -90, 30, 30, 10, 10, False)

Rem 以透视方式绘制多边形
Set pathItemPoly = docRef.PathItems.Polygon(-105, 105, 15, 7, False)

Rem 以透视方式绘制星形
Set pathItemStar = docRef.PathItems.Star(-135, 135, 15, 10, 6, False)

Rem 以透视方式绘制路径
Set newPath = docRef.PathItems.Add()
newPath.SetEntirePath(Array(Array(0,0),Array(60,0),Array(30,45),Array(90,110)))
```

---

## 将对象带入透视

如果艺术对象不在透视中，可以使用 `bringInPerspective()` 方法将其带入透视并将其放置在平面上。

以下脚本创建一个新文档，绘制一个艺术对象，并将其带入三点透视网格的透视中：

```vbscript
Set appRef = CreateObject ("Illustrator.Application")

Rem 创建一个新文档
Set docRef = appRef.Documents.Add()

Rem 绘制椭圆
Set pathItemEllipse = docRef.PathItems.Ellipse(60, -60, 30, 30, False, True)

Rem 绘制多边形
Set pathItemPoly = docRef.PathItems.Polygon(-105, 105, 15, 7, False)

Rem 绘制星形
Set pathItemStar = docRef.PathItems.Star(-135, 135, 15, 10, 6, False)

Rem 选择默认的三点透视预设
docRef.SelectPerspectivePreset("[3P-Normal View]")

Rem 显示文档中定义的透视网格
docRef.ShowPerspectiveGrid()

Rem 检查活动平面是否设置为左平面，否则设置为左平面
If docRef.GetPerspectiveActivePlane() <> 1 Then
 docRef.SetPerspectiveActivePlane(1) 'aiLEFTPLANE
End If

Rem 将椭圆带入活动平面（左平面）
Call pathItemEllipse.BringInPerspective(100,100, 1) 'aiLEFTPLANE

Rem 将多边形带入右平面
Call pathItemPoly.BringInPerspective(100,-100,2) 'aiRIGHTPLANE

Rem 将星形带入地面平面
Call pathItemStar.BringInPerspective(100,100,3) 'aiFLOORPLANE
```
