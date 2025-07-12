---
title: PPDFileInfo
---
# PPDFileInfo

`app.PPDFileList[index].PPDInfo`

#### 描述

关于 PostScript 打印机描述 (PPD) 文件的信息。

---

## 属性

### PPDFileInfo.languageLevel

`app.PPDFileList[index].PPDInfo.languageLevel`

#### 描述

PostScript 语言级别。

#### 类型

字符串

---

### PPDFileInfo.PPDFilePath

`app.PPDFileList[index].PPDInfo.PPDFilePath`

#### 描述

PPD 文件的路径规范。

#### 类型

[文件](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 对象

---

### PPDFileInfo.screenList

`app.PPDFileList[index].PPDInfo.screenList`

#### 描述

颜色分色屏幕列表。

#### 类型

[Screen](.././Screen) 数组

---

### PPDFileInfo.screenSpotFunctionList

`app.PPDFileList[index].PPDInfo.screenSpotFunctionList`

#### 描述

颜色分色屏幕点函数列表。

#### 类型

[ScreenSpotFunction](.././ScreenSpotFunction) 数组

---

## 示例

### 显示 PPD 文件属性

```javascript
// 在新文本框中显示每个 PPD 文件的 PostScript 级别和路径
var sPPD = "";
var docRef = documents.add();

var x = 30;
var y = (docRef.height - 30);

var iLength = PPDFileList.length;
if (iLength > 20)
 iLength = 20;

for (var i = 0; i < iLength; i++) {
 var ppdRef = PPDFileList[i];
 sPPD = ppdRef.name;
 sPPD += "\r\tPS 级别 ";

 var ppdInfoRef = ppdRef.PPDInfo;
 sPPD += ppdInfoRef.languageLevel;
 sPPD += "\r\t路径: ";
 sPPD += ppdInfoRef.PPDFilePath;

 var textRef = docRef.textFrames.add();
 textRef.textRange.characterAttributes.size = 8;
 textRef.contents = sPPD;
 textRef.top = (y);
 textRef.left = x;

 redraw();

 if ((y -= (textRef.height)) <= 30) {
 y = (docRef.height - 30);
 x += 150;
 }
}
```

---

### PPDFileInfo 及相关屏幕信息

```javascript
// 在新文本框中显示前 10 个 PPD 文件的 PostScript 级别、文件路径、屏幕和屏幕点信息

var sPPD = "";
var docRef = documents.add();

var x = 30;
var y = (docRef.height - 30);

var iLength = PPDFileList.length;

if (iLength > 10)
 iLength = 10;

for (var i = 0; i < iLength; i++) {
 var ppdRef = PPDFileList[i];
 sPPD = ppdRef.name;
 sPPD += "\r\tPS 级别 ";

 var ppdInfoRef = ppdRef.PPDInfo;
 sPPD += ppdInfoRef.languageLevel;
 sPPD += "\r\t路径: ";
 sPPD += ppdInfoRef.PPDFilePath;
 sPPD += "\r\t屏幕:\r";

 var iScreens = ppdInfoRef.screenList.length;
 for (var c = 0; c < iScreens; c++) {

 var screenRef = ppdInfoRef.screenList[c];
 sPPD += "\t\t";
 sPPD += screenRef.name;

 var screenInfoRef = screenRef.screenInfo;
 sPPD += ", 角度 = ";
 sPPD += screenInfoRef.angle;
 sPPD += ", 频率 = ";
 sPPD += screenInfoRef.frequency;
 sPPD += "\r";
 }

 sPPD += "\r\t屏幕点:\r";

 var iScreenSpots = ppdInfoRef.screenSpotFunctionList.length;
 for (var n = 0; n < iScreenSpots; n++) {
 var screenSpotRef = ppdInfoRef.screenSpotFunctionList[n];
 sPPD += "\t\t";
 sPPD += screenSpotRef.name;
 sPPD += ", 点函数: ";
 sPPD += screenSpotRef.spotFunction;
 sPPD += "\r";
 }

 var textRef = docRef.textFrames.add();
 textRef.textRange.characterAttributes.size = 8;
 textRef.contents = sPPD;
 textRef.top = (y);
 textRef.left = x;

 redraw();

 y -= (textRef.height);
}
```
