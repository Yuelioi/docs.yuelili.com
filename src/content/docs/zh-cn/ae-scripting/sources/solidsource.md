---
title: 纯色素材源
---
# SolidSource 对象

`app.project.item(index).mainSource`

`app.project.item(index).proxySource`

#### 描述

SolidSource 对象表示一个纯色素材源。

:::info
SolidSource 是 [FootageSource](../footagesource) 的子类。除了下面列出的方法和属性外，FootageSource 的所有方法和属性在操作 SolidSource 时也可用。
:::

---

## 属性

### SolidSource.color

`solidSource.color`

#### 描述

纯色的颜色，以红、绿、蓝值表示。

#### 类型

由三个浮点值组成的数组，`[R, G, B]`，范围为 `[0.0..1.0]`；可读写。
