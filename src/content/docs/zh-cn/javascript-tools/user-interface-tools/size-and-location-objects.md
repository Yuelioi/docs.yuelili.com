---
title: 尺寸和位置对象
---
# 尺寸和位置对象

ScriptUI 定义了用于表示窗口和用户界面元素位置和大小的复杂属性值的对象。这些对象不能直接创建，而是在设置相应属性时创建。该属性随后返回该对象。例如，`bounds` 属性返回一个 `Bounds` 对象。

你可以将这些属性设置为对象、字符串或数组。

- `e.prop = Object` - 对象必须包含为此类型定义的属性集，如下表所示。属性值为整数。
- `e.prop = String` - 字符串必须是一个可执行的 JavaScript 内联对象声明，符合相同的对象描述。
- `e.prop = Array` - 数组必须按照为此类型定义的顺序包含整数坐标值，如下表所示。例如：

以下示例展示了将 380 x 390 像素的窗口放置在屏幕左上角附近的等效方式：

```javascript
var dlg = new Window( "dialog", "Alert Box Builder ");
dlg.bounds = { x:100, y:100, width:380, height:390 }; // 对象
dlg.bounds = { left:100, top:100, right:480, bottom:490 }; // 对象
dlg.bounds = "x:100, y:100, width:380, height:390"; // 字符串
dlg.bounds = "left:100, top:100, right:480, bottom:490"; // 字符串
dlg.bounds = [100, 100, 480, 490]; // 数组
```

你可以将结果对象作为数组访问，数组中的值按照类型的定义顺序排列，或者作为对象访问，对象包含该类型支持的属性。

---

## 尺寸和位置对象类型

以下是属性值对象类型、创建和包含它们的元素属性，以及它们的数组和对象属性格式。

### Bounds

定义窗口在屏幕坐标空间中的边界，或用户界面元素在容器坐标空间中的边界。包含一个数组 `[left, top, right, bottom]`，用于定义元素左上角和右下角的坐标。

当你设置元素的 `bounds` 属性时，会创建一个 `Bounds` 对象，该属性返回一个 `Bounds` 对象。

- 对象必须包含名为 `left`、`top`、`right`、`bottom` 或 `x`、`y`、`width`、`height` 的属性。
- 数组必须按顺序包含值 `[left, top, right, bottom]`。

---

### Dimension

定义窗口或用户界面元素的大小。包含一个数组 `[width, height]`，用于定义元素的像素大小。

当你设置元素的 `size` 或 `preferredSize` 属性时，会创建一个 `Dimension` 对象。（`preferredSize` 为 -1 时，大小会自动计算。）

- 对象必须包含名为 `width` 和 `height` 的属性。
- 数组必须按顺序包含值 `[width, height]`。

---

### Margins

定义容器边缘与其最外层子元素之间的像素数。包含一个数组 `[left, top, right, bottom]`，其元素定义了容器左边缘与其最左侧子元素之间的边距，依此类推。

当你设置元素的 `margins` 属性时，会创建一个 `Margins` 对象。

- 对象必须包含名为 `left`、`top`、`right` 和 `bottom` 的属性。
- 数组必须按顺序包含值 `[left, top, right, bottom]`。

你也可以将 `margins` 属性设置为一个数字；此时数组中的所有值都将设置为该数字。

---

### Point

定义窗口或用户界面元素的位置。包含一个数组 `[x, y]`，其值表示元素的原点作为水平和垂直像素偏移量，从元素坐标空间的原点开始。

当你设置元素的 `location` 属性时，会创建一个 `Point` 对象。

- 对象必须包含名为 `x` 和 `y` 的属性。
- 数组必须按顺序包含值 `[x, y]`。
