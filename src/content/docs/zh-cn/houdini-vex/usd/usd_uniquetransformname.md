---
title: usd_uniquetransformname
order: 150
---

| 版本 | 18.0 |
| --- | --- |

`string  usd_uniquetransformname(<stage>stage, string primpath, int transformtype, string suffix)`

该函数根据变换操作类型和后缀，返回一个在当前图元上不存在的唯一完整变换操作名称。可用于确保操作名称使用的后缀不会与任何现有名称冲突。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号的整数（从0开始），用于读取舞台。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

也可用此参数引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已处理舞台（如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`transformtype`

变换类型的数字编码。参见VEX头文件"usd.h"中的定义，如`USD_XFORM_TRANSLATE`、`USD_XFORM_TRANSFORM`或`USD_XFORM_ROTATE_XYZ`。

`suffix`

变换操作的后缀。

USD图元通过一系列变换操作进行空间变换，这些操作的完整名称按顺序列在`xformOpOrder`属性中。完整名称采用命名空间格式，编码了变换操作类型（如平移或旋转），并可包含后缀。若图元存在多个同类型操作，则需通过后缀加以区分。此参数即指定该后缀。

返回值

唯一的变换操作完整名称。

## 示例

```vex
// 为带有"cone_pivot"后缀的平移操作构造唯一完整名称
string unique_xform_name = usd_uniquetransformname(0, "/geo/cone", USD_XFORM_TRANSLATE, "cone_pivot");

```
