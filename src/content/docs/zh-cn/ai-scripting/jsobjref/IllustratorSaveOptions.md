---
title: IllustratorSaveOptions
---
# IllustratorSaveOptions

`illustratorSaveOptions`

#### 描述

用于将文档保存为 Illustrator 文件的选项，与 [Document.saveAs()](../Document#documentsaveas) 方法一起使用。所有属性都是可选的。

---

## 属性

### IllustratorSaveOptions.artboardRange

`illustratorSaveOptions.artboardRange`

#### 描述

如果 `saveMultipleArtboards` 为 `true`（仅适用于 Illustrator 13 或更早版本），文档将被视为多资源提取，指定画板范围。空字符串表示提取所有画板。

默认值：空字符串。

#### 类型

字符串。

---

### IllustratorSaveOptions.compatibility

`illustratorSaveOptions.compatibility`

#### 描述

指定要创建的 Illustrator 文件格式的版本。

默认值：`Compatibility.ILLUSTRATOR19`。

#### 类型

[Compatibility](../scripting-constants#compatibility)

---

### IllustratorSaveOptions.compressed

`illustratorSaveOptions.compressed`

:::note
此功能在 Illustrator 10 版本中添加
:::

#### 描述

如果为 `true`，保存的文件将被压缩。

默认值：`true`。

#### 类型

布尔值。

---

### IllustratorSaveOptions.embedICCProfile

`illustratorSaveOptions.embedICCProfile`

:::note
此功能在 Illustrator 9 版本中添加
:::

#### 描述

如果为 `true`，文档的 ICC 配置文件将嵌入到保存的文件中。

默认值：`false`。

#### 类型

布尔值。

---

### IllustratorSaveOptions.embedLinkedFiles

`illustratorSaveOptions.embedLinkedFiles`

:::note
此功能在 Illustrator 7 版本中添加
:::

#### 描述

如果为 `true`，链接的图像文件将嵌入到保存的文件中。

默认值：`false`。

#### 类型

布尔值。

---

### IllustratorSaveOptions.flattenOutput

`illustratorSaveOptions.flattenOutput`

:::note
此功能在 Illustrator 9 版本中添加
:::

#### 描述

对于较旧的文件格式版本，应如何展平透明度。

默认值：`OutputFlattening.PRESERVEAPPEARANCE`。

#### 类型

[OutputFlattening](../scripting-constants#outputflattening)

---

### IllustratorSaveOptions.fontSubsetThreshold

`illustratorSaveOptions.fontSubsetThreshold`

:::note
此功能在 Illustrator 9 版本中添加
:::

#### 描述

当文档中使用的字符少于该百分比时，包含字体的子集。

范围：0.0 到 100.0。

默认值：100.0。

#### 类型

数字（双精度）。

---

### IllustratorSaveOptions.pdfCompatible

`illustratorSaveOptions.pdfCompatible`

:::note
此功能在 Illustrator 10 版本中添加
:::

#### 描述

如果为 `true`，文件将保存为 PDF 兼容文件。

默认值：`true`。

#### 类型

布尔值。

---

### IllustratorSaveOptions.saveMultipleArtboards

`illustratorSaveOptions.saveMultipleArtboards`

#### 描述

如果为 `true`，则保存所有画板或画板范围。仅适用于 Illustrator 13 或更早版本。

#### 类型

布尔值。

---

### IllustratorSaveOptions.typename

`illustratorSaveOptions.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 示例

### 使用选项保存

```javascript
// 将当前文档保存为 AI 文件，并指定选项，
// dest 指定新文件的完整路径和文件名

function exportFileToAI(dest) {
 if (app.documents.length > 0) {
 var ai8Doc = new File(dest);
 var saveOptions = new IllustratorSaveOptions();
 saveOptions.compatibility = Compatibility.ILLUSTRATOR8;
 saveOptions.flattenOutput = OutputFlattening.PRESERVEAPPEARANCE;

 app.activeDocument.saveAs(ai8Doc, saveOptions);
 }
}
```
