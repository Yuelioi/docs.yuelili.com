---
title: filesource
---
# FileSource object

`app.project.item(index).mainSource`

`app.project.item(index).proxySource`

#### 描述

The FileSource object describes footage that comes from a file.

:::info
FileSource is a subclass of [FootageSource object](../footagesource). All methods and attributes of FootageSource, in addition to those listed below, are available when working with FileSource.
:::

---

## 属性

### FileSource.file

`app.project.item(index).mainSource.file`

`app.project.item(index).proxySource.file`

#### 描述

The [Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) object for the file that defines this asset. To change the value:

- If this FileSource is a [proxySource](../item/avitem.md#avitemproxysource) of an [AVItem](../../item/avitem), call [setProxy()](../item/avitem.md#avitemsetproxy) or [setProxyWithSequence()](../item/avitem.md#avitemsetproxywithsequence).
- If this FileSource is a [mainSource](../item/footageitem.md#footageitemmainsource) of a [FootageItem](../../item/footageitem), call [replace()](../item/footageitem.md#footageitemreplace) or [replaceWithSequence()](../item/footageitem.md#footageitemreplacewithsequence).

#### 类型

[File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) object; 只读.

---

### FileSource.missingFootagePath

`app.project.item(index).mainSource.missingFootagePath`

`app.project.item(index).proxySource.missingFootagePath`

#### 描述

The path and filename of footage that is missing from this asset. See also [AVItem.footageMissing](../item/avitem.md#avitemfootagemissing).

#### 类型

String; 只读.

---

## 函数

### FileSource.reload()

`app.project.item(index).mainSource.reload()`

#### 描述

Reloads the asset from the file. This method can be called only on a `mainSource`, not a `proxySource`.

#### 参数

None.

#### 返回

Nothing.
