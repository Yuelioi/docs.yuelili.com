---
title: ScreenInfo
---
# ScreenInfo

`PPDFileList[index].PPDInfo.screenList[index].screenInfo`

#### 描述

包含用于打印的分色屏幕的角度和频率信息。

---

## 属性

### ScreenInfo.angle

`PPDFileList[index].PPDInfo.screenList[index].screenInfo.angle`

#### 描述

屏幕的角度（以度为单位）。

#### 类型

数字（double）。

---

### ScreenInfo.defaultScreen

`PPDFileList[index].PPDInfo.screenList[index].screenInfo.defaultScreen`

#### 描述

如果为 true，则表示这是默认屏幕。

#### 类型

布尔值。

---

### ScreenInfo.frequency

`PPDFileList[index].PPDInfo.screenList[index].screenInfo.frequency`

#### 描述

屏幕的频率。

#### 类型

数字（double）。

---

### ScreenInfo.typename

`PPDFileList[index].PPDInfo.screenList[index].screenInfo.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 示例

### 获取屏幕信息

```javascript
// 在新的文本框中显示每个屏幕列表项的名称、角度和频率
var sInfo = "";
var docRef = documents.add();
if (PPDFileList.length == 0) {
 sInfo = "\r\t\tEmpty PPDFileList";
} else {
 var ppdRef = PPDFileList[0];
 var ppdInfoRef = ppdRef.PPDInfo;
 sInfo += "\r\t\tScreen Objects for 1st PPD File:\r";
 sInfo += "\t\t" + ppdRef.name;

 var iScreens = ppdInfoRef.screenList.length;
 if (iScreens > 0) {
 for (var c = 0; c < iScreens; c++) {

 var screenRef = ppdInfoRef.screenList[c];
 sInfo += "\r\t\t";
 sInfo += screenRef.name;

 var screenInfoRef = screenRef.screenInfo;

 sInfo += ", Angle = ";
 sInfo += screenInfoRef.angle;

 sInfo += ", Frequency = ";
 sInfo += screenInfoRef.frequency;
 sInfo += "\r";
 }
 } else {
 sInfo += "\r\t\tEmpty ScreenList";
 }
}

var textRef = docRef.textFrames.add();
textRef.textRange.characterAttributes.size = 12;
textRef.contents = sInfo;
textRef.top = 600;
textRef.left = 30;

redraw();
```
