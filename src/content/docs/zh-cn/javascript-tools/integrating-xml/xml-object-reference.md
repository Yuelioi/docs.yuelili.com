---
title: xml 对象参考
---
# XML 对象参考

本节提供了 XML 对象本身的属性和方法的参考详细信息，以及用于处理命名空间的相关实用对象和全局函数：

- [XML 对象](#xml-object)
- [命名空间对象](#namespace-object)
- [QName 对象](#qname-object)
- [全局函数](#global-functions)

## XML 对象

`XML` 对象提供了静态属性和函数（通过 `XML` 类访问）以及动态属性和函数（通过每个实例访问）。

### XML 对象构造函数

构造函数返回表示 XML 树根节点的 XML 对象，该对象包含所有包含元素的附加 XML 对象。

`[new] XML (xmlCode);`

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| `xmlCode` | 字符串或 XML | 包含有效 XML 代码的字符串，或现有的 XML 对象。 |
| | | - 如果提供了有效的字符串，则返回封装 XML 代码的新 XML 对象。如果无法解析 XML 代码，则抛出 JavaScript 错误。 |
| | | - 如果提供了现有对象并且使用了 `new` 运算符，则返回该对象的副本；否则，返回对象本身。 |

---

## XML 设置

这些静态属性通过 XML 类访问。它们控制 XML 的解析和生成方式：

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| `ignoreComments` | 布尔值 | 当为 `true` 时，在解析期间从 XML 中删除注释。默认值为 `false`。 |
| `ignoreProcessingInstructions` | 布尔值 | 当为 `true` 时，在解析期间从 XML 中删除处理指令（`<?xxx?>` 元素）。默认值为 `false`。 |
| `ignoreWhitespace` | 布尔值 | 当为 `true` 时，在解析期间从 XML 中删除空白字符。默认值为 `true`。 |
| `prettyIndent` | 数字 | 在美化打印时用于缩进的空格数。默认值为 2。 |
| `prettyPrinting` | 布尔值 | 当为 `true` 时，`toXMLString()` 使用缩进和换行符创建 XML 字符串。默认值为 `true`。 |

---

## XML 类方法

这些静态函数通过 XML 类访问，并提供有关 XML 解析器全局设置的信息。

### XML.defaultSettings()

`XML.defaultSettings();`

#### 描述

检索控制 XML 解析和生成的默认全局选项设置。

#### 返回

返回一个包含五个属性的 JavaScript 对象，这些属性对应于 [XML 设置](#xml-settings)。

---

### XML.settings()

`XML.settings();`

#### 描述

检索控制 XML 解析和生成的当前全局选项设置。

#### 返回

返回一个包含五个属性的 JavaScript 对象，这些属性对应于 [XML 设置](#xml-settings)。

---

### XML.setSettings()

`XML.setSettings(object);`

#### 描述

设置控制 XML 解析和生成的全局选项设置。您可以使用此函数恢复通过 [settings()](#xml-settings) 或 [defaultSettings()](#xmldefaultsettings) 检索的设置。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `object` | 对象 | 一个包含五个属性的 JavaScript 对象，这些属性对应于[XML 设置](#xml-settings)。 |

#### 返回

无

---

## XML 对象属性

XML 对象的属性以子元素和属性的名称命名，并包含这些子元素和属性的值。

### xmlObj.childElementName

`xmlObj.childElementName`

#### 描述

子元素属性以子元素名称命名。

#### 类型

[XML 对象](#xml-object)

---

### xmlObj.@attributeName

`xmlObj.@attributeName`

#### 描述

属性属性以属性名称前缀 `@` 命名。

#### 类型

[XML 对象](#xml-object)

---

## XML 对象方法

### XML.addNamespace()

`xmlObj.addNamespace(ns);`

#### 描述

向此节点添加命名空间声明。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `ns` | [命名空间对象](#namespace-object) | 要添加的命名空间声明 |

#### 返回

此 [XML 对象](#xml-object)。

---

### XML.appendChild()

`xmlObj.appendChild(child);`

#### 描述

将子元素追加到此节点，位于任何现有子元素之后。如果参数不是 XML，则创建一个新的 XML 元素，该元素包含字符串作为其文本值，并使用当前包含在此对象节点中的最后一个元素的相同元素名称。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `child` | [XML 对象](#xml-object) 或任何可以通过 `toString()` 转换为字符串的值 | 要追加的子元素 |

#### 返回

此 [XML 对象](#xml-object)。

---

### XML.attributes()

`xmlObj.attributes(name);`

#### 描述

检索此节点中包含的命名属性元素的列表。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 属性名称。 |

#### 返回

包含命名属性所有值的 [XML 对象](#xml-object)。

---

### XML.child()

`xmlObj.child(which);`

#### 描述

检索此节点中给定类型的所有子元素的列表。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `which` | 字符串或数字 | 元素名称，或数字（此节点子数组的 0 基索引）。 |

#### 返回

包含给定类型的所有子元素的 [XML 对象](#xml-object)。

---

### XML.childIndex()

`xmlObj.childIndex ();`

#### 描述

检索此节点在其父节点中的 0 基位置索引。

#### 返回

数字

---

### XML.children()

`xmlObj.children();`

#### 描述

检索此节点的所有直接子元素，包括文本元素。

#### 返回

包含子元素的 [XML 对象](#xml-object)。

---

### XML.comments()

`xmlObj.comments();`

#### 描述

检索此节点中的所有 XML 注释元素。

#### 返回

包含注释的 [XML 对象](#xml-object)。

---

### XML.contains()

`xmlObj.contains(element);`

#### 描述

报告元素是否在此节点的任何嵌套级别中包含。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `element` | [XML 对象](#xml-object) | 要检查的元素 |

#### 返回

布尔值。如果元素包含在此 XML 树中，则为 `true`。

---

### XML.copy()

`xmlObj.copy();`

#### 描述

创建此节点的副本。

#### 返回

新的 XML 对象。

---

### XML.descendants()

`xmlObj.descendants([name]);`

#### 描述

检索此节点中给定元素类型的所有后代元素，或所有 XML 值的后代元素，无论嵌套级别如何。包括文本元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 可选。要匹配的元素名称。如果未提供，则匹配所有元素。 |

#### 返回

包含每个后代元素属性的 [XML 对象](#xml-object)。

---

### XML.elements()

`xmlObj.elements(name);`

#### 描述

检索此节点中给定类型的所有直接子元素，或所有类型的子元素。不包括文本元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 可选。要匹配的元素名称。如果未提供，则匹配所有元素。 |

#### 返回

包含每个子元素属性的 [XML 对象](#xml-object)。

---

### XML.hasComplexContent()

`xmlObj.hasComplexContent();`

#### 描述

报告此节点是否具有复杂内容；即，是否包含子元素。忽略其他类型的内容，包括属性、注释、处理指令和文本节点。

#### 返回

布尔值。如果此节点包含子元素，则为 `true`。

---

### XML.hasSimpleContent()

`xmlObj.hasSimpleContent();`

#### 描述

报告此节点是否具有简单内容；即，是否表示文本节点、属性节点或不包含子元素的元素（无论是否还包含属性、注释、处理指令或文本）。

表示注释和处理指令的对象不具有简单内容。

#### 返回

布尔值。如果此节点不包含子元素，则为 `true`。

---

### XML.inScopeNamespaces()

`xmlObj.inScopeNamespaces();`

#### 描述

检索此元素中有效的命名空间列表。

#### 返回

[命名空间对象](#namespace-object) 的数组，其中最后一个成员是默认命名空间。

---

### XML.insertChildAfter()

`xmlObj.insertChildAfter(child1, child2);`

#### 描述

将新的子元素或文本节点插入到此节点中，位于另一个现有子元素之后。如果相对元素当前不在此节点中，则不插入新的子元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `child1` | [XML 对象](#xml-object) | 在其后放置新子元素的现有子元素，或 `null` 以在开头插入新子元素。 |
| `child2` | [XML 对象](#xml-object) | 新的子元素，或任何可以通过 `toString()` 转换为字符串的值。 |

#### 返回

此 [XML 对象](#xml-object)。

---

### XML.insertChildBefore()

`xmlObj.insertChildBefore(child1, child2);`

#### 描述

将新的子元素或文本节点插入到此节点中，位于另一个现有子元素之前。如果相对元素当前不在此节点中，则不插入新的子元素。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `child1` | [XML 对象](#xml-object) 在其前放置新子元素的现有子元素，或 `null` 以在末尾插入新子元素。 | |
| `child2` | [XML 对象](#xml-object) 新的子元素，或任何可以通过 `toString()` 转换为字符串的值。 | |

#### 返回

此 [XML 对象](#xml-object)。

---

### XML.length()

`xmlObj.length();`

#### 描述

报告此节点中包含的子元素数量。最小数量为 1，即此对象表示的元素。

#### 返回

数字

---

### XML.localName()

`xmlObj.localName();`

#### 描述

检索此元素的本地名称；即，不带任何命名空间前缀的元素名称。

#### 返回

字符串

---

### XML.name()

`xmlObj.name();`

#### 描述

检索此元素的完整名称，包括命名空间信息。

#### 返回

包含元素名称和命名空间 URI 的 [QName 对象](#qname-object)。

---

### XML.namespace()

`xmlObj.namespace();`

#### 描述

检索此元素的命名空间 URI。

#### 返回

字符串

---

### XML.nodeKind()

`xmlObj.nodeKind();`

#### 描述

报告此节点的类型。

#### 返回

字符串，可能为以下之一：

- `element`
- `attribute`
- `comment`
- `processing-instruction`
- `text`

---

### XML.namespaceDeclarations()

`xmlObj.namespaceDeclarations();`

#### 描述

检索此节点中包含的所有命名空间声明。

#### 返回

[命名空间对象](#namespace-object) 的数组。

---

### XML.normalize()

`xmlObj.normalize();`

#### 描述

通过合并相邻的文本节点并消除空的文本节点，将此节点及其所有后代 XML 对象中的所有文本节点放入正常形式。

#### 返回

此 [XML 对象](#xml-object)。

---

### XML.parent()

`xmlObj.parent();`

#### 描述

检索此节点的父节点。

#### 返回

[XML 对象](#xml-object)，或根元素的 `null`。

---

### XML.prependChild()

`xmlObj.prependChild(child);`

#### 描述

将子元素预置到此节点，位于任何现有子元素之前。如果将字符串预置到文本元素，则结果为两个文本元素；调用 [normalize()](#xmlnormalize) 将它们连接为单个文本字符串。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `child` | [XML 对象](#xml-object) 或字符串 | 要预置的子元素 |

#### 返回

此 [XML 对象](#xml-object)。

---

### XML.processingInstructions()

`xmlObj.processingInstructions ([name]);`

#### 描述

一个字符串，处理指令的名称，或 `null` 以获取所有处理指令。

检索此节点中包含的处理指令。

#### 返回

包含此对象的子元素的 [XML 对象](#xml-object)，这些子元素是处理指令，如果提供了名称，则匹配该名称。

---

### XML.replace()

`xmlObj.replace(name, value);`

#### 描述

替换此节点中的一个或多个属性值。

如果指定名称的元素不存在，则将给定值作为文本元素追加。

#### 参数

| 参数名 | 类型 | 描述 |
|---|---|---|
| `name` | 字符串 | 元素或属性名称，可以带或不带从0开始的位置索引，或通配符字符串`"*"`。 |
| | | - 如果未提供位置索引，则替换所有匹配元素的值。 |
| | | - 如果使用通配符，则替换所有包含的元素值。当元素包含子元素时，这些子元素会被移除，仅保留替换值。 |
| `value` | [XML对象](#xml-object)或任何可通过`toString()`转换为字符串的值 | 要替换的值 |

#### 返回值

此 [XML对象](#xml-object)。

---

### XML.setChildren()

`xmlObj.setChildren(value);`

#### 描述

将此对象中所有XML值的属性替换为新值，新值可以是简单的文本元素，也可以包含另一组XML属性。

#### 参数

| 参数名 | 类型 | 描述 |
|---|---|---|
| `value` | [XML对象](#xml-object)或任何可通过`toString()`转换为字符串的值 | 要替换的值 |

#### 返回值

此 [XML对象](#xml-object)。

---

### XML.setLocalName()

`xmlObj.setLocalName(name);`

#### 描述

替换此对象的本地名称，即不带任何命名空间前缀的元素名称。

#### 参数

| 参数名 | 类型 | 描述 |
|---|---|---|
| `name` | 字符串 | 新的名称。 |

#### 返回值

此 [XML对象](#xml-object)。

---

### XML.setName()

`xmlObj.setName(name);`

#### 描述

替换此对象的完整名称，即元素名称及其命名空间前缀。

#### 参数

| 参数名 | 类型 | 描述 |
|---|---|---|
| `name` | 字符串 | 新的名称。 |

#### 返回值

此 [XML对象](#xml-object)。

---

### XML.setNamespace()

`xmlObj.setNamespace(ns);`

#### 描述

设置此XML元素的命名空间。如果命名空间未在此元素之上的树中声明，则添加命名空间声明。

#### 参数

| 参数名 | 类型 | 描述 |
|---|---|---|
| `ns` | 命名空间对象 | 在此元素之上的树中已声明的命名空间。 |

#### 返回值

此 [XML对象](#xml-object)。

---

### XML.text()

`xmlObj.text();`

#### 描述

从此元素中检索文本节点。

一个包含此对象所有表示XML文本节点属性的[XML对象](#xml-object)。

---

### XML.toString()

`xmlObj.toString();`

#### 描述

创建此对象的字符串表示形式。

- 对于文本和属性节点，这是节点的文本值。
- 对于其他元素，这是[toXMLString()](#xmltoxmlstring)的结果。
- 如果此XML对象是列表，则对每个包含的元素调用此函数并连接结果。

#### 返回值

字符串

---

### XML.toXMLString()

`xmlObj.toXMLString();`

#### 描述

创建此[XML对象](#xml-object)的XML编码字符串表示形式。

此结果包括XML对象的开始标签、属性和结束标签，无论其内容如何。字符串格式由全局设置[XML.prettyPrinting](#xml-settings)和[XML.prettyIndent](#xml-settings)指定。

#### 返回值

字符串

---

### XML.xpath()

`xmlObj.xpath(expression[, variables]);`

#### 描述

根据W3C XPath推荐标准评估XPath表达式，使用此XML对象作为上下文节点。上下文位置和大小设置为1，所有变量最初未绑定。如果此XML对象是列表，则评估所有包含的XML元素节点（不包括注释或其他节点类型），并按执行顺序返回结果列表。

如果XPath表达式未评估为节点列表，则抛出JavaScript异常。

#### 参数

| 参数名 | 类型 | 描述 |
|---|---|---|
| `expression` | 字符串 | 包含XPath表达式的字符串。 |
| | | !!! 注意 |
| | | 在此上下文中，必须包含实际的顶级元素。例如，示例XML的表达式必须以`/bookstore`开头。这与JavaScript属性访问不同，后者隐含了顶级元素。 |
| `variables` | 对象 | 可选。包含变量定义的JavaScript对象。属性用于查找表达式中包含的XPath变量。例如，如果表达式包含变量`$abc`，则值在对象的`abc`属性中。 |

#### 返回值

一个[XML对象](#xml-object)，评估的结果。

---

## 全局函数

这些函数在JavaScript全局命名空间中可用。

### isXMLName()

`isXMLName(String name)`

#### 描述

报告字符串是否包含符合有效XML语法的名称。

:::注意

它不遵循W3C对XML名称的定义，后者在有效字符集中添加了更多Unicode字符。
:::

#### 参数

| 参数名 | 类型 | 描述 |
|---|---|---|
| `name` | 字符串 | 字符串是否为XML名称 |

#### 返回值

布尔值。如果名称是有效的XML名称，则为`true`，否则为`false`。

---

### setDefaultXMLNamespace()

`setDefaultXMLNamespace(Namespace ns)`

#### 描述

设置XML对象的默认命名空间。也可以使用以下语法设置默认命名空间：

```javascript
default xml namespace = Namespace对象
default xml namespace = URL字符串
```

#### 参数

| 参数名 | 类型 | 描述 |
|---|---|---|
| `ns` | 命名空间对象 | 设置为默认的对象。忽略任何前缀。 |

#### 返回值

无

---

## QName对象

此对象封装了一个完全限定的XML名称，即本地XML名称及其命名空间URI的组合。

### QName对象构造函数

构造函数有多种形式：

```javascript
new QName ()
new QName (name)
new QName (ns)
new QName (uri, name)
```

当不提供参数时，创建一个具有空本地名称且无URI的`QName`对象。

| 参数名 | 类型 | 描述 |
|---|---|---|
| name | 字符串 | 创建一个具有给定本地名称和默认命名空间URI的`QName`对象。可以是通配符`"*"`。 |
| name | QName | 创建一个现有[QName对象](#qname-object)的副本。 |
| ns | 命名空间 | 创建一个具有空本地名称和[命名空间对象](#namespace-object)URI的`QName`对象。 |
| uri, name | 字符串 | 创建一个具有给定命名空间URI和本地名称的`QName`对象。如果本地名称作为通配符`"*"`提供，则忽略`uri`参数，URI值为默认命名空间的URI。 |

---

## QName对象属性

### QName.name

`QName.name`

#### 描述

XML元素的完全限定XML名称的本地元素名称部分。

#### 类型

字符串

---

### QName.uri

`QName.uri`

#### 描述

XML元素的完全限定XML名称的命名空间前缀。

#### 类型

字符串

---

## 命名空间对象

此对象封装了XML命名空间的定义。命名空间将XML名称前缀与完整的URI关联起来。前缀是一个字符串，位于XML元素或属性的本地名称之前，用于标识命名空间，而URI指向命名空间定义的实际位置。

例如，以下XML定义包含一个命名空间声明：

```xml
<?xml xmlns:adobe=http://www.adobe.com/test?>
```

在相应的命名空间中，前缀是`adobe`，URI是`http://www.adobe.com/test`。

---

### 命名空间对象构造函数

命名空间构造函数有多种形式：

```javascript
new Namespace()
new Namespace (String uri)
new Namespace (QName prefix)
new Namespace (Namespace ns)
new Namespace (String prefix, String uri)
```

当不提供参数时，创建一个具有空前缀和URI的命名空间。

#### 参数

| 参数名 | 类型 | 描述 |
|---|---|---|
| `uri` | 字符串 | 创建一个具有空前缀和给定URI的命名空间对象。 |
| `prefix` | QName | 创建一个具有空前缀和[QName对象](#qname-object)URI的命名空间（如果QName对象包含URI）。 |
| `ns` | 命名空间 | 创建给定[命名空间对象](#namespace-object)的副本。如果`Namespace()`函数在没有`new`运算符的情况下调用，并且唯一参数是`Namespace`对象，则函数仅返回该对象，而不是创建副本。 |
| `prefix, uri` | 字符串 | 创建一个具有给定前缀和给定URI的`Namespace`对象。 |

---

## 命名空间对象属性

### Namespace.prefix

`namespace.prefix`

#### 描述

与命名空间URI关联的元素名称前缀。前缀值可以是`undefined`，例如当指定的前缀不是有效的XML名称时。

具有未定义前缀的命名空间会被完全忽略；它们不会添加到XML命名空间声明中。

#### 类型

字符串

---

### Namespace.uri

`namespace.uri`

#### 描述

命名空间定义的位置，即URI。

#### 类型

字符串
