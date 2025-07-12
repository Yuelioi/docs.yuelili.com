---
title: 偏好设置
---
# Preferences 对象

`app.preferences`

#### 描述

Preferences 对象提供了一种简单的方式来管理 AE 的内部偏好设置，例如在 AE 的偏好设置菜单中找到的设置。这些设置保存在 After Effects 的偏好设置文件中，并且在应用程序会话之间是持久的。

偏好设置通过文件中的部分（section）和键（key）来标识，每个键名都与一个值相关联。

在偏好设置文件中，部分名称用括号和引号括起来，键名列在部分名称下方的引号中。所有值都是字符串。

您可以使用此对象创建新的偏好设置，也可以访问现有的偏好设置。

从版本 12/CC 开始，偏好设置和设置方法现在接受第三个参数，用于指定目标偏好设置文件（如果 Section/Key 不在 "Adobe After Effects $versionNumber.x Prefs.txt" 中）。

如果未传递第三个参数，则使用默认值（`PREFType.PREF_Type_MACHINE_SPECIFIC`），并且 After Effects 会尝试从 "Adobe After Effects $versionNumber.x Prefs.txt" 偏好设置文件中保存/获取。

#### PREFType 枚举

第三个参数是枚举 `PREFType` 值，可以是以下之一：

- `PREF_Type_MACHINE_SPECIFIC`: Adobe After Effects $versionNumber.x Prefs.txt
- `PREF_Type_MACHINE_INDEPENDENT`: Adobe After Effects $versionNumber.x Prefs-indep-general.txt
- `PREF_Type_MACHINE_INDEPENDENT_RENDER`: Adobe After Effects $versionNumber.x Prefs-indep-render.txt
- `PREF_Type_MACHINE_INDEPENDENT_OUTPUT`: Adobe After Effects $versionNumber.x Prefs-indep-output.txt
- `PREF_Type_MACHINE_INDEPENDENT_COMPOSITION`: Adobe After Effects $versionNumber.x Prefs-indep-composition.txt
- `PREF_Type_MACHINE_SPECIFIC_TEXT`: Adobe After Effects $versionNumber.x Prefs-text.txt
- `PREF_Type_MACHINE_SPECIFIC_PAINT`: Adobe After Effects $versionNumber.x Prefs-paint.txt

---

## 函数

### Preferences.deletePref()

`app.preferences.deletePref(sectionName, keyName[, prefType])`

#### 描述

