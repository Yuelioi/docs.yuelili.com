---
title: InkInfo
---
# InkInfo

`app.activeDocument.inkList[index].inkInfo`

#### 描述

用于打印文档的油墨信息。

---

## 属性

### InkInfo.angle

`app.activeDocument.inkList[index].inkInfo.angle`

#### 描述

油墨的屏幕角度（以度为单位）。

范围：-360 到 360。

#### 类型

数字（双精度）。

---

### InkInfo.customColor

`app.activeDocument.inkList[index].inkInfo.customColor`

#### 描述

自定义油墨的颜色。

#### 类型

[颜色](.././Color)

---

### InkInfo.density

`app.activeDocument.inkList[index].inkInfo.density`

#### 描述

中性密度。最小值：0.0。

#### 类型

数字（双精度）。

---

### InkInfo.dotShape

`app.activeDocument.inkList[index].inkInfo.dotShape`

#### 描述

网点形状的名称。

#### 类型

字符串。

---

### InkInfo.frequency

`app.activeDocument.inkList[index].inkInfo.frequency`

#### 描述

油墨的频率。

范围：0.0 到 1000.0。

#### 类型

数字（双精度）。

---

### InkInfo.kind

`app.activeDocument.inkList[index].inkInfo.kind`

#### 描述

油墨类型。

#### 类型

[InkType](../scripting-constants#inktype)

---

### InkInfo.printingStatus

`app.activeDocument.inkList[index].inkInfo.printingStatus`

#### 描述

油墨的打印状态。

#### 类型

[InkPrintStatus](../scripting-constants#inkprintstatus)

---

### InkInfo.trapping

`app.activeDocument.inkList[index].inkInfo.trapping`

#### 描述

陷印类型。

#### 类型

[TrappingType](../scripting-constants#trappingtype)

---

### InkInfo.trappingOrder

`app.activeDocument.inkList[index].inkInfo.trappingOrder`

#### 描述

油墨的陷印顺序。

对于 CMYK，范围为 1 到 4。

#### 类型

数字（长整型）。

---

### InkInfo.typename

`app.activeDocument.inkList[index].inkInfo.typename`

#### 描述

对象的类名。

#### 类型

字符串；只读。

---

## 示例

### 获取油墨信息

```javascript
// 在文本框中显示当前文档的油墨信息

var docRef = documents.add();

// 组装一个包含此文档油墨信息的字符串
var sInks = "";
var iLength = activeDocument.inkList.length;
for (var i = 0; i < iLength; i++) {
 sInks += docRef.inkList[i].name;
 sInks += "\r\t";
 sInks += "频率 = " + docRef.inkList[i].inkInfo.frequency;
 sInks += "\r\t";
 sInks += "密度 = " + docRef.inkList[i].inkInfo.density;
 sInks += "\r";
}

var textRef = docRef.textFrames.add();
textRef.contents = sInks;
textRef.top = 600;
textRef.left = 200;

redraw();
```
