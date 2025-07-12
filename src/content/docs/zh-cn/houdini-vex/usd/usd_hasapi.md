---
title: usd_hasapi
order: 49
---
| 始于版本 | 18.0 |
| --- | --- |

`int  usd_hasapi(<stage>stage, string primpath, string api)`

此函数用于检查指定图元是否遵循给定的API。即判断该API是否已应用于此图元。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号的整数（从0开始），用于读取对应的stage。该整数等同于引用特定输入的字符串形式，例如"opinput:0"。

也可用此参数引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点处理完成的stage（如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`api`

要检查的API模式名称或其别名。

返回值

若图元具有指定API则返回1，否则返回0。

## 示例

```vex
// 检查图元是否应用了USD几何模型API
int has_geom_model_api_by_name = usd_hasapi(0, "/geo/sphere", "UsdGeomModelAPI");
int has_geom_model_api_by_alias = usd_hasapi(0, "/geo/sphere", "GeomModelAPI");

```
