---
title: 使用透视网格
---
# 使用透视网格

:::note
此功能在 Illustrator CC 2017 中添加
:::

透视网格是一项功能，允许您使用既定的透视法则在空间环境中创建和操作艺术作品。可以通过 **视图 > 透视网格** 菜单或工具栏中的透视工具启用透视网格。

SDK 提供了用于以编程方式操作透视网格的 API，您的脚本可以部分访问此 API。脚本可以：

- 使用预设值设置默认网格参数。
- 显示或隐藏网格。
- 设置活动平面。
- 在活动平面上以透视方式绘制对象。
- 将对象带入透视。

---

## 使用透视预设

Illustrator 提供了一、二、三点透视的默认网格参数预设。预设名称为 `"[1P-NormalView]"`、`"[2P-NormalView]"` 和 `"[3P-NormalView]"`。

以下脚本展示了如何以编程方式选择两点透视预设：

```applescript
tell application "Adobe Illustrator"
 -- 创建新文档
 set docRef to make new document
 tell docRef
 -- 选择默认的两点透视预设
 select perspective preset perspective preset "[2P-Normal View]"
 end tell
end tell
```

您可以创建新的透视预设，将预设导出到文件，并从文件导入预设。以下脚本展示了如何导出和导入预设：

```applescript
tell application "Adobe Illustrator"
 set docRef to make new document
 set filePath to "Macintosh HD:scripting:PGPresetsExported"
 export perspective grid preset of docRef to file filePath
end tell

tell application "Adobe Illustrator"
 set docRef to make new document
 set filePath to "Macintosh HD:scripting:PGPresets"
 import perspective grid preset of docRef from file filePath
end tell
```

---

## 显示或隐藏网格

以下脚本以编程方式显示或隐藏透视网格：

```applescript
tell application "Adobe Illustrator"
 -- 创建新文档
 set docRef to make new document
 tell docRef
 -- 显示文档中定义的透视网格
 show perspective grid
 -- 隐藏文档中定义的透视网格
 hide perspective grid
 end tell
end tell
```

---

## 设置活动平面

透视网格平面类型包括：

| 平面 | 类型 |
| --- | --- |
| 左平面 | `perspective grid plane leftplane` |
| 右平面 | `perspective grid plane rightplane` |
| 地面平面 | `perspective grid plane floorplane` |
| 无效平面 | `perspective grid plane noplane` |

对于一点透视网格，只有左平面和地面平面有效。

以下脚本将活动透视平面设置为左平面：

```applescript
tell application "Adobe Illustrator"
 -- 创建新文档
 set docRef to make new document
 tell docRef
 -- 将活动平面设置为左平面
 set perspective active plane perspective grid plane leftplane
 end tell
end tell
```

---

## 在透视网格上绘制

当透视网格启用时，绘制方法允许您以透视方式绘制或操作对象。以下脚本创建新文档，显示两点透视网格，并在左平面上绘制艺术对象：

```applescript
tell application "Adobe Illustrator"
 -- 创建新文档
 set docRef to make new document
 tell docRef
 -- 选择默认的两点透视预设
 select perspective preset perspective preset "[2P-Normal View]"

 -- 显示文档中定义的透视网格
 show perspective grid

 -- 检查活动平面是否设置为左平面，否则设置为左平面
 if (get perspective active plane) is not leftplane then
 set perspective active plane perspective grid plane leftplane
 end if

 -- 以透视方式绘制矩形，然后调整大小为 200% 并移动
 set rectRef to make new rectangle with properties {bounds:{0, 0, 30, 30}, reversed:false}
 scale rectRef horizontal scale 200 vertical scale 200 about top left with transforming objects
 translate rectRef delta x -420 delta y 480

 -- 以透视方式绘制椭圆
 set ellipseRef to make new ellipse with properties {bounds:{60, -60, 90, -30}, reversed:false, inscribed:true}

 -- 以透视方式绘制圆角矩形
 set rrectRef to make new rounded rectangle with properties {bounds:{90, -90, 30, 30}, horizontal radius:10, vertical radius:10, reversed:false}

 -- 以透视方式绘制多边形
 set polyRef to make new polygon with properties {center point:{105, 105}, radius:15, sides:7, reversed:false}

 -- 以透视方式绘制星形
 set starRef to make new star with properties {center point:{135, 135}, radius:15, inner radius:10, point count:6, reversed:false}

 -- 以透视方式绘制路径
 set newPath to make new path item with properties {entire path:{ {anchor:{0, 0} }, {anchor:{60, 0} }, {anchor:{30, 45} }, {anchor:{90, 110} } } }
 end tell
end tell
```

---

## 将对象带入透视

如果艺术对象不在透视中，可以使用 `bringInPerspective()` 方法将其带入透视并将其放置在平面上。

以下脚本创建新文档，绘制艺术对象，并将其带入三点透视网格的透视中：

```applescript
tell application "Adobe Illustrator"
 -- 创建新文档
 set docRef to make new document
 tell docRef
 -- 绘制星形
 set starRef to make new star with properties {center point:{135, 135}, radius:15, inner radius:10, point count:6, reversed:false}

 -- 选择默认的三点透视预设
 select perspective preset perspective preset "[3P-Normal View]"

 -- 显示文档中定义的透视网格
 show perspective grid

 -- 检查活动平面是否设置为左平面，否则设置为左平面
 if (get perspective active plane) is not leftplane then
 set perspective active plane perspective grid plane leftplane
 end if

 -- 将星形带入地面平面
 bring in perspective starRef position x 100 position y 100 perspective grid plane floorplane
 end tell
end tell
```
