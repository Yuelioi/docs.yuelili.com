---
title: 本地化
---
# 本地化

从 CC 版本开始，PF App Suite（[实用工具函数](../../effect-details/useful-utility-functions)）增加了 `PF_AppGetLanguage()` 函数，用于查询当前语言，以便插件可以使用正确的语言字符串。

当向 AE 传递字符串时，API 的某些部分接受 Unicode。在其他区域，例如在 `PF_Cmd_PARAM_SETUP` 期间指定效果参数名称时，您需要以字符字符串的形式传递名称。对于这些非 Unicode 字符串，AE 会将字符串解释为使用应用程序当前区域设置的多字节编码。要构建这些字符串，在 Windows 上可以使用 `WideCharToMultiByte()` 函数，并将 `CP_OEMCP` 指定为第一个参数。在 macOS 上，使用 `GetApplicationTextEncoding()` 返回的编码。

在 AE 中测试不同语言不需要重新安装操作系统，但需要重新安装 AE：

### Windows

- 将系统区域设置更改为目标语言（控制面板 > 区域和语言 > 管理选项卡 > 更改系统区域设置）
- 重启计算机
- 安装相应语言的 AE。

### MacOS

- 将目标语言设置为首选语言列表中的主要语言
- 安装相应语言的 AE。
