---
title: avlayer
---
# AVLayer 对象

`app.project.item(index).layer(index)`

#### 描述

AVLayer 对象为包含 AVItem 对象的图层（合成图层、素材图层、纯色图层、文本图层和音频图层）提供了一个接口。

:::info
AVLayer 是 [Layer 对象](../layer) 的子类。除了下面列出的方法和属性外，Layer 的所有方法和属性在操作 AVLayer 时也可用。
:::

:::info
AVLayer 是 [TextLayer 对象](../textlayer) 的基类，因此在操作 TextLayer 对象时，AVLayer 的属性和方法也可用。
:::

#### AE 属性

不同类型的图层具有不同的 AE 属性。AVLayer 具有以下属性和属性组：

- 标记
- 时间重映射
- 运动跟踪器
- 蒙版
- 效果
- 变换
  - 锚点
  - 位置
  - 缩放
  - 方向
  - X 旋转
  - Y 旋转
  - 旋转
  - 不透明度
- 图层样式
- 几何选项 // 光线追踪 3D
- 材质选项
  - 投射阴影
  - 光线透射
  - 接受阴影
  - 接受灯光
  - 出现在反射中 // 光线追踪 3D
  - 环境光
  - 漫反射
  - 高光强度
  - 高光光泽度
  - 金属
  - 反射强度 // 光线追踪 3D
  - 反射锐度 // 光线追踪 3D
  - 反射衰减 // 光线追踪 3D
  - 透明度 // 光线追踪 3D
  - 透明衰减 // 光线追踪 3D
  - 折射率 // 光线追踪 3D
- 音频
  - 音频电平

#### 示例

如果项目中的第一个项目是 CompItem，并且该 CompItem 的第一个图层是 AVLayer，则以下代码设置图层的 `quality`、`startTime` 和 `inPoint`。

```javascript
var firstLayer = app.project.item(1).layer(1);
firstLayer.quality = LayerQuality.BEST;
firstLayer.startTime = 1;
firstLayer.inPoint = 2;
```

---

## 属性

### AVLayer.adjustmentLayer

`app.project.item(index).layer(index).adjustmentLayer`

#### 描述

如果图层是调整图层，则为 `true`。

#### 类型

布尔值；可读写。

---

### AVLayer.audioActive

`app.project.item(index).layer(index).audioActive`

#### 描述

如果图层的音频在当前时间处于活动状态，则为 `true`。要使此值为 `true`，`audioEnabled` 必须为 `true`，除非此图层也被独奏，否则没有其他带有音频的图层可以独奏，并且时间必须在此图层的 `inPoint` 和 `outPoint` 之间。

#### 类型

布尔值；只读。

---

### AVLayer.audioEnabled

`app.project.item(index).layer(index).audioEnabled`

#### 描述

当为 `true` 时，图层的音频已启用。此值对应于时间轴面板中的音频切换开关。

#### 类型

布尔值；可读写。

---

### AVLayer.blendingMode

`app.project.item(index).layer(index).blendingMode`

#### 描述

图层的混合模式。

#### 类型

BlendingMode 枚举值；可读写。可以是以下之一：

- `BlendingMode.ADD`
- `BlendingMode.ALPHA_ADD`
- `BlendingMode.CLASSIC_COLOR_BURN`
- `BlendingMode.CLASSIC_COLOR_DODGE`
- `BlendingMode.CLASSIC_DIFFERENCE`
- `BlendingMode.COLOR`
- `BlendingMode.COLOR_BURN`
- `BlendingMode.COLOR_DODGE`
- `BlendingMode.DANCING_DISSOLVE`
- `BlendingMode.DARKEN`
- `BlendingMode.DARKER_COLOR`
- `BlendingMode.DIFFERENCE`
- `BlendingMode.DISSOLVE`
- `BlendingMode.DIVIDE`
- `BlendingMode.EXCLUSION`
- `BlendingMode.HARD_LIGHT`
- `BlendingMode.HARD_MIX`
- `BlendingMode.HUE`
- `BlendingMode.LIGHTEN`
- `BlendingMode.LIGHTER_COLOR`
- `BlendingMode.LINEAR_BURN`
- `BlendingMode.LINEAR_DODGE`
- `BlendingMode.LINEAR_LIGHT`
- `BlendingMode.LUMINESCENT_PREMUL`
- `BlendingMode.LUMINOSITY`
- `BlendingMode.MULTIPLY`
- `BlendingMode.NORMAL`
- `BlendingMode.OVERLAY`
- `BlendingMode.PIN_LIGHT`
- `BlendingMode.SATURATION`
- `BlendingMode.SCREEN`
- `BlendingMode.SUBTRACT`
- `BlendingMode.SILHOUETE_ALPHA` - 注意 'SILHOUETTE' 的拼写错误！
- `BlendingMode.SILHOUETTE_LUMA`
- `BlendingMode.SOFT_LIGHT`
- `BlendingMode.STENCIL_ALPHA`
- `BlendingMode.STENCIL_LUMA`
- `BlendingMode.SUBTRACT`
- `BlendingMode.VIVID_LIGHT`

