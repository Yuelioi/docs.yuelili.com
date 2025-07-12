---
title: 视图
---
# 视图

`app.activeDocument.views[index]`

#### 描述

Illustrator 文档中的一个文档视图，表示文档的窗口视图。

脚本无法创建新视图，但可以修改现有视图的某些属性，包括中心点、屏幕模式和缩放比例。

---

## 属性

### View.bounds

`app.activeDocument.views[index].bounds`

#### 描述

只读。此视图相对于当前文档边界的边界矩形。

#### 类型

4个数字的数组

---

### View.centerPoint

`app.activeDocument.views[index].centerPoint`

#### 描述

此视图相对于当前文档边界的中心点。

#### 类型

2个数字的数组

---

### View.parent

`app.activeDocument.views[index].parent`

#### 描述

只读。包含此视图的文档。

#### 类型

[文档](.././Document)

---

### View.screenMode

`app.activeDocument.views[index].screenMode`

#### 描述

此视图的显示模式。

#### 类型

[屏幕模式](../scripting-constants#screenmode)

---

### View.typename

`app.activeDocument.views[index].typename`

#### 描述

只读。引用对象的类名。

#### 类型

字符串

---

### View.zoom

`app.activeDocument.views[index].zoom`

#### 描述

此视图的缩放比例，其中 100.0 表示 100%。

#### 类型

数字（双精度）
