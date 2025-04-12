---
title: inedgegroup
order: 7
---
`int  inedgegroup(string filename, string groupname, int pointnum0, int pointnum1)`

`int  inedgegroup(int input, string groupname, int pointnum0, int pointnum1)`

如果由点对指定的边位于字符串指定的组中，则返回1。如果组不存在或边不包含在组中，则此函数返回0。

可以使用临时组，例如`p29-30`。它遵循SOP组的命名约定，特别是空字符串表示所有边。
