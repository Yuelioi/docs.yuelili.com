---
title: ppro
---
# Premiere Pro 和其他宿主软件

Adobe Premiere Pro 和 Adobe Premiere Elements 都支持 After Effects 的效果 API，如第 2、3 和 5 章所述。

它们提供了完整的宿主实现，但缺少一些关键功能，例如与 3D 相关的调用（辅助通道信息、相机和灯光）、16 位和 SmartFX 支持，以及 After Effects 的 AEGP API 提供的其他实用函数。

Premiere Pro 和 Premiere Elements 都将 `PF_InData>appl_id` 设置为 'PrMr'。

在本章中，我们将描述 Premiere Pro 中的 AE API 支持，但通常相同支持也存在于相应版本的 Premiere Elements 中。

如果需要区分 Premiere Pro 和 Premiere Elements，可以使用 Premiere 特定的 App Info Suite，该套件可从 [Premiere Pro SDK](http://ppro-plugin-sdk.aenhancers.com) 头文件中获取。

| 应用程序版本 | PF_InData> version.major | PF_InData> version.minor |
| --- | --- | --- |
| Premiere Pro CC 到 Premiere Pro CC 2019 | 13 | 4 |
| Premiere Pro CS6 | 13 | 2 |
| Premiere Pro CS5.5 | 13 | 1 |
| Premiere Pro CS5, Premiere Elements 9 | 13 | 0 |
| Premiere Pro CS4, Premiere Elements 8 | 12 | 5 |
| Premiere Pro CS3, Premiere Elements 4 和 7 | 12 | 4 |
| Premiere Pro 2.0, Premiere Elements 3 | 12 | 3 |
| Premiere Pro 1.5, Premiere Elements 2 | 12 | 2 |
| Premiere Pro 1.0, Premiere Elements 1 | 12 | 1 |

请注意，Premiere Pro 和 Premiere Elements 使用的版本号并不意味着它们支持与 After Effects 相同版本的 API 功能。它仅用于区分不同版本。
