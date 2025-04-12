---
title: getgroupid
order: 15
---
| 上下文 | [着色](../contexts/shading.html) |
| --- | --- |

`int  getgroupid()`

返回包含当前着色面的图元组的ID。
该ID是该组在细节中的索引。如果图元属于
多个组，则会将它们的索引相加来计算返回的ID。
