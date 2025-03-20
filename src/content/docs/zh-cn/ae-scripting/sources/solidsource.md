---
title: solidsource
---
# SolidSource object

`app.project.item(index).mainSource`

`app.project.item(index).proxySource`

#### 描述

The SolidSource object represents a solid-color footage source.

:::info
SolidSource is a subclass of [FootageSource](../footagesource). All methods and attributes of FootageSource, in addition to those listed below, are available when working with SolidSource.
:::

---

## 属性

### SolidSource.color

`solidSource.color`

#### 描述

The color of the solid, expressed as red, green, and blue values.

#### 类型

Array of three floating-point values, `[R, G, B]`, 范围为 `[0.0..1.0]`; read/write.
