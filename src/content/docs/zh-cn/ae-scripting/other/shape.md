---
title: 形状
---
# Shape 对象

`app.project.item(index).layer(index).property(index).property("maskShape").value`

#### 描述

Shape 对象封装了描述形状图层中的形状或遮罩轮廓形状的信息。它是 "Mask Path" AE 属性的值，也是形状图层的 "Path" AE 属性的值。使用构造函数 `new Shape()` 创建一个新的、空的 Shape 对象，然后单独设置属性以定义形状。

一个形状有一组锚点（或顶点），以及每个锚点的一对方向手柄（或切线向量）。在非 RotoBezier 遮罩中，切线向量决定了绘制到或从锚点绘制的线条的方向。每个顶点都有一个传入切线向量和一个传出切线向量。

切线值是一对相对于关联顶点的 x,y 坐标。例如，切线值 [-1,-1] 位于顶点的左上方，斜率为 45 度，无论顶点的实际位置如何。手柄越长，其影响力越大；例如，传入形状段会更接近 `inTangent` 为 [-2,-2] 的向量，而不是 `inTangent` 为 [-1,-1] 的向量，即使两者都从同一方向朝向顶点。

如果形状未闭合，则第一个顶点的 `inTangent` 和最后一个顶点的 `outTangent` 将被忽略。如果形状闭合，这两个向量指定从最后一个顶点返回到第一个顶点的最终连接段的切线手柄。

