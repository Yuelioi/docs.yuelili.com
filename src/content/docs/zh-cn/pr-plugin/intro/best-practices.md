---
title: 最佳实践
---
# 最佳实践

当一个插件接收到一个它无法识别的选择器时，它应该始终返回特定于插件类型的代码，表示该选择器不受支持（即 `imUnsupported`、`rmUnsupported` 等）。

通过这种方式，可以向 API 添加新的选择器，而旧版插件将自动回答它们是否支持该选择器。

---

## 结构对齐

所有示例项目都包含 `PrSDKTypes.h`。

此头文件设置了正确的（单字节）结构对齐，并指定了必要的（C 风格）外部链接。
