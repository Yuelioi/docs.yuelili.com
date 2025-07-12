---
title: 标记属性
---
# Marker Property

`thisComp.marker`

`comp("CompName").marker`

`layer("precompName").source.marker`

`thisLayer.marker`

标记属性是 [属性](../property) 对象的特殊版本，*专门* 用于合成和图层标记。

它包含标准属性对象的一些相同属性和方法的特殊版本，但大多数元素在此不适用。

:::info
在本页中，我们将使用 `thisComp.marker` 作为调用这些项的示例，但请注意，任何返回 [标记属性](#) 的方法都可以使用。
:::

---

## 属性

### Marker.numKeys

`thisComp.marker.numKeys`

#### 描述

返回此合成或图层中的标记总数。

#### 类型

数字

---

## 函数

### Marker.key(index)

`thisComp.marker.key(index)`

`thisComp.marker.key(name)`

#### 描述

返回具有指定 `index` 或 `name` 的 [MarkerKey](../markerkey) 对象。

`index` 指的是标记在合成时间中的顺序，而不是标记的编号名称。

`name` 值是标记的名称，如在标记对话框的注释字段中键入的名称。例如，`marker.key("1")`。

如果有多个标记具有相同的名称，此方法返回在时间上最先出现的标记（根据是合成标记还是图层标记，分别使用合成时间或图层时间）。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `index` | 数字 | 要获取的标记索引 |
| `name` | 字符串 | 通过标记名称或索引访问标记。 |
| `index` | 数字 | |

#### 类型

[MarkerKey](../markerkey)

#### 示例

返回第一个合成标记的时间：

```js
thisComp.marker.key(1).time;
```

返回名称为 "0" 的图层标记的时间：

```js
thisLayer.marker.key("0").time;
```

在图层上，根据名称标识的两个标记之间的时间，将属性值从 `0` 渐变到 `100`：

```js
const m1 = thisLayr.marker.key("Start").time;
const m2 = thisLayr.marker.key("End").time;
linear(time, m1, m2, 0, 100);
```

---

### Marker.nearestKey()

`thisComp.marker.nearestKey(t)`

#### 描述

返回在合成或图层时间中最接近提供的时间 `t` 的标记。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `t` | 数字 | 查找最接近标记的时间 |

#### 返回

[MarkerKey](../markerkey)

#### 示例

返回最接近 1 秒时间的合成标记的时间：

```js
thisComp.marker.nearestKey(1).time;
```

此表达式返回最接近当前合成时间的图层标记的时间：

```js
thisLayer.marker.nearestKey(time).time;
```
