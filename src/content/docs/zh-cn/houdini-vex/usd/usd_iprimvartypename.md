---
title: usd_iprimvartypename
order: 60
---
| 版本 | 19.0 |
| --- | --- |

`string  usd_iprimvartypename(<stage>stage, string primpath, string name)`

此函数返回在指定图元上直接找到或从其祖先继承的primvar的类型名称。类型名称取自USD值类型注册表，例如"float"、"vector3d"、"double3"等。

`<stage>`

在节点上下文(如wrangle LOP)中运行时，此参数可以是表示输入编号(从0开始)的整数，用于读取stage。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件(例如"/path/to/file.usd")，或使用`op:`作为路径前缀引用其他LOP节点的cooked stage(例如"op:/stage/lop_node")。

`primpath`

图元的路径。

`name`

Primvar名称(不带命名空间)。

返回值

值类型注册表中使用的primvar类型名称。例如"float"、"vector3d"、"double3"等。

## 示例

```vex
// 获取cube或其祖先上primvar的类型名称
string type_name = usd_iprimvartypename(0, "/geo/cube", "primvar_name");

```
