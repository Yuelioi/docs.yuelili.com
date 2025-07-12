---
title: 你的第一个 Illustrator 脚本
---
# 你的第一个 Illustrator 脚本

在任何编程语言中，传统的第一个项目都是显示消息“Hello World!”。在这个示例中，你将创建一个新的 Illustrator 文档，然后添加一个包含此消息的文本框。请按照以下步骤操作：

在默认的 Mac OS 安装中，脚本编辑器位于 `/Applications/AppleScript/Script Editor/`。

如果你找不到脚本编辑器应用程序，必须从 Mac OS 系统 CD 中重新安装它。

1. 打开脚本编辑器。
2. 输入以下脚本：
 ```applescript
 -- 将以下命令发送到 Illustrator
 tell application "Adobe Illustrator"

 -- 创建一个新文档
 set docRef to make new document

 -- 创建一个包含字符串 "Hello World" 的新文本框
 set textRef to make new text frame in docRef
 with properties { contents: "Hello World!", position:{200, 200} }

 end tell
 ```
3. 在脚本编辑器工具栏中，点击“运行”。

---

## 为“Hello World”添加功能

接下来，我们创建一个新的脚本，该脚本将对你使用第一个脚本创建的 Illustrator 文档进行修改。我们的第二个脚本演示了如何：

- 获取当前活动文档。
- 获取活动文档的宽度。
- 调整文本框的大小以匹配文档的宽度。

如果你已经关闭了 Illustrator 文档，请再次运行你的第一个脚本来创建一个新文档。

请按照以下步骤操作：

1. 在脚本编辑器中，选择“文件”>“新建”以创建一个新脚本。
2. 输入以下代码：
 ```applescript
 tell application "Adobe Illustrator"

 -- 当前文档始终是活动文档
 set docRef to the current document
 set docWidth to the width of docRef

 -- 调整文本框的大小以匹配页面宽度
 set width of text frame 1 of docRef to docWidth

 -- 或者，可以直接引用项目，如下所示：
 set width of text frame 1 of current document to docWidth

 end tell
 ```
3. 运行脚本。
