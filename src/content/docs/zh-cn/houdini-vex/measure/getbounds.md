---
title: getbounds
order: 8
---

`int  getbounds(string filename, vector &min, vector &max)`

`int  getbounds(string filename, string group, vector &min, vector &max)`

返回指定文件名对应几何体的边界框。边界框的最小角点坐标将通过min参数返回，最大角点坐标将通过max参数返回。
该函数始终返回1。

如果指定了group参数，则仅计算该组内的图元。group字段的行为与SOPs中的一致。空字符串表示包含所有图元。
临时模式如`0-10`和`@Cd.x>0`同样有效。

建议优先考虑使用`getbbox()`函数。
