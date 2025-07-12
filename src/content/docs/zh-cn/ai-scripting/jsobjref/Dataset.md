---
title: 数据集
---
# 数据集

`app.activeDocument.dataSets[index]`

#### 描述

用于动态发布的一组数据。数据集允许您将多个变量及其动态数据收集到一个对象中。

您必须至少有一个变量绑定到图稿项才能创建数据集。请参阅类 [Variable](.././Variable)。

---

## 属性

### Dataset.name

`app.activeDocument.dataSets[index].name`

#### 描述

数据集的名称。

#### 类型

字符串。

---

### Dataset.parent

`app.activeDocument.dataSets[index].parent`

#### 描述

包含此数据集的对象名称。

#### 类型

[Document](.././Document); 只读。

---

### Dataset.typename

`app.activeDocument.dataSets[index].typename`

#### 描述

引用对象的类名。

#### 类型

字符串。

---

## 方法

### Dataset.display()

`app.activeDocument.dataSets[index].display()`

#### 描述

显示数据集。

#### 返回值

无。

---

### Dataset.remove()

`app.activeDocument.dataSets[index].remove()`

#### 描述

删除此对象。

#### 返回值

无。

---

### Dataset.update()

`app.activeDocument.dataSets[index].update()`

#### 描述

更新数据集。

#### 返回值

无。

---

## 示例

### 使用变量和数据集

```javascript
// 创建两个变量，1个可见性变量和1个文本变量，
// 创建两个数据集，每个数据集具有不同的变量值，
// 然后显示这两个数据集

var docRef = documents.add();

// 创建可见性变量
var itemRef = docRef.pathItems.rectangle(600, 200, 150, 150);
var colorRef = new RGBColor;
colorRef.red = 255;
itemRef.fillColor = colorRef;

var visibilityVar = docRef.variables.add();
visibilityVar.kind = VariableKind.VISIBILITY;
itemRef.visibilityVariable = visibilityVar;

// 创建文本变量
var textRef = docRef.textFrames.add();
textRef.contents = "文本变量，数据集1";
textRef.top = 400;
textRef.left = 200;

var textVar = docRef.variables.add();
textVar.kind = VariableKind.TEXTUAL;
textRef.contentVariable = textVar;
redraw();

// 创建数据集1
var ds1 = docRef.dataSets.add();

// 更改变量值并创建数据集2
itemRef.hidden = true;
textRef.contents = "文本变量，数据集2";
redraw();
var ds2 = docRef.dataSets.add();

// 显示每个数据集
ds1.display();
redraw();
ds2.display();
redraw();
```
