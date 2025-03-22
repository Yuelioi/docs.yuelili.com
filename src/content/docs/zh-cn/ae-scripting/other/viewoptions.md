---
title: 视图选项
---
# ViewOptions 对象

`app.activeViewer.views[0].options`

#### 描述

ViewOptions 对象表示给定 [View 对象](../view) 的选项。

#### 示例

以下代码为给定视图启用棋盘格并锁定参考线：

```javascript
var activeViewer = app.activeViewer;
var viewOptions = activeViewer.views[0].options;
viewOptions.checkerboards = true;
viewOptions.guidesLocked = true;
```

---

## 属性

### ViewOptions.channels

`app.activeViewer.views[0].options.channels`

#### 描述

通道菜单的状态。

#### 类型

一个 `ChannelType` 枚举值；可读/写。可能的值为：

- `CHANNEL_ALPHA`
- `CHANNEL_ALPHA_BOUNDARY`
- `CHANNEL_ALPHA_OVERLAY`
- `CHANNEL_BLUE`
- `CHANNEL_BLUE_COLORIZE`
- `CHANNEL_GREEN`
- `CHANNEL_GREEN_COLORIZE`
- `CHANNEL_RED`
- `CHANNEL_RED_COLORIZE`
- `CHANNEL_RGB`
- `CHANNEL_RGB_STRAIGHT`

---

### ViewOptions.checkerboards

`app.activeViewer.views[0].options.checkerboards`

#### 描述

当为 `true` 时，当前视图中启用棋盘格（透明网格）。

#### 类型

布尔值；可读/写。

---

### ViewOptions.exposure

`app.activeViewer.views[0].options.exposure`

#### 描述

当前视图的曝光值。

#### 类型

浮点值，范围为 `[-40..40]`。

---

### ViewOptions.fastPreview

`app.activeViewer.views[0].options.fastPreview`

:::note
该方法添加于 After Effects 12.0 (CC)
:::

#### 描述

快速预览菜单的状态。这是一个使用枚举值的可读/写属性：

:::warning
如果您尝试在图层或素材面板中获取或设置该属性的值，您将收到错误消息。
:::

:::tip
草稿预览模式仅在光线追踪 3D 合成中可用。如果您尝试在经典 3D 合成中使用它，您将收到错误：“无法在经典 3D 合成中设置草稿快速预览模式。”
:::

#### 类型

一个 `FastPreviewType` 枚举值；可读/写。可能的值为：

- `FastPreviewType.FP_OFF`: 关闭（最终质量）
- `FastPreviewType.FP_ADAPTIVE_RESOLUTION`: 自适应分辨率
- `FastPreviewType.FP_DRAFT`: 草稿
- `FastPreviewType.FP_FAST_DRAFT`: 快速草稿
- `FastPreviewType.FP_WIREFRAME`: 线框

#### 示例

```javascript
app.activeViewer.views[0].options.fastPreview === FastPreviewType.FP_ADAPTIVE_RESOLUTION;
app.activeViewer.views[0].options.fastPreview === FastPreviewType.FP_DRAFT;
app.activeViewer.views[0].options.fastPreview === FastPreviewType.FP_FAST_DRAFT;
app.activeViewer.views[0].options.fastPreview === FastPreviewType.FP_OFF;
app.activeViewer.views[0].options.fastPreview === FastPreviewType.FP_WIREFRAME;
```

---

### ViewOptions.guidesLocked

`app.activeViewer.views[0].options.guidesLocked`

:::note
该方法添加于 After Effects 16.1 (CC 2019)
:::

#### 描述

当为 `true` 时，表示视图中的参考线已锁定。

#### 类型

布尔值；可读/写。

#### 示例

```javascript
app.activeViewer.views[0].options.guidesLocked;
```

---

### ViewOptions.guidesSnap

`app.activeViewer.views[0].options.guidesSnap`

:::note
该方法添加于 After Effects 16.1 (CC 2019)
:::

#### 描述

当为 `true` 时，表示在视图中拖动图层时会吸附到参考线。

#### 类型

布尔值；可读/写。

#### 示例

```javascript
app.activeViewer.views[0].options.guidesSnap;
```

---

### ViewOptions.guidesVisibility

`app.activeViewer.views[0].options.guidesVisibility`

:::note
该方法添加于 After Effects 16.1 (CC 2019)
:::

#### 描述

当为 `true` 时，表示视图中的参考线可见。

#### 类型

布尔值；可读/写。

#### 示例

```javascript
app.activeViewer.views[0].options.guidesVisibility;
```

---

### ViewOptions.rulers

`app.activeViewer.views[0].options.rulers`

:::note
该方法添加于 After Effects 16.1 (CC 2019)
:::

#### 描述

当为 `true` 时，表示视图中显示标尺。

#### 类型

布尔值；可读/写。

#### 示例

```javascript
app.activeViewer.views[0].options.rulers;
```

---

### ViewOptions.zoom

`app.activeViewer.views[0].options.zoom`

#### 描述

设置视图的当前缩放值，作为 1% (0.01) 到 1600% (16) 之间的归一化百分比。

#### 类型

浮点值，范围为 `[0.01..16]`。
