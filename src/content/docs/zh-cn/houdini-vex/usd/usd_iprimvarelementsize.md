---
title: usd_iprimvarelementsize
order: 53
---
| Since | 19.0 |
| --- | --- |

`int  usd_iprimvarelementsize(<stage>stage, string primpath, string name)`

此函数返回在指定图元上直接找到或从其祖先继承的primvar的元素大小。

primvar元素大小适用于数组primvars，但它并不编码数组的长度。它指定应将多少个连续的数组元素作为一个原子元素在几何图元(gprim)上进行插值。因此，在网格上，数组长度与元素大小的关系如下：`数组长度 = 元素大小 * 面数`。

在大多数情况下，元素大小为`1`。

请注意，元素大小是USD概念，不同于通过[usd_iprimvarsize](/zh-cn/houdini-vex/usd/usd_iprimvarsize "返回USD图元或其祖先上primvar的元组大小")获取的VEX元组大小，也不同于通过[usd_iprimvarlen](/zh-cn/houdini-vex/usd/usd_iprimvarlen "返回USD图元或其祖先上数组primvar的长度")获取的VEX数组长度。

`<stage>`

在节点上下文(如wrangle LOP)中运行时，此参数可以是表示输入编号(从0开始)的整数，用于从中读取stage。该整数等同于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件(例如"/path/to/file.usd")，或使用`op:`作为路径前缀引用另一个LOP节点的已处理stage(例如"op:/stage/lop_node")。

`primpath`

图元的路径。

`name`

primvar名称(不带命名空间)。

返回值

primvar的元素大小。

## 示例

```vex
// 获取立方体图元或其祖先上primvar的元素大小
int element_size = usd_iprimvarelementsize(0, "/geo/cube", "primvar_name");

```
