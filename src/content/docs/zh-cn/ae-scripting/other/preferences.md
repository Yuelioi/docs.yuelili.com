---
title: preferences
---
# Preferences object

`app.preferences`

#### 描述

The Preferences object provides an easy way to manage internal AE preferences, such as you'd find in AE's Preferences menu. These are saved in the After Effects preference files, and are persistent between application sessions.

Preferences are identified by section and key within the file, and each key name is associated with a value.

In the preferences file, section names are enclosed in brackets and quotation marks, and key names are listing in quotation marks below the sectionname. All values are strings.

You can create new preferences with this object, as well as accessing existing preferences.

As of Version 12/CC, preferences and settings methods now take a third argument to specify the target preferences file if Section/Key is not in "Adobe After Effects $versionNumber.x Prefs.txt".

If the third argument is not passed, default value (`PREFType.PREF_Type_MACHINE_SPECIFIC`) is used and After Effects tries to save/get from the "Adobe After Effects $versionNumber.x Prefs.txt" preferences file.

#### PREFType Enum

The third argument is enum `PREFType` value, one of:

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

Deletes a preference from the preference file.

#### 参数

|   参数   |               类型                |               描述               |
| ------------- | --------------------------------- | --------------------------------------- |
| `sectionName` | String                            | The name of a preferences section.      |
| `keyName`     | String                            | The key name of the preference.         |
| `prefType`    | [`PREFType` enum](#preftype-enum) | Optional. Which preference file to use. |

#### 返回

Nothing.

#### 示例

If you have saved a setting named with the key name "trimPrecomps" in a section called "Precomp Cropper", you can delete the setting by:

```javascript
app.preferences.deletePref("Settings_Precomp Cropper", "trimPrecomps");
```

---

### Preferences.getPrefAsBool()

`app.preferences.getPrefAsBool(sectionName, keyName[, prefType])`

#### 描述

Retrieves a preference value from the preferences file, and parses it as a boolean.

#### 参数

|   参数   |               类型                |               描述               |
| ------------- | --------------------------------- | --------------------------------------- |
| `sectionName` | String                            | The name of a preferences section.      |
| `keyName`     | String                            | The key name of the preference.         |
| `prefType`    | [`PREFType` enum](#preftype-enum) | Optional. Which preference file to use. |

#### 返回

Boolean.

#### 示例

To retrieve the value of the Flow Chart "Expand Flowchart Comps by Default" preference:

```javascript
var expandByDefault = app.preferences.getPrefAsBool("Flowchart Settings", "Expand Flowchart Comps by Default");
alert("The setting is: " + expandByDefault);
```

To retrieve the value of the main preference "Javascript Debugger Enabled":

```javascript
var debuggerEnabled = app.preferences.getPrefAsBool("Main Pref Section v2", "Pref_JAVASCRIPT_DEBUGGER", PREFType.PREF_Type_MACHINE_INDEPENDENT);
alert("The setting is: " + debuggerEnabled);
```

---

### Preferences.getPrefAsFloat()

`app.preferences.getPrefAsFloat(sectionName, keyName[, prefType])`

#### 描述

Retrieves a preference value from the preferences file, and parses it as a float.

#### 参数

|   参数   |               类型                |               描述               |
| ------------- | --------------------------------- | --------------------------------------- |
| `sectionName` | String                            | The name of a preferences section.      |
| `keyName`     | String                            | The key name of the preference.         |
| `prefType`    | [`PREFType` enum](#preftype-enum) | Optional. Which preference file to use. |

#### 返回

Float.

---

### Preferences.getPrefAsLong()

`app.preferences.getPrefAsLong(sectionName, keyName[, prefType])`

#### 描述

Retrieves a preference value from the preferences file, and parses it as a long (number).

#### 参数

|   参数   |               类型                |               描述               |
| ------------- | --------------------------------- | --------------------------------------- |
| `sectionName` | String                            | The name of a preferences section.      |
| `keyName`     | String                            | The key name of the preference.         |
| `prefType`    | [`PREFType` enum](#preftype-enum) | Optional. Which preference file to use. |

#### 返回

Long.

---

### Preferences.getPrefAsString()

`app.preferences.getPrefAsString(sectionName, keyName[, prefType])`

#### 描述

Retrieves a preference value from the preferences file, and parses it as a string.

#### 参数

|   参数   |               类型                |               描述               |
| ------------- | --------------------------------- | --------------------------------------- |
| `sectionName` | String                            | The name of a preferences section.      |
| `keyName`     | String                            | The key name of the preference.         |
| `prefType`    | [`PREFType` enum](#preftype-enum) | Optional. Which preference file to use. |

#### 返回

String.

---

### Preferences.havePref()

`app.preferences.havePref(sectionName, keyName[, prefType])`

#### 描述

Returns `true` if the specified preference item exists and has a value.

#### 参数

|   参数   |               类型                |               描述               |
| ------------- | --------------------------------- | --------------------------------------- |
| `sectionName` | String                            | The name of a preferences section.      |
| `keyName`     | String                            | The key name of the preference.         |
| `prefType`    | [`PREFType` enum](#preftype-enum) | Optional. Which preference file to use. |

#### 返回

Boolean.

---

### Preferences.reload()

`app.preferences.reload()`

#### 描述

Reloads the preferences file manually. Otherwise, changes to preferences will only be accessible by scripting after an application restart.

#### 参数

None.

#### 返回

Nothing.

---

### Preferences.savePrefAsBool()

`app.preferences.savePrefAsBool(sectionName, keyName, value[, prefType])`

#### 描述

Saves a preference item as a boolean.

#### 参数

|   参数   |               类型                |               描述               |
| ------------- | --------------------------------- | --------------------------------------- |
| `sectionName` | String                            | The name of a preferences section.      |
| `keyName`     | String                            | The key name of the preference.         |
| `value`       | Boolean                           | The new value.                          |
| `prefType`    | [`PREFType` enum](#preftype-enum) | Optional. Which preference file to use. |

#### 返回

Nothing.

---

### Preferences.savePrefAsFloat()

`app.preferences.savePrefAsFloat(sectionName, keyName, value[, prefType])`

#### 描述

Saves a preference item as a float.

#### 参数

|   参数   |               类型                |               描述               |
| ------------- | --------------------------------- | --------------------------------------- |
| `sectionName` | String                            | The name of a preferences section.      |
| `keyName`     | String                            | The key name of the preference.         |
| `value`       | Floating-point value              | The new value.                          |
| `prefType`    | [`PREFType` enum](#preftype-enum) | Optional. Which preference file to use. |

#### 返回

Nothing.

---

### Preferences.savePrefAsLong()

`app.preferences.savePrefAsLong(sectionName, keyName, value[, prefType])`

#### 描述

Saves a preference item as a long.

#### 参数

|   参数   |               类型                |               描述               |
| ------------- | --------------------------------- | --------------------------------------- |
| `sectionName` | String                            | The name of a preferences section.      |
| `keyName`     | String                            | The key name of the preference.         |
| `value`       | Long value                        | The new value.                          |
| `prefType`    | [`PREFType` enum](#preftype-enum) | Optional. Which preference file to use. |

#### 返回

Nothing.

---

### Preferences.savePrefAsString()

`app.preferences.savePrefAsString(sectionName, keyName, value[, prefType])`

#### 描述

Saves a preference item as a string.

#### 参数

|   参数   |               类型                |               描述               |
| ------------- | --------------------------------- | --------------------------------------- |
| `sectionName` | String                            | The name of a preferences section.      |
| `keyName`     | String                            | The key name of the preference.         |
| `value`       | String                            | The new value.                          |
| `prefType`    | [`PREFType` enum](#preftype-enum) | Optional. Which preference file to use. |

#### 返回

Nothing.

---

### Preferences.saveToDisk()

`app.preferences.saveToDisk()`

#### 描述

Saves the preferences to disk manually. Otherwise, changes to preferences will only be accessible by scripting after an application restart.

#### 参数

None.

#### 返回

Nothing.
