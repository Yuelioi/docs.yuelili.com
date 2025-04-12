---
title: usd_primvartypename
order: 115
---
| 始于版本 | 18.0 |
| --- | --- |

`string  usd_primvartypename(<stage>stage, string primpath, string name)`

此函数返回在指定图元上直接找到的primvar的类型名称。类型名称取自USD值类型注册表，例如"float"、"vector3d"、"double3"等。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号的整数（从0开始）以读取对应阶段。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

也可用此参数引用USD文件（如"/path/to/file.usd"），或使用`op:`作为路径前缀引用其他LOP节点的已处理阶段（如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`name`

Primvar名称（不带命名空间）。

返回值

值类型注册表中使用的primvar类型名称。例如"float"、"vector3d"、"double3"等。

## 示例

```vex
// 获取立方体上primvar的类型名称
string type_name = usd_primvartypename(0, "/geo/cube", "primvar_name");

```
