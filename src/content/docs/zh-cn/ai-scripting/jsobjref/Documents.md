---
title: 文档
---
# 文档

`app.documents`

#### 描述

一个包含 [Document](.././Document) 对象的集合。

---

## 属性

### Documents.length

`app.documents.length`

#### 描述

集合中对象的数量。

#### 类型

数字；只读。

---

### Documents.parent

`app.documents.parent`

#### 描述

该对象的父对象。

#### 类型

对象；只读。

---

### Documents.typename

`app.documents.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 方法

### Documents.add()

```javascript
app.documents.add(
 [documentColorSpace]
 [, width]
 [, height]
 [, numArtBoards]
 [, artboardLayout]
 [, artboardSpacing]
 [, artboardRowsOrCols]
)
```

#### 描述

使用可选参数创建一个新文档，并返回对新文档的引用。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `documentColorSpace` | [DocumentColorSpace](../scripting-constants#documentcolorspace), 可选 | 文档的颜色空间 |
| `width` | 数字 (double), 可选 | 要添加的文档宽度 |
| `height` | 数字 (double), 可选 | 要添加的文档高度 |
| `numArtBoards` | 数字 (long), 可选 | 要创建的艺术板数量 |
| `artboardLayout` | [DocumentArtboardLayout](../scripting-constants#documentartboardlayout), 可选 | 艺术板布局 |
| `artboardSpacing` | 数字, 可选 | 间距的像素数 |
| `artboardRowsOrCols` | 整数, 可选 | 行数或列数 |

#### 返回值

[Document](.././Document)

---

### Documents.addDocument()

`app.documents.addDocument(startupPreset[, presetSettings][, showOptionsDialog])`

#### 描述

从预设创建文档，替换任何提供的设置值，并返回对新文档的引用。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `startupPreset` | 字符串 | 使用的启动预设 |
| `presetSettings` | [DocumentPreset](.././DocumentPreset), 可选 | 预设文档模板 |
| `showOptionsDialog` | 布尔值, 可选 | 是否显示选项对话框 |

#### 返回值

[Document](.././Document)

---

### Documents.addDocumentNoUI()

`app.documents.addDocumentNoUI(startupPreset)`

#### 描述

在不显示UI的情况下创建文档。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `startupPreset` | 字符串 | 使用的启动预设 |

#### 返回值

[Document](.././Document)

---

### Documents.getByName()

`app.documents.getByName(name)`

#### 描述

获取集合中具有指定名称的第一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 要获取的元素名称 |

#### 返回值

[Document](.././Document)

---

### Documents.index()

`app.documents.index(itemKey)`

#### 描述

从集合中获取一个元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `itemKey` | 字符串, 数字 | 字符串或数字键 |

#### 返回值

[Document](.././Document)

---

## 示例

### 创建一个新文档

```javascript
// 创建一个具有RGB颜色空间的新文档

app.documents.add(DocumentColorSpace.RGB);
```
