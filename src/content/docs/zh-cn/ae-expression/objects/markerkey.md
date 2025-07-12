---
title: 标记键
---
# MarkerKey

`thisComp.marker.key(1)`

你可以使用相同的方法访问合成标记和图层标记的值。通过 `thisLayer.marker` 对象访问图层标记；通过 [标记属性](../marker-property) 对象访问合成标记。

对于表达式的目的，标记是一种特殊的 [关键帧](../key) 对象，因此你可以使用诸如 [`nearestKey(time)`](../property#nearestkey) 等方法来访问标记，并且标记也具有 `time` 和 `index` 属性。`index` 属性不是标记的编号（名称）；它是关键帧的*索引*编号，表示标记在时间标尺中的顺序。

表达式可以访问你在合成标记或图层标记对话框中设置的所有标记值。

由于素材项中的 XMP 元数据可以转换为基于该项目的图层的图层标记，因此表达式可以与 XMP 元数据进行交互。有关信息，请参阅 [After Effects 中的 XMP 元数据](https://helpx.adobe.com/after-effects/using/xmp-metadata.html#xmp_metadata_in_after_effects)。

Dan Ebberts 在 [After Effects 开发者中心](http://www.adobe.com/devnet/aftereffects/) 上提供了一个教程，其中包括使用 XMP 元数据与表达式的示例。

:::info
在本页中，我们将使用 `thisComp.marker.key(1)` 作为调用这些项的示例，但请注意，任何返回 [标记键](#) 的方法都可以使用。
:::

---

## 属性

### MarkerKey.chapter

`thisComp.marker.key(1).chapter`

#### 描述

标记对话框中章节字段的内容。

#### 类型

字符串

---

### MarkerKey.comment

`thisComp.marker.key(1).comment`

#### 描述

标记对话框中注释字段的内容。

#### 类型

字符串

---

### MarkerKey.cuePointName

`thisComp.marker.key(1).cuePointName`

#### 描述

标记对话框中提示点名称字段的内容。

#### 类型

字符串

---

### MarkerKey.duration

`thisComp.marker.key(1).duration`

#### 描述

标记的持续时间，单位为秒。

#### 类型

数字

---

### MarkerKey.eventCuePoint

`thisComp.marker.key(1).eventCuePoint`

#### 描述

标记对话框中提示点类型的设置。

`true` 表示事件；`false` 表示导航。

#### 类型

布尔值

---

### MarkerKey.frameTarget

`thisComp.marker.key(1).frameTarget`

#### 描述

标记对话框中帧目标字段的内容。

#### 类型

字符串

---

### MarkerKey.parameters

`thisComp.marker.key(1).parameters`

#### 描述

标记对话框中参数名称和参数值字段的内容。

#### 类型

字符串值的关联数组

#### 示例

如果你有一个名为 "background color" 的参数，则可以使用以下表达式访问最近标记处的值：

```js
thisComp.marker.nearestKey(time).parameters["background color"];
```

---

### MarkerKey.protectedRegion

`thisComp.marker.key(1).protectedRegion`

:::note 该方法添加于 After Effects 16.0 :::#### 描述

合成标记对话框中受保护区域选项的状态。

当为 `true` 时，合成标记表现为受保护区域。

对于嵌套合成图层上的受保护区域标记也会返回 `true`，但通常不适用于图层标记。

#### 类型

布尔值

---

### MarkerKey.url

`thisComp.marker.key(1).url`

#### 描述

标记对话框中 URL 字段的内容。

#### 类型

字符串

---

## 示例

此表达式应用于文本图层的源文本属性，显示最接近当前时间的图层标记的时间、持续时间、索引、注释（名称）、章节、URL、帧目标和提示点名称，以及标记是否为事件提示点：

```js
const m = thisLayer.marker.nearestKey(time);
const s = [
 "time:" + timeToCurrentFormat(m.time),
 "duration: " + m.duration,
 "key index: " + m.index,
 "comment:" + m.comment,
 "chapter:" + m.chapter,
 "URL:" + m.url,
 "frame target: " + m.frameTarget,
 "cue point name: " + m.cuePointName,
 "Event cue point? " + m.eventCuePoint,
 ""
];

for (let param in m.parameters){
 s.push("parameter: " + param + " value: " + m.parameters[param]);
}

s.join("\n");
```
