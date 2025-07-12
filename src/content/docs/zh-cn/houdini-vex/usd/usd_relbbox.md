---
title: usd_relbbox
order: 120
---

| Since | 18.0 |
| --- | --- |

`vector  usd_relbbox(<stage>stage, string primpath, string purpose, vector position)`

返回给定点相对于图元边界框的相对位置。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号的整数（从0开始）以读取对应输入中的stage。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

你也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已计算stage（例如"op:/stage/lop_node"）。

`primpath`

图元的路径。

`purpose`

用于计算边界框的图元用途（例如"render"）。

返回值

给定点相对于图元边界框的相对位置。

示例

## 示例

```vex
// 获取点的相对位置
vector pt = {1, 0, 0};
vector rel_pt = usd_relbbox(0, "/src/sphere", "render", pt);

```
