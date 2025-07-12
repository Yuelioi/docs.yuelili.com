---
title: Illustrator 脚本对象模型
---
# Illustrator 脚本对象模型

对 Illustrator 对象模型的深入理解将提升你的脚本编写能力。下图展示了从应用程序对象开始的对象模型的包含层次结构。

请注意，图层和组项目类可以包含相同类的嵌套对象，而这些嵌套对象又可以包含更多的嵌套对象。

![Illustrator 脚本对象模型](../_static/objectmodel.png)

除了这个特定于应用程序的对象模型外，JavaScript 还提供了一些实用对象，例如 [File](https://extendscript.docsforadobe.dev/file-system-access/file-object/) 和 [Folder](https://extendscript.docsforadobe.dev/file-system-access/folder-object/) 对象，它们为你提供了与操作系统无关的文件系统访问权限。

有关详细信息，请参阅 [JavaScript 工具指南](https://extendscript.docsforadobe.dev/)。
