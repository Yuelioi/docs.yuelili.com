---
title: usd_iprimvarnames
order: 57
---

| 始于版本 | 19.0 |
| --- | --- |

`string [] usd_iprimvarnames(<stage>stage, string primpath)`

此函数返回可直接在指定图元上获取或从其祖先图元继承的primvar名称列表。

`<stage>`

在节点上下文(如wrangle LOP)中运行时，此参数可以是表示输入编号(从0开始)的整数，用于读取对应输入的stage。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

也可用此参数引用USD文件(如"/path/to/file.usd")，或通过`op:`路径前缀引用其他LOP节点处理完成的stage(如"op:/stage/lop_node")。

`primpath`

目标图元的路径。

返回值

包含该图元及其祖先图元primvar名称的字符串数组。

## 示例

```vex
// 获取图元及其祖先的primvar名称
string primvar_names[] = usd_iprimvarnames(0, "/geo/src_sphere");

```
