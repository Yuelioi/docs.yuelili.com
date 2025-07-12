---
title: 你的第一个 Illustrator 脚本
---
# 你的第一个 Illustrator 脚本

在任何编程语言中，传统的第一个项目都是显示消息“Hello World!”。在这个示例中，你将创建一个新的 Illustrator 文档，然后添加一个包含此消息的文本框。请按照以下步骤操作：

有关如何找到 ExtendScript Toolkit 的信息，请参阅 [查看 JavaScript 对象模型](../../introduction/viewingTheObjectModel#viewing-the-javascript-object-model)。

1. 使用任何文本编辑器（包括 Adobe^ InDesign® 或 ESTK），输入以下文本：
 ```javascript
 //Hello World!
 var myDocument = app.documents.add();
 //创建一个新的文本框并将其赋值给变量 "myTextFrame"
 var myTextFrame = myDocument.textFrames.add();
 // 设置文本框的内容和位置
 myTextFrame.position = [200,200];
 myTextFrame.contents = "Hello World!"
 ```
2. 要测试脚本，请执行以下任一操作：
 - 如果你使用的是 ESTK，请从左上角的下拉列表中选择 Adobe Illustrator CC 2017，选择“是”以启动 Illustrator，然后在 ESTK 中选择 Debug > Run 来运行脚本。
 - 如果你使用的是其他文本编辑器而不是 ESTK，请将文件保存为纯文本格式，并使用 .jsx 文件扩展名保存到你选择的文件夹中，然后启动 Illustrator。在 Illustrator 中，选择 File > Scripts > Other Scripts，导航并运行你的脚本文件。

---

## 为“Hello World”添加功能

接下来，我们创建一个新的脚本，该脚本将对你使用第一个脚本创建的 Illustrator 文档进行更改。我们的第二个脚本演示了如何：

- 获取活动文档。
- 获取活动文档的宽度。
- 调整文本框的大小以匹配文档的宽度。

如果你已经关闭了 Illustrator 文档，请再次运行你的第一个脚本以创建一个新文档。

请按照以下步骤操作：

1. 在脚本编辑器中，选择 File > New 以创建一个新脚本。
2. 输入以下代码：
 ```javascript
 var docRef = app.activeDocument;
 var docWidth = docRef.width
 var frameRef = docRef.textFrames[0]
 frameRef.width = docWidth
 ```
3. 运行脚本。
```
