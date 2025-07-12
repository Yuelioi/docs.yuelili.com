---
title: ExportOptionsAutoCAD
---
# ExportOptionsAutoCAD

`exportOptionsAutoCAD`

#### 描述

用于将文档导出为 AutoCAD 文件的选项，与 [Document.exportFile()](../Document#documentexportfile) 方法一起使用。
所有属性都是可选的。

导出文档时，文件扩展名会自动附加。您不应在文件规范中包含任何文件扩展名。

要覆盖默认的 AutoCAD 导出格式（DWG），请使用 [ExportOptionsAutoCAD.exportFileFormat](#exportoptionsautocadexportfileformat) 属性。

---

## 属性

### ExportOptionsAutoCAD.alterPathsForAppearance

`exportOptionsAutoCAD.alterPathsForAppearance`

#### 描述

如果为 `true`，则在需要时修改路径以保持外观。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsAutoCAD.colors

`exportOptionsAutoCAD.colors`

#### 描述

导出到 AutoCAD 文件中的颜色。

#### 类型

[AutoCADColors](../scripting-constants#autocadcolors)

---

### ExportOptionsAutoCAD.convertTextToOutlines

`exportOptionsAutoCAD.convertTextToOutlines`

#### 描述

如果为 `true`，则将文本转换为矢量路径；保留字体的视觉外观。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsAutoCAD.exportFileFormat

`exportOptionsAutoCAD.exportFileFormat`

#### 描述

文件导出的格式。

默认值：`AutoCADExportFileFormat.DWG`。

#### 类型

[AutoCADExportFileFormat](../scripting-constants#autocadexportfileformat)

---

### ExportOptionsAutoCAD.exportOption

`exportOptionsAutoCAD.exportOption`

#### 描述

指定在导出期间是保留外观还是可编辑性。

默认值：`AutoCADExportOption.MaximizeEditability`。

#### 类型

[AutoCADExportOption](../scripting-constants#autocadexportoption)

---

### ExportOptionsAutoCAD.exportSelectedArtOnly

`exportOptionsAutoCAD.exportSelectedArtOnly`

#### 描述

如果为 `true`，则仅导出选定的图稿。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsAutoCAD.rasterFormat

`exportOptionsAutoCAD.rasterFormat`

#### 描述

导出栅格图稿的格式。

#### 类型

[AutoCADRasterFormat](../scripting-constants#autocadrasterformat)

---

### ExportOptionsAutoCAD.scaleLineweights

`exportOptionsAutoCAD.scaleLineweights`

#### 描述

如果为 `true`，则线宽将与绘图的其余部分按相同的比例因子缩放。

默认值：`false`。

#### 类型

布尔值。

---

### ExportOptionsAutoCAD.typename

`exportOptionsAutoCAD.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

### ExportOptionsAutoCAD.unit

`exportOptionsAutoCAD.unit`

#### 描述

用于映射的测量单位。

#### 类型

[AutoCADUnit](../scripting-constants#autocadunit)

---

### ExportOptionsAutoCAD.unitScaleRatio

`exportOptionsAutoCAD.unitScaleRatio`

#### 描述

输出缩放的比例（以百分比表示）。

范围：0 到 1000

#### 类型

数字（双精度）。

---

### ExportOptionsAutoCAD.version

`exportOptionsAutoCAD.version`

#### 描述

文件导出的 AutoCAD 版本。

默认值：`AutoCADCompatibility.AutoCADRelease24`。

#### 类型

[AutoCADCompatibility](../scripting-constants#autocadcompatibility)

---
