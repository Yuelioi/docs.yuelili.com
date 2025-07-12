---
title: usd_haspayload
order: 50
---

| 版本 | 18.0 |
| --- | --- |

`int  usd_haspayload(<stage>stage, string primpath)`

判断图元是否包含有效载荷。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，该参数可以是表示输入编号的整数（从0开始），用于读取对应输入的USD场景。该整数等效于使用字符串形式引用特定输入，例如"opinput:0"。

此参数也可用于引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已处理场景（如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

返回值

若图元包含有效载荷则返回1，否则返回0。

## 示例

```vex
int has_payload = usd_haspayload(0, "/geo/sphere" );

```
