---
title: usd_makepropertypath
order: 88
---
| 始于版本 | 18.0 |
| --- | --- |

`string  usd_makepropertypath(<stage>stage, string primpath, string name)`

此函数返回给定属性的完整路径。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取对应输入中的stage。该整数等价于使用字符串形式引用特定输入，例如"opinput:0"。

此参数也可用于引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点已处理的stage（如"op:/stage/lop_node"）。

`primpath`

图元(primitive)的路径。

`name`

属性名称。

返回值

给定属性的完整路径。

## 示例

```vex
// 获取立方体图元上"prop_name"属性的完整路径
string prop_path = usd_makepropertypath(0, "/geo/cube", "prop_name");

```
