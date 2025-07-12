---
title: ScreenSpotFunction
---
# ScreenSpotFunction

`PPDFileList[index].PPDInfo.screenSpotFunctionList[index]`

#### 描述

包含有关颜色分离屏幕点函数的信息，包括其以PostScript语言代码定义的内容。

---

## 属性

### ScreenSpotFunction.name

`PPDFileList[index].PPDInfo.screenSpotFunctionList[index].name`

#### 描述

颜色分离屏幕点函数的名称。

#### 类型

字符串

---

### ScreenSpotFunction.spotFunction

`PPDFileList[index].PPDInfo.screenSpotFunctionList[index].spotFunction`

#### 描述

以PostScript命令表示的点函数。

#### 类型

字符串

---

### ScreenSpotFunction.typename

`PPDFileList[index].PPDInfo.screenSpotFunctionList[index].typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 示例

### 查找屏幕点函数

```javascript
// 在新的文本框中显示第一个PPD文件的屏幕点函数。
var docRef = documents.add();
var sInfo = "";
if (PPDFileList.length == 0) {
 sInfo = "\r\t\tPPDFileList为空"
} else {
 var ppdRef = PPDFileList[0];
 var ppdInfoRef = ppdRef.PPDInfo;

 var sInfo = "\r\t\t第一个PPD文件的ScreenSpotFunctions:\r";
 sInfo += "\t\t" + ppdRef.name + "\r";

 var iScreenSpots = ppdInfoRef.screenSpotFunctionList.length;
 if (iScreenSpots > 0) {
 for (var n = 0; n < iScreenSpots; n++) {
 var screenSpotRef = ppdInfoRef.screenSpotFunctionList[n];
 sInfo += "\t\t";

 sInfo += screenSpotRef.name;
 sInfo += ", spotFunction: ";

 sInfo += screenSpotRef.spotFunction;
 sInfo += "\r";
 }
 } else {
 sInfo += "\t\tScreenSpotFunctionList为空";
 }
}

var textRef = docRef.textFrames.add();
textRef.textRange.characterAttributes.size = 12;
textRef.contents = sInfo;
textRef.top = 600;
textRef.left = 30;

redraw();
```
