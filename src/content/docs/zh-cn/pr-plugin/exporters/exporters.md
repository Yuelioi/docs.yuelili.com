---
title: 导出器
---
# 导出器

导出器用于以任何格式导出视频、音频和标记。导出器以请求的像素格式（通常为未压缩视频）获取单个视频帧和未压缩音频。导出器负责对视频和音频数据进行压缩，并将输出包装在文件格式中。要重用现有的导出器，您可以提供一个导出控制器。

导出器可以在 Premiere Pro 或 Adobe Media Encoder 中使用。在 Premiere Pro 中，转到“文件 > 导出 > 媒体”对话框。然后会出现“导出设置”对话框。在“格式”下拉菜单中选择的格式决定了使用的导出器，导出器提供“导出设置”对话框中显示的参数设置和摘要。

导出器可以选择通过与渲染器插件协调来渲染时间线片段，从而提供硬件加速。传统的编辑模式由导出器和播放器的组合形成；导出器生成预览文件，播放器管理剪辑列表。

如果您从未开发过导出器，可以跳过[新功能](.././whats-new)，直接前往[入门指南](.././getting-started)。
