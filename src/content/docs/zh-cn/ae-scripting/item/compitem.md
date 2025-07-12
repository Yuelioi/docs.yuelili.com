---
title: 合成项目
---
# CompItem 对象

`app.project.item(index)`

`app.project.items[index]`

#### 描述

CompItem 对象表示一个合成，并允许你操作和获取有关它的信息。通过项目项集合中的位置索引号访问这些对象。

:::info
CompItem 是 [AVItem 对象](../avitem) 的子类，而 AVItem 是 [Item 对象](../item) 的子类。除了下面列出的方法和属性外，AVItem 和 Item 的所有方法和属性在处理 CompItem 时也可用。
:::

#### 示例

假设项目中的第一个项是 CompItem，以下代码显示两个警告框。第一个显示 CompItem 中的图层数量，第二个显示 CompItem 中最后一个图层的名称。

```javascript
var firstComp = app.project.item(1);
alert("图层数量为 " + firstComp.numLayers);
alert("最后一个图层的名称是 " + firstComp.layer(firstComp.numLayers).name);
```

---

## 属性

### CompItem.activeCamera

`app.project.item(index).activeCamera`

#### 描述

活动的摄像机，即最前面的启用的摄像机图层。如果合成中没有启用的摄像机图层，则该值为 `null`。

#### 类型

CameraLayer 对象；只读。

---

### CompItem.bgColor

`app.project.item(index).bgColor`

#### 描述

合成的背景颜色。数组中的三个值分别指定颜色的红色、绿色和蓝色分量。

#### 类型

包含三个浮点值的数组 `[R, G, B]`，范围为 `[0.0..1.0]`；可读写。

---

### CompItem.counters

`app.project.item(index).counters`

:::note
该方法添加于 After Effects 13.2 (CC2014)。
:::

:::warning
此方法/属性未正式记录，是通过研究发现的。此处信息可能不准确，且此方法/属性可能会在某个时刻消失或停止工作。如果你有更多信息，请贡献！
:::

#### 描述

此属性在整个应用程序中起作用：如果在一个 CompItem 上更改，它将更改项目中每个 CompItem 的值。该值会一直保持，直到重新启动 AE。重新启动后，它将恢复为 `false`。

此参数没有任何作用。

#### 类型

布尔值；可读写。

---

### CompItem.displayStartFrame

`app.project.item(index).displayStartFrame`

#### 描述

合成开始时的帧值。

