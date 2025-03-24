---
title: 文字图层
---
# TextLayer 对象

`app.project.item(index).layer(index)`

#### 描述

TextLayer 对象表示合成中的文本图层。使用 [LayerCollection 对象的 addText 方法](../layercollection#layercollectionaddtext) 创建它。可以通过索引号或名称字符串在项目的图层集合中访问它。

:::info
TextLayer 是 [AVLayer](../avlayer) 的子类，而 AVLayer 又是 [Layer](../layer) 的子类。在使用 TextLayer 时，AVLayer 和 Layer 的所有方法和属性都可用。
:::

#### AE 属性

TextLayer 没有定义额外的属性，但除了从 AVLayer 继承的属性外，还具有以下 AE 属性和属性组：

- `Text`
- `SourceText`
- `PathOptions`
- `Path`
- `ReversePath`
- `PerpendicularToPath`
- `ForceAlignment`
- `FirstMargin`
- `LastMargin`
- `MoreOptions`
- `AnchorPointGrouping`
- `GroupingAlignment`
- `Fill&Stroke`
- `InterCharacterBlending`
- `Animators`

#### 未使用的属性和属性

从 AVLayer 继承的 `TimeRemapandMotionTrackers` 属性不适用于文本图层，其相关的 AVLayer 属性也未使用：

- `canSetTimeRemapEnabled`
- `timeRemapEnabled`
- `trackMatteType`
- `isTrackMatte`
- `hasTrackMatte`
