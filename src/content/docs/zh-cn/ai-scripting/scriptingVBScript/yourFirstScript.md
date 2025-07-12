---
title: 你的第一个 Illustrator 脚本
---
# 你的第一个 Illustrator 脚本

在任何编程语言中，传统的第一个项目都是显示消息 "Hello World!"。在这个示例中，你将创建一个新的 Illustrator 文档，然后添加一个包含此消息的文本框。请按照以下步骤操作：

1. 启动任何文本编辑器（例如记事本）。
2. 输入以下代码：
 ```vbscript
 Rem Hello World
 Set appRef = CreateObject("Illustrator.Application")
 Rem 创建一个新文档并将其分配给变量
 Set documentRef = appRef.Documents.Add
 Rem 创建一个新的文本框项并将其分配给变量
 Set sampleText = documentRef.TextFrames.Add
 Rem 设置文本框的内容和位置
 sampleText.Position = Array(200, 200)
 sampleText.Contents = "Hello World!"
 ```
3. 将文件保存为纯文本格式，并使用 `.vbs` 文件扩展名保存到你选择的文件夹中。
4. 要测试脚本，请执行以下操作之一：
 - 双击文件。
 - 启动 Illustrator，选择“文件”>“脚本”>“其他脚本”，然后导航到并运行你的脚本文件。

---

## 为 "Hello World" 添加功能

接下来，我们创建一个新的脚本，该脚本将对你使用第一个脚本创建的 Illustrator 文档进行更改。我们的第二个脚本演示了如何：

- 获取活动文档。
- 获取活动文档的宽度。
- 调整文本框的大小以匹配文档的宽度。

如果你已经关闭了 Illustrator 文档，请再次运行你的第一个脚本以创建一个新文档。

请按照以下步骤操作：

1. 将以下脚本复制到你的文本编辑器中，并保存文件：
 ```vbscript
 Set appRef = CreateObject("Illustrator.Application")
 '获取活动文档
 Set documentRef = appRef.ActiveDocument
 Set sampleText = documentRef.TextFrames(1)
 ' 调整文本框项的大小以匹配文档宽度
 sampleText.Width = documentRef.Width
 sampleText.Left = 0
 ```
2. 运行脚本。
