---
title: usd_isprimvar
order: 78
---
| 始于版本 | 18.0 |
| --- | --- |

`int  usd_isprimvar(<stage>stage, string primpath, string name)`

此函数检查图元是否具有指定名称的primvar属性。

`<stage>`

当在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取对应输入的stage。该整数等价于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已处理stage（如"op:/stage/lop_node"）。

`primpath`

图元路径。

`name`

Primvar属性名（不包含命名空间）。

返回值

如果primvar直接存在于指定图元上则返回`1`，否则返回`0`。

## 示例

```vex
// 检查球体图元是否具有名为"some_primvar"的primvar属性
int is_primvar = usd_isprimvar(0, "/geometry/sphere", "some_primvar");

```
