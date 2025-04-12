---
title: hasmetadata
order: 11
---

| 上下文 | [cop2](../contexts/cop2.html) |
| --- | --- |

`int  hasmetadata(int opinput, string name)`

此函数用于检查VEX COP输入`opinput`所连接的COP上是否存在名为`name`的元数据。如果存在则返回1，否则返回0。

`opinput`

要读取的输入编号，从0开始计数。例如，第一个输入为0，第二个输入为1，依此类推。

`name`

要检查的元数据名称。
