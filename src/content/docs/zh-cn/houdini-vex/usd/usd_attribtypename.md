---
title: usd_attribtypename
order: 22
---

| 版本 | 17.5 |
| --- | --- |

`string  usd_attribtypename(<stage>stage, string primpath, string name)`

此函数返回属性类型名称，该名称在USD值类型注册表中被识别。例如："float"、"vector3d"、"double3"等。

`<stage>`

当在节点上下文（如wrangle LOP）中运行时，此参数可以是一个表示输入编号的整数（从0开始）以读取stage。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或使用`op:`作为路径前缀引用其他LOP节点的已处理stage（例如"op:/stage/lop_node"）。

`primpath`

图元路径。

`name`

属性名称。

返回值

值类型注册表中使用的属性类型名称。例如："float"、"vector3d"、"double3"等。

## 示例

```vex
// 获取属性的类型名称
string type_name = usd_attribtypename(0, "/geo/cube", "attribute_name");

```
