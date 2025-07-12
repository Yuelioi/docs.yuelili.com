---
title: fontobject
---
# 字体对象

:::note
该方法添加于 After Effects 24.0
:::

#### 描述

字体对象提供了关于特定字体的信息，包括所使用的字体技术，帮助在系统中安装了多个共享相同Postscript名称的字体时进行区分。

这些API中的大多数只是返回字体数据文件本身包含的信息，更多信息请参阅字体数据文件。

---

## 属性

### FontObject.designAxesData

`app.fonts.allFonts[0][0].designAxesData`

#### 描述

返回一个对象数组，包含字体的设计轴数据。
每个对象由轴`name`、`tag`、`min`值和`max`值组成。

:::tip
对于非可变字体，将返回undefined。
:::

#### 示例

此示例将选择第一个返回的字体家族数组。

```javascript
// 获取系统中第一个可用的可变字体
var firstVariableFont = fontsWithDefaultDesignAxes[0];
var axesData = firstVariableFont.designAxesData;

// 获取该字体的第一个设计轴
var firstAxis = axesData[0];

alert(firstAxis.name+"\n"+firstAxis.tag+"\n"+firstAxis.min+"\n"+firstAxis.max);
```

#### 类型

对象数组; 只读.

---

### FontObject.designVector

`app.fonts.fontsWithDefaultDesignAxes[0].designVector`

#### 描述

对于可变字体，将返回一个有序数组，其长度与字体定义的设计轴数量匹配。

:::tip
对于非可变字体，将返回undefined。
:::

#### 类型

浮点值数组; 只读.

---

### FontObject.familyName

`app.fonts.allFonts[0][0].familyName`

#### 描述

字体的家族名称，使用ASCII字符集。

#### 类型

字符串; 只读.

---

### FontObject.familyPrefix

`app.fonts.fontsWithDefaultDesignAxes[0].familyPrefix`

#### 描述

可变字体的家族前缀。例如，PostScript名称“SFPro-Bold”的家族是“SFPro”。

:::tip
对于非可变字体，将返回undefined。
:::

#### 类型

字符串; 只读.

---

### FontObject.fontID

`app.fonts.allFonts[0][0].fontID`

:::note
该方法添加于 After Effects 24.2
:::

#### 描述

创建FontObject实例时分配的唯一编号，值大于或等于1。在应用程序会话期间不会更改，但在应用程序的后续启动中可能会不同。

可用于比较两个FontObject实例，以查看它们是否引用相同的底层原生字体实例。

