---
title: usd_primvarelementsize
order: 108
---
| 始于版本 | 18.0 |
| --- | --- |

`int  usd_primvarelementsize(<stage>stage, string primpath, string name)`

此函数返回在指定图元上直接找到的primvar的元素大小。

primvar元素大小适用于数组型primvar，但它并不表示数组的长度。它指定应将多少个连续的数组元素作为一个原子元素在几何图元上进行插值。例如，在网格上，数组长度与元素大小的关系为：`数组长度 = 元素大小 * 面数`。

在大多数情况下，元素大小为`1`。

注意：元素大小是USD特有的概念，不同于通过[usd_primvarsize](/zh-cn/houdini-vex/usd/usd_primvarsize "返回USD图元上primvar的元组大小")获取的VEX元组大小，也不同于通过[usd_primvarlen](/zh-cn/houdini-vex/usd/usd_primvarlen "返回USD图元上数组型primvar的长度")获取的VEX数组长度。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取对应输入的stage。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

也可以使用此参数引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点处理后的stage（如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`name`

primvar名称（不带命名空间）。

返回值

primvar的元素大小。

## 示例

```vex
// 获取立方体图元上某个primvar的元素大小
int element_size = usd_primvarelementsize(0, "/geo/cube", "primvar_name");

```
