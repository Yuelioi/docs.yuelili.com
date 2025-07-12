---
title: 本地化 ExtendScript 字符串
---
# 本地化 ExtendScript 字符串

本地化是翻译和调整界面的过程，使其看起来像是为特定语言设计的。ExtendScript 允许您本地化脚本用户界面中的字符串。应用程序在启动时根据操作系统提供的当前区域设置选择语言。

对于显示在屏幕上的用户界面部分，您可能希望本地化显示的文本。您可以使用 [全局 localize 函数](#全局-localize-函数) 显式地本地化任何字符串，该函数接受一个包含字符串本地化版本的本地化对象作为参数。

本地化对象是一个 JavaScript 对象字面量，其属性名是区域名称，属性值是本地化的文本字符串。区域名称是标准的语言代码，带有可选的区域标识符。有关语法详细信息，请参阅 [区域名称](#区域名称)。

在此示例中，`msg` 对象包含两个区域的本地化文本字符串。此对象为警告对话框提供文本：

```javascript
msg = { en: "Hello, world", de: "Hallo Welt" };
alert (msg);
```

ExtendScript 将当前区域设置和平台与对象的属性之一匹配，并使用关联的字符串。例如，在德语系统上，属性 `de: "Hallo Welt"` 会被转换为字符串 `"Hallo Welt"`。

---

## 本地化字符串中的变量值

某些本地化字符串需要包含额外的数据，这些数据的位置和顺序可能会根据使用的语言而变化。

您可以在本地化对象的字符串值中包含变量，形式为 `%n`。这些变量在返回的字符串中被替换为 JavaScript 表达式的结果，这些表达式作为 `localize` 函数的附加参数提供。变量 `%1` 对应于第一个附加参数，`%2` 对应于第二个，依此类推。

由于替换发生在选择本地化字符串之后，因此变量值会插入到正确的位置。例如：

```javascript
today = {
 en: "Today is %1/%2.",
 de: "Heute ist der %2.%1."
};
d = new Date();
alert (localize (today, d.getMonth()+1, d.getDate()));
```

---

## 启用自动本地化

ExtendScript 提供了自动本地化功能。启用后，您可以直接将本地化对象指定为任何接受可本地化字符串的属性的值，而无需使用 `localize` 函数。例如：

```javascript
msg = { en: "Yes", de: "Ja", fr: "Oui" };
alert (msg);
```

要使用本地化对象的自动翻译，您必须在脚本中启用本地化，使用以下语句：

```javascript
$.localize = true;
```

`localize` 函数始终执行其翻译，无论 `$.localize` 变量的设置如何；例如：

```javascript
msg = { en: "Yes", de: "Ja", fr: "Oui" };
// 仅在 $.localize=true 时有效
alert (msg);
// 无论 $.localize 的值如何，始终有效
alert ( localize (msg));
```

如果需要在本地化字符串中包含变量，请使用 `localize` 函数。

---

## 区域名称

区域名称是一个标识符字符串，包含 ISO 639 语言标识符，以及可选的 ISO 3166 区域标识符，用下划线分隔。ISO 639 标准定义了一组两字母的语言缩写，例如 `en` 表示英语，`de` 表示德语。

ISO 3166 标准定义了一个区域代码，另一个两字母的标识符，您可以将其附加到语言标识符后，用下划线分隔。例如，`en_US` 表示美式英语，而 `en_GB` 表示英式英语。

此对象定义了一条针对英式英语的消息，另一条针对所有其他英语变体，以及一条针对所有德语变体的消息：

```javascript
message = {
 en_GB: "Please select a colour."
 en: "Please select a colour."
 de: "Bitte wählen Sie eine Farbe."
};
```

如果需要为不同平台指定不同的消息，您可以附加另一个下划线和平台名称，例如 `Win`、`Mac` 或 `Unix`。例如，此对象定义了一条在 Mac OS 上显示的英式英语消息，一条在 Mac OS 上显示的其他英语变体的消息，以及一条在所有其他平台上显示的其他英语变体的消息：

```javascript
pressMsg = {
 en_GB_Mac: "Press Cmd-S to select a colour.",
 en_Mac: "Press Cmd-S to select a color.",
 en: "Press Ctrl-S to select a color."
};
```

所有这些标识符都区分大小写；例如，`EN_US` 是无效的。

### 区域名称的解析方式

1. ExtendScript 获取宿主应用程序的区域设置；例如，`en_US`。
2. 附加平台标识符；例如，`en_US_Win`。
3. 查找匹配的属性，如果找到，则返回其值字符串。
4. 如果未找到，则移除平台标识符（例如，`en_US`）并重试。
5. 如果未找到，则移除区域标识符（例如，`en`）并重试。
6. 如果未找到，则尝试标识符 `en`（即默认语言为英语）。
7. 如果未找到，则返回整个本地化对象。

---

## 测试本地化

ExtendScript 将当前区域设置存储在变量 `$.locale` 中。每当宿主应用程序的区域设置更改时，此变量都会更新。

要测试您的本地化字符串，您可以临时重置区域设置。要恢复原始行为，请将变量设置为 `null`、`false`、`0` 或空字符串。例如：

```javascript
$.locale = "ru"; // 尝试您的俄语消息
$.locale = null; // 恢复到应用程序的区域设置
```

---

## 全局 localize 函数

### localize()

`localize (localization_obj[, args])`

`localize (ZString)`

#### 描述

全局可用的 `localize` 函数可用于在任何指定显示文本值的地方提供本地化字符串。

该函数接受一组特殊格式的本地化版本的显示字符串，并返回适合当前区域设置的版本。

#### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| localization_obj | Object | 一个 JavaScript 对象字面量，其属性名是区域名称，属性值是本地化的文本字符串。区域名称是 ISO 3166 标准中指定的标识符，一组两字母的语言缩写，例如 `"en"` 表示英语，`"de"` 表示德语。 |
| | | 例如：`btnText = { en: "Yes", de: "Ja", fr: "Oui" }; b1 = w.add ("button", undefined, localize (btnText));` |
| | | 每个属性的字符串值可以包含形式为 %1、%2 等的变量，对应于附加参数。变量在返回的字符串中被替换为相应参数的求值结果。 |
| args | Any | 可选。与本地化对象中提供的字符串值中的变量匹配的附加 JavaScript 表达式。第一个参数对应于变量 `%1`，第二个对应于 `%2`，依此类推。 |
| | | 每个表达式都会被求值，结果插入到返回字符串中变量的位置。 |
| ZString | ZString | 仅供内部使用。ZString 是 Adobe 用于本地化字符串的内部格式，您可能会在 Adobe 脚本中看到。它是一个以 `$$$` 开头的字符串，包含指向已安装 ZString 字典中本地化字符串的路径。 |
| | | 例如：`w = new Window ("dialog", localize ("$$$/UI/title1=Sample"));` |

例如：

```javascript
today = {
 en: "Today is %1/%2",
 de: "Heute ist der %2.%1."
};
d = new Date();
alert (localize (today, d.getMonth()+1, d.getDate()));
```
