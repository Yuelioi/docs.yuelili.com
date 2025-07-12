---
title: PrintPageMarksOptions
---
# PrintPageMarksOptions

`new PrintPageMarksOptions()`

#### 描述

打印页面标记的选项。

---

## 属性

### PrintPageMarksOptions.bleedOffsetRect

`printPageMarksOptions.bleedOffsetRect`

#### 描述

出血偏移矩形。

#### 类型

4个数字组成的数组

---

### PrintPageMarksOptions.colorBars

`printPageMarksOptions.colorBars`

#### 描述

如果为 `true`，则启用打印颜色条。

默认值：`false`

#### 类型

布尔值

---

### PrintPageMarksOptions.marksOffsetRect

`printPageMarksOptions.marksOffsetRect`

#### 描述

页面标记偏移矩形。

#### 类型

4个数字组成的数组

---

### PrintPageMarksOptions.pageInfoMarks

`printPageMarksOptions.pageInfoMarks`

#### 描述

如果为 `true`，则启用页面信息标记的打印。

默认值：`false`

#### 类型

布尔值

---

### PrintPageMarksOptions.pageMarksType

`printPageMarksOptions.pageMarksType`

#### 描述

页面标记的样式。

默认值：`PageMarksType.Roman`

#### 类型

[PageMarksTypes](../scripting-constants#pagemarkstypes)

---

### PrintPageMarksOptions.registrationMarks

`printPageMarksOptions.registrationMarks`

#### 描述

如果为 `true`，则应打印套准标记。

默认值：`false`

#### 类型

布尔值

---

### PrintPageMarksOptions.trimMarks

`printPageMarksOptions.trimMarks`

#### 描述

如果为 `true`，则应打印裁切标记。

默认值：`false`

#### 类型

布尔值

---

### PrintPageMarksOptions.trimMarksWeight

`printPageMarksOptions.trimMarksWeight`

#### 描述

裁切标记的描边粗细。最小值：0.0。

默认值：0.125

#### 类型

数字（双精度）

---

### PrintPageMarksOptions.typename

`printPageMarksOptions.typename`

#### 描述

对象的类名。

#### 类型

字符串；只读。

---

## 示例

### 设置页面标记打印选项

```javascript
// 创建一个 PrintPageMarksOptions 对象，将其分配给
// 一个 PrintOptions 对象，然后打印当前文档。
var docRef = activeDocument;
var pageMarkOptions= new PrintPageMarksOptions();

var options = new PrintOptions();
options.pageMarksOptions = pageMarkOptions;

pageMarkOptions.colorBars = true;
pageMarkOptions.pageInfoMarks = true;
pageMarkOptions.registrationMarks = true;
pageMarkOptions.trimMarks = true;

docRef.print(options);
```
