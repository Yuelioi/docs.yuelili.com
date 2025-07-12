---
title: xml 对象
---
# XML 对象

XML 对象表示 XML 树中的 XML 元素节点。XML 文件的顶层 `XML` 对象表示根节点。它充当一个列表，其中包含每个元素的附加 `XML` 对象。这些对象又包含它们自己的成员元素的 XML 对象，依此类推。

元素树的子元素作为父元素的 `XML` 对象的属性可用。属性的名称对应于元素的名称。每个属性包含一个 `XML` 对象数组，每个对象表示一个命名类型的元素。

例如，假设你有以下最小的 XML 代码：

```xml
<rootElement>
 <elementA>
 <elementB></elementB>
 </elementA>
 <elementA>
 <elementB></elementB>
 </elementA>
</rootElement>
```

在 JavaScript 脚本中，你从此 XML 代码创建的 XML 对象表示根元素：

```javascript
var myRoot = new XML( "<rootElement> <elementA> <elementB></elementB> </elementA> <elementA> <elementB></elementB> </elementA> </rootElement>");
```

你可以直接将常量分配给 XML 值。以下隐式创建了分配给 `myRoot` 的 XML 对象：

```javascript
var myRoot = <rootElement>
 <elementA>
 <elementB></elementB>
 </elementA>
 <elementA>
 <elementB></elementB>
 </elementA>
</rootElement>;
```

对象 `myRoot` 包含一个名为 `elementA` 的属性，该属性包含两个 `XML` 对象，分别表示该元素的两个实例。每个对象又包含一个 `elementB` 属性，该属性包含一个空的 `XML` 对象：

```javascript
var elemB1 = myRoot.elementA[0].elementB[0];
```

如果 XML 中的元素为空，则相应的属性存在并包含一个空的 XML 对象；它永远不会是 `null` 或 `undefined`。

---

## 访问 XML 元素

本章中的示例使用以下示例 XML 代码：

```xml
<bookstore>
 <book category="COOKING">
 <title lang="en">The Boston Cooking-School Cookbook</title>
 <author>Fannie Merrit Farmer</author>
 <year>1896</year>
 <price>49.99</price>
 </book>
 <book category="CHILDREN">
 <title lang="en">The Wonderful Wizard of Oz</title>
 <author>L. Frank Baum</author>
 <year>1900</year>
 <price>39.95</price>
 </book>
 <book category="CHILDREN">
 <title lang="en">Alice's Adventures in Wonderland</title>
 <author>Charles "Lewis Carroll" Dodgeson</author>
 <author>Charles Dodgeson</author>
 <author>Lewis Carroll</author>
 <year>1865</year>
 <price>29.99</price>
 </book>
 <book category="MUSIC">
 <title lang="en">Gilbert and Sullivan Opera; A History and a Comment</title>
 <author>H. M. Walbrook</author>
 <year>1922</year>
 <price>30.00</price>
 </book>
</bookstore>
```

要将此代码封装在 XML 对象中，将其序列化为字符串并将该字符串传递给构造函数：

```javascript
var bookXmlStr = "...";
var bookstoreXML = new XML (bookXmlStr);
```

使用此示例，根元素 `<bookstore>` 由构造函数返回的 XML 对象表示。每个 `<book>` 元素作为 XML 对象的 `book` 属性的成员可用。

- JavaScript 语句 `bookstoreXML.book;` 返回所有书籍的列表。
- 语句 `bookstoreXML.book[0];` 返回第一本书的 `XML` 对象。
- 语句 `bookstoreXML.book[0].author;` 返回第一本书的所有作者。

