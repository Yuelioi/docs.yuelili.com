---
title: usd_isattrib
order: 67
---
| 始于版本 | 17.5 |
| --- | --- |

`int  usd_isattrib(<stage>stage, string primpath, string name)`

此函数用于检查指定图元是否具有给定名称的属性。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号的整数（从0开始），用于读取对应输入的舞台。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或通过"op:"路径前缀引用其他LOP节点处理后的舞台（例如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`name`

属性名称。

返回值

如果图元具有指定属性则返回`1`，否则返回`0`。

## 示例

```vex
// 检查球体是否具有"some_attribute"属性
int is_valid_attrib = usd_isattrib(0, "/geometry/sphere", "some_attribute");

```
