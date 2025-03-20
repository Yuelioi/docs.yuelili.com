---
title: 3D
---
# Layer 3D

`thisLayer`

这些属性与图层的 3D 属性相关。

:::info
在本页中，我们将使用 `thisLayer` 作为调用这些项的示例，但请注意，任何返回 [Layer](.././layer) 的方法都可以使用。
:::

---

## 属性

### Layer.acceptsLights

`thisLayer.acceptsLights`

#### 描述

如果图层接受灯光，则返回 `1`。

#### 类型

布尔值数字

---

### Layer.acceptsShadows

`thisLayer.acceptsShadows`

#### 描述

如果图层接受阴影，则返回 `1`；如果属性设置为 `仅接受阴影`，则返回 `2`。

#### 类型

数字

---

### Layer.ambient

`thisLayer.ambient`

#### 描述

以百分比形式返回环境光分量值。

#### 类型

数字

---

### Layer.castsShadows

`thisLayer.castsShadows`

#### 描述

如果图层投射阴影，则返回 `1.0`；如果属性设置为 `仅投射阴影`，则返回 `2`。

#### 类型

数字

---

### Layer.diffuse

`thisLayer.diffuse`

#### 描述

以百分比形式返回漫反射分量值。

#### 类型

数字

---

### Layer.lightTransmission

`thisLayer.lightTransmission`

#### 描述

返回 3D 图层的光传输属性值。

#### 类型

数字

---

### Layer.metal

`thisLayer.metal`

#### 描述

以百分比形式返回金属分量值。

#### 类型

数字

---

### Layer.orientation

`thisLayer.orientation`

#### 描述

返回 3D 图层的 3D 方向值，单位为度。

#### 类型

数组（3 维）

---

### Layer.rotationX

`thisLayer.rotationX`

#### 描述

返回 3D 图层的 x 轴旋转值，单位为度。

#### 类型

数字

---

### Layer.rotationY

`thisLayer.rotationY`

#### 描述

返回 3D 图层的 y 轴旋转值，单位为度。

#### 类型

数字

---

### Layer.rotationZ

`thisLayer.rotationZ`

#### 描述

返回 3D 图层的 z 轴旋转值，单位为度。

#### 类型

数字

---

### Layer.shininess

`thisLayer.shininess`

#### 描述

以百分比形式返回光泽度分量值。

#### 类型

数字

---

### Layer.specular

`thisLayer.specular`

#### 描述

以百分比形式返回镜面反射分量值。

#### 类型

数字
