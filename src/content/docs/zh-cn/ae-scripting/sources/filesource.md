---
title: 文件源
---
# FileSource 对象

`app.project.item(index).mainSource`

`app.project.item(index).proxySource`

#### 描述

FileSource 对象描述了来自文件的素材。

:::info
FileSource 是 [FootageSource 对象](../footagesource) 的子类。除了下面列出的方法和属性外，FootageSource 的所有方法和属性在操作 FileSource 时也可用。
:::

---

## 属性

### FileSource.file

`app.project.item(index).mainSource.file`

`app.project.item(index).proxySource.file`

#### 描述

定义此资产的文件的 [Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) 对象。要更改该值：

- 如果此 FileSource 是 [AVItem](../../item/avitem) 的 [proxySource](../../item/avitem#avitemproxysource)，请调用 [setProxy()](../../item/avitem#avitemsetproxy) 或 [setProxyWithSequence()](../../item/avitem#avitemsetproxywithsequence)。
- 如果此 FileSource 是 [FootageItem](../../item/footageitem) 的 [mainSource](../../item/footageitem#footageitemmainsource)，请调用 [replace()](../../item/footageitem#footageitemreplace) 或 [replaceWithSequence()](../../item/footageitem#footageitemreplacewithsequence)。

#### 类型

[File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) 对象; 只读.

---

### FileSource.missingFootagePath

`app.project.item(index).mainSource.missingFootagePath`

`app.project.item(index).proxySource.missingFootagePath`

#### 描述

此资产中缺失素材的路径和文件名。另请参阅 [AVItem.footageMissing](../../item/avitem#avitemfootagemissing)。

#### 类型

字符串; 只读.

---

## 函数

### FileSource.reload()

`app.project.item(index).mainSource.reload()`

#### 描述

从文件重新加载资产。此方法只能在 `mainSource` 上调用，而不能在 `proxySource` 上调用。

#### 参数

无。

#### 返回

无。
