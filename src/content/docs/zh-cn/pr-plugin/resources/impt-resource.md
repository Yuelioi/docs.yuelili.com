---
title: IMPT 资源
---
# IMPT 资源

Premiere Pro 会查找 IMPT 资源以将插件识别为导入器。

在 Premiere Pro 1.0 之前，IMPT 资源还用于声明导入器支持的文件扩展名。

由于文件扩展名现在在 `imGetIndFormat` 期间声明，Premiere Pro 不再使用 IMPT 资源中的 `drawtype` 四字符代码。

然而，为了使导入器在 macOS 上的 After Effects 中正常运行，需要一个唯一的 `drawtype` 四字符代码。

不要使用 `0x4D4F6F76`。这已经被 After Effects 保留。

```cpp
1000 IMPT DISCARDABLE BEGIN
0x12345678 // 在此处放置您自己唯一的十六进制代码
END
```
