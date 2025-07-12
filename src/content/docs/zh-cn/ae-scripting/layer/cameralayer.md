---
title: 摄像机图层
---
# CameraLayer 对象

`app.project.item(index).layer(index)`

#### 描述

CameraLayer 对象表示合成中的一个摄像机图层。可以使用 [LayerCollection.addCamera()](../layercollection#layercollectionaddcamera) 创建它。可以通过索引号或名称字符串在项目的图层集合中访问它。

:::info
CameraLayer 是 [Layer 对象](../layer) 的子类。在使用 CameraLayer 时，所有 Layer 的方法和属性都可用。
:::

#### AE 属性

CameraLayer 没有定义额外的属性，但与其他图层类型相比，它具有不同的 AE 属性。它具有以下属性和属性组：

- `Marker`
- `Transform`
 - `PointofInterest`
 - `Position`
 - `Scale`
 - `Orientation`
 - `XRotation`
 - `YRotation`
 - `Rotation`
 - `Opacity`
- `CameraOptions`
 - `Zoom`
 - `DepthofField`
 - `FocusDistance`
 - `BlurLevel`
