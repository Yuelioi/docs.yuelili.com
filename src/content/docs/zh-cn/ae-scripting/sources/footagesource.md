---
title: 素材源
---
# FootageSource 对象

`app.project.item(index).mainSource`

`app.project.item(index).proxySource`

#### 描述

FootageSource 对象保存了描述某些素材源的信息。它被用作 [FootageItem 对象](../../item/footageitem) 的 `mainSource`，或 [CompItem 对象](../../item/compitem) 或 FootageItem 的 `proxySource`。

:::info
FootageSource 是 [SolidSource 对象](../solidsource) 的基类，因此在处理 SolidSource 对象时可以使用 FootageSource 的属性和方法。
:::

---

## 属性

### FootageSource.alphaMode

`app.project.item(index).mainSource.alphaMode`

`app.project.item(index).proxySource.alphaMode`

#### 描述

定义素材中 Alpha 信息的解释方式。如果 `hasAlpha` 为 `false`，则此属性没有实际意义。

#### 类型

Alpha Mode 枚举值；(可读/可写)。可选值为：

- `AlphaMode.IGNORE`
- `AlphaMode.STRAIGHT`
- `AlphaMode.PREMULTIPLIED`

---

### FootageSource.conformFrameRate

`app.project.item(index).mainSource.conformFrameRate`

`app.project.item(index).proxySource.conformFrameRate`

#### 描述

