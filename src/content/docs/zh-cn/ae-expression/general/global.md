---
title: 全局
---
# Global

这些属性和方法是全局的、顶层的元素，可以从项目中的任何表达式中访问。它们是最常用的表达式元素之一。

---

## 属性

### colorDepth

`colorDepth`

#### 描述

输入项目的颜色深度值。

例如，当项目颜色深度为每通道 16 位时，`colorDepth` 返回 `16`。

#### 类型

Number

---

### thisComp

`thisComp`

#### 描述

表示包含表达式的合成。

#### 类型

[Comp](../../objects/comp)

---

### thisLayer

`thisLayer`

#### 描述

表示包含表达式的图层。

由于 `thisLayer` 是默认对象，因此它的使用是可选的。

例如，你可以用 `thisLayer.width` 或 `width` 开始一个表达式，并得到相同的结果。

#### 类型

[Layer](../../layer/layer), [Light](../../objects/light), or [Camera](../../objects/camera) object

---

### thisProject

`thisProject`

#### 描述

表示包含表达式的项目。

#### 类型

[Project](../../objects/project)

---

### thisProperty

`thisProperty`

#### 描述

表示包含表达式的属性。

例如，如果你在旋转属性上编写表达式，可以用 `thisProperty` 开始表达式以引用旋转属性。

#### 类型

[Property](../../objects/property)

---

### time

`time`

#### 描述

表示表达式正在计算的合成时间（单位：秒）。

#### 类型

Number

---

### value

`value`

#### 描述

表示包含表达式的属性在当前时间的值。

#### 类型

与被引用属性相同类型的值。

---

## 函数

### comp()

`comp(name)`

#### 描述

按名称获取另一个合成。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | String | 合成名称 |

#### 返回

[Comp](../../objects/comp)

---

### footage()

`footage(name)`

#### 描述

通过名称检索 footage 项。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | String | 要获取的 footage 项的名称 |

#### 返回

[Footage](../../objects/footage)

---

### posterizeTime()

`posterizeTime(updatesPerSecond)`

#### 描述

此表达式允许您将属性的帧率设置为低于合成的帧率。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `updatesPerSecond` | Number | 表达式每秒应计算的*次数* |

#### 返回

Number

#### 示例

要将属性每秒更改为随机值一次：

```js
posterizeTime(1);

random()
```

要将二维属性（如位置或缩放）每秒随机更改 3 次，可以使用以下表达式：

```js
posterizeTime(3);

const newValue = random(0, 100);
[newValue, newValue];
```

要使属性在指定范围内每 12 帧随机更改一次，可以使用以下表达式：

```js
const holdFrames = 12;
const minValue = 50;
const maxValue = 100;

posterizeTime(1 / framesToTime(holdFrames));

const newValue = random(minValue, maxValue);
newValue;
```
