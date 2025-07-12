---
title: usd_setprimvarindices
order: 135
---
| Since | 18.0 |
| --- | --- |

`int  usd_setprimvarindices(int stagehandle, string primpath, string name, int indices[])`

此函数为给定的primvar设置索引，从而使其成为索引primvar（如果原本不是的话）。

`stagehandle`

要写入的stage的句柄。目前唯一有效的值是`0`，表示节点中的当前stage。（此参数未来可能用于允许写入其他stage。）

`primpath`

图元的路径。

`name`

Primvar名称（不带命名空间）。

`indices`

要设置的索引数组。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 设置primvar的值和索引。
float values[] = array(0, 100, 200, 300, 400, 500);
int indices[] = array(5,5,4,4,3,3,2,2,1,1,0,0);
usd_setprimvar(0, "/geo/mesh", "primvar_name", values); 
usd_setprimvarindices(0, "/geo/mesh", "primvar_name", indices);

```
