---
title: 使用文本框架
---
# 使用文本框架

要在 VBScript 中创建特定类型的文本框架，请使用与您要创建的框架类型相对应的 `TextFrames` 方法：

```vbscript
Set rectRef = docRef.PathItems.Rectangle(700, 50, 100, 100)

' 使用 AreaText 方法创建文本框架
Set areaTextRef = docRef.TextFrames.AreaText(rectRef)
```

---

## 串接框架

与 Illustrator 应用程序中一样，您可以串接区域文本框架或路径文本框架。

要串接现有的文本框架，请使用 `TextFrames` 对象的 `NextFrame` 或 `PreviousFrame` 属性。

将以下脚本复制到脚本编辑器时，请将 `Contents` 属性的值放在一行中。长行字符 (`_`) 在字符串值中无效。

```vbscript
Set appRef = CreateObject("Illustrator.Application")
Set myDoc = appRef.Documents.Add
Set myPathItem1 = myDoc.PathItems.Rectangle(244, 64, 82, 76)
Set myTextFrame1 = myDoc.TextFrames.AreaText(myPathItem1)
 myTextFrame1.Contents = "这是两个文本框架链接在一起作为一个故事，文本从第一个框架流向最后一个框架。"
Set myPathItem2 = myDoc.PathItems.Rectangle(144, 144, 42, 116)
Set myTextFrame2 = myDoc.TextFrames.AreaText(myPathItem2)

'使用 NextFrame 属性串接框架
myTextFrame1.NextFrame = myTextFrame2

appRef.Redraw()
```

### 串接框架创建一个故事对象

串接框架会创建一个单一的故事对象。要观察这一点，请在运行上述脚本后运行以下 VBScript。

```vbscript
Set myDoc = appRef.ActiveDocument
myMsg = "alert(""共有 " & CStr(myDoc.TextFrames.Count) & " 个文本框架。 "")"
appRef.DoJavaScript myMsg
myMsg = "alert(""共有 " & CStr(myDoc.Stories.Count) & " 个故事。 "")"
appRef.DoJavaScript myMsg
```
