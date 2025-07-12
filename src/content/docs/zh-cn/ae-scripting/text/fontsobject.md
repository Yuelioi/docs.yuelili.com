---
title: 字体组对象
---
# 字体组对象

`app.fonts`

:::note
该方法添加于 After Effects 24.0
:::

#### 描述

字体对象提供了关于设备上当前字体生态系统的信息。

After Effects 维护了一个内部字体代理，指向字体生态系统中枚举的真实字体。随着字体生态系统中字体的添加和移除，这些内部字体代理也会同步添加和移除。

我们通过代理 [Font 对象](../fontobject) 报告的属性是从字体文件本身获得的数据，这些数据当然会根据字体技术和类型的不同而有所变化。在这里无法描述所有可能的有趣变化和由此带来的问题，一般来说，假设一种字体类型或技术的行为和属性适用于所有其他字体类型和技术是不明智的——答案总是“视情况而定”。

[Font 对象](../fontobject) 是对这些内部字体代理的软引用，因此不足以保持内部字体代理的存活。如果内部字体代理被移除，引用的 [Font 对象](../fontobject) 将在任何属性引用时抛出无效异常。

在项目打开时，以及其他一些情况下，可能会发生持久化数据中引用的字体在当前字体生态系统中找不到的情况。在这些情况下，将创建一个内部字体代理，其中包含所需的属性，例如 PostScript 名称，并将为 [isSubstitute](../fontobject#fontobjectissubstitute) 返回 `true`。将有一个底层的真实字体被选择来支持这个内部字体代理，但我们不会透露它是什么，也无法影响这个选择。

继续使用创建的替代字体进行打开过程，将尝试从 Creative Cloud Adobe Fonts 同步匹配的字体。这是一个异步活动，项目通常会在从 Adobe Fonts 下载任何字体之前完成打开并准备使用。根据同步的字体数量，它们可能会在不同的时间安装。无法禁用此尝试。

在安装新的真实字体后，将对未完成的替代字体列表进行评估，以查看是否存在一个真实字体可以有效地替换它——目前只需要 PostScript 名称匹配——如果找到一个，项目中对替代字体的所有引用将自动替换为新安装的字体。

---

## 属性

### FontsObject.allFonts

`app.fonts.allFonts`

#### 描述

当前系统上所有可用字体的列表。

它们被分组为所谓的家族组，这些组是 [Font 对象](../fontobject) 的数组。

组的家族名称只是组中任何 [Font 对象](../fontobject) 的 [familyName](../fontobject#fontobjectfamilyname)。

一个字体组的家族名称不保证与其他字体组具有唯一的名称——分组由多个因素决定，包括 [FontObject.technology](../fontobject#fontobjecttechnology) 和 [FontObject.writingScripts](../fontobject#fontobjectwritingscripts) 的返回值。

此外，完全允许多个字体具有相同的 PostScript 名称，尽管只有一个具有相同的（PostScript 名称、技术、主要书写脚本）元组。在真正重复的情况下，返回哪个字体以及哪个字体被抑制是未定义的。

家族组和组中的 [Font 对象](../fontobject) 根据字符面板下拉菜单中的“以英文显示字体名称”设置进行排序。如果设置为 `true`，则使用 [familyName](../fontobject#fontobjectfamilyname) 和 [styleName](../fontobject#fontobjectstylename) 属性，否则使用 [nativeFamilyName](../fontobject#fontobjectnativefamilyname) 和 [nativeStyleName](../fontobject#fontobjectnativestylename) 属性。

[Font 对象](../fontobject) 如果 [isSubstitute](../fontobject#fontobjectissubstitute) 返回 `true`，则始终作为单独的家族组排序到最后。

#### 类型

[Font 对象](../fontobject) 的数组的数组；只读。

#### 示例

此示例将选择第一个返回的字体家族数组。

```javascript
// 获取系统上第一个可用的字体家族组
var firstFontGroup = app.fonts.allFonts[0];

// 获取该字体家族的第一个样式
var firstFontFamilyName = firstFontGroup[0].familyName;
var firstFamilyStyle = firstFontGroup[0].styleName;

alert(firstFontFamilyName+" "+firstFamilyStyle);
```

---

### FontsObject.favoriteFontFamilyList

`app.fonts.favoriteFontFamilyList`

:::note
该方法添加于 After Effects 24.6
:::

#### 描述

提供对字符面板和属性面板中显示的收藏列表的访问。要设置收藏列表，只需提供一个基于 [familyName](../fontobject#fontobjectfamilyname) 的（未排序的）字符串数组。要清除列表，只需分配一个空数组。

#### 类型

字符串数组；可读写。

---

### FontsObject.fontsDuplicateByPostScriptName

`app.fonts.fontsDuplicateByPostScriptName`

:::note
该方法添加于 After Effects 24.6
:::

#### 描述

多个 [Font 对象](../fontobject) 返回相同的 [postScriptName](../fontobject#fontobjectpostscriptname) 是完全合法且常见的，但由于这有时会导致在使用 [TextDocument.font](../textdocument#textdocumentfont) 或 [CharacterRange 对象](../characterrange) 的 `.font` 属性时对实际使用的 [Font 对象](../fontobject) 产生混淆，此属性既用于揭示存在的重复项，也用于揭示它们的相对顺序。

这将返回一个数组，其中每个元素是一个 [Font 对象](../fontobject) 的数组，其中第 0 个元素的 [Font 对象](../fontobject) 被视为给定 PostScript 名称的主要 [Font 对象](../fontobject)。

#### 类型

[Font 对象](../fontobject) 的数组的数组；只读。

---

### FontsObject.fontServerRevision

`app.fonts.fontServerRevision`

:::note
该方法添加于 After Effects 24.2
:::

#### 描述

返回一个无符号数字，表示字体环境的当前修订版本。

当字体环境中发生任何会改变 [FontsObject.allFonts](#fontsobjectallfonts) 返回的 [Font 对象](../fontobject) 的内容、属性或顺序的事情时，修订版本会增加。

其中包括：在字体环境中安装或移除字体、打开或关闭带有替代字体的项目、导致创建自定义可变字体实例，以及更改字符面板下拉菜单中的“以英文显示字体名称”设置。

#### 类型

浮点值；只读。

#### 示例

```javascript
var fsRev = app.fonts.fontServerRevision;
alert(fsRev);
```

---

### FontsObject.fontsWithDefaultDesignAxes

`app.fonts.fontsWithDefaultDesignAxes`

#### 描述

返回一个可变 [Font 对象](../fontobject) 的数组，每个对象使用唯一的字体字典，并具有其设计轴的默认值。此 API 是一种快速过滤每个已安装可变字体的唯一实例的便捷方法。

#### 类型

[Font 对象](../fontobject) 的数组；只读。

#### 示例

```javascript
var variableFontList = app.fonts.fontsWithDefaultDesignAxes;
alert(variableFontList.length);
```

---

### FontsObject.freezeSyncSubstitutedFonts

`app.fonts.freezeSyncSubstitutedFonts`

:::note
该方法添加于 After Effects 24.6
:::

#### 描述

当项目打开时，如果本地字体环境中找不到一个或多个字体，将启动与 Adobe Fonts 的 *同步* 过程，以查看是否可以激活并安装一个或多个字体。

默认情况下，这是自动发生的——此属性将禁用此行为。

:::warning
决定 Adobe Fonts 是否有匹配字体的规则完全基于 PostScript 名称。对于某些可变字体，由于对哪个字体具有哪个命名实例的模糊性，可能会在激活期间安装多个字面（Regular/Italic）。安装的字体是否是有效替换由 [FontsObject.substitutedFontReplacementMatchPolicy](#fontsobjectsubstitutedfontreplacementmatchpolicy) 控制。
:::

#### 类型

布尔值；可读写。其中之一：

- `false` 是默认值——可能会尝试从 Adobe Fonts 同步。
- `true` 表示不会尝试同步或安装。

---

### FontsObject.missingOrSubstitutedFonts

`app.fonts.missingOrSubstitutedFonts`

#### 描述

当前项目中所有缺失或替代字体的列表。

:::tip
替代字体是在项目打开时已经缺失的字体。缺失字体是在项目打开时（例如字体被卸载）丢失的字体。
:::

#### 类型

[Font 对象](../fontobject) 的数组；只读。

---

### FontsObject.mruFontFamilyList

`app.fonts.mruFontFamilyList`

:::note
该方法添加于 After Effects 24.6
:::

#### 描述

提供对字符面板和属性面板中显示的最近使用（MRU）列表的访问。要设置 MRU，只需提供一个基于 [familyName](../fontobject#fontobjectfamilyname) 的（未排序的）字符串数组。要清除列表，只需分配一个空数组。

#### 类型

字符串数组；可读写。

---

### FontsObject.substitutedFontReplacementMatchPolicy

`app.fonts.substitutedFontReplacementMatchPolicy`

:::note
该方法添加于 After Effects 24.6
:::

#### 描述

控制用于确定哪些字体被视为自动替换替代 [Font 对象](../fontobject) 的匹配规则。

#### 类型

`SubstitutedFontReplacementMatchPolicy` 枚举值；可读写。其中之一：

- `SubstitutedFontReplacementMatchPolicy.POSTSCRIPT_NAME` 是默认值；任何具有相同 PostScript 名称的 [Font 对象](../fontobject) 都是替代 [Font 对象](../fontobject) 的有效候选者。
- `SubstitutedFontReplacementMatchPolicy.CTFI_EQUAL` 要求替代 [Font 对象](../fontobject) 的以下属性必须匹配才能被视为有效候选者：
- [postScriptName](../fontobject#fontobjectpostscriptname)
- [technology](../fontobject#fontobjecttechnology)
- [writingScripts](../fontobject#fontobjectwritingscripts)（主要）
- [designVector](../fontobject#fontobjectdesignvector)
- `SubstitutedFontReplacementMatchPolicy.DISABLED` 表示没有 [Font 对象](../fontobject) 是替代 [Font 对象](../fontobject) 的可接受替换。

---

## 函数

### FontsObject.getCTScriptForString()

`app.fonts.getCTScriptForString(charString, preferredCTScript)`

:::note
该方法添加于 After Effects (Beta) 25.0，并且在 Beta 期间可能会发生变化。
:::

#### 描述

此函数将返回一个通用对象数组，描述范围内的字符数量以及分配给它们的 `CTScript` 枚举。有关 `CTScript` 枚举值的完整列表，请参阅 [FontObject.writingScripts](../fontobject#fontobjectwritingscripts)。

如果一个字符被认为包含在一个或多个 `CTScript` 值中，第二个参数 `preferredCTScript` 指定的值将打破平局。

```javascript
var scriptsV = app.fonts.getCTScriptForString("ABヂ", CTScript.CT_ROMAN_SCRIPT);
var str = "[0] chars:" + scriptsV[0].chars + // 2
 " ctScript:" + getEnumAsString(scriptsV[0].ctScript) +
 "\n[1] chars:" + scriptsV[1].chars + // 1
 " ctScript:" + getEnumAsString(scriptsV[1].ctScript);
alert(str);
```

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `charString` | 字符串 | 要检查的字符。如果为空，将返回一个空数组。 |
| `preferredCTScript` | `CTScript` 枚举 | 首选的 CT 脚本 |

#### 返回

通用对象数组；

- 键 `chars` 将设置为范围内的字符数量。
- 键 `ctScript` 将设置为适用于范围内字符的 `CTScript`。

—

### FontsObject.getDefaultFontForCTScript()

`app.fonts.getDefaultFontForCTScript(ctScript)`

:::note
该方法添加于 After Effects (Beta) 25.0，并且在 Beta 期间可能会发生变化。
:::

#### 描述

此函数将返回基于 `CTScript` 映射的默认字体的 [Font 对象](../fontobject) 实例。

After Effects 在键入或应用字体时使用这些映射，当它发现字体不包含某个字符的字形时。在这种情况下，它将尝试将字符映射到 `CTScript` 值，然后使用此默认映射选择一个可能具有该字符字形的替代字体。

此机制也用于脚本中的文本和字体，从而提供了一种方法来暴露哪些字体将用于哪些 `CTScript` 值。

不保证返回的内容支持映射到 `CTScript` 的所有或任何 Unicode 字符。

```javascript
var font = app.fonts.getDefaultFontForCTScript(CTScript.CT_JAPANESE_SCRIPT);
```

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `ctScript` | `CTScript` 枚举 | 要获取默认字体的对应 CTScript。 |

#### 返回

[Font 对象](../fontobject)

---

### FontsObject.getFontByID()

`app.fonts.getFontByID(fontID)`

:::note
该方法添加于 After Effects 24.2
:::

#### 描述

此函数将基于之前找到的字体的 ID 返回一个 [Font 对象](../fontobject) 实例。

如果找不到匹配的字体，它将返回 undefined。这可能发生在未知 ID 或原始字体已从字体环境中移除的情况下。

```javascript
var font1 = app.fonts.allFonts[0][0];
var font2 = app.fonts.getFontByID(font1.fontID);
alert(font1.fontID == font2.fontID);
```

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| fontID | 整数 | 字体的 ID。 |

#### 返回

[Font 对象](../fontobject)，如果找不到该 ID 的字体，则返回 undefined。

---

### FontsObject.getFontsByFamilyNameAndStyleName()

`app.fonts.getFontsByFamilyNameAndStyleName(familyName, styleName)`

#### 描述

此函数将基于字体的家族名称和样式名称返回一个 [Font 对象](../fontobject) 数组。如果找不到合适的字体，它将返回一个空数组。

:::tip
如果存在多个相同字体的副本，返回的数组长度可能大于 1。
:::

```javascript
var fontList = app.fonts.getFontsByFamilyNameAndStyleName("Abolition", "Regular")
alert(fontList.length);
```

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| FamilyName | 字符串 | 字体的家族名称。 |
| StyleName | 字符串 | 字体的样式名称。 |

#### 返回

[Font 对象](../fontobject) 的数组；只读。

---

### FontsObject.getFontsByPostScriptName()

`app.fonts.getFontsByPostScriptName(postscriptName)`

#### 描述

此函数将根据已发现字体的PostScript名称返回一个[字体对象](../fontobject)数组。

多个[字体对象](../fontobject)共享相同PostScript名称是完全有效的，它们的顺序由字体环境中枚举的顺序决定。当设置[TextDocument.fontObject](../textdocument#textdocumentfontobject)属性时，将使用索引`[0]`处的条目。

此外，此API对于可变字体有一个特殊属性。如果找不到与请求的PostScript名称匹配的[字体对象](../fontobject)，但发现存在与请求的PostScript名称前缀匹配的可变字体，则会请求此可变字体实例创建一个匹配的[字体对象](../fontobject)。这是唯一会返回调用此方法之前不存在的实例的情况。

如果找不到匹配的字体，将返回一个空数组。

```javascript
var fontList = app.fonts.getFontsByPostScriptName("Abolition")
alert(fontList.length);
```

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| postscriptName | 字符串 | 字体的PostScript名称。 |

#### 返回值

[字体对象](../fontobject)数组；只读。

---

### FontsObject.pollForAndPushNonSystemFontFoldersChanges()

`app.fonts.pollForAndPushNonSystemFontFoldersChanges()`

:::note
此功能在After Effects 24.6版本中添加
:::

#### 描述

在*系统字体文件夹*中添加和删除字体文件会被自动识别和处理，无需用户干预来更新字体环境。非系统字体文件夹不会自动处理，因此在这些文件夹中添加和删除字体文件直到After Effects重启后才会被识别。

此函数将触发对已知非系统字体文件夹的检查，如果识别到有更改，将安排异步更新字体环境来处理此更改。

After Effects已知的非系统字体文件夹如下：

```text
Windows: <系统驱动器>:\Program Files\Common Files\Adobe\Fonts

Mac: /Library/Application Support/Adobe/Fonts
```

#### 返回值

布尔值；以下之一：

- `false` 如果未发现字体环境的更改。
- `true` 如果检测到字体环境的更改并安排了异步更新来处理它。此状态将在更新处理后清除，此时[FontsObject.fontServerRevision](#fontsobjectfontserverrevision)将返回一个递增的值。

—

### FontsObject.setDefaultFontForCTScript()

`app.fonts.setDefaultFontForCTScript(ctScript, font)`

:::note
此功能在After Effects (Beta) 25.0版本中添加，在Beta期间可能会发生变化。
:::

#### 描述

此函数将根据`CTScript`参数设置一个[字体对象](../fontobject)实例的映射。

After Effects在输入或应用字体时使用这些映射，当发现字体不包含给定字符的字形时。在这种情况下，它会尝试将字符映射到`CTScript`值，然后使用此默认映射选择一个可能有该字符字形的替代字体。

可变字体不能作为默认字体，会导致抛出异常。

指定的字体不需要包含映射到`CTScript`的任何或所有字符的字形。

此机制也用于脚本中的文本和字体，从而提供一种方式来暴露哪些字体将用于哪些`CTScript`值（参见[FontsObject.getDefaultFontForCTScript()](#fontsobjectgetdefaultfontforctscript)）。

分配给`CTScript.CT_ROMAN_SCRIPT`的字体是在重置字符样式后用于重新初始化字符面板的字体。

要将特定`CTScript`的默认值重置为应用程序启动时的值，只需传入`null`。

```javascript
var font = app.fonts.getFontsByPostScriptName("MyriadPro-Regular")[0];
var ret = app.fonts.setDefaultFontForCTScript(CTScript.CT_ROMAN_SCRIPT, font);
alert("set:" + ret);
```

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `ctScript` | `CTScript` 枚举 | 要映射字体的CTScript |
| `font` | [字体对象](../fontobject) | 要映射的字体。如果为`null`，则重置当前映射。 |

#### 返回值

布尔值；以下之一：

- `false` 如果指定的映射与当前映射相同。
- `true` 如果指定的映射与当前映射不同。
