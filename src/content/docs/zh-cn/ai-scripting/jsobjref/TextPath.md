---
title: TextPath
---
# TextPath

`textPath`

#### 描述

用于区域或路径文本的路径或路径列表。路径由定义其几何形状的路径点组成。

---

## 属性

### TextPath.area

`textPath.area`

#### 描述

路径的面积，单位为平方点。如果面积为负，则路径是逆时针方向的。

自相交路径可能包含相互抵消的子区域，这使得即使路径有明显的面积，此值也可能为零。

#### 类型

数字（双精度）；只读。

---

### TextPath.blendingMode

`textPath.blendingMode`

#### 描述

合成对象时使用的混合模式。

#### 类型

[BlendModes](../scripting-constants#blendmodes)

---

### TextPath.clipping

`textPath.clipping`

#### 描述

如果为 true，则此路径应作为剪贴路径使用。

#### 类型

布尔值

---

### TextPath.closed

`textPath.closed`

#### 描述

如果为 true，则此路径是闭合的。

#### 类型

布尔值

---

### TextPath.editable

`textPath.editable`

#### 描述

只读。如果为 true，则此项目可编辑。

#### 类型

布尔值

---

### TextPath.evenodd

`textPath.evenodd`

#### 描述

如果为 true，则应使用奇偶规则来确定内部。

#### 类型

布尔值

---

### TextPath.fillColor

`textPath.fillColor`

#### 描述

路径的填充颜色。

#### 类型

[Color](.././Color)

---

### TextPath.filled

`textPath.filled`

#### 描述

如果为 true，则路径应被填充。

#### 类型

布尔值

---

### TextPath.fillOverprint

`textPath.fillOverprint`

#### 描述

如果为 true，则填充对象下方的艺术内容应被叠印。

#### 类型

布尔值

---

### TextPath.guides

`textPath.guides`

#### 描述

如果为 true，则此路径是参考线对象。

#### 类型

布尔值

---

### TextPath.height

`textPath.height`

#### 描述

组项目的高度。

#### 类型

数字（双精度）

---

### TextPath.left

`textPath.left`

#### 描述

项目左侧的位置（以点为单位，从页面左侧测量）。

#### 类型

数字（双精度）

---

### TextPath.note

`textPath.note`

#### 描述

分配给路径的注释文本。

#### 类型

字符串

---

### TextPath.opacity

`textPath.opacity`

#### 描述

对象的不透明度。

范围：0.0 到 100.0

#### 类型

数字（双精度）

---

### TextPath.parent

`textPath.parent`

#### 描述

只读。此对象的父对象。

#### 类型

[Layer](.././Layer) 或 [GroupItem](.././GroupItem)

---

### TextPath.pathPoints

`textPath.pathPoints`

#### 描述

只读。此路径项中包含的路径点。

#### 类型

[PathPoints](.././PathPoints)

---

### TextPath.polarity

`textPath.polarity`

#### 描述

路径的极性。

#### 类型

[PolarityValues](../scripting-constants#polarityvalues)

---

### TextPath.position

`textPath.position`

#### 描述

textPathItem 对象左上角的位置（以点为单位），格式为 [x, y]。不包括描边宽度。

#### 类型

包含 2 个数字的数组

---

### TextPath.resolution

`textPath.resolution`

#### 描述

路径的分辨率，单位为每英寸点数（dpi）。

#### 类型

数字（双精度）

---

### TextPath.selectedPathPoints

`textPath.selectedPathPoints`

#### 描述

只读。路径中所有选中的路径点。

#### 类型

[PathPoints](.././PathPoints)

---

### TextPath.strokeCap

`textPath.strokeCap`

#### 描述

线条端点的类型。

#### 类型

[StrokeCap](../scripting-constants#strokecap)

---

### TextPath.strokeColor

`textPath.strokeColor`

#### 描述

路径的描边颜色。

#### 类型

[Color](.././Color)

---

### TextPath.stroked

`textPath.stroked`

#### 描述

如果为 true，则路径应被描边。

#### 类型

布尔值

---

### TextPath.strokeDashes

`textPath.strokeDashes`

#### 描述

虚线长度。设置为空对象 `{}` 表示实线。

#### 类型

对象

---

### TextPath.strokeDashOffset

`textPath.strokeDashOffset`

#### 描述

虚线图案中默认的起始距离。

#### 类型

数字（双精度）

---

### TextPath.strokeJoin

`textPath.strokeJoin`

#### 描述

路径的连接类型。

#### 类型

[StrokeJoin](../scripting-constants#strokejoin)

---

### TextPath.strokeMiterLimit

`textPath.strokeMiterLimit`

#### 描述

当默认描边连接设置为斜接时，此属性指定何时将连接转换为斜角（方形）。默认的斜接限制为 4，表示当点的长度达到描边宽度的四倍时，连接将从斜接连接转换为斜角连接。值为 1 表示斜角连接。

范围：1 到 500。

默认值：4

#### 类型

数字（双精度）

---

### TextPath.strokeOverprint

`textPath.strokeOverprint`

#### 描述

如果为 true，则描边对象下方的艺术内容应被叠印。

#### 类型

布尔值

---

### TextPath.strokeWidth

`textPath.strokeWidth`

#### 描述

描边的宽度。

#### 类型

数字（双精度）

---

### TextPath.top

`textPath.top`

#### 描述

项目顶部的位置（以点为单位，从页面底部测量）。

#### 类型

数字（双精度）

---

### TextPath.typename

`textPath.typename`

#### 描述

只读。引用对象的类名。

#### 类型

字符串

---

### TextPath.width

`textPath.width`

#### 描述

项目的宽度。

#### 类型

数字（双精度）

---

## 方法

### TextPath.setEntirePath()

`textPath.setEntirePath(pathPoints)`

#### 描述

使用指定的 [x, y] 坐标对数组设置路径。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `pathPoints` | 包含 [x, y] 坐标对的数组 | 用于设置路径的路径点 |

#### 返回值

无。