从偏好设置文件中删除一个偏好设置。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `sectionName` | String | 偏好设置部分的名称。 |
| `keyName` | String | 偏好设置的键名。 |
| `prefType` | [`PREFType` 枚举](#preftype-枚举) | 可选。指定使用哪个偏好设置文件。 |

#### 返回

无。

#### 示例

如果您在名为 "Precomp Cropper" 的部分中保存了一个键名为 "trimPrecomps" 的设置，您可以通过以下方式删除该设置：

```javascript
app.preferences.deletePref("Settings_Precomp Cropper", "trimPrecomps");
```

---

### Preferences.getPrefAsBool()

`app.preferences.getPrefAsBool(sectionName, keyName[, prefType])`

#### 描述

从偏好设置文件中检索偏好设置值，并将其解析为布尔值。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `sectionName` | String | 偏好设置部分的名称。 |
| `keyName` | String | 偏好设置的键名。 |
| `prefType` | [`PREFType` 枚举](#preftype-枚举) | 可选。指定使用哪个偏好设置文件。 |

#### 返回

布尔值。

#### 示例

要检索流程图 "默认展开流程图合成" 的偏好设置值：

```javascript
var expandByDefault = app.preferences.getPrefAsBool("Flowchart Settings", "Expand Flowchart Comps by Default");
alert("该设置为: " + expandByDefault);
```

要检索主偏好设置 "Javascript 调试器已启用" 的值：

```javascript
var debuggerEnabled = app.preferences.getPrefAsBool("Main Pref Section v2", "Pref_JAVASCRIPT_DEBUGGER", PREFType.PREF_Type_MACHINE_INDEPENDENT);
alert("该设置为: " + debuggerEnabled);
```

---

### Preferences.getPrefAsFloat()

`app.preferences.getPrefAsFloat(sectionName, keyName[, prefType])`

#### 描述

从偏好设置文件中检索偏好设置值，并将其解析为浮点数。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `sectionName` | String | 偏好设置部分的名称。 |
| `keyName` | String | 偏好设置的键名。 |
| `prefType` | [`PREFType` 枚举](#preftype-枚举) | 可选。指定使用哪个偏好设置文件。 |

#### 返回

浮点数。

---

### Preferences.getPrefAsLong()

`app.preferences.getPrefAsLong(sectionName, keyName[, prefType])`

#### 描述

从偏好设置文件中检索偏好设置值，并将其解析为长整型（数字）。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `sectionName` | String | 偏好设置部分的名称。 |
| `keyName` | String | 偏好设置的键名。 |
| `prefType` | [`PREFType` 枚举](#preftype-枚举) | 可选。指定使用哪个偏好设置文件。 |

#### 返回

长整型。

---

### Preferences.getPrefAsString()

`app.preferences.getPrefAsString(sectionName, keyName[, prefType])`

#### 描述

从偏好设置文件中检索偏好设置值，并将其解析为字符串。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `sectionName` | String | 偏好设置部分的名称。 |
| `keyName` | String | 偏好设置的键名。 |
| `prefType` | [`PREFType` 枚举](#preftype-枚举) | 可选。指定使用哪个偏好设置文件。 |

#### 返回

字符串。

---

### Preferences.havePref()

`app.preferences.havePref(sectionName, keyName[, prefType])`

#### 描述

如果指定的偏好设置项存在且有值，则返回 `true`。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `sectionName` | String | 偏好设置部分的名称。 |
| `keyName` | String | 偏好设置的键名。 |
| `prefType` | [`PREFType` 枚举](#preftype-枚举) | 可选。指定使用哪个偏好设置文件。 |

#### 返回

布尔值。

---

### Preferences.reload()

`app.preferences.reload()`

#### 描述

手动重新加载偏好设置文件。否则，对偏好设置的更改只能在应用程序重新启动后通过脚本访问。

#### 参数

无。

#### 返回

无。

---

### Preferences.savePrefAsBool()

`app.preferences.savePrefAsBool(sectionName, keyName, value[, prefType])`

#### 描述

将偏好设置项保存为布尔值。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `sectionName` | String | 偏好设置部分的名称。 |
| `keyName` | String | 偏好设置的键名。 |
| `value` | Boolean | 新值。 |
| `prefType` | [`PREFType` 枚举](#preftype-枚举) | 可选。指定使用哪个偏好设置文件。 |

#### 返回

无。

---

### Preferences.savePrefAsFloat()

`app.preferences.savePrefAsFloat(sectionName, keyName, value[, prefType])`

#### 描述

将偏好设置项保存为浮点数。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `sectionName` | String | 偏好设置部分的名称。 |
| `keyName` | String | 偏好设置的键名。 |
| `value` | 浮点数值 | 新值。 |
| `prefType` | [`PREFType` 枚举](#preftype-枚举) | 可选。指定使用哪个偏好设置文件。 |

#### 返回

无。

---

### Preferences.savePrefAsLong()

`app.preferences.savePrefAsLong(sectionName, keyName, value[, prefType])`

#### 描述

将偏好设置项保存为长整型。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `sectionName` | String | 偏好设置部分的名称。 |
| `keyName` | String | 偏好设置的键名。 |
| `value` | 长整型值 | 新值。 |
| `prefType` | [`PREFType` 枚举](#preftype-枚举) | 可选。指定使用哪个偏好设置文件。 |

#### 返回

无。

---

### Preferences.savePrefAsString()

`app.preferences.savePrefAsString(sectionName, keyName, value[, prefType])`

#### 描述

将偏好设置项保存为字符串。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `sectionName` | String | 偏好设置部分的名称。 |
| `keyName` | String | 偏好设置的键名。 |
| `value` | String | 新值。 |
| `prefType` | [`PREFType` 枚举](#preftype-枚举) | 可选。指定使用哪个偏好设置文件。 |

#### 返回

无。

---

### Preferences.saveToDisk()

`app.preferences.saveToDisk()`

#### 描述

手动将偏好设置保存到磁盘。否则，对偏好设置的更改只能在应用程序重新启动后通过脚本访问。

#### 参数

无。

#### 返回

无。
