---
title: 色板
---
# 色板

`app.activeDocument.swatches[index]`

#### 描述

文档中包含的颜色色板定义。色板对应于 Illustrator 用户界面中的色板面板。

脚本可以创建一个新的色板。

色板可以保存所有类型的颜色数据，例如图案、渐变、CMYK、RGB、灰度和专色。

---

## 属性

### Swatch.color

`app.activeDocument.swatches[index].color`

#### 描述

此色板的颜色信息。

#### 类型

[颜色](.././Color)

---

### Swatch.name

`app.activeDocument.swatches[index].name`

#### 描述

色板的名称。

#### 类型

字符串。

---

### Swatch.parent

`app.activeDocument.swatches[index].parent`

#### 描述

包含此色板的对象。

#### 类型

[文档](.././Document); 只读。

---

### Swatch.typename

`app.activeDocument.swatches[index].typename`

#### 描述

对象的类名。

#### 类型

字符串; 只读。

---

## 方法

### Swatch.remove()

`app.activeDocument.swatches[index].remove()`

#### 描述

删除此对象。

#### 返回值

无。

---

## 示例

### 修改色板

```javascript
// 更改最后一个色板的名称
if ( app.documents.length > 0 && app.activeDocument.swatches.length > 0 ) {
 var lastIndex = app.activeDocument.swatches.length - 1;
 var lastSwatch = app.activeDocument.swatches[lastIndex];
 lastSwatch.name = "TheLastSwatch";
}
```
