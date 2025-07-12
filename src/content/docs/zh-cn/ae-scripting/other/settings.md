---
title: 设置
---
# 设置对象

`app.settings`

#### 描述

设置对象提供了一种简单的方式来管理第三方脚本的设置。这些设置保存在 After Effects 的主偏好文件中，并在应用程序会话之间持久化。

设置通过文件中的部分和键来标识，每个键名都与一个值相关联。

在设置文件中，部分名称用括号和引号括起来，键名列在部分名称下方的引号中。所有值都是字符串。

您可以使用此对象创建新设置，也可以访问现有设置。

从版本 12/CC 开始，偏好和设置方法现在接受第三个参数，用于指定目标偏好文件（如果部分/键不在主偏好文件中）。有关更多信息，请参阅 [偏好对象](../preferences)。

:::tip

- 如果您想获取或设置 AE 的内部偏好，请参阅 [偏好对象](../preferences)

:::

---

## 函数

### Settings.getSetting()

`app.settings.getSetting(sectionName, keyName[, prefType])`

#### 描述

从偏好文件中检索脚本设置项的值。

:::warning
如果值大于 1999 字节，`getSetting` 将抛出错误（在 AE 15.0.1 中观察到）。
:::

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `sectionName` | 字符串 | 设置部分的名称。 |
| `keyName` | 字符串 | 设置项的键名。 |
| `prefType` | [`PREFType` 枚举](../preferences#preftype-enum) | 可选。指定要使用的偏好文件。 |

#### 返回

字符串。

#### 示例

如果您在名为 "Precomp Cropper" 的部分中保存了一个键名为 "trimPrecomps" 的设置，您可以通过以下方式检索该值：

```javascript
var trimPrecompsSetting = app.settings.getSetting("Precomp Cropper", "trimPrecomps");
alert("设置值为: " + trimPrecompsSetting);
```

---

### Settings.haveSetting()

`app.settings.haveSetting(sectionName, keyName[, prefType])`

#### 描述

如果指定的脚本设置项存在且有值，则返回 `true`。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `sectionName` | 字符串 | 设置部分的名称。 |
| `keyName` | 字符串 | 设置项的键名。 |
| `prefType` | [`PREFType` 枚举](../preferences#preftype-enum) | 可选。指定要使用的偏好文件。 |

#### 返回

布尔值。

---

### Settings.saveSetting()

`app.settings.saveSetting(sectionName, keyName, value[, prefType])`

#### 描述

保存脚本设置项的值。

:::warning
如果值大于 1999 字节，`saveSetting` 将抛出错误（在 AE 15.0.1 中观察到）。
:::

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `sectionName` | 字符串 | 设置部分的名称。 |
| `keyName` | 字符串 | 设置项的键名。 |
| `value` | 字符串 | 新值。 |
| `prefType` | [`PREFType` 枚举](../preferences#preftype-enum) | 可选。指定要使用的偏好文件。 |

#### 返回

无。

#### 示例

如果您想为名为 "Precomp Cropper" 的脚本保存一个名为 "trimPrecomps" 的设置，您可以通过以下方式保存该设置：

```javascript
var trimPrecompsSetting = true;
app.settings.saveSetting("Precomp Cropper", "trimPrecomps", trimPrecompsSetting);
```

请注意，设置将保存为字符串。如果需要，您稍后可能需要将其解析为布尔值。
