---
title: 标记值
---
# MarkerValue 对象

`new MarkerValue(comment, chapter, url, frameTarget, cuePointName, params)`

#### 描述

MarkerValue 对象表示图层或合成标记，它将注释以及可选的章节参考点、网页链接或 Flash 视频提示点与图层中的特定点关联起来。

使用构造函数创建它；除 `comment` 外，所有参数都是可选的。

所有参数都是字符串，设置返回的 MarkerValue 对象的相应属性，除了 `params`；这是一个包含键值对的数组，可以通过 [getParameters()](#markervaluegetparameters) 和 [setParameters()](#markervaluesetparameters) 方法访问。

脚本可以设置任意数量的参数对；顺序不会反映在应用程序中显示的顺序。

要将标记与图层关联，请在图层的 [Layer.marker](../../layer/layer#layermarker) 属性中设置 MarkerValue 对象：`layerObject.property("Marker").setValueAtTime(time, markerValueObject);`

要将标记与合成关联，请在合成的 [CompItem.markerProperty](../../item/compitem#compitemmarkerproperty) 属性中设置 MarkerValue 对象：`compObject.markerProperty.setValueAtTime(time, markerValueObject);`

有关标记的使用信息，请参阅 After Effects 帮助中的“使用标记”。

#### 示例

- 要在 2 秒处设置一个显示“Fade Up”的**图层**标记：

 ```javascript
 var myMarker = new MarkerValue("FadeUp");
 myLayer.property("Marker").setValueAtTime(2, myMarker);
 // 或者
 myLayer.marker.setValueAtTime(2, myMarker);
 ```

- 要在 2 秒处设置一个显示“Fade Up”的**合成**标记：

 ```javascript
 var myMarker = new MarkerValue("FadeUp");
 comp.markerProperty.setValueAtTime(2, myMarker);
 ```

- 从特定标记获取注释值：

 ```javascript
 var layer = app.project.item(1).layer(1);
 var markerProperty = layer.marker;

 var commentOfFirstMarker = markerProperty.keyValue(1).comment;

 // 或者
 var commentOfMarkerAtTime4 = markerProperty.valueAtTime(4.0, true).comment;

 // 或者
 var markerValueAtTimeClosestToTime4 = markerProperty.keyValue(markerProperty.nearestKeyIndex(4.0));
 var commentOfMarkerClosestToTime4 = markerValueAtTimeClosestToTime4.comment;
 ```

---

## 属性

### MarkerValue.chapter

`app.project.item(index).layer(index).property("Marker").keyValue(index).chapter`

#### 描述

此标记的文本章节链接。章节链接会跳转到 QuickTime 电影或其他支持章节标记的格式中的章节。

#### 类型

字符串；可读写。

---

### MarkerValue.comment

`app.project.item(index).layer(index).property("Marker").keyValue(index).comment`

#### 描述

此标记的文本注释。此注释会显示在时间轴面板中图层标记旁边。

#### 类型

字符串；可读写。

---

### MarkerValue.cuePointName

`app.project.item(index).layer(index).property("Marker").keyValue(index).cuePointName`

#### 描述

Flash 视频提示点名称，如标记对话框中所示。

#### 类型

字符串；可读写。

---

### MarkerValue.duration

`app.project.item(index).layer(index).property("Marker").keyValue(index).duration`

#### 描述

标记的持续时间（以秒为单位）。持续时间在时间轴面板中显示为从标记位置延伸的短条。

#### 类型

浮点值；可读写。

---

### MarkerValue.eventCuePoint

`app.project.item(index).layer(index).property("Marker").keyValue(index).eventCuePoint`

#### 描述

当为 `true` 时，Flash 视频提示点用于事件；否则，用于导航。

#### 类型

布尔值；可读写。

---

### MarkerValue.frameTarget

`app.project.item(index).layer(index).property("Marker").keyValue(index).frameTarget`

#### 描述

此标记的文本帧目标。与 URL 值一起，此目标指向网页中的特定帧。

#### 类型

字符串；可读写。

---

### MarkerValue.url

`app.project.item(index).layer(index).property("Marker").keyValue(index).url`

#### 描述

此标记的 URL。此 URL 是网页的自动链接。

#### 类型

字符串；可读写。

---

### MarkerValue.label

`app.project.item(index).layer(index).property("Marker").keyValue(index).label`

#### 描述

合成或图层标记的标签颜色。颜色由其编号表示（0 表示无颜色，1 到 16 表示标签首选项中的预设颜色之一）。无法通过编程方式设置自定义标签颜色。

在 After Effects 16.0 或更高版本中可用。

#### 类型

整数（0 到 16）；可读写。

---

### MarkerValue.protectedRegion

`app.project.item(index).markerProperty.keyValue(index).protectedRegion`

#### 描述

合成标记对话框中“受保护区域”选项的状态。当为 `true` 时，合成标记表现为受保护区域。对于嵌套合成图层上的受保护区域标记，也会返回 `true`，但通常不适用于图层标记。

在 After Effects 16.0 或更高版本中可用。

#### 类型

布尔值；可读写。

---

## 函数

### MarkerValue.getParameters()

`app.project.item(index).layer(index).property("Marker").keyValue(index).getParameters()`

#### 描述

返回与此标记值关联的 Flash 视频提示点参数的键值对。

#### 参数

无。

#### 返回

一个对象，其属性与每个参数名称匹配，包含该参数的值。

---

### MarkerValue.setParameters()

`app.project.item(index).layer(index).property("Marker").keyValue(index).setParameters(keyValuePairs)`

#### 描述

为此标记值关联的 Flash 视频提示点参数设置一组键值对。提示点可以有任意数量的参数，但通过用户界面只能添加三个；使用此方法可以添加更多参数。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `keyValuePairs` | 键值对对象 | 包含键值对作为属性和值的对象。调用对象的 `toString()` 方法将每个属性的字符串值分配给命名的键。 |

#### 返回

无。

#### 示例

```javascript
var mv = new MarkerValue("MyMarker");
var parms = {};
parms.timeToBlink = 1;
parms.assignMe = "A string"
mv.setParameters(parms);
myLayer.property("Marker").setValueAtTime(2, mv);
```
