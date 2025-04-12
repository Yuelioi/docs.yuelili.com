---
title: usd_drawmode
order: 36
---
| 始于版本 | 17.5 |
| --- | --- |

`string  usd_drawmode(<stage>stage, string primpath)`

此函数返回指定图元的绘制模式，例如"default"（默认）、"origin"（原点）、"bounds"（边界框）等。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号的整数（从0开始），用于读取对应的stage。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

也可用此参数引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点已处理的stage（如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

返回值

指定图元的绘制模式。

## 示例

```vex
// 获取立方体的绘制模式，如"default"、"bounds"等
string draw_mode = usd_drawmode(0, "/geo/cube");

```
