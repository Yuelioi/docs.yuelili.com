---
title: 使用文本框架
---
# 使用文本框架

要在 AppleScript 中创建特定类型的文本框架，请使用 `text` 框架对象的 `kind` 属性。

```applescript
set myRect to make new rectangle in current document with properties
{position:{100, 700}, height:100, width:100}
set myAreaText to make new text frame in current document with properties
{kind:point text,contents:"Text Frame 1"}
```

---

## 链接的框架

与 Illustrator 应用程序中一样，您可以链接区域文本框架或路径文本框架。

要链接现有的文本框架，请使用 `text frame` 对象的 `next frame` 或 `previous frame` 属性。

将以下脚本复制到脚本编辑器时，请将 `contents` 属性的值放在一行中。长行字符 (`¬`) 在字符串值中无效。

```applescript
tell application "Adobe Illustrator"
 make new document
 make new rectangle in current document with properties
 {position:{100, 500}, height:100, width:100}
 make new text frame in current document with properties
 {kind:area text, text path:the result, name:"tf1", contents:"This is two text frames linked together as one story, with text flowing from the first to the last. First frame content. "}
 make new rectangle in current document with properties
 {position:{300, 700}, height:100, width:100}
 make new text frame in current document with properties
 {kind:area text, text path:the result, name:"tf2", contents:"Second frame content." }
 --使用 next frame 属性链接框架
 set next frame of text frame "tf1" of current document to
 text frame "tf2" of current document
 redraw
end tell
```

### 链接的框架构成一个故事对象

链接的框架构成一个单一的故事对象。要观察这一点，请在运行上述脚本后运行以下 AppleScript。

```applescript
display dialog ("There are " & (count(text frames of current document)) & " text frames.")
display dialog("There are " & (count(stories of current document)) & " stories.")
```
