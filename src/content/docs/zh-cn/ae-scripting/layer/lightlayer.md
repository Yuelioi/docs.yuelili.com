---
title: 灯光图层
---
# LightLayer 对象

`app.project.item(index).layer(index)`

#### 描述

LightLayer 对象表示合成中的一个灯光层。可以使用 [LayerCollection.addLight()](../layercollection#layercollectionaddlight) 方法创建它。可以通过索引号或名称字符串在项目的图层集合中访问它。

:::info
LightLayer 是 [Layer 对象](../layer) 的子类。在使用 LightLayer 时，Layer 的所有方法和属性都可用。
:::

#### AE 属性

LightLayer 没有定义额外的属性，但与其他图层类型相比，它具有不同的 AE 属性。它具有以下属性和属性组：

- `Marker`
- `Transform`:
 - `PointofInterest`
 - `Position`
 - `Scale`
 - `Orientation`
 - `XRotation`
 - `YRotation`
 - `Rotation`
 - `Opacity`
- `LightOptions`:
 - `Intensity`
 - `Color`
 - `ConeAngle`
 - `ConeFeather`
 - `CastsShadows`
 - `ShadowDarkness`
 - `ShadowDiffusion`

---

## 属性

### LightLayer.lightSource

`app.project.item(index).layer(index).lightSource`

:::note

在 After Effects (Beta) 25.2.0.098 中，它被更新为允许任何 2D 图层类型作为光源。
:::

#### 描述

对于灯光层，当 `LightLayer.lightType` 为 `LightType.ENVIRONMENT` 时，用作光源的图层。

`LightLayer.lightSource` 可以是同一合成中的任何 2D 视频、静态图像或预合成图层。尝试将 3D 图层分配为 `.lightSource` 会导致“指定的光源无效”错误。

---

### LightLayer.lightType

`app.project.item(index).layer(index).lightType`

:::note
`LightType.ENVIRONMENT` 在 After Effects 24.3 中添加
:::

#### 描述

对于灯光层，其灯光类型。尝试为非灯光层设置此属性会产生错误。

#### 类型

一个 `LightType` 枚举值；可读写。取值为以下之一：

- `LightType.PARALLEL`
- `LightType.SPOT`
- `LightType.POINT`
- `LightType.AMBIENT`
- `LightType.ENVIRONMENT`
