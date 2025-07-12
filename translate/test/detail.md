#### XMPMeta.insertArrayItem()

`XMPMetaObj.insertArrayItem(schemaNS, arrayName, itemIndex, itemValue[, itemOptions])`

##### 描述

在数组中现有项之前插入一个新项。所有后续项的索引位置会自动递增。目标数组必须已存在。

##### 参数

|   参数名    |  类型  |  说明  |
|------------|--------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| `schemaNS`  | 命名空间URI字符串。参见[模式命名空间字符串常量](#schema-namespace-string-constants)。 |  |
| `arrayName`   | 字符串   | 数组类型属性名称字符串。可以是通用路径表达式。   |
| `itemIndex`   | 数字   | 新项插入位置（基于1的索引）。使用`XMPConst.ARRAY_LAST_ITEM`表示数组最后一个现有项之后的位置。 |
| `itemValue`   | 字符串   | 新项值。对于没有值的数组项可传`null`。   |
| `itemOptions` | 数字   | 可选。描述新项的标志位（当创建新项时）。可选值：  |
|   |  | - `0`：简单项（默认值）   |
|   |  | - `XMPConst.PROP_IS_ARRAY`：该项是数组（alt/bag/seq类型）   |
|   |  | - `XMPConst.PROP_IS_STRUCT`：该项是包含嵌套字段的结构体   |

##### 返回值

无

---

#### XMPMeta.iterator()

`XMPMetaObj.iterator(options, schemaNS, propName)`

##### 描述

创建可遍历当前元数据中属性、数组和限定符的迭代器对象。通过指定选项、命名空间和属性名可以限制返回项的范围和粒度。

##### 参数

| 参数名  |  类型  |  说明  |
|--------|---------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| `options`  | 以下位标志常量的逻辑或组合：   | 控制迭代方式和返回值格式的选项集。 |
|  | - `XMPConst.ITERATOR_JUST_CHILDREN` - 仅迭代根属性的直接子项（默认会遍历子树） |  |
|  | - `XMPConst.ITERATOR_JUST_LEAFNODES` - 仅迭代叶子节点（默认会遍历子树所有节点）   |  |
|  | - `XMPConst.ITERATOR_JUST_LEAFNAMES` - 仅返回路径的末端部分（默认返回完整路径）  |  |
|  | - `XMPConst.ITERATOR_INCLUDE_ALIASES` - 包含别名（默认仅考虑实际属性）  |  |
|  | - `XMPConst.ITERATOR_OMIT_QUALIFIERS` - 跳过限定符   |  |
| `schemaNS` | [模式命名空间字符串常量](#schema-namespace-string-constants)   | 命名空间URI字符串。  |
| `propName` | 字符串  | 数组类型属性名称字符串。可以是通用路径表达式。   |

##### 返回值

返回该元数据对象的[XMPIterator迭代器对象](#xmpiterator-object)。

---

#### XMPMeta.serialize()

`XMPMetaObj.serialize([options, padding, indent, newline, baseIndent])`

##### 描述

将XMP元数据序列化为RDF格式字符串。

##### 参数

|  参数名   |  类型  |  说明  |
|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `options`  | 可选。以下位标志常量的逻辑或组合：   | 控制序列化行为的选项集。选项必须逻辑一致，冲突时会抛出异常。 |
|  | - `XMPConst.SERIALIZE_OMIT_PACKET_WRAPPER` - 不包含XML包封装器  |   |
|  | - `XMPConst.SERIALIZE_READ_ONLY_PACKET` - 创建只读XML包封装器  |   |
|  | - `XMPConst.SERIALIZE_USE_COMPACT_FORMAT` - 使用高度紧凑的RDF语法布局   |   |
|  | - `XMPConst.SERIALIZE_USE_PLAIN_XMP` - 序列化为纯XMP格式（当前不支持）   |   |
|  | - `XMPConst.SERIALIZE_INCLUDE_THUMBNAIL_PAD` - 若不存在xmp:Thumbnail属性，在填充中包含JPEG缩略图的典型空间   |   |
|  | - `XMPConst.SERIALIZE_EXACT_PACKET_LENGTH` - 根据padding参数精确计算填充字符以满足总包长度（若未填充的包超过该长度会抛出异常） |   |
|  | - `XMPConst.SERIALIZE_WRITE_ALIAS_COMMENTS` - 为别名包含XML注释   |   |
| `padding`  | 数字  | 可选。   |
|  |   | - 当选项含`SERIALIZE_EXACT_PACKET_LENGTH`时，表示包含填充字符后的精确包长度  |
|  |   | - 其他情况下表示要添加的填充字符数   |
|  |   | - 默认为`0`，表示使用适当数量的填充   |
| `indent`   | 字符串  | 可选。缩进字符串，默认为两个空格。  |
| `newline`  | 字符串  | 可选。换行符，默认为`U+000A`。  |
| `baseIndent` | 数字  | 可选。最外层XML元素的缩进级别，默认为`0`。  |

##### 返回值

字符串

---

#### XMPMeta.serializeToArray()

`XMPMetaObj.serializeToArray([options, padding, indent, newline, baseIndent])`

##### 描述

将XMP元数据序列化为RDF格式字符串，再转换为单字节数值数组（UTF-8或UTF-16编码字符）。

##### 参数

|  参数名   |  类型  |  说明   |
|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `options`  | 以下位标志常量的逻辑或组合：   | 可选。控制序列化行为的选项集。选项必须逻辑一致，冲突时会抛出异常。 |
|  | - `XMPConst.SERIALIZE_OMIT_PACKET_WRAPPER` - 不包含XML包封装器  |   |
|  | - `XMPConst.SERIALIZE_READ_ONLY_PACKET` - 创建只读XML包封装器  |   |
|  | - `XMPConst.SERIALIZE_USE_COMPACT_FORMAT` - 使用高度紧凑的RDF语法布局   |   |
|  | - `XMPConst.SERIALIZE_USE_PLAIN_XMP` - 序列化为纯XMP格式（当前不支持）   |   |
|  | - `XMPConst.SERIALIZE_INCLUDE_THUMBNAIL_PAD` - 若不存在xmp:Thumbnail属性，在填充中包含JPEG缩略图的典型空间   |   |
|  | - `XMPConst.SERIALIZE_EXACT_PACKET_LENGTH` - 根据padding参数精确计算填充字符以满足总包长度（若未填充的包超过该长度会抛出异常） |   |
|  | - `XMPConst.SERIALIZE_WRITE_ALIAS_COMMENTS` - 为别名包含XML注释   |   |
| `padding`  | 数字  | 可选。   |
|  |   | - 当选项含`SERIALIZE_EXACT_PACKET_LENGTH`时，表示包含填充字符后的精确包长度  |
|  |   | - 其他情况下表示要添加的填充字符数   |
|  |   | - 默认为`0`，表示使用适当数量的填充   |
| `indent`   | 字符串  | 可选。缩进字符串，默认为两个空格。  |
| `newline`  | 字符串  | 可选。换行符，默认为`U+000A`。  |
| `baseIndent` | 数字  | 可选。最外层XML元素的缩进级别，默认为`0`。  |

##### 返回值

数字数组

---

#### XMPMeta.setArrayItem()

`XMPMetaObj.setArrayItem(schemaNS, arrayName, itemIndex, itemValue[, itemOptions])`

##### 描述

替换数组中的某个项或追加新项。目标数组必须已存在。创建新项时推荐使用[appendArrayItem()](#xmpmetaappendarrayitem)和[insertArrayItem()](#xmpmetainsertarrayitem)。

##### 参数

|   参数名    |   类型   |  说明   |
|------------|------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| `schemaNS`  | [模式命名空间字符串常量](#schema-namespace-string-constants)  | 命名空间URI字符串。  |
| `arrayName`   | 字符串   | 数组类型属性名称字符串。可以是通用路径表达式。   |
| `itemIndex`   | 数字   | 要替换的项位置（基于1的索引）。使用`XMPConst.ARRAY_LAST_ITEM`表示替换数组最后一个现有项。 |
| `itemValue`   | 字符串   | 新项值字符串。对于没有值的数组项可传`null`。  |
| `itemOptions` | 描述新项的标志位（当创建新项时）。可选值：  | 可选   |
|   | - `0`：简单项（默认值）   |  |
|   | - `XMPConst.PROP_IS_ARRAY`：该项是数组（alt/bag/seq类型） |  |
|   | - `XMPConst.PROP_IS_STRUCT`：该项是包含嵌套字段的结构体   |  |

##### 返回值

无

---

#### XMPMeta.setLocalizedText()

`XMPMetaObj.setLocalizedText(schemaNS, altTextName, genericLang, specificLang, itemValue, setOptions)`

##### 描述

为交替文本数组中的特定语言设置文本值。处理x-default项的特殊情况。

##### 参数

|   参数名   |  类型   |  说明   |
| ----------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `schemaNS`   | [模式命名空间字符串常量](#schema-namespace-string-constants) | 命名空间URI字符串。   |
| `altTextName`  | 字符串  | 交替文本数组的名称字符串。可以是通用路径表达式。  |
| `genericLang`  | 字符串  | RFC 3066主标签格式的通用语言名称。可为null或空字符串。  |
| `specificLang` | 字符串  | RFC 3066主标签格式的特定语言名称（如en-US）。必须指定。 |
| `itemValue`  | 字符串  | 新字符串值。   |
| `setOptions`   | 未知类型   | 未使用。   |

##### 返回值

无

---

#### XMPMeta.setStructField()

`XMPMetaObj.setStructField(schemaNS, structName, fieldNS, fieldName, fieldValue[, options])`

##### 描述

设置结构体类型属性中某个字段的值。如果指定字段不存在则创建新字段，如果指定结构体不存在则创建包含该字段的新结构体。

##### 参数

|  参数名   |  类型  |  说明   |
|----------|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| `schemaNS`   | [模式命名空间字符串常量](#schema-namespace-string-constants)   | 命名空间URI字符串。   |
| `structName` | 字符串  | 现有结构体的名称字符串。可以是通用路径表达式。 |
| `fieldNS`  | [模式命名空间字符串常量](#schema-namespace-string-constants)   | 字段类型命名空间字符串。  |
| `fieldName`  | 字符串  | 字段名称字符串。必须是简单XML名称。   |
| `fieldValue` | 字符串  | 新字段值字符串。对于没有值的字段可传null。   |
| `options`  | 描述新结构体的标志位。可选值：   | 可选。仅在创建结构体时使用。  |
|  | - `0` - 简单项（默认值）   |   |
|  | - `XMPConst.PROP_IS_ARRAY` - 该项是数组（alt/bag/seq类型） |   |
|  | - `XMPConst.PROP_IS_STRUCT` - 该项是包含嵌套字段的结构体   |   |

##### 返回值

无

---

#### XMPMeta.setQualifier()

`XMPMetaObj.setQualifier(schemaNS, propName, qualNS, qualName, qualValue[, options])`

##### 描述

为元数据属性附加新的限定符。限定符可以添加到简单属性、数组项、结构体字段或其他限定符上。

##### 参数

|  参数名  |  类型  |  说明   |
|---------|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| `schemaNS`  | [模式命名空间字符串常量](#schema-namespace-string-constants)   | 命名空间URI字符串。   |
| `propName`  | 字符串  | 现有属性的名称字符串。可以是通用路径表达式。  |
| `qualNS`  | 字符串  | 限定符命名空间的URI。使用方式与模式命名空间相同（URI和前缀）。  |
| `qualName`  | 字符串  | 限定符名称。必须是简单XML名称。前缀使用方式与属性名相同。 |
| `qualValue` | 字符串  | 新限定符值字符串。对于没有值的限定符可传null。   |
| `options`   | 描述限定符的标志位。可选值：   | 可选。仅在创建限定符时使用。  |
|   | - `0` - 简单项（默认值）   |   |
|   | - `XMPConst.PROP_IS_ARRAY` - 该项是数组（alt/bag/seq类型） |   |
|   | - `XMPConst.PROP_IS_STRUCT` - 该项是包含嵌套字段的结构体   |   |

##### 返回值

无

---

#### XMPMeta.setProperty()

`XMPMetaObj.setProperty(schemaNS, propName, propValue[, setOptions, valueType])`

##### 描述

设置简单元数据属性的值（必要时会创建该属性），或创建新的数组/结构体属性。对于创建数组和结构体属性，推荐使用[setArrayItem()](#xmpmetasetarrayitem)和[setStructField()](#xmpmetasetstructfield)。本方法适用于创建/设置顶层简单属性，或在[XMPUtils对象](#xmputils-object)的路径组合函数之后使用。

##### 参数

|  参数名   |  类型  |  说明  |
|----------|-------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| `schemaNS`   | [模式命名空间字符串常量](#schema-namespace-string-constants)   | 命名空间URI字符串。   |
| `propName`   | 字符串  | 属性名称字符串。可以是通用路径表达式。   |
| `propValue`  | 字符串  | 新属性值字符串。传null可创建数组或非叶子层级的结构体属性。 |
| `setOptions` | 简单值属性的标志位。其他常量值：  | 可选。当指定属性不存在时，控制要创建的属性类型。默认为`0`。   |
|  | - `0` - 简单项（默认值）   |   |
|  | - `XMPConst.PROP_IS_ARRAY` - 该项是数组（alt/bag/seq类型） |   |
|  | - `XMPConst.PROP_IS_STRUCT` - 该项是包含嵌套字段的结构体   |   |
| `valueType`  | 属性数据类型。可选值：   | 可选。若指定，会将值转换为该类型。   |
|  | - `XMPConst.STRING`   |   |
|  | - `XMPConst.INTEGER`  |   |
|  | - `XMPConst.NUMBER`   |   |
|  | - `XMPConst.BOOLEAN`  |   |
|  | - `XMPConst.XMPDATE`  |   |

##### 返回值

无

---

#### XMPMeta.sort()

`XMPMetaObj.sort()`

##### 描述

按字母顺序排序XMP内容：

- 顶层按命名空间前缀排序
- 命名空间内按属性名称排序顶层属性
- 结构体内按字段的限定名称（即XML`prefix:local`形式）排序
- 简单项的无序数组按值排序
- 语言交替数组按`xml:lang`限定符排序，`"x-default"`项排在首位

##### 返回值

无

---

## XMPPacketInfo对象

该对象由[XMPFile.getPacketInfo()](#xmpfilegetpacketinfo)返回。其只读属性描述了[XMPFile对象](#xmpfile-object)所代表文件的XMP包信息。

---

### XMPPacketInfo对象属性

|  参数名  |  类型   |  说明   |
|---------|---------|---------------------------------------------------------------------|
| `charForm`  | 数字  | 包中的字符编码格式，可选值：   |
|   |   | - `0` - UTF8  |
|   |   | - `2` - UTF-16大端序  |
|   |   | - `3` - UTF-16小端序   |
|   |   | - `4` - UTF-32大端序  |
|   |   | - `5` - UTF-32小端序   |
| `length`  | 数字  | 包的字节长度。  |
| `offset`  | 数字  | 包在文件中的起始字节偏移量。 |
| `packet`  | 字符串  | 原始包数据。  |
| `padSize`   | 数字  | 包的填充字节数（未知时为0）。   |
| `writeable` | 布尔值 | 为`true`时表示包可写入。   |