RotoBezier 遮罩会自动计算其切线。（参见 [MaskPropertyGroup.rotoBezier](../../property/maskpropertygroup#maskpropertygrouprotobezier)）如果形状用于 RotoBezier 遮罩，则切线值将被忽略。这意味着，对于 RotoBezier 遮罩，您可以通过仅设置 `vertices` 属性并将 `inTangents` 和 `outTangents` 设置为 `null` 来构造形状。当您访问新形状时，其切线值将填充为自动计算的切线值。

对于闭合的遮罩形状，可变宽度的遮罩羽化点可以存在于遮罩路径的任何位置。羽化点是遮罩路径属性的一部分。通过遮罩路径段（相邻顶点之间的路径部分）的编号引用特定的羽化点。

:::tip
遮罩上的羽化点按创建顺序列在数组中。
:::

#### 示例

- 创建一个方形遮罩。方形是一个具有 4 个顶点的闭合形状。连接的直线段的 `inTangents` 和 `outTangents` 为 0（默认值），不需要显式设置。

 ```javascript
 var myShape = new Shape();
 myShape.vertices = [[0,0], [0,100], [100,100], [100,0]];
 myShape.closed = true;
 ```

- 创建一个 "U" 形遮罩。"U" 是一个具有与方形相同的 4 个顶点的开放形状。

 ```javascript
 var myShape = new Shape();
 myShape.vertices = [[0,0], [0,100], [100,100], [100,0]];
 myShape.closed = false;
 ```

- 创建一个椭圆形。椭圆形是一个具有 4 个顶点和 `inTangent` 和 `outTangent` 值的闭合形状。

 ```javascript
 var myShape = new Shape();
 myShape.vertices = [[300,50], [200,150],[300,250],[400,150]];
 myShape.inTangents = [[55.23,0],[0,-55.23],[-55.23,0],[0,55.23]];
 myShape.outTangents = [[-55.23,0],[0,55.23],[55.23,0],[0,-55.23]];
 myShape.closed = true;
 ```

- 创建一个带有两个羽化点的方形遮罩。一个大的方形遮罩，带有两个羽化点，一个靠近第二个遮罩段（底部边缘）的左端，半径为 30 像素，另一个位于第三个遮罩段（右侧边缘）的中心，半径为 100 像素。

 ```javascript
 var myShape = new Shape();
 myShape.vertices = [[100,100], [100,400], [400,400], [400,100]]; // 段按逆时针方向绘制
 myShape.closed = true;
 myShape.featherSegLocs = [1, 2]; // 段从 0 开始编号，因此第二段为 1
 myShape.featherRelSegLocs = [0.15, 0.5]; // 0.15 更接近方形的左下角
 myShape.featherRadii = [30, 100]; // 第二个羽化点（在右侧段上）具有更大的半径
 ```

---

## 属性

### Shape.closed

`shapeObject.value.closed`

#### 描述

当为 `true` 时，第一个和最后一个顶点连接以形成闭合曲线。当为 `false` 时，不绘制闭合段。

#### 类型

布尔值；可读写。

---

### Shape.featherInterps

`shapeObject.value.featherInterps`

#### 描述

包含每个羽化点的半径插值类型的数组（0 表示非 Hold 羽化点，1 表示 Hold 羽化点）。

:::tip
值按羽化点的创建顺序存储在数组中。
:::

#### 类型

整数数组（0 或 1）；可读写。

---

### Shape.featherRadii

`shapeObject.value.featherRadii`

#### 描述

包含每个羽化点的半径（羽化量）的数组；内部羽化点具有负值。

:::tip
值按羽化点的创建顺序存储在数组中。
:::

#### 类型

浮点值数组；可读写。

---

### Shape.featherRelCornerAngles

`shapeObject.value.featherRelCornerAngles`

#### 描述

包含每个羽化点的相对角度百分比的数组，该角度是遮罩路径上拐角处曲线外部羽化边界两侧法线之间的百分比。对于不在拐角处的羽化点，角度值为 0%。

:::tip
值按羽化点的创建顺序存储在数组中。
:::

#### 类型

浮点百分比值数组（0 到 100）；可读写。

---

### Shape.featherRelSegLocs

`shapeObject.value.featherRelSegLocs`

#### 描述

包含每个羽化点在其遮罩路径段（顶点之间的遮罩路径部分，从 0 开始编号）上的相对位置（从 0 到 1）的数组。

:::tip
值按羽化点的创建顺序存储在数组中。要将羽化点移动到不同的遮罩路径段，请先更改 [featherSegLocs](#shapefeatherseglocs) 属性值，然后再更改此属性。
:::

#### 类型

浮点值数组（0 到 1）；可读写。

---

### Shape.featherSegLocs

`shapeObject.value.featherSegLocs`

#### 描述

包含每个羽化点的遮罩路径段编号（顶点之间的遮罩路径部分，从 0 开始编号）的数组。

:::tip
值按羽化点的创建顺序存储在数组中。通过更改其段编号（此属性）和（可选）其 [featherRelSegLocs](#shapefeatherrelseglocs) 属性值，将羽化点移动到不同的段。
:::

#### 类型

整数数组；可读写。

#### 示例

```javascript
// 假设一个矩形闭合遮罩（段编号为 0-3）有 3 个遮罩羽化点，
// 将所有 3 个羽化点移动到第一个遮罩段。

// 获取遮罩的 Shape 对象，假设此处为图层上的第一个遮罩。
var my_maskShape = layer.mask(1).property("ADBE Mask Shape").value;

// 检查遮罩羽化点的位置。
// 注意：它们按添加顺序存储。
var where_are_myMaskFeatherPoints = my_maskShape.featherSegLocs;

// 将所有 3 个羽化点移动到第一个遮罩段（编号为 0）。
my_maskShape.featherSegLocs = [0, 0, 0];

// 更新遮罩路径。
layer.mask(1).property("ADBE Mask Shape").setValue(my_maskShape);
```

---

### Shape.featherTensions

`shapeObject.value.featherTensions`

#### 描述

包含每个羽化点的张力量的数组，从 0（0% 张力）到 1（100% 张力）。

:::tip
值按羽化点的创建顺序存储在数组中。
:::

#### 类型

浮点值数组（0 到 1）；可读写。

---

### Shape.featherTypes

`shapeObject.value.featherTypes`

#### 描述

包含每个羽化点方向的数组，0（外部羽化点）或 1（内部羽化点）。

:::tip
值按羽化点的创建顺序存储在数组中。
:::

#### 类型

整数数组（0 或 1）；可读写。

---

### Shape.inTangents

`shapeObject.value.inTangents`

#### 描述

与形状顶点关联的传入切线向量或方向手柄。将每个向量指定为两个浮点值的数组，并将这些向量收集到与 `vertices` 数组长度相同的数组中。

每个切线值默认为 [0,0]。当遮罩形状不是 RotoBezier 时，这将导致直线段。

如果形状位于 RotoBezier 遮罩中，则所有切线值都将被忽略，并且切线会自动计算。

#### 类型

浮点对数组的数组；可读写。

---

### Shape.outTangents

`shapeObject.value.outTangents`

#### 描述

与形状顶点关联的传出切线向量或方向手柄。将每个向量指定为两个浮点值的数组，并将这些向量收集到与 `vertices` 数组长度相同的数组中。

每个切线值默认为 [0,0]。当遮罩形状不是 RotoBezier 时，这将导致直线段。

如果形状位于 RotoBezier 遮罩中，则所有切线值都将被忽略，并且切线会自动计算。

#### 类型

浮点对数组的数组；可读写。

---

### Shape.vertices

`shapeObject.value.vertices`

#### 描述

形状的锚点。将每个点指定为两个浮点值的数组，并将这些点对收集到完整点集的数组中。

#### 示例

```javascript
myShape.vertices = [[0,0], [0,1], [1,1], [1,0]];
```

#### 类型

浮点对数组的数组；可读写。
