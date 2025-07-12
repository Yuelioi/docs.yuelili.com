---
title: 属性组
---
# PropertyGroup

`thisLayer("ADBE Effect Parade")`

时间轴中的所有属性都组织成组，这些组共享一些属性的属性，如 `name` 和 `propertyIndex`。

属性组可以具有固定数量的属性（例如，属性不会更改的单个效果）或可变数量的属性（例如，“效果”组本身可以包含任意数量的效果）。

#### 图层中的顶级组

* 运动跟踪器
* 文本
* 内容
* 蒙版
* 效果
* 变换
* 图层样式
* 几何选项
* 材质选项
* 音频
* 数据
* 基本属性

#### 嵌套组

* 单个效果
* 单个蒙版
* 形状组
* 文本动画器

:::info 在本页中，我们将使用 `thisLayer("ADBE Effect Parade")`（“效果”组）作为调用这些项的示例，但请注意，任何返回 [属性组](#) 的方法都可以使用。 :::---

## 属性

### PropertyGroup.name

`thisLayer("ADBE Effect Parade").name`

#### 描述

返回属性组的名称。

#### 类型

字符串

---

### PropertyGroup.numProperties

`thisLayer("ADBE Effect Parade").numProperties`

#### 描述

返回组中直接包含的属性或组的数量。

:::note 这不包括嵌套在子组中的属性。 :::#### 类型

数字

#### 示例

查找应用于图层的效果数量：

```js
thisLayer("ADBE Effect Parade").numProperties
```

---

### PropertyGroup.propertyIndex

`thisLayer("ADBE Effect Parade").propertyIndex`

#### 描述

返回属性组相对于其属性组中其他属性或组的索引。

#### 类型

数字

---

## 函数

### PropertyGroup.propertyGroup()

`propertyGroup([countUp=1])`

#### 描述

返回相对于调用该方法的属性组的更高级别的属性组。

有关更多详细信息，请参阅 [`propertyGroup()`](https://property.md/#propertygroup)。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `countUp` | 数字 | 可选。要向上爬取的属性组数量。默认为 `1`。 |

#### 返回

[属性组对象]()
