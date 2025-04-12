---
title: isshadowray
order: 46
---
| 上下文 | [surface](../contexts/surface.html) |
| --- | --- |

`int  isshadowray()`

如果着色器被调用以评估阴影射线的不透明度，则返回1；如果着色器被调用以评估表面颜色，则返回0。

当表面正在遮挡另一个表面时，可使用此函数计算不同的不透明度。
