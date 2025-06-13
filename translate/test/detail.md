## 方法

### AVLayer.addToMotionGraphicsTemplate()

`app.project.item(index).layer(index).addToMotionGraphicsTemplate(comp)`

:::note
此功能在 After Effects 18.0 (2021) 版本中添加
:::

#### 描述

将图层添加到指定合成的 Essential Graphics 面板中。

如果图层成功添加则返回 `true`，否则返回 `false`。

如果无法添加图层，可能是因为它不是可替换媒体的图层类型（称为媒体替换图层），或者该图层已添加到该合成的 EGP 中。如果无法将图层添加到 EGP，After Effects 将显示警告对话框。

使用 [AVLayer.canAddToMotionGraphicsTemplate()](#avlayercanaddtomotiongraphicstemplate) 方法测试图层是否可以添加到 Motion Graphics 模板。

#### 参数

| 参数    |                  类型                   |                    描述                    |
| ------- | --------------------------------------- | ----------------------------------------- |
| `comp`  | [CompItem 对象](../../item/compitem)   | 要将属性添加到 EGP 的目标合成。           |

#### 返回值

布尔值。

---

### AVLayer.addToMotionGraphicsTemplateAs()

`app.project.item(index).layer(index).addToMotionGraphicsTemplateAs(comp, name)`

:::note
此功能在 After Effects 18.0 (2021) 版本中添加
:::

#### 描述

将图层添加到指定合成的 Essential Graphics 面板中。

如果图层成功添加则返回 `true`，否则返回 `false`。

如果无法添加图层，可能是因为它不是可替换媒体的图层类型（称为媒体替换图层），或者该图层已添加到该合成的 EGP 中。如果无法将图层添加到 EGP，After Effects 将显示警告对话框。

使用 [AVLayer.canAddToMotionGraphicsTemplate()](#avlayercanaddtomotiongraphicstemplate) 方法测试图层是否可以添加到 Motion Graphics 模板。

#### 参数

| 参数    |                  类型                   |                    描述                    |
| ------- | --------------------------------------- | ----------------------------------------- |
| `comp`  | [CompItem 对象](../../item/compitem)   | 要将属性添加到 EGP 的目标合成。           |
| `name`  | 字符串                                  | 新名称。                                  |

#### 返回值

布尔值。

---

### AVLayer.audioActiveAtTime()

`app.project.item(index).layer(index).audioActiveAtTime(time)`

#### 描述

如果该图层的音频在指定时间处于活动状态，则返回 `true`。

要使此方法返回 `true`，`audioEnabled` 必须为 `true`，除非该图层也被设为独奏，否则没有其他音频图层处于独奏状态，并且时间必须在该图层的 `inPoint` 和 `outPoint` 之间。

#### 参数

| 参数    |         类型         |      描述      |
| ------- | -------------------- | ------------- |
| `time`  | 浮点数值             | 时间（秒）。  |

#### 返回值

布尔值。

---

### AVLayer.calculateTransformFromPoints()

`app.project.item(index).layer(index).calculateTransformFromPoints(pointTopLeft, pointTopRight, pointBottomRight)`

#### 描述

根据该图层中的一组点计算变换。

#### 参数

| 参数               |                       类型                       |          描述          |
| ------------------ | ----------------------------------------------- | ---------------------- |
| `pointTopLeft`     | 浮点数值数组，`[x, y, z]`                      | 左上角点坐标。         |
| `pointTopRight`    | 浮点数值数组，`[x, y, z]`                      | 右上角点坐标。         |
| `pointBottomRight` | 浮点数值数组，`[x, y, z]`                      | 右下角点坐标。         |

#### 返回值

包含变换属性的对象。

#### 示例

```javascript
var newLayer = comp.layers.add(newFootage);
newLayer.threeDLayer = true;
newLayer.blendingMode = BlendingMode.ALPHA_ADD;
var transform = newLayer.calculateTransformFromPoints(tl, tr, bl);
for (var sel in transform) {
    newLayer.transform[sel].setValue(transform[sel]);
}
```

---

### AVLayer.canAddToMotionGraphicsTemplate()

`app.project.item(index).layer(index).canAddToMotionGraphicsTemplate(comp)`

:::note
此功能在 After Effects 18.0 (2021) 版本中添加
:::

#### 描述

测试图层是否可以添加到指定合成的 Essential Graphics 面板中。

如果图层可以添加则返回 `true`，否则返回 `false`。

如果无法添加图层，可能是因为它不是可替换媒体的图层类型（称为媒体替换图层），或者该图层已添加到该合成的 EGP 中。

媒体替换图层被识别为具有 [AVLayer.source](#avlayersource) 设置为 [FootageItem 对象](../../item/footageitem)（具有特定源类型）或 [CompItem 对象](../../item/compitem) 的 AVLayers。

AVLayer 需要符合以下限制才能被视为媒体替换图层：

- [Layer.hasVideo](../../layer/layer#layerhasvideo) 应返回 `true`。
- [AVLayer.adjustmentLayer](#avlayeradjustmentlayer) 应返回 `false`。
- [Layer.nullLayer](../../layer/layer#layernulllayer) 应返回 `false`。
- 如果 [AVLayer.source](#avlayersource) 是 [FootageItem 对象](../../item/footageitem)，则 FootageItem.FootageSource 不应是 [SolidSource 对象](../../sources/solidsource)。
- 如果 [AVLayer.source](#avlayersource) 是 [FootageItem 对象](../../item/footageitem) 且 FootageItem.FootageSource 是 [FileSource 对象](../../sources/filesource)，则该 FileSource 不应指向非媒体文件（例如 JSX 脚本文件）。

#### 参数

| 参数    |                  类型                   |                    描述                    |
| ------- | --------------------------------------- | ----------------------------------------- |
| `comp`  | [CompItem 对象](../../item/compitem)   | 要将属性添加到 EGP 的目标合成。           |

#### 返回值

布尔值。

---

### AVLayer.compPointToSource()

`app.project.item(index).layer(index).compPointToSource()`

:::note
此功能在 After Effects 13.2 (CC 2014.2) 版本中添加
:::

#### 描述

将合成坐标（如 `sourcePointToComp`）转换为图层坐标。

:::warning
此值仅反映当前时间文本图层中的第一个字符。
:::

#### 参数

| 参数                |                  类型                   |           描述           |
| ------------------- | --------------------------------------- | ------------------------ |
| `sourcePointToComp` | 浮点数值数组，`[x, y]`                 | 合成坐标的位置数组。     |

#### 返回值

位置坐标数组（[X,Y]）；只读。

---

### AVLayer.openInViewer()

`app.project.item(index).layer(index).openInViewer()`

#### 描述

在图层面板中打开图层，并将图层面板置于前端并使其获得焦点。

#### 参数

无。

#### 返回值

图层面板的查看器对象，如果无法打开图层（例如文本或形状图层，无法在图层面板中打开），则返回 `null`。

---

### AVLayer.removeTrackMatte()

`app.project.item(index).layer(index).removeTrackMatte()`

:::note
此功能在 After Effects 23.0 版本中添加
:::

#### 描述

移除该图层的轨道遮罩，同时保留 TrackMatteType。
有关另一种移除轨道遮罩的方法，请参阅 [AVLayer.setTrackMatte()](#avlayersettrackmatte)。

#### 参数

无。

#### 返回值

无。

```javascript
// 将 myLayer 的轨道遮罩图层设置为 otherLayer，类型为 LUMA
myLayer.setTrackMatte(otherLayer, TrackMatteType.LUMA);

// 移除 myLayer 的轨道遮罩但保留 LUMA 类型
myLayer.removeTrackMatte();

// 仍然返回 TrackMatteType.LUMA
alert(myLayer.trackMatteType);
```

---

### AVLayer.replaceSource()

`app.project.item(index).layer(index).replaceSource(newSource, fixExpressions)`

#### 描述

替换该图层的源。

:::warning
如果在空图层上执行此方法，图层的 `isNull` 属性不会从 `true` 更改。这会导致图层在合成查看器和渲染中不可见。
:::

#### 参数

| 参数              |               类型                |                                                                                    描述                                                                                    |
| ----------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `newSource`       | [AVItem 对象](../../item/avitem) | 新的源 AVItem 对象。                                                                                                                                                      |
| `fixExpressions`  | 布尔值                            | `true` 调整表达式以适应新源，否则为 `false`。                                                                                                                             |
|                   |                                   | !!! 警告                                                                                                                                                                  |
|                   |                                   |      此功能可能消耗大量资源；如果要替换大量素材，请在操作结束时执行此操作。另请参阅 [Project.autoFixExpressions()](../../general/project#projectautofixexpressions)。     |

#### 返回值

无。

---

### AVLayer.setTrackMatte()

`app.project.item(index).layer(index).setTrackMatte(trackMatteLayer, trackMatteType)`

:::note
此功能在 After Effects 23.0 版本中添加
:::

#### 描述

设置该图层的轨道遮罩图层和类型。将 `null` 传递给 trackMatteLayer 参数可移除轨道遮罩。
有关另一种移除轨道遮罩的方法，请参阅 [AVLayer.removeTrackMatte()](#avlayerremovetrackmatte)。

#### 参数

| 参数               |                     类型                     |           描述           |
| ------------------ | -------------------------------------------- | ------------------------ |
| `trackMatteLayer`  | [AVLayer](../../layer/avlayer)              | 用作轨道遮罩的图层。     |
| `trackMatteType`   | [TrackMatteType](#avlayertrackmattetype) 枚举 | 要使用的轨道遮罩类型。   |

:::warning
将 `TrackMatteType.NO_TRACK_MATTE` 作为类型传递无效，将导致无操作。
:::

#### 返回值

无

#### 示例

```javascript
// 将 myLayer 的轨道遮罩图层设置为 otherLayer，类型为 Alpha
myLayer.setTrackMatte(otherLayer, TrackMatteType.ALPHA);

// 保持相同的 trackMatteLayer 仅更改轨道遮罩类型
myLayer.setTrackMatte(myLayer.trackMatteLayer, TrackMatteType.LUMA);

// 更改轨道遮罩图层但保持相同的轨道遮罩类型
myLayer.setTrackMatte(newTrackMatteLayer, myLayer.trackMatteType);

// 移除 myLayer 的轨道遮罩并设置新的指定 TrackMatteType
myLayer.setTrackMatte(null, TrackMatteType.ALPHA);
myLayer.setTrackMatte(null, TrackMatteType.NO_TRACK_MATTE);

// 无效。无操作
myLayer.setTrackMatte(otherLayer, TrackMatteType.NO_TRACK_MATTE);
```

---

### AVLayer.sourcePointToComp()

`app.project.item(index).layer(index).sourcePointToComp()`

:::note
此功能在 After Effects 13.2 (CC 2014.2) 版本中添加
:::

#### 描述

将图层坐标（如 `boxTextPos`）转换为合成坐标。

:::warning
此值仅反映当前时间文本图层中的第一个字符。
:::

#### 参数

| 参数          |                  类型                   |         描述         |
| ------------- | --------------------------------------- | -------------------- |
| `boxTextPos`  | 浮点数值数组，`[x, y]`                 | 图层坐标的位置数组。 |

#### 返回值

位置坐标数组（[X,Y]）；只读。

#### 示例

```javascript
// 对于段落文本图层。
// 将图层坐标中的位置转换为合成坐标。
var boxTextCompPos = myTextLayer.sourcePointToComp(boxTextLayerPos);
```

---

### AVLayer.sourceRectAtTime()

`app.project.item(index).layer(index).sourceRectAtTime(timeT, extents)`

#### 描述

检索指定时间索引处图层的矩形边界，针对文本或形状图层内容进行校正。例如，用于编写与基线正确对齐的文本。

#### 参数

| 参数      |         类型         |                                             描述                                             |
| --------- | -------------------- | ------------------------------------------------------------------------------------------- |
| `timeT`   | 浮点数值             | 时间索引（秒）。                                                                            |
| `extents` | 布尔值               | `true` 包含范围，否则为 `false`。范围适用于形状图层，根据需要增加图层边界的大小。            |

#### 返回值

具有四个属性的 JavaScript 对象：[`top`, `left`, `width`, `height`]。