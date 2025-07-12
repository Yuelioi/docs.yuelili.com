---
title: 首选项
---
# 首选项

`app.Preferences`

#### 描述

指定 AutoCAD、FreeHand、PDF 和 Photoshop 文件的首选选项。

---

## 属性

### Preferences.AutoCADFileOptions

`app.preferences.AutoCADFileOptions`

#### 描述

打开或放置 AutoCAD 文件时使用的选项。

#### 类型

[OpenOptionsAutoCAD](.././OpenOptionsAutoCAD); 只读。

---

### Preferences.FreeHandFileOptions

`app.preferences.FreeHandFileOptions`

#### 描述

打开或放置 FreeHand 文件时使用的选项。

#### 类型

[OpenOptionsFreeHand](.././OpenOptionsFreeHand); 只读。

---

### Preferences.parent

`app.preferences.parent`

#### 描述

此对象的父对象。

#### 类型

object; 只读。

---

### Preferences.PDFFileOptions

`app.preferences.PDFFileOptions`

#### 描述

打开或放置 PDF 文件时使用的选项。

#### 类型

[PDFFileOptions](.././PDFFileOptions); 只读。

---

### Preferences.PhotoshopFileOptions

`app.preferences.PhotoshopFileOptions`

#### 描述

打开或放置 Photoshop 文件时使用的选项。

#### 类型

[PhotoshopFileOptions](.././PhotoshopFileOptions); 只读。

---

### Preferences.typename

`app.preferences.typename`

#### 描述

引用对象的类名。

#### 类型

string; 只读。

---

## 方法

### Preferences.getBooleanPreference

`app.preferences.getBooleanPreference(key)`

#### 描述

获取给定应用程序首选项的布尔值。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `key` | String | 要获取的首选项键 |

#### 返回值

Boolean

---

### Preferences.getIntegerPreference

`app.preferences.getIntegerPreference(key)`

#### 描述

获取给定应用程序首选项的整数值。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `key` | String | 要获取的首选项键 |

#### 返回值

Integer

---

### Preferences.getRealPreference

`app.preferences.getRealPreference(key)`

#### 描述

获取给定应用程序首选项的实数值。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `key` | String | 要获取的首选项键 |

#### 返回值

Real

---

### Preferences.getStringPreference

`app.preferences.getStringPreference(key)`

#### 描述

获取给定应用程序首选项的字符串值。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `key` | String | 要获取的首选项键 |

#### 返回值

String

---

### Preferences.removePreference

`app.preferences.removePreference(key)`

#### 描述

删除给定的应用程序首选项。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `key` | String | 要获取的首选项键 |

#### 返回值

无。

---

### Preferences.setBooleanPreference

`app.preferences.setBooleanPreference(key, value)`

#### 描述

设置给定应用程序首选项的布尔值。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `key` | String | 要设置的首选项键 |
| `value` | Boolean | 要设置的值 |

#### 返回值

无。

---

### Preferences.setIntegerPreference

`app.preferences.setIntegerPreference(key, value)`

#### 描述

设置给定应用程序首选项的整数值。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `key` | String | 要设置的首选项键 |
| `value` | Integer | 要设置的值 |

#### 返回值

无。

---

### Preferences.setRealPreference

`app.preferences.setRealPreference(key, value)`

#### 描述

设置给定应用程序首选项的实数值。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `key` | String | 要设置的首选项键 |
| `value` | Double | 要设置的值 |

#### 返回值

无。

---

### Preferences.setStringPreference

`app.preferences.setStringPreference(key, value)`

#### 描述

设置给定应用程序首选项的字符串值。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `key` | String | 要设置的首选项键 |
| `value` | String | 要设置的值 |

#### 返回值

无。
