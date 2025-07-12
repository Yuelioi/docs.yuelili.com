---
title: 打印机
---
# 打印机

`app.PrinterList[index]`

#### 描述

将可用的打印机与打印机信息关联起来。

要请求打印机列表，您必须首先打开一个文档，否则会返回错误。

---

## 属性

### Printer.name

`app.printerList[index].name`

#### 描述

打印机的名称。

#### 类型

字符串

---

### Printer.printerInfo

`app.printerList[index].printerInfo`

#### 描述

打印机信息。

#### 类型

[PrinterInfo](.././PrinterInfo)

---

### Printer.typename

`app.printerList[index].typename`

#### 描述

对象的类名。

#### 类型

字符串；只读。
