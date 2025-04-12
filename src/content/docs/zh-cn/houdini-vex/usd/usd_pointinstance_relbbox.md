---
title: usd_pointinstance_relbbox
order: 103
---
| 版本 | 18.0 |
| --- | --- |

`vector  usd_pointinstance_relbbox(<stage>stage, string primpath, int instance_index, string purpose, vector position)`

返回给定点相对于点实例化器中实例包围盒的相对位置。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取舞台。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或使用`op:`作为路径前缀引用其他LOP节点的已处理舞台（例如"op:/stage/lop_node"）。

`primpath`

图元路径。

`instance_index`

要使用其包围盒的实例索引。

`purpose`

用于计算包围盒的图元用途（例如"render"）。

返回值

给定点相对于图元包围盒的相对位置。

## 示例

```vex
// 获取点相对于第一个实例包围盒的位置
vector pt = {1, 0, 0};
vector rel_pt = usd_pointinstance_relbbox(0, "/src/instanced_spheres", 0, "render", pt);

```
