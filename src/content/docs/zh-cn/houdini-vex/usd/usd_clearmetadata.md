---
title: usd_clearmetadata
order: 29
---
| 始于版本 | 18.0 |
| --- | --- |

`int  usd_clearmetadata(int stagehandle, string path, string name)`

此函数用于清除指定元数据的值。

`stagehandle`

要写入的舞台句柄。当前唯一有效值是`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台）

`path`

对象路径。即图元（primitive）、属性（attribute）或关系（relationship）的路径。

`name`

元数据名称。

名称可以使用命名空间来访问（可能嵌套的）VtDictionaries中的值，例如自定义数据字典，如"customData:name"或"customData:name:subname"。对于非命名空间的名称，对象模式需要声明特定的元数据才能访问，例如"active"或"documentation"。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 清除元数据值
usd_clearmetadata(0, "/geo/sphere", "customData:some_name");

```
