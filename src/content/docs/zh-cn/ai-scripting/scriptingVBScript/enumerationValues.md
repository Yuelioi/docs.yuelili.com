---
title: 使用枚举值
---
# 使用枚举值

在 VBScript 中，使用枚举值的属性通常使用数字而不是文本值。

例如，`TextFrame` 对象的 `Orientation` 属性指定文本框中的文本内容是水平还是垂直的。该属性使用 `aiTextOrientation` 枚举，它有两个可能的值：`aiHorizontal` 和 `aiVertical`。

要查找枚举的数字值，可以使用以下方法之一：

- 脚本编辑器环境中的对象浏览器。请参阅 [查看 VBScript 对象模型](../../introduction/viewingTheObjectModel#viewing-the-vbscript-object-model)。
- Adobe Illustrator CC 2017 脚本参考：VBScript，该书末尾的“枚举”章节中直接在常量值后列出了数字值。以下示例来自该表格：

| 枚举类型 | 值 | 含义 |
|---|---|---|
| `AiTextOrientation` | `aiHorizontal = 0` `aiVertical = 1` | 文本框中文本的方向 |

以下示例指定了垂直文本方向：

```vbscript
Set appRef = CreateObject ("Illustrator.Application")
Set docRef = appRef.Documents.Add
Set textRef = docRef.TextFrames.Add
textRef.Contents = "这是一些文本内容。"
textRef.Left = 50
textRef.Top = 700
textRef.Orientation = 1
```

通常，良好的脚本编写实践是在数字值后添加注释，注释中包含文本值，如下面的示例语句所示：

```vbscript
textRef.Orientation = 1 ' aiVertical
```
