---
title: usd_iskind
order: 74
---
| 始于版本 | 18.0 |
| --- | --- |

`int  usd_iskind(<stage>stage, string primpath, string kind)`

此函数用于检查指定图元(primitive)是否属于特定类型(kind)，例如装配体(assembly)、组件(component)等。

`<stage>`

在节点上下文(如wrangle LOP节点)中运行时，此参数可以是表示输入编号的整数(从0开始)，用于读取对应输入的stage。该整数等同于以字符串形式引用特定输入，例如"opinput:0"。

此参数也可用于引用USD文件(如"/path/to/file.usd")，或通过"op:"路径前缀引用其他LOP节点已烹饪(cooked)的stage(如"op:/stage/lop_node")。

`primpath`

目标图元的路径。

`kind`

要检查的类型名称。

返回值

如果图元属于指定类型则返回1，否则返回0。

## 示例

```vex
// 检查球体图元是否为装配体类型
int is_assembly = usd_iskind(0, "/geometry/sphere", "assembly");

```
