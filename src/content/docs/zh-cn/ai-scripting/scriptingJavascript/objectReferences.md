---
title: 访问和引用对象
---
# 访问和引用对象

当你编写脚本时，首先必须决定脚本应该作用于哪个文件或 `document`。通过 `application` 对象，脚本可以创建新文档、打开现有文档或作用于已打开的文档。

脚本可以在文档中创建新对象，操作用户选择的对象，或操作对象集合中的对象。以下部分展示了访问、引用和操作 Illustrator 对象的各种技术。

---

## 引用应用程序对象

要获取对特定对象的引用，你需要导航包含层次结构。然而，由于所有 JavaScript 脚本都在 Illustrator 应用程序内执行，因此不需要对应用程序对象进行特定引用。例如，要将 Illustrator 中的活动文档分配给变量 `frontMostDocument`，你可以引用 `application` 对象的 `activeDocument` 属性，如下所示：

```javascript
var frontMostDocument = activeDocument;
```

在引用中使用 `application` 对象是允许的。要引用 `application` 对象，请使用 `app` 全局变量。以下两条语句对 JavaScript 引擎来说看起来是相同的：

```javascript
var frontMostDocument = activeDocument;

var frontMostDocument = app.activeDocument;
```

---

## 访问集合中的对象

所有打开的文档以及文档中的对象都被收集到对象类型的集合对象中。集合对象包含一个对象数组，你可以通过索引或名称访问这些对象。集合对象的名称是对象名称的复数形式。例如，`document` 对象的集合对象是 `documents`。

以下脚本示例获取 `graphic styles` 集合中的所有 `graphic style` 对象；也就是说，它获取活动文档可用的所有图形样式：

```javascript
var myStyles = app.activeDocument.graphicStyles;
```

JavaScript 中的所有数字集合引用都是基于零的：集合中的第一个对象的索引为 [0]。

通常情况下，JavaScript 索引号在向集合添加对象时不会发生变化。有一个例外：`documents[0]` 始终是活动或最前面的文档。

要访问 `graphic styles` 集合中的第一个样式，你可以使用前面脚本示例中声明的变量，或者使用包含层次结构来引用集合：

- 使用 `myStyles` 变量：
 ```javascript
 var firstStyle = myStyles[0];
 ```

- 使用包含层次结构：
 ```javascript
 var firstStyle = app.activeDocument.graphicStyles[0];
 ```

以下语句将集合中第一个图形样式的名称分配给一个变量。你可以互换使用这些语句。

```javascript
var styleName = myStyles[0].name

var styleName = firstStyle.name

var styleName = app.activeDocument.graphicStyles[0].name
```

要获取集合中对象的总数，请使用 `length` 属性：

```javascript
alert ( myStyles.length );
```

集合中最后一个图形样式的索引是 `myStyles.length - 1`（-1 因为集合的索引从 0 开始计数，而 `length` 属性从 1 开始计数）：

```javascript
var lastStyle = myStyles[ myStyles.length - 1 ];
```

请注意，表示索引值的表达式用方括号（[]）和引号括起来。

如果你知道对象的名称，可以使用名称加方括号来访问集合中的对象；例如：

```javascript
var getStyle = myStyles["Ice Type"];
```

集合中的每个元素都是所需类型的对象，你可以通过集合访问其属性。例如，要获取对象的名称，请使用 `name` 属性：

```javascript
var styleName = app.activeDocument.graphicStyles[0].name;
```

要将 `lastStyle` 应用于文档中的第一个 `pageItem`，请使用其 `applyTo()` 方法：

```javascript
lastStyle.applyTo( app.activeDocument.pageItems[0] );
```

---

## 创建新对象

你可以使用脚本来创建新对象。要创建可从集合对象或容器中获得的对象，请使用容器对象的 `add()` 方法：

```javascript
var myDoc = app.documents.add()
var myLayer = myDoc.layers.add()
```

某些对象类型无法从容器中获得。要创建此类型的对象，请定义一个变量，然后使用 `new` 运算符和对象构造函数将对象分配为值。例如，要使用变量名 `myColor` 创建一个新的 `CMYKColor` 对象：

```javascript
var myColor = new CMYKColor()
```

---

## 处理选择

当用户在文档中进行选择时，所选对象存储在文档的 `selection` 属性中。要访问活动文档中的所有选定对象：

```javascript
var selectedObjects = app.activeDocument.selection;
```

`selection` 属性值可以是任何类型的艺术对象数组，具体取决于所选对象的类型。要获取或操作所选艺术项目的属性，你必须检索数组中的各个项目。要找出对象的类型，请使用 `typename` 属性。

以下示例获取数组中的第一个对象，然后显示对象的类型：

```javascript
var topObject = app.activeDocument.selection[0];
alert(topObject.typename)
```

选择数组中的第一个对象是最后添加到页面中的选定对象，而不是最后选择的对象。

### 选择艺术对象

要选择一个艺术对象，请使用对象的 `selected` 属性。
