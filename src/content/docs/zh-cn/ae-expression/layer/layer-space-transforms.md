---
title: 空间转换
---

# 图层空间变换

`thisLayer`

使用图层空间变换方法将值从一个空间转换到另一个空间，例如从图层空间转换到世界空间。

对于 2D 图层，合成（comp）空间和世界空间是相同的。然而，对于 3D 图层，合成空间是相对于活动摄像机的，而世界空间则独立于摄像机。

:::info
在本页中，我们将使用 `thisLayer` 作为调用这些项的示例，但请注意，任何返回 [Layer](.././layer) 的方法都可以使用。
:::

#### "From" 和 "To" 方法

`from` 方法将值从指定空间（合成或世界）转换到图层空间。

`to` 方法将值从图层空间转换到指定空间（合成或世界）。每个变换方法都接受一个可选参数来确定计算变换的时间；然而，你几乎总是可以使用当前（默认）时间。

#### "Vec" 方法

当变换方向矢量时（例如两个位置值之间的差异），使用 `Vec` 变换方法。

当变换一个点时（例如位置），使用普通的（非 `Vec`）变换方法。

---

## 函数

### toComp()

`thisLayer.toComp(point[, t=time])`

#### 描述

将点从图层空间转换到合成空间。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `point` | 数组（2 维或 3 维） | 要转换的点 |
| `t` | 数字 | 可选。采样点的时间。默认为 `time`。 |

#### 类型

数组（2 维或 3 维）

---

### fromComp()

`thisLayer.fromComp(point[, t=time])`

#### 描述

将点从合成空间转换到图层空间。在 3D 图层中，结果点即使在图层空间中也可能具有非零值。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `point` | 数组（2 维或 3 维） | 要转换的点 |
| `t` | 数字 | 可选。采样点的时间。默认为 `time`。 |

#### 类型

数组（2 维或 3 维）

#### 示例

 ```js
fromComp(thisComp.layer(2).position)
```

---

### toWorld()

`thisLayer.toWorld(point[, t=time])`

#### 描述

将点从图层空间转换到与视图无关的世界空间。

:::tip
Dan Ebberts 在他的 [MotionScript 网站](http://www.motionscript.com/design-guide/auto-orient-y-only.html) 上提供了一个使用 `toWorld` 方法仅沿一个轴自动定向图层的表达式。这在例如让角色左右转动以跟随摄像机的同时保持直立时非常有用。
:::

:::tip
Rich Young 在他的 [AE Portal 网站](http://aeportal.blogspot.com/2010/02/fly-around-cc-sphered-layer-in-after.html) 上提供了一组使用 `toWorld` 方法将摄像机和灯光链接到应用了 CC Sphere 效果的图层的表达式。
:::

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `point` | 数组（2 维或 3 维） | 要转换的点 |
| `t` | 数字 | 可选。采样点的时间。默认为 `time`。 |

#### 类型

数组（2 维或 3 维）

#### 示例

 ```js
toWorld.effect("Bulge")("Bulge Center")
```

---

### fromWorld()

`thisLayer.fromWorld(point[, t=time])`

#### 描述

将点从世界空间转换到图层空间。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `point` | 数组（2 维或 3 维） | 要转换的点 |
| `t` | 数字 | 可选。采样点的时间。默认为 `time`。 |

#### 类型

数组（2 维或 3 维）

#### 示例

 ```js
fromWorld(thisComp.layer(2).position)
```

---

### toCompVec()

`thisLayer.toCompVec(vec[, t=time])`

#### 描述

将矢量从图层空间转换到合成空间。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `vec` | 数组（2 维或 3 维） | |
| `t` | 数字 | |

#### 类型

数组（2 维或 3 维）

#### 示例

 ```js
toCompVec([1, 0])
```

---

### fromCompVec()

`thisLayer.fromCompVec(vec[, t=time])`

#### 描述

将矢量从合成空间转换到图层空间。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `vec` | 数组（2 维或 3 维） | |
| `t` | 数字 | |

#### 类型

数组（2 维或 3 维）

#### 示例

对于 2D 图层：

 ```js
const dir = sub(position, thisComp.layer(2).position);
fromCompVec(dir)
```

---

### toWorldVec()

`thisLayer.toWorldVec(vec[, t=time])`

#### 描述

将矢量从图层空间转换到世界空间。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `vec` | 数组（2 维或 3 维） | |
| `t` | 数字 | |

#### 类型

数组（2 维或 3 维）

#### 示例

将两个不同的 "Bulge Center" 属性从应用效果的图层的*图层空间*转换到图层所在合成的 *世界空间* ：

 ```js
const p1 = effect("Eye Bulge 1")("Bulge Center");
const p2 = effect("Eye Bulge 2")("Bulge Center");

toWorld(sub(p1, p2))
```

---

### fromWorldVec()

`thisLayer.fromWorldVec(vec[, t=time])`

#### 描述

将矢量从世界空间转换到图层空间。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `vec` | 数组（2 维或 3 维） | |
| `t` | 数字 | |

#### 类型

数组（2 维或 3 维）

#### 示例

将图层 #2 的位置从世界空间转换到*此图层*的空间：

 ```js
fromWorld(thisComp.layer(2).position)
```

---

### fromCompToSurface()

`thisLayer.fromCompToSurface(point[, t=time])`

#### 描述

将位于合成空间中的点投影到图层表面（零 z 值）上的点，该点是当从活动摄像机查看时出现的位置。此方法对于设置效果控制点非常有用。

:::note 仅用于 3D 图层。 :::#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `point` | 数组（2 维或 3 维） | 要转换的点 |
| `t` | 数字 | 可选。采样点的时间。默认为 `time`。 |

#### 类型

数组（2 维）
