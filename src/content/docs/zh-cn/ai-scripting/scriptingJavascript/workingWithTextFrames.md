---
title: 使用文本框架
---
# 使用文本框架

要在 JavaScript 中创建特定类型的文本框架，请使用 `text` 框架对象的 `kind` 属性：

```javascript
var rectRef = docRef.pathItems.rectangle(700, 50, 100, 100);
// 使用 areaText 方法创建文本框架
var areaTextRef = docRef.textFrames.areaText(rectRef);
```

---

## 串接框架

与 Illustrator 应用程序中一样，您可以串接区域文本框架或路径文本框架。

要串接现有的文本框架，请使用 `text frame` 对象的 `nextFrame` 或 `previousFrame` 属性。

将以下脚本复制到 ESTK 时，请将 `contents` 属性的值放在一行中：

```javascript
var myDoc = documents.add();
var myPathItem1 = myDoc.pathItems.rectangle(244, 64, 82, 76);
var myTextFrame1 = myDoc.textFrames.areaText(myPathItem1);
var myPathItem2 = myDoc.pathItems.rectangle(144, 144, 42, 116);
var myTextFrame2 = myDoc.textFrames.areaText(myPathItem2);

// 使用 nextFrame 属性串接文本框架
myTextFrame1.nextFrame = myTextFrame2;
var sText = "这是两个文本框架连接在一起作为一个故事，文本从第一个框架流向最后一个框架。这是两个文本框架连接在一起作为一个故事，文本从第一个框架流向最后一个框架。这是两个文本框架连接在一起作为一个故事。";
myTextFrame1.contents = sText;
redraw();
```

### 串接框架构成一个故事对象

串接框架构成一个单一的故事对象。要观察这一点，请在运行上述脚本后运行以下 JavaScript。

```javascript
var myDoc = app.activeDocument
alert("共有 " + myDoc.textFrames.length + " 个文本框架。")
alert("共有 " + myDoc.stories.length + " 个故事。")
```
