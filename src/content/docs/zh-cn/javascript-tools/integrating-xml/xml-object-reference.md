---
title: xml-object-reference
---
# XML Object Reference

This section provides reference details for the properties and methods of the XML object itself, and for the related utility objects and global functions that you use to work with namespaces:

- [XML object](#xml-object)
- [Namespace object](#namespace-object)
- [QName object](#qname-object)
- [Global functions](#global-functions)

## XML Object

The `XML` object provides both static properties and functions, available through the `XML` class, and dynamic properties and functions available through each instance.

### XML object constructor

The constructor returns the XML object representing the root node of an XML tree, which contains additional XML objects for all contained elements.

`[new] XML (xmlCode);`

| Property  |     类型      |                                                                    描述                                                                     |
|-----------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| `xmlCode` | String or XML | A string containing valid XML code, or an existing XML object.                                                                                     |
|           |               | - If a valid string is supplied, returns a new XML object encapsulating the XML code. If the XML code cannot be parsed, throws a JavaScript error. |
|           |               | - If an existing object is supplied and the `new` operator is used, returns a copy of the object; otherwise, returns the object itself.            |

---

## XML Settings

These static properties are available through the XML class. They control how XML is parsed and generated:

|            Property            |  类型   |                                                             描述                                                             |
| ------------------------------ | ------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `ignoreComments`               | Boolean | Description When `true`, comments are stripped from the XML during parsing. Default is `false`.                                     |
| `ignoreProcessingInstructions` | Boolean | Description When `true`, processing instructions (`<?xxx?>` elements) are stripped from the XML during parsing. Default is `false`. |
| `ignoreWhitespace`             | Boolean | Description When `true`, white-space characters are stripped from the XML during parsing. Default is `true`.                        |
| `prettyIndent`                 | Number  | Description The number of spaces to use for indenting when pretty-printing. Default is 2.                                           |
| `prettyPrinting`               | Boolean | Description When `true`, `toXMLString()` uses indenting and line feeds to create the XML string. Default is `true`.                 |

---

## XML Class Methods

These static functions are available through the XML class, and provide information about the global settings of the XML parser.

### XML.defaultSettings()

`XML.defaultSettings();`

#### 描述

Retrieves the default global option settings that control how XML is parsed and generated.

#### 返回

Returns a JavaScript object containing five properties, which correspond to the five [XML Settings](#xml-settings).

---

### XML.settings()

`XML.settings();`

#### 描述

Retrieves the current global option settings that control how XML is parsed and generated.

#### 返回

Returns a JavaScript object containing five properties, which correspond to the five [XML Settings](#xml-settings)

---

### XML.setSettings()

`XML.setSettings(object);`

#### 描述

Sets the global option settings that control how XML is parsed and generated. You can use this to restore settings retrieved with [settings()](#xml-settings) or [defaultSettings()](#xmldefaultsettings).

#### 参数

| 参数 |  类型  |                                                描述                                                 |
| --------- | ------ | ---------------------------------------------------------------------------------------------------------- |
| `object`  | Object | A JavaScript object containing five properties, which correspond to the five [XML Settings](#xml-settings) |

#### 返回

Nothing

---

## XML Object Attributes

The properties of the XML object are named for and contain the values of the child elements and attributes of the element that the object represents.

### xmlObj.childElementName

`xmlObj.childElementName`

#### 描述

Child-element properties are named with the child element name.

#### 类型

[XML object](#xml-object)

---

### xmlObj.@attributeName

`xmlObj.@attributeName`

#### 描述

Attribute properties are named with the attribute name prefixed with the at-sign, `@`.

#### 类型

[XML object](#xml-object)

---

## XML Object Methods

### XML.addNamespace()

`xmlObj.addNamespace(ns);`

#### 描述

Adds a namespace declaration to this node.

#### 参数

| 参数 |                 类型                  |         描述          |
| --------- | ------------------------------------- | ---------------------------- |
| `ns`      | [Namespace object](#namespace-object) | Namespace declaration to add |

#### 返回

This [XML object](#xml-object).

---

### XML.appendChild()

`xmlObj.appendChild(child);`

#### 描述

Appends a child element to this node, after any existing children. If the argument is not XML, creates a new XML element that contains the string as its text value, using the same element name as the last element currently contained in this object's node.

#### 参数

| 参数 |                                            类型                                             |       描述       |
| --------- | ------------------------------------------------------------------------------------------- | ----------------------- |
| `child`   | [XML object](#xml-object), or any value that can be converted to a String with `toString()` | Child element to append |

#### 返回

This [XML object](#xml-object).

---

### XML.attributes()

`xmlObj.attributes(name);`

#### 描述

Retrieves a list of the named attribute elements contained in this node.

#### 参数

| 参数 |  类型  |     描述     |
| --------- | ------ | ------------------- |
| `name`    | String | Ahe attribute name. |

#### 返回

An [XML object](#xml-object) containing all values of the named attribute.

---

### XML.child()

`xmlObj.child(which);`

#### 描述

Retrieves a list of all child elements of this node of a given type.

#### 参数

| 参数 |       类型       |                                 描述                                  |
| --------- | ---------------- | ---------------------------------------------------------------------------- |
| `which`   | String or Number | The element name, or a Number, a 0-based index into this node's child array. |

#### 返回

An [XML object](#xml-object) containing all child elements of the given type.

---

### XML.childIndex()

`xmlObj.childIndex ();`

#### 描述

Retrieves the 0-based position index of this node within its parent node.

#### 返回

Number

---

### XML.children()

`xmlObj.children();`

#### 描述

Retrieves all of the immediate child elements of this node, including text elements.

#### 返回

An [XML object](#xml-object) containing the child elements.

---

### XML.comments()

`xmlObj.comments();`

#### 描述

Retrieves all XML comment elements from this node.

#### 返回

An [XML object](#xml-object) containing the comments.

---

### XML.contains()

`xmlObj.contains(element);`

#### 描述

Reports whether an element is contained in this node at any level of nesting.

#### 参数

| 参数 |           类型            |   描述    |
| --------- | ------------------------- | ---------------- |
| `element` | [XML object](#xml-object) | Element to check |

#### 返回

Boolean. `true` if the element is contained in this XML tree.

---

### XML.copy()

`xmlObj.copy();`

#### 描述

Creates a copy of this node.

#### 返回

The new XML object.

---

### XML.descendants()

`xmlObj.descendants([name]);`

#### 描述

Retrieves all descendent elements of this node of a given element type, or all XML-valued descendants, at any level of nesting. Includes text elements.

#### 参数

| 参数 |  类型  |                                 描述                                 |
| --------- | ------ | --------------------------------------------------------------------------- |
| `name`    | String | Optional. The element name to match. If not provided, matches all elements. |

#### 返回

An [XML object](#xml-object) containing properties for each descendant element.

---

### XML.elements()

`xmlObj.elements(name);`

#### 描述

Retrieves all of the immediate child elements of this node of the given type, or of all types. Does not include text elements.

#### 参数

| 参数 |  类型  |                                 描述                                 |
| --------- | ------ | --------------------------------------------------------------------------- |
| `name`    | String | Optional. The element name to match. If not provided, matches all elements. |

#### 返回

An [XML object](#xml-object) containing properties for each child element.

---

### XML.hasComplexContent()

`xmlObj.hasComplexContent();`

#### 描述

Reports whether this node has complex content; that is, whether it contains child elements. Disregards contents of other kinds, including attributes, comments, processing instructions and text nodes.

#### 返回

Boolean. `true` if this node contains child elements.

---

### XML.hasSimpleContent()

`xmlObj.hasSimpleContent();`

#### 描述

Reports whether this node has simple content; that is, whether it represents a text node, an attribute node, or an element without child elements (regardless of whether it also contains attributes, comments, processing instructions or text).

Object representing comments and processing instructions do not have simple content.

#### 返回

Boolean. `true` if this node contains no child elements.

---

### XML.inScopeNamespaces()

`xmlObj.inScopeNamespaces();`

#### 描述

Retrieves the current list of valid namespaces in this element.

#### 返回

An Array of [Namespace object](#namespace-object), in which the last member is the default namespace.

---

### XML.insertChildAfter()

`xmlObj.insertChildAfter(child1, child2);`

#### 描述

Inserts a new child element or text node into this node, after another existing child element. If the relative element is not currently in this node, does not insert the new child.

#### 参数

| 参数 |           类型            |                                                    描述                                                     |
| --------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `child1`  | [XML object](#xml-object) | The existing child element after which to place the new child, or `null` to insert the new child at the beginning. |
| `child2`  | [XML object](#xml-object) | The new child element, or any value that can be converted to a String with `toString()`.                           |

#### 返回

This [XML object](#xml-object).

---

### XML.insertChildBefore()

`xmlObj.insertChildBefore(child1, child2);`

#### 描述

Inserts a new child element or text node into this node, before another existing child element. If the relative element is not currently in this node, does not insert the new child.

#### 参数

| 参数 |                                                                 类型                                                                  | Description |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `child1`  | [XML object](#xml-object) The existing child element before which to place the new child, or null to insert the new child at the end. |             |
| `child2`  | [XML object](#xml-object) The new child element, or any value that can be converted to a String with `toString()`.                    |             |

#### 返回

This [XML object](#xml-object).

---

### XML.length()

`xmlObj.length();`

#### 描述

Reports the number of child elements contained in this node. The minimum number is 1, the element that this object represents.

#### 返回

Number

---

### XML.localName()

`xmlObj.localName();`

#### 描述

Retrieves the local name of this element; that is, the element name, without any namespace prefix.

#### 返回

String

---

### XML.name()

`xmlObj.name();`

#### 描述

Retrieves the full name of this element, with the namespace information.

#### 返回

A [QName object](#qname-object) containing the element name and namespace URI.

---

### XML.namespace()

`xmlObj.namespace();`

#### 描述

Retrieves the namespace URI of this element.

#### 返回

String

---

### XML.nodeKind()

`xmlObj.nodeKind();`

#### 描述

Reports the type of this node.

#### 返回

A String, one of:

- `element`
- `attribute`
- `comment`
- `processing-instruction`
- `text`

---

### XML.namespaceDeclarations()

`xmlObj.namespaceDeclarations();`

#### 描述

Retrieves all of the namespace declarations contained in this node.

#### 返回

An Array of [Namespace object](#namespace-object).

---

### XML.normalize()

`xmlObj.normalize();`

#### 描述

Puts all text nodes in this and all descendant XML objects into a normal form by merging adjacent text nodes and eliminating empty text nodes.

#### 返回

This [XML object](#xml-object).

---

### XML.parent()

`xmlObj.parent();`

#### 描述

Retrieves the parent node of this node.

#### 返回

An [XML object](#xml-object), or `null` for the root element.

---

### XML.prependChild()

`xmlObj.prependChild(child);`

#### 描述

Prepends a child element to this node, before any existing children. If you prepend a string to a text element, the result is two text elements; call [normalize()](#xmlnormalize) to concatenate them into a single text string.

#### 参数

| 参数 |                类型                 |       描述        |
| --------- | ----------------------------------- | ------------------------ |
| `child`   | [XML object](#xml-object) or String | Child element to prepend |

#### 返回

This [XML object](#xml-object).

---

### XML.processingInstructions()

`xmlObj.processingInstructions ([name]);`

#### 描述

A String, the name of a processing instruction, or null to get all processing instructions.

Retrieves processing instructions contained in this node.

#### 返回

An [XML object](#xml-object) containing the children of this object that are processing instructions, matching the name if supplied.

---

### XML.replace()

`xmlObj.replace(name, value);`

#### 描述

Replaces one or more property values in this node.

If the named element does not exist, appends the given value as a text element.

#### 参数

| 参数 |                                            类型                                            |                                                                                 描述                                                                                  |
|-----------|--------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`    | String                                                                                     | An element or attribute name, with or without the 0-based position index of a specific element, or the wildcard string `"*"`.                                                |
|           |                                                                                            | - If no position index is supplied, replaces the value of all matching elements.                                                                                             |
|           |                                                                                            | - If the wildcard is supplied, replaces the value of all contained elements. When an element contain subelements, those are removed, and only the replacement value remains. |
| `value`   | [XML object](#xml-object) or any value that can be converted to a String with `toString()` | Value to replace with                                                                                                                                                        |

#### 返回

This [XML object](#xml-object).

---

### XML.setChildren()

`xmlObj.setChildren(value);`

#### 描述

Replaces all of the XML-valued properties in this object with a new value, which can be a simple text element, or can contain another set of XML properties.

#### 参数

| 参数 |                                            类型                                             |      描述      |
| --------- | ------------------------------------------------------------------------------------------- | --------------------- |
| `value`   | [XML object](#xml-object) or any value that can be converted to a String with `toString()`. | Value to replace with |

#### 返回

This [XML object](#xml-object).

---

### XML.setLocalName()

`xmlObj.setLocalName(name);`

#### 描述

Replaces the local name of this object; that is, the element name without any namespace prefix.

#### 参数

| 参数 |  类型  |  Description  |
| --------- | ------ | ------------- |
| `name`    | String | The new name. |

#### 返回

This [XML object](#xml-object).

---

### XML.setName()

`xmlObj.setName(name);`

#### 描述

Replaces the full name of this object; that is, the element name and its namespace prefix.

#### 参数

| 参数 |  类型  |  Description  |
| --------- | ------ | ------------- |
| `name`    | String | The new name. |

#### 返回

This [XML object](#xml-object).

---

### XML.setNamespace()

`xmlObj.setNamespace(ns);`

#### 描述

Sets the namespace for this XML element. If the namespace has not been declared in the tree above this element, add a namespace declaration instead.

#### 参数

| 参数 |       类型       |                           描述                            |
| --------- | ---------------- | ---------------------------------------------------------------- |
| `ns`      | Namespace object | Namespace that has been declared in the tree above this element. |

#### 返回

This [XML object](#xml-object).

---

### XML.text()

`xmlObj.text();`

#### 描述

Retrieves text nodes from this element.

An [XML object](#xml-object) containing all properties of this object that represent XML text nodes.

---

### XML.toString()

`xmlObj.toString();`

#### 描述

Creates a string representation of this object.

- For text and attribute nodes, this is the textual value of the node.
- For other elements, it is the result of [toXMLString()](#xmltoxmlstring).
- If this XML object is a list, concatenates the result of calling the function on each contained element.

#### 返回

String

---

### XML.toXMLString()

`xmlObj.toXMLString();`

#### 描述

Creates an XML-encoded string representation of this [XML object](#xml-object).

This result includes the start tag, attributes and end tag of the XML object, regardless of its content. Formats the string as specified by the global settings [XML.prettyPrinting](#xml-settings) and [XML.prettyIndent](#xml-settings).

#### 返回

String

---

### XML.xpath()

`xmlObj.xpath(expression[, variables]);`

#### 描述

Evaluates an XPath expression in accordance with the W3C XPath recommendation, using this XML object as the context node. The context position and size are set to 1, and all variables are initially unbound. If this XML object is a list, evaluates all contained XML element nodes (not comments or other node types) and return the results in a list in the order of execution.

If the XPath expression does not evaluate to a node list, throws a JavaScript exception.

#### 参数

|  参数   |  类型  |                                                                                                                       描述                                                                                                                        |
|--------------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `expression` | String | A String containing an XPath expression.                                                                                                                                                                                                                 |
|              |        | !!! note                                                                                                                                                                                                                                                 |
|              |        |     In this context, include the actual top level element. For example, an expression for the example XML must start with "/bookstore". This is unlike JavaScript property access, where the top level element is implied.                               |
| `variables`  | Object | Optional. A JavaScript object containing variable definitions. The properties are used to look up XPath variables contained in the expression. For example, if the expression contains the variable `$abc`, the value is in the object's `abc` property. |

#### 返回

An [XML object](#xml-object), the result of evaluation.

---

## Global functions

These functions are available in the JavaScript global namespace.

### isXMLName()

`isXMLName(String name)`

#### 描述

Reports whether a string contains a name that conforms to valid XML syntax.

:::note

It does not follow the W3C definition of an XML name, which adds more Unicode characters to the valid set of characters.
:::

#### 参数

| 参数 |  类型  |            描述            |
| --------- | ------ | --------------------------------- |
| `name`    | String | Whether the string is an XML Name |

#### 返回

Boolean. `true` if the name is a valid XML name, `false` otherwise.

---

### setDefaultXMLNamespace()

`setDefaultXMLNamespace(Namespace ns)`

#### 描述

Sets the default namespace for XML objects. You can also set the default namespace using this syntax:

```javascript
default xml namespace = Namespace object
default xml namespace = URL_string
```

#### 参数

| 参数 |       类型       |                   描述                    |
| --------- | ---------------- | ------------------------------------------------ |
| `ns`      | Namespace object | Object to set as default. Any prefix is ignored. |

#### 返回

Nothing

---

## QName Object

This object encapsulates a fully qualified XML name, the combination of a local XML name and its namespace URI.

### QName object constructor

The constructor takes several forms:

```javascript
new QName ()
new QName (name)
new QName (ns)
new QName (uri, name)
```

When no arguments are supplies, creates a `QName` object with an empty local name and no URI.

| 参数 |   类型    |                                                                                                      描述                                                                                                       |
| --------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name      | String    | Creates a `QName` object with the given local name and the URI of the default namespace. Can be the wildcard character, "\*".                                                                                          |
| name      | QName     | Creates a copy of an existing [QName object](#qname-object).                                                                                                                                                           |
| ns        | Namespace | Creates a `QName` object with an empty local name and the URI of the [Namespace object](#namespace-object).                                                                                                            |
| uri, name | String    | Create a `QName` object with the given namespace URI and local name. If the local name is supplied as the wildcard character, "\*", the `uri` argument is ignored, and the URI value is that of the default namespace. |

---

## QName Object Attributes

### QName.name

`QName.name`

#### 描述

The local element name portion of the XML element's fully qualified XML name.

#### 类型

String

---

### QName.uri

`QName.uri`

#### 描述

The namespace prefix of the XML element's fully qualified XML name.

#### 类型

String

---

## Namespace object

This object encapsulates the definition of an XML namespace. A namespace associates an XML-name prefix with a complete URI. The prefix is a string that precedes the local name of an XML element or attribute and identifies the namespace, while the URI points to the actual location where the definition of the namespace is found.

For example, this XML definition contains a namespace declaration:

```xml
<?xml xmlns:adobe=http://www.adobe.com/test?>
```

In the corresponding namespace, the prefix is `adobe`, and the URI is `http://www.adobe.com/test`.

---

### Namespace object constructor

The Namespace constructor takes several forms:

```javascript
new Namespace()
new Namespace (String uri)
new Namespace (QName prefix)
new Namespace (Namespace ns)
new Namespace (String prefix, String uri)
```

When no argument is supplied, creates a namespace with an empty prefix and URI.

#### 参数

|   参数   |   类型    |                                                                                                                         描述                                                                                                                         |
| ------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `uri`         | String    | Creates a Namespace object with an empty prefix and the given URI.                                                                                                                                                                                          |
| `prefix`      | QName     | Creates a namespace with an empty prefix and the URI set to the URI of the [QName object](#qname-object) (if the QName object contains a URI).                                                                                                              |
| `ns`          | Namespace | Creates a copy of the given [Namespace object](#namespace-object). If the `Namespace()` function is called without the `new` operator, and the only argument is a `Namespace` object, the function simply returns that object, rather than creating a copy. |
| `prefix, uri` | String    | Creates a `Namespace` object with the given prefix and the given URI.                                                                                                                                                                                       |

---

## Namespace Object Attributes

### Namespace.prefix

`namespace.prefix`

#### 描述

The element-name prefix associated with the namespace URI. The prefix value can be `undefined`, as when a specified prefix is not a valid XML name.

Namespaces with an undefined prefix are completely ignored; they are not added to an XML namespace declaration.

#### 类型

String

---

### Namespace.uri

`namespace.uri`

#### 描述

The location of the namespace definition, a URI.

#### 类型

String
