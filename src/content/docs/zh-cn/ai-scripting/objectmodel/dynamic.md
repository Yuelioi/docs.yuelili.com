---
title: 动态对象
---
# 动态对象

通过创建动态对象，您可以创建数据驱动的图形。

在 Illustrator 应用程序中，您可以使用“变量”面板来创建或编辑变量，例如图表数据、链接文件、文本字符串和可见性，或者未指定类型的变量。

在脚本中，您使用 `variable` 对象来表示这种类型的变量。

`variable` 对象的 `kind` 属性指示 `variable` 对象所持有的动态数据类型。`Variable` 对象是文档级别的对象；您在 `document` 对象中创建它们。

:::note
不要将变量对象与脚本变量混淆。有关 Illustrator 变量、动态对象和数据驱动图形的详细信息，请参阅 Illustrator 帮助。
:::

数据集将变量及其关联的动态数据收集到一个对象中，在脚本中由 `dataset` 对象表示。

`dataset` 对象提供了在脚本中更新和删除 `dataset` 对象的方法。
