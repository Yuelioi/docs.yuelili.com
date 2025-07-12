---
title: 访问和引用对象
---
# 访问和引用对象

当你编写脚本时，首先必须决定脚本应该作用于哪个文件或 `Document`。通过 `Application` 对象，脚本可以创建一个新文档、打开一个现有文档，或者作用于一个已经打开的文档。

脚本可以在文档中创建新对象，操作用户选择的对象，或者操作对象集合中的对象。以下部分展示了访问、引用和操作 Illustrator 对象的技术。

---

## 从集合中获取对象

通常，要获取对特定对象的引用，你可以遍历包含层次结构。例如，使用 `myPath` 变量存储对活动文档中第二层的第一个 `PathItem` 的引用：

```vbscript
Set myPath = appRef.ActiveDocument.Layers(2).PathItems(1)
```

以下脚本展示了如何引用文档中的对象：

```vbscript
Set documentRef = appRef.ActiveDocument

Set pageItemRef = documentRef.PageItems(1)
```

在下面的脚本中，变量 `pageItemRef` 不一定引用与上述脚本相同的对象，因为此脚本包含对图层的引用：

```vbscript
Set documentRef = appRef.ActiveDocument
Set pageItemRef = documentRef.Layers(1).PageItems(1)
```

VBScript 的对象集合索引从 1 开始；然而，VBScript 允许你指定数组索引是从 1 还是 0 开始。有关指定数组索引起始编号的信息，请参阅任何 VBScript 教材或教程。

---

## 创建新对象

你可以使用脚本来创建新对象。要创建可从集合对象中获得的对象，请使用集合对象的 `Add` 方法：

```vbscript
Set myDoc = appRef.Documents.Add()

Set myLayer = myDoc.Layers.Add()
```

某些集合对象没有 `Add` 方法。要创建这种类型的对象，请定义一个变量并使用 `CreateObject` 方法。例如，以下代码使用变量名 `newColor` 创建一个新的 `CMYKColor` 对象：

```vbscript
Set newColor = CreateObject ("Illustrator.CMYKColor")
```

---

## 处理选择

当用户在文档中进行选择时，所选对象存储在文档的 `selection` 属性中。要访问活动文档中所有选定的对象：

```vbscript
Set appRef = CreateObject ("Illustrator.Application")
Set documentRef = appRef.ActiveDocument
selectedObjects = documentRef.Selection
```

根据选择的内容，`selection` 属性值可以是任何类型的艺术对象的数组。要获取或操作所选艺术项目的属性，你必须检索数组中的各个项目。要查找对象的类型，请使用 `typename` 属性。

以下示例获取数组中的第一个对象，然后显示对象的类型：

```vbscript
Set appRef = CreateObject ("Illustrator.Application")
Set documentRef = appRef.ActiveDocument
selectedObjects = documentRef.Selection
Set topObject = selectedObjects(0)
MsgBox(topObject.Typename)
```

当脚本从 Illustrator 脚本菜单（文件 > 脚本）运行时，`MsgBox` 方法不会显示对话框。

选择数组中的第一个对象是最后添加到页面的选定对象，而不是最后选择的对象。

### 处理选择

要选择一个艺术对象，请使用对象的 `Selected` 属性。
