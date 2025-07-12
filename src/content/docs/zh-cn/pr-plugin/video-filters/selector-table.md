---
title: 选择器表
---
# 选择器表

此表总结了视频过滤器可以接收的各种选择器命令。

| 选择器 | 可选？ | 描述 |
|---|---|---|
| [fsInitSpec](../selector-descriptions#fsinitspec) | 是 | 分配并使用默认值初始化参数，而不弹出模态设置对话框。 |
| [fsHasSetupDialog](../selector-descriptions#fshassetupdialog) | 是 | 新增于 Premiere Pro CS3。指定过滤器是否具有设置对话框。 |
| [fsSetup](../selector-descriptions#fssetup) | 是 | 如有必要，为参数分配内存。 |
| | | 使用默认参数值或先前存储的值显示模态设置对话框。 |
| | | 将新值保存到 `specsHandle`。 |
| [fsExecute](../selector-descriptions#fsexecute) | 否 | 使用 `specsHandle` 中存储的参数过滤视频。 |
| | | 注意隔行扫描视频，不要忽略 Alpha 通道！ |
| [fsDisposeData](../selector-descriptions#fsdisposedata) | 是 | 释放 `fsExecute` 期间创建的任何实例数据。 |
| [fsCanHandlePAR](../selector-descriptions#fscanhandlepar) | 是 | 告诉 Premiere 你的效果如何处理像素宽高比。 |
| [fsGetPixelFormatsSupported](../selector-descriptions#fsgetpixelformatssupported) | 是 | 获取支持的像素格式。迭代调用直到所有格式都已给出。 |
| [fsCacheOnLoad](../selector-descriptions#fscacheonload) | 是 | 返回 fsDoNotCacheOnLoad 以禁用此过滤器的插件缓存。 |
