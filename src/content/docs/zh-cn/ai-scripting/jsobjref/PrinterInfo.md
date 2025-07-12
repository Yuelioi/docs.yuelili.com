---
title: PrinterInfo
---
# PrinterInfo

`printerInfo`

#### 描述

打印机的配置信息。

---

## 属性

### PrinterInfo.binaryPrintingSupport

`printerInfo.binaryPrintingSupport`

#### 描述

如果为 `true`，表示打印机支持二进制打印。

#### 类型

布尔值

---

### PrinterInfo.colorSupport

`printerInfo.colorSupport`

#### 描述

打印机的颜色支持能力。

#### 类型

[PrinterColorMode](../scripting-constants#printercolormode)

---

### PrinterInfo.customPaperSupport

`printerInfo.customPaperSupport`

#### 描述

如果为 `true`，表示打印机支持自定义纸张尺寸。

#### 类型

布尔值

---

### PrinterInfo.customPaperTransverseSupport

`printerInfo.customPaperTransverseSupport`

#### 描述

如果为 `true`，表示打印机支持自定义纸张横向打印。

#### 类型

布尔值

---

### PrinterInfo.deviceResolution

`printerInfo.deviceResolution`

#### 描述

打印机的默认分辨率。

#### 类型

数值 (双精度)

---

### PrinterInfo.inRIPSeparationSupport

`printerInfo.inRIPSeparationSupport`

#### 描述

如果为 `true`，表示打印机支持 InRIP 颜色分离。

#### 类型

布尔值

---

### PrinterInfo.maxDeviceResolution

`printerInfo.maxDeviceResolution`

#### 描述

打印机的最大设备分辨率。

#### 类型

数值 (双精度)

---

### PrinterInfo.maxPaperHeight

`printerInfo.maxPaperHeight`

#### 描述

自定义纸张的最大高度。

#### 类型

数值 (双精度)

---

### PrinterInfo.maxPaperHeightOffset

`printerInfo.maxPaperHeightOffset`

#### 描述

自定义纸张的最大高度偏移量。

#### 类型

数值 (双精度)

---

### PrinterInfo.maxPaperWidth

`printerInfo.maxPaperWidth`

#### 描述

自定义纸张的最大宽度。

#### 类型

数值 (双精度)

---

### PrinterInfo.maxPaperWidthOffset

`printerInfo.maxPaperWidthOffset`

#### 描述

自定义纸张的最大宽度偏移量。

#### 类型

数值 (双精度)

---

### PrinterInfo.minPaperHeight

`printerInfo.minPaperHeight`

#### 描述

自定义纸张的最小高度。

#### 类型

数值 (双精度)

---

### PrinterInfo.minPaperHeightOffset

`printerInfo.minPaperHeightOffset`

#### 描述

自定义纸张的最小高度偏移量。

#### 类型

数值 (双精度)

---

### PrinterInfo.minPaperWidth

`printerInfo.minPaperWidth`

#### 描述

自定义纸张的最小宽度。

#### 类型

数值 (双精度)

---

### PrinterInfo.minPaperWidthOffset

`printerInfo.minPaperWidthOffset`

#### 描述

自定义纸张的最小宽度偏移量。

#### 类型

数值 (双精度)

---

### PrinterInfo.paperSizes

`printerInfo.paperSizes`

#### 描述

支持的纸张尺寸列表。

#### 类型

[Paper](.././Paper) 数组

---

### PrinterInfo.postScriptLevel

`printerInfo.postScriptLevel`

#### 描述

PostScript 语言级别。

#### 类型

[PrinterPostScriptLevelEnum](../scripting-constants#printerpostscriptlevelenum)

---

### PrinterInfo.printerType

`printerInfo.printerType`

#### 描述

打印机类型。

#### 类型

[PrinterTypeEnum](../scripting-constants#printertypeenum)

---

### PrinterInfo.typename

`printerInfo.typename`

#### 描述

对象的类名。

#### 类型

字符串；只读。

---

## 示例

### 查找可用的打印机

```javascript
// 在新文本框中显示可用打印机的列表
var docRef = documents.add();
var iCount = printerList.length;

var textRef = docRef.textFrames.add();
textRef.contents += "打印机...\r";

for (var i = 0; i < iCount; i++) {
 textRef.contents += printerList[i].name;
 textRef.contents += "\r\t";
}

textRef.top = 600;
textRef.left = 200;

redraw();
```