用于替代 `nativeFrameRate` 的帧率。如果设置为 0，则使用 `nativeFrameRate`。如果 [FootageSource.isStill](#footagesourceisstill) 为 `true`，则设置此值会报错。如果 [removePulldown](#footagesourceremovepulldown) 未设置为 `PulldownPhase.OFF`，则将此值设置为 0 会报错。如果在设置 `removePulldown` 为 `PulldownPhase.OFF` 以外的值时此值为 0，则此值会自动设置为 `nativeFrameRate` 的值。

#### 类型

浮点值，范围为 `[0.0..99.0]`；可读/可写。

---

### FootageSource.displayFrameRate

`app.project.item(index).mainSource.displayFrameRate`

`app.project.item(index).proxySource.displayFrameRate`

#### 描述

After Effects 在合成中显示和渲染的有效帧率。如果 [removePulldown](#footagesourceremovepulldown) 为 `PulldownPhase.OFF`，则此值与 `conformFrameRate`（如果非零）或 `nativeFrameRate`（如果 `conformFrameRate` 为 0）相同。如果 `removePulldown` 不是 `PulldownPhase.OFF`，则此值为 `conformFrameRate * 0.8`，即移除每 5 帧中的 1 帧后的有效帧率。

#### 类型

浮点值，范围为 `[0.0..99.0]`；只读。

---

### FootageSource.fieldSeparationType

`app.project.item(index).mainSource.fieldSeparationType`

`app.project.item(index).proxySource.fieldSeparationType`

#### 描述

在非静态素材中如何分离场。如果 `isStill` 为 `true`，则设置此属性会报错。如果 [removePulldown](#footagesourceremovepulldown) 不是 `PulldownPhase.OFF`，则将此值设置为 `FieldSeparationType.OFF` 会报错。

#### 类型

`FieldSeparationType` 枚举值；可读/可写。可选值为：

- `FieldSeparationType.OFF`
- `FieldSeparationType.UPPER_FIELD_FIRST`
- `FieldSeparationType.LOWER_FIELD_FIRST`

---

### FootageSource.hasAlpha

`app.project.item(index).mainSource.hasAlpha`

`app.project.item(index).proxySource.hasAlpha`

#### 描述

当为 `true` 时，素材具有 Alpha 通道。在这种情况下，属性 `alphaMode`、`invertAlpha` 和 `premulColor` 具有有效值。当为 `false` 时，这些属性对素材没有实际意义。

#### 类型

布尔值；只读。

---

### FootageSource.highQualityFieldSeparation

`app.project.item(index).mainSource.highQualityFieldSeparation`

`app.project.item(index).proxySource.highQualityFieldSeparation`

#### 描述

当为 `true` 时，After Effects 使用特殊算法来确定如何进行高质量的场分离。如果 `isStill` 为 `true`，或 `fieldSeparationType` 为 `FieldSeparationType.OFF`，则设置此属性会报错。

#### 类型

布尔值；可读/可写。

---

### FootageSource.invertAlpha

`app.project.item(index).mainSource.invertAlpha`

`app.project.item(index).proxySource.invertAlpha`

#### 描述

当为 `true` 时，素材剪辑或代理中的 Alpha 通道应反转。仅当存在 Alpha 通道时此属性有效。如果 `hasAlpha` 为 `false`，或 `alphaMode` 为 `AlphaMode.IGNORE`，则此属性被忽略。

#### 类型

布尔值；可读/可写。

---

### FootageSource.isStill

`app.project.item(index).mainSource.isStill`

`app.project.item(index).proxySource.isStill`

#### 描述

当为 `true` 时，素材是静态的；当为 `false` 时，素材具有时间成分。静态素材的示例包括 JPEG 文件、纯色和持续时间为 0 的占位符。非静态素材的示例包括视频文件、音频文件、序列和非零持续时间的占位符。

#### 类型

布尔值；只读。

---

### FootageSource.loop

`app.project.item(index).mainSource.loop`

`app.project.item(index).proxySource.loop`

#### 描述

素材在合成中连续播放的次数。如果 `isStill` 为 `true`，则设置此属性会报错。

#### 类型

整数，范围为 `[1..9999]`；默认值为 1；可读/可写。

---

### FootageSource.nativeFrameRate

`app.project.item(index).mainSource.nativeFrameRate`

`app.project.item(index).proxySource.nativeFrameRate`

#### 描述

素材的原始帧率。

#### 类型

浮点值；只读。

---

### FootageSource.premulColor

`app.project.item(index).mainSource.premulColor`

`app.project.item(index).proxySource.premulColor`

#### 描述

要预乘的颜色。仅当 `alphaMode` 为 `alphaMode.PREMULTIPLIED` 时此属性有效。

#### 类型

包含三个浮点值的数组 `[R, G, B]`，范围为 `[0.0..1.0]`；可读/可写。

---

### FootageSource.removePulldown

`app.project.item(index).mainSource.removePulldown`

`app.project.item(index).proxySource.removePulldown`

#### 描述

在使用场分离时如何移除下拉。如果 `isStill` 为 `true`，则设置此属性会报错。如果 `fieldSeparationType` 为 `FieldSeparationType.OFF`，则尝试将此值设置为 `PulldownPhase.OFF` 以外的值会报错。

#### 类型

`PulldownPhase` 枚举值；可读/可写。可选值为：

- `PulldownPhase.RemovePulldown.OFF`
- `PulldownPhase.RemovePulldown.WSSWW`
- `PulldownPhase.RemovePulldown.SSWWW`
- `PulldownPhase.RemovePulldown.SWWWS`
- `PulldownPhase.RemovePulldown.WWWSS`
- `PulldownPhase.RemovePulldown.WWSSW`
- `PulldownPhase.RemovePulldown.WSSWW_24P_ADVANCE`
- `PulldownPhase.RemovePulldown.SSWWW_24P_ADVANCE`
- `PulldownPhase.RemovePulldown.SWWWS_24P_ADVANCE`
- `PulldownPhase.RemovePulldown.WWWSS_24P_ADVANCE`
- `PulldownPhase.RemovePulldown.WWSSW_24P_ADVANCE`

---

## 函数

### FootageSource.guessAlphaMode()

`app.project.item(index).mainSource.guessAlphaMode()`

`app.project.item(index).proxySource.guessAlphaMode()`

#### 描述

将 `alphaMode`、`premulColor` 和 `invertAlpha` 设置为对此素材源的最佳估计。如果 `hasAlpha` 为 `false`，则不进行任何更改。

#### 参数

无。

#### 返回

无。

---

### FootageSource.guessPulldown()

`app.project.item(index).mainSource.guessPulldown(method)`

`app.project.item(index).proxySource.guessPulldown(method)`

#### 描述

将 `fieldSeparationType` 和 [removePulldown](#footagesourceremovepulldown) 设置为对此素材源的最佳估计。如果 `isStill` 为 `true`，则不进行任何更改。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `method` | `PulldownMethod` 枚举值。 | 用于估计的方法。可选值为： |
| | | - `PulldownMethod.PULLDOWN_3_2` |
| | | - `PulldownMethod.ADVANCE_24P` |

#### 返回

无。
