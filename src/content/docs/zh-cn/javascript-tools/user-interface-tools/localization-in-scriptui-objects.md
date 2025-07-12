---
title: ScriptUI 对象中的本地化
---
# ScriptUI 对象中的本地化

对于用户界面中显示在屏幕上的部分，您可能希望本地化显示的文本。您可以使用全局的 `localize` 函数简单高效地本地化任何 ScriptUI 对象中的显示字符串。该函数以一个包含字符串本地化版本的 *本地化对象* 作为参数。

有关此 ExtendScript 功能的完整详细信息，请参阅 [本地化 ExtendScript 字符串](../../extendscript-tools-features/localizing-extendscript-strings)。

本地化对象是一个 JavaScript 对象字面量，其属性名是区域设置名称，属性值是本地化的文本字符串。区域设置名称是 ISO 31 标准中指定的标识符。在此示例中，`btnText` 对象包含多个区域设置的本地化文本字符串。该对象为要添加到窗口 `win` 中的按钮提供文本：

```javascript
btnText = { en: "Yes", de: "Ja", fr: "Oui" };
b1 = win.add ( "button", undefined, localize( btnText ) );
```

`localize` 函数提取当前区域设置的适当字符串。它将当前区域设置和平台与对象的属性之一匹配，并返回关联的字符串。例如，在德语系统上，属性 `de` 提供字符串 `"Ja"`。

当您的脚本使用本地化为用户界面元素提供适合语言的字符串时，它还应利用自动布局功能。布局管理器可以根据每个用户界面元素的本地化 `text` 值确定其最佳大小，自动调整脚本定义的对话框的布局，以适应不同语言字符串的不同宽度。

---

## 本地化字符串中的变量值

`localize` 函数允许您在字符串值中包含变量。每个变量都会被替换为评估附加参数的结果。

例如：

```javascript
var today = {
 en: "Today is %1/%2.",
 de: "Heute ist der %2.%1."
};
var date = new Date();
Window.alert( localize( today, date.getMonth() + 1, date.getDate() ) );
```

---

## 启用自动本地化

如果您不需要变量替换，可以使用自动本地化。要启用自动本地化，请设置全局值：

```javascript
$.localization = true
```

启用后，您可以直接将本地化对象指定为任何接受可本地化字符串的属性的值，而无需使用 `localize` 函数。例如：

```javascript
var btnText = { en: "Yes", de: "Ja", fr: "Oui" };
b1 = win.add( "button", undefined, btnText );
```

无论 `$.localize` 变量的设置如何，`localize` 函数始终执行其翻译。

例如：

```javascript
// 仅在 $.localize = true 时有效
var b1 = win.add ( "button", undefined, btnText );
// 无论 $.localize 值如何，始终有效
var b1 = win.add ( "button", undefined, localize( btnText ) );
```

如果您需要在本地化字符串中包含变量，请使用 `localize` 函数。
