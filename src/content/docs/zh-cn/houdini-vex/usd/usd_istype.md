---
title: usd_istype
order: 82
---
| 版本 | 18.0 |
| --- | --- |

`int  usd_istype(<stage>stage, string primpath, string type)`

此函数用于检查指定图元是否为给定类型或继承自给定类型（例如立方体、UsdGeomBoundable等）。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号的整数（从0开始），用于读取舞台。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或使用`op:`作为路径前缀引用其他LOP节点的已处理舞台（例如"op:/stage/lop_node"）。

`primpath`

图元的路径。

`type`

要检查的类型名称或别名。

返回值

如果图元属于给定类型则返回1，否则返回0。

## 示例

```vex
// 检查图元是否为立方体且可绑定
int is_cube_by_alias = usd_istype(0, "/geo/cube", "Cube");
int is_cube_by_name = usd_istype(0, "/geo/cube", "UsdGeomCube");
int is_boundable_by_name = usd_istype(0, "/geo/cube", "UsdGeomBoundable");

```
