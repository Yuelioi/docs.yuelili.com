---
title: 摄像机
---
# Camera

`thisLayer.cameraOption`

此类别用于摄像机图层的特定属性。

:::info

* 所有 3D 材质属性

:::

---

## 属性

### Camera.active

`thisLayer.cameraOption.active`

#### 描述

如果满足以下条件，则返回 `true`：

1. 摄像机在当前时间是合成的活动摄像机：摄像机图层的*视频开关*已打开，
2. 当前时间在摄像机图层的*入点*到*出点*范围内，**并且**
3. 摄像机是*时间轴面板*中列出的第一个（最顶部）此类摄像机图层。

否则返回 `false`。

#### 类型

布尔值

---

### Camera.aperture

`thisLayer.cameraOption.aperture`

#### 描述

返回摄像机的光圈值，单位为像素。

#### 类型

数字

---

### Camera.blurLevel

`thisLayer.cameraOption.blurLevel`

#### 描述

以百分比形式返回摄像机的模糊级别值。

#### 类型

数字

---

### Camera.depthOfField

`thisLayer.cameraOption.depthOfField`

#### 描述

如果摄像机的景深属性已打开，则返回 `1`；如果景深属性已关闭，则返回 `0`。

#### 类型

布尔值数字

---

### Camera.focusDistance

`thisLayer.cameraOption.focusDistance`

#### 描述

返回摄像机的焦点距离值，单位为像素。

#### 类型

数字

---

### Camera.highlightGain

`thisLayer.cameraOption.highlightGain`

#### 描述

返回摄像机的高光增益，范围为 1 到 100。

#### 类型

数字

---

### Camera.highlightSaturation

`thisLayer.cameraOption.highlightSaturation`

#### 描述

返回摄像机的高光饱和度，范围为 `1` 到 `100`。

#### 类型

数字

---

### Camera.highlightThreshold

`thisLayer.cameraOption.highlightThreshold`

#### 描述

返回摄像机的高光阈值。

* 在 8 位合成中，此值范围为 `0` 到 `100`
* 在 16 位合成中，此值范围为 `0` 到 `32768`
* 在 32 位合成中，此值范围为 `0` 到 `1.0`

#### 类型

数字

---

### Camera.irisAspectRatio

`thisLayer.cameraOption.irisAspectRatio`

#### 描述

返回摄像机光圈宽高比，范围为 1 到 100。

#### 类型

数字

---

### Camera.irisDiffractionFringe

`thisLayer.cameraOption.irisDiffractionFringe`

#### 描述

返回摄像机光圈衍射边缘，范围为 1 到 100。

#### 类型

数字

---

### Camera.irisRotation

`thisLayer.cameraOption.irisRotation`

#### 描述

返回光圈旋转值，单位为度。

#### 类型

数字

---

### Camera.irisRoundness

`thisLayer.cameraOption.irisRoundness`

#### 描述

以百分比形式返回摄像机光圈圆度值。

#### 类型

数字

---

### Camera.irisShape

`thisLayer.cameraOption.irisShape`

#### 描述

返回光圈形状值，范围为 1-10，对应于选定的下拉值。

:::note 值 `2` 保留用于分隔符。 :::#### 类型

数字

---

### Camera.pointOfInterest

`thisLayer.cameraOption.pointOfInterest`

#### 描述

返回摄像机在世界空间中的兴趣点值。

#### 类型

数组（3 维）

---

### Camera.zoom

`thisLayer.cameraOption.zoom`

#### 描述

返回摄像机的缩放值，单位为像素。

#### 类型

数字

#### 示例

以下是一个用于图层缩放属性的表达式，它在改变图层的 z 位置（深度）或摄像机的缩放值时保持图层的相对大小不变：

 ```js
cam = thisComp.activeCamera;
distance = length(sub(position, cam.position));
scale * distance / cam.zoom;
```
