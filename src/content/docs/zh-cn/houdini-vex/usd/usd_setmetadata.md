---
title: usd_setmetadata
order: 130
---
| 版本 | 18.0 |
| --- | --- |

`int  usd_setmetadata(int stagehandle, string path, string name, <type>value)`

`int  usd_setmetadata(int stagehandle, string path, string name, <type>value[])`

此函数用于设置元数据值。

`stagehandle`

要写入的舞台句柄。目前唯一有效的值是`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台。）

`path`

对象路径。即图元、属性或关系。

`name`

元数据名称。

名称可以命名空间化以访问（可能是嵌套的）VtDictionaries中的值，例如自定义数据字典，如"customData:name"或"customData:name:subname"。对于非命名空间的名称，对象模式需要声明给定的元数据才能访问，例如"active"或"documentation"。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 在球体上设置文档字符串
usd_setmetadata(0, "/geo/sphere", "documentation", "这是新的文档说明");

// 在球体上设置一些自定义数据的值
usd_setmetadata(0, "/geo/sphere", "customData:a_float", 0.25);
usd_setmetadata(0, "/geo/sphere", "customData:a_string", "foo bar baz");
usd_setmetadata(0, "/geo/sphere", "customData:a_vector", {1.25, 1.50, 1.75});

float f_arr[] = {0, 0.25, 0.5, 0.75, 1};
usd_setmetadata(0, "/geo/sphere", "customData:a_float_array", f_arr);

// 在属性上设置元数据值
string attrib_path = usd_makeattribpath(0, "/geo/sphere", "attrib_name");
sd_setmetadata(0, attrib_path, "customData:foo", 1.25);

```
