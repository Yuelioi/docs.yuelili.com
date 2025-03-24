---
title: 关键字
---
# KeyframeEase 对象

`myKey = new KeyframeEase(speed, influence);`

#### 描述

KeyframeEase 对象封装了图层 AE 属性的关键帧缓动设置。关键帧缓动由使用属性的 [setTemporalEaseAtKey](../../property/property#propertysettemporaleaseatkey) 方法设置的速度和影响值决定。构造函数创建一个 KeyframeEase 对象。两个参数都是必需的。

- `speed`: 浮点值。设置 `speed` 属性。
- `influence`: 浮点值，范围为 `[0.1..100.0]`。设置 `influence` 属性。

#### 示例

此示例假设 Position（一个空间属性）有两个以上的关键帧。

```javascript
var easeIn = new KeyframeEase(0.5, 50);
var easeOut = new KeyframeEase(0.75, 85);
var myPositionProperty = app.project.item(1).layer(1).property("Position");
myPositionProperty.setTemporalEaseAtKey(2, [easeIn], [easeOut]);
```

此示例设置了 Scale（一个具有二维或三维的时间属性）。对于 2D 和 3D 属性，您必须为每个维度设置 `easeIn` 和 `easeOut` 值：

```javascript
var easeIn = new KeyframeEase(0.5, 50);
var easeOut = new KeyframeEase(0.75, 85);
var myScaleProperty = app.project.item(1).layer(1).property("Scale")
myScaleProperty.setTemporalEaseAtKey(2, [easeIn, easeIn, easeIn], [easeOut, easeOut, easeOut]);
```

---

## 属性

### KeyframeEase.influence

`myKey.influence`

#### 描述

关键帧的影响值，如关键帧速度对话框中所示。

#### 类型

浮点值，范围为 `[0.1..100.0]`；可读写。

---

### KeyframeEase.speed

`myKey.speed`

#### 描述

关键帧的速度值。单位取决于关键帧的类型，并显示在关键帧速度对话框中。

#### 类型

浮点值；可读写。
