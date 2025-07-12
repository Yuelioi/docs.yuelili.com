---
title: 画板
---
# 画板

`artboard`

#### 描述

一个 Artboard 对象表示文档中的一个画板。一个文档中可以有 1 到 100 个画板。

---

## 属性

### Artboard.artboardRect

`artboard.artboardRect`

#### 描述

画板的大小和位置。

#### 类型

Rect

---

### Artboard.name

`artboard.name`

#### 描述

画板的唯一标识名称。

#### 类型

String

---

### Artboard.parent

`artboard.parent`

#### 描述

此对象的父对象。

#### 类型

[Document](.././Document); 只读。

---

### Artboard.rulerOrigin

`artboard.rulerOrigin`

#### 描述

画板的标尺原点，相对于画板的左上角。

#### 类型

Point

---

### Artboard.rulerPAR

`artboard.rulerPAR`

#### 描述

像素宽高比，如果单位为像素，则用于标尺可视化。

范围：0.1 到 10。

#### 类型

Number (double)

---

### Artboard.showCenter

`artboard.showCenter`

#### 描述

显示中心标记。

#### 类型

Boolean

---

### Artboard.showCrossHairs

`artboard.showCrossHairs`

#### 描述

显示十字线。

#### 类型

Boolean

---

### Artboard.showSafeAreas

`artboard.showSafeAreas`

#### 描述

显示标题和动作安全区域（用于视频）。

#### 类型

Boolean

---

### Artboard.typename

`artboard.typename`

#### 描述

只读。此对象的类名。

#### 类型

String

---

## 方法

### Artboard.remove()

`artboard.remove()`

#### 描述

删除此画板对象。不能删除文档中的最后一个画板。

#### 返回值

无。
