---
title: 图层
---
# Layer 对象

`app.project.item(index).layer(index)`

#### 描述

Layer 对象提供了对合成中图层的访问。可以通过索引号或名称字符串从项目的图层集合中访问它。

:::info
Layer 是 [PropertyGroup](../../property/propertygroup) 的子类，而 PropertyGroup 又是 [PropertyBase](../../property/propertybase) 的子类。除了下面列出的方法和属性外，PropertyGroup 的所有方法和属性在处理 Layer 时都可用，但 `propertyIndex` 属性设置为 `undefined`。
:::

:::info
Layer 是 [CameraLayer 对象](../cameralayer)、[LightLayer 对象](../lightlayer) 和 [AVLayer 对象](../avlayer) 的基类，因此在处理所有图层类型时，Layer 的属性和方法都可用。除了它们的 JavaScript 属性和方法外，图层还包含 AE 属性。有关如何访问图层中的属性的示例，请参阅 [PropertyBase 对象](../../property/propertybase)。
:::

#### 示例

如果项目中的第一个项目是 [CompItem](../../item/compitem)，此示例将禁用该合成中的第一个图层并重命名它。例如，这可能会关闭合成中的某个图标。

```javascript
var firstLayer = app.project.item(1).layer(1);
firstLayer.enabled = false;
firstLayer.name = "DisabledLayer";
```

---

## 属性

### Layer.autoOrient

`app.project.item(index).layer(index).autoOrient`

#### 描述

图层执行的自动定向类型。

#### 类型

`AutoOrientType` 枚举值；可读写。可能的值包括：

- `AutoOrientType.ALONG_PATH` 图层朝向运动路径的方向。
- `AutoOrientType.CAMERA_OR_POINT_OF_INTEREST` 图层始终朝向活动摄像机或指向其兴趣点。
- `AutoOrientType.CHARACTERS_TOWARD_CAMERA` 每个字符在逐字符 3D 文本图层中自动朝向活动摄像机。
- `AutoOrientType.NO_AUTO_ORIENT` 图层自由旋转，独立于任何运动路径、兴趣点或其他图层。

---

### Layer.comment

`app.project.item(index).layer(index).comment`

#### 描述

图层的描述性注释。

#### 类型

字符串；可读写。

---

### Layer.containingComp

`app.project.item(index).layer(index).containingComp`

#### 描述

包含此图层的合成。

#### 类型

CompItem 对象；只读。

---

### Layer.hasVideo

`app.project.item(index).layer(index).hasVideo`

#### 描述

当为 `true` 时，图层在时间轴面板中有一个视频开关（眼睛图标）；否则为 `false`。

#### 类型

布尔值；只读。

---

### Layer.id

`app.project.item(index).layer(index).id`

:::note
该方法添加于 After Effects 22.0 (2022)
:::

#### 描述

Layer 上的实例属性，返回一个唯一且持久的标识号，用于在会话之间标识图层。

当项目保存到文件并稍后重新加载时，ID 的值保持不变。

但是，当将此项目导入另一个项目时，导入项目中的所有图层都会被分配新的 ID。ID 不会在用户界面中的任何地方显示。

#### 类型

整数；只读。

---

### Layer.index

`app.project.item(index).layer(index).index`

#### 描述

图层的索引位置。

#### 类型

整数，范围为 `[1..numLayers]`；只读。

---

### Layer.inPoint

`app.project.item(index).layer(index).inPoint`

#### 描述

图层的“入点”，以合成时间（秒）表示。

#### 类型

浮点值，范围为 `[-10800.0..10800.0]`（正负三小时）；可读写。

---

### Layer.isNameSet

`app.project.item(index).layer(index).isNameSet`

#### 描述

如果 name 属性的值已显式设置，而不是从源自动设置，则为 `true`。

