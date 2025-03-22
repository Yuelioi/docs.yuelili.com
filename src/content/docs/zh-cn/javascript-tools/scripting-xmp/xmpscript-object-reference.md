---
title: xmpscript 对象参考
---
# XMPScript 对象参考

此处按字母顺序列出了为 XMP JavaScript API 定义的类及其属性和方法。

加载库后，这些 XMP 类在全局 JavaScript 命名空间中可用：

|                  对象                  |                                  描述                                   |
| -------------------------------------- | ------------------------------------------------------------------------------ |
| [XMPMeta 对象](#xmpmeta-object)        | 提供 XMP Toolkit 的核心服务。                                                 |
| [XMPFile 对象](#xmpfile-object)        | 提供对文件的主或文档级 XMP 的便捷 I/O 访问。                                   |
| [XMPUtils 对象](#xmputils-object)      | 提供用于数组处理的附加实用函数。                                                |
| [XMPDateTime 对象](#xmpdatetime-object)| 表示日期时间值。                                                               |
| [XMPConst 对象](#xmpconst-object)      | 包含用于 JavaScript API 的数字和字符串常量值。                                  |

这些顶级对象提供了对附加支持类的访问：

|                    对象                    |                                 描述                                  |
| ------------------------------------------ | ---------------------------------------------------------------------------- |
| [XMPIterator 对象](#xmpiterator-object)    | 允许遍历 [XMPMeta 对象](#xmpmeta-object) 中的属性。                          |
| [XMPProperty 对象](#xmpproperty-object)    | 描述元数据属性。                                                             |
| [XMPAliasInfo 对象](#xmpaliasinfo-object)  | 描述元数据别名。                                                             |
| [XMPFileInfo 对象](#xmpfileinfo-object)    | 描述文件。                                                                   |
| [XMPPacketInfo 对象](#xmppacketinfo-object)| 描述文件中的原始 XMP 数据包。                                                 |

---

## XMPAliasInfo 对象

此对象由 [XMPMeta.resolveAlias](#xmpmetaresolvealias) 返回。只读属性描述 XMP 元数据别名。

### XMPAliasInfo 对象属性

| 属性      |  类型  |                                                               描述                                                               |
|-----------|--------|-----------------------------------------------------------------------------------------------------------------------------------------|
| arrayForm | Number | 描述解析别名的属性类型的常量，0 表示简单属性。常量为：                                                                                  |
|           |        | - `XMPConst.ALIAS_TO_SIMPLE_PROP`：直接映射。可以是简单到简单、数组到数组或结构到结构。                                                |
|           |        | - `XMPConst.ALIAS_TO_ARRAY`：实际属性是无序数组；别名指向第一个元素。                                                                  |
|           |        | - `XMPConst.ALIAS_TO_ORDERED_ARRAY`：实际属性是有序数组；别名指向第一个元素。                                                          |
|           |        | - `XMPConst.ALIAS_TO_ALT_ARRAY`：实际属性是替代数组；别名指向第一个元素。                                                              |
|           |        | - `XMPConst.ALIAS_TO_ALT_TEXT`：实际属性是替代文本数组；别名指向 `x-default` 元素。                                                    |
| name      | String | 别名解析到的属性名称。                                                                                                                 |
| namespace | String | 别名解析到的属性命名空间。参见 [Schema 命名空间字符串常量](#schema-namespace-string-constants)。                                        |

---

## XMPConst 对象

此对象包含用于 JavaScript XMP API 的只读常量定义。其中一些在使用它们的上下文中列出。此处提供了更长的列表。

### Schema 命名空间字符串常量

用于所有获取和设置属性操作的命名空间 URI 字符串的常量值。参见 [XMPMeta 对象](#xmpmeta-object)。

|       命名空间        |                                                   描述                                                    |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `NS_DC`                | Dublin Core 模式的 XML 命名空间，[http://purl.org/dc/elements/1.1](http://purl.org/dc/elements/1.1)              |
| `NS_IPTC_CORE`         | IPTC Core 模式的 XML 命名空间。                                                                                  |
| `NS_RDF`               | RDF 的 XML 命名空间。                                                                                           |
| `NS_XML`               | XML 的 XML 命名空间。                                                                                           |
| `NS_XMP`               | XMP 基本模式的 XML 命名空间。                                                                                   |
| `NS_XMP_RIGHTS`        | XMP 版权模式的 XML 命名空间。                                                                                   |
| `NS_XMP_MM`            | XMP 数字资产管理模式的 XML 命名空间。                                                                           |
| `NS_XMP_BJ`            | 作业管理模式的 XML 命名空间。                                                                                   |
| `NS_XMP_NOTE`          | XMP 注释模式的 XML 命名空间。Adobe 私有命名空间；请勿创建新属性。                                               |
| `NS_PDF`               | PDF 模式的 XML 命名空间。                                                                                       |
| `NS_PDFX`              | PDFX 模式的 XML 命名空间。Adobe 私有命名空间；请勿创建新属性。                                                  |
| `NS_PHOTOSHOP`         | Adobe Photoshop 自定义模式的 XML 命名空间。                                                                     |
| `NS_PS_ALBUM`          | Adobe Photoshop Album 自定义模式的 XML 命名空间。                                                               |
| `NS_EXIF`              | Adobe 的 EXIF 模式的 XML 命名空间。                                                                             |
| `NS_EXIF_AUX`          | Adobe 的 EXIF 辅助模式的 XML 命名空间。                                                                         |
| `NS_TIFF`              | Adobe 的 TIFF 模式的 XML 命名空间。                                                                             |
| `NS_PNG`               | PNG 模式的 XML 命名空间。                                                                                       |
| `NS_JPEG`              | JPEG 模式的 XML 命名空间。                                                                                      |
| `NS_SWF`               | Flash 小型网页格式模式的 XML 命名空间。                                                                         |
| `NS_JPK`               | JPK 模式的 XML 命名空间。                                                                                       |
| `NS_CAMERA_RAW`        | Camera Raw 模式的 XML 命名空间。                                                                                |
| `NS_DM`                | DM 模式的 XML 命名空间。                                                                                        |
| `NS_ADOBE_STOCK_PHOTO` | Adobe Stock Photos 模式的 XML 命名空间。                                                                        |
| `NS_ASF`               | Microsoft 高级流格式模式的 XML 命名空间。                                                                       |

---

### 类型命名空间字符串常量

用于所有结构化属性操作的字段类型命名空间 URI 字符串的常量值。参见 [XMPMeta 对象](#xmpmeta-object)。

|       命名空间        |                                                 描述                                                 |
| ---------------------- | ----------------------------------------------------------------------------------------------------------- |
| `TYPE_IDENTIFIER_QUAL` | 用于 xmp:Identifier 属性的限定符的 XML 命名空间。                                                           |
| `TYPE_DIMENSIONS`      | 用于 Dimensions 类型字段的 XML 命名空间。                                                                   |
| `TYPE_TEXT`            | XMP 文本文档模式的 XML 命名空间。                                                                           |
| `TYPE_PAGEDFILE`       | XMP 分页文档模式的 XML 命名空间。                                                                           |
| `TYPE_GRAPHICS`        | 包含文档中使用的着色剂（色板）特征的结构体的 XML 命名空间。                                                  |
| `TYPE_IMAGE`           | 用于图形图像字段的 XML 命名空间。用于 Thumbnail 类型。                                                       |
| `TYPE_FONT`            | 包含文档中使用的字体特征的结构体的 XML 命名空间。                                                            |
| `TYPE_RESOURCE_EVENT`  | 用于 ResourceEvent 类型字段的 XML 命名空间。                                                                |
| `TYPE_RESOURCE_REF`    | 用于 ResourceRef 类型字段的 XML 命名空间。                                                                  |
| `TYPE_ST_VERSION`      | 用于 Version 类型字段的 XML 命名空间。                                                                      |
| `TYPE_ST_JOB`          | 用于 JobRef 类型字段的 XML 命名空间。                                                                       |
| `TYPE_MANIFEST_ITEM`   | 用于清单数组元素的 XML 命名空间。                                                                           |
| `TYPE_PDFA_SCHEMA`     |                                                                                                             |
| `TYPE_PDFA_PROPERTY`   |                                                                                                             |
| `TYPE_PDFA_TYPE`       |                                                                                                             |
| `TYPE_PDFA_FIELD`      |                                                                                                             |
| `TYPE_PDFA_ID`         |                                                                                                             |
| `TYPE_PDFA_EXTENSION`  | 用于 PDF 子类型的 XML 命名空间                                                                              |

---

### 文件格式数字常量

用于 I/O 操作的受支持文件类型的常量值。参见 [XMPFile 对象](#xmpfile-object)。

|          常量          |                   描述                    |
| ---------------------- | ------------------------------------------------ |
| `FILE_UNKNOWN`         | 未知文件格式。                                   |
| `FILE_PDF`             | PDF                                              |
| `FILE_POSTSCRIPT`      | PS，遵循 DSC 约定的通用 PostScript               |
| `FILE_EPS`             | EPS，封装的 PostScript                           |
| `FILE_JPEG`            | JPEG                                             |
| `FILE_JPEG2K`          | JPX，JPEG 2000 文件                              |
| `FILE_TIFF`            | TIFF                                             |
| `FILE_GIF`             | GIF                                              |
| `FILE_PNG`             | PNG                                              |
| `FILE_SWF`             | SWF，Flash 文件                                  |
| `FILE_FLA`             | FLA，Flash 创作文件                              |
| `FILE_FLV`             | FLV，Flash 视频文件                              |
| `FILE_MOV`             | MOV，Quicktime                                   |
| `FILE_AVI`             | AVI                                              |
| `FILE_CIN`             | CIN，Cineon                                      |
| `FILE_WAV`             | WAV                                              |
| `FILE_MP3`             | MP3                                              |
| `FILE_SES`             | SES，Audition 会话                               |
| `FILE_CEL`             | CEL，Audition 循环                               |
| `FILE_MPEG`            | MPEG                                             |
| `FILE_MPEG2`           | MP2                                              |
| `FILE_MPEG4`           | MP4                                              |
| `FILE_WMAV`            | WMAV，Windows Media 音频和视频                   |
| `FILE_AIFF`            | AIFF                                             |
| `FILE_HTML`            | HTML                                             |
| `FILE_XML`             | XML                                              |
| `FILE_TEXT`            | TEXT                                             |
| `FILE_PHOTOSHOP`       | PSD，Photoshop                                   |
| `FILE_ILLUSTRATOR`     | AI，Illustrator                                  |
| `FILE_INDESIGN`        | INDD，Indesign                                   |
| `FILE_AE_PROJECT`      | AE，After Effects                                |
| `FILE_AE_PROJECT_TEMPLATE` | AET，After Effects 项目模板                      |
| `FILE_AE_FILTER_PRESET`| FFX，After Effects 滤镜预设文件                  |
| `FILE_ENCORE_PROJECT`  | NCOR，Encore DVD 项目文件                        |
| `FILE_PREMIERE_PROJECT`| PRPJ，Premiere 项目文件                          |
| `FILE_PREMIERE_TITLE`  | PRTL，Premiere 标题文件                          |

---

## XMPDateTime 对象

此类表示日期和时间。时间包括时区，并且可以具有纳秒级精度。

### XMPDateTime 对象构造函数

```javascript
new XMPDateTime();            // 创建一个包含 0 日期的对象
new XMPDateTime(date);        // 使用 JavaScript 日期初始化对象
new XMPDateTime(iso8601Date); // 使用 ISO 日期初始化对象
```

#### 参数

|  参数  |            类型             |                                                                                                                 描述                                                                                                                 |
| ----------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| date        | JavaScript `Date` 对象。    | 时区设置为本地操作系统的时区值。XMP Toolkit 中的时间可以具有纳秒级精度；但是，当与 JavaScript Date 值相互转换时，时间精度会降低到毫秒级。                                                                 |
| iso8601Date | String                      | ISO 8601 格式的日期时间；例如：`"2007-04-10T17:54:50+01:00"`                                                                                                                                                                |

---

### XMPDateTime 对象属性

所有属性都是可读写的，允许您修改日期时间值。如果设置的值超出允许范围，则自动设置为最小或最大允许值。

|   属性   |  类型  |                                  描述                                  |
|--------------|--------|-------------------------------------------------------------------------------|
| `year`       | Number | 年份，范围为 `[0000...9999]`。                                       |
| `month`      | Number | 月份，范围为 `[1...12]`。                                           |
| `day`        | Number | 日期，范围为 `[1...31]`。                                             |
| `hour`       | Number | 小时，范围为 `[1...23]`。                                            |
| `minute`     | Number | 分钟，范围为 `[1...59]`。                                          |
| `second`     | Number | 秒，范围为 `[1...59]`。                                          |
| `nanosecond` | Number | 纳秒，范围为 `[0...1e+9 -1]`。                                 |
| `tzSign`     | Number | 时区偏移方向。                                                           |
|              |        | - `0`：UTC                                                                    |
|              |        | - `-1`：西区                                                                  |
|              |        | - `1`：东区                                                                   |
| `tzHour`     | Number | 时区与格林威治标准时间的小时偏移，范围为 `[1...23]`。   |
| `tzMinute`   | Number | 时区与格林威治标准时间的分钟偏移，范围为 `[1...59]`。 |

---

### XMPDateTime 对象函数

#### XMPDateTime.compareTo()

`XMPDateTime.compareTo(xmpDateTime)`

##### 描述

报告两个日期时间值的时间顺序。

##### 参数

|  参数  |        类型        |     描述      |
| ----------- | ------------------ | -------------------- |
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

此类对应于 Adobe XMP Toolkit 的文件处理程序组件，该组件提供了对文件的主或文档级 XMP 的便捷 I/O 访问。

文件处理程序支持那些可以嵌入 XMP 元数据的文件格式，如 XMP 规范中所定义。它允许您在不存在 XMP 的地方添加 XMP，扩展现有的 XMP 而不考虑现有的填充，并协调 XMP 与其他元数据格式。

XMP Toolkit 还提供了数据包扫描器作为对不受支持文件格式的备用解决方案。它通过对文件进行转储扫描，提供对所有文件格式的更有限访问。它可以更新文件，但不能扩展数据包或协调其他元数据格式。

XMPScript API 目前不支持检索缩略图。

:::note

有关详细信息，请参阅 Adobe Bridge JavaScript 