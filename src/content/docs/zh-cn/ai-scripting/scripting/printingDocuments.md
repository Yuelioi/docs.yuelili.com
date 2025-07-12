---
title: 打印 Illustrator 文档
---
# 打印 Illustrator 文档

使用 `print options` 脚本功能，您可以捕获并自动化打印工作流程的某些部分。脚本功能暴露了 Illustrator 打印的全部功能，其中一些功能可能无法通过应用程序的用户界面访问。

由于当前打印架构的限制，Illustrator 最多同时支持一个打印会话。

`document` 对象的打印命令或方法接受一个可选参数，该参数允许您指定一个 `print options` 对象。

`print options` 对象允许您定义打印设置，例如 PPD、PostScript 选项、纸张选项和颜色管理选项。`print options` 对象还具有 `print preset` 属性，允许您指定预设来定义打印任务。

在定义 `print options` 对象的属性时，您可以通过使用 `application` 对象的只读“列表”属性（例如 `printer list`、`PPD file list` 和 `print presets list` 属性）来查找可用的打印机、PPD、打印预设和其他项目。
