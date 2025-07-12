---
title: 效果
---
# Effect

`thisLayer.effect("Bulge")`

此类别包含与效果相关的信息。

:::info
在本页中，我们将使用 `thisLayer.effect("Bulge")` 作为调用这些项的示例，但请注意，任何返回 [Effect](#) 的方法都可以使用。
:::

---

## 属性

### Effect.active

`thisLayer.effect("Bulge").active`

#### 描述

如果效果已打开（*效果开关*已选中），则返回 `true`。

#### 类型

布尔值

---

## 函数

### Effect.param()

`thisLayer.effect("Bulge").param(name)`

`thisLayer.effect("Bulge").param(index)`

#### 描述

返回效果中的属性。效果控制点始终位于图层空间中。

此方法可以使用属性的 `name` 或其 `index` 来调用。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 通过属性名称或索引访问属性。 |
| `index` | 数字 | |

#### 返回

[属性对象](../property)

#### 示例

通过名称返回 "Bulge" 效果中的 "Bulge Height" 属性：

```js
thisLayer.effect("Bulge").param("Bulge Height");
```

通过索引返回 "Bulge" 效果中的 "Bulge Height" 属性：

```js
thisLayer.effect("Bulge").param(4);
```
