---
title: xmpscript 对象参考
---
# XMPScript 对象参考

此处按字母顺序列出了为 XMP JavaScript API 定义的类及其属性和方法。

加载库后，这些 XMP 类在全局 JavaScript 命名空间中可用：

| 对象 | 描述 |
| --- | --- |
| [XMPMeta 对象](#xmpmeta-object) | 提供 XMP Toolkit 的核心服务。 |
| [XMPFile 对象](#xmpfile-object) | 提供对文件的主或文档级 XMP 的便捷 I/O 访问。 |
| [XMPUtils 对象](#xmputils-object) | 提供用于数组处理的附加实用函数。 |
| [XMPDateTime 对象](#xmpdatetime-object)| 表示日期时间值。 |
| [XMPConst 对象](#xmpconst-object) | 包含用于 JavaScript API 的数字和字符串常量值。 |

这些顶级对象提供了对附加支持类的访问：

| 对象 | 描述 |
| --- | --- |
| [XMPIterator 对象](#xmpiterator-object) | 允许遍历 [XMPMeta 对象](#xmpmeta-object) 中的属性。 |
| [XMPProperty 对象](#xmpproperty-object) | 描述元数据属性。 |
| [XMPAliasInfo 对象](#xmpaliasinfo-object) | 描述元数据别名。 |
| [XMPFileInfo 对象](#xmpfileinfo-object) | 描述文件。 |
| [XMPPacketInfo 对象](#xmppacketinfo-object)| 描述文件中的原始 XMP 数据包。 |

---

## XMPAliasInfo 对象

此对象由 [XMPMeta.resolveAlias](#xmpmetaresolvealias) 返回。只读属性描述 XMP 元数据别名。

### XMPAliasInfo 对象属性

| 属性 | 类型 | 描述 |
|---|---|---|
| arrayForm | Number | 描述解析别名的属性类型的常量，0 表示简单属性。常量为： |
| | | - `XMPConst.ALIAS_TO_SIMPLE_PROP`：直接映射。可以是简单到简单、数组到数组或结构到结构。 |
| | | - `XMPConst.ALIAS_TO_ARRAY`：实际属性是无序数组；别名指向第一个元素。 |
| | | - `XMPConst.ALIAS_TO_ORDERED_ARRAY`：实际属性是有序数组；别名指向第一个元素。 |
| | | - `XMPConst.ALIAS_TO_ALT_ARRAY`：实际属性是替代数组；别名指向第一个元素。 |
| | | - `XMPConst.ALIAS_TO_ALT_TEXT`：实际属性是替代文本数组；别名指向 `x-default` 元素。 |
| name | String | 别名解析到的属性名称。 |
| namespace | String | 别名解析到的属性命名空间。参见 [Schema 命名空间字符串常量](#schema-namespace-string-constants)。 |

---

## XMPConst 对象

此对象包含用于 JavaScript XMP API 的只读常量定义。其中一些在使用它们的上下文中列出。此处提供了更长的列表。

### Schema 命名空间字符串常量

用于所有获取和设置属性操作的命名空间 URI 字符串的常量值。参见 [XMPMeta 对象](#xmpmeta-object)。

| 命名空间 | 描述 |
| --- | --- |
| `NS_DC` | Dublin Core 模式的 XML 命名空间，[http://purl.org/dc/elements/1.1](http://purl.org/dc/elements/1.1) |
| `NS_IPTC_CORE` | IPTC Core 模式的 XML 命名空间。 |
| `NS_RDF` | RDF 的 XML 命名空间。 |
| `NS_XML` | XML 的 XML 命名空间。 |
| `NS_XMP` | XMP 基本模式的 XML 命名空间。 |
| `NS_XMP_RIGHTS` | XMP 版权模式的 XML 命名空间。 |
| `NS_XMP_MM` | XMP 数字资产管理模式的 XML 命名空间。 |
| `NS_XMP_BJ` | 作业管理模式的 XML 命名空间。 |
| `NS_XMP_NOTE` | XMP 注释模式的 XML 命名空间。Adobe 私有命名空间；请勿创建新属性。 |
| `NS_PDF` | PDF 模式的 XML 命名空间。 |
| `NS_PDFX` | PDFX 模式的 XML 命名空间。Adobe 私有命名空间；请勿创建新属性。 |
| `NS_PHOTOSHOP` | Adobe Photoshop 自定义模式的 XML 命名空间。 |
| `NS_PS_ALBUM` | Adobe Photoshop Album 自定义模式的 XML 命名空间。 |
| `NS_EXIF` | Adobe 的 EXIF 模式的 XML 命名空间。 |
| `NS_EXIF_AUX` | Adobe 的 EXIF 辅助模式的 XML 命名空间。 |
| `NS_TIFF` | Adobe 的 TIFF 模式的 XML 命名空间。 |
| `NS_PNG` | PNG 模式的 XML 命名空间。 |
| `NS_JPEG` | JPEG 模式的 XML 命名空间。 |
| `NS_SWF` | Flash 小型网页格式模式的 XML 命名空间。 |
| `NS_JPK` | JPK 模式的 XML 命名空间。 |
| `NS_CAMERA_RAW` | Camera Raw 模式的 XML 命名空间。 |
| `NS_DM` | DM 模式的 XML 命名空间。 |
| `NS_ADOBE_STOCK_PHOTO` | Adobe Stock Photos 模式的 XML 命名空间。 |
| `NS_ASF` | Microsoft 高级流格式模式的 XML 命名空间。 |

---

### 类型命名空间字符串常量

用于所有结构化属性操作的字段类型命名空间 URI 字符串的常量值。参见 [XMPMeta 对象](#xmpmeta-object)。

| 命名空间 | 描述 |
| --- | --- |
| `TYPE_IDENTIFIER_QUAL` | 用于 xmp:Identifier 属性的限定符的 XML 命名空间。 |
| `TYPE_DIMENSIONS` | 用于 Dimensions 类型字段的 XML 命名空间。 |
| `TYPE_TEXT` | XMP 文本文档模式的 XML 命名空间。 |
| `TYPE_PAGEDFILE` | XMP 分页文档模式的 XML 命名空间。 |
| `TYPE_GRAPHICS` | 包含文档中使用的着色剂（色板）特征的结构体的 XML 命名空间。 |
| `TYPE_IMAGE` | 用于图形图像字段的 XML 命名空间。用于 Thumbnail 类型。 |
| `TYPE_FONT` | 包含文档中使用的字体特征的结构体的 XML 命名空间。 |
| `TYPE_RESOURCE_EVENT` | 用于 ResourceEvent 类型字段的 XML 命名空间。 |
| `TYPE_RESOURCE_REF` | 用于 ResourceRef 类型字段的 XML 命名空间。 |
| `TYPE_ST_VERSION` | 用于 Version 类型字段的 XML 命名空间。 |
| `TYPE_ST_JOB` | 用于 JobRef 类型字段的 XML 命名空间。 |
| `TYPE_MANIFEST_ITEM` | 用于清单数组元素的 XML 命名空间。 |
| `TYPE_PDFA_SCHEMA` | |
| `TYPE_PDFA_PROPERTY` | |
| `TYPE_PDFA_TYPE` | |
| `TYPE_PDFA_FIELD` | |
| `TYPE_PDFA_ID` | |
| `TYPE_PDFA_EXTENSION` | 用于 PDF 子类型的 XML 命名空间 |

---

### 文件格式数字常量

用于 I/O 操作的受支持文件类型的常量值。参见 [XMPFile 对象](#xmpfile-object)。

| 常量 | 描述 |
| --- | --- |
| `FILE_UNKNOWN` | 未知文件格式。 |
| `FILE_PDF` | PDF |
| `FILE_POSTSCRIPT` | PS，遵循 DSC 约定的通用 PostScript |
| `FILE_EPS` | EPS，封装的 PostScript |
| `FILE_JPEG` | JPEG |
| `FILE_JPEG2K` | JPX，JPEG 2000 文件 |
| `FILE_TIFF` | TIFF |
| `FILE_GIF` | GIF |
| `FILE_PNG` | PNG |
| `FILE_SWF` | SWF，Flash 文件 |
| `FILE_FLA` | FLA，Flash 创作文件 |
| `FILE_FLV` | FLV，Flash 视频文件 |
| `FILE_MOV` | MOV，Quicktime |
| `FILE_AVI` | AVI |
| `FILE_CIN` | CIN，Cineon |
| `FILE_WAV` | WAV |
| `FILE_MP3` | MP3 |
| `FILE_SES` | SES，Audition 会话 |
| `FILE_CEL` | CEL，Audition 循环 |
| `FILE_MPEG` | MPEG |
| `FILE_MPEG2` | MP2 |
| `FILE_MPEG4` | MP4 |
| `FILE_WMAV` | WMAV，Windows Media 音频和视频 |
| `FILE_AIFF` | AIFF |
| `FILE_HTML` | HTML |
| `FILE_XML` | XML |
| `FILE_TEXT` | TEXT |
| `FILE_PHOTOSHOP` | PSD，Photoshop |
| `FILE_ILLUSTRATOR` | AI，Illustrator |
| `FILE_INDESIGN` | INDD，Indesign |
| `FILE_AE_PROJECT` | AE，After Effects |
| `FILE_AE_PROJECT_TEMPLATE` | AET，After Effects 项目模板 |
| `FILE_AE_FILTER_PRESET`| FFX，After Effects 滤镜预设文件 |
| `FILE_ENCORE_PROJECT` | NCOR，Encore DVD 项目文件 |
| `FILE_PREMIERE_PROJECT`| PRPJ，Premiere 项目文件 |
| `FILE_PREMIERE_TITLE` | PRTL，Premiere 标题文件 |

---

## XMPDateTime 对象

此类表示日期和时间。时间包括时区，并且可以具有纳秒级精度。

### XMPDateTime 对象构造函数

```javascript
new XMPDateTime(); // 创建一个包含 0 日期的对象
new XMPDateTime(date); // 使用 JavaScript 日期初始化对象
new XMPDateTime(iso8601Date); // 使用 ISO 日期初始化对象
```

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| date | JavaScript `Date` 对象。 | 时区设置为本地操作系统的时区值。XMP Toolkit 中的时间可以具有纳秒级精度；但是，当与 JavaScript Date 值相互转换时，时间精度会降低到毫秒级。 |
| iso8601Date | String | ISO 8601 格式的日期时间；例如：`"2007-04-10T17:54:50+01:00"` |

---

### XMPDateTime 对象属性

所有属性都是可读写的，允许您修改日期时间值。如果设置的值超出允许范围，则自动设置为最小或最大允许值。

| 属性 | 类型 | 描述 |
|---|---|---|
| `year` | Number | 年份，范围为 `[0000...9999]`。 |
| `month` | Number | 月份，范围为 `[1...12]`。 |
| `day` | Number | 日期，范围为 `[1...31]`。 |
| `hour` | Number | 小时，范围为 `[1...23]`。 |
| `minute` | Number | 分钟，范围为 `[1...59]`。 |
| `second` | Number | 秒，范围为 `[1...59]`。 |
| `nanosecond` | Number | 纳秒，范围为 `[0...1e+9 -1]`。 |
| `tzSign` | Number | 时区偏移方向。 |
| | | - `0`：UTC |
| | | - `-1`：西区 |
| | | - `1`：东区 |
| `tzHour` | Number | 时区与格林威治标准时间的小时偏移，范围为 `[1...23]`。 |
| `tzMinute` | Number | 时区与格林威治标准时间的分钟偏移，范围为 `[1...59]`。 |

---

### XMPDateTime 对象函数

#### XMPDateTime.compareTo()

`XMPDateTime.compareTo(xmpDateTime)`

##### 描述

报告两个日期时间值的时间顺序。

##### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| xmpDataTime | XMPDateTime 对象 | 要比较的对象 |

##### 返回

- `0` 如果两个值相同，
- `1` 如果此日期时间晚于比较值
- `-1` 如果此日期时间早于比较值

---

#### XMPDateTime.convertToLocalTime()

`XMPDateTime.convertToLocalTime()`

##### 描述

将此对象中的时区设置为本地操作系统的时区，必要时从先前的时区调整时间值。

##### 返回

无

---

#### XMPDateTime.convertToUTCTime()

`XMPDateTime.convertToUTCTime()`

##### 描述

将此对象中的时区设置为 UTC（协调世界时），必要时从先前的时区调整时间值。

##### 返回

无

---

#### XMPDateTime.getDate()

`XMPDateTime.getDate()`

##### 描述

将此日期时间值转换为 JavaScript Date。时区被归一化（JavaScript 格式不支持时区），精度降低到毫秒级。

##### 返回

返回一个 JavaScript `Date` 对象。

---

#### XMPDateTime.setLocalTimeZone()

`XMPDateTime.setLocalTimeZone()`

##### 描述

将此对象中的时区设置为当前操作系统的值，替换任何现有值。

不影响其他字段。

##### 返回

无

---

## XMPFile 对象

此类对应 Adobe XMP Toolkit 的文件处理组件，提供对文件中主文档层级 XMP 数据的便捷 I/O 访问。

文件处理器支持 XMP 规范中定义的所有可嵌入 XMP 元数据的文件格式。允许您在原本没有 XMP 的位置添加 XMP、扩展现有 XMP（不考虑现有填充）、以及协调 XMP 与其他元数据格式的关系。

XMP Toolkit 还提供数据包扫描器作为不支持文件格式的备用解决方案。通过对文件进行转储扫描，为所有文件格式提供更有限的访问。它可以更新文件，但不能扩展数据包或协调其他元数据格式。

:::note
当前 XMPScript API 不支持检索缩略图。

详细信息请参阅《Adobe Bridge JavaScript 指南》和《Adobe Bridge JavaScript 参考》。
:::

---

### XMPFile 对象构造函数

`new XMPFile(filePath, format, openFlags)`

| 属性 | 类型 | 描述 |
|---|---|---|
| `filePath` | String | 文件路径 |
| `format` | [文件格式数字常量](#file-format-numeric-constants) | 要创建的文件格式 |
| `openFlags` | 常量值，可选以下之一： | 文件打开选项 |
| | - `XMPConst.OPEN_FOR_READ` - 以只读方式打开 |
| | - `XMPConst.OPEN_FOR_UPDATE` - 以读写方式打开 |
| | - `XMPConst.OPEN_ONLY_XMP` - 仅需要 XMP，允许空间/时间优化 |
| | - `XMPConst.OPEN_STRICTLY` - 严格定位 XMP 并与其他格式协调 |
| | - `XMPConst.OPEN_USE_SMART_HANDLER` - 要求使用智能处理器，不执行数据包扫描 |
| | - `XMPConst.OPEN_USE_PACKET_SCANNING` - 强制数据包扫描，不使用智能处理器 |
| | - `XMPConst.OPEN_LIMITED_SCANNING` - 仅扫描已知需要扫描的文件 |

---

### XMPFile 类属性

此属性作为 XMPFile 类的静态属性提供，无需创建实例即可访问。

| 属性 | 类型 | 描述 |
|---|---|---|
| `version` | String | 当前 XMP Toolkit 版本的描述字符串 |

---

### XMPFile 类函数

此函数作为 XMPFile 类的静态方法提供，无需创建实例即可调用。

#### XMPFile.getFormatInfo()

`XMPFile.getFormatInfo(format)`

##### 描述

报告给定文件格式的支持特性。

##### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `format` | [文件格式数字常量](#file-format-numeric-constants) | 要获取信息的格式 |

##### 返回值

位标志常量的逻辑或值，如果格式不被处理则返回 0。常量包括：

- `XMPConst.HANDLER_CAN_INJECT_XMP` - 可向现有文件首次注入 XMP
- `XMPConst.HANDLER_CAN_EXPAND` - 可扩展现有文件中的 XMP 或其他元数据
- `XMPConst.HANDLER_CAN_REWRITE` - 可将文件复制到另一个文件并写入新元数据
- `XMPConst.HANDLER_PPEFERS_IN_PLACE` - 可扩展但偏好就地更新
- `XMPConst.HANDLER_CAN_RECONCILE` - 支持 XMP 与其他格式之间的协调
- `XMPConst.HANDLER_ALLOWS_ONLY_XMP` - 仅允许访问 XMP，忽略其他格式
- `XMPConst.HANDLER_RETURNS_RAW_PACKETS` - 文件处理器返回原始 XMP 数据包信息
- `XMPConst.HANDLER_RETURNS_TNAIL` - 文件处理器返回原生缩略图
- `XMPConst.HANDLER_OWNS_FILE` - 文件处理器负责文件的打开和关闭
- `XMPConst.HANDLER_ALLOWS_SAFE_UPDATE` - 文件处理器允许崩溃安全的文件更新
- `XMPConst.HANDLER_NEEDS_READONLY_PACKET` - 文件格式需要 XMP 数据包为只读
- `XMPConst.HANDLER_USES_SIDECAR_XMP` - 文件处理器使用辅助文件存储 XMP

---

### XMPFile 对象函数

#### XMPFile.canPutXMP()

`XMPFileObj.canPutXMP(xmpObj)`

`XMPFileObj.canPutXMP(xmpPacket)`

`XMPFileObj.canPutXMP(xmpBuffer)`

##### 描述

报告给定大小的 XMP 元数据是否可以更新到此文件中。当数据包大小增加时尤为重要。

仅考虑序列化数据包的长度；不保留提供的 XMP。使用 [putXMP()](#xmpfileputxmp) 实际更新打开文件中的 XMP。

##### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `xmpObj` | [XMPMeta 对象](#xmpmeta-object) | 要检查的 XMP 元数据 |
| `xmpPacket` | String | 包含 XMP 数据包的字符串 |
| `xmpBuffer` | Number 数组 | 原始 XMP 数据包数据 |

##### 返回值

布尔值。如果可以将给定 XMP 放入此文件则返回 `true`。

---

#### XMPFile.closeFile()

`XMPFileObj.closeFile(closeFlags)`

##### 描述

关闭此打开的文件，必要时写入；即如果文件是以更新方式打开的，并且 XMP 元数据已更新或注入。文件打开时提供的选项决定此函数是否协调 XMP 与其他元数据格式；即是否更新任何传统元数据以与 XMP 元数据保持一致。

##### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `closeFlags` | 关闭选项常量或 `0`，可选以下之一： | 关闭使用的标志 |
| | - `XMPConst.CLOSE_UPDATE_SAFELY` - 写入临时文件然后交换以确保崩溃安全 |

##### 返回值

无

---

#### XMPFile.getXMP()

`XMPFileObj.getXMP()`

##### 描述

从此文件中检索并解析现有的 XMP 元数据。如果文件格式包含文件处理器可识别的传统元数据，则函数会创建包含该元数据的 XMP 数据包。

##### 返回值

[XMPMeta 对象](#xmpmeta-object)，如果文件不包含 XMP 或可转换的传统元数据则返回 `null`。

---

#### XMPFile.getPacketInfo()

`XMPFileObj.getPacketInfo()`

##### 描述

从此文件检索原始 XMP 数据包及其相关信息。文件打开时的选项决定此函数是否协调其他元数据格式与 XMP。

##### 返回值

[XMPPacketInfo 对象](#xmppacketinfo-object)，如果文件不包含 XMP 元数据则返回 `null`。

---

#### XMPFile.getFileInfo()

`XMPFileObj.getFileInfo()`

##### 描述

检索此文件的基本信息。

##### 返回值

[XMPFileInfo 对象](#xmpfileinfo-object)。

---

#### XMPFile.putXMP()

`XMPFileObj.putXMP(xmpObj)`

`XMPFileObj.putXMP(xmpPacket)`

`XMPFileObj.putXMP(xmpOBuffer)`

##### 描述

为此文件提供新的 XMP 元数据。文件直到调用 [closeFile()](#xmpfileclosefile) 时才会实际写入。文件打开时提供的选项决定该函数是否协调 XMP 与其他元数据格式；即是否更新任何传统元数据以与 XMP 元数据保持一致。

##### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `xmpObj` | XMPMeta 对象 | 作为 XMPMeta 对象的 XMP 元数据 |
| `xmpPacket` | String | 包含 XMP 数据包的字符串 |
| `xmpBuffer` | Number 数组 | 包含原始 XMP 数据包数据的数组 |

##### 返回值

无

---

## XMPFileInfo 对象

此对象由 [XMPFile.getFileInfo](#xmpfilegetfileinfo) 返回。只读属性描述 [XMPFile 对象](#xmpfile-object) 代表的文件。

:::note
此对象与 Adobe Creative Suite 4 应用程序用于显示元数据的 XMP 文件信息对话框无关。
:::

---

### XMPFileInfo 对象属性

| 属性 | 类型 | 描述 |
|---|---|---|
| `filePath` | String | 文件的绝对路径（JavaScript 表示法） |
| `format` | Number | 文件格式常量之一。参见 [文件格式数字常量](#file-format-numeric-constants) |
| `handlerFlags`| Number | 此格式支持的特性。位标志常量的逻辑或值： |
| | | - `XMPConst.HANDLER_CAN_INJECT_XMP` - 可向现有文件首次注入 XMP |
| | | - `XMPConst.HANDLER_CAN_EXPAND` - 可扩展现有文件中的 XMP 或其他元数据 |
| | | - `XMPConst.HANDLER_CAN_REWRITE` - 可复制文件并写入新元数据 |
| | | - `XMPConst.HANDLER_PPEFERS_IN_PLACE` - 可扩展但偏好就地更新 |
| | | - `XMPConst.HANDLER_CAN_RECONCILE` - 支持 XMP 与其他格式的协调 |
| | | - `XMPConst.HANDLER_ALLOWS_ONLY_XMP` - 仅允许访问 XMP，忽略其他格式 |
| | | - `XMPConst.HANDLER_RETURNS_RAW_PACKETS` - 返回原始 XMP 数据包信息 |
| | | - `XMPConst.HANDLER_RETURNS_TNAIL` - 返回原生缩略图 |
| | | - `XMPConst.HANDLER_OWNS_FILE` - 处理器负责文件的打开和关闭 |
| | | - `XMPConst.HANDLER_ALLOWS_SAFE_UPDATE` - 允许崩溃安全的文件更新 |
| `openFlags` | Number | 打开此文件时的选项。可选以下常量之一： |
| | | - `XMPConst.OPEN_FOR_READ` - 以只读方式打开 |
| | | - `XMPConst.OPEN_FOR_UPDATE` - 以读写方式打开 |
| | | - `XMPConst.OPEN_ONLY_XMP` - 仅需要 XMP，允许空间/时间优化 |
| | | - `XMPConst.OPEN_STRICTLY` - 严格定位 XMP 并与其他格式协调 |
| | | - `XMPConst.OPEN_USE_SMART_HANDLER` - 要求使用智能处理器，不扫描数据包 |
| | | - `XMPConst.OPEN_USE_PACKET_SCANNING` - 强制数据包扫描，不使用智能处理器 |
| | | - `XMPConst.OPEN_LIMITED_SCANNING` - 仅扫描已知需要扫描的文件 |

---

## XMPIterator 对象

通过调用 [XMPMeta.iterator](#xmpmetaiterator) 创建。递归遍历 [XMPMeta 对象](#xmpmeta-object) 的属性和限定符，并将其作为 [XMPProperty 对象](#xmpproperty-object) 返回。

该对象没有 JavaScript 属性。

---

### XMPIterator 对象函数

#### XMPIterator.next()

`XMPIteratorObj.next()`

##### 描述

检索元数据中的下一项。

##### 返回值

[XMPProperty 对象](#xmpproperty-object)，如果没有更多项则返回 null。

---

#### XMPIterator.skipSiblings()

`XMPIteratorObj.skipSiblings()`

##### 描述

跳过当前节点下方的子树及其兄弟节点，在后续调用 [next()](#xmpiteratornext) 时生效。

##### 返回值

无

---

#### XMPIterator.skipSubtree()

`XMPIteratorObj.skipSubtree()`

##### 描述

跳过当前节点下方的子树，在后续调用 [next()](#xmpiteratornext) 时生效。

##### 返回值

无

---

## XMPMeta 对象

此类提供 XMP Toolkit 的核心服务。函数提供从 XMP 命名空间创建和查询元数据属性的能力。类还提供允许您创建和查询命名空间和别名的静态函数。

类上有一个提供 XMP 版本信息的静态属性；实例中没有 JavaScript 属性。对象封装了一组元数据属性，您通过对象函数访问这些属性。

通用函数 [getProperty()](#xmpmetagetproperty)、[setProperty()](#xmpmetasetproperty) 和 [deleteProperty()](#xmpmetadeleteproperty) 允许您在使用适当组合的路径表达式时操作所有类型的属性。为方便起见，对象还为特定类型的属性（如数组）提供了更具体的函数。

---

### XMPMeta 对象构造函数

要创建 `XMPMeta` 对象，请使用 `new` 运算符。构造函数接受作为字符串的 RDF/XML 序列化元数据包，或仅包含字节值的数字数组。它返回新对象。如果不提供参数，则新对象为空；您可以使用对象的函数添加命名空间和属性。

首次调用这些构造函数中的任何一个时，会通过注册标准命名空间和别名来初始化库：

```javascript
new XMPMeta ( ); // 创建一个空对象
new XMPMeta ( packet );
new XMPMeta ( buffer );
```

##### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `packet` | String | XML 文件或 XMP 数据包 |
| `buffer` | Number 数组 | XML 文件或 XMP 数据包的 UTF-8 或 UTF-16 编码字节。此数组是 [XMPMeta.serializeToArray](#xmpmetaserializetoarray) 的结果 |

---

### XMPMeta 类属性

`XMPMeta` 类提供此静态属性。无需创建实例即可访问它。

##### 属性

| 属性 | 类型 | 描述 |
|---|---|---|
| `version` | String | 当前 XMP Toolkit 版本的描述字符串 |

---

### XMPMeta 类函数

`XMPMeta` 类提供这些静态函数。无需创建实例即可调用它们。

#### XMPMeta.deleteAlias()

`XMPMeta.deleteAlias(aliasNS, aliasProp)`

##### 描述

删除指定的别名；不删除被别名的属性。

如果别名不存在，则不执行任何操作。

:::note
XMP Toolkit 中尚未实现。
:::

##### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `aliasNS` | String | 命名空间 URI 字符串。参见 [模式命名空间字符串常量](#schema-namespace-string-constants) |
| `aliasProp` | String | 别名属性字符串 |

##### 返回值

无

---

#### XMPMeta.deleteNamespace()

`XMPMeta.deleteNamespace(namespaceURI)`

##### 描述

删除已注册的前缀-命名空间 URI 对。

:::note
XMP Toolkit 中尚未实现。
:::

##### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `namespaceURI` | String | 命名空间 URI 字符串。参见 [模式命名空间字符串常量](#schema-namespace-string-constants) |

##### 返回值

无

---

#### XMPMeta.dumpAliases()

`XMPMeta.dumpAliases()`

##### 描述

创建并返回包含已注册别名及其目标的可读字符串。

##### 返回值

字符串

---

#### XMPMeta.dumpNamespaces()

`XMPMeta.dumpNamespaces()`

##### 描述

创建并返回包含已注册命名空间 URI 及其关联前缀的可读字符串。

##### 返回值

字符串

---

#### XMPMeta.getNamespacePrefix()

`XMPMeta.getNamespacePrefix(namespaceURI)`

##### 描述

检索与已注册命名空间 URI 关联的前缀。

##### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `namespaceURI` | String | 命名空间 URI 字符串。参见 [模式命名空间字符串常量](#schema-namespace-string-constants) |

##### 返回值

前缀字符串后跟冒号。

---

#### XMPMeta.getNamespaceURI()

`XMPMeta.getNamespaceURI(namespacePrefix)`

##### 描述

检索与命名空间前缀关联的已注册命名空间 URI。

##### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `namespacePrefix` | String | 命名空间前缀字符串 |

##### 返回值

URI 字符串。

---

#### XMPMeta.registerAlias()

`XMPMeta.registerAlias(aliasNS, aliasProp, actualNS, actualProp, arrayForm)`

##### 描述

定义一个从某个命名空间和属性到另一个命名空间的别名映射。别名可以是直接映射（别名和实际属性具有相同数据类型），也可以将简单别名映射到数组中的某个项（首项或替代文本数组中的`x-default`项）。

只要形式匹配，多个别名可以映射到同一个实际属性。如果相同别名和形式已存在，则调用无效。

##### 参数

| 参数名 | 类型 | 描述 |
|---|---|---|
| `aliasNS` | 字符串 | 别名命名空间字符串。参见[模式命名空间字符串常量](#schema-namespace-string-constants)。 |
| `aliasProp` | 字符串 | 别名属性，简单名称字符串。 |
| `actualNS` | [模式命名空间字符串常量](#schema-namespace-string-constants) | 被别名属性的命名空间字符串。 |
| `actualProp` | 字符串 | 被别名的属性，简单名称字符串。 |
| `arrayForm` | 数字 | 简单别名到数组项的数组形式，控制如果首次通过别名设置数组时如何创建数组。取以下常量之一： |
| | | - `XMPConst.ALIAS_TO_SIMPLE_PROP`（默认）- 直接映射。可以是简单到简单、数组到数组或结构到结构。 |
| | | - `XMPConst.ALIAS_TO_ARRAY` - 实际是无序数组，别名指向数组的第一个元素。 |
| | | - `XMPConst.ALIAS_TO_ORDERED_ARRAY` - 实际是有序数组，别名指向数组的第一个元素。 |
| | | - `XMPConst.ALIAS_TO_ALT_ARRAY` - 实际是替代数组，别名指向数组的第一个元素。 |
| | | - `XMPConst.ALIAS_TO_ALT_TEXT` - 实际是替代文本数组（本地化属性），别名指向数组的x-default元素。 |

#### 返回值

无

---

#### XMPMeta.registerNamespace()

`XMPMeta.registerNamespace(namespaceURI, suggestedPrefix)`

##### 描述

使用前缀注册命名空间。如果建议的前缀已被使用，则生成、注册并返回不同的前缀。

##### 参数

| 参数名 | 类型 | 描述 |
|---|---|---|
| namespaceURI | [模式命名空间字符串常量](#schema-namespace-string-constants) | 命名空间URI字符串。 |
| suggestedPrefix | 字符串 | 建议的命名空间前缀字符串。 |

##### 返回值

字符串，包含实际注册的前缀。如果建议的前缀未被占用，则返回`suggestedPrefix`，否则返回其他前缀。

---

#### XMPMeta.resolveAlias()

`XMPMeta.resolveAlias(aliasNS, aliasProp)`

##### 描述

检索别名映射到的实际属性的信息。

##### 参数

| 参数名 | 类型 | 描述 |
|---|---|---|
| schemaNS | [模式命名空间字符串常量](#schema-namespace-string-constants) | 别名命名空间URI字符串。 |
| aliasProp | 别名属性字符串。 | |

#### 返回值

一个[XMPAliasInfo对象](#xmpaliasinfo-object)。

---

### XMPMeta对象函数

#### XMPMeta.appendArrayItem()

`XMPMetaObj.appendArrayItem(schemaNS, arrayName[, itemOptions], itemValue[, arrayOptions])`

##### 描述

将项追加到现有数组，如果命名数组不存在，则创建新的数组类型属性。

##### 参数

| 参数名 | 类型 | 描述 |
|---|---|---|
| `schemaNS` | [模式命名空间字符串常量](#schema-namespace-string-constants)。 | 命名空间URI字符串。 |
| `arrayName` | 字符串 | 数组类型属性名称字符串。可以是通用路径表达式。 |
| `itemOptions` | 数字 | 可选。描述新项的标志（如果正在创建）。取以下值之一： |
| | | - `0`：默认值。简单项，或由arrayOptions值隐含的类型。 |
| | | - `XMPConst.PROP_IS_ARRAY`：项是数组（alt、bag或seq类型）。 |
| | | - `XMPConst.PROP_IS_STRUCT`：项是具有嵌套字段的结构。 |
| `itemValue` | 字符串 | 新项值字符串。对于没有值的数组项，传递`null`。 |
| `arrayOptions` | 数字 | 可选。描述数组形式的标志。如果正在创建数组，则必须提供；如果数组已存在，则忽略。取以下值之一： |
| | | - `XMPConst.ARRAY_IS_ORDERED` - 项顺序有意义。隐含`XMPConst.PROP_IS_ARRAY`。 |
| | | - `XMPConst.ARRAY_IS_ALTERNATIVE` - 项是互斥的替代项。隐含`XMPConst.PROP_IS_ARRAY`和`XMPConst.ARRAY_IS_ORDERED`。 |

##### 返回值

无

---

#### XMPMeta.countArrayItems()

`XMPMetaObj.countArrayItems(schemaNS, arrayName)`

##### 描述

报告数组类型元数据属性中的项数。

##### 参数

| 参数名 | 类型 | 描述 |
|---|---|---|
| `schemaNS` | [模式命名空间字符串常量](#schema-namespace-string-constants) | 命名空间URI字符串。 |
| `arrayName` | 字符串 | 数组类型属性名称字符串。可以是通用路径表达式。 |

##### 返回值

数字

---

#### XMPMeta.deleteArrayItem()

`XMPMetaObj.deleteArrayItem(schemaNS, arrayName, itemIndex)`

##### 描述

删除以给定数组项为根的元数据树。

##### 参数

| 参数名 | 类型 | 描述 |
|---|---|---|
| `schemaNS` | [模式命名空间字符串常量](#schema-namespace-string-constants) | 命名空间URI字符串。 |
| `arrayName` | 字符串 | 数组类型属性名称字符串。可以是通用路径表达式。 |
| `itemIndex` | 数字 | 项的1-based位置索引。使用`XMPConst.ARRAY_LAST_ITEM`引用数组中最后一个现有项。 |

##### 返回值

无

---

#### XMPMeta.deleteProperty()

`XMPMetaObj.deleteProperty(schemaNS, propName)`

##### 描述

删除以给定属性为根的元数据树。如果属性不存在，则不执行任何操作。

##### 参数

| 参数名 | 类型 | 描述 |
|---|---|---|
| `schemaNS` | [模式命名空间字符串常量](#schema-namespace-string-constants) | 命名空间URI字符串。 |
| `propName` | 字符串 | 属性名称字符串。可以是通用路径表达式。 |

##### 返回值

无

---

#### XMPMeta.deleteStructField()

`XMPMetaObj.deleteStructField(schemaNS, structName, fieldNS, fieldName)`

##### 描述

删除以给定结构字段为根的元数据树。

##### 参数

| 参数名 | 类型 | 描述 |
|---|---|---|
| `schemaNS` | [模式命名空间字符串常量](#schema-namespace-string-constants) | 命名空间URI字符串。 |
| `structName` | 字符串 | 结构名称字符串。可以是通用路径表达式。 |
| `fieldNS` | [模式命名空间字符串常量](#schema-namespace-string-constants) | 字段类型命名空间字符串。 |
| `fieldName` | 字符串 | 字段名称字符串。必须是简单XML名称。 |

##### 返回值

无

---

#### XMPMeta.deleteQualifier()

`XMPMetaObj.deleteQualifier(schemaNS, structName, qualNS, qualName)`

##### 描述

删除以给定限定符为根的元数据树。如果限定符不存在，则不执行任何操作。

##### 参数

| 参数名 | 类型 | 描述 |
|---|---|---|
| `schemaNS` | [模式命名空间字符串常量](#schema-namespace-string-constants) | 命名空间URI字符串。 |
| structName | 字符串 | 结构名称字符串。可以是通用路径表达式。 |
| qualNS | 字符串 | 限定符命名空间的URI字符串。 |
| qualName | 字符串 | 限定符名称字符串。必须是简单XML名称。 |

##### 返回值

无

---

#### XMPMeta.doesArrayItemExist()

`XMPMetaObj.doesArrayItemExist(schemaNS, arrayName, itemIndex)`

##### 描述

报告具有给定索引的数组项当前是否存在于元数据中的现有数组中。

##### 参数

| 参数名 | 类型 | 描述 |
|---|---|---|
| `schemaNS` | [模式命名空间字符串常量](#schema-namespace-string-constants) | 命名空间URI字符串。 |
| `arrayName` | 字符串 | 数组名称字符串。可以是通用路径表达式。 |
| `itemIndex` | 数字 | 项的1-based位置索引。 |

##### 返回值

布尔值。如果数组和项存在，则为`true`。

---

#### XMPMeta.doesPropertyExist()

`XMPMetaObj.doesPropertyExist(schemaNS, propName)`

##### 描述

报告具有给定名称的属性当前是否存在于元数据中。

##### 参数

| 参数名 | 类型 | 描述 |
|---|---|---|
| `schemaNS` | [模式命名空间字符串常量](#schema-namespace-string-constants) | 命名空间URI字符串。 |
| `propName` | 字符串 | 属性名称字符串。可以是通用路径表达式。 |

##### 返回值

布尔值。如果属性存在，则为`true`。

---

#### XMPMeta.doesStructFieldExist()

`XMPMetaObj.deleteStructField(schemaNS, structName, fieldNS, fieldName)`

##### 描述

报告具有给定名称的结构字段当前是否存在于元数据中。

##### 参数

| 参数名 | 类型 | 描述 |
|---|---|---|
| schemaNS | [模式命名空间字符串常量](#schema-namespace-string-constants) | 命名空间URI字符串。 |
| structName | 字符串 | 结构名称字符串。可以是通用路径表达式。 |
| fieldNS | [模式命名空间字符串常量](#schema-namespace-string-constants) | 字段类型命名空间字符串。 |
| fieldName | 字符串 | 字段名称字符串。必须是简单XML名称。 |

##### 返回值

布尔值。如果结构和字段存在，则为`true`。

---

#### XMPMeta.doesQualifierExist()

`XMPMetaObj.doesQualifierExist(schemaNS, structName, qualNS, qualName)`

##### 描述

报告给定属性是否存在具有给定名称的限定符。

##### 参数

| 参数名 | 类型 | 描述 |
|---|---|---|
| `schemaNS` | [模式命名空间字符串常量](#schema-namespace-string-constants) | 命名空间URI字符串。 |
| structName | 字符串 | 结构名称字符串。可以是通用路径表达式。 |
| qualNS | 字符串 | 限定符命名空间的URI字符串。 |
| qualName | 字符串 | 限定符名称字符串。必须是简单XML名称。 |

##### 返回值

布尔值。如果属性和限定符存在，则为`true`。

---

#### XMPMeta.dumpObject()

`XMPMetaObj.dumpObject()`

##### 描述

创建并返回包含此对象元数据内容的字符串（以RDF格式）。

##### 返回值

字符串

---

#### XMPMeta.getArrayItem()

`XMPMetaObj.getArrayItem(schemaNS, arrayName, itemIndex)`

##### 描述

从数组类型元数据属性中检索项。

##### 参数

| 参数名 | 类型 | 描述 |
|---|---|---|
| `schemaNS` | [模式命名空间字符串常量](#schema-namespace-string-constants) | 命名空间URI字符串。 |
| `arrayName` | 字符串 | 数组名称字符串。可以是通用路径表达式。 |
| `itemIndex` | 数字 | 项的1-based位置索引。使用`XMPConst.ARRAY_LAST_ITEM`引用数组中最后一个现有项。 |

##### 返回值

一个[XMPProperty对象](#xmpproperty-object)，如果未找到属性，则为`undefined`。

---

#### XMPMeta.getLocalizedText()

`XMPMetaObj.getLocalizedText(schemaNS, altTextName, genericLang, specificLang)`

##### 描述

从替代文本数组中检索特定语言的文本值。首先尝试匹配特定语言。如果未找到，则尝试匹配通用语言（如果指定）。如果仍未找到，则获取x-default项（如果有）。否则，获取第一项。

##### 参数

| 参数名 | 类型 | 描述 |
|---|---|---|
| `schemaNS` | [模式命名空间字符串常量](#schema-namespace-string-constants) | 命名空间URI字符串。 |
| `altTextName` | 字符串 | 替代文本数组名称字符串。可以是通用路径表达式。 |
| `genericLang` | 字符串 | 通用语言名称，作为RFC 3066主标签。可以为`null`或空字符串。 |
| `specificLang` | 字符串 | 特定语言名称，作为RFC 3066主标签；例如en-US。必须指定。 |

##### 返回值

字符串，如果未找到匹配值，则为`undefined`。

---

#### XMPMeta.getProperty()

`XMPMetaObj.getProperty(schemaNS, propName[, valueType])`

##### 描述

检索元数据属性的值和选项。用于顶级简单属性，或在XMPUtils对象中使用路径组合函数后使用。

##### 参数

| 参数名 | 类型 | 描述 |
|---|---|---|
| `schemaNS` | [模式命名空间字符串常量](#schema-namespace-string-constants) | 命名空间URI字符串。 |
| `propName` | 字符串 | 属性名称字符串。可以是通用路径表达式。 |
| `valueType` | 字符串 | 可选。属性数据类型，取以下值之一： |
| | | - `XMPConst.STRING` |
| | | - `XMPConst.INTEGER` |
| | | - `XMPConst.NUMBER` |
| | | - `XMPConst.BOOLEAN` |
| | | - `XMPConst.XMPDATE` |

##### 返回值

一个[XMPProperty对象](#xmpproperty-object)，如果未找到属性，则为`undefined`。

---

#### XMPMeta.getStructField()

`XMPMetaObj.getStructField(schemaNS, structName, fieldNS, fieldName)`

##### 描述

从元数据中的嵌套结构中检索字段值。

##### 参数

| 参数名 | 类型 | 描述 |
|---|---|---|
| `schemaNS` | [模式命名空间字符串常量](#schema-namespace-string-constants) | 命名空间URI字符串。 |
| `structName` | 字符串 | 结构名称字符串。可以是通用路径表达式。 |
| `fieldNS` | [模式命名空间字符串常量](#schema-namespace-string-constants) | 字段类型命名空间字符串。 |
| `fieldName` | 字符串 | 字段名称字符串。必须是简单XML名称。 |

##### 返回值

一个[XMPProperty对象](#xmpproperty-object)，如果未找到属性，则为`undefined`。

---

#### XMPMeta.getQualifier()

`XMPMetaObj.getQualifier(schemaNS, structName, qualNS, qualName)`

##### 描述

检索附加到元数据属性的限定符。

##### 参数

| 参数名 | 类型 | 描述 |
|---|---|---|
| `schemaNS` | [模式命名空间字符串常量](#schema-namespace-string-constants) | 命名空间URI字符串。 |
| `structName` | 字符串 | 结构名称字符串。可以是通用路径表达式。 |
| `qualNS` | 字符串 | 限定符命名空间的URI字符串。 |
| `qualName` | 字符串 | 限定符名称字符串。必须是简单XML名称。 |

##### 返回值

一个[XMPProperty对象](#xmpproperty-object)，如果未找到属性，则为`undefined`。

---

#### XMPMeta.insertArrayItem()

`XMPMetaObj.insertArrayItem(schemaNS, arrayName, itemIndex, itemValue[, itemOptions])`

##### 描述

在数组中现有项之前插入一个新项。所有后续项的索引位置都会递增。数组必须已存在。

##### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `schemaNS` | 命名空间URI字符串。参见[模式命名空间字符串常量](#schema-namespace-string-constants)。 | |
| `arrayName` | 字符串 | 数组类型属性名称字符串。可以是通用路径表达式。 |
| `itemIndex` | 数字 | 插入新项的1-based位置索引。使用`XMPConst.ARRAY_LAST_ITEM`引用数组中的最后一个现有项。 |
| `itemValue` | 字符串 | 新项值。对于没有值的数组项，传递`null`。 |
| `itemOptions` | 数字 | 可选。描述新项的标志，如果正在创建。可选值： |
| | | - `0`：简单项，默认值。 |
| | | - `XMPConst.PROP_IS_ARRAY`：该项是一个数组（alt、bag或seq类型）。 |
| | | - `XMPConst.PROP_IS_STRUCT`：该项是具有嵌套字段的结构。 |

##### 返回值

无

---

#### XMPMeta.iterator()

`XMPMetaObj.iterator(options, schemaNS, propName)`

##### 描述

创建一个迭代对象，可以迭代此元数据中的属性、数组和限定符。指定选项、命名空间和属性以限制结果项的范围和粒度。

##### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `options` | 这些位标志常量的逻辑OR： | 控制迭代方式和返回值的一组选项。 |
| | - `XMPConst.ITERATOR_JUST_CHILDREN` - 将迭代限制为根属性的直接子项。默认情况下，迭代进入子树。 | |
| | - `XMPConst.ITERATOR_JUST_LEAFNODES` - 将迭代限制为叶节点。默认情况下，迭代进入子树的所有节点。 | |
| | - `XMPConst.ITERATOR_JUST_LEAFNAMES` - 仅返回路径的叶部分。默认情况下，返回完整路径。 | |
| | - `XMPConst.ITERATOR_INCLUDE_ALIASES` - 包括别名。默认情况下，仅考虑实际属性。 | |
| | - `XMPConst.ITERATOR_OMIT_QUALIFIERS` - 从迭代中省略限定符。 | |
| `schemaNS` | [模式命名空间字符串常量](#schema-namespace-string-constants) | 命名空间URI字符串。 |
| `propName` | 字符串 | 数组类型属性名称字符串。可以是通用路径表达式。 |

##### 返回值

此元数据对象的[XMPIterator对象](#xmpiterator-object)。

---

#### XMPMeta.serialize()

`XMPMetaObj.serialize([options, padding, indent, newline, baseIndent])`

##### 描述

将此XMP元数据序列化为RDF格式的字符串。

##### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `options` | 可选。这些位标志常量的逻辑OR： | 控制序列化方式的一组选项。选项必须逻辑一致；如果冲突，函数将抛出异常。 |
| | - `XMPConst.SERIALIZE_OMIT_PACKET_WRAPPER` - 不包含XML包包装器。 | |
| | - `XMPConst.SERIALIZE_READ_ONLY_PACKET` - 创建只读XML包包装器。 | |
| | - `XMPConst.SERIALIZE_USE_COMPACT_FORMAT` - 使用高度紧凑的RDF语法和布局。 | |
| | - `XMPConst.SERIALIZE_USE_PLAIN_XMP` - 序列化为纯XMP（当前不支持）。 | |
| | - `XMPConst.SERIALIZE_INCLUDE_THUMBNAIL_PAD` - 如果不存在xmp:Thumbnail属性，则在填充中包含JPEG缩略图的典型空间。 | |
| | - `XMPConst.SERIALIZE_EXACT_PACKET_LENGTH` - 计算填充以满足padding参数提供的总包长度。如果未填充的包超过此长度，则抛出异常。 | |
| | - `XMPConst.SERIALIZE_WRITE_ALIAS_COMMENTS` - 包含别名的XML注释。 | |
| `padding` | 数字 | 可选。 |
| | | - 如果选项值为`SERIALIZE_EXACT_PACKET_LENGTH`，则这是包的确切长度，包括为满足此长度而添加的填充字符。 |
| | | - 如果选项值不是`SERIALIZE_EXACT_PACKET_LENGTH`，则这是要添加的填充字符数。 |
| | | - 默认值为`0`，表示使用适当的填充量。 |
| `indent` | 字符串 | 可选。用作缩进的字符串。默认为两个空格。 |
| `newline` | 字符串 | 可选。使用的新行字符。默认为`U+000A`。 |
| `baseIndent` | 数字 | 可选。最外层XML元素的缩进级别。默认为`0`。 |

##### 返回值

字符串

---

#### XMPMeta.serializeToArray()

`XMPMetaObj.serializeToArray([options, padding, indent, newline, baseIndent])`

##### 描述

将此XMP元数据序列化为RDF格式的字符串，然后将其转换为一个字节数值数组，即UTF-8或UTF-16编码的字符。

##### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `options` | 这些位标志常量的逻辑OR： | 可选。控制序列化方式的一组选项。选项必须逻辑一致；如果冲突，函数将抛出异常。 |
| | - `XMPConst.SERIALIZE_OMIT_PACKET_WRAPPER` - 不包含XML包包装器。 | |
| | - `XMPConst.SERIALIZE_READ_ONLY_PACKET` - 创建只读XML包包装器。 | |
| | - `XMPConst.SERIALIZE_USE_COMPACT_FORMAT` - 使用高度紧凑的RDF语法和布局。 | |
| | - `XMPConst.SERIALIZE_USE_PLAIN_XMP` - 序列化为纯XMP（当前不支持）。 | |
| | - `XMPConst.SERIALIZE_INCLUDE_THUMBNAIL_PAD` - 如果不存在xmp:Thumbnail属性，则在填充中包含JPEG缩略图的典型空间。 | |
| | - `XMPConst.SERIALIZE_EXACT_PACKET_LENGTH` - 计算填充以满足padding参数提供的总包长度。如果未填充的包超过此长度，则抛出异常。 | |
| | - `XMPConst.SERIALIZE_WRITE_ALIAS_COMMENTS` - 包含别名的XML注释。 | |
| `padding` | 数字 | 可选。 |
| | | - 如果选项值为`SERIALIZE_EXACT_PACKET_LENGTH`，则这是包的确切长度，包括为满足此长度而添加的填充字符。 |
| | | - 如果选项值不是`SERIALIZE_EXACT_PACKET_LENGTH`，则这是要添加的填充字符数。 |
| | | - 默认值为`0`，表示使用适当的填充量。 |
| `indent` | 字符串 | 可选。用作缩进的字符串。默认为两个空格。 |
| `newline` | 字符串 | 可选。使用的新行字符。默认为`U+000A`。 |
| `baseIndent` | 数字 | 可选。最外层XML元素的缩进级别。默认为`0`。 |

##### 返回值

数字数组

---

#### XMPMeta.setArrayItem()

`XMPMetaObj.setArrayItem(schemaNS, arrayName, itemIndex, itemValue[, itemOptions])`

##### 描述

替换数组中的项或追加项。数组必须已存在。要创建项，优先使用[appendArrayItem()](#xmpmetaappendarrayitem)和[insertArrayItem()](#xmpmetainsertarrayitem)。

##### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `schemaNS` | [模式命名空间字符串常量](#schema-namespace-string-constants) | 命名空间URI字符串。 |
| `arrayName` | 字符串 | 数组类型属性名称字符串。可以是通用路径表达式。 |
| `itemIndex` | 数字 | 插入新项的1-based位置索引。使用`XMPConst.ARRAY_LAST_ITEM`替换数组中的最后一个现有项。 |
| `itemValue` | 字符串 | 新项值字符串。对于没有值的数组项，传递`null`。 |
| `itemOptions` | 描述新项的标志，如果正在创建。可选值： | 可选 |
| | - `0`：简单项，默认值。 | |
| | - `XMPConst.PROP_IS_ARRAY`：该项是一个数组（alt、bag或seq类型）。 | |
| | - `XMPConst.PROP_IS_STRUCT`：该项是具有嵌套字段的结构。 | |

##### 返回值

无

---

#### XMPMeta.setLocalizedText()

`XMPMetaObj.setLocalizedText(schemaNS, altTextName, genericLang, specificLang, itemValue, setOptions)`

##### 描述

为替代文本数组中的特定语言设置文本值。处理x-default项的特殊情况。

##### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `schemaNS` | [模式命名空间字符串常量](#schema-namespace-string-constants) | 命名空间URI字符串。 |
| `altTextName` | 字符串 | 替代文本数组的名称字符串。可以是通用路径表达式。 |
| `genericLang` | 字符串 | 通用语言的名称，作为RFC 3066主要子标签。可以为null或空字符串。 |
| `specificLang` | 字符串 | 特定语言的名称，作为RFC 3066主要子标签；例如en-US。必须指定。 |
| `itemValue` | 字符串 | 新字符串值。 |
| `setOptions` | 未知 | 未使用。 |

##### 返回值

无

---

#### XMPMeta.setStructField()

`XMPMetaObj.setStructField(schemaNS, structName, fieldNS, fieldName, fieldValue[, options])`

##### 描述

设置结构类型属性中字段的值，如果命名字段在结构中不存在则创建新字段，如果命名结构不存在则创建包含命名字段的新结构。

##### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `schemaNS` | [模式命名空间字符串常量](#schema-namespace-string-constants) | 命名空间URI字符串。 |
| `structName` | 字符串 | 现有结构的名称字符串。可以是通用路径表达式。 |
| `fieldNS` | [模式命名空间字符串常量](#schema-namespace-string-constants) | 字段类型命名空间字符串。 |
| `fieldName` | 字符串 | 字段名称字符串。必须是简单的XML名称。 |
| `fieldValue` | 字符串 | 新字段值字符串。对于没有值的字段，传递null。 |
| `options` | 描述新结构的选项标志。可选值： | 可选。仅在创建结构时使用。 |
| | - `0` - 简单项，默认值。 | |
| | - `XMPConst.PROP_IS_ARRAY` - 该项是一个数组（alt、bag或seq类型）。 | |
| | - `XMPConst.PROP_IS_STRUCT` - 该项是具有嵌套字段的结构。 | |

##### 返回值

无

---

#### XMPMeta.setQualifier()

`XMPMetaObj.setQualifier(schemaNS, propName, qualNS, qualName, qualValue[, options])`

##### 描述

将新限定符附加到元数据属性。限定符可以添加到简单属性、数组项、结构字段或其他限定符。

##### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `schemaNS` | [模式命名空间字符串常量](#schema-namespace-string-constants) | 命名空间URI字符串。 |
| `propName` | 字符串 | 现有属性的名称字符串。可以是通用路径表达式。 |
| `qualNS` | 字符串 | 限定符命名空间的URI。与模式命名空间具有相同的URI和前缀用法。 |
| `qualName` | 字符串 | 限定符的名称。必须是简单的XML名称。与属性名称具有相同的前缀用法。 |
| `qualValue` | 字符串 | 新限定符值字符串。对于没有值的限定符，传递null。 |
| `options` | 描述限定符的选项标志。可选值： | 可选。仅在创建限定符时使用。 |
| | - `0` - 简单项，默认值。 | |
| | - `XMPConst.PROP_IS_ARRAY` - 该项是一个数组（alt、bag或seq类型）。 | |
| | - `XMPConst.PROP_IS_STRUCT` - 该项是具有嵌套字段的结构。 | |

##### 返回值

无

---

#### XMPMeta.setProperty()

`XMPMetaObj.setProperty(schemaNS, propName, propValue[, setOptions, valueType])`

##### 描述

设置简单元数据属性的值，必要时创建属性，或创建新的数组或结构属性。对于创建数组和结构属性，优先使用[setArrayItem()](#xmpmetasetarrayitem)和[setStructField()](#xmpmetasetstructfield)。使用此调用创建或设置顶级简单属性，或在[XMPUtils对象](#xmputils-object)中使用路径组合函数后使用。

##### 参数

| 参数 | 类型 | 描述 |
|---|---|---|
| `schemaNS` | [模式命名空间字符串常量](#schema-namespace-string-constants) | 命名空间URI字符串。 |
| `propName` | 字符串 | 属性名称字符串。可以是通用路径表达式。 |
| `propValue` | 字符串 | 新属性值字符串。传递null以创建数组或非叶级结构属性。 |
| `setOptions` | 简单值属性。其他常量值： | 可选。如果命名属性不存在，则创建属性的类型。默认为`0`。 |
| | - `0` - 简单项，默认值。 | |
| | - `XMPConst.PROP_IS_ARRAY` - 该项是一个数组（alt、bag或seq类型）。 | |
| | - `XMPConst.PROP_IS_STRUCT` - 该项是具有嵌套字段的结构。 | |
| `valueType` | 属性数据类型。可选值： | 可选。如果提供，则将值转换为此类型。 |
| | - `XMPConst.STRING` | |
| | - `XMPConst.INTEGER` | |
| | - `XMPConst.NUMBER` | |
| | - `XMPConst.BOOLEAN` | |
| | - `XMPConst.XMPDATE` | |

##### 返回值

无

---

#### XMPMeta.sort()

`XMPMetaObj.sort()`

##### 描述

按字母顺序对XMP内容进行排序。

- 在顶层，按前缀对命名空间进行排序。
- 在命名空间内，按名称对顶级属性进行排序。
- 在结构中，按限定名称（即XML `prefix:local`形式）对字段进行排序。
- 按值对简单项的无序数组进行排序。
- 按`xml:lang`限定符对语言替代数组进行排序，将`"x-default"`项放在首位。

##### 返回值

无

---

## XMPPacketInfo 对象

此对象由[XMPFile.getPacketInfo()](#xmpfilegetpacketinfo)返回。只读属性描述了由[XMPFile对象](#xmpfile-object)表示的文件中的XMP包。

---

### XMPPacketInfo 对象属性

| 参数 | 类型 | 描述 |
|---|---|---|
| `charForm` | 数字 | 包中的字符编码，可选值： |
| | | - `0` - UTF8 |
| | | - `2` - UTF-16，MSB优先（大端序） |
| | | - `3` - UTF-16，LSB优先（小端序） |
| | | - `4` - UTF 32，MSB优先（大端序） |
| | | - `5` - UTF 32，LSB优先（小端序） |
| `length` | 数字 | 包的字节长度。 |
| `offset` | 数字 | 包在文件中开始的字节偏移量。 |
| `packet` | 字符串 | 原始包数据。 |
| `padSize` | 数字 | 包的填充大小（字节），如果未知则为0。 |
| `writeable` | 布尔值 | 如果为`true`，则包可写。 |

---

## XMPProperty 对象

此对象由[XMPMeta对象](#xmpfile-object)的各种属性访问器函数返回，例如[getProperty](#xmpmetagetproperty)。只读属性描述了元数据属性。

---

### XMPProperty 对象属性

| 参数 | 类型 | 描述 |
|---|---|---|
| locale | 字符串 | 属性值的语言。此值由[getLocalizedText()](#xmpmetagetlocalizedtext)调用设置，如果找到适当的项，则分配所选替代文本项的语言。 |
| namespace | 字符串 | 属性的命名空间；参见[模式命名空间字符串常量](#schema-namespace-string-constants)。通常在浏览元数据时使用[XMPIterator对象](#xmpiterator-object)。 |
| options | 数字 | 描述属性类型的常量，简单属性为0。常量包括： |
| | | - `XMPConst.PROP_IS_ARRAY` - 属性是数组（alt、bag或seq类型）。 |
| | | - `XMPConst.PROP_IS_STRUCT` - 属性是具有嵌套字段的结构。 |
| path | 字符串 | 属性路径，包括属性名称。对于简单属性，整个路径就是属性名称。 |
| value | 变体 | 属性的值（如果有）。数组和非叶级结构没有值。 |

---

## XMPUtils 对象

此类为 XMP 工具包提供额外实用功能，构建在 [XMPMeta 对象](#xmpmeta-object)功能之上。仅包含静态函数，无法创建实例。

路径组合函数如 [composeArrayItemPath()](#xmputilscomposearrayitempath)，支持构建深层嵌套属性的路径表达式，这些表达式可传递给 XMPMeta 对象的访问函数，如 xmpmetaobj-getProperty。

高级函数如 xmputils-duplicateSubtree 允许操作 XMPMeta 对象中的元数据树。

---

### XMPUtils 类函数

#### XMPUtils.appendProperties()

`XMPUtils.appendProperties(source, dest, options)`

##### 说明

从源 XMPMeta 对象复制属性并追加到目标 XMPMeta 对象。

##### 参数

| 参数 | 类型 | 说明 |
|---|---|---|
| `source` | [XMPMeta 对象](#xmpmeta-object) | 源 XMPMeta 对象 |
| `dest` | [XMPMeta 对象](#xmpmeta-object) | 目标 XMPMeta 对象 |
| `options` | 这些位标志常量的逻辑或： | 控制复制操作的选项标志。默认为 `0` |
| | - `XMPConst.APPEND_ALL_PROPERTIES` - 包含内部和外部属性。默认仅复制外部属性。仅适用于顶层属性 | |
| | - `XMPConst.APPEND_REPLACE_OLD_VALUES` - 用源对象值替换现有属性值。默认保留现有值。适用于所有层级属性 | |
| | - `XMPConst.APPEND_DELETE_EMPTY_VALUES` - 若新值为空则删除属性 | |

##### 返回值

无

---

#### XMPUtils.catenateArrayItems()

`XMPUtils.catenateArrayItems(xmpObj, schemaNS, arrayName, separator, quotes, options)`

##### 说明

将数组项值连接为单个字符串。结果字符串可使用 [separateArrayItems()](#xmputilsseparatearrayitems) 重新拆分为数组项。

##### 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| `xmpObj` | [XMPMeta 对象](#xmpmeta-object) | 包含数组的 XMPMeta 对象 |
| `schemaNS` | [模式命名空间字符串常量](#schema-namespace-string-constants) | 命名空间 URI 字符串 |
| `arrayName` | 字符串 | 数组属性名称字符串。可为通用路径表达式。数组每项须为简单字符串值 |
| `separator` | 字符串 | 结果字符串中分隔项的分隔符。默认为 '; '（ASCII 分号和空格 U+003B,U+0020） |
| `quotes` | 字符串 | 用于引用包含分隔符的项的字符。默认为 '"'（ASCII 双引号 U+0022） |
| `options` | 常量值 | 控制连接的选项标志。常量值 `XMPConst.SEPARATE_ALLOW_COMMAS` - 允许项值中包含逗号（如"姓,名"）。此选项需在本函数和[separateArrayItems()](#xmputilsseparatearrayitems)中保持一致以正确重建项。默认为 `0` |

##### 返回值

字符串

---

#### XMPUtils.composeArrayItemPath()

`XMPUtils.composeArrayItemPath(schemaNS, arrayName, itemIndex)`

##### 说明

创建并返回数组项的路径表达式字符串，使用命名空间注册前缀，格式为：

```javascript
schemaNS:arrayName[itemIndex]
```

##### 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| `schemaNS` | [模式命名空间字符串常量](#schema-namespace-string-constants) | 命名空间 URI 字符串 |
| `arrayName` | 字符串 | 数组属性名称字符串。可为通用路径表达式 |
| `itemIndex` | 数字 | 项的1基位置索引。使用 `XMPConst.ARRAY_LAST_ITEM` 引用数组最后一项，此时结果为 `ns:arrayName[last()]` |

##### 返回值

字符串

---

#### XMPUtils.composeFieldSelector()

`XMPUtils.composeFieldSelector(schemaNS, arrayName, fieldNS, fieldName, fieldValue)`

##### 说明

创建并返回通过字段值选择替代项的路径表达式字符串，使用命名空间注册前缀，格式为：

```javascript
schemaNS:arrayName[fieldNS:fieldName="fieldValue"]
```

##### 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| `schemaNS` | [模式命名空间字符串常量](#schema-namespace-string-constants) | 命名空间 URI 字符串 |
| `arrayName` | 字符串 | 数组属性名称字符串。可为通用路径表达式 |
| `fieldNS` | 字符串 | 字段命名空间 URI 字符串 |
| `fieldName` | 字符串 | 字段名称。须为简单 XML 名称 |
| `fieldValue` | 任意 | 所需字段值 |

##### 返回值

字符串

---

#### XMPUtils.composeLanguageSelector()

`XMPUtils.composeLanguageSelector(schemaNS, arrayName, locale)`

##### 说明

创建并返回通过语言选择替代文本数组项的路径表达式字符串，使用命名空间注册前缀，格式为：

```javascript
schemaNS:arrayName[@xml:lang="langName"]
```

:::注意

这些函数提供额外逻辑来选择适当语言并与x-default值保持一致。本函数提供显式语言的路径表达式，且仅针对该语言。
:::

##### 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| `schemaNS` | [模式命名空间字符串常量](#schema-namespace-string-constants) | 命名空间 URI 字符串 |
| `arrayName` | 字符串 | 数组属性名称字符串。可为通用路径表达式 |
| `locale` | 字符串 | 所需语言的 RFC3066 语言代码字符串 |

##### 返回值

字符串

---

#### XMPUtils.composeStructFieldPath()

`XMPUtils.composeStructFieldPath(schemaNS, structName, fieldNS, fieldName)`

##### 说明

创建并返回结构字段的路径表达式字符串，使用命名空间注册前缀，格式为：

```javascript
schemaNS:structName/fieldNS:fieldName
```

##### 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| `schemaNS` | [模式命名空间字符串常量](#schema-namespace-string-constants) | 命名空间 URI 字符串 |
| `structName` | 字符串 | 结构属性名称字符串。可为通用路径表达式 |
| `fieldNS` | 字符串 | 字段命名空间 URI 字符串 |
| `fieldName` | 字符串 | 字段名称。须为简单 XML 名称 |

##### 返回值

字符串

---

#### XMPUtils.composeQualifierPath()

`XMPUtils.composeQualifierPath(schemaNS, propName, qualNS, qualName)`

##### 说明

创建并返回属性限定符的路径表达式字符串，使用命名空间注册前缀，格式为：

```javascript
schemaNS:propName/?qualNS:qualName
```

##### 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| `schemaNS` | [模式命名空间字符串常量](#schema-namespace-string-constants) | 命名空间 URI 字符串 |
| `propName` | 字符串 | 属性名称字符串。可为通用路径表达式 |
| `qualNS` | 字符串 | 限定符命名空间 URI 字符串 |
| `qualName` | 字符串 | 限定符名称。须为简单 XML 名称 |

##### 返回值

字符串

---

#### XMPUtils.duplicateSubtree()

`XMPUtils.duplicateSubtree(source, dest, sourceNS, sourceRoot, destNS, destRoot, options)`

##### 说明

从源 [XMPMeta 对象](#xmpmeta-object)复制指定子树属性到目标 [XMPMeta 对象](#xmpmeta-object)。

##### 参数

| 参数 | 类型 | 说明 |
|---|---|---|
| `source` | [XMPMeta 对象](#xmpmeta-object) | 源 XMPMeta 对象 |
| `dest` | [XMPMeta 对象](#xmpmeta-object) | 目标 XMPMeta 对象 |
| `sourceNS` | [模式命名空间字符串常量](#schema-namespace-string-constants) | 源命名空间 URI 字符串 |
| `sourceRoot` | 字符串 | 源子树根位置的属性名称字符串。可为通用路径表达式 |
| `destNS` | [模式命名空间字符串常量](#schema-namespace-string-constants) | 目标命名空间 URI 字符串 |
| `destRoot` | 字符串 | 可选。目标子树根位置的属性名称字符串。可为通用路径表达式。默认为源根位置 |
| `options` | 这些位标志常量的逻辑或： | 控制复制操作的选项标志。默认为 `0` |
| | | - `XMPConst.APPEND_ALL_PROPERTIES` - 包含内部和外部属性。默认仅复制外部属性。仅适用于顶层属性 |
| | | - `XMPConst.APPEND_REPLACE_OLD_VALUES` - 用源对象值替换现有属性值。默认保留现有值。适用于所有层级属性 |
| | | - `XMPConst.APPEND_DELETE_EMPTY_VALUES` - 若新值为空则删除属性 |

##### 返回值

无

---

#### XMPUtils.removeProperties()

`XMPUtils.removeProperties(xmpObj, schemaNS, propName, options)`

##### 说明

从 [XMPMeta 对象](#xmpmeta-object)移除多个属性。

若同时提供命名空间和属性名称，移除外部属性（即使是别名）。若为内部属性，则需指定选项 `XMPConst.REMOVE_ALL_PROPERTIES` 才会移除。

若仅提供命名空间，移除该命名空间所有外部属性，可选移除所有内部属性。仅当指定 `XMPConst.REMOVE_INCLUDE_ALIASES` 时移除别名。

若均未提供，移除所有外部属性，可选移除所有内部属性。别名会隐式处理，因为关联的实际属性会被移除。

##### 参数

| 参数 | 类型 | 说明 |
|---|---|---|
| `xmpObj` | [XMPMeta 对象](#xmpmeta-object) | 要移除属性的对象 |
| `schemaNS` | [模式命名空间字符串常量](#schema-namespace-string-constants)。可选 | 命名空间 URI 字符串。若提供属性名称则必须提供 |
| `propName` | 字符串 | 可选。属性名称字符串。可为通用路径表达式 |
| `options` | 这些位标志常量的逻辑或： | 控制删除操作的选项标志。默认为 `0` |
| | | - `XMPConst.REMOVE_ALL_PROPERTIES` - 移除内部和外部属性。默认仅移除外部属性。仅适用于顶层属性 |
| | | - `XMPConst.REMOVE_INCLUDE_ALIASES` - 移除命名空间中定义的别名。若提供属性名称则无视此选项 |

##### 返回值

无

---

#### XMPUtils.separateArrayItems()

`XMPUtils.separateArrayItems(xmpObj, schemaNS, arrayName, arrayOptions, concatString)`

##### 说明

从 [catenateArrayItems()](#xmputilscatenatearrayitems) 返回的连接字符串更新 XMPMeta 对象中的单独数组项字符串。可识别多种分隔符，包括分号、逗号、制表符、回车、换行和多个空格。

##### 参数

| 参数 | 类型 | 说明 |
|---|---|---|
| `xmpObj` | [XMPMeta 对象](#xmpmeta-object) | 要分离项的对象 |
| `schemaNS` | 命名空间 URI 字符串。参见[模式命名空间字符串常量](#schema-namespace-string-constants) | |
| `arrayName` | 字符串 | 数组属性名称字符串。可为通用路径表达式。数组每项须为简单字符串值 |
| `arrayOptions` | 这些位标志常量的逻辑或： | 控制如何从分离字符串更新数组属性的选项标志。默认为 `0` |
| | - `XMPConst.APPEND_ALL_PROPERTIES` - 包含内部和外部属性。默认仅复制外部属性。仅适用于顶层属性 | |
| | - `XMPConst.APPEND_REPLACE_OLD_VALUES` - 用源对象值替换现有属性值。默认保留现有值。适用于所有层级属性 | |
| | - `XMPConst.APPEND_DELETE_EMPTY_VALUES` - 若新值为空则删除属性 | |
| | - `XMPConst.SEPARATE_ALLOW_COMMAS` - 允许项值中包含逗号。若未指定，包含逗号的项（如"姓,名"）会被拆分为两个数组项 | |
| `concatString` | 字符串 | 包含连接数组值的字符串，由 [catenateArrayItems()](#xmputilscatenatearrayitems) 返回 |

##### 返回值

无
