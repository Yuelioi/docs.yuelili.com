---
title: usd_relationshiptargets
order: 119
---

| 版本 | 18.0 |
| --- | --- |

`string [] usd_relationshiptargets(<stage>stage, string primpath, string name)`

此函数返回指定关系的目标列表。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取对应输入的stage。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已处理stage（例如"op:/stage/lop_node"）。

`primpath`

图元路径。

`name`

关系名称。

返回值

关系中的目标列表。

## 示例

```vex
// 获取立方体"some_relationship"关系中的目标列表
string targets[] = usd_relationshiptargets(0, "/geo/cube", "some_relationship");

```
