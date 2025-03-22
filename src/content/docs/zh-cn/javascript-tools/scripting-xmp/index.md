---
title: 概述
---
# 脚本访问 XMP 元数据

XMPScript，即 XMP ExtendScript API，提供了对 Adobe XMP Core 和 XMP Files 库的 JavaScript 访问。本章提供了与 XMP 相关的 JavaScript 对象的参考信息，包括它们的属性和方法。

本章不旨在提供 XMP 元数据技术的完整详细信息。有关 XMP 元数据的更多信息，请参阅 [Adobe 开发者中心的 XMP 规范](https://www.adobe.com/devnet/xmp.html)。

Adobe Bridge CS5 在其库文件夹中提供了 XMP 库。脚本必须在运行时加载该库以使用 API；它不会在 Adobe Bridge 启动时自动加载。XMPScript API 与 Adobe Bridge DOM 是分开的。您可以独立使用它来获取和设置支持的格式的元数据；或者您可以将其与 Adobe Bridge API 结合使用，以修改通过 Adobe Bridge DOM 的 `Thumbnail` 对象从文件中访问的元数据。

:::note
Adobe Bridge 提供了一种在脚本中嵌入元数据值的方法（用于描述脚本文件本身），使用由注释块中的特殊标签分隔的 XML。这与文件和缩略图的元数据访问无关。有关详细信息，请参阅 *Adobe Bridge JavaScript 指南*。
:::
