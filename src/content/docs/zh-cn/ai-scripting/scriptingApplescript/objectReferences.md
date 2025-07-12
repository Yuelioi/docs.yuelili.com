---
title: 对象引用
---
# 对象引用

在 AppleScript 中，Illustrator 通过索引位置或名称返回对象引用。例如，这是对第 2 层中第一个路径的引用：

```applescript
path item 1 of layer 2 of document 1
```

当其他对象被创建或删除时，对象的索引位置可能会发生变化。例如，当在 `layer 2` 上创建一个新的路径项时，新的路径项将成为 `path item 1 of layer 2 of document 1`。

这个新对象会取代原来的路径项，迫使原来的路径项移动到索引位置 2；因此，任何对 `path item 1 of layer 2 of document 1` 的引用都将指向新对象。这种应用索引编号的方法确保最低的索引编号指向最近操作的对象。

考虑以下示例脚本：

```applescript
-- 创建 2 个新对象并尝试同时选择它们
tell application "Adobe Illustrator"
 set newDocument to make new document
 set rectPath to make new rectangle in newDocument
 set starPath to make new star in newDocument
 set selection of newDocument to {rectPath, starPath}
end tell
```

这个脚本并没有按预期同时选择矩形和星形；相反，它只选择了星形。尝试在打开事件日志窗口的情况下运行脚本，以观察 Illustrator 为每个连续的 `make` 命令返回的引用。（在脚本编辑器窗口底部选择事件日志。）注意，两个命令返回了相同的对象引用：`path item 1 of layer 1 of document 1`；因此，最后一行解析为：

```applescript
set selection of document 1 to {path item 1 of layer 1 of document 1,
 path item 1 of layer 1 of document 1}
```

更好的方法是通过名称引用对象：

```applescript
tell application "Adobe Illustrator"
 set newDocument to make new document
 make new rectangle in newDocument with properties {name:"rectangle"}
 make new star in newDocument with properties {name:"star"}
 set selection of newDocument to
 {path item "rectangle" of newDocument,
 path item "star" of newDocument}
end tell
```

这个例子说明了在 AppleScript 脚本中唯一标识对象的必要性。我们建议为您需要稍后访问的对象分配名称或变量，因为通过索引访问时无法保证您访问的是预期的对象。

---

## 从文档和图层中获取对象

以下脚本引用了文档中的一个对象：

```applescript
-- 获取文档 1 的第一个页面项的引用
tell application "Adobe Illustrator"
 set pageItemRef to page item 1 of document 1
end tell
```

在以下脚本中，`pageItemRef` 变量不一定引用与上一个脚本中相同的对象，因为此脚本包含对图层的引用：

```applescript
-- 获取文档 1 的第 1 层的第一个页面项的引用
tell application "Adobe Illustrator"
 set pageItemRef to page item 1 of layer 1 of document 1
end tell
```

---

## 创建新对象

要在 AppleScript 中创建新对象，请使用 `make` 命令。

---

## 处理选择

当用户在文档中进行选择时，所选对象存储在文档的 `selection` 属性中。要访问活动文档中的所有选定对象：

```applescript
tell application "Adobe Illustrator"
 set myDoc to current document
 set selectedObjects to selection of myDoc
end tell
```

根据选择的内容，`selection` 属性值可以是任何类型的艺术对象的数组。要获取或操作所选艺术项的属性，您必须检索数组中的各个项。要查找对象的类型，请使用 `class` 属性。

以下示例获取数组中的第一个对象，然后显示对象的类型：

```applescript
tell application "Adobe Illustrator"
 set myDoc to current document
 set selectedObjects to selection of myDoc
 set topObject to item 1 of selectedObjects
 display dialog (class of topObject)
end tell
```

选择数组中的第一个对象是最后添加到页面的选定对象，而不是最后选择的对象。

### 处理选择

要选择一个艺术对象，请使用对象的 `selected` 属性。