---

### AVLayer.canSetCollapseTransformation

`app.project.item(index).layer(index).canSetCollapseTransformation`

#### 描述

如果可以在该图层上更改 `collapseTransformation` 属性的值，则为 `true`。

#### 类型

布尔值；只读。

---

### AVLayer.canSetTimeRemapEnabled

`app.project.item(index).layer(index).canSetTimeRemapEnabled`

#### 描述

如果可以在该图层上更改 `timeRemapEnabled` 属性的值，则为 `true`。

#### 类型

布尔值；只读。

---

### AVLayer.collapseTransformation

`app.project.item(index).layer(index).collapseTransformation`

#### 描述

如果该图层的折叠变换已启用，则为 `true`。

#### 类型

布尔值；可读写。

---

### AVLayer.effectsActive

`app.project.item(index).layer(index).effectsActive`

#### 描述

如果图层的效果处于活动状态，则为 `true`，如用户界面中其旁边的 `<f>` 图标所示。

#### 类型

布尔值；可读写。

---

### AVLayer.environmentLayer

`app.project.item(index).layer(index).environmentLayer`

#### 描述

如果这是光线追踪 3D 合成中的环境图层，则为 `true`。将此属性设置为 `true` 会自动使图层变为 3D（`threeDLayer` 变为 true）。

#### 类型

布尔值；可读写。

---

### AVLayer.frameBlending

`app.project.item(index).layer(index).frameBlending`

#### 描述

如果图层的帧混合已启用，则为 `true`。

#### 类型

布尔值；只读。

---

### AVLayer.frameBlendingType

`app.project.item(index).layer(index).frameBlendingType`

#### 描述

当图层的帧混合启用时，执行的帧混合类型。

#### 类型

FrameBlendingType 枚举值；可读写。可以是以下之一：

- `FrameBlendingType.FRAME_MIX`
- `FrameBlendingType.NO_FRAME_BLEND`
- `FrameBlendingType.PIXEL_MOTION`

---

### AVLayer.guideLayer

`app.project.item(index).layer(index).guideLayer`

#### 描述

如果图层是引导图层，则为 `true`。

#### 类型

布尔值；可读写。

---

### AVLayer.hasAudio

`app.project.item(index).layer(index).hasAudio`

#### 描述

如果图层包含音频组件，则为 `true`，无论其是否启用音频或独奏。

#### 类型

布尔值；只读。

---

### AVLayer.hasTrackMatte

`app.project.item(index).layer(index).hasTrackMatte`

:::note
此功能在 After Effects 23.0 中更新。轨道蒙版不再依赖于图层顺序。
:::

#### 描述

如果此图层具有轨道蒙版，则为 `true`。当为 `true` 时，此图层的 `trackMatteType` 值控制蒙版的应用方式。

