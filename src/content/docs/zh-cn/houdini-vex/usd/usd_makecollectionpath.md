---
title: usd_makecollectionpath
order: 87
---
| 版本 | 18.0 |
| --- | --- |

`string  usd_makecollectionpath(<stage>stage, string primpath, string name)`

该函数返回指定集合的完整路径。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，该参数可以是表示输入编号的整数（从0开始），用于读取舞台。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已处理舞台（如"op:/stage/lop_node"）。

`primpath`

图元的路径。

`name`

集合名称。

返回值

指定集合的完整路径。

## 示例

```vex
// 获取立方体图元上"some_collection"集合的完整路径
string collection_path = usd_makecollectionpath(0, "/geo/cube", "some_collection");

```
