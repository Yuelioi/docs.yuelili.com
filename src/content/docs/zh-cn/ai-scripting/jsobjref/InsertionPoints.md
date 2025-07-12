---
title: 插入点
---
# 插入点

`app.activeDocument.textFrames[index].insertionPoints`

#### 描述

[InsertionPoint](.././InsertionPoint) 对象的集合。

---

## 属性

### InsertionPoints.length

`app.activeDocument.textFrames[index].insertionPoints.length`

#### 描述

集合中的元素数量。

#### 类型

数字；只读。

---

### InsertionPoints.parent

`app.activeDocument.textFrames[index].insertionPoints.parent`

#### 描述

对象的容器。

#### 类型

对象；只读。

---

### InsertionPoints.typename

`app.activeDocument.textFrames[index].insertionPoints.typename`

#### 描述

对象的类名。

#### 类型

字符串；只读。

---

## 方法

### InsertionPoints.index()

`app.activeDocument.textFrames[index].insertionPoints.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[InsertionPoint](.././InsertionPoint)

---

## 示例

### 使用插入点添加空格

```javascript
// 创建一个新文档，添加文本，然后使用插入点在每个字符之间插入空格

var docRef = documents.add();
var textRef = docRef.textFrames.add();
textRef.contents = "Wouldn't you rather be scripting?";
textRef.top = 400;
textRef.left = 100;
textRef.textRange.characterAttributes.size = 20;

redraw();

// 使用插入点在每个字符之间添加空格。
var ip;
for (var i = 0; i < textRef.insertionPoints.length; i += 2) {
 ip = textRef.insertionPoints[i];
 ip.characters.add(" ");
}
```
