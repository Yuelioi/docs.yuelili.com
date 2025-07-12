---
title: 本地化
---
# 本地化

Premiere Pro 使用的语言由用户在安装时决定。

插件可以从以下位置确定此设置：

在 Windows 上，位于注册表的 `HKEY_CURRENT_USER\Software\Adobe\Premiere Pro\[version]` 中，键名为 `"Language"`。

在 macOS 上，位于 `~/Library/Preferences/com.Adobe.Premiere Pro.[version].plist` 中，路径为 `Root > Language`。

Premiere Pro 在启动时会将该字符串设置为以下值之一。

| 语言 | 字符串 |
| --- | --- |
| 英语 | `en_US` |
| 法语 | `fr_FR` |
| 德语 | `de_DE` |
| 意大利语 | `it_IT` |
| 日语 | `ja_JP` |
| 西班牙语 | `es_ES` |
| 韩语 | `ko_KR` |
| 中文（CC 新增） | `zh_CN` |
| 俄语（CC 2014 新增） | `ru_RU` |
| 巴西葡萄牙语（CC 2014 新增） | `pt_BR` |

更改字符串不会改变 Premiere Pro 运行的语言，除非您通过在以下位置放置文件来覆盖应用程序语言：

Windows: `[应用程序安装文件夹]\lang-override.txt`

macOS: `[应用程序安装文件夹]/[Premiere Pro 应用程序包]/Contents/lang-override.txt`
