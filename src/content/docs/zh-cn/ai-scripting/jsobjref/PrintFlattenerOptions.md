---
title: PrintFlattenerOptions
---
# PrintFlattenerOptions

`new PrintFlattenerOptions()`

#### 描述

包含当 Illustrator 输出包含透明度的图稿到非原生格式时使用的扁平化选项。

---

## 属性

### PrintFlattenerOptions.clipComplexRegions

`printFlattenerOptions.clipComplexRegions`

#### 描述

如果为 `true`，则裁剪复杂区域。

默认值：`false`

#### 类型

布尔值

---

### PrintFlattenerOptions.convertStrokesToOutlines

`printFlattenerOptions.convertStrokesToOutlines`

#### 描述

如果为 `true`，则将所有描边转换为轮廓。

默认值：`false`

#### 类型

布尔值

---

### PrintFlattenerOptions.convertTextToOutlines

`printFlattenerOptions.convertTextToOutlines`

#### 描述

如果为 `true`，则将所有文本转换为矢量路径；保留字体的视觉外观。

默认值：`false`

#### 类型

布尔值

---

### PrintFlattenerOptions.flatteningBalance

`printFlattenerOptions.flatteningBalance`

#### 描述

扁平化平衡。

范围：0.0 到 100.0。

默认值：100.0

#### 类型

数字（长整型）

---

### PrintFlattenerOptions.gradientResolution

`printFlattenerOptions.gradientResolution`

#### 描述

渐变分辨率，单位为每英寸点数（dpi）。

范围：1.0 到 9600.0。

默认值：300.0

#### 类型

数字（双精度）

---

### PrintFlattenerOptions.overprint

`printFlattenerOptions.overprint`

#### 描述

是否保留、丢弃或模拟叠印。

默认值：`PDFOverprint.PRESERVEPDFOVERPRINT`

#### 类型

[PDFOverprint](../scripting-constants#pdfoverprint)

---

### PrintFlattenerOptions.rasterizationResolution

`printFlattenerOptions.rasterizationResolution`

#### 描述

栅格化分辨率，单位为每英寸点数（dpi）。

范围：1.0 到 9600.0。

默认值：300.0

#### 类型

数字（双精度）

---

### PrintFlattenerOptions.typename

`printFlattenerOptions.typename`

#### 描述

对象的类名。

#### 类型

字符串；只读。

---

## 示例

### 设置打印扁平化

```javascript
// 创建一个新文档，向文档添加符号
// 然后使用一系列扁平化平衡设置进行打印
var docRef = documents.add();
var y = docRef.height - 30;

for (var i = 0; i < (docRef.symbols.length); i++) {
 symbolRef = docRef.symbols[i];

 symbolItemRef1 = docRef.symbolItems.add(symbolRef);
 symbolItemRef1.top = y;
 symbolItemRef1.left = 100;

 y -= (symbolItemRef1.height + 10);
}

redraw();

// 创建 PrintFlattenerOptions 对象并将其分配给 PrintOptions 对象
var flatOpts = new PrintFlattenerOptions();
var printOpts = new PrintOptions();
printOpts.flattenerOptions = flatOpts;

// 设置其他打印选项
printOpts.ClipComplexRegions = true;
printOpts.GradientResoultion = 360;
printOpts.RasterizatonResotion = 360;

// 以 20 为增量打印当前文档的扁平化平衡
for (var i = 0; i <= 100; i += 20) {
 flatOpts.flatteningBalance = i;
 activeDocument.print(printOpts);
}
```
