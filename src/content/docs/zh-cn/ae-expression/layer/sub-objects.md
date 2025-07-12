---
title: 子对象
---
# Layer Sub-objects

`thisLayer`

此类别描述了基于当前图层提供的 *其他对象* ；例如源（用于预合成或素材）、效果、蒙版、sourceRect 等。

:::info
在本页中，我们将使用 `thisLayer` 作为调用这些项的示例，但请注意，任何返回 [Layer](.././layer) 的方法都可以使用。 ::::::note 对于 After Effects CC 和 CS6，表达式语言菜单中的“图层子对象”、“图层通用信息”、“图层属性”、“图层 3D”和“图层空间变换”已被组织到“图层”子菜单中。
:::

---

## 属性

### Layer.source

`thisLayer.source`

#### 描述

返回图层的源 [Comp](../objects/comp) 或 [Footage](../objects/footage) 对象。

默认时间会调整为源中的时间。

示例：

 ```js
source.layer(1).position
```

#### 类型

[Comp](../objects/comp) 或 [Footage](../objects/footage)

---

## 函数

### Layer.effect()

`thisLayer.effect(name)`

`thisLayer.effect(index)`

#### 描述

`name` 值将让 After Effects 根据效果名称在效果控制面板中查找效果。名称可以是默认名称或用户定义的名称。如果多个效果具有相同的名称，则使用效果控制面板中最顶部的效果。

`index` 值将让 After Effects 根据效果在效果控制面板中的索引查找效果，从 `1` 开始并从顶部计数。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取的效果名称或索引。 |
| `index` | 数字 | |

#### 返回

[Effect](../objects/effect)

#### 示例

按名称获取“模糊度”效果：

 ```js
thisLayer.effect("Fast Blur")
```

获取图层上的第一个效果：

 ```js
thisLayer.effect(1)
```

---

### Layer.mask()

`thisLayer.mask(name)`

`thisLayer.mask(index)`

#### 描述

`name` 值可以是默认名称或用户定义的名称。如果多个蒙版具有相同的名称，则使用第一个（最顶部）的蒙版。

`index` 值将让 After Effects 根据蒙版在时间轴面板中的索引查找蒙版，从 `1` 开始并从顶部计数。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取的蒙版名称或索引。 |
| `index` | 数字 | |

#### 返回

[Effect](../objects/effect)

#### 示例

按名称获取蒙版“Mask 1”：

 ```js
thisLayer.mask("Mask 1")
```

获取图层上的第一个蒙版：

 ```js
thisLayer.mask(1)
```

---

### Layer.sourceRectAtTime()

`thisLayer.sourceRectAtTime(t = time, includeExtents = false)`

:::note
段落文本范围在 After Effects 15.1 中添加。
:::

#### 描述

返回图层（或图层源）的边界框。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `t` | 数字 | 可选。应用平滑滤镜的指定时间（以合成秒为单位）。默认为 `time`（当前合成时间，以秒为单位）。 |
| `includeExtents` | 布尔值 | 可选。仅适用于形状图层和段落文本图层。默认为 `false`。 |
| | | - 对于形状图层：根据需要增加图层边界的大小。 |
| | | - 对于段落文本图层：返回段落框的边界 |

#### 返回

一个包含四个属性的对象：`{top, left, width, height}`

#### 示例

 ```js
myTextLayer.sourceRectAtTime().width
```

---

### Layer.sourceTime()

`thisLayer.sourceTime([t=time])`

:::note
该方法添加于 After Effects CS5.5
:::

#### 描述

返回与时间 `t` 对应的图层源。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `t` | 数字 | 可选。应用平滑滤镜的指定时间（以合成秒为单位）。默认为 `time`（当前合成时间，以秒为单位）。 |

#### 返回

数字