有关访问树中元素的更多方法，请参阅 [检索包含的元素](#retrieving-contained-elements) 和 [创建和访问命名空间](#creating-and-accessing-namespaces)。

---

## 访问 XML 属性

属性是其父元素的属性。在 ExtendScript 中，通过在属性名称前加上 at 符号 (`@`) 来访问属性名称。属性属性是一个单元素列表，其中包含属性值的 XML 对象。例如：

```xml
bookstoreXML.book [0].@category;
```

这将返回第一本书的 `category` 属性，其值为字符串 `"COOKING"`。

要访问所有书籍的所有 `category` 属性，请使用以下语句：

```xml
bookstoreXML.book.@category
```

你可以使用以下形式的谓词引用具有特定属性值的一组元素：

```xml
element.(@attribute == value)
```

例如，此语句仅返回具有 `category` 属性且值为 `"CHILDREN"` 的书籍元素：

```xml
bookstoreXML.book.(@category == "CHILDREN");
```

---

## 查看 XML 对象

XML 对象与所有 ExtendScript 对象一样，具有 `toString` 方法，该方法将内容序列化为字符串。在这种情况下，字符串仅包含元素的文本内容，而不包含标签。例如，对于元素 `<x>text</x>`，`toString()` 方法返回 `"text"`。

当你在 ExtendScript Toolkit 的 JavaScript 控制台中评估对象时，会调用此方法。它会重新创建对象封装的 XML 文本。因此，如果你在控制台中评估对象 `bookstoreXML.book[1]`，你将看到封装的树的 XML 文本，格式化为带有换行符和空格：

```xml
> bookstoreXML.book[1];
 <book category="CHILDREN">
 <title lang="en">The Wonderful Wizard of Oz</title>
 <author>L. Frank Baum</author>
 <year>1900</year>
 <price>39.95</price>
 </book>
```

如果你评估具有文本值的对象，你将看到文本值。例如：

```xml
> bookstoreXML.book[1].@category;
 CHILDREN
```

如果你访问多个值，这些值将被连接起来：

```xml
> bookstoreXML.book.@category
 COOKINGCHILDRENCHILDRENMUSIC
```

[toXMLString()](../xml-object-reference#xmltoxmlstring) 方法将整个元素（包括标签）序列化为字符串。

例如，对于元素 `<x>text</x>`，该方法返回 `"<x>text</x>"`。

---

## 修改 XML 元素和属性

你可以通过为相应属性赋值来更改元素。

- 如果分配的值是 XML 元素，则元素将被替换。如果有多个相同类型的元素，则第一个元素将被替换，所有其他元素将被删除。
- 如果分配的值不是 XML，则将其转换为字符串，并用该字符串替换元素的内容。
- 如果不存在此类型的元素，则会将新元素附加到 XML 中。

你可以使用相同的技术更改属性的值。

### 修改示例

**在示例 XML 中，第三本书有多个 `<author>` 元素。此语句将所有元素替换为包含新字符串的单个元素：**

```javascript
bookstoreXML.book[2].author = "Charles 'Lewis Carroll' Dodgeson";
```

结果是以下 XML：

```xml
<book category="CHILDREN">
 <title lang="en">Alice's Adventures in Wonderland</title>
 <author>Charles 'Lewis Carroll' Dodgeson</author>
 <year>1865</year>
 <price>29.99</price>
</book>
```

**要仅替换第一个作者，保留所有其他作者，请使用以下语句：**

```javascript
bookstoreXML.book[2].author[0] = "Charles Dodgeson, aka Lewis Carroll";
```

**此语句更改第二本书中 `<year>` 元素的内容。ExtendScript 会自动将数值转换为字符串：**

```javascript
bookstoreXML.book[1].year = 1901;
```

**以下语句向第二本书添加一个新的 `<rating>` 元素：**

`> bookstoreXML.book[1].rating = "**\***";`

结果是以下 XML：

```xml
<book category="CHILDREN">
 <title lang="en">The Wonderful Wizard of Oz</title>
 <author>L. Frank Baum</author>
 <year>1900</year>
 <price>39.95</price>
 <rating>*****</rating>
</book>
```

**此语句更改第二本书的 `category` 属性的值：**

```javascript
bookstoreXML.book[1].@category = "LITERATURE, FANTASY"
```

结果是以下 XML：

```xml
<book category="LITERATURE, FANTASY">
<title lang="en">The Wonderful Wizard of Oz</title>
...
```

---

## 删除元素和属性

要删除 XML 中的元素或属性，请使用 JavaScript 的 `delete` 运算符删除相应的元素或属性属性。如果元素有多个实例，你可以删除所有实例，或通过索引引用单个实例。

### 删除示例

此语句删除第三本书的所有作者：

```xml
delete bookstoreXML.book[2].author;
```

此语句仅删除第三本书的第二个作者：

```xml
delete bookstoreXML.book[2].author[1];
```

此语句删除第三本书的 `category` 属性：

```xml
delete bookstoreXML.book[2].@category;
```

---

## 检索包含的元素

`XML` 对象提供了允许你检索树中不同级别包含的元素的方法：

- `XML.`[children()](../xml-object-reference#xmlchildren) 获取直接子元素，包括文本元素。
- `XML.`[elements()](../xml-object-reference#xmlelements) 获取直接子元素中的 XML 标签，但不获取文本。
- `XML.`[descendants()](../xml-object-reference#xmldescendants) 允许你匹配特定标签，并获取任何嵌套级别的所有匹配元素。你还可以使用“双点”符号访问元素的后代。例如，以下语句是等效的：

 ```javascript
 xml..title
 xml.descendants("title")
 ```

例如，考虑以下 XML 代码加载到名为 `x` 的顶层 `XML` 对象中：

```xml
<top>
 <one>one text</one>
 <two>
 two text
 <inside>inside text</inside>
 </two>
 top text
</top>
```

以下是不同调用的结果。

- `XML.`[children()](../xml-object-reference#xmlchildren) 的结果包含 3 个元素，直接子标签 `<one>` 和 `<two>`，以及 `<top>` 标签的直接包含文本：

 ```xml
 **> x.children()**
 <one>one text</one>
 <two>
 two text
 <inside>inside text</inside>
 </two>
 top text

 **> x.children().length()**
 3
 ```

- `XML.`[elements()](../xml-object-reference#xmlelements) 的结果包含 2 个元素，直接子标签 `<one>` 和 `<two>`：

 ```xml
 **> x.elements()**
 <one>one text</one>
 <two>
 two text
 <inside>inside text</inside>
 </two>
 **> x.elements().length()**
 2
 ```

- `XML.`[descendants()](../xml-object-reference#xmldescendants) 的结果包含 7 个元素，直接子标签 `<one>` 和 `<two>`，下一级的 `<inside>` 标签，以及所有标签的文本内容：

 ```xml
 **> x.descendants()**
 <one>one text</one>
 one text
 <two>
 two text
 <inside>inside text</inside>
 </two>
 two text
 <inside>inside text</inside>
 inside text
 top text
 **> x.descendants().length()**
 7
 ```

---

## 创建和访问命名空间

简单的访问语句访问默认命名空间中的元素。如果你需要在多个命名空间中定义元素，则必须使用 [Namespace 对象](../xml-object-reference#namespace-object) 来访问不在默认命名空间中的任何元素。

### 在树中定义命名空间

你可以使用 `xmlns` 属性在 XML 元素中定义命名空间，并将模式中的元素定义为属于该命名空间。例如，以下示例 XML 的添加定义了一个命名空间，将前缀 "kids" 映射到命名空间 "[http://kids.mybookstore.com](http://kids.mybookstore.com)"，然后使用该前缀将特定书籍元素放置在该命名空间中：

```xml
<bookstore **xmlns:kids="http://kids.mybookstore.com"**>

<book category="COOKING">
 <title lang="en">The Boston Cooking-School Cookbook</title>
 <author>Fannie Merrit Farmer</author>
 <year>1896</year>
 <price>49.99</price>
</book>

<**kids:**book category="CHILDREN">
 <title lang="en">The Wonderful Wizard of Oz</title>
 <author>L. Frank Baum</author>
 <year>1900</year>
 <price>39.95</price>
</**kids:**book>
...
```

定义此命名空间后，简单的语句 `bookstoreXML.book` 不再返回 "The Wonderful Wizard of Oz"，因为该书不再位于默认命名空间中。要访问该书，你必须为命名空间定义一个 [Namespace 对象](../xml-object-reference#namespace-object)，并使用它来访问元素。

例如，以下 JavaScript 代码为 `<bookstore>` 元素中定义的命名空间创建了一个 [Namespace 对象](../xml-object-reference#namespace-object)，并通过该对象访问命名空间中的书籍：

```javascript
var ns = new Namespace ("http://kids.mybookstore.com");
bookstoreXML.ns::book;
```

---

### 设置默认命名空间

默认情况下，默认命名空间是一个 URI 为空字符串的命名空间。可以设置默认命名空间；在这种情况下，简单的访问器访问该命名空间中的元素。

要设置默认命名空间，请使用全局函数 [setDefaultXMLNamespace()](../xml-object-reference#setdefaultxmlnamespace)，或以下语法：

```javascript
default xml namespace = namespace_specifier;
```

命名空间说明符可以是 [Namespace 对象](../xml-object-reference#namespace-object) 或 URL 字符串。例如：

```javascript
default xml namespace = "http://books.mybookstore.com";
```

设置默认命名空间后：

- 默认命名空间中的元素（因此可以通过简单访问器访问）必须使用命名空间前缀。
- 所有没有特定命名空间分配的元素都位于空命名空间中，而不是默认命名空间中。要访问它们，你必须使用 URI 为空字符串的 [Namespace 对象](../xml-object-reference#namespace-object)。

---

### 访问命名空间中的元素

- 你可以直接访问默认命名空间中的元素，而无需使用 [Namespace 对象](../xml-object-reference#namespace-object)。

 - 如果你没有设置默认值，则可以对没有命名空间说明符的元素使用直接访问。
 - 如果你设置了默认值，则可以对位于该命名空间中的元素使用直接访问。
- 如果你已将元素分配给命名空间，并且未将其设置为默认值，则必须使用 [Namespace 对象](../xml-object-reference#namespace-object) 来访问这些元素。例如：

 ```javascript
 var ns = new Namespace (**"http://kids.mybookstore.com"**);
 bookstoreXML.**ns::book**;
 ```

 这将返回所有已分配给 "kids" 命名空间的书籍。
- 如果你设置了默认命名空间，你仍然可以通过使用 URI 为空字符串的 [Namespace 对象](../xml-object-reference#namespace-object) 来访问所有没有特定命名空间分配的对象，这是默认创建情况：

 ```javascript
 var emptyNS = new Namespace ();
 bookstoreXML.emptyNS::book;
 ```

 这将返回所有未分配给任何命名空间的书籍。
- 要访问所有元素，无论命名空间分配如何，你可以使用星号 (\*) 通配符或 `null` 作为命名空间名称：

 ```javascript
 bookstoreXML.*::book;
 ```

 或

 ```js
 var nullNS = null;
 bookstoreXML.nullNS::book;
 ```

---

## 混合 XML 和 JavaScript

你可以将 JavaScript 语句括在花括号中，并将其嵌入到 XML 中。JavaScript 部分在 XML 构造期间被评估。

例如，此函数返回一个 XML 值，其中嵌入的 JavaScript 变量将被评估并包含在内：

```javascript
function makeXML (first, last) {
 return <person first={first} last={last}>{first + " " + last}</person>;
}
```

调用此函数：

```javascript
makeXML ( "Jane", "Doe" );
```

结果是以下 XML：

```xml
<person first="Jane" last="Doe">Jane Doe</person>
```

你还可以在 XML 元素上使用这些运算符：

- 使用加号运算符 `+` 将 XML 元素组合成一个列表。
- 使用 `==` 运算符对两个 XML 树进行深度比较。

---

## XML 列表

ExtendScript 定义了一个 `XMLList` 对象，它与 [XML 对象](../xml-object-reference#xml-object) 相同，只是你可以通过传递 XML 列表来创建它，并且它创建的是 XML 列表而不是 XML 标签。

所有收集 XML 的 XML 语句和函数都将结果作为 `XMLList` 返回，如果没有匹配项，则可以为空。例如，以下语句返回一个空列表：

```javascript
bookstoreXML.magazine;
```
