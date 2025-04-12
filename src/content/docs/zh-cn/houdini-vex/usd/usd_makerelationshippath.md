---
title: usd_makerelationshippath
order: 89
---
| 版本 | 18.0 |
| --- | --- |

`string  usd_makerelationshippath(<stage>stage, string primpath, string name)`

该函数返回指定关系的完整路径。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，该参数可以是表示输入编号的整数（从0开始）以读取对应输入的舞台。该整数等价于使用字符串形式引用特定输入，例如"opinput:0"。

该参数也可用于引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已烹饪舞台（如"op:/stage/lop_node"）。

`primpath`

图元路径。

`name`

关系名称。

返回值

给定关系的完整路径。

## 示例

```vex
// 获取立方体图元上"relationship_name"关系的完整路径
string relationship_path = usd_makerelationshippath(0, "/geo/cube", "relationship_name");

```
