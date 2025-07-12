---
title: 导入选项
---
# ImportOptions 对象

`new ImportOptions();`

`new ImportOptions(file);`

#### 描述

`ImportOptions` 对象封装了用于通过 [Project.importFile()](../../general/project#projectimportfile) 方法导入文件的选项。

构造函数接受一个可选参数，即文件的 [Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) 对象。

如果未提供该参数，则在使用 `importFile` 方法之前必须显式设置 `file` 属性的值。例如：

```javascript
new ImportOptions().file = new File("myfile.psd");
```

---

## 属性

### ImportOptions.file

`importOptions.file`

#### 描述

要导入的文件。如果在构造函数中设置了文件，则可以通过此属性访问它。

#### 类型

[Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) 对象；可读写。

---

### ImportOptions.forceAlphabetical

`importOptions.forceAlphabetical`

#### 描述

当设置为 `true` 时，效果与在“文件 > 导入 > 文件”对话框中设置“强制按字母顺序排列”选项相同。

#### 类型

布尔值；可读写。

---

### ImportOptions.importAs

`importOptions.importAs`

#### 描述

导入文件作为源的对象类型。在设置之前，请使用 [canImportAs](#importoptionscanimportas) 检查给定文件是否可以作为给定对象类型的源导入。

#### 类型

`ImportAsType` 枚举值；可读写。可选值包括：

- `ImportAsType.COMP_CROPPED_LAYERS`
- `ImportAsType.FOOTAGE`
- `ImportAsType.COMP`
- `ImportAsType.PROJECT`

---

### ImportOptions.rangeEnd

`importOptions.rangeEnd`

:::warning
此方法/属性未正式记录，是通过研究发现的。此处提供的信息可能不准确，并且此方法/属性可能会在某个时间点消失或停止工作。如果您有更多信息，请贡献！
:::

#### 描述

设置要导入的序列的结束剪辑范围。

- 如果 `rangeEnd` 超过要导入的序列的持续时间，则创建“缺失帧”（视频条）。
- 如果 [sequence](#importoptionssequence) 设置为 `false`，则无效。
- 如果 [forceAlphabetical](#importoptionsforcealphabetical) 设置为 `true`，则抛出异常。
- 如果 `rangeEnd` 小于 [rangeStart](#importoptionsrangestart)，则抛出异常并将范围重置为包含所有文件。

#### 类型

整数；可读写。

---

### ImportOptions.rangeStart

`importOptions.rangeStart`

:::warning
此方法/属性未正式记录，是通过研究发现的。此处提供的信息可能不准确，并且此方法/属性可能会在某个时间点消失或停止工作。如果您有更多信息，请贡献！
:::

#### 描述

设置要导入的序列的起始剪辑范围。

- 如果 [sequence](#importoptionssequence) 设置为 `false`，则无效。
- 如果 [forceAlphabetical](#importoptionsforcealphabetical) 设置为 `true`，则抛出异常。
- 如果 [rangeEnd](#importoptionsrangeend) 值为 0，则抛出异常。
- 如果 `rangeStart` 大于 [rangeEnd](#importoptionsrangeend)，则抛出异常并将范围重置为包含所有文件。

#### 类型

整数；可读写。

#### 示例

```javascript
/*
 导入序列的 20 帧，从第 10 帧开始，到第 30 帧结束
 */
var mySequence = '~/Desktop/sequence/image_000.png';

var importOptions = new ImportOptions();
importOptions.file = new File(mySequence);
importOptions.sequence = true;
importOptions.forceAlphabetical = false;
importOptions.rangeStart = 10;
importOptions.rangeEnd = 30;

var item = app.project.importFile(importOptions);
```

---

### ImportOptions.sequence

`importOptions.sequence`

#### 描述

当设置为 `true` 时，导入序列；否则，导入单个文件。

#### 类型

布尔值；可读写。

---

## 函数

### ImportOptions.canImportAs()

`importOptions.canImportAs(type)`

#### 描述

报告文件是否可以作为特定对象类型的源导入。如果此方法返回 `true`，则可以将给定类型设置为 [importAs](#importoptionsimportas) 属性的值。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `type` | `ImportAsType` 枚举值 | 可以导入的文件类型。可选值包括： |
| | | -`ImportAsType.COMP` |
| | | -`ImportAsType.FOOTAGE` |
| | | -`ImportAsType.COMP_CROPPED_LAYERS` |
| | | -`ImportAsType.PROJECT` |

#### 返回

布尔值。

#### 示例

```javascript
var io = new ImportOptions(new File("c:\\myFile.psd"));
if (io.canImportAs(ImportAsType.COMP)) {
 io.importAs = ImportAsType.COMP;
}
```

---

### ImportOptions.isFileNameNumbered()

`importOptions.isFileNameNumbered(file)`

:::warning
此方法/属性未正式记录，是通过研究发现的。此处提供的信息可能不准确，并且此方法/属性可能会在某个时间点消失或停止工作。如果您有更多信息，请贡献！
:::

#### 描述

报告文件对象是否编号，即文件名是否包含数字。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `file` | [Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) 对象 | 要检查的文件 |

#### 返回

对象，包含两个键：

- `isNumbered`: 布尔值；文件名是否包含任何数字，
- `num`: 整数；文件名中找到的数字。当 `isNumbered` 为 `false` 时返回 0。

#### 示例

```javascript
var importOptions = new ImportOptions();
importOptions.isFileNameNumbered('image.png'); // "isNumbered": false, "num": 0
importOptions.isFileNameNumbered('003image.png'); // "isNumbered": true, "num": 3
importOptions.isFileNameNumbered('ima0102ge.png'); // "isNumbered": true, "num": 102
importOptions.isFileNameNumbered('image0120.png'); // "isNumbered": true, "num": 120
```