:::tip
对于没有 [AVLayer.source](../avlayer#avlayersource) 的图层，此值始终返回 `true`。
:::

#### 类型

布尔值；只读。

---

### Layer.label

`app.project.item(index).layer(index).label`

#### 描述

项目的标签颜色。颜色由其编号表示（0 表示无颜色，1 到 16 表示标签首选项中的预设颜色之一）。

:::tip
无法通过编程方式设置自定义标签颜色。
:::

#### 类型

整数（0 到 16）；可读写。

---

### Layer.locked

`app.project.item(index).layer(index).locked`

#### 描述

当为 `true` 时，图层被锁定；否则为 `false`。这对应于图层面板中的锁定切换。

#### 类型

布尔值；可读写。

---

### Layer.marker

`app.project.item(index).layer(index).marker`

#### 描述

包含图层所有标记的 [PropertyGroup 对象](../../property/propertygroup)。图层标记脚本与 [Comp 标记](../../item/compitem#compitemmarkerproperty) 具有相同的功能。

请参阅 [MarkerValue 对象](../../other/markervalue)。

#### 类型

PropertyGroup 对象或 `null`；只读。

#### 示例

以下示例代码创建了两个具有不同属性的图层标记

```javascript
var solidLayer = comp.layers.addSolid([1, 1, 1], "mylayer", 1920, 1080, 1.0);

var layerMarker = new MarkerValue("This is a layer marker!");
layerMarker.duration = 1;

var layerMarker2 = new MarkerValue("Another comp marker!");
layerMarker2.duration = 1;

solidLayer.marker.setValueAtTime(1, layerMarker);
solidLayer.marker.setValueAtTime(3, layerMarker2);
```

---

### Layer.nullLayer

`app.project.item(index).layer(index).nullLayer`

#### 描述

当为 `true` 时，图层是作为空对象创建的；否则为 `false`。

#### 类型

布尔值；只读。

---

### Layer.outPoint

`app.project.item(index).layer(index).outPoint`

#### 描述

图层的“出点”，以合成时间（秒）表示。

#### 类型

浮点值，范围为 `[-10800.0..10800.0]`（正负三小时）；可读写。

---

### Layer.parent

`app.project.item(index).layer(index).parent`

#### 描述

此图层的父级；可以为 `null`。

偏移值被计算为抵消层次结构中此图层上方的任何变换，以便在设置父级时，图层的变换不会出现明显的跳跃。

例如，如果新父级具有 30 度的旋转，则子图层将被分配 -30 度的旋转。

要在不更改子图层变换值的情况下设置父级，请使用 [setParentWithJump](#layersetparentwithjump) 方法。

#### 类型

Layer 对象或 `null`；可读写。

---

### Layer.selectedProperties

`app.project.item(index).layer(index).selectedProperties`

#### 描述

包含图层中当前选定的所有 [Property](../../property/property) 和 [PropertyGroup](../../property/propertygroup) 对象的数组。

#### 类型

[PropertyBase](../../property/propertybase) 对象的数组；只读。

---

### Layer.shy

`app.project.item(index).layer(index).shy`

#### 描述

当为 `true` 时，图层是“害羞的”，这意味着如果合成的“隐藏所有害羞图层”选项已切换为打开，则图层在图层面板中隐藏。

#### 类型

布尔值；可读写。

---

### Layer.solo

`app.project.item(index).layer(index).solo`

#### 描述

当为 `true` 时，图层是独奏的，否则为 `false`。

#### 类型

布尔值；可读写。

---

### Layer.startTime

`app.project.item(index).layer(index).startTime`

#### 描述

图层的开始时间，以合成时间（秒）表示。

#### 类型

浮点值，范围为 `[-10800.0..10800.0]`（正负三小时）；可读写。

---

### Layer.stretch

`app.project.item(index).layer(index).stretch`

#### 描述

图层的时间拉伸，以百分比表示。值为 100 表示没有拉伸。0 到 1 之间的值设置为 1，-1 到 0 之间的值（不包括 0）设置为 -1。

#### 类型

浮点值，范围为 `[-9900.0..9900.0]`；可读写。

---

### Layer.time

`app.project.item(index).layer(index).time`

#### 描述

图层的当前时间，以合成时间（秒）表示。

#### 类型

浮点值；只读。

---

## 函数

### Layer.activeAtTime()

`app.project.item(index).layer(index).activeAtTime(time)`

#### 描述

如果此图层在指定时间处于活动状态，则返回 `true`。

要返回 `true`，图层必须启用，没有其他图层独奏（除非此图层也独奏），并且时间必须在此图层的 `inPoint` 和 `outPoint` 值之间。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `time` | 浮点值 | 时间（秒）。 |

#### 返回

布尔值。

---

### Layer.applyPreset()

`app.project.item(index).layer(index).applyPreset(presetName);`

#### 描述

将指定的动画设置集合（动画预设）应用于图层所属合成中当前选定的所有图层。如果没有选定图层，则将动画预设应用于新的纯色图层。

预定义的动画预设文件安装在 Presets 文件夹中，用户可以通过用户界面创建新的动画预设。

:::warning
动画预设应用于合成的选定图层，而不是调用 applyPreset 函数的图层。因此，调用 applyPreset 函数的图层实际上只是确定要处理的合成的图层。
:::

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `presetName` | [Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) 对象 | 包含动画预设的文件。 |

#### 返回

无。

---

### Layer.copyToComp()

`app.project.item(index).layer(index).copyToComp(intoComp)`

#### 描述

将图层复制到指定的合成中。原始图层保持不变。

创建一个与此图层具有相同值的新 Layer 对象，并将其前置到目标 CompItem 中的 [LayerCollection 对象](../layercollection)。使用 `intoComp.layer(1)` 检索副本。

复制图层会更改目标合成中先前存在的图层的索引位置。

这与通过用户界面复制和粘贴图层相同。

:::note
从 After Effects 13.6 开始，当图层具有父级时，此方法不再导致 After Effects 崩溃。
:::

:::warning
从 After Effects 13.7 开始（13.6 尚未测试），如果复制的图层上有效果并且用户撤消操作，After Effects 将崩溃。
:::

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `intoComp` | [CompItem 对象](../../item/compitem) | 目标合成。 |

#### 返回

无。

---

### Layer.doSceneEditDetection()

`app.project.item(index).layer(index).doSceneEditDetection(applyOptions)`

:::note
该方法添加于 After Effects 22.3 (2022)
:::

#### 描述

在调用该方法的图层上运行场景编辑检测，并返回包含检测到的场景时间的数组。这与在时间轴中选择图层并选择“图层 > 场景编辑检测”相同，单个参数确定编辑是作为标记、图层分割、预合成应用，还是不应用于图层。

就像在用户界面中一样，如果对非视频图层或启用了时间重映射的视频图层调用 `doSceneEditDetection`，它将失败并报错。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `applyOptions` | `SceneEditDetectionMode` 枚举 | 检测到的编辑将如何应用。可能的值包括： |
| | | -`SceneEditDetectionMode.MARKERS`：在编辑点创建标记。 |
| | | -`SceneEditDetectionMode.SPLIT`：分割图层。 |
| | | -`SceneEditDetectionMode.SPLIT_PRECOMP`：在编辑点分割图层并预合成每个部分。 |
| | | -`SceneEditDetectionMode.NONE`：检测到的编辑不应用于图层。 |

#### 返回

浮点值数组；检测到的编辑点的时间，以合成时间表示。

---

### Layer.duplicate()

`app.project.item(index).layer(index).duplicate()`

#### 描述

复制图层。创建一个与此图层具有相同值的新 Layer 对象。这与在用户界面中选择图层并选择“编辑 > 复制”具有相同的效果，只是调用此方法时用户界面中的选择不会更改。

#### 参数

无。

#### 返回

Layer 对象。

---

### Layer.moveAfter()

`app.project.item(index).layer(index).moveAfter(layer)`

#### 描述

将此图层移动到指定图层之后（下方）的位置。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `layer` | [Layer 对象](../layer) | 同一合成中的目标图层。 |

#### 返回

无。

---

### Layer.moveBefore()

`app.project.item(index).layer(index).moveBefore(layer)`

#### 描述

将此图层移动到指定图层之前（上方）的位置。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `layer` | [Layer 对象](../layer) | 同一合成中的目标图层。 |

#### 返回

无。

---

### Layer.moveToBeginning()

`app.project.item(index).layer(index).moveToBeginning()`

#### 描述

将此图层移动到图层堆栈的顶部（第一个图层）。

#### 参数

无。

#### 返回

无。

---

### Layer.moveToEnd()

`app.project.item(index).layer(index).moveToEnd()`

#### 描述

将该图层移动到图层堆栈的最底部（即最后一个图层）。

#### 参数

无。

#### 返回值

无。

---

### Layer.remove()

`app.project.item(index).layer(index).remove()`

#### 描述

从合成中删除指定的图层。

#### 参数

无。

#### 返回值

无。

---

### Layer.setParentWithJump()

`app.project.item(index).layer(index).setParentWithJump([newParent])`

#### 描述

将此图层的父级设置为指定图层，且不改变子图层的变换值。

由于该图层的变换值会与其祖先图层的变换值合并，子图层在旋转、位移或缩放方面可能会出现明显的跳跃。

如果不想让子图层发生跳跃，请直接设置 [parent](#layerparent) 属性。在这种情况下，会计算偏移量并设置到子图层的变换字段中，以防止跳跃发生。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `newParent` | [Layer 对象](../layer) | 可选。同一合成中的一个图层。如果未指定，则将父级设置为 None。 |

#### 返回值

无。
