---
title: TabStopInfo
---
# TabStopInfo

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.tabStops`

#### 描述

关于 [ParagraphAttributes](.././ParagraphAttributes) 对象中制表符的对齐方式、位置和其他详细信息。

---

## 属性

### TabStopInfo.alignment

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.tabStops.alignment`

#### 描述

制表符的对齐方式。

默认值: `Left`

#### 类型

[TabStopAlignment](../scripting-constants#tabstopalignment)

---

### TabStopInfo.decimalCharacter

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.tabStops.decimalCharacter`

#### 描述

用于小数点制表符的字符。

默认值: `.`

#### 类型

字符串

---

### TabStopInfo.leader

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.tabStops.leader`

#### 描述

制表符的前导点字符。

#### 类型

字符串

---

### TabStopInfo.position

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.tabStops.position`

#### 描述

制表符的位置，以点为单位表示。

默认值: 0.0

#### 类型

数字 (双精度)

---

### TabStopInfo.typename

`app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.tabStops.typename`

#### 描述

对象的类名。

#### 类型

字符串; 只读。

---

## 示例

### 显示制表符信息

```javascript
// 显示当前文档中每个文本框中的制表符信息（如果有）。

var docRef = app.activeDocument;
var sData = "找到的制表符 \\r制表符前导符\t\t制表符位置\r";
var textRef = docRef.textFrames;

for( var i=0 ; i < textRef.length; i++ ) {
 // 获取文本框中的所有段落
 var paraRef = textRef[i].paragraphs;

 for ( p=0 ; p < paraRef.length ; p++ ) {
 // 获取段落中所有文本范围的段落属性
 var attrRef = paraRef[p].paragraphAttributes;
 var tabRef = attrRef.tabStops;

 if ( tabRef.length > 0 ) {
 for(var t=0; t<tabRef.length; t++){
 sData += "\t" + tabRef[t].leader + "\t\t";
 sData += "\t\t" + tabRef[t].position + "\r";
 } // end for
 } // end if
 } // end for
} // end for

var newTF = docRef.textFrames.add();
newTF.contents = sData;
newTF.top = 400;
newTF.left = 100; redraw();
```
