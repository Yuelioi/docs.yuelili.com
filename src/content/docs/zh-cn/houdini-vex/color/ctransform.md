---
title: ctransform
order: 2
---
`vector  ctransform(string fromspace, string tospace, vector clr)`

`vector  ctransform(string tospace, vector clr)`

如果未指定fromspace，则默认使用`"cspace:rgb"`。

将颜色元组clr从一个色彩空间转换到另一个色彩空间。

fromspace和tospace可用的参数包括：
`"cspace:rgb"`、`"cspace:hsl"`、`"cspace:hsv"`、`"cspace:XYZ"`、
`"cspace:Lab"`和`"cspace:tmi"`。

注意事项

## 注意事项

- 基于色相的系统会进行归一化处理，色相值范围从`0`到`1`。LAB和TMI空间不做归一化处理。
- 对于`"cspace:rgb"`，假定原色位于线性NTSC空间（gamma值为1.0），使用C标准白点。
- 当在XYZ和LAB空间之间转换时，使用C标准白点作为转换参考。
