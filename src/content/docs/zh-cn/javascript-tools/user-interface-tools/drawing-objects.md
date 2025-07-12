---
title: 绘制对象
---
# 绘制对象

ScriptUI 允许你直接在控件上绘制以自定义其外观。你可以通过在 [onDraw](../control-objects#ondraw) 事件中调用 [ScriptUIGraphics 对象](../graphic-customization-objects#scriptuigraphics-object) 的方法来实现这一点（参见 [使用事件回调和监听器定义行为](../defining-behavior-with-event-callbacks-and-listeners)）。

这些方法接受一些封装了绘制信息的辅助对象作为参数，包括以下内容：

| 对象 | 描述 |
| --- | --- |
| [ScriptUIGraphics](../graphic-customization-objects#scriptuigraphics-object) | 封装了绘制方法。每个控件关联的图形对象可以在控件对象的 `graphics` 属性中找到。 |
| [ScriptUIBrush](../graphic-customization-objects#scriptuibrush-object) | 描述用于在控件中绘制纹理的画笔。 |
| [ScriptUIFont](../graphic-customization-objects#scriptuifont-object) | 描述用于在控件中写入文本的字体。 |
| [ScriptUIImage](../graphic-customization-objects#scriptuiimage-object) | 描述要在控件中绘制的图像。 |
| [ScriptUIPath](../graphic-customization-objects#scriptuipath-object) | 描述要在控件中绘制的图形的路径。 |
| [ScriptUIPen](../graphic-customization-objects#scriptuipen-object) | 描述用于在控件中绘制线条的画笔。 |

有关这些对象的详细信息，请参阅 [图形自定义对象](.././graphic-customization-objects)。

`ScriptUIGraphics` 对象包含创建其他图形对象的方法；例如，`ScriptUIGraphics.newBrush()` 会创建一个具有特定颜色的 `ScriptUIBrush` 实例。这些图形对象随后被用作 `ScriptUIGraphics` 对象中的属性值，控制用户界面元素在屏幕上的绘制方式。例如，如果你将新的 `Brush` 对象放入 `backgroundColor` 属性中，则该元素将使用该颜色绘制背景。

要将窗口的背景设置为浅灰色，可以使用以下代码：

```javascript
g = myWindow.graphics;
myBrush = g.newBrush( g.BrushType.SOLID_COLOR, [ 0.75, 0.75, 0.75, 1 ] );
g.backgroundColor = myBrush;
```

以下示例来自 [Adobe ExtendScript SDK](https://github.com/Adobe-CEP/CEP-Resources/tree/master/ExtendScript-Toolkit)，展示了如何使用图形自定义对象：

| 示例 | 描述 |
| --- | --- |
| [ColorSelector.jsx](https://github.com/Adobe-CEP/CEP-Resources/blob/master/ExtendScript-Toolkit/Samples/javascript/ColorSelector.jsx) | 使用图形对象在用户通过滑块选择颜色值时更改窗口的背景颜色。 |
| [ColorPicker.jsx](https://github.com/Adobe-CEP/CEP-Resources/blob/master/ExtendScript-Toolkit/Samples/javascript/ColorPicker.jsx) | 一个更复杂的颜色选择对话框，展示了如何使用其他图形对象，包括字体和路径。 |

此外，[自定义元素类](../graphic-customization-objects#custom-element-class) 允许你定义完全自定义的几种类型（范围、按钮、列表）的元素，其外观完全由你的 [onDraw](../control-objects#ondraw) 实现来渲染。