有关可用的轨道蒙版类型，请参见 [AVLayer.trackMatteType](#avlayertrackmattetype)。

#### 类型

布尔值；只读。

---

### AVLayer.height

`app.project.item(index).layer(index).height`

#### 描述

图层的高度（以像素为单位）。

#### 类型

浮点值；只读。

---

### AVLayer.isNameFromSource

`app.project.item(index).layer(index).isNameFromSource`

#### 描述

如果图层没有明确设置的名称，但包含一个命名的源，则为 `true`。在这种情况下，`layer.name` 的值与 `layer.source.name` 相同。如果图层有明确设置的名称，或者图层没有源，则为 `false`。

#### 类型

布尔值；只读。

---

### AVLayer.isTrackMatte

`app.project.item(index)layer(index).isTrackMatte`

:::note
此功能在 After Effects 23.0 中更新。轨道蒙版不再依赖于图层顺序。
:::

#### 描述

如果此图层被用作轨道蒙版，则为 `true`。

#### 类型

布尔值；只读。

---

### AVLayer.motionBlur

`app.project.item(index).layer(index).motionBlur`

#### 描述

如果图层的运动模糊已启用，则为 `true`。

#### 类型

布尔值；可读写。

---

### AVLayer.preserveTransparency

`app.project.item(index).layer(index).preserveTransparency`

#### 描述

如果图层的保留透明度已启用，则为 `true`。

#### 类型

布尔值；可读写。

---

### AVLayer.quality

`app.project.item(index).layer(index).quality`

#### 描述

图层的显示质量。

#### 类型

`LayerQuality` 枚举值；可读写。可以是以下之一：

- `LayerQuality.BEST`
- `LayerQuality.DRAFT`
- `LayerQuality.WIREFRAME`

---

### AVLayer.samplingQuality

`app.project.item(index).layer(index).samplingQuality`

:::note
该方法添加于 After Effects 12.0 (CC)
:::

#### 描述

设置/获取图层的采样方法（双三次或双线性）。

#### 类型

`LayerSamplingQuality` 枚举值；可读写。可以是以下之一：

- `LayerSamplingQuality.BICUBIC`
- `LayerSamplingQuality.BILINEAR`

---

### AVLayer.source

`app.project.item(index).layer(index).source`

#### 描述

此图层的源 AVItem。在文本图层中，该值为 `null`。使用 [AVLayer.replaceSource()](#avlayerreplacesource) 更改该值。

#### 类型

AVItem 对象；只读。

---

### AVLayer.threeDLayer

`app.project.item(index).layer(index).threeDLayer`

#### 描述

如果这是 3D 图层，则为 `true`。

#### 类型

布尔值；可读写。

---

### AVLayer.threeDPerChar

`app.project.item(index).layer(index).threeDPerChar`

#### 描述

如果此图层启用了“启用逐字符 3D”开关，则为 `true`，允许其字符在文本图层平面外进行动画处理。仅适用于文本图层。

#### 类型

布尔值；可读写。

---

### AVLayer.timeRemapEnabled

`app.project.item(index).layer(index).timeRemapEnabled`

#### 描述

如果此图层启用了时间重映射，则为 `true`。

#### 类型

布尔值；可读写。

---

### AVLayer.trackMatteLayer

`app.project.item(index).layer(index).trackMatteLayer`

:::note
该方法添加于 After Effects 23.0
:::

#### 描述

返回此图层的轨道蒙版图层。如果此图层没有轨道蒙版图层，则返回 `null`。

#### 类型

AVLayer 对象；只读。

---

### AVLayer.trackMatteType

`app.project.item(index).layer(index).trackMatteType`

:::note
此功能在 After Effects 23.0 中更新
:::

:::warning
这是一个我们不建议在新脚本中用于设置轨道蒙版类型的旧版 API。请考虑使用最新的轨道蒙版 API [AVLayer.setTrackMatte()](#avlayersettrackmatte) 和 [AVLayer.removeTrackMatte()](#avlayerremovetrackmatte) 来完成您的任务。
:::

#### 描述

如果此图层具有轨道蒙版，则指定轨道蒙版的应用方式。指定 `TrackMatteType.NO_TRACK_MATTE` 类型将删除此图层的轨道蒙版并重置轨道蒙版类型。

#### 类型

`TrackMatteType` 枚举值；可读写。可以是以下之一：

- `TrackMatteType.ALPHA`
- `TrackMatteType.ALPHA_INVERTED`
- `TrackMatteType.LUMA`
- `TrackMatteType.LUMA_INVERTED`
- `TrackMatteType.NO_TRACK_MATTE`

#### 示例

```javascript
// 返回 myLayer 的当前轨道蒙版类型
var type = myLayer.trackMatteType;

// *** 我们建议使用新的轨道蒙版 API 来执行以下操作（参见警告） ***

// 将 myLayer 的轨道蒙版类型更改为 TrackMatteType.ALPHA_INVERTED
myLayer.trackMatteType = TrackMatteType.ALPHA_INVERTED;

// 删除轨道蒙版并重置类型
myLayer.trackMatteType = TrackMatteType.NO_TRACK_MATTE;
```

---

### AVLayer.width

`app.project.item(index).layer(index).width`

#### 描述

图层的宽度（以像素为单位）。

#### 类型

浮点值；只读。

---

## 函数