此值是使用 [CompItem.displayStartTime](#compitemdisplaystarttime) 和 [CompItem.frameDuration](#compitemframeduration) 计算开始帧的替代方法，以补偿浮点数问题。

:::note
该方法添加于 After Effects 17.1。
:::

#### 类型

整数；可读写。

---

### CompItem.displayStartTime

`app.project.item(index).displayStartTime`

#### 描述

设置为合成开始的时间，以秒为单位。这相当于合成设置对话框中的“开始时间码”或“开始帧”设置。

:::note
从 After Effects 17.1 开始，最小值为 `-10800.0`。在 17.1 之前，最小值为 `0.0`。
:::

#### 类型

浮点值，范围为 `[-10800.0..86339.0]`（-3:00:00:00 到 23:59:00:00）；可读写。

---

### CompItem.draft3d

`app.project.item(index).draft3d`

#### 描述

当为 `true` 时，合成面板中的“草稿 3D”模式已启用。这对应于合成面板中的“草稿 3D”按钮的值。

#### 类型

布尔值；可读写。

---

### CompItem.dropFrame

`app.project.item(index).dropFrame`

#### 描述

当为 `true` 时，表示合成使用丢帧时间码。当为 `false` 时，表示使用非丢帧时间码。这对应于合成设置对话框中的设置。

#### 类型

布尔值；可读写。

---

### CompItem.frameBlending

`app.project.item(index).frameBlending`

#### 描述

当为 `true` 时，此合成的帧混合已启用。这对应于合成面板中的“帧混合”按钮的值。

#### 类型

布尔值；如果为 `true`，则帧混合已启用；可读写。

---

### CompItem.frameDuration

`app.project.item(index).frameDuration`

#### 描述

一帧的持续时间，以秒为单位。这是 `frameRate` 值（每秒帧数）的倒数。

#### 类型

浮点值；可读写。

---

### CompItem.hideShyLayers

`app.project.item(index).hideShyLayers`

#### 描述

当为 `true` 时，仅显示 `shy` 设置为 `false` 的图层在时间轴面板中。当为 `false` 时，所有图层都可见，包括 `shy` 值为 `true` 的图层。这对应于合成面板中的“隐藏所有害羞图层”按钮的值。

#### 类型

布尔值；可读写。

---

### CompItem.layers

`app.project.item(index).layers`

#### 描述

一个 [LayerCollection 对象](../../layer/layercollection)，包含此合成中所有图层的 Layer 对象。

#### 类型

LayerCollection 对象；只读。

---

### CompItem.markerProperty

`app.project.item(index).markerProperty`

:::note
该方法添加于 After Effects 14.0 (CC 2017)
:::

#### 描述

一个 [PropertyGroup 对象](../../property/propertygroup)，包含合成的所有标记。合成标记脚本的功能与 [图层标记](../../layer/layer#layermarker) 相同。

参见 [MarkerValue 对象](../../other/markervalue)。

#### 类型

PropertyGroup 对象或 `null`；只读。

#### 示例

以下示例代码创建一个项目和合成，然后创建两个具有不同属性的合成标记。

```javascript
// comp.markerProperty 允许你向合成添加标记。
// 它的功能与 layer.property("Marker") 相同
var currentProj = app.newProject();
var comp = currentProj.items.addComp("mycomp", 1920, 1080, 1.0, 5, 29.97);
var solidLayer = comp.layers.addSolid([1, 1, 1], "mylayer", 1920, 1080, 1.0);

var compMarker = new MarkerValue("这是一个合成标记！");
compMarker.duration = 1;

var compMarker2 = new MarkerValue("另一个合成标记！");
compMarker2.duration = 1;

comp.markerProperty.setValueAtTime(1, compMarker);
comp.markerProperty.setValueAtTime(3, compMarker2);
```

---

### CompItem.motionBlur

`app.project.item(index).motionBlur`

#### 描述

当为 `true` 时，合成的运动模糊已启用。这对应于合成面板中的“运动模糊”按钮的值。

#### 类型

布尔值；可读写。

---

### CompItem.motionBlurAdaptiveSampleLimit

`app.project.item(index).motionBlurAdaptiveSampleLimit`

#### 描述

2D 图层运动的最大运动模糊采样数。这对应于合成设置对话框高级选项卡中的“自适应采样限制”设置。

#### 类型

整数（介于 16 和 256 之间）；可读写。

---

### CompItem.motionBlurSamplesPerFrame

`app.project.item(index).motionBlurSamplesPerFrame`

#### 描述

经典 3D 图层、形状图层和某些效果的每帧最小运动模糊采样数。这对应于合成设置对话框高级选项卡中的“每帧采样数”设置。

#### 类型

整数（介于 2 和 64 之间）；可读写。

---

### CompItem.motionGraphicsTemplateControllerCount

`app.project.item(index).motionGraphicsTemplateControllerCount`

:::note
该方法添加于 After Effects 16.1 (CC 2019)
:::

#### 描述

合成在 Essential Graphics 面板中的属性数量。

#### 类型

整数；只读。

---

### CompItem.motionGraphicsTemplateName

`app.project.item(index).motionGraphicsTemplateName`

:::note
该方法添加于 After Effects 15.0 (CC 2018)
:::

#### 描述

读取或写入合成在 Essential Graphics 面板中的名称属性。

Essential Graphics 面板中的名称用于导出的 Motion Graphics 模板的文件名（例如，“My Template.mogrt”）。

以下示例将为活动合成设置名称，然后将其作为警告框返回。

```javascript
app.project.activeItem.motionGraphicsTemplateName = "我的模板";
alert(app.project.activeItem.motionGraphicsTemplateName);
```

#### 类型

字符串；可读写。

---

### CompItem.numLayers

`app.project.item(index).numLayers`

#### 描述

合成中的图层数量。

#### 类型

整数；只读。

---

### CompItem.preserveNestedFrameRate

`app.project.item(index).preserveNestedFrameRate`

#### 描述

当为 `true` 时，嵌套合成的帧速率在当前合成中保留。这对应于合成设置对话框高级选项卡中的“嵌套或渲染队列时保留帧速率”选项。

#### 类型

布尔值；可读写。

---

### CompItem.preserveNestedResolution

`app.project.item(index).preserveNestedResolution`

#### 描述

当为 `true` 时，嵌套合成的分辨率在当前合成中保留。这对应于合成设置对话框高级选项卡中的“嵌套时保留分辨率”选项。

#### 类型

布尔值；可读写。

---

### CompItem.renderer

`app.project.item(index).renderer`

#### 描述

用于渲染此合成的当前渲染插件模块，如合成设置对话框高级选项卡中所设置。允许的值是 [CompItem.renderers](#compitemrenderers) 的成员。

#### 类型

字符串；可读写。

---

### CompItem.renderers

`app.project.item(index).renderers`

#### 描述

可用的渲染插件模块。成员字符串反映了已安装的模块，如合成设置对话框高级选项卡中所见。

#### 类型

字符串数组；只读。

---

### CompItem.resolutionFactor

`app.project.item(index).resolutionFactor`

#### 描述

渲染合成的 x 和 y 下采样分辨率因子。数组中的两个值指定采样时要跳过的像素数；第一个数字控制水平采样，第二个控制垂直采样。全分辨率为 `[1, 1]`，半分辨率为 `[2, 2]`，四分之一分辨率为 `[4, 4]`。默认值为 `[1, 1]`。

#### 类型

两个整数的数组，范围为 `[1..99]`；可读写。

---

### CompItem.selectedLayers

`app.project.item(index).selectedLayers`

#### 描述

此合成中所有选中的图层。这是一个基于 0 的数组（第一个对象位于索引 0）。

#### 类型

[Layer](../../layer/layer) 对象数组；只读。

---

### CompItem.selectedProperties

`app.project.item(index).selectedProperties`

#### 描述

此合成中所有选中的属性（Property 和 PropertyGroup 对象）。第一个属性位于索引位置 0。

#### 类型

[Property](../../property/property) 和 [PropertyGroup](../../property/propertygroup) 对象数组；只读。

---

### CompItem.shutterAngle

`app.project.item(index).shutterAngle`

#### 描述

合成的快门角度设置。这对应于合成设置对话框高级选项卡中的“快门角度”设置。

#### 类型

整数，范围为 `[0..720]`；可读写。

---

### CompItem.shutterPhase

`app.project.item(index).shutterPhase`

#### 描述

合成的快门相位设置。这对应于合成设置对话框高级选项卡中的“快门相位”设置。

#### 类型

整数，范围为 `[-360..360]`；可读写。

---

### CompItem.workAreaDuration

`app.project.item(index).workAreaDuration`

#### 描述

工作区域的持续时间，以秒为单位。这是合成工作区域的起点和终点时间之差。

#### 类型

浮点值；可读写。

---

### CompItem.workAreaStart

`app.project.item(index).workAreaStart`

#### 描述

合成工作区域开始的时间，以秒为单位。

#### 类型

浮点值；可读写。

---

## 函数

### CompItem.duplicate()

`app.project.item(index).duplicate()`

#### 描述

创建并返回此合成的副本，其中包含与原始合成相同的图层。

#### 参数

无。

#### 返回

CompItem 对象。

---

### CompItem.exportAsMotionGraphicsTemplate()

`app.project.item(index).exportAsMotionGraphicsTemplate(doOverWriteFileIfExisting[, file_path])`

:::note
该方法添加于 After Effects 15.0 (CC 2018)
:::

#### 描述

将合成导出为 Motion Graphics 模板。如果 Motion Graphics 模板成功导出，则返回 `true`，否则返回 `false`。

Essential Graphics 面板中的名称用于 Motion Graphics 模板的文件名（例如，“My Template.mogrt”）。
使用 `motionGraphicsTemplateName` 属性设置名称。

可以选择指定保存 Motion Graphics 模板文件的文件夹路径。如果未指定，文件将保存在当前用户的 Motion Graphics 模板文件夹中：

| 操作系统 | 路径 |
| --- | --- |
| macOS | `/Users/<name>/Library/Application Support/Adobe/Common/Motion Graphics Templates/` |
| Windows | `C:\Users\<name>\AppData\Roaming\Adobe\Common\Motion Graphics Templates\` |

如果项目自上次保存以来已更改，After Effects 将提示用户保存项目。为避免此情况，请在导出 Motion Graphics 模板之前使用项目的 `save()` 方法。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `doOverWriteFileIfExisting` | 布尔值 | 是否覆盖同名的现有文件。 |
| `file_path` | 字符串 | 可选。保存文件的文件夹路径。 |

#### 返回

布尔值。

---

### CompItem.getMotionGraphicsTemplateControllerName()

`app.project.item(index).getMotionGraphicsTemplateControllerName(index)`

:::note
此功能在 After Effects 16.1 (CC 2019) 版本中添加
:::

#### 描述

获取基本图形面板中单个属性的名称。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `index` | 整数 | 要返回名称的EGP属性索引 |

#### 返回值

字符串；只读。

---

### CompItem.setMotionGraphicsControllerName()

`app.project.item(index).setMotionGraphicsControllerName(index, newName)`

:::note
此功能在 After Effects 16.1 (CC 2019) 版本中添加
:::

#### 描述

设置基本图形面板中单个属性的名称。

:::tip
要在将属性添加到EGP时重命名，请参阅[Property.addToMotionGraphicsTemplateAs()](../../property/property#propertyaddtomotiongraphicstemplateas)。
:::

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `index` | 整数 | 要重命名的EGP属性索引 |
| `newName` | 字符串 | EGP属性的新名称 |

#### 返回值

字符串；只读。

---

### CompItem.layer()

`app.project.item(index).layer(index)`

`app.project.item(index).layer(otherLayer, relIndex)`

`app.project.item(index).layer(name)`

#### 描述

返回一个图层对象，可以通过名称、该合成中图层的索引位置或相对于另一个图层的索引位置来指定。

#### 参数

| 参数 | 类型 (范围 `[1..numLayers]`，其中`numLayers`是合成中的图层数量) | 描述 |
| --- | --- | --- |
| `index` | 整数 | 该合成中所需图层的索引编号 |

或：

| 参数 | 类型 (本合成中的[图层对象](../../layer/layer)) | 描述 |
| --- | --- | --- |
| `otherLayer` | 图层对象 | `relIndex`值将添加到此图层的索引值以查找所需图层的位置 |
| `relIndex` | 整数 (范围 `[1 - otherLayer.index .. numLayers - otherLayer.index]`) | 所需图层相对于`otherLayer`的位置。此值将添加到`otherLayer`值以派生绝对索引 |

或：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 所需图层名称 |

#### 返回值

[图层对象](../../layer/layer)。

---

### CompItem.openInEssentialGraphics()

`app.project.item(index).openInEssentialGraphics()`

:::note
此功能在 After Effects 15.0 (CC 2018) 版本中添加
:::

#### 描述

在基本图形面板中打开合成。

#### 参数

无。

#### 返回值

无。

---

### CompItem.openInViewer()

`app.project.item(index).openInViewer()`

#### 描述

在合成面板中打开合成，并将合成面板置于前端并给予焦点。

#### 参数

无。

#### 返回值

合成面板的[查看器对象](../../other/viewer)，如果无法打开合成则返回`null`。