可以使用[getFontByID](../fontsobject#fontsobjectgetfontbyid)通过fontID查找FontObjects。

#### 类型

整数; 只读.

---

### FontObject.fullName

`app.fonts.allFonts[0][0].fullName`

#### 描述

字体的全名，使用ASCII字符集。通常由家族名称和样式名称组成。

#### 类型

字符串; 只读.

---

### FontObject.hasDesignAxes

`app.fonts.allFonts[0][0].hasDesignAxes`

#### 描述

如果字体是可变字体，则返回`true`。

#### 类型

布尔值; 只读.

---

### FontObject.isFromAdobeFonts

`app.fonts.allFonts[0][0].isFromAdobeFonts`

#### 描述

如果字体来自Adobe Fonts，则返回`true`。

#### 类型

布尔值; 只读.

---

### FontObject.isSubstitute

`app.fonts.allFonts[0][0].isSubstitute`

#### 描述

当此字体实例表示在项目打开时缺失的字体引用时，返回`true`。

#### 类型

布尔值; 只读.

---

### FontObject.location

`app.fonts.allFonts[0][0].location`

#### 描述

字体文件在系统中的位置。

:::warning
不保证所有字体类型都会返回；某些字体的返回值可能为空字符串。
:::

#### 类型

字符串; 只读.

---

### FontObject.nativeFamilyName

`app.fonts.allFonts[0][0].nativeFamilyName`

#### 描述

字体的原生家族名称，使用完整的16位Unicode。对于非拉丁字体，通常与[FontObject.familyName](#fontobjectfamilyname)返回的值不同。

#### 类型

字符串; 只读.

---

### FontObject.nativeFullName

`app.fonts.allFonts[0][0].nativeFullName`

#### 描述

字体的原生全名，使用完整的16位Unicode。对于非拉丁字体，通常与[FontObject.fullName](#fontobjectfullname)返回的值不同。

#### 类型

字符串; 只读.

---

### FontObject.nativeStyleName

`app.fonts.allFonts[0][0].nativeStyleName`

#### 描述

字体的原生样式名称，使用完整的16位Unicode。对于非拉丁字体，通常与[FontObject.styleName](#fontobjectstylename)返回的值不同。

#### 类型

字符串; 只读.

---

### FontObject.postScriptName

`app.fonts.allFonts[0][0].postScriptName`

#### 描述

字体的PostScript名称。

#### 类型

字符串; 只读.

---

### FontObject.styleName

`app.fonts.allFonts[0][0].styleName`

#### 描述

字体的样式名称，使用ASCII字符集。

#### 类型

字符串; 只读.

---

### FontObject.technology

`app.fonts.allFonts[0][0].technology`

#### 描述

字体所使用的技术。

#### 类型

`CTFontTechnology`枚举值; 只读. 可能的值包括：

- `CTFontTechnology.CT_TYPE1_FONT`
- `CTFontTechnology.CT_TRUETYPE_FONT`
- `CTFontTechnology.CT_CID_FONT`
- `CTFontTechnology.CT_BITMAP_FONT`
- `CTFontTechnology.CT_ATC_FONT`
- `CTFontTechnology.CT_TYPE3_FONT`
- `CTFontTechnology.CT_SVG_FONT`
- `CTFontTechnology.CT_ANYTECHNOLOGY`

---

### FontObject.type

`app.fonts.allFonts[0][0].type`

#### 描述

字体的内部类型。

#### 类型

`CTFontType`枚举值; 只读. 可能的值包括：

- `CTFontType.CT_TYPE1_FONTTYPE`
- `CTFontType.CT_TRUETYPE_FONTTYPE`
- `CTFontType.CT_CID_FONTTYPE`
- `CTFontType.CT_ATC_FONTTYPE`
- `CTFontType.CT_BITMAP_FONTTYPE`
- `CTFontType.CT_OPENTYPE_CFF_FONTTYPE`
- `CTFontType.CT_OPENTYPE_CID_FONTTYPE`
- `CTFontType.CT_OPENTYPE_TT_FONTTYPE`
- `CTFontType.CT_TYPE3_FONTTYPE`
- `CTFontType.CT_SVG_FONTTYPE`

---

### FontObject.version

`app.fonts.allFonts[0][0].version`

#### 描述

字体的版本号。

#### 类型

字符串; 只读.

---

### FontObject.writingScripts

`app.fonts.allFonts[0][0].writingScripts`

#### 描述

字体支持的字符集。

#### 类型

`CTScript`枚举值数组; 只读. 可能的值包括：

- `CTScript.CT_ROMAN_SCRIPT`
- `CTScript.CT_JAPANESE_SCRIPT`
- `CTScript.CT_TRADITIONALCHINESE_SCRIPT`
- `CTScript.CT_KOREAN_SCRIPT`
- `CTScript.CT_ARABIC_SCRIPT`
- `CTScript.CT_HEBREW_SCRIPT`
- `CTScript.CT_GREEK_SCRIPT`
- `CTScript.CT_CYRILLIC_SCRIPT`
- `CTScript.CT_RIGHTLEFT_SCRIPT`
- `CTScript.CT_DEVANAGARI_SCRIPT`
- `CTScript.CT_GURMUKHI_SCRIPT`
- `CTScript.CT_GUJARATI_SCRIPT`
- `CTScript.CT_ORIYA_SCRIPT`
- `CTScript.CT_BENGALI_SCRIPT`
- `CTScript.CT_TAMIL_SCRIPT`
- `CTScript.CT_TELUGU_SCRIPT`
- `CTScript.CT_KANNADA_SCRIPT`
- `CTScript.CT_MALAYALAM_SCRIPT`
- `CTScript.CT_SINHALESE_SCRIPT`
- `CTScript.CT_BURMESE_SCRIPT`
- `CTScript.CT_KHMER_SCRIPT`
- `CTScript.CT_THAI_SCRIPT`
- `CTScript.CT_LAOTIAN_SCRIPT`
- `CTScript.CT_GEORGIAN_SCRIPT`
- `CTScript.CT_ARMENIAN_SCRIPT`
- `CTScript.CT_SIMPLIFIEDCHINESE_SCRIPT`
- `CTScript.CT_TIBETAN_SCRIPT`
- `CTScript.CT_MONGOLIAN_SCRIPT`
- `CTScript.CT_GEEZ_SCRIPT`
- `CTScript.CT_EASTEUROPEANROMAN_SCRIPT`
- `CTScript.CT_VIETNAMESE_SCRIPT`
- `CTScript.CT_EXTENDEDARABIC_SCRIPT`
- `CTScript.CT_KLINGON_SCRIPT`
- `CTScript.CT_EMOJI_SCRIPT`
- `CTScript.CT_ROHINGYA_SCRIPT`
- `CTScript.CT_JAVANESE_SCRIPT`
- `CTScript.CT_SUNDANESE_SCRIPT`
- `CTScript.CT_LONTARA_SCRIPT`
- `CTScript.CT_SYRIAC_SCRIPT`
- `CTScript.CT_TAITHAM_SCRIPT`
- `CTScript.CT_BUGINESE_SCRIPT`
- `CTScript.CT_BALINESE_SCRIPT`
- `CTScript.CT_CHEROKEE_SCRIPT`
- `CTScript.CT_MANDAIC_SCRIPT`
- `CTScript.CT_VAI_SCRIPT`
- `CTScript.CT_THAANA_SCRIPT`
- `CTScript.CT_BRAVANESE_SCRIPT`
- `CTScript.CT_BRAHMI_SCRIPT`
- `CTScript.CT_CARIAN_SCRIPT`
- `CTScript.CT_CYPRIOT_SCRIPT`
- `CTScript.CT_EGYPTIAN_SCRIPT`
- `CTScript.CT_IMPERIALARAMAIC_SCRIPT`
- `CTScript.CT_PAHLAVI_SCRIPT`
- `CTScript.CT_PARTHIAN_SCRIPT`
- `CTScript.CT_KHAROSHTHI_SCRIPT`
- `CTScript.CT_LYCIAN_SCRIPT`
- `CTScript.CT_LYDIAN_SCRIPT`
- `CTScript.CT_PHOENICIAN_SCRIPT`
- `CTScript.CT_PERSIAN_SCRIPT`
- `CTScript.CT_SHAVIAN_SCRIPT`
- `CTScript.CT_SUMAKKCUNEIFORM_SCRIPT`
- `CTScript.CT_UGARITIC_SCRIPT`
- `CTScript.CT_GLAGOLITIC_SCRIPT`
- `CTScript.CT_GOTHIC_SCRIPT`
- `CTScript.CT_OGHAM_SCRIPT`
- `CTScript.CT_OLDITALIC_SCRIPT`
- `CTScript.CT_ORKHON_SCRIPT`
- `CTScript.CT_RUNIC_SCRIPT`
- `CTScript.CT_MEROITICCURSIVE_SCRIPT`
- `CTScript.CT_COPTIC_SCRIPT`
- `CTScript.CT_OLCHIKI_SCRIPT`
- `CTScript.CT_SORASOMPENG_SCRIPT`
- `CTScript.CT_OLDHANGUL_SCRIPT`
- `CTScript.CT_LISU_SCRIPT`
- `CTScript.CT_NKO_SCRIPT`
- `CTScript.CT_ADLAM_SCRIPT`
- `CTScript.CT_BAMUM_SCRIPT`
- `CTScript.CT_BASSAVAH_SCRIPT`
- `CTScript.CT_NEWA_SCRIPT`
- `CTScript.CT_NEWTAILU_SCRIPT`
- `CTScript.CT_SCRIPT`
- `CTScript.CT_OSAGE_SCRIPT`
- `CTScript.CT_UCAS_SCRIPT`
- `CTScript.CT_TIFINAGH_SCRIPT`
- `CTScript.CT_KAYAHLI_SCRIPT`
- `CTScript.CT_LAO_SCRIPT`
- `CTScript.CT_TAILE_SCRIPT`
- `CTScript.CT_TAIVIET_SCRIPT`
- `CTScript.CT_DONTKNOW_SCRIPT`

## 函数

### FontObject.hasGlyphsFor()

`app.fonts.allFonts[0][0].hasGlyphsFor(charString)`

:::note
该方法添加于 After Effects (Beta) 25.0，并且在Beta期间可能会发生变化。
:::

#### 描述

字体并不包含所有可能的Unicode范围的字符，此方法为调用者提供了查询字体是否支持一个或多个字符的机会。

如果字体具有`charString`中每个字符的字形，则返回`true`。

字符顺序无关紧要，并且在参数字符串包含多个字符的情况下，无法通过此API确定哪个字符没有字形支持。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `charString` | 字符串 | 将在[字体对象](#font-object)中检查支持的文本。 |

#### 返回

布尔值。

---

### FontObject.hasSameDict()

`app.fonts.fontsWithDefaultDesignAxes[0].hasSameDict(fontObject)`

#### 描述

如果作为参数传递的[字体对象](#font-object)与调用该函数的[字体对象](#font-object)共享相同的可变字体字典，则此函数将返回`true`。

:::tip
只有在可变[字体对象](#font-object)上调用时，并且参数也是可变字体的[字体对象](#font-object)时，才能返回`true`。
:::

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `fontObject` | [字体对象](#font-object) | 要检查的对象 |

#### 返回

布尔值。

---

### FontObject.otherFontsWithSameDict()

`app.fonts.fontsWithDefaultDesignAxes[0].otherFontsWithSameDict(fontObject)`

:::note
此功能在 After Effects (Beta) 25.0 版本中添加，在 Beta 阶段可能发生变更。
:::

#### 描述

当传入一个[字体对象](#font-object)作为参数时，返回与该[字体对象](#font-object)共享相同字体字典的所有[字体对象](#font-object)实例组成的数组。

如果参数不是可变字体，或该可变字体只有一个实例（参数本身），则返回空数组。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `fontObject` | [字体对象](#font-object) | 要检查的对象 |

#### 返回值

[字体对象](#font-object)数组，可能为空。

---

### FontObject.postScriptNameForDesignVector()

`app.fonts.fontsWithDefaultDesignAxes[0].postScriptNameForDesignVector([...vectorValues])`

#### 描述

此函数将返回可变字体针对传入的特定设计向量值所对应的PostScript名称。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `vectorValues` | 浮点数值数组 | 要检查给定可变字体的[FontObject.designVector](#fontobjectdesignvector)的设计向量值。 |

#### 返回值

字符串。
