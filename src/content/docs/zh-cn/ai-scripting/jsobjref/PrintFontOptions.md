---
title: PrintFontOptions
---
# PrintFontOptions

`new PrintFontOptions()`

#### 描述

包含有关用于打印文档的字体下载和替换的信息。

---

## 属性

### PrintFontOptions.downloadFonts

`printFontOptions.downloadFonts`

#### 描述

字体下载模式。

默认值: `PrintFontDownloadMode.DOWNLOADSUBSET`

#### 类型

[PrintFontDownloadMode](../scripting-constants#printfontdownloadmode)

---

### PrintFontOptions.fontSubstitution

`printFontOptions.fontSubstitution`

#### 描述

字体替换策略。

默认值: `FontSubstitutionPolicy.SUBSTITUTEOBLIQUE`

#### 类型

[FontSubstitutionPolicy](../scripting-constants#fontsubstitutionpolicy)

---

### PrintFontOptions.typename

`printFontOptions.typename`

#### 描述

对象的类名。

#### 类型

字符串; 只读。

---

## 示例

### 使用字体选项进行打印

```javascript
// 创建一个新文档，添加文本，然后使用指定的字体选项进行打印。
var docRef = documents.add();

var pathRef = docRef.pathItems.rectangle(500, 300, 400, 400);
var textRef = docRef.textFrames.areaText(pathRef);
textRef.contents = "文本示例";

// 创建 PrintFontOptions 对象并分配给 PrintOptions 对象
var fontOpts = new PrintFontOptions();
var printOpts = new PrintOptions();
printOpts.fontOptions = fontOpts;

// 设置一些字体选项
fontOpts.downloadFonts = PrintFontDownloadMode.DOWNLOADNONE;
fontOpts.fontSubstitution = FontSubstitutionPolicy.SUBSTITUTEDEVICE;

// 打印
activeDocument.print(printOpts);
```
