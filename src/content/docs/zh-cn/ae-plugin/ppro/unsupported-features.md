---
title: 不支持的功能
---
# 不支持的功能

目前已知 Premiere Pro 不支持 After Effects API 的以下功能：

（如果您希望支持带有“-”符号的功能，请通过邮件联系 [Premiere Pro API 工程团队](mailto:bbb@adobe.com) 提交功能请求。以“F”开头的数字是功能请求编号，其他的是错误编号）

- F7233 - 支持 extent_hint
- F7835 - 单个插件中支持多个 PiPL
- F7836 - 支持 AEGP
- F7517 - 音频支持 - 如果插件在 PF_Cmd_GLOBAL_SETUP 中设置了 PF_OutFlag_I_USE_AUDIO，则插件将完全不会被加载
- F9355 - 支持 PF_ParamFlag_COLLAPSE_TWIRLY
- PF World Transform Suite
- PF AE Channel Suite
- AE 的高位色深支持实现
- SmartFX
- 3D 支持
- PF_SUBPIXEL_SAMPLE(), PF_GET_PIXEL_DATA16()

---

## 但是……如果不能运行，为什么要加载它？！

Premiere Pro 会尝试加载 AEGP 插件。为了检测这一点并避免任何问题行为，您的命令钩子函数可以访问一个仅由 After Effects 提供的套件；AEGP_CanvasSuite 是一个很好的候选。

如果该套件不存在，则返回错误。插件将被放入 Premiere Pro 的“不加载这些”列表中。
