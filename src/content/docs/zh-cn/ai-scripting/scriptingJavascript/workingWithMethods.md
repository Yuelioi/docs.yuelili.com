---
title: 在 JavaScript 中使用方法
---
# 在 JavaScript 中使用方法

当你使用具有多个参数的方法时，可以省略参数列表末尾的可选参数，但不能省略列表中间的参数。

如果你不想指定列表中间的某个参数，则必须插入值 `undefined` 以使用该参数的默认值。

例如，以下定义描述了艺术对象的 `rotate()` 方法。

```javascript
rotate(
 angle
 [,changePositions]
 [,changeFillPatterns]
 [,changeFillGradients]
 [,changeStrokePattern]
 [,rotateAbout]
)
```

:::tip
在定义中，可选参数用方括号（`[]`）括起来。
:::

要将对象旋转 30 度并更改 `fillGradients`，你可以使用以下脚本语句：

```javascript
myObject.rotate(30, undefined, undefined, true);
```

你需要为 `changePositions` 和 `changeFillPatterns` 参数指定 `undefined`。对于 `changeFillGradients` 之后的两个可选参数，你不需要指定任何内容，因为它们位于参数列表的末尾。
