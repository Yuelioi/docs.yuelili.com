---
title: 关键帧
---
# Key

`thisProperty.key(1)`

当你访问一个关键帧对象时，你可以从中获取 `time`、`index` 和 `value` 属性。

:::tip
在表达式中，“Key”指的是关键帧。 :::

:::info
在本页中，我们将使用 `thisProperty.key(1)` 作为调用这些项的示例，但请注意，任何返回 [关键帧](#) 的方法都可以使用。
:::

---

## 属性

### Key.index

`thisProperty.key(1).index`

#### 描述

返回关键帧的索引。

#### 类型

数字

---

### Key.time

`thisProperty.key(1).time`

#### 描述

返回关键帧的时间。

#### 类型

数字

---

### Key.value

`thisProperty.key(1).value`

#### 描述

返回关键帧的值。

#### 类型

与引用属性类型相同的值。

---

## 示例

以下表达式在应用于具有关键帧的不透明度属性时，忽略关键帧的值，仅使用关键帧在时间上的位置来确定闪光发生的位置：

```js
const d = Math.abs(time - nearestKey(time).time);
easeOut(d, 0, .1, 100, 0)
```

以下表达式返回第三个位置关键帧的值：

```js
position.key(3).value;
```
