---
title: 跨多个版本的兼容性
---
# 跨多个版本的兼容性？

通常，您应该使用最新的 After Effects SDK 头文件编译您的插件。这使得最新的套件和 API 功能可用于您的插件。当新版本的 After Effects 发布时，通常不需要提供新版本的插件，除非您希望利用新 SDK 中提供的新功能。然而，在声明与新版本的兼容性之前，您应该始终在新版本的 After Effects 中测试您的插件。

您应该在插件支持的每个 After Effects 版本中彻底测试您的插件。如果您需要添加仅在特定版本的 After Effects 中运行的代码块，您可以始终检查 [PF_InData](../../effect-basics/PF_InData).version 中的 API 版本（对于效果），或者在 [入口函数](../../aegps/implementation#entry-point) 中传递给您的 AEGP 的 major 和 minor_versionL。

为了进行更精确的版本检查，插件可以使用 `AEGP_ExecuteScript` ([AEGP_UtilitySuite6](../../aegps/aegp-suites#aegp_utilitysuite6)) 运行脚本，查询以下属性之一：

```cpp
app.version - 例如 11.0.1x12
app.buildNumber - 例如 12.
```

---

## API 版本

| 版本 | 效果 API 版本 | AEGP API 版本 |
| --- | --- | --- |
| 22.0 | 13.27 | |
| 18.2 | 13.25 | |
| 18.0 | 13.24 | |
| 17.7 | 13.23 | |
| 17.6 | 13.22 | |
| 17.5 | 13.21 | |
| 17.3 | 13.20 | |
| 17.1 | 13.19 | |
| 17.0 | 13.18 | |
| 16.1 | 13.17 | |
| 16.0 | 13.16 | |
| 15.0 | 13.15 | |
| CC 2017.1 (14.2) | 13.14 | |
| CC 2017 (14.0) | 13.13 | 114.0 |
| CC 2015.3 (13.8) | 13.11 | 113.8 |
| CC 2015 (13.7) | 13.10 | 113.7 |
| CC 2015 (13.6) | 13.10 | |
| CC 2015 (13.5, 13.5.1) | 13.9 | 113.5 |
| CC 2014 (13.0-13.2) | 13.7 | 113 |
| CC (12.2) | 13.6 | 112.2 |
| CC (12.1) | 13.5 | 112.1 |
| CC (12.0) | 13.4 | 112.0 |
| CS6.0.1 (11.0.1) | 13.3 | 111.0 |
| CS6 (11.0) | 13.2 | 111.0 |
| CS5.5 (10.5) | 13.1 | 17.0 |
| CS5 (10.0) | 13.0 | 17.0 |
| CS4 (9.0) | 12.14 | 16.24 |
| CS3 (8.0) | 12.13 | 16.24 |
| 7.0 | 12.12 | |
| 6.5, 6.0 | 12.10 （如果需要区分 6.0 和 6.5，请检查更新的 AEGP 套件是否存在。） | |
| 5.0 | 12.5 | |
| 4.1 | 12.2 | |
| 3.1 | 11.6 | |
