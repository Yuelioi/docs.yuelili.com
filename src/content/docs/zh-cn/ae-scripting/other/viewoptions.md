---
title: viewoptions
---
# ViewOptions object

`app.activeViewer.views[0].options`

#### 描述

The ViewOptions object represents the options for a given [View object](../view)

#### 示例

This enables checkerboards and locks guides for a given view

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

The state of the Channels menu.

#### 类型

A `ChannelType` enumerated value; read/write. One of:

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

When `true`, checkerboards (transparency grid) is enabled in the current view.

#### 类型

Boolean; read/write.

---

### ViewOptions.exposure

`app.activeViewer.views[0].options.exposure`

#### 描述

The exposure value for the current view.

#### 类型

Floating-point value, 范围为 `[-40..40]`

---

### ViewOptions.fastPreview

`app.activeViewer.views[0].options.fastPreview`

:::note
该方法添加于 After Effects 12.0 (CC)
:::

#### 描述

The state of the Fast Previews menu. This is a read/write attribute using an enumerated value:

:::warning
If you try to get or set the attribute's value in the Layer or Footage panel, you'll get an error message.
:::

:::tip
The Draft preview mode is only available in ray-traced 3D compositions. If you try to use it in a Classic 3D composition, you'll get an error: "Cannot set Draft fast preview mode in a Classic 3D composition."
:::

#### 类型

A `FastPreviewType` enumerated value; read/write. One of:

- `FastPreviewType.FP_OFF`: Off (Final Quality)
- `FastPreviewType.FP_ADAPTIVE_RESOLUTION`: Adaptive Resolution
- `FastPreviewType.FP_DRAFT`: Draft
- `FastPreviewType.FP_FAST_DRAFT`: Fast Draft
- `FastPreviewType.FP_WIREFRAME`: Wireframe

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

When `true`, indicates guides are locked in the view.

#### 类型

Boolean; read/write.

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

When `true`, indicates layers snap to guides when dragged in the view.

#### 类型

Boolean; read/write.

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

When `true`, indicates guides are visible in the view.

#### 类型

Boolean; read/write.

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

When `true`, indicates rulers are shown in the view.

#### 类型

Boolean; read/write.

#### 示例

```javascript
app.activeViewer.views[0].options.rulers;
```

---

### ViewOptions.zoom

`app.activeViewer.views[0].options.zoom`

#### 描述

Sets the current zoom value for the view, as a normalized percentage between 1% (0.01) and 1600% (16).

#### 类型

Floating-point value, 范围为 `[0.01..16]`